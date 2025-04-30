import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import Image from "next/image";
import Link from "next/link";

const Index = () => {
  return (
    <div className="flex flex-col items-center justify-center max-md:justify-start  min-h-screen max-md:bg-[#5d5d5d] text-center">
      {/* Logo Section */}
      <div className="w-full flex justify-center max-md:pt-20 mb-24">
        <div className="flex items-center gap-3">
          <Image
            src="/levistack-logo.png"
            alt="LeviStack"
            width={48}
            height={48}
            className="rounded-full"
          />
          <span className="text-[#0052FF] text-2xl font-semibold">
            LEVISTACK
          </span>
        </div>
      </div>

      {/* Sign up Container */}
      <div className="w-full md:max-w-md max-md:fixed max-md:bottom-0 px-8 pt-6 pb-8 bg-white rounded-t-3xl">
        <h1 className="text-2xl font-bold text-center mb-6">
          Create an account to continue
        </h1>

        {/* Authentication Buttons */}
        <Button
          variant="outline"
          className="w-full py-6 mb-3 bg-[#d9e4f7] hover:bg-[#c7d4eb] border-none text-base font-normal rounded-full flex items-center justify-center"
        >
          <img
            src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg"
            alt="Google"
            className="h-5 w-5 mr-2"
          />
          Continue with Google
        </Button>

        <Button
          variant="outline"
          className="w-full py-6 mb-4 bg-[#d9e4f7] hover:bg-[#c7d4eb] border-none text-base font-normal rounded-full flex items-center justify-center"
        >
          <svg
            className="h-5 w-5 mr-2"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect width="24" height="24" fill="black" />
            <path d="M5 5H19V19H5V5Z" fill="black" />
            <path d="M12 12.5L19 7.5V5H5V7.5L12 12.5Z" fill="white" />
            <path d="M5 7.5V19H19V7.5L12 12.5L5 7.5Z" fill="white" />
          </svg>
          Continue with email
        </Button>

        {/* Terms and Privacy */}
        <div className="text-sm text-gray-600 text-left mt-4 mb-5">
          By continuing, you agree to our{" "}
          <Link href="/user-agreement" className="text-blue-600">
            User Agreement
          </Link>{" "}
          and acknowledgment that you understand the{" "}
          <Link href="/privacy-policy" className="text-blue-600">
            Privacy Policy
          </Link>
          .
        </div>

        {/* Checkbox */}
        <div className="flex items-start gap-2 mb-8">
          <Checkbox id="updates" className="mt-1 border-gray-400" />
          <label
            htmlFor="updates"
            className="text-sm text-gray-600 cursor-pointer text-left"
          >
            I agree to receive updates on my email.
          </label>
        </div>

        {/* Login Link */}
        <div className="text-center mb-4">
          <span className="text-sm">Already a Levi? </span>
          <Link href="/login" className="text-blue-600 text-sm font-medium">
            Log in
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Index;
