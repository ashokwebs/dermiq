# 💄 DermIQ — Clinical AI Skin Health & Smart Cosmetic Matcher

[![Next.js 15](https://img.shields.io/badge/Next.js-15.1.0-black?style=flat&logo=next.js)](https://nextjs.org/)
[![React 19](https://img.shields.io/badge/React-19.0.0-blue?style=flat&logo=react)](https://react.dev/)
[![TypeScript 5](https://img.shields.io/badge/TypeScript-5.7-blue?style=flat&logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4-38bdf8?style=flat&logo=tailwindcss)](https://tailwindcss.com/)
[![YouCam API](https://img.shields.io/badge/API-YouCam%20Skin%20AI-e11d48?style=flat)](https://www.perfectcorp.com/)
[![Tests](https://img.shields.io/badge/Tests-2%2F2%20Passing-brightgreen?style=flat)]()
[![Deploy](https://img.shields.io/badge/Deploy-Vercel%20Edge-black?style=flat&logo=vercel)](https://dermiq-one.vercel.app)

Submitted for the **[YouCam API Skin AI & eCommerce VTO Hackathon](https://youcam-api-skin-ai-ecommerce.devpost.com/)** on Devpost.  
* **Track:** Solo Developer / Student Track ($1,000 Student Award + $2,500 1st)  
* **Live Web App:** [https://dermiq-one.vercel.app](https://dermiq-one.vercel.app)  

---

## 🌟 Overview
DermIQ is a modern, responsive web application that turns facial smartphone photos into clinical-grade biometric skin evaluations, tailored active-ingredient prescriptions, and virtual cosmetic shade previews.

```
┌─────────────────────┐     ┌────────────────────────┐     ┌────────────────────────┐
│ Facial Photo Capture│ ──> │   YouCam Skin AI API   │ ──> │ Clinical Skin Index    │
│ (Client Camera/File)│     │(Multi-spectral Scanner)│     │ (0-100 Biometric Score)│
└─────────────────────┘     └────────────────────────┘     └───────────┬────────────┘
                                                                       │
┌─────────────────────┐     ┌────────────────────────┐                 ▼
│ Printable Record    │ <── │ Virtual Try-On (VTO)   │ <── ┌────────────────────────┐
│ (window.print CSS)  │     │ (Shade Matcher + Tint) │     │ Active Ingredient Rx   │
└─────────────────────┘     └────────────────────────┘     │ (Niacinamide / HA / Zn)│
                                                           └────────────────────────┘
```

---

## ✨ Key Capabilities

1. **Clinical Skin Biometrics (YouCam Skin Analysis Engine):**
   * Multi-spectral analysis across 5 core dermatological axes: Barrier Hydration, Erythema/Redness, Pore & Texture, Sebum Equilibrium, and Photodamage.
   * Synthesizes an overall 0–100 Skin Index with color-coded severity levels.
2. **Virtual Try-On (VTO) Simulator:**
   * Interactive undertone-matched shade preview with real-time coverage density slider (Sheer Tint $\to$ Medium Glow $\to$ Full Barrier).
3. **Algorithmic Prescription Engine:**
   * Recommends active cosmetic formulations (Niacinamide, Hyaluronic Acid, Centella Asiatica, Zinc PCA, Mineral SPF) paired directly to detected deficits.
4. **Clinical Consultation Persona Switcher:**
   * Instant switching between `Dr. Elena Vance, MD (Board Dermatologist)`, `Sarah M. (Patient / Client)`, and `Judge / Evaluator`.
5. **Printable Clinical Record Exporter:**
   * One-click PDF / paper export via `window.print` with dedicated `@media print` clean typography.
6. **Privacy-First:**
   * Client-side preview and in-memory API proxying with zero cloud image persistence.

---

## 🚀 Getting Started

```bash
# 1. Clone repository
git clone https://github.com/ashokwebs/dermiq.git
cd dermiq

# 2. Install dependencies
npm install

# 3. Run automated test suite
npm test

# 4. Run the development server
npm run dev
# Open http://localhost:3000
```

---

## 🧪 Automated Testing
```bash
$ npm test

> dermiq@0.1.0 test
> node --test tests/**/*.test.mjs

✔ Clinical Skin Metrics Validation
✔ Clinical Persona Authorization Verification
ℹ tests 2
ℹ suites 0
ℹ pass 2
```

---

## 🛠️ Architecture & Tech Stack
* **Framework:** Next.js 15 (App Router) + React 19 + TypeScript
* **Styling:** Tailwind CSS (8pt spatial system, WCAG AA contrast)
* **Icons:** Lucide React
* **AI API Integration:** YouCam Skin Analysis & Virtual Try-On API
* **Deployment:** Vercel Global Edge Network
