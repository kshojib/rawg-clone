"use client";

import Link from "next/link";
import { useState } from "react";
import {
  MagnifyingGlassIcon,
  Bars3Icon,
  XMarkIcon,
} from "@heroicons/react/24/outline";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      window.location.href = `/search?q=${encodeURIComponent(searchQuery)}`;
    }
  };

  return (
    <header className="bg-[#151516] border-b border-gray-800/50 sticky top-0 z-50">
      <nav className="max-w-[1920px] mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-14">
          {/* Logo */}
          <div className="flex items-center">
            <Link
              href="/"
              className="text-xl font-bold text-white hover:text-gray-300 transition-colors duration-200"
            >
              RAWG
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8 flex-1 ml-10">
            {/* Navigation Links */}
            <div className="flex items-center gap-6">
              <Link
                href="/"
                className="text-sm text-white hover:text-gray-300 transition-colors duration-200 font-medium"
              >
                Home
              </Link>
              <Link
                href="/reviews"
                className="text-sm text-gray-400 hover:text-white transition-colors duration-200 font-medium"
              >
                Reviews
              </Link>
              <Link
                href="/new"
                className="text-sm text-gray-400 hover:text-white transition-colors duration-200 font-medium"
              >
                New
              </Link>
            </div>

            {/* Search Bar - Desktop */}
            <div className="flex-1 max-w-2xl">
              <form onSubmit={handleSearch} className="relative">
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search 850,000+ games"
                  className="w-full bg-[#1f1f23] text-white text-sm rounded-full py-2.5 pl-10 pr-4 focus:outline-none focus:bg-[#27272b] transition-all placeholder:text-gray-600 border-none"
                />
                <MagnifyingGlassIcon className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-600" />
              </form>
            </div>

            {/* Sign In Button */}
            <button className="bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white text-sm px-6 py-2 rounded-full transition-all duration-200 font-medium whitespace-nowrap">
              Sign In
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-gray-300 hover:text-white transition-colors"
            >
              {mobileMenuOpen ? (
                <XMarkIcon className="w-6 h-6" />
              ) : (
                <Bars3Icon className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Search */}
        <div className="md:hidden pb-3 pt-2">
          <form onSubmit={handleSearch} className="relative">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search games..."
              className="w-full bg-[#1f1f23] text-white text-sm rounded-full py-2.5 pl-10 pr-4 focus:outline-none focus:bg-[#27272b] placeholder:text-gray-600 border-none"
            />
            <MagnifyingGlassIcon className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-600" />
          </form>
        </div>
      </nav>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#1f1f23] border-t border-gray-800/50">
          <div className="px-4 py-3 space-y-1">
            <Link
              href="/"
              className="block text-white hover:text-gray-300 transition py-2.5 text-sm font-medium"
              onClick={() => setMobileMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              href="/reviews"
              className="block text-gray-400 hover:text-white transition py-2.5 text-sm font-medium"
              onClick={() => setMobileMenuOpen(false)}
            >
              Reviews
            </Link>
            <Link
              href="/new"
              className="block text-gray-400 hover:text-white transition py-2.5 text-sm font-medium"
              onClick={() => setMobileMenuOpen(false)}
            >
              New
            </Link>
            <button className="w-full bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white text-sm px-4 py-2.5 rounded-full transition mt-2">
              Sign In
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
