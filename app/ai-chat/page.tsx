/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";
import Layout from "../components/layout";
import Breadcrumb from "../components/breadcrumb";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Send } from "lucide-react";
import BackgroundBricks from "../components/background-bricks";
import { useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import type React from "react";

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

  const renderMarkdown = (content: string) => {
    return (
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        className="markdown-content"
        components={{
          p: ({ node, ...props }) => <p className="mb-4" {...props} />,
          ul: ({ node, ...props }) => (
            <ul className="list-disc pl-6 mb-4" {...props} />
          ),
          ol: ({ node, ...props }) => (
            <ol className="list-decimal pl-6 mb-4" {...props} />
          ),
          li: ({ node, ...props }) => <li className="mb-2" {...props} />,
          pre: ({ node, ...props }) => (
            <pre
              className="bg-gray-100 p-4 rounded-md mb-4 overflow-x-auto"
              {...props}
            />
          ),
          code: ({
            inline,
            ...props
          }: { inline?: boolean } & React.HTMLAttributes<HTMLElement>) =>
            inline ? (
              <code className="bg-gray-100 px-1 py-0.5 rounded" {...props} />
            ) : (
              <pre className="bg-gray-100 p-4 rounded-md mb-4 overflow-x-auto">
                <code {...props} />
              </pre>
            ),
        }}
      >
        {content}
      </ReactMarkdown>
    );
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
                    className={`rounded-lg p-3 max-w-[80%] ${
                      m.role === "user"
                        ? "bg-primary text-primary-foreground"
                        : "bg-muted"
                    }`}
                  >
                    {m.role === "assistant" ? (
                      m.content.includes("user asked") ? (
                        <div>
                          <div className="text-gray-400 italic">
                            <span className="font-semibold text-primary">
                              AI Thought...
                            </span>
                            {renderMarkdown(m.content.split("---")[0])}
                          </div>
                          <hr className="my-4" />
                          <div>
                            <div className="text-gray-800">
                              <span className="font-semibold text-primary">
                                AI Answer:
                              </span>
                              {renderMarkdown(m.content.split("---")[1])}
                            </div>
                          </div>
                        </div>
                      ) : (
                        renderMarkdown(m.content)
                      )
                    ) : (
                      <span>{m.content}</span>
                    )}
                  </div>
                </div>
              ))}

              {loading && (
                <motion.h1
                  className={cn(
                    "bg-[linear-gradient(110deg,#bfbfbf,35%,#000,50%,#bfbfbf,75%,#bfbfbf)] dark:bg-[linear-gradient(110deg,#404040,35%,#fff,50%,#404040,75%,#404040)]",
                    "bg-[length:200%_100%] bg-clip-text text-base font-medium text-transparent"
                  )}
                  initial={{ backgroundPosition: "200% 0" }}
                  animate={{ backgroundPosition: "-200% 0" }}
                  transition={{
                    repeat: Number.POSITIVE_INFINITY,
                    duration: 2,
                    ease: "linear",
                  }}
                >
                  AI is thinking...
                </motion.h1>
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
