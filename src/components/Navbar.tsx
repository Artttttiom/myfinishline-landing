"use client";

import { useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";

const logoImg = "https://www.figma.com/api/mcp/asset/6d233606-3294-4ea0-97b9-72281de3ec4f";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { name: "Features", href: "#features", hasDropdown: true },
    { name: "About", href: "#about", hasDropdown: false },
    { name: "Pricing", href: "#level-up", hasDropdown: false },
    { name: "Blog", href: "#blog", hasDropdown: false },
    { name: "FAQ", href: "#faq", hasDropdown: false },
  ];

  return (
    <nav className="w-full bg-white">
      <div className="max-w-[1280px] mx-auto px-4 md:px-8">
        <div className="flex justify-between items-center h-[60px] md:h-[72px]">
          {/* Logo */}
          <div className="flex items-center">
            <div className="relative w-[140px] md:w-[180px] h-[21px] md:h-[27px] overflow-hidden">
              <img
                src={logoImg}
                alt="MyFinishLine"
                className="absolute h-[425.22%] w-[125.2%] left-[-12.73%] top-[-162.61%] max-w-none"
              />
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                className="flex items-center gap-1 px-4 py-2 text-sm font-medium text-[#09090b] rounded-md hover:bg-gray-50 transition-colors whitespace-nowrap"
              >
                {link.name}
                {link.hasDropdown && <ChevronDown size={12} className="text-[#18181b]" />}
              </a>
            ))}
          </div>

          {/* Desktop CTA Buttons */}
          <div className="hidden md:flex items-center gap-4">
            <a
              href="https://dev.myfinishline.io/login"
              className="text-sm font-medium text-[#09090b] hover:text-black transition-colors"
            >
              Sign in
            </a>
            <a
              href="#level-up"
              className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-[#fafafa] bg-[#18181b] rounded-md hover:bg-[#27272a] transition-colors"
            >
              Get Started
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 rounded-lg text-gray-600 hover:text-gray-900 hover:bg-gray-100"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-100">
            <div className="flex flex-col space-y-2">
              {navLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  className="flex items-center justify-between px-4 py-2 text-sm font-medium text-[#09090b] hover:bg-gray-50 rounded-md"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.name}
                  {link.hasDropdown && <ChevronDown size={12} />}
                </a>
              ))}
              <div className="pt-4 flex flex-col space-y-2 border-t border-gray-100">
                <a
                  href="https://dev.myfinishline.io/login"
                  className="px-4 py-2 text-sm font-medium text-[#09090b]"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Sign in
                </a>
                <a
                  href="#level-up"
                  className="mx-4 px-4 py-2 text-sm font-medium text-[#fafafa] bg-[#18181b] rounded-md text-center"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Get Started
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
