"use client";
import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import AuthTemplate from "./AuthTemplate";

const Signup = () => {
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
          <Label htmlFor="name" className="text-gray-400">
            Full Name
          </Label>
          <Input
            id="name"
            placeholder="John Doe"
            className="bg-white/5 border-white/10 text-white py-6 focus:border-[#CCFF00]/50 transition-all"
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="email" className="text-gray-400">
            Work Email
          </Label>
          <Input
            id="email"
            type="email"
            placeholder="name@company.com"
            className="bg-white/5 border-white/10 text-white py-6 focus:border-[#CCFF00]/50 transition-all"
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="password" className="text-gray-400">
            Password
          </Label>
          <Input
            id="password"
            type="password"
            placeholder="••••••••"
            className="bg-white/5 border-white/10 text-white py-6 focus:border-[#CCFF00]/50 transition-all"
          />
        </div>
        <Button className="w-full bg-[#CCFF00] hover:bg-[#b8e600] text-black font-bold py-6 text-lg mt-6 shadow-[0_0_20px_rgba(204,255,0,0.2)]">
          Create Studio Account
        </Button>
      </form>
    </AuthTemplate>
  );
};

export default Signup;
