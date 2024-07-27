// components/Navbar.tsx
"use client"
import { useState } from 'react';
import Link from 'next/link';
import Image from "next/image";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-white border-b border-gray-200">
      <div className="container mx-auto flex justify-between items-center p-4">
        <Link href="/" className="text-lg font-bold flex items-center">
           <Image
              src="/logo.svg"
              alt="Vercel Logo"
              className="dark:invert"
              width={70}
              height={24}
              priority
            />
        </Link>
        <div className="flex md:hidden">
          <button onClick={toggleMenu} className="text-gray-500 hover:text-gray-700 focus:outline-none focus:text-gray-700">
            <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'} />
            </svg>
          </button>
        </div>
        <div className={`md:flex ${isOpen ? 'block' : 'hidden'} w-full md:w-auto`}>
          <div className="flex flex-col md:flex-row md:space-x-4">
            <Link href="/search" className="text-gray-700 py-2 md:py-0">Search</Link>
            <Link href="/fund-someone" className="text-gray-700 py-2 md:py-0">Fund Someone</Link>
            <Link href="/how-it-works" className="text-gray-700 py-2 md:py-0">How It Works</Link>
            <Link href="/about-us" className="text-gray-700 py-2 md:py-0">About Us</Link>
            <Link href="/blog" className="text-gray-700 py-2 md:py-0">Blog</Link>
            <Link href="/SignUp" className="text-blue-500 border border-blue-500 rounded px-4 py-2 md:mt-0 mt-2">Get Started</Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
