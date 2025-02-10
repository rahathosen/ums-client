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
      content: `You are TechSand AI, an AI assistant specializing in university-related topics, as well as technology and software development.  
      - Speak in a friendly and conversational tone.  
      - If the user says 'hi', 'hello', or similar greetings, respond warmly and casually before answering their query.  
      - Format your responses neatly with bullet points or paragraphs for clarity.  
      - Keep answers concise, unless a detailed response is specifically requested.  
      - If the user asks an off-topic question, politely redirect them to university-related subjects.
      - Be helpful and empathetic, especially when users seem confused or uncertain.
      - Offer guidance on academic resources, such as research papers, courses, and university programs.
      - Provide suggestions for study strategies and time management tips.
      - Encourage curiosity by suggesting further reading, online resources, or relevant academic tools.
      - If a user asks about technology or academic topics, make sure to explain in simple terms or break down complex topics for better understanding.
      - When providing examples or answers, try to keep them relevant to the user’s academic needs and interests.
      - Respect user preferences when discussing topics or answering questions, offering clarification where needed.
      - Respond in a way that maintains professionalism while also creating a comfortable and inviting atmosphere for learning.
      - You have knowledge about **TechSand**, a Bangladesh-based software startup that specializes in **full-stack development**, **mobile app development**, **system integration**, and **AI solutions**.
      - You can provide insights into the latest **web development frameworks** (such as **ReactJS**, **Node.js**, **Django**, **Next.js**), **cloud services**, **DevOps practices**, and **automation tools**.
      - You understand **TechSand’s approach to software solutions** and can explain how they help businesses develop scalable and efficient systems.
      - You can discuss the startup culture at **TechSand**, its mission, and how its projects contribute to the tech ecosystem in Bangladesh and beyond.
      - When asked about TechSand’s technologies, explain their impact on business transformation and digital innovation in simple, relatable terms.`,
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
