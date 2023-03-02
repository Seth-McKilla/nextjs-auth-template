import Logo from "@/components/Logo";

export default function Navbar() {
  return (
    <nav className="bg-gray-100">
      <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
        <div className="relative flex items-center justify-between h-16">
          <Logo />
        </div>
      </div>
    </nav>
  );
}
