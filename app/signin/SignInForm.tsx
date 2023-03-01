"use client";

import { signIn } from "next-auth/react";
import { useForm } from "react-hook-form";
import * as z from "zod";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";

const schema = z.object({
  email: z.string().email({
    message: "Please enter a valid email address",
  }),
});
type Schema = z.infer<typeof schema>;

export default function Home() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Schema>({
    resolver: zodResolver(schema),
  });

  const onSubmit = async (data: Schema) => {
    await signIn("email", { email: data.email });
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
