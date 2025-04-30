"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronLeft } from "lucide-react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";

export default function WelcomePage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [receiveUpdates, setReceiveUpdates] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
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
          <h1 className="text-2xl font-semibold mb-2">
            Hi new friend, welcome to Levistack
          </h1>
          <p className="text-sm text-gray-600">
            Enter you email to get started
          </p>
        </div>

        {/* Email Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-3 rounded-xl bg-[#F2F5FF] text-black placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#0052FF]"
              required
            />
          </div>

          {/* Updates Checkbox */}
          <div className="flex items-start gap-2">
            <input
              type="checkbox"
              id="updates"
              checked={receiveUpdates}
              onChange={(e) => setReceiveUpdates(e.target.checked)}
              className="mt-1 h-4 w-4 rounded border-gray-300 text-[#0052FF] focus:ring-[#0052FF]"
            />
            <label htmlFor="updates" className="text-sm text-gray-600">
              I agree to receive updates on my email.
            </label>
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
                email
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
