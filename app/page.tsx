"use client";

import { signIn } from "next-auth/react";

import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <main className="h-screen flex items-center justify-center">
      <Button onClick={() => signIn()}>Sign In</Button>
    </main>
  );
}
