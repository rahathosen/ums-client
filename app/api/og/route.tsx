/* eslint-disable @typescript-eslint/no-explicit-any */
import { ImageResponse } from "next/og";
import type { NextRequest } from "next/server";

export const runtime = "edge";

export async function GET(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);
    const title =
      searchParams.get("title") || "Techsand International University";

    return new ImageResponse(
      (
        <div
          style={{
            height: "100%",
            width: "100%",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "#ECE8DF",
            fontSize: 60,
            fontWeight: 800,
          }}
        >
          <div
            style={{
              backgroundImage: "linear-gradient(90deg, #800020, #ff6b6b)",
              backgroundClip: "text",
              WebkitBackgroundClip: "text",
              color: "transparent",
            }}
          >
            Techsand
          </div>
          <div
            style={{
              backgroundImage: "linear-gradient(90deg, #800020, #ff6b6b)",
              backgroundClip: "text",
              WebkitBackgroundClip: "text",
              color: "transparent",
              fontWeight: 800,
            }}
          >
            International University
          </div>
          <div
            style={{
              fontSize: 30,
              fontWeight: 700,
              marginTop: 20,
              maxWidth: "80%",
              textAlign: "center",
            }}
          >
            {title}
          </div>
        </div>
      ),
      {
        width: 1200,
        height: 630,
      }
    );
  } catch (e: any) {
    console.log(`${e.message}`);
    return new Response(`Failed to generate the image`, {
      status: 500,
    });
  }
}
