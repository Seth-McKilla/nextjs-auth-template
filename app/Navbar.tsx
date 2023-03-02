import Logo from "@/components/Logo";

import SignOutButton from "./SignOutButton";

export default function Navbar() {
  return (
    <nav className="bg-gray-100">
      <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
        <div className="relative flex items-center justify-between h-16">
          <Logo />
          <SignOutButton />
        </div>
      </div>
    </nav>
  );
}
