import React from "react";
import { Users2, Target, Award } from "lucide-react";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-950">
      <section className="pt-24 pb-16 bg-blue-50 dark:bg-gray-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white mb-6">About TalentSync</h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            We are redefining IT recruitment with AI-powered matching and an uncompromising focus on quality.
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
            <div>
              <div className="mx-auto w-16 h-16 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-full flex items-center justify-center mb-6">
                <Target className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
              <p className="text-gray-600 dark:text-gray-400">To accelerate innovation by connecting visionary companies with elite technical talent instantly.</p>
            </div>
            <div>
              <div className="mx-auto w-16 h-16 bg-indigo-100 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 rounded-full flex items-center justify-center mb-6">
                <Users2 className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Our Network</h3>
              <p className="text-gray-600 dark:text-gray-400">Over 50,000 pre-vetted IT professionals ready to deploy on critical projects.</p>
            </div>
            <div>
              <div className="mx-auto w-16 h-16 bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400 rounded-full flex items-center justify-center mb-6">
                <Award className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Our Commitment</h3>
              <p className="text-gray-600 dark:text-gray-400">Unmatched precision in hiring, ensuring every placement adds immediate value.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
