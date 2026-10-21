# 💄 DermIQ — Clinical AI Skin Health & Smart Cosmetic Matcher

Submitted for the **YouCam API Skin AI & eCommerce VTO Hackathon** on Devpost ([Event Page](https://youcam-api-skin-ai-ecommerce.devpost.com/)).  
**Applicant Profile:** Solo Developer / Student Track ($1,000 Student Award)  

---

## 🌟 Overview
DermIQ is a modern, responsive web application that turns facial smartphone photos into clinical-grade biometric skin evaluations, tailored active-ingredient prescriptions, and virtual cosmetic shade previews.

### Key Capabilities:
1. **Clinical Skin Biometrics (YouCam Skin Analysis API):**
   * Multi-spectral analysis across 5 core dermatological axes: Barrier Hydration, Erythema/Redness, Pore & Texture, Sebum Equilibrium, and Photodamage.
   * Synthesizes an overall 0–100 Skin Index with color-coded severity levels.
2. **Virtual Try-On (VTO) Simulator:**
   * Interactive undertone-matched shade preview with real-time coverage density slider (Sheer Tint $\to$ Medium Glow $\to$ Full Barrier).
3. **Algorithmic Prescription Engine:**
   * Recommends active cosmetic formulations (Niacinamide, Hyaluronic Acid, Centella Asiatica, Zinc PCA, Mineral SPF) paired directly to detected deficits.
4. **Privacy-First:**
   * Client-side preview and in-memory API proxying with zero cloud image persistence.

---

## 🚀 Getting Started

```bash
# 1. Install dependencies
npm install

# 2. Run the development server
npm run dev

# 3. Open in your browser
http://localhost:3000
```

---

## 🛠️ Tech Stack
* **Framework:** Next.js 15 (App Router) + React 19 + TypeScript
* **Styling:** Tailwind CSS (8pt spatial system, WCAG AA contrast)
* **Icons:** Lucide React
* **AI API Integration:** YouCam Skin Analysis & Virtual Try-On API
