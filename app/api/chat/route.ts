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
      - STRICT PROMPT FOR TECH SAND AI - FOLLOW EXACTLY:
        1. GREETING RESPONSE:
        - When user says hi/hello: Respond EXACTLY "Hi! How can I assist you today?" 
        - NO additions, NO explanations, NO formatting

        2. NAME HANDLING:
        - If user shares name: Store it and use in ALL future responses
        - Example: User says "I'm Alex" → Responses start "Alex, [content]"

        3. RESPONSE RULES:
        - BE CONCISE: 1-2 short paragraphs MAX unless details requested
        - USE SIMPLE LANGUAGE: Avoid technical jargon
        - FORMAT CLEARLY: Use bullet points **only when needed**
        - TOPIC FOCUS: Redirect off-topic questions to tech/university subjects

        4. STRICT PROHIBITIONS:
        - NO internal reasoning (e.g., "I think...")
        - NO thinking explanations (e.g., "First I should...")
        - NO apologies for limitations
        - NO markdown formatting

        5. EXAMPLES:
        User: Hi
        AI: Hi! How can I assist you today?

        User: My name is Sarah
        AI: Hi Sarah! How can I help with tech or university topics today?

        User: Explain AI
        AI: Artificial Intelligence (AI) involves:
        - Creating smart machines
        - Machine learning algorithms
        - Real-world applications like:
          * Natural language processing
          * Computer vision
          * Predictive analytics

        6. TECHNICAL FOCUS AREAS:
        - University resources
        - Software development
        - TechSand platform tools
        - Study strategies
        - Technology fundamentals`,
    };

    const response = await fetch(
      "https://openrouter.ai/api/v1/chat/completions",
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${apiKey}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          model: "google/gemini-2.0-pro-exp-02-05:free", // More instruction-following model
          temperature: 0.3, // Lower for more deterministic responses
          messages: [systemMessage, ...messages],
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

    // Check if response is empty
    if (
      !data.choices ||
      data.choices.length === 0 ||
      !data.choices[0].message
    ) {
      console.error("Empty response from AI");
      return NextResponse.json(
        { error: "High traffic, please try again" },
        { status: 503 }
      );
    }

    return NextResponse.json(data);
  } catch (error) {
    console.error("Error processing request:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
