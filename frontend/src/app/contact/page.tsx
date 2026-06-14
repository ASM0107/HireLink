"use client";

import React, { useState } from "react";
import { Mail, Phone, MapPin, Send, CheckCircle2 } from "lucide-react";
import { Input } from "@/components/ui/Input";
import { Textarea } from "@/components/ui/Textarea";
import { Button } from "@/components/ui/Button";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: ""
  });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    setErrorMessage("");

    try {
      const response = await fetch("http://localhost:8000/api/v1/leads/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: `${formData.firstName} ${formData.lastName}`.trim(),
          email: formData.email,
          phone: formData.phone || undefined,
          message: formData.message,
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to submit. Please try again.");
      }

      setStatus("success");
      setFormData({ firstName: "", lastName: "", email: "", phone: "", message: "" });
    } catch (err: any) {
      setStatus("error");
      setErrorMessage(err.message || "An unexpected error occurred.");
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white mb-4">Contact Us</h1>
          <p className="text-lg text-gray-600 dark:text-gray-400">Let's discuss how we can help you build your ultimate IT team.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 bg-white dark:bg-gray-800 rounded-3xl shadow-xl overflow-hidden">
          {/* Contact Info */}
          <div className="bg-blue-600 text-white p-10 flex flex-col justify-between">
            <div>
              <h2 className="text-2xl font-bold mb-6">Contact Information</h2>
              <p className="text-blue-100 mb-8">Fill out the form and our team will get back to you within 24 hours.</p>
              
              <div className="space-y-6">
                <div className="flex items-center">
                  <Phone className="w-6 h-6 text-blue-200 mr-4" />
                  <span>+1 (555) 123-4567</span>
                </div>
                <div className="flex items-center">
                  <Mail className="w-6 h-6 text-blue-200 mr-4" />
                  <span>hello@talentsync.com</span>
                </div>
                <div className="flex items-start">
                  <MapPin className="w-6 h-6 text-blue-200 mr-4 mt-1" />
                  <span>123 Innovation Drive<br/>Tech District, San Francisco<br/>CA 94105</span>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2 p-10">
            {status === "success" ? (
              <div className="flex flex-col items-center justify-center h-full text-center py-12">
                <CheckCircle2 className="w-16 h-16 text-green-500 mb-6" />
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">Message Sent!</h3>
                <p className="text-gray-600 dark:text-gray-400">Thank you for reaching out. Our team will get back to you shortly.</p>
                <Button onClick={() => setStatus("idle")} className="mt-8" variant="outline">Send Another Message</Button>
              </div>
            ) : (
              <form className="space-y-6" onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <Input label="First Name" name="firstName" placeholder="John" required value={formData.firstName} onChange={handleChange} disabled={status === "loading"} />
                  <Input label="Last Name" name="lastName" placeholder="Doe" required value={formData.lastName} onChange={handleChange} disabled={status === "loading"} />
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <Input label="Email" type="email" name="email" placeholder="john@company.com" required value={formData.email} onChange={handleChange} disabled={status === "loading"} />
                  <Input label="Phone" type="tel" name="phone" placeholder="+1 (555) 000-0000" value={formData.phone} onChange={handleChange} disabled={status === "loading"} />
                </div>

                <Textarea label="Message" name="message" rows={4} placeholder="Tell us about your hiring needs..." required value={formData.message} onChange={handleChange} disabled={status === "loading"} />

                {status === "error" && (
                  <div className="p-4 bg-red-50 text-red-600 rounded-lg text-sm">{errorMessage}</div>
                )}

                <Button type="submit" size="lg" className="w-full sm:w-auto mt-4" disabled={status === "loading"}>
                  {status === "loading" ? "Sending..." : "Send Message"} <Send className="ml-2 w-5 h-5" />
                </Button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
