"use client";

import React, { useState } from "react";
import SkinAnalysis from "@/components/SkinAnalysis";
import ProductMatcher from "@/components/ProductMatcher";
import VirtualTryOn from "@/components/VirtualTryOn";
import {
  Sparkles,
  Shield,
  HeartPulse,
  ExternalLink,
  User,
  Printer,
  ChevronDown,
  Check,
  Stethoscope,
  Calendar,
  FileText
} from "lucide-react";

interface ClinicalProfile {
  id: string;
  name: string;
  role: "clinician" | "patient" | "judge";
  clinicName: string;
  patientId: string;
}

const PROFILES: ClinicalProfile[] = [
  {
    id: "prof_clinician",
    name: "Dr. Elena Vance, MD",
    role: "clinician",
    clinicName: "Advanced Aesthetic Dermatology Clinic",
    patientId: "PT-2026-8941",
  },
  {
    id: "prof_patient",
    name: "Sarah M. (Dry / Sensitive Barrier)",
    role: "patient",
    clinicName: "Self-Care Consultation",
    patientId: "PT-SELF-0412",
  },
  {
    id: "prof_judge",
    name: "Guest Evaluator (YouCam Devpost Judge)",
    role: "judge",
    clinicName: "YouCam AI Hackathon Review Sandbox",
    patientId: "EVAL-2026-001",
  },
];

export default function Home() {
  const [profile, setProfile] = useState<ClinicalProfile>(PROFILES[0]);
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [score, setScore] = useState<number | null>(76);
  const [toast, setToast] = useState<string | null>(null);

  const showToast = (msg: string) => {
    setToast(msg);
    setTimeout(() => setToast(null), 3000);
  };

  const handlePrint = () => {
    showToast("Opening Clinical Consultation Printable Summary...");
    window.print();
  };

  return (
    <main className="mx-auto max-w-5xl px-4 py-8 sm:px-6 lg:px-8 space-y-8 print:p-0 print:m-0">
      {/* Toast Alert */}
      {toast && (
        <div className="fixed bottom-6 right-6 z-50 flex items-center gap-2 bg-stone-900 text-white px-4 py-2.5 rounded-xl shadow-2xl text-xs font-medium border border-stone-700 animate-in fade-in slide-in-from-bottom-2">
          <Sparkles className="w-4 h-4 text-rose-400" />
          <span>{toast}</span>
        </div>
      )}

      {/* Header */}
      <header className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-stone-200/80 pb-6 print:hidden">
        <div>
          <div className="inline-flex items-center gap-1.5 rounded-full bg-rose-50 border border-rose-100 px-3 py-1 text-xs font-semibold text-rose-600 mb-2">
            <Sparkles className="h-3.5 w-3.5" />
            YouCam AI API Skin & VTO Hackathon Entry
          </div>
          <h1 className="text-2xl sm:text-3xl font-bold tracking-tight text-stone-900">
            DermIQ
          </h1>
          <p className="mt-1 text-sm text-stone-500">
            Clinical-grade facial biomarker analysis, active ingredient matcher, and virtual try-on simulation.
          </p>
        </div>

        <div className="flex items-center gap-3">
          {/* Clinical Profile Switcher */}
          <div className="relative">
            <button
              onClick={() => setIsProfileOpen(!isProfileOpen)}
              className="flex items-center gap-2 rounded-xl border border-stone-200 bg-white px-3 py-1.5 text-xs font-medium text-stone-700 shadow-sm hover:bg-stone-50 transition"
            >
              <div className="w-5 h-5 rounded-full bg-rose-600 text-white flex items-center justify-center font-bold text-[10px]">
                {profile.name.charAt(0)}
              </div>
              <span className="max-w-[130px] truncate hidden sm:inline">{profile.name}</span>
              <ChevronDown className="w-3.5 h-3.5 text-stone-400" />
            </button>

            {isProfileOpen && (
              <div className="absolute right-0 mt-2 w-72 bg-white border border-stone-200 rounded-2xl p-3 shadow-xl z-50 space-y-2">
                <div className="pb-2 border-b border-stone-100 text-[11px] text-stone-400 font-medium">
                  Select Consultation Persona:
                </div>
                {PROFILES.map((p) => (
                  <button
                    key={p.id}
                    onClick={() => {
                      setProfile(p);
                      setIsProfileOpen(false);
                      showToast(`Switched consultation to ${p.name}`);
                    }}
                    className={`w-full text-left px-2.5 py-1.5 rounded-lg text-xs flex items-center justify-between transition ${
                      profile.id === p.id ? "bg-rose-50 text-rose-700 font-semibold" : "hover:bg-stone-50 text-stone-600"
                    }`}
                  >
                    <div>
                      <div className="truncate">{p.name}</div>
                      <div className="text-[10px] text-stone-400">{p.clinicName}</div>
                    </div>
                    {profile.id === p.id && <Check className="w-3.5 h-3.5 text-rose-600" />}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Print Prescription Button */}
          <button
            onClick={handlePrint}
            className="inline-flex items-center gap-1.5 rounded-xl border border-stone-200 bg-white px-3 py-1.5 text-xs font-semibold text-stone-700 shadow-sm hover:bg-stone-50 transition"
          >
            <Printer className="w-3.5 h-3.5 text-stone-500" />
            Export Summary
          </button>
        </div>
      </header>

      {/* Printable Clinical Header (Visible only when printing) */}
      <div className="hidden print:block border-b-2 border-stone-900 pb-4 mb-6">
        <div className="flex justify-between items-start">
          <div>
            <h1 className="text-2xl font-bold text-stone-900">DermIQ · Clinical Consultation Record</h1>
            <p className="text-xs text-stone-600">{profile.clinicName}</p>
          </div>
          <div className="text-right text-xs text-stone-600">
            <div>Patient ID: <strong>{profile.patientId}</strong></div>
            <div>Consultant: <strong>{profile.name}</strong></div>
            <div>Date: October 2026</div>
          </div>
        </div>
      </div>

      {/* Main Sections */}
      <div className="space-y-8">
        {/* Section 1: Skin Biometrics & Health Index */}
        <SkinAnalysis onAnalyze={(s) => setScore(s)} />

        {/* Section 2: Virtual Try-on Simulation */}
        <VirtualTryOn />

        {/* Section 3: Algorithmic Formulations Matcher */}
        <ProductMatcher />
      </div>

      {/* Footer */}
      <footer className="border-t border-stone-200/80 pt-6 pb-12 flex flex-col sm:flex-row items-center justify-between text-xs text-stone-400 gap-4 print:hidden">
        <div>
          DermIQ by Ashok Pasala (@ashokwebs) &middot; Submitted for YouCam API Hackathon 2026.
        </div>
        <div className="flex items-center gap-4">
          <a
            href="https://youcam-api-skin-ai-ecommerce.devpost.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-stone-600 inline-flex items-center gap-1 transition"
          >
            Devpost Hackathon <ExternalLink className="h-3 w-3" />
          </a>
        </div>
      </footer>
    </main>
  );
}
