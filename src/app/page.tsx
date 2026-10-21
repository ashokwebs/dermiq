"use client";

import React, { useState } from "react";
import SkinAnalysis from "@/components/SkinAnalysis";
import ProductMatcher from "@/components/ProductMatcher";
import VirtualTryOn from "@/components/VirtualTryOn";
import { Sparkles, Shield, HeartPulse, ExternalLink } from "lucide-react";

export default function Home() {
  const [score, setScore] = useState<number | null>(null);

  return (
    <main className="mx-auto max-w-5xl px-4 py-10 sm:px-6 lg:px-8">
      {/* Header */}
      <header className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-stone-200/80 pb-6">
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

        <div className="flex items-center gap-2">
          <span className="inline-flex items-center gap-1 rounded-lg border border-stone-200 bg-white px-3 py-1.5 text-xs font-medium text-stone-600 shadow-sm">
            <Shield className="h-3.5 w-3.5 text-emerald-500" />
            100% In-Memory / HIPAA Privacy
          </span>
        </div>
      </header>

      {/* Main Sections */}
      <div className="mt-8 space-y-8">
        {/* Section 1: Skin Biometrics & Health Index */}
        <SkinAnalysis onAnalyze={(s) => setScore(s)} />

        {/* Section 2: Virtual Try-on Simulation */}
        <VirtualTryOn />

        {/* Section 3: Algorithmic Formulations Matcher */}
        <ProductMatcher />
      </div>

      {/* Footer */}
      <footer className="mt-16 border-t border-stone-200/80 pt-6 pb-12 flex flex-col sm:flex-row items-center justify-between text-xs text-stone-400 gap-4">
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
