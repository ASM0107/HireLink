"use client";

import React from "react";
import { UploadCloud, Star, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/Button";

export default function CandidatesPage() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white mb-6">
          Accelerate Your IT Career
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-400 mb-12 max-w-3xl mx-auto">
          Join our exclusive network. We match your specific skills and career goals with top-tier companies actively hiring.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700">
            <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
              <UploadCloud className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold mb-3 dark:text-white">1. Upload Resume</h3>
            <p className="text-gray-600 dark:text-gray-400">Our AI parses your experience to build your anonymous profile instantly.</p>
          </div>
          <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700">
            <div className="w-12 h-12 bg-indigo-100 text-indigo-600 rounded-full flex items-center justify-center mx-auto mb-6">
              <Star className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold mb-3 dark:text-white">2. Get Matched</h3>
            <p className="text-gray-600 dark:text-gray-400">Companies apply to you based on your verified skills and salary expectations.</p>
          </div>
          <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700">
            <div className="w-12 h-12 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
              <ArrowRight className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold mb-3 dark:text-white">3. Get Hired</h3>
            <p className="text-gray-600 dark:text-gray-400">Ace the interview and step into your new role with confidence.</p>
          </div>
        </div>

        <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-3xl p-10 text-white shadow-xl relative overflow-hidden">
          <div className="relative z-10 flex flex-col items-center">
            <h2 className="text-3xl font-bold mb-4">Candidate Portal Launching Soon</h2>
            <p className="text-blue-100 mb-8 max-w-2xl text-center">
              We are currently building the self-serve candidate portal (Phase 2). In the meantime, email us your resume directly to get added to the network!
            </p>
            <Button variant="secondary" size="lg" onClick={() => window.location.href='mailto:jobs@talentsync.com'}>
              Email Resume
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
