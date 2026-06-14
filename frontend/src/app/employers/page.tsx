import React from "react";
import { CheckCircle2, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/Button";
import Link from "next/link";

export default function EmployersPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-950 pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white mb-6">
              Hire the Top 1% of IT Talent
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-400 mb-8">
              Skip the noisy job boards. Get instant access to pre-vetted engineers, data scientists, and IT leaders who are ready to make an impact.
            </p>
            
            <ul className="space-y-4 mb-10">
              {["Rigorous technical and cultural vetting", "AI-driven matching for precise skill alignment", "Dedicated hiring success managers", "Flexible contract and permanent options"].map((item, idx) => (
                <li key={idx} className="flex items-center text-gray-700 dark:text-gray-300">
                  <CheckCircle2 className="w-6 h-6 text-blue-600 dark:text-blue-400 mr-3" />
                  {item}
                </li>
              ))}
            </ul>

            <Link href="/contact">
              <Button size="lg">
                Submit Your Requirements <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
          </div>
          
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-tr from-blue-600 to-indigo-600 rounded-3xl transform rotate-3 scale-105 opacity-20 dark:opacity-40 blur-lg"></div>
            <div className="bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-3xl p-8 relative z-10">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Employer Portal (Coming Soon)</h3>
              <div className="space-y-4 opacity-70 pointer-events-none grayscale">
                <div className="h-12 bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 flex items-center px-4">
                  <div className="w-4 h-4 rounded-full bg-green-500 mr-3"></div>
                  <span className="text-sm font-medium">3 Candidates pending review</span>
                </div>
                <div className="h-12 bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 flex items-center px-4">
                  <div className="w-4 h-4 rounded-full bg-blue-500 mr-3"></div>
                  <span className="text-sm font-medium">Interview scheduled for DevOps role</span>
                </div>
              </div>
              <div className="mt-8 text-center">
                <span className="inline-block px-4 py-1 rounded-full bg-blue-100 text-blue-800 text-sm font-bold">Phase 2 Development</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
