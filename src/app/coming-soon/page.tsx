"use client";

import Image from "next/image";
import Link from "next/link";
import ComingSoonImg from "../../../public/Images/media_result_2.png";

interface ComingSoonProps {
  title?: string;
  subtitle?: string;
}

export default function ComingSoon({
  title = "Feature Coming Soon 🚀",
  subtitle = "We're working hard to bring this feature to life. Stay tuned – something amazing is on its way!",
}: ComingSoonProps) {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#f3f4f6] text-center p-6">
      <Image
        src={ComingSoonImg}
        alt="Coming Soon"
        className="w-80 md:w-[400px] lg:w-[500px] h-[400px] mb-8"
      />
      <div className="py-2">
        <h1 className="text-3xl md:text-4xl font-bold text-[#4A3AFF] mb-4">
          {title}
        </h1>
        <p className="text-gray-700 max-w-md mx-auto">
          {subtitle}
        </p>
      </div>
      <Link
        href="/"
        className="bg-[#5c4efc] text-white px-6 py-3 rounded-md hover:bg-indigo-700 transition-all"
      >
        Back to Home
      </Link>
    </div>
  );
}
