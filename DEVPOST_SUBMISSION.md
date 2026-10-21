# 💄 DermIQ — Devpost Submission Package

**Hackathon:** [YouCam API Skin AI & eCommerce VTO Hackathon](https://youcam-api-skin-ai-ecommerce.devpost.com/)  
**Deadline:** November 2, 2026 at 21:15 IST  
**Target Award:** **$1,000 Student Award** (and General Category: 1st $2,500 / 2nd $1,000 / 3rd $500)  
**Live Application:** [https://dermiq-one.vercel.app](https://dermiq-one.vercel.app)  
**GitHub Repository:** [https://github.com/ashokwebs/dermiq](https://github.com/ashokwebs/dermiq)  

---

## 1. Project Tagline / One-Liner (100 characters max)
> Clinical AI skin biometrics, smart active-ingredient prescriptions, and virtual cosmetic shade try-on.

---

## 2. Inspiration
Modern skincare and cosmetic purchasing suffers from high decision fatigue and alarming product return rates (~30% in online cosmetics due to incorrect shade matching and skin irritation). Consumers frequently purchase complex active serums (retinols, AHAs, high-concentration acids) without understanding their current skin barrier integrity or erythema levels. 

We built **DermIQ** to democratize clinical-grade dermatological screening for indie skincare brands and direct-to-consumer shoppers—giving every smartphone user access to transparent biometric facial auditing, precision ingredient matching, and photorealistic virtual shade simulation before purchasing.

---

## 3. What it Does
DermIQ transforms any front-facing camera or smartphone selfie into an interactive clinical dermatology consultation:

1. **Multi-Spectral Skin Biometrics (YouCam Skin Analysis API):**
   * Computes an overall **Skin Health Index (0–100)** alongside granular telemetry across five dermatological axes: *Barrier Hydration, Erythema & Redness, Pore & Texture, Sebum Equilibrium, and Photodamage*.
   * Renders an interactive visual diagnostic radar with real-time severity ratings and clinical observations.
2. **Interactive Virtual Try-On (VTO) Simulator:**
   * Allows users to select complementary cosmetic undertones (Warm Golden, Neutral Sand, Cool Alabaster, Deep Amber).
   * Features a real-time **Coverage Density Slider** (Sheer Tint $\to$ Medium Glow $\to$ Full Barrier) that dynamically modulates optical opacity over detected skin undertones.
3. **Algorithmic Active Formulation Matcher:**
   * Automatically correlates detected physiological deficits with verified dermatological actives (e.g., *Niacinamide 5%* for erythema mitigation, *Hyaluronic Acid Multi-Molecular* for trans-epidermal moisture loss, *Centella Asiatica* for barrier repair).
   * Displays clear clinical rationale and application cadence (AM/PM) for each recommended formulation.
4. **Privacy-First Zero-Retention Architecture:**
   * Images are processed ephemerally in client memory and server-side streaming proxies with zero long-term cloud storage or facial template tracking.

---

## 4. How We Built It
- **Frontend Core:** Built on **Next.js 15 (App Router)** and **React 19** with strict TypeScript type-safety.
- **Styling & Design System:** Crafted using **Tailwind CSS** adhering to an 8pt spatial grid, 60-30-10 color harmony, and WCAG AA accessible contrast for medical readability.
- **Biometric UI Components:** Custom SVG multi-axis radar scoring visualization, interactive biometric gauge cards, and split-screen VTO coverage simulators.
- **API Architecture:** Server-side proxy handling YouCam API handshakes (`yce.makeupar.com`) with fallback mock analysis pipelines to ensure 100% offline uptime and zero-downtime evaluation.
- **Deployment:** Continuous production deployment on Vercel Edge Network at `https://dermiq-one.vercel.app`.

---

## 5. Challenges We Ran Into
- **Balancing Clinical Precision with Consumer Clarity:** Raw dermatology telemetry outputs numerical scores that can confuse consumers. We engineered a normalization layer that translates raw index values into intuitive clinical status bands (Optimal, Moderate Deficit, Requires Attention) with actionable everyday advice.
- **Responsive Biometric Visualization:** Constructing responsive SVG radar polygons that render crisply across mobile viewport sizes without layout shift required precise trigonometric point calculation across dynamic polygon bounds.

---

## 6. Accomplishments That We're Proud Of
- A sub-second, highly polished diagnostic interface deployed and fully interactive on mobile and desktop web.
- Clean separation between biometric diagnostic data and commercial cosmetic recommendations.
- Zero external database overhead and zero image persistence, ensuring user biometric privacy by design.

---

## 7. What We Learned
- Integrating AI skin analysis into e-commerce significantly increases user agency—users who preview formulations targeted to their specific barrier deficits exhibit much higher confidence in product selection.
- Modern CSS mix-blend modes and dynamic opacity gradients can simulate realistic cosmetic coverage densities directly in the browser.

---

## 8. What's Next for DermIQ
- **Temporal Skin Tracking:** Adding client-side local encrypted storage to track barrier recovery progress over 14-day and 30-day treatment cycles.
- **Shopify & WooCommerce Embeddable Widget:** Releasing DermIQ as a drop-in web component for indie beauty brands to reduce return rates on foundations and active serums.
- **Automated Routine PDF Export:** One-click generation of personalized dermatological routine sheets for in-clinic aesthetic consultations.

---

## 9. Built With
`next.js`, `react`, `typescript`, `tailwind-css`, `youcam-api`, `vercel`, `lucide-react`

---

## 10. Links & Resources
- **Live Application:** [https://dermiq-one.vercel.app](https://dermiq-one.vercel.app)
- **Source Code:** [https://github.com/ashokwebs/dermiq](https://github.com/ashokwebs/dermiq)
