"use client";

import React, { useState } from "react";
import { Sliders, Eye, Sparkles } from "lucide-react";

export default function VirtualTryOn() {
  const [selectedShade, setSelectedShade] = useState(1);
  const [coverage, setCoverage] = useState(60);

  const shades = [
    { name: "Fair Ivory", hex: "#f8e2cf", tone: "Cool Neutral" },
    { name: "Warm Almond", hex: "#e7be99", tone: "Warm Golden" },
    { name: "Sunlit Caramel", hex: "#c7976e", tone: "Warm Olive" },
    { name: "Deep Chestnut", hex: "#8d583b", tone: "Rich Deep" },
  ];

  return (
    <div className="rounded-2xl border border-stone-200 bg-white p-6 shadow-sm">
      <div className="border-b border-stone-100 pb-4">
        <h2 className="text-lg font-semibold text-stone-900 flex items-center gap-2">
          <Eye className="h-5 w-5 text-indigo-500" />
          Virtual Tint & Mineral Try-On (VTO Simulation)
        </h2>
        <p className="text-sm text-stone-500">Live shade matching and coverage opacity simulator for cosmetic e-commerce.</p>
      </div>

      <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
        {/* Preview canvas */}
        <div className="relative aspect-video rounded-2xl bg-stone-100 border border-stone-200 overflow-hidden flex items-center justify-center">
          <div
            className="absolute inset-0 transition-opacity duration-300 pointer-events-none"
            style={{
              backgroundColor: shades[selectedShade].hex,
              opacity: coverage / 250,
            }}
          />
          <div className="relative z-10 text-center p-4">
            <span className="inline-block rounded-full bg-stone-900/80 backdrop-blur-sm text-white px-3 py-1 text-xs font-medium">
              VTO Filter: {shades[selectedShade].name} ({coverage}% Opacity)
            </span>
            <p className="mt-2 text-xs text-stone-500">Matched to your natural undertone: {shades[selectedShade].tone}</p>
          </div>
        </div>

        {/* Controls */}
        <div className="space-y-5">
          <div>
            <label className="text-xs font-semibold uppercase tracking-wider text-stone-400">Select Formulation Shade</label>
            <div className="mt-2 grid grid-cols-2 gap-2">
              {shades.map((s, idx) => (
                <button
                  key={idx}
                  onClick={() => setSelectedShade(idx)}
                  className={`flex items-center gap-2.5 rounded-xl border p-2.5 text-left text-xs transition ${
                    selectedShade === idx ? "border-stone-900 bg-stone-50 font-semibold" : "border-stone-200 hover:bg-stone-50/50"
                  }`}
                >
                  <span className="h-4 w-4 rounded-full border border-black/10 shadow-inner" style={{ backgroundColor: s.hex }} />
                  <div>
                    <div className="text-stone-900">{s.name}</div>
                    <div className="text-stone-400 font-normal text-[10px]">{s.tone}</div>
                  </div>
                </button>
              ))}
            </div>
          </div>

          <div>
            <div className="flex justify-between text-xs font-medium text-stone-700">
              <span className="flex items-center gap-1.5"><Sliders className="h-3.5 w-3.5 text-stone-400" /> Coverage Density</span>
              <span>{coverage}%</span>
            </div>
            <input
              type="range"
              min="10"
              max="90"
              value={coverage}
              onChange={(e) => setCoverage(Number(e.target.value))}
              className="mt-2 w-full accent-stone-900 cursor-pointer"
            />
            <div className="mt-1 flex justify-between text-[10px] text-stone-400">
              <span>Sheer Tint</span>
              <span>Medium Glow</span>
              <span>Full Barrier</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
