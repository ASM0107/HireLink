import Link from "next/link";
import React from "react";

export const Navbar = () => {
  return (
    <nav className="fixed w-full z-50 transition-all duration-300 bg-white/70 backdrop-blur-md dark:bg-black/70 border-b border-gray-200 dark:border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex-shrink-0 flex items-center">
            <Link href="/" className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-400">
              TalentSync
            </Link>
          </div>
          <div className="hidden md:flex space-x-8">
            <Link href="/services" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors font-medium">Services</Link>
            <Link href="/employers" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors font-medium">Employers</Link>
            <Link href="/candidates" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors font-medium">Candidates</Link>
            <Link href="/about" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors font-medium">About</Link>
          </div>
          <div className="flex items-center space-x-4">
            <Link href="/contact" className="px-5 py-2.5 rounded-full bg-blue-600 text-white font-medium hover:bg-blue-700 transition-all shadow-lg shadow-blue-600/30 hover:shadow-blue-600/50 transform hover:-translate-y-0.5">
              Hire Talent
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};
