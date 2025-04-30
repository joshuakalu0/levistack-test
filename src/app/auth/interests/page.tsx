"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { useState } from "react";

const categories = [
  {
    title: "Crypto & Blockchain",
    items: [
      "Ethereum",
      "Bitcoin",
      "Altcoins",
      "DeFi (Decentralized Finance)",
      "Layer 2 Solutions (Arbitrum, Optimism)",
      "Tokenomics",
      "Smart Contracts",
    ],
  },
  {
    title: "Airdrop Hunting & Alpha Leaks",
    items: [
      "New Airdrops",
      "Testnet Opportunities",
      "Retroactive Airdrops",
      "DeFi Degens",
      "Zealy",
      "Galxe Campaigns",
    ],
  },
  {
    title: "Crypto & Blockchain",
    items: [
      "Ethereum",
      "Bitcoin",
      "Altcoins",
      "DeFi (Decentralized Finance)",
      "Layer 2 Solutions (Arbitrum, Optimism)",
      "Tokenomics",
      "Smart Contracts",
    ],
  },
  {
    title: "Crypto & Blockchain",
    items: [
      "Ethereum",
      "Bitcoin",
      "Altcoins",
      "DeFi (Decentralized Finance)",
      "Layer 2 Solutions (Arbitrum, Optimism)",
      "Tokenomics",
      "Smart Contracts",
    ],
  },
];

export default function InterestsPage() {
  const [selectedInterests, setSelectedInterests] = useState<Set<string>>(
    new Set()
  );
  const [expandedCategories, setExpandedCategories] = useState<Set<number>>(
    new Set([0])
  ); // First category expanded by default

  const toggleInterest = (interest: string) => {
    const newSelected = new Set(selectedInterests);
    if (newSelected.has(interest)) {
      newSelected.delete(interest);
    } else {
      newSelected.add(interest);
    }
    setSelectedInterests(newSelected);
  };

  const toggleCategory = (index: number) => {
    const newExpanded = new Set(expandedCategories);
    if (newExpanded.has(index)) {
      newExpanded.delete(index);
    } else {
      newExpanded.add(index);
    }
    setExpandedCategories(newExpanded);
  };

  return (
    <main className="min-h-screen bg-white">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 flex items-center justify-between px-4 py-3  z-10">
        <button className="p-2 -ml-2">
          <ArrowLeft className="w-5 h-5" />
        </button>
        <Link href="/auth/login" className="text-sm font-medium text-[#0052FF]">
          Log in
        </Link>
      </header>

      <div className="max-w-md mx-auto px-4 pt-9 pb-32">
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

        {/* Title */}
        <div className="text-center mb-6">
          <h1 className="text-xl font-semibold mb-1">Interests</h1>
          <p className="text-sm text-gray-600">
            Pick things you'd like to see in your home feeds.
          </p>
        </div>

        {/* Categories */}
        <div className="space-y-6">
          {categories.map((category, index) => (
            <div key={index} className="space-y-3">
              <button
                onClick={() => toggleCategory(index)}
                className="flex items-center gap-2 w-full text-left"
              >
                <div className="w-5 h-5 flex items-center justify-center">
                  <motion.svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    animate={{ rotate: expandedCategories.has(index) ? 45 : 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <rect
                      width="20"
                      height="20"
                      rx="4"
                      fill="#0052FF"
                      fillOpacity="0.1"
                    />
                    <path
                      d="M6 10h8M10 6v8"
                      stroke="#0052FF"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                    />
                  </motion.svg>
                </div>
                <h2 className="text-sm font-medium">{category.title}</h2>
              </button>
              <motion.div
                initial={false}
                animate={{
                  height: expandedCategories.has(index) ? "auto" : 0,
                  opacity: expandedCategories.has(index) ? 1 : 0,
                }}
                transition={{ duration: 0.2 }}
                className="overflow-hidden"
              >
                <div className="flex flex-wrap gap-2 pt-1">
                  {category.items.map((item, itemIndex) => (
                    <motion.button
                      key={itemIndex}
                      onClick={() => toggleInterest(item)}
                      className={`px-4 py-2 rounded-full text-sm transition-colors ${
                        selectedInterests.has(item)
                          ? "bg-[#0052FF] text-white"
                          : "bg-[#EDF0F9] hover:bg-[#E2E7F4] text-black"
                      }`}
                      whileTap={{ scale: 0.95 }}
                    >
                      {item}
                    </motion.button>
                  ))}
                </div>
              </motion.div>
            </div>
          ))}
        </div>

        {/* Footer */}
        <div className="fixed bottom-0 left-0 right-0 p-4 bg-white border-t">
          <div className="max-w-md mx-auto space-y-4">
            <div className="text-xs text-center text-gray-600">
              By continuing, you agree to our{" "}
              <Link href="/user-agreement" className="text-[#0052FF]">
                User Agreement
              </Link>{" "}
              and acknowledgment that you understand the{" "}
              <Link href="/privacy-policy" className="text-[#0052FF]">
                Privacy Policy
              </Link>
              .
            </div>
            <Button
              className={`w-full h-12 transition-colors ${
                selectedInterests.size > 0
                  ? "bg-[#0052FF] text-white hover:bg-[#0052FF]/90"
                  : "bg-[#EDF0F9] text-black hover:bg-[#E2E7F4]"
              }`}
              disabled={selectedInterests.size === 0}
            >
              Continue
            </Button>
          </div>
        </div>
      </div>
    </main>
  );
}
