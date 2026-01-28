import Link from "next/link";
import { ChevronLeft } from "lucide-react";

interface ContractHeaderProps {
  title: string;
  subtitle: string;
}

export default function ContractHeader({ title, subtitle }: ContractHeaderProps) {
  return (
    <div className="w-full">
      {/* Top navigation bar */}
      <div
        className="w-full px-4 py-4"
        style={{
          background: "linear-gradient(to bottom, #5170d5, #7b9fe0)",
        }}
      >
        <div className="max-w-[1280px] mx-auto flex items-center justify-center relative">
          <Link
            href="/"
            className="absolute left-0 flex items-center gap-1 text-white hover:opacity-80 transition-opacity"
          >
            <ChevronLeft className="w-5 h-5" />
            <span className="font-medium">Back</span>
          </Link>
          <span className="text-white font-semibold text-lg">Contract</span>
        </div>
      </div>

      {/* Title section */}
      <div
        className="w-full px-4 py-8 text-center"
        style={{
          background: "linear-gradient(to bottom, #7b9fe0, #a8c4ea)",
        }}
      >
        <h1 className="text-white text-3xl md:text-4xl font-bold mb-2 drop-shadow-md">
          {title}
        </h1>
        <p className="text-white text-base md:text-lg drop-shadow-sm">
          {subtitle}
        </p>
      </div>
    </div>
  );
}
