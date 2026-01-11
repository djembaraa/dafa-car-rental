"use client";

import React from "react";
import { motion } from "framer-motion";
import { Lock, Eye, Database, Cookie, Shield, FileCheck, Mail } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const PRIVACY_SECTIONS = [
  {
    id: "collection",
    title: "1. Information We Collect",
    icon: <DatabaseIcon />,
    content: (
      <div className="space-y-4 text-gray-600">
        <p>
          We collect information to provide better services to all our users. This includes:
        </p>
        <ul className="list-disc pl-5 space-y-2">
          <li><strong>Personal Identification:</strong> Name, email address, phone number, and residential address.</li>
          <li><strong>Verification Documents:</strong> Scanned copies of ID Card (KTP/Passport) and Driver's License (SIM).</li>
          <li><strong>Transaction Data:</strong> Details about payments to and from you and other details of products and services you have purchased from us.</li>
        </ul>
      </div>
    ),
  },
  {
    id: "usage",
    title: "2. How We Use Your Data",
    icon: <FileCheckIcon />,
    content: (
      <div className="space-y-4 text-gray-600">
        <p>Your information is used strictly for:</p>
        <ul className="list-disc pl-5 space-y-2">
          <li>Processing your vehicle rental bookings and payments.</li>
          <li>Verifying your identity and driving eligibility for insurance purposes.</li>
          <li>Communicating with you regarding your booking status or support requests.</li>
          <li>Improving our fleet quality and website user experience.</li>
        </ul>
      </div>
    ),
  },
  {
    id: "security",
    title: "3. Data Security",
    icon: <LockIcon />,
    content: (
      <p className="text-gray-600 leading-relaxed">
        We implement a variety of security measures to maintain the safety of your personal information. Your sensitive documents (KTP/SIM) are stored in an encrypted environment and are only accessible by authorized verification staff. We <strong>never</strong> sell your data to third-party advertisers.
      </p>
    ),
  },
  {
    id: "cookies",
    title: "4. Cookies & Tracking",
    icon: <CookieIcon />,
    content: (
      <p className="text-gray-600 leading-relaxed">
        Our website uses "cookies" to enhance your experience. These cookies help us remember your preferences (like language or login status) and understand how you interact with our site so we can improve it. You can choose to disable cookies through your browser settings, though some features may not function properly.
      </p>
    ),
  },
  {
    id: "sharing",
    title: "5. Third-Party Disclosure",
    icon: <EyeIcon />,
    content: (
      <div className="space-y-4 text-gray-600">
        <p>We do not trade or transfer your Personally Identifiable Information to outside parties, except:</p>
        <ul className="list-disc pl-5 space-y-2">
          <li>Trusted third parties who assist us in operating our website (e.g., Payment Gateways like Midtrans/Xendit), so long as those parties agree to keep this information confidential.</li>
          <li>When we believe release is appropriate to comply with the law (e.g., traffic violations or police investigations).</li>
        </ul>
      </div>
    ),
  },
];

function DatabaseIcon() { return <div className="p-2 bg-blue-100 text-blue-700 rounded-lg"><Database size={20} /></div> }
function FileCheckIcon() { return <div className="p-2 bg-green-100 text-green-700 rounded-lg"><FileCheck size={20} /></div> }
function LockIcon() { return <div className="p-2 bg-purple-100 text-purple-700 rounded-lg"><Lock size={20} /></div> }
function CookieIcon() { return <div className="p-2 bg-orange-100 text-orange-700 rounded-lg"><Cookie size={20} /></div> }
function EyeIcon() { return <div className="p-2 bg-red-100 text-red-700 rounded-lg"><Eye size={20} /></div> }

export default function PrivacyPage() {
  return (
    <div className="min-h-screen font-sans bg-gray-50 text-gray-900 selection:bg-blue-700 selection:text-white">
      <Navbar />

      <main className="pt-20">
        <section className="relative h-[50vh] flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 z-0 bg-gray-900">
            <Image
              src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=1740&auto=format&fit=crop" // Cyber/Tech background
              alt="Privacy and Security"
              fill
              sizes="100vw"
              className="object-cover scale-105 contrast-[1.1] brightness-[0.5]"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-gray-900/90 via-gray-900/40 to-blue-900/20 mix-blend-multiply"></div>
          </div>

          <div className="relative z-10 max-w-4xl mx-auto px-6 text-center text-white">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-1.5 mb-6 text-xs font-bold tracking-widest text-blue-200 uppercase bg-white/10 border border-white/20 rounded-full backdrop-blur-sm">
                <Shield size={14} /> Data Protection
              </div>
              <h1 className="text-4xl lg:text-6xl font-black tracking-tighter mb-4 drop-shadow-lg">
                Privacy Policy.
              </h1>
              <p className="text-lg text-gray-300 max-w-xl mx-auto font-medium">
                We value your trust. Here is how we protect and manage your personal data.
              </p>
              <p className="mt-4 text-sm text-gray-400">Effective Date: January 1, 2026</p>
            </motion.div>
          </div>
        </section>

        <section className="py-20 px-6">
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12">
            
            <div className="lg:col-span-4">
              <div className="sticky top-32 space-y-8">
                <div className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm">
                  <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
                    <Shield size={20} className="text-blue-700" />
                    Key Points
                  </h3>
                  <nav className="space-y-3">
                    {PRIVACY_SECTIONS.map((section) => (
                      <Link 
                        key={section.id} 
                        href={`#${section.id}`}
                        className="block text-gray-600 hover:text-blue-700 hover:translate-x-1 transition-all text-sm font-medium"
                      >
                        {section.title}
                      </Link>
                    ))}
                  </nav>
                </div>

                <div className="bg-gray-900 text-white p-8 rounded-3xl shadow-xl relative overflow-hidden">
                    <div className="relative z-10">
                        <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center mb-4">
                            <Mail size={24} />
                        </div>
                        <h4 className="font-bold text-lg mb-2">Privacy Concerns?</h4>
                        <p className="text-gray-400 text-sm mb-6">Contact our Data Protection Officer if you wish to delete your data.</p>
                        <Link href="/contact" className="text-white text-sm font-bold underline decoration-blue-500 underline-offset-4 hover:text-blue-300 transition">
                            Email DPO
                        </Link>
                    </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-8 space-y-8">
              {PRIVACY_SECTIONS.map((section, idx) => (
                <motion.div
                  key={section.id}
                  id={section.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="bg-white p-8 md:p-10 rounded-[2rem] border border-gray-100 shadow-sm hover:shadow-md transition-shadow scroll-mt-32"
                >
                  <div className="flex items-center gap-4 mb-6 pb-6 border-b border-gray-100">
                    {section.icon}
                    <h2 className="text-2xl font-bold tracking-tight text-gray-900">
                      {section.title}
                    </h2>
                  </div>
                  <div className="prose prose-blue max-w-none text-gray-600 leading-relaxed">
                    {section.content}
                  </div>
                </motion.div>
              ))}

              <div className="p-8 text-center">
                  <p className="text-sm text-gray-500">
                    This policy may be updated from time to time. We will notify you of any significant changes via email.
                  </p>
              </div>
            </div>

          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}