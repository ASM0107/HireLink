import React from "react";
import { Briefcase, Users, Code2, ShieldCheck, Globe2, LineChart } from "lucide-react";

export default function ServicesPage() {
  const services = [
    { title: "Contract Staffing", desc: "Flexible IT professionals for short-term projects and peak workloads.", icon: <Users className="w-8 h-8" /> },
    { title: "Permanent Hiring", desc: "Long-term placements for core team building and leadership roles.", icon: <Briefcase className="w-8 h-8" /> },
    { title: "Bulk Hiring", desc: "Rapid scaling solutions for new projects and major expansions.", icon: <LineChart className="w-8 h-8" /> },
    { title: "Executive Search", desc: "Targeted headhunting for C-level and senior technical leadership.", icon: <ShieldCheck className="w-8 h-8" /> },
    { title: "Remote Hiring", desc: "Access global talent pools for distributed and remote-first teams.", icon: <Globe2 className="w-8 h-8" /> },
    { title: "Project-Based", desc: "End-to-end team deployment for specific deliverables and milestones.", icon: <Code2 className="w-8 h-8" /> }
  ];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <section className="pt-24 pb-16 bg-white dark:bg-gray-950 border-b border-gray-200 dark:border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white mb-6">Our Services</h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Comprehensive IT recruitment and staffing solutions to build your dream team.
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white dark:bg-gray-800 rounded-2xl p-8 border border-gray-100 dark:border-gray-700 shadow-sm hover:shadow-xl transition-all group">
                <div className="text-blue-600 dark:text-blue-400 mb-6">{service.icon}</div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">{service.title}</h3>
                <p className="text-gray-600 dark:text-gray-400">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
