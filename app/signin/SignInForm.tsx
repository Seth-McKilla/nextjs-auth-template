"use client";

import { signIn } from "next-auth/react";
import { useForm } from "react-hook-form";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { emailSchema } from "@/schemas/common";
import { zodResolver } from "@hookform/resolvers/zod";

import type { Email } from "@/schemas/common";

export default function Home() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Email>({
    resolver: zodResolver(emailSchema),
  });

  const onSubmit = async (data: Email) => {
    await signIn("email", { email: data.email, callbackUrl: "/" });
  };

  return (
    <div className="flex flex-col">
      <form onSubmit={handleSubmit(onSubmit)} className="flex space-x-1">
        <Input {...register("email")} placeholder="Email" />
        <Button type="submit" className="whitespace-nowrap">
          Sign in
        </Button>
      </form>
      {errors.email && (
        <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
      )}
    </div>
  );
}
