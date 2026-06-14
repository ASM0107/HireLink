import React from "react";

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-950 pt-32 pb-16">
      <div className="max-w-3xl mx-auto px-4 text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white mb-6">Blog & Resources</h1>
        <p className="text-xl text-gray-600 dark:text-gray-400 mb-12">
          Insights on the future of work, IT recruitment trends, and interview prep.
        </p>
        
        <div className="bg-blue-50 dark:bg-gray-900 border border-blue-100 dark:border-gray-800 rounded-3xl p-12">
          <div className="text-4xl mb-4">📝</div>
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Content Coming Soon</h2>
          <p className="text-gray-600 dark:text-gray-400">
            Our editorial team is preparing a series of deep-dives into AI recruiting and IT market trends. Check back later!
          </p>
        </div>
      </div>
    </div>
  );
}
