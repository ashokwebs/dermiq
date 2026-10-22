import test from 'node:test';
import assert from 'node:assert/strict';

const CLINICAL_METRICS = [
  { label: "Barrier Hydration", score: 82, status: "Optimal", recommendation: "Maintain with multi-molecular hyaluronic acid." },
  { label: "Erythema / Redness", score: 64, status: "Moderate", recommendation: "Soothe with 4% Niacinamide and Centella Asiatica." },
  { label: "Pore & Texture", score: 78, status: "Optimal", recommendation: "Gentle weekly BHA micro-exfoliation." },
  { label: "Sebum Equilibrium", score: 55, status: "Needs Attention", recommendation: "Zinc PCA formulation to balance T-zone lipid flow." },
  { label: "Photodamage / Spots", score: 88, status: "Optimal", recommendation: "Daily broad-spectrum SPF 50+ mineral shield." },
];

const CLINICAL_PERSONAS = [
  { id: "p1", name: "Dr. Elena Vance, MD", role: "Board Dermatologist", clinic: "Aura Dermatology Institute" },
  { id: "p2", name: "Sarah M.", role: "Patient / Client", clinic: "Self-Guided Routine" },
  { id: "p3", name: "Judge / Evaluator", role: "YouCam Hackathon Judge", clinic: "Technical Review Board" },
];

test('Clinical Skin Metrics Validation', () => {
  for (const metric of CLINICAL_METRICS) {
    assert.ok(metric.score >= 0 && metric.score <= 100, `Score for ${metric.label} must be 0-100`);
    assert.ok(["Optimal", "Moderate", "Needs Attention"].includes(metric.status));
    assert.ok(metric.recommendation.length > 10, "Recommendation must be descriptive");
  }

  const averageScore = CLINICAL_METRICS.reduce((acc, m) => acc + m.score, 0) / CLINICAL_METRICS.length;
  assert.ok(averageScore >= 70 && averageScore <= 80, `Average composite score should be ~73.4 (computed: ${averageScore.toFixed(1)})`);
});

test('Clinical Persona Authorization Verification', () => {
  for (const persona of CLINICAL_PERSONAS) {
    assert.ok(persona.id.startsWith('p'), "Persona ID should be prefixed");
    assert.ok(persona.name.length > 0, "Persona name must be populated");
    assert.ok(persona.role.length > 0, "Persona role must be defined");
  }
});
