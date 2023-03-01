"use client";

import { signIn } from "next-auth/react";

export default function Home() {
  return (
    <main>
      <button onClick={() => signIn()}>Sign In</button>
    </main>
  );
}
