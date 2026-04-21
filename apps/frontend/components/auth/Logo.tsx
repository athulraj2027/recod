import { Layout } from "lucide-react";
import Link from "next/link";
import React from "react";

const Logo = () => {
  return (
    <Link href="/" className="flex items-center gap-2 relative z-10">
      <div className="bg-[#CCFF00] p-1 rounded-sm rotate-12">
        <Layout size={24} className="text-black" />
      </div>
      <span className="text-2xl font-bold text-white tracking-tight">
        Recod
      </span>
    </Link>
  );
};

export default Logo;
