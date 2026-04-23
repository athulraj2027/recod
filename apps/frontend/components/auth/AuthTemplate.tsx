"use client";
import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import Logo from "./Logo";

interface AuthTemplateProps {
  children: React.ReactNode;
  type: "signin" | "signup" | "verify" | "forgot-password";
  title: string;
  subtitle: string;
  sidebarTitle: React.ReactNode;
  sidebarDescription: string;
}

const SocialAuth = () => (
  <div className="grid grid-cols-2 gap-4">
    <Button
      variant="outline"
      className="bg-white/5 border-white/10 hover:bg-white/10 rounded-sm text-white py-4 transition-all"
    >
      Google
    </Button>
    <Button
      variant="outline"
      className="bg-white/5 border-white/10 hover:bg-white/10 rounded-sm text-white py-4 transition-all"
    >
      Github
    </Button>
  </div>
);

const AuthTemplate = ({
  children,
  type,
  title,
  subtitle,
  sidebarTitle,
  sidebarDescription,
}: AuthTemplateProps) => {
  return (
    <div className="min-h-screen bg-black flex flex-col lg:flex-row">
      {/* Left Side: Branding & Value Prop */}
      <div className="hidden lg:flex lg:w-1/2 bg-[#0A0A0A] p-12 flex-col justify-between border-r border-white/5 relative overflow-hidden">
        <div
          className={`absolute w-96 h-96 bg-[#CCFF00] rounded-full blur-[150px] opacity-10 ${
            type === "signup"
              ? "top-[-10%] right-[-10%]"
              : "bottom-[-10%] left-[-10%]"
          }`}
        />

        <Logo />

        <div className="relative z-10 max-w-md">
          <h2 className="text-5xl font-bold text-white tracking-tighter leading-tight mb-6">
            {sidebarTitle}
          </h2>
          <p className="text-gray-400 text-lg">{sidebarDescription}</p>
        </div>

        <div className="text-gray-600 text-sm">
          © 2026 Appthetics Inc. All rights reserved.
        </div>
      </div>

      {/* Right Side: Auth Box */}
      <div className="flex-1 flex items-center justify-center p-8">
        <div className="w-full max-w-md space-y-8">
          <div className="space-y-2">
            <h1 className="text-3xl font-bold text-white">{title}</h1>
            <p className="text-gray-400 text-sm">
              {type === "signup" ? (
                <>
                  Already have an account?{" "}
                  <Link
                    href="/signin"
                    className="text-[#CCFF00] hover:underline font-medium"
                  >
                    Log in
                  </Link>
                </>
              ) : (
                <>
                  Don&apos;t have an account yet?{" "}
                  <Link
                    href="/signup"
                    className="text-[#CCFF00] hover:underline font-medium"
                  >
                    Sign up for free
                  </Link>
                </>
              )}
            </p>
          </div>

          <SocialAuth />

          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <span className="w-full border-t border-white/10" />
            </div>
            <div className="relative flex justify-center text-xs uppercase">
              <span className="bg-black px-2 text-gray-500 font-mono">
                Or continue with email
              </span>
            </div>
          </div>

          {children}

          <p className="text-center text-xs text-gray-600 px-8">
            {type === "signin" && "Secured with AES-256 encryption. "}
            By clicking continue, you agree to our{" "}
            <Link
              href="/terms"
              className="hover:text-gray-400 underline underline-offset-4"
            >
              Terms of Service
            </Link>{" "}
            and{" "}
            <Link
              href="/privacy"
              className="hover:text-gray-400 underline underline-offset-4"
            >
              Privacy Policy
            </Link>
            .
          </p>
        </div>
      </div>
    </div>
  );
};

export default AuthTemplate;
