"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Link from "next/link";
import { io, type Socket } from "socket.io-client";
import * as Tone from "tone";
import { Edit3, Music, Music2, Timer } from "lucide-react";
import { solfegeNotes } from "@/lib/music/notes";
import {
  convertNoteToSolfege,
  convertSolfegeToNote,
} from "@/lib/music/encoder";

const SOCKET_URL = "https://socket.codecat.tw/";

export default function MusicPlayer() {
  const socketRef = useRef<Socket | null>(null);
  const timeOffsetRef = useRef(0);
  const synthRef = useRef<Tone.Synth | null>(null);
  const partRef = useRef<Tone.Part | null>(null);

  const [isPlaying, setIsPlaying] = useState(false);
  const [isReady, setIsReady] = useState(false);
  const [currentIndex, setCurrentIndex] = useState<number>(-1);

  // 停止並清除目前的演奏排程
  const stopPlayback = useCallback(() => {
    const transport = Tone.getTransport();
    transport.stop();
    transport.cancel();
    partRef.current?.dispose();
    partRef.current = null;
  }, []);

  // 進入頁面時連線，離開頁面時斷線並停止播放
  useEffect(() => {
    const socket = io(SOCKET_URL);
    socketRef.current = socket;

    return () => {
      socket.disconnect();
      socketRef.current = null;
      stopPlayback();
      synthRef.current?.dispose();
      synthRef.current = null;
    };
  }, [stopPlayback]);

  // 與伺服器對時
  const syncServerTime = () => {
    const start = Date.now();
    socketRef.current?.emit("get-server-time", (serverTime: number) => {
      const end = Date.now();
      const rtt = end - start;
      const estimatedServerTime = serverTime + rtt / 2;
      timeOffsetRef.current = estimatedServerTime - end;
      console.log("與伺服器時間差:", timeOffsetRef.current, "ms");
    });
  };

  const prepareAudio = async () => {
    await Tone.start();
    setIsReady(true);
    syncServerTime(); // 準備完成後對時
  };

  const playMusic = useCallback(
    (startAt: number) => {
      stopPlayback();
      setCurrentIndex(-1);
      setIsPlaying(true);

      if (!synthRef.current) {
        synthRef.current = new Tone.Synth().toDestination();
      }
      const synth = synthRef.current;

      const transport = Tone.getTransport();
      transport.timeSignature = [6, 8];
      transport.bpm.value = 75;

      let currentTime = 0;

      const part = new Tone.Part(
        (time, note) => {
          if (note.noteName !== "rest") {
            const actualNote = convertSolfegeToNote(note.noteName);
            synth.triggerAttackRelease(actualNote, note.duration, time);
          }

          Tone.getDraw().schedule(() => {
            setCurrentIndex((prev) => prev + 1);
          }, time);
        },
        solfegeNotes.map((note) => {
          const event = { time: currentTime, ...note };
          currentTime += Tone.Time(note.duration).toSeconds();
          return event;
        }),
      );
      partRef.current = part;
      part.start(0);

      transport.scheduleOnce((time) => {
        Tone.getDraw().schedule(() => setIsPlaying(false), time);
      }, currentTime);

      // 換算 Tone.js 中的時間點
      const adjustedStart =
        (startAt - Date.now() - timeOffsetRef.current) / 1000;
      console.log("預定播放時間距現在", adjustedStart, "秒");

      transport.start("+" + Math.max(adjustedStart, 0));
    },
    [stopPlayback],
  );

  const handlePlay = () => {
    socketRef.current?.emit("play-request", { triggeredAt: Date.now() });
  };

  // 準備完成後才接收播放事件
  useEffect(() => {
    const socket = socketRef.current;
    if (!isReady || !socket) return;

    const onPlay = ({ startAt }: { startAt: number }) => playMusic(startAt);
    socket.on("play", onPlay);

    return () => {
      socket.off("play", onPlay);
    };
  }, [isReady, playMusic]);

  return (
    <div className="mx-auto w-full max-w-2xl rounded-2xl border border-gray-300 bg-white p-6 dark:border-gray-700 dark:bg-zinc-800">
      <Link
        href="/music/edit"
        aria-label="音符配置工具"
        className="fixed right-6 bottom-6 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-blue-600 text-white transition hover:bg-blue-700"
      >
        <Edit3 className="h-6 w-6" />
      </Link>

      <h1 className="mb-6 flex items-center gap-2 text-3xl font-semibold text-gray-800 dark:text-gray-100">
        <Music className="h-8 w-8" />
        春日影演奏系統
      </h1>

      <div className="mb-8 flex justify-center">
        <button
          className={`cursor-pointer rounded-xl px-6 py-3 font-medium text-white transition-colors duration-300 ${
            isReady
              ? "bg-blue-500 hover:bg-blue-600"
              : "bg-green-500 hover:bg-green-600"
          } ${isPlaying ? "cursor-not-allowed opacity-50" : ""}`}
          onClick={isReady ? handlePlay : prepareAudio}
          disabled={isPlaying}
        >
          {isReady ? "開始演奏" : "加入等待"}
        </button>
      </div>

      <div>
        <h2 className="mb-4 flex items-center gap-2 text-2xl font-semibold text-gray-700 dark:text-gray-200">
          <Music2 className="h-6 w-6" />
          目前播放的音符
        </h2>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
          {[0, 1, 2].map((offset) => {
            const index = currentIndex + offset;
            const note = solfegeNotes[index];
            if (!note) return null;

            const label =
              note.noteName === "rest"
                ? "rest"
                : convertNoteToSolfege(convertSolfegeToNote(note.noteName));

            return (
              <div
                key={index}
                className={`rounded-xl p-4 text-center ${
                  offset === 0
                    ? "border-2 border-yellow-400 bg-yellow-100 dark:bg-yellow-900/40"
                    : "bg-gray-50 dark:bg-zinc-700"
                }`}
              >
                <div
                  className={`mb-1 text-xl font-bold ${
                    offset === 0
                      ? "text-yellow-600 dark:text-yellow-300"
                      : "text-gray-700 dark:text-gray-200"
                  }`}
                >
                  {label}
                </div>
                <div className="flex items-center justify-center gap-1 text-sm text-gray-500 dark:text-gray-400">
                  <Timer className="h-4 w-4" />
                  {note.duration}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
