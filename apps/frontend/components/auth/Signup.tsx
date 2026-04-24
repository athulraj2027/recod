"use client";
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import AuthTemplate from "./AuthTemplate";
import { Eye, EyeOff } from "lucide-react";

const Signup = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  return (
    <AuthTemplate
      type="signup"
      title="Get started"
      subtitle="Join the future of content creation."
      sidebarTitle={
        <>
          The studio is <span className="text-[#CCFF00]">waiting</span> for you.
        </>
      }
      sidebarDescription="Join 10,000+ creators recording lossless 4K content and generating viral clips with a single click."
    >
      <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
        <div className="space-y-2">
          <Label htmlFor="name" className="text-gray-400 text-xs">
            Full Name
          </Label>
          <Input
            id="name"
            placeholder="John Doe"
            className="bg-white/5 border-white/10 text-white rounded-sm py-3 focus:border-[#CCFF00]/50 transition-all"
          />
        </div>
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
          <Label htmlFor="password" className="text-gray-400 text-xs">
            New Password
          </Label>
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

        {/* Confirm Password Field */}
        <div className="space-y-2">
          <Label htmlFor="confirmPassword" className="text-gray-400 text-xs">
            Confirm Password
          </Label>
          <div className="relative group">
            <Input
              id="confirmPassword"
              type={showConfirmPassword ? "text" : "password"}
              placeholder="••••••••"
              className="bg-white/5 border-white/10 text-white py-3 pr-10 rounded-sm focus:border-[#CCFF00]/50 transition-all"
            />
            <button
              type="button"
              onClick={() => setShowConfirmPassword(!showConfirmPassword)}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-[#CCFF00] transition-colors focus:outline-none"
            >
              {showConfirmPassword ? <EyeOff size={16} /> : <Eye size={16} />}
            </button>
          </div>
        </div>
        <Button className="w-full bg-[#CCFF00] hover:bg-[#b8e600] text-black rounded-sm font-bold py-6 text-md mt-6 shadow-[0_0_20px_rgba(204,255,0,0.2)]">
          Create Studio Account
        </Button>
      </form>
    </AuthTemplate>
  );
};

export default Signup;
