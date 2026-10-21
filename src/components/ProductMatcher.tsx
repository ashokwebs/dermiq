"use client";

import React from "react";
import { CheckCircle2, ShieldCheck, ArrowRight } from "lucide-react";

export interface Prescription {
  step: string;
  active: string;
  purpose: string;
  timing: "Morning" | "Evening" | "Daily";
  dosage: string;
}

export default function ProductMatcher() {
  const regimen: Prescription[] = [
    {
      step: "01. Restore & Soothe",
      active: "4% Niacinamide + Centella Asiatica Serum",
      purpose: "Attenuates vascular erythema, reinforces lipid stratum corneum.",
      timing: "Morning",
      dosage: "3 drops onto damp skin",
    },
    {
      step: "02. Barrier Hydration",
      active: "Multi-Weight Hyaluronic Acid + Ceramide NP Complex",
      purpose: "Locks dermal trans-epidermal water retention without comedogenic weight.",
      timing: "Daily",
      dosage: "1 pump morning & evening",
    },
    {
      step: "03. Cellular Defense",
      active: "Zinc Oxide 18% Non-Nano Mineral Sun Shield (SPF 50+)",
      purpose: "Blocks UVA/UVB photon oxidation and stops premature elastin degradation.",
      timing: "Morning",
      dosage: "Two finger lengths",
    },
  ];

  return (
    <div className="rounded-2xl border border-stone-200 bg-white p-6 shadow-sm">
      <div className="border-b border-stone-100 pb-4">
        <h2 className="text-lg font-semibold text-stone-900 flex items-center gap-2">
          <ShieldCheck className="h-5 w-5 text-emerald-600" />
          Active Formulation Prescriptions
        </h2>
        <p className="text-sm text-stone-500">Algorithmic active ingredient pairings matched to detected skin deficits.</p>
      </div>

      <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
        {regimen.map((r, i) => (
          <div key={i} className="flex flex-col justify-between rounded-xl border border-stone-200/70 bg-stone-50/50 p-4 transition hover:border-stone-300">
            <div>
              <div className="flex items-center justify-between text-xs font-semibold text-stone-400 uppercase tracking-wider">
                <span>{r.step}</span>
                <span className="rounded-full bg-stone-200/60 px-2 py-0.5 text-stone-700 lowercase font-medium">{r.timing}</span>
              </div>
              <h3 className="mt-2 text-sm font-semibold text-stone-900 leading-snug">{r.active}</h3>
              <p className="mt-1.5 text-xs text-stone-600 leading-relaxed">{r.purpose}</p>
            </div>

            <div className="mt-4 pt-3 border-t border-stone-200/50 flex items-center justify-between text-xs">
              <span className="text-stone-400">Dosage: <strong className="text-stone-700">{r.dosage}</strong></span>
              <CheckCircle2 className="h-4 w-4 text-emerald-500" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
