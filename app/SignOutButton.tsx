"use client";

import { signOut, useSession } from "next-auth/react";

import { Button } from "@/components/ui/button";

export default function SignOutButton() {
  const { data: session } = useSession();

  return session ? <Button onClick={() => signOut()}>Sign out</Button> : null;
}
