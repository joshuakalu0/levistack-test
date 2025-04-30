"use client";
import Navbar from "@/components/layout/navbar";
import Hero from "@/components/sections/hero";
import Features from "@/components/sections/features";
import Pricing from "@/components/sections/pricing";
import Testimonials from "@/components/sections/testimonials";
import Footer from "@/components/layout/footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <Features />
      <Pricing />
      <Testimonials />
      <Footer />
    </main>
  );
}
