import Link from "next/link";
import { 
  ArrowRight, 
  CheckCircle2, 
  Code2, 
  Database, 
  Server, 
  ShieldCheck, 
  Users, 
  Zap,
  Briefcase,
  Globe2,
  LineChart
} from "lucide-react";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* HERO SECTION */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-50 via-white to-white dark:from-blue-950/20 dark:via-gray-950 dark:to-gray-950 -z-10"></div>
        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-[500px] h-[500px] bg-blue-400/20 dark:bg-blue-600/10 rounded-full blur-3xl -z-10"></div>
        <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-[600px] h-[600px] bg-indigo-400/20 dark:bg-indigo-600/10 rounded-full blur-3xl -z-10"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <div className="inline-flex items-center space-x-2 bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-300 px-4 py-2 rounded-full text-sm font-medium mb-8 border border-blue-100 dark:border-blue-800/50">
            <Zap className="w-4 h-4" />
            <span>AI-Powered Talent Acquisition</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-extrabold text-gray-900 dark:text-white tracking-tight mb-8">
            Hire Pre-Screened IT Talent <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-400">
              in Days, Not Months.
            </span>
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 mb-10 max-w-3xl mx-auto leading-relaxed">
            Connect with top-tier IT professionals seamlessly. Our AI-driven platform matches you with the perfect candidates for contract and permanent roles, accelerating your hiring process.
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-6">
            <Link href="/contact" className="w-full sm:w-auto px-8 py-4 rounded-full bg-blue-600 text-white font-semibold hover:bg-blue-700 transition-all shadow-xl shadow-blue-600/20 hover:shadow-blue-600/40 transform hover:-translate-y-1 flex items-center justify-center">
              Hire Talent <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
            <Link href="/employers/submit" className="w-full sm:w-auto px-8 py-4 rounded-full bg-white dark:bg-gray-800 text-gray-900 dark:text-white font-semibold border border-gray-200 dark:border-gray-700 hover:border-blue-600 dark:hover:border-blue-500 hover:text-blue-600 dark:hover:text-blue-400 transition-all transform hover:-translate-y-1">
              Submit Requirement
            </Link>
            <Link href="/candidates/register" className="w-full sm:w-auto px-8 py-4 rounded-full bg-transparent text-gray-700 dark:text-gray-300 font-semibold hover:text-blue-600 dark:hover:text-blue-400 transition-all underline underline-offset-4 decoration-transparent hover:decoration-blue-600 dark:hover:decoration-blue-400">
              Upload Resume
            </Link>
          </div>
        </div>
      </section>

      {/* SERVICES SECTION */}
      <section className="py-24 bg-gray-50 dark:bg-gray-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">Comprehensive Staffing Solutions</h2>
            <p className="text-lg text-gray-600 dark:text-gray-400">Tailored recruitment strategies to meet your unique IT hiring needs.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: "Contract Staffing", desc: "Flexible IT professionals for short-term projects and peak workloads.", icon: <Users className="w-6 h-6" /> },
              { title: "Permanent Hiring", desc: "Long-term placements for core team building and leadership roles.", icon: <Briefcase className="w-6 h-6" /> },
              { title: "Bulk Hiring", desc: "Rapid scaling solutions for new projects and major expansions.", icon: <LineChart className="w-6 h-6" /> },
              { title: "Executive Search", desc: "Targeted headhunting for C-level and senior technical leadership.", icon: <ShieldCheck className="w-6 h-6" /> },
              { title: "Remote Hiring", desc: "Access global talent pools for distributed and remote-first teams.", icon: <Globe2 className="w-6 h-6" /> },
              { title: "Project-Based", desc: "End-to-end team deployment for specific deliverables and milestones.", icon: <Code2 className="w-6 h-6" /> }
            ].map((service, index) => (
              <div key={index} className="bg-white dark:bg-gray-800 rounded-2xl p-8 border border-gray-100 dark:border-gray-700 shadow-sm hover:shadow-xl hover:border-blue-200 dark:hover:border-blue-900 transition-all group">
                <div className="w-14 h-14 bg-blue-50 dark:bg-blue-900/30 rounded-xl flex items-center justify-center text-blue-600 dark:text-blue-400 mb-6 group-hover:scale-110 transition-transform">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">{service.title}</h3>
                <p className="text-gray-600 dark:text-gray-400">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ROLES WE HIRE */}
      <section className="py-24 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-12">Roles We Specialize In</h2>
          <div className="flex flex-wrap justify-center gap-4">
            {["Data Engineer", "Python Developer", "Azure Engineer", "ServiceNow Developer", "DevOps Engineer", "QA Engineer", "Full Stack Developer", "Business Analyst", "Data Analyst", "Project Manager"].map((role, idx) => (
              <div key={idx} className="px-6 py-3 rounded-full bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-gray-800 dark:text-gray-200 font-medium hover:border-blue-500 hover:text-blue-600 dark:hover:text-blue-400 transition-colors cursor-default">
                {role}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US & PROCESS */}
      <section className="py-24 bg-gray-900 text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-blue-600/10 rounded-full blur-[100px] -z-10"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Why Choose TalentSync?</h2>
              <p className="text-gray-400 text-lg mb-8">Our AI-driven approach drastically reduces time-to-hire while improving candidate quality. We don't just find resumes; we find the right fit for your team culture and technical needs.</p>
              
              <ul className="space-y-6">
                {[
                  "Pre-screened & vetted candidates ready to interview.",
                  "AI Match Scoring for precise technical alignment.",
                  "Dedicated account managers for seamless communication.",
                  "Transparent pricing with no hidden fees."
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start">
                    <CheckCircle2 className="w-6 h-6 text-blue-400 mr-4 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-300 text-lg">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="bg-gray-800/50 backdrop-blur-md rounded-3xl p-8 border border-gray-700">
              <h3 className="text-2xl font-bold mb-8">Our Streamlined Hiring Process</h3>
              <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-gray-700 before:to-transparent">
                {[
                  { step: "01", title: "Submit Requirements", desc: "Share your JD and team needs." },
                  { step: "02", title: "AI Sourcing & Screening", desc: "Our engine identifies top matches instantly." },
                  { step: "03", title: "Interview & Select", desc: "Meet vetted candidates and make your choice." },
                  { step: "04", title: "Onboard & Scale", desc: "We handle the paperwork, you start building." }
                ].map((item, idx) => (
                  <div key={idx} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                    <div className="flex items-center justify-center w-10 h-10 rounded-full border border-blue-500 bg-gray-900 text-blue-400 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10 font-bold">
                      {item.step}
                    </div>
                    <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-gray-800 p-6 rounded-2xl border border-gray-700 shadow-xl group-hover:border-blue-500/50 transition-colors">
                      <h4 className="font-bold text-lg mb-1">{item.title}</h4>
                      <p className="text-gray-400 text-sm">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-24 bg-gray-50 dark:bg-gray-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-12">What Our Clients Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { text: "TalentSync helped us hire a Senior DevOps engineer in just 4 days. Unbelievable speed and quality.", name: "Sarah J.", role: "CTO, FinTech Startup" },
              { text: "The candidates were perfectly matched to our stack. We didn't waste time screening irrelevant resumes.", name: "Mike T.", role: "VP Engineering, Enterprise Co." },
              { text: "Their contract staffing model gave us the flexibility we needed during our busy season.", name: "Amanda R.", role: "Director of IT, HealthTech" }
            ].map((testimonial, idx) => (
              <div key={idx} className="bg-white dark:bg-gray-800 p-8 rounded-2xl border border-gray-100 dark:border-gray-700 shadow-sm text-left relative">
                <div className="text-blue-500 mb-4 text-5xl opacity-20 absolute top-4 right-6 font-serif">"</div>
                <p className="text-gray-600 dark:text-gray-300 italic mb-6 relative z-10">"{testimonial.text}"</p>
                <div>
                  <p className="font-bold text-gray-900 dark:text-white">{testimonial.name}</p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">{testimonial.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="py-24">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-blue-600 to-indigo-700 rounded-3xl p-10 md:p-16 text-center text-white shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
            <h2 className="text-3xl md:text-5xl font-bold mb-6 relative z-10">Ready to transform your hiring?</h2>
            <p className="text-blue-100 text-lg md:text-xl mb-10 max-w-2xl mx-auto relative z-10">
              Join hundreds of companies that trust TalentSync to build their elite IT teams.
            </p>
            <Link href="/contact" className="inline-flex items-center px-8 py-4 rounded-full bg-white text-blue-600 font-bold text-lg hover:bg-blue-50 transition-colors shadow-lg relative z-10">
              Start Hiring Today <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
