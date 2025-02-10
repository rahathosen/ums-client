"use client";
import Layout from "../components/layout";
import Breadcrumb from "../components/breadcrumb";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Send } from "lucide-react";
import BackgroundBricks from "../components/background-bricks";
import { useState } from "react";

interface Message {
  id: string;
  role: "user" | "assistant";
  content: string;
}

export default function AIChatPage() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    const newMessage: Message = {
      id: Date.now().toString(),
      role: "user",
      content: input,
    };

    setMessages((prev) => [...prev, newMessage]);
    setInput("");
    setLoading(true);

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          messages: [...messages, newMessage],
        }),
      });

      const data = await response.json();
      if (data.choices) {
        const botMessage: Message = {
          id: Date.now().toString(),
          role: "assistant",
          content:
            data.choices[0]?.message?.content ||
            "Sorry, I couldn't understand that.",
        };
        setMessages((prev) => [...prev, botMessage]);
      }
    } catch (error) {
      console.error("Error fetching AI response:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <Breadcrumb
          items={[{ label: "AI Chat Assistant", href: "/ai-chat" }]}
        />
        <div className="relative py-16 mb-12">
          <BackgroundBricks
            patternColor="#fb3a5d"
            backgroundColor="#f8f9fa"
            className="opacity-10"
          />
          <h1 className="text-4xl md:text-5xl font-bold text-center relative z-10">
            AI Chat Assistant
          </h1>
        </div>

        <Card className="max-w-3xl mx-auto bg-white">
          <CardHeader>
            <CardTitle>Chat with our AI Assistant</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4 mb-4 h-[400px] overflow-y-auto">
              {messages.map((m) => (
                <div
                  key={m.id}
                  className={`flex ${
                    m.role === "user" ? "justify-end" : "justify-start"
                  }`}
                >
                  <div
                    className={`rounded-lg p-3 max-w-[80%] whitespace-pre-line ${
                      m.role === "user"
                        ? "bg-primary text-primary-foreground"
                        : "bg-muted"
                    }`}
                  >
                    {m.role === "assistant" ? (
                      <ul className="list-decimal list-inside space-y-2">
                        {m.content.split(/\d+\.\s+/).map((item, index) =>
                          item.trim() ? (
                            <li key={index} className="flex items-center gap-2">
                              <Send className="w-4 h-4 text-gray-500" />
                              <span>{item}</span>
                            </li>
                          ) : null
                        )}
                      </ul>
                    ) : (
                      <span>{m.content}</span>
                    )}
                  </div>
                </div>
              ))}

              {loading && (
                <div className="text-gray-500">
                  <span className="inline-flex animate-text-gradient bg-gradient-to-r from-[#535353] via-[#c9c9c9] to-[#535353] bg-[200%_auto] bg-clip-text text-center text-base font-medium text-transparent dark:from-[#ACACAC] dark:via-[#363636] dark:to-[#ACACAC]">
                    AI is thinking...
                  </span>
                </div>
              )}
            </div>
            <form onSubmit={handleSubmit} className="flex gap-2">
              <Input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ask me anything..."
                className="flex-grow"
                disabled={loading}
              />
              <Button type="submit" disabled={loading}>
                <Send className="h-4 w-4 mr-2" />
                Send
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </Layout>
  );
}
