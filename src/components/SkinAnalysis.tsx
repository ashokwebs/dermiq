"use client";

import React, { useState } from "react";
import { Sparkles, ShieldCheck, Activity, Droplets, Sun, AlertCircle } from "lucide-react";

export interface Metric {
  label: string;
  score: number;
  status: "Optimal" | "Moderate" | "Needs Attention";
  recommendation: string;
}

export default function SkinAnalysis({ onAnalyze }: { onAnalyze: (score: number) => void }) {
  const [analyzing, setAnalyzing] = useState(false);
  const [analyzed, setAnalyzed] = useState(false);

  const [metrics, setMetrics] = useState<Metric[]>([
    { label: "Barrier Hydration", score: 82, status: "Optimal", recommendation: "Maintain with multi-molecular hyaluronic acid." },
    { label: "Erythema / Redness", score: 64, status: "Moderate", recommendation: "Soothe with 4% Niacinamide and Centella Asiatica." },
    { label: "Pore & Texture", score: 78, status: "Optimal", recommendation: "Gentle weekly BHA micro-exfoliation." },
    { label: "Sebum Equilibrium", score: 55, status: "Needs Attention", recommendation: "Zinc PCA formulation to balance T-zone lipid flow." },
    { label: "Photodamage / Spots", score: 88, status: "Optimal", recommendation: "Daily broad-spectrum SPF 50+ mineral shield." },
  ]);

  const handleSimulateAnalysis = () => {
    setAnalyzing(true);
    setTimeout(() => {
      setAnalyzing(false);
      setAnalyzed(true);
      onAnalyze(73);
    }, 1200);
  };

  return (
    <div className="rounded-2xl border border-stone-200 bg-white p-6 shadow-sm">
      <div className="flex items-center justify-between border-b border-stone-100 pb-4">
        <div>
          <h2 className="text-lg font-semibold text-stone-900 flex items-center gap-2">
            <Activity className="h-5 w-5 text-rose-500" />
            Clinical Skin Diagnostic (YouCam AI Engine)
          </h2>
          <p className="text-sm text-stone-500">Live multi-spectral skin surface analysis and barrier scoring.</p>
        </div>
        <button
          onClick={handleSimulateAnalysis}
          disabled={analyzing}
          className="inline-flex items-center gap-2 rounded-xl bg-stone-900 px-4 py-2.5 text-sm font-medium text-white shadow-sm hover:bg-stone-800 disabled:opacity-50 transition"
        >
          <Sparkles className="h-4 w-4 text-rose-400" />
          {analyzing ? "Scanning Biometrics..." : "Run Diagnostic"}
        </button>
      </div>

      <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
        {/* Visual Scanner Mockup */}
        <div className="relative aspect-square max-w-sm mx-auto w-full rounded-2xl bg-gradient-to-tr from-stone-100 to-rose-50 border border-stone-200/80 overflow-hidden flex flex-col items-center justify-center p-6 text-center">
          <div className="absolute inset-0 bg-[radial-gradient(#e11d48_1px,transparent_1px)] [background-size:16px_16px] opacity-20" />
          
          <div className="relative z-10 flex flex-col items-center">
            <div className="h-28 w-28 rounded-full border-4 border-rose-400/40 border-t-rose-500 flex items-center justify-center animate-spin-slow">
              <div className="h-20 w-20 rounded-full bg-white shadow-md flex items-center justify-center font-bold text-2xl text-stone-800">
                {analyzed ? "73" : "--"}
              </div>
            </div>
            <span className="mt-3 text-xs font-semibold uppercase tracking-wider text-stone-500">
              Overall Skin Index
            </span>
            <span className="text-xs text-stone-400 mt-1">
              {analyzed ? "Grade: Balanced & Resilient" : "Awaiting Camera / Input"}
            </span>
          </div>

          {analyzing && (
            <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-transparent via-rose-500 to-transparent animate-pulse" />
          )}
        </div>

        {/* Metrics List */}
        <div className="space-y-3">
          {metrics.map((m, idx) => (
            <div key={idx} className="rounded-xl border border-stone-100 bg-stone-50/70 p-3.5 transition hover:bg-stone-50">
              <div className="flex items-center justify-between text-sm">
                <span className="font-medium text-stone-800 flex items-center gap-2">
                  {m.label === "Barrier Hydration" && <Droplets className="h-4 w-4 text-sky-500" />}
                  {m.label === "Photodamage / Spots" && <Sun className="h-4 w-4 text-amber-500" />}
                  {m.label === "Erythema / Redness" && <AlertCircle className="h-4 w-4 text-rose-500" />}
                  {m.label}
                </span>
                <span className="font-semibold text-stone-900">{m.score}/100</span>
              </div>

              {/* Progress bar */}
              <div className="mt-2 h-1.5 w-full rounded-full bg-stone-200 overflow-hidden">
                <div
                  className={`h-full rounded-full transition-all duration-500 ${
                    m.score >= 75 ? "bg-emerald-500" : m.score >= 60 ? "bg-amber-500" : "bg-rose-500"
                  }`}
                  style={{ width: `${analyzed ? m.score : 0}%` }}
                />
              </div>

              <p className="mt-1.5 text-xs text-stone-500">{m.recommendation}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
