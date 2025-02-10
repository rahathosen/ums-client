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

    // Improved system message for natural responses
    const systemMessage = {
      role: "system",
      content: `You are an AI assistant specializing in university-related topics.  
      - Speak in a friendly and conversational tone.  
      - If the user says 'hi', 'hello', or similar greetings, respond warmly and casually before answering their query.  
      - Format your responses neatly with bullet points or paragraphs for clarity.  
      - Keep answers concise, unless a detailed response is specifically requested.  
      - If the user asks an off-topic question, politely redirect them to university-related subjects.`,
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
