"use client";
import React, { useState } from "react";
import Link from "next/link";
import { Eye, EyeOff } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import AuthTemplate from "./AuthTemplate";

const Signin = () => {
  const [showPassword, setShowPassword] = useState(false);
  return (
    <AuthTemplate
      type="signin"
      title="Sign In"
      subtitle="Welcome back, Creator."
      sidebarTitle={
        <>
          Welcome back to <span className="text-[#CCFF00]">the Studio.</span>
        </>
      }
      sidebarDescription="Your recording sessions, AI-generated clips, and 4K separate tracks are exactly where you left them."
    >
      <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
        <div className="space-y-2">
          <Label htmlFor="email" className="text-gray-400 text-xs">
            Work Email
          </Label>
          <Input
            id="email"
            type="email"
            placeholder="name@company.com"
            className="bg-white/5 border-white/10 text-white py-3 rounded-sm focus:border-[#CCFF00]/50 transition-all"
          />
        </div>
        <div className="space-y-2">
          <div className="flex justify-between items-center">
            <Label htmlFor="password" className="text-gray-400 text-xs">
              Password
            </Label>
            <Link
              href="/forgot-password"
              className="text-xs text-[#CCFF00] hover:underline"
            >
              Forgot password?
            </Link>
          </div>
          <div className="relative group">
            <Input
              id="password"
              type={showPassword ? "text" : "password"}
              placeholder="••••••••"
              className="bg-white/5 border-white/10 text-white py-3 pr-10 rounded-sm focus:border-[#CCFF00]/50 transition-all"
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-[#CCFF00] transition-colors focus:outline-none"
            >
              {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
            </button>
          </div>
        </div>
        <Button className="w-full bg-[#CCFF00] hover:bg-[#b8e600] text-black font-bold py-6 text-md rounded-sm mt-6 shadow-[0_0_20px_rgba(204,255,0,0.2)]">
          Sign In to Studio
        </Button>
      </form>
    </AuthTemplate>
  );
};

export default Signin;
