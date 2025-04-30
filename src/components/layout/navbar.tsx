import Link from "next/link";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const Navbar = () => {
  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm border-b"
    >
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <Link href="/" className="text-xl font-bold">
          LeviStack
        </Link>

        <div className="hidden md:flex items-center gap-6">
          <Link
            href="/features"
            className="text-sm hover:text-primary transition-colors"
          >
            Features
          </Link>
          <Link
            href="/pricing"
            className="text-sm hover:text-primary transition-colors"
          >
            Pricing
          </Link>
          <Link
            href="/about"
            className="text-sm hover:text-primary transition-colors"
          >
            About
          </Link>
        </div>

        <div className="flex items-center gap-4">
          <Button variant="ghost" size="sm">
            Sign In
          </Button>
          <Button size="sm">Get Started</Button>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
