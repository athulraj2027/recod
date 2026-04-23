"use client";
import React, { useState, useRef } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import AuthTemplate from "./AuthTemplate";

const VerifyOtp = () => {
  const [otp, setOtp] = useState(["", "", "", "", "", ""]);
  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);

  const handleChange = (element: HTMLInputElement, index: number) => {
    if (isNaN(Number(element.value))) return false;

    const newOtp = [...otp];
    newOtp[index] = element.value;
    setOtp(newOtp);

    // Focus next input
    if (element.value !== "" && index < 5) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  const handleKeyDown = (
    e: React.KeyboardEvent<HTMLInputElement>,
    index: number,
  ) => {
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
  };

  return (
    <AuthTemplate
      type="verify"
      title="Verify Identity"
      subtitle="We've sent a 6-digit code to your email."
      sidebarTitle={
        <>
          Secure <span className="text-[#CCFF00]">Access.</span>
        </>
      }
      sidebarDescription="Protecting your creative assets is our priority. Enter the code to continue to your dashboard."
    >
      <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
        <div className="space-y-4">
          <Label className="text-gray-400 text-xs uppercase tracking-widest">
            Verification Code
          </Label>
          <div className="flex justify-between gap-2">
            {otp.map((data, index) => (
              <input
                key={index}
                type="text"
                maxLength={1}
                ref={(el) => (inputRefs.current[index] = el)}
                value={data}
                onChange={(e) => handleChange(e.target, index)}
                onKeyDown={(e) => handleKeyDown(e, index)}
                className="w-full h-10 text-center text-xl font-bold bg-white/5 border border-white/10 text-[#CCFF00] rounded-sm focus:border-[#CCFF00] focus:ring-1 focus:ring-[#CCFF00]/50 outline-none transition-all"
              />
            ))}
          </div>
        </div>

        <Button className="w-full bg-[#CCFF00] hover:bg-[#b8e600] text-black font-bold py-6 text-md rounded-sm mt-4 shadow-[0_0_20px_rgba(204,255,0,0.2)]">
          Verify & Proceed
        </Button>

        <div className="text-center">
          <p className="text-xs text-gray-500">
            Didn&apos;t receive the code?{" "}
            <button
              type="button"
              className="text-[#CCFF00] hover:underline font-medium"
            >
              Resend Code
            </button>
          </p>
        </div>

        <div className="pt-2 text-center">
          <Link
            href="/signin"
            className="text-xs text-gray-400 hover:text-white transition-colors"
          >
            ← Back to Sign In
          </Link>
        </div>
      </form>
    </AuthTemplate>
  );
};

export default VerifyOtp;
