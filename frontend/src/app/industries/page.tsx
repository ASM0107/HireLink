import React from "react";
import { Building2, HeartPulse, Landmark, Plane, ShoppingBag, Cpu } from "lucide-react";

export default function IndustriesPage() {
  const industries = [
    { name: "Finance & Banking", icon: <Landmark className="w-8 h-8" />, desc: "Fintech solutions, core banking, and secure trading platforms." },
    { name: "Healthcare & Life Sciences", icon: <HeartPulse className="w-8 h-8" />, desc: "Healthtech, electronic medical records, and compliance-driven systems." },
    { name: "Retail & E-commerce", icon: <ShoppingBag className="w-8 h-8" />, desc: "Omnichannel platforms, supply chain AI, and digital storefronts." },
    { name: "Travel & Hospitality", icon: <Plane className="w-8 h-8" />, desc: "Booking engines, loyalty systems, and property management." },
    { name: "Technology & Software", icon: <Cpu className="w-8 h-8" />, desc: "SaaS platforms, cloud infrastructure, and enterprise tools." },
    { name: "Manufacturing", icon: <Building2 className="w-8 h-8" />, desc: "Industry 4.0, IoT integration, and predictive maintenance." }
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-gray-950">
      <section className="pt-24 pb-16 bg-blue-600 dark:bg-blue-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-6">Industries We Serve</h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Domain-specific IT talent ready to tackle the unique challenges of your sector.
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {industries.map((ind, index) => (
              <div key={index} className="p-8 rounded-2xl bg-gray-50 dark:bg-gray-900 border border-gray-100 dark:border-gray-800 hover:border-blue-500 dark:hover:border-blue-500 transition-colors">
                <div className="text-blue-600 dark:text-blue-400 mb-6">{ind.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">{ind.name}</h3>
                <p className="text-gray-600 dark:text-gray-400">{ind.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
