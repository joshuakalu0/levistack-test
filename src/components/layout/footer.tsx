import Link from "next/link";
import { Github, Twitter, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-muted/50 border-t">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">LeviStack</h3>
            <p className="text-sm text-muted-foreground">
              A modern stack for building beautiful, responsive, and performant
              web applications.
            </p>
            <div className="flex gap-4">
              <Link
                href="https://github.com"
                className="text-muted-foreground hover:text-primary"
              >
                <Github className="w-5 h-5" />
              </Link>
              <Link
                href="https://twitter.com"
                className="text-muted-foreground hover:text-primary"
              >
                <Twitter className="w-5 h-5" />
              </Link>
              <Link
                href="https://linkedin.com"
                className="text-muted-foreground hover:text-primary"
              >
                <Linkedin className="w-5 h-5" />
              </Link>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Product</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/features"
                  className="text-sm text-muted-foreground hover:text-primary"
                >
                  Features
                </Link>
              </li>
              <li>
                <Link
                  href="/pricing"
                  className="text-sm text-muted-foreground hover:text-primary"
                >
                  Pricing
                </Link>
              </li>
              <li>
                <Link
                  href="/docs"
                  className="text-sm text-muted-foreground hover:text-primary"
                >
                  Documentation
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/about"
                  className="text-sm text-muted-foreground hover:text-primary"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="/blog"
                  className="text-sm text-muted-foreground hover:text-primary"
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  href="/careers"
                  className="text-sm text-muted-foreground hover:text-primary"
                >
                  Careers
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Legal</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/privacy"
                  className="text-sm text-muted-foreground hover:text-primary"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  href="/terms"
                  className="text-sm text-muted-foreground hover:text-primary"
                >
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link
                  href="/cookies"
                  className="text-sm text-muted-foreground hover:text-primary"
                >
                  Cookie Policy
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t mt-12 pt-8 text-center text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} LeviStack. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
