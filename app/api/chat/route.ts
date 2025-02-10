import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    console.log("Received request body:", body);

    const { messages } = body;
    if (!messages || !Array.isArray(messages)) {
      console.error("Invalid request format:", body);
      return NextResponse.json(
        { error: "Invalid request format" },
        { status: 400 }
      );
    }

    const apiKey = process.env.OPENROUTER_API_KEY;
    if (!apiKey) {
      console.error("Missing API key");
      return NextResponse.json(
        { error: "API key is missing" },
        { status: 500 }
      );
    }

    // Improved system message for direct responses
    const systemMessage = {
      role: "system",
      content: `You are TechSand AI, an AI assistant specializing in university-related topics, technology, and software development.
      - Respond in a direct, friendly, and conversational tone without over-explaining.
      - If greeted with 'hi', 'hello', or similar, respond naturally without stating thought processes.
      - Format responses clearly with concise paragraphs or bullet points for readability.
      - Keep answers straight to the point unless a detailed explanation is needed.
      - Politely guide users back to university-related or tech topics if they ask something off-topic.
      - Provide insights into academic resources, study strategies, and time management tips.
      - Explain technology concepts simply and provide relevant examples for better understanding.
      - When discussing TechSand, provide clear insights into its mission, technologies, and contributions.
      - Avoid robotic phrasing—respond as naturally as a human assistant would.`,
    };

    const filteredMessages = [systemMessage, ...messages];

    const response = await fetch(
      "https://openrouter.ai/api/v1/chat/completions",
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${apiKey}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          model: "deepseek/deepseek-r1-distill-llama-70b",
          messages: filteredMessages,
        }),
      }
    );

    console.log("OpenRouter response status:", response.status);

    if (!response.ok) {
      const errorText = await response.text();
      console.error("OpenRouter API error:", errorText);
      return NextResponse.json(
        {
          error: "Failed to fetch response from OpenRouter",
          details: errorText,
        },
        { status: response.status }
      );
    }

    const data = await response.json();
    console.log("OpenRouter response data:", data);
    return NextResponse.json(data);
  } catch (error) {
    console.error("Error processing request:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
