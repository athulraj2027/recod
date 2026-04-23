"use client";
import React, { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import AuthTemplate from "./AuthTemplate";

const ForgotPassword = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  return (
    <AuthTemplate
      type="forgot-password"
      title={isSubmitted ? "Check your email" : "Reset Password"}
      subtitle={
        isSubmitted
          ? "We've sent recovery instructions to your inbox."
          : "Enter your email to regain access to your workspace."
      }
      sidebarTitle={
        <>
          Recovery <span className="text-[#CCFF00]">Mode.</span>
        </>
      }
      sidebarDescription="Don't lose your momentum. A few clicks and you'll be back to rendering and mastering your latest project."
    >
      {!isSubmitted ? (
        <form
          className="space-y-6"
          onSubmit={(e) => {
            e.preventDefault();
            setIsSubmitted(true);
          }}
        >
          <div className="space-y-2">
            <Label htmlFor="email" className="text-gray-400 text-xs">
              Account Email
            </Label>
            <Input
              id="email"
              type="email"
              required
              placeholder="name@company.com"
              className="bg-white/5 border-white/10 text-white py-3 rounded-sm focus:border-[#CCFF00]/50 transition-all"
            />
          </div>

          <div className="space-y-4">
            <Button
              type="submit"
              className="w-full bg-[#CCFF00] hover:bg-[#b8e600] text-black font-bold py-6 text-md rounded-sm shadow-[0_0_20px_rgba(204,255,0,0.2)]"
            >
              Send Reset Link
            </Button>

            <div className="text-center">
              <Link
                href="/signin"
                className="text-xs text-gray-400 hover:text-[#CCFF00] transition-colors"
              >
                ← Back to Sign In
              </Link>
            </div>
          </div>
        </form>
      ) : (
        <div className="space-y-6 animate-in fade-in slide-in-from-bottom-2 duration-500">
          <div className="p-4 rounded-sm bg-[#CCFF00]/5 border border-[#CCFF00]/20">
            <p className="text-sm text-gray-300 leading-relaxed">
              If an account exists for that email, you will receive a password
              reset link shortly.
            </p>
          </div>

          <Button
            variant="outline"
            onClick={() => setIsSubmitted(false)}
            className="w-full border-white/10 text-white hover:bg-white/5 py-6 rounded-sm"
          >
            Try a different email
          </Button>

          <div className="text-center">
            <Link
              href="/signin"
              className="text-xs text-gray-400 hover:text-white transition-colors"
            >
              Return to Login
            </Link>
          </div>
        </div>
      )}
    </AuthTemplate>
  );
};

export default ForgotPassword;
