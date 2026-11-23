"use client";

import { useState } from "react";

const notesMap = [
  "sol3",
  "ti3",
  "do4",
  "re4",
  "mi4",
  "fa4",
  "sol4",
  "la4",
  "ti4",
  "do5",
  "re5",
  "mi5",
  "fa5",
  "rest",
];
const noteDurations = ["2n", "4n", "8n", "16n", "2n.", "4n.", "8n.", "16n."];

export default function NoteEditor() {
  const [selectedDuration, setSelectedDuration] = useState("4n");
  const [noteSequence, setNoteSequence] = useState<
    { noteName: string; duration: string }[]
  >([]);

  const addNote = (note: string) => {
    setNoteSequence((prev) => [
      ...prev,
      { noteName: note, duration: selectedDuration },
    ]);
  };

  const removeLastNote = () => {
    setNoteSequence((prev) => prev.slice(0, -1));
  };

  return (
    <div className="mx-auto w-full max-w-xl text-gray-900 dark:text-gray-100">
      <h1 className="mb-4 text-2xl font-bold">音符配置工具</h1>

      <div className="mb-4">
        <label htmlFor="duration" className="mb-1 block font-semibold">
          選擇音符長度：
        </label>
        <select
          id="duration"
          className="rounded border border-gray-300 bg-white p-2 dark:border-gray-600 dark:bg-zinc-800"
          value={selectedDuration}
          onChange={(e) => setSelectedDuration(e.target.value)}
        >
          {noteDurations.map((duration) => (
            <option key={duration} value={duration}>
              {duration}
            </option>
          ))}
        </select>
      </div>

      <div className="mb-4 flex flex-wrap gap-2">
        {notesMap.map((note) => (
          <button
            key={note}
            onClick={() => addNote(note)}
            className="cursor-pointer rounded bg-blue-500 px-4 py-2 text-white hover:bg-blue-600"
          >
            {note}
          </button>
        ))}
      </div>

      <div className="mb-6">
        <button
          onClick={removeLastNote}
          className="cursor-pointer rounded bg-red-500 px-4 py-2 text-white hover:bg-red-600"
        >
          刪除上一個音符
        </button>
      </div>

      <div>
        <h2 className="mb-2 text-xl font-semibold">目前的音符配置：</h2>
        <pre className="overflow-x-auto rounded bg-gray-100 p-4 dark:bg-zinc-800">
          {`[ \n  ${noteSequence.map((note) => `{ noteName: "${note.noteName}", duration: "${note.duration}" }`).join(", \n  ")} \n]`}
        </pre>
      </div>
    </div>
  );
}
