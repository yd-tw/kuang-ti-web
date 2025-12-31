import { ImageResponse } from "next/og";
import { NextRequest } from "next/server";

export function GET(request: NextRequest) {
  const url = new URL(request.url);
  const title = url.searchParams.get("title") || "YD 楊光地";
  const subtitle = url.searchParams.get("subtitle") || "";

  return new ImageResponse(
    <div
      tw="flex flex-col w-full h-full items-center justify-center"
      style={{
        background: "linear-gradient(135deg, #1a1a2e, #16213e, #0f3460)",
        color: "#e0eaff",
        fontFamily: "'Orbitron', sans-serif",
      }}
    >
      <div
        tw="flex flex-col w-full h-full items-center justify-center"
        style={{
          textAlign: "center",
          padding: "40px",
        }}
      >
        <h2
          tw="text-4xl md:text-6xl font-bold tracking-tight"
          style={{
            textShadow: "0 0 20px rgba(255, 255, 255, 0.8)",
          }}
        >
          {title}
        </h2>
        <p
          tw="mt-4 text-xl md:text-2xl"
          style={{
            color: "#a4b0f5",
            maxWidth: "800px",
          }}
        >
          {subtitle}
        </p>
      </div>
    </div>,
    {
      width: 1200,
      height: 630,
    },
  );
}
