import Logo from "@/components/Logo";

import SignInForm from "./SignInForm";

export default function Home() {
  return (
    <main className="h-screen flex items-center justify-center">
      <div className="flex flex-col items-center space-y-5">
        <Logo />
        <SignInForm />
      </div>
    </main>
  );
}
