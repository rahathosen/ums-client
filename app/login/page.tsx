"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Layout from "../components/layout";
import Breadcrumb from "../components/breadcrumb";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import BackgroundBricks from "../components/background-bricks";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically handle the login logic
    console.log("Login attempt with:", { email, password });
    // For now, we'll just redirect to the home page
    router.push("/");
  };

  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <Breadcrumb items={[{ label: "Login", href: "/login" }]} />
        <div className="relative py-16 mb-12">
          <BackgroundBricks
            patternColor="#fb3a5d"
            backgroundColor="#f8f9fa"
            className="opacity-10"
          />
          <h1 className="text-4xl md:text-5xl font-bold text-center relative z-10">
            Login
          </h1>
        </div>

        <Card className="max-w-md mx-auto shadow-lg">
          <CardHeader>
            <CardTitle>Sign in to your account</CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="your@email.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="password">Password</Label>
                <Input
                  id="password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>
              <Button
                type="submit"
                variant={"default"}
                className="w-full bg-primary text-white p-2 rounded-md"
              >
                Sign In
              </Button>
            </form>
            <div className="mt-4 text-center">
              <Link
                href="/forgot-password"
                className="text-sm text-primary hover:underline"
              >
                Forgot your password?
              </Link>
            </div>
            <div className="mt-4 text-center">
              <p className="text-sm text-muted-foreground">
                Don&apos;t have an account?{" "}
                <Link href="/register" className="text-primary hover:underline">
                  Sign up
                </Link>
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </Layout>
  );
}
