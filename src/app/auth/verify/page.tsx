"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronLeft } from "lucide-react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";

export default function WelcomePage() {
  const router = useRouter();
  const [otpcode, setotpcode] = useState("");
  const [receiveUpdates, setReceiveUpdates] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (otpcode) {
      router.push("/auth/gender");
    }
  };

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
          <h1 className="text-2xl font-semibold mb-2">Verify Your Email</h1>
          <p className="text-sm text-gray-600">
            Enter the 6 digit code we sent to your email address.
          </p>
        </div>

        {/* otpcode Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <input
              type="otpcode"
              placeholder="verification code"
              value={otpcode}
              onChange={(e) => setotpcode(e.target.value)}
              className="w-full px-4 py-3 rounded-xl bg-[#F2F5FF] text-black placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#0052FF]"
              required
            />
          </div>
        </form>

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
            <motion.button
              whileTap={{ scale: 0.98 }}
              onClick={handleSubmit}
              className={`w-full h-12 rounded-lg font-medium transition-colors ${
                otpcode
                  ? "bg-[#0052FF] text-white hover:bg-[#0052FF]/90"
                  : "bg-[#F2F5FF] text-gray-400 cursor-not-allowed"
              }`}
            >
              Continue
            </motion.button>
          </div>
        </div>
      </div>
    </main>
  );
}
