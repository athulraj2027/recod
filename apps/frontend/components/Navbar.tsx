import React from "react";
import Link from "next/link";
import { Layout } from "lucide-react";
import { Button } from "@/components/ui/button";
import { navLinks } from "@/constants/public";

// --- Sub-components ---

const Logo = () => (
  <Link href="/" className="flex items-center gap-2 group cursor-pointer">
    <div className="bg-[#CCFF00] p-1 rounded-sm rotate-12 group-hover:rotate-0 transition-all duration-300">
      <Layout size={20} className="text-black" />
    </div>
    <span className="text-xl font-bold tracking-tight text-white">Recod</span>
  </Link>
);

const NavLinks = () => (
  <div className="hidden md:flex items-center gap-8">
    {navLinks.map((link) => (
      <Link
        key={link.href}
        href={link.href}
        className="text-sm text-gray-400 hover:text-white transition-colors duration-200"
      >
        {link.label}
      </Link>
    ))}
  </div>
);

const AuthButtons = () => (
  <div className="flex items-center gap-4">
    <Link href={`/signin`}>
      <Button className="bg-black hover:bg-gray-900 text-white font-semibold  px-6 py-2 transition-transform active:scale-95">
        Sign In
      </Button>
    </Link>
  </div>
);

// --- Main Component ---

const Navbar = () => {
  return (
    <nav className="fixed top-0 w-full z-50 border-b border-white/5 bg-black/60 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
        <Logo />
        <NavLinks />
        <AuthButtons />
      </div>
    </nav>
  );
};

export default Navbar;
