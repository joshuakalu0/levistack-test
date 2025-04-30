"use client";

import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";
import { useRouter } from "next/navigation";

const avatars = [
  { id: 1, src: "/avatars/avatar-1.png" },
  { id: 2, src: "/avatars/avatar-2.png" },
  { id: 3, src: "/avatars/avatar-3.png" },
  { id: 4, src: "/avatars/avatar-4.png" },
  { id: 5, src: "/avatars/avatar-5.png" },
  { id: 6, src: "/avatars/avatar-6.png" },
  { id: 7, src: "/avatars/avatar-7.png" },
  { id: 8, src: "/avatars/avatar-8.png" },
  { id: 9, src: "/avatars/avatar-9.png" },
  // { id: 10, src: "/avatars/avatar-10.png" },
  // { id: 11, src: "/avatars/avatar-11.png" },
  // { id: 12, src: "/avatars/avatar-12.png" },
  // { id: 13, src: "/avatars/avatar-13.png" },
];

export default function AvatarPage() {
  const router = useRouter();
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % avatars.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + avatars.length) % avatars.length);
  };

  const getAvatarStyle = (index: number) => {
    const isCenter = index === currentIndex;
    const isNext = (currentIndex + 1) % avatars.length === index;
    const isPrev =
      (currentIndex - 1 + avatars.length) % avatars.length === index;

    if (isCenter) {
      return {
        scale: 1.2,
        x: 0,
        zIndex: 10,
        opacity: 1,
      };
    } else if (isNext) {
      return {
        scale: 0.6,
        x: "80%",
        zIndex: 5,
        opacity: 0.4,
      };
    } else if (isPrev) {
      return {
        scale: 0.6,
        x: "-80%",
        zIndex: 5,
        opacity: 0.4,
      };
    } else {
      return {
        scale: 0,
        x: 0,
        zIndex: 0,
        opacity: 0,
      };
    }
  };

  return (
    <main className="min-h-screen bg-white">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 flex items-center justify-between px-4 py-3 bg-white z-20">
        <button className="p-2 -ml-2" onClick={() => router.back()}>
          <ChevronLeft className="w-5 h-5" />
        </button>
        <Link href="/auth/login" className="text-sm font-medium text-[#0052FF]">
          Log in
        </Link>
      </header>

      <div className="max-w-md mx-auto px-4 pt-16 pb-32">
        {/* Title and Description */}
        <div className="text-center mb-8">
          <h1 className="text-2xl font-semibold mb-2">Choose your avatar</h1>
          <p className="text-sm text-gray-600">
            You can always change it later
          </p>
        </div>

        {/* Avatar Carousel */}
        <div className="relative h-72 mb-8">
          <div className="absolute inset-0 flex items-center justify-center">
            {avatars.map((avatar, index) => (
              <motion.div
                key={avatar.id}
                className="absolute w-56 h-56"
                initial={getAvatarStyle(index)}
                animate={getAvatarStyle(index)}
                transition={{
                  type: "spring",
                  stiffness: 300,
                  damping: 30,
                }}
              >
                <Image
                  src={avatar.src}
                  alt={`Avatar ${avatar.id}`}
                  width={224}
                  height={224}
                  className="rounded-full"
                />
              </motion.div>
            ))}
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={handlePrev}
            className="absolute left-0 top-1/2 -translate-y-1/2 p-2 z-20"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={handleNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 p-2 z-20"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>

        {/* Continue Button */}
        <div className="fixed bottom-0 left-0 right-0 p-4 bg-white border-t">
          <div className="max-w-md mx-auto">
            <button
              onClick={() => router.push("/auth/welcome")}
              className="w-full h-12 bg-[#0052FF] text-white rounded-lg font-medium hover:bg-[#0052FF]/90 transition-colors"
            >
              Continue
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}
