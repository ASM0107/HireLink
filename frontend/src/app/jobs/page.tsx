import React from "react";
import { Search, MapPin, Briefcase } from "lucide-react";
import { Button } from "@/components/ui/Button";

export default function JobsPage() {
  const jobs = [
    { title: "Senior Python Developer", location: "Remote (US)", type: "Contract - 6 Months", salary: "$80 - $100 / hr" },
    { title: "Azure Cloud Architect", location: "New York, NY (Hybrid)", type: "Permanent", salary: "$160k - $190k" },
    { title: "Lead Data Engineer", location: "Remote (Global)", type: "Contract - 12 Months", salary: "Competitive" },
    { title: "DevOps Engineer", location: "Austin, TX (On-site)", type: "Permanent", salary: "$130k - $150k" }
  ];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-950 pt-24 pb-16">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-extrabold text-gray-900 dark:text-white mb-8">Open Positions</h1>
        
        {/* Search Bar Placeholder */}
        <div className="bg-white dark:bg-gray-800 p-4 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 flex flex-col md:flex-row gap-4 mb-10">
          <div className="flex-grow flex items-center bg-gray-50 dark:bg-gray-900 rounded-lg px-4 border border-gray-100 dark:border-gray-800">
            <Search className="w-5 h-5 text-gray-400 mr-2" />
            <input type="text" placeholder="Search by role or keyword..." className="w-full bg-transparent border-none py-3 outline-none text-gray-900 dark:text-white" />
          </div>
          <Button>Search Jobs</Button>
        </div>

        {/* Job Listings */}
        <div className="space-y-4">
          {jobs.map((job, idx) => (
            <div key={idx} className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 hover:border-blue-500 transition-colors flex flex-col md:flex-row md:items-center justify-between group">
              <div className="mb-4 md:mb-0">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">{job.title}</h3>
                <div className="flex flex-wrap gap-4 text-sm text-gray-600 dark:text-gray-400">
                  <span className="flex items-center"><MapPin className="w-4 h-4 mr-1" /> {job.location}</span>
                  <span className="flex items-center"><Briefcase className="w-4 h-4 mr-1" /> {job.type}</span>
                  <span className="font-medium text-gray-900 dark:text-gray-300">{job.salary}</span>
                </div>
              </div>
              <Button variant="outline">Apply Now</Button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
