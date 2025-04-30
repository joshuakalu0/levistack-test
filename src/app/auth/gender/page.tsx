"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronLeft } from "lucide-react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";

const genderOptions = [
  { id: "man", label: "Man" },
  { id: "woman", label: "Woman" },
  { id: "non-binary", label: "Non-binary" },
  { id: "prefer-not", label: "I prefer not to say" },
];

export default function GenderPage() {
  const router = useRouter();
  const [selectedGender, setSelectedGender] = useState<string | null>(null);

  return (
    <main className="min-h-screen bg-white">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 flex items-center justify-between px-4 py-3  z-10">
        <button className="p-2 -ml-2" onClick={() => router.back()}>
          <ChevronLeft className="w-5 h-5" />
        </button>
        <Link href="/auth/login" className="text-sm font-medium text-[#0052FF]">
          Log in
        </Link>
      </header>

      <div className="max-w-md mx-auto px-4 pt-8 pb-32">
        {/* Logo */}
        <div className="flex justify-center mb-6">
          <Image
            src="/levistack-logo.png"
            alt="LeviStack"
            width={52}
            height={52}
            className="rounded-full"
          />
        </div>

        {/* Title and Description */}
        <div className="text-center mb-8">
          <h1 className="text-2xl font-semibold mb-2">About you</h1>
          <p className="text-sm text-gray-600">
            Tell us about yourself to improve your recommendation and ads
          </p>
        </div>

        {/* Gender Selection Question */}
        <div className="mb-6">
          <h2 className="text-base mb-4">How do you identify?</h2>
          <div className="space-y-3">
            {genderOptions.map((option) => (
              <motion.button
                key={option.id}
                whileTap={{ scale: 0.98 }}
                onClick={() => setSelectedGender(option.id)}
                className={`w-full py-3 px-4 rounded-lg text-center transition-colors ${
                  selectedGender === option.id
                    ? "bg-[#0052FF] text-white"
                    : "bg-[#F2F5FF] text-black hover:bg-[#E5E9FF]"
                }`}
              >
                {option.label}
              </motion.button>
            ))}
          </div>
        </div>

        {/* Footer */}
        <div className="fixed bottom-0 left-0 right-0 p-4 bg-white border-t">
          <div className="max-w-md mx-auto space-y-4">
            <p className="text-xs text-center text-gray-600">
              By continuing, you agree to our{" "}
              <Link href="/user-agreement" className="text-[#0052FF]">
                User Agreement
              </Link>{" "}
              and acknowledge that you understand the{" "}
              <Link href="/privacy" className="text-[#0052FF]">
                Privacy Policy
              </Link>
              .
            </p>
            <button
              onClick={() => selectedGender && router.push("/auth/avatar")}
              className={`w-full h-12 rounded-lg font-medium transition-colors ${
                selectedGender
                  ? "bg-[#0052FF] text-white hover:bg-[#0052FF]/90"
                  : "bg-[#F2F5FF] text-gray-400 cursor-not-allowed"
              }`}
            >
              Continue
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}
