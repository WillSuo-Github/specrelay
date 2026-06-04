import { useMemo, useState } from "react";
import {
  AlertTriangle,
  Clipboard,
  Download,
  Gauge,
  ShieldCheck,
  Sparkles,
} from "lucide-react";

type ModelProfile = {
  id: string;
  label: string;
  inputRate: number;
  outputRate: number;
  note: string;
};

type Preset = {
  id: string;
  label: string;
  summary: string;
  appType: string;
  monthlyActiveUsers: number;
  promptsPerUserPerMonth: number;
  avgInputTokens: number;
  avgOutputTokens: number;
  primaryModelId: string;
  fallbackModelId: string;
  fallbackShare: number;
  monthlyBudget: number;
  hasUsageLogging: boolean;
  hasBudgetAlerts: boolean;
  hasDailyLimit: boolean;
  hasKillSwitch: boolean;
};

type PlannerState = {
  selectedPresetId: string;
  appType: string;
  monthlyActiveUsers: number;
  promptsPerUserPerMonth: number;
  avgInputTokens: number;
  avgOutputTokens: number;
  primaryModelId: string;
  fallbackModelId: string;
  fallbackShare: number;
  monthlyBudget: number;
  hasUsageLogging: boolean;
  hasBudgetAlerts: boolean;
  hasDailyLimit: boolean;
  hasKillSwitch: boolean;
};

const MODEL_PROFILES: ModelProfile[] = [
  {
    id: "premium",
    label: "Premium reasoning",
    inputRate: 4,
    outputRate: 16,
    note: "Best quality, highest burn risk.",
  },
  {
    id: "balanced",
    label: "Balanced chat",
    inputRate: 0.8,
    outputRate: 3.2,
    note: "General default for launch planning.",
  },
  {
    id: "cheap",
    label: "Cheap fallback",
    inputRate: 0.25,
    outputRate: 1,
    note: "Low-cost fallback for non-critical traffic.",
  },
];

const PRESETS: Preset[] = [
  {
    id: "support-copilot",
    label: "Support copilot",
    summary: "Customer-facing assistant with medium traffic and a real fallback route.",
    appType: "Support copilot",
    monthlyActiveUsers: 900,
    promptsPerUserPerMonth: 18,
    avgInputTokens: 1800,
    avgOutputTokens: 900,
    primaryModelId: "balanced",
    fallbackModelId: "cheap",
    fallbackShare: 35,
    monthlyBudget: 450,
    hasUsageLogging: true,
    hasBudgetAlerts: false,
    hasDailyLimit: false,
    hasKillSwitch: true,
  },
  {
    id: "internal-workflow",
    label: "Internal workflow tool",
    summary: "Smaller team rollout with fewer users but heavier prompts.",
    appType: "Internal workflow assistant",
    monthlyActiveUsers: 220,
    promptsPerUserPerMonth: 34,
    avgInputTokens: 3200,
    avgOutputTokens: 1400,
    primaryModelId: "premium",
    fallbackModelId: "balanced",
    fallbackShare: 20,
    monthlyBudget: 600,
    hasUsageLogging: true,
    hasBudgetAlerts: true,
    hasDailyLimit: false,
    hasKillSwitch: false,
  },
  {
    id: "content-api",
    label: "Content API",
    summary: "High-volume API surface where cheap fallback and hard caps matter most.",
    appType: "Content generation API",
    monthlyActiveUsers: 1800,
    promptsPerUserPerMonth: 26,
    avgInputTokens: 1200,
    avgOutputTokens: 700,
    primaryModelId: "balanced",
    fallbackModelId: "cheap",
    fallbackShare: 55,
    monthlyBudget: 700,
    hasUsageLogging: false,
    hasBudgetAlerts: false,
    hasDailyLimit: true,
    hasKillSwitch: false,
  },
];

const FEEDBACK_EMAIL = "ws.software@outlook.com";

function getPreset(id: string) {
  return PRESETS.find((preset) => preset.id === id) ?? PRESETS[0];
}

function getProfile(id: string) {
  return MODEL_PROFILES.find((profile) => profile.id === id) ?? MODEL_PROFILES[0];
}

function buildStateFromPreset(preset: Preset): PlannerState {
  return {
    selectedPresetId: preset.id,
    appType: preset.appType,
    monthlyActiveUsers: preset.monthlyActiveUsers,
    promptsPerUserPerMonth: preset.promptsPerUserPerMonth,
    avgInputTokens: preset.avgInputTokens,
    avgOutputTokens: preset.avgOutputTokens,
    primaryModelId: preset.primaryModelId,
    fallbackModelId: preset.fallbackModelId,
    fallbackShare: preset.fallbackShare,
    monthlyBudget: preset.monthlyBudget,
    hasUsageLogging: preset.hasUsageLogging,
    hasBudgetAlerts: preset.hasBudgetAlerts,
    hasDailyLimit: preset.hasDailyLimit,
    hasKillSwitch: preset.hasKillSwitch,
  };
}

function dollars(value: number) {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: value >= 100 ? 0 : 2,
  }).format(value);
}

function integer(value: number) {
  return new Intl.NumberFormat("en-US", {
    maximumFractionDigits: 0,
  }).format(value);
}

function oneDecimal(value: number) {
  return new Intl.NumberFormat("en-US", {
    minimumFractionDigits: 1,
    maximumFractionDigits: 1,
  }).format(value);
}

function clamp(value: number, min: number, max: number) {
  return Math.min(max, Math.max(min, value));
}

function App() {
  const [planner, setPlanner] = useState<PlannerState>(() =>
    buildStateFromPreset(PRESETS[0]),
  );
  const [copyState, setCopyState] = useState<"idle" | "done" | "error">("idle");

  const plan = useMemo(() => {
    const primary = getProfile(planner.primaryModelId);
    const fallback = getProfile(planner.fallbackModelId);
    const fallbackShare = clamp(planner.fallbackShare, 0, 100) / 100;
    const primaryShare = 1 - fallbackShare;
    const monthlyRequests = planner.monthlyActiveUsers * planner.promptsPerUserPerMonth;
    const dailyRequests = monthlyRequests / 30;

    const primaryPerRequest =
      (planner.avgInputTokens / 1_000_000) * primary.inputRate +
      (planner.avgOutputTokens / 1_000_000) * primary.outputRate;
    const fallbackPerRequest =
      (planner.avgInputTokens / 1_000_000) * fallback.inputRate +
      (planner.avgOutputTokens / 1_000_000) * fallback.outputRate;

    const blendedPerRequest =
      primaryPerRequest * primaryShare + fallbackPerRequest * fallbackShare;
    const monthlyBurn = monthlyRequests * blendedPerRequest;
    const dailyBurn = monthlyBurn / 30;
    const monthlyBurnAllPrimary = monthlyRequests * primaryPerRequest;
    const dailyBurnAllPrimary = monthlyBurnAllPrimary / 30;

    const hardMonthlyCap = Math.min(
      planner.monthlyBudget,
      Math.max(monthlyBurn * 1.2, monthlyBurn + 75),
    );
    const softMonthlyCap = Math.min(hardMonthlyCap * 0.7, monthlyBurn * 1.05);
    const dailyCap = hardMonthlyCap / 30;

    const overBudget = monthlyBurn > planner.monthlyBudget;
    const headroom = planner.monthlyBudget - monthlyBurn;
    const budgetUsage = planner.monthlyBudget
      ? (monthlyBurn / planner.monthlyBudget) * 100
      : 0;

    const trafficSpike = monthlyBurn * 2;
    const outputSpike =
      monthlyRequests *
      ((planner.avgInputTokens / 1_000_000) *
        (primary.inputRate * primaryShare + fallback.inputRate * fallbackShare) +
        ((planner.avgOutputTokens * 1.5) / 1_000_000) *
          (primary.outputRate * primaryShare + fallback.outputRate * fallbackShare));
    const noFallback = monthlyBurnAllPrimary;

    const riskScenarios = [
      {
        label: "2x traffic week",
        impact: trafficSpike,
        delta: trafficSpike - monthlyBurn,
        note: `If launch traffic doubles, you burn ${dollars(trafficSpike)} for the month.`,
      },
      {
        label: "Output token creep",
        impact: outputSpike,
        delta: outputSpike - monthlyBurn,
        note: `If answers grow 50%, monthly burn moves to ${dollars(outputSpike)}.`,
      },
      {
        label: "Fallback route fails",
        impact: noFallback,
        delta: noFallback - monthlyBurn,
        note:
          fallbackShare > 0
            ? `If all traffic stays on the primary model, monthly burn moves to ${dollars(noFallback)}.`
            : `There is no real fallback share today, so every surge hits the primary model.`,
      },
    ].sort((left, right) => right.delta - left.delta);

    const checklist = [
      !planner.hasUsageLogging
        ? `Add per-request usage logging before launch so you can see burn by path, not only by invoice.`
        : `Keep usage logging tied to route, prompt size, and user tier from day one.`,
      !planner.hasBudgetAlerts
        ? `Set alerts at ${dollars(softMonthlyCap)} monthly, ${dollars(
            hardMonthlyCap * 0.8,
          )} urgent, and ${dollars(hardMonthlyCap)} hard stop.`
        : `Rehearse the alert ladder and make sure someone actually sees it.`,
      !planner.hasDailyLimit
        ? `Enforce a daily cap near ${dollars(dailyCap)} so one bad day does not consume the whole budget.`
        : `Keep the daily cap below ${dollars(dailyCap)} and test it with a traffic surge.`,
      !planner.hasKillSwitch
        ? `Add a manual kill switch or degraded mode before sending real traffic.`
        : `Confirm the kill switch works without a deploy.`,
      fallbackShare === 0
        ? `Route at least some non-critical traffic to a cheaper fallback model before launch.`
        : `Keep ${Math.round(fallbackShare * 100)}% fallback capacity ready for non-critical traffic.`,
      `Run one launch drill at 2x daily traffic and one drill with longer outputs before you turn on paid users.`,
    ];

    const guardrailScore = clamp(
      Math.round(
        ((planner.hasUsageLogging ? 1 : 0) +
          (planner.hasBudgetAlerts ? 1 : 0) +
          (planner.hasDailyLimit ? 1 : 0) +
          (planner.hasKillSwitch ? 1 : 0) +
          (fallbackShare > 0 ? 1 : 0) +
          (planner.monthlyBudget >= monthlyBurn ? 1 : 0)) *
          (100 / 6),
      ),
      0,
      100,
    );

    const exportText = [
      `Burn Ceiling plan for ${planner.appType}`,
      ``,
      `Traffic assumptions`,
      `- Monthly active users: ${integer(planner.monthlyActiveUsers)}`,
      `- Prompts per user per month: ${integer(planner.promptsPerUserPerMonth)}`,
      `- Monthly requests: ${integer(monthlyRequests)}`,
      `- Daily requests: ${integer(dailyRequests)}`,
      ``,
      `Model mix`,
      `- Primary profile: ${primary.label} (${primary.inputRate}/${primary.outputRate} USD per 1M input/output tokens)`,
      `- Fallback profile: ${fallback.label} (${fallback.inputRate}/${fallback.outputRate} USD per 1M input/output tokens)`,
      `- Fallback share: ${Math.round(fallbackShare * 100)}%`,
      ``,
      `Burn plan`,
      `- Planned monthly burn: ${dollars(monthlyBurn)}`,
      `- Planned daily burn: ${dollars(dailyBurn)}`,
      `- Soft cap: ${dollars(softMonthlyCap)}`,
      `- Hard cap: ${dollars(hardMonthlyCap)}`,
      `- Daily cap: ${dollars(dailyCap)}`,
      `- Budget tolerance: ${dollars(planner.monthlyBudget)}`,
      ``,
      `Top risks`,
      ...riskScenarios.map(
        (scenario, index) =>
          `${index + 1}. ${scenario.label}: ${scenario.note} Delta ${dollars(scenario.delta)}.`,
      ),
      ``,
      `Launch checklist`,
      ...checklist.map((item, index) => `${index + 1}. ${item}`),
      ``,
      `Guardrail score: ${guardrailScore}/100`,
    ].join("\n");

    const feedbackHref = `mailto:${FEEDBACK_EMAIL}?subject=${encodeURIComponent(
      `Burn Ceiling feedback - ${planner.appType}`,
    )}&body=${encodeURIComponent(
      `I ran Burn Ceiling for ${planner.appType}.\n\nMost useful part:\n\nWhat felt fake or missing:\n\nWould I use this before launch? yes / no / maybe\n`,
    )}`;

    return {
      primary,
      fallback,
      monthlyRequests,
      dailyRequests,
      monthlyBurn,
      dailyBurn,
      softMonthlyCap,
      hardMonthlyCap,
      dailyCap,
      overBudget,
      headroom,
      budgetUsage,
      riskScenarios,
      checklist,
      guardrailScore,
      exportText,
      feedbackHref,
      blendedPerRequest,
      monthlyBurnAllPrimary,
      dailyBurnAllPrimary,
    };
  }, [planner]);

  function applyPreset(preset: Preset) {
    setPlanner(buildStateFromPreset(preset));
    setCopyState("idle");
  }

  function updatePlanner<Key extends keyof PlannerState>(key: Key, value: PlannerState[Key]) {
    setPlanner((current) => ({
      ...current,
      [key]: value,
    }));
    setCopyState("idle");
  }

  async function handleCopyPlan() {
    try {
      await navigator.clipboard.writeText(plan.exportText);
      setCopyState("done");
    } catch {
      setCopyState("error");
    }
  }

  function handleDownloadPlan() {
    const blob = new Blob([plan.exportText], { type: "text/plain;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const anchor = document.createElement("a");
    anchor.href = url;
    anchor.download = `burn-ceiling-${planner.appType
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")}.txt`;
    anchor.click();
    URL.revokeObjectURL(url);
  }

  return (
    <main className="app-shell">
      <section className="hero-band">
        <div className="hero-copy">
          <p className="eyebrow">Burn Ceiling</p>
          <h1>Set the burn ceiling before you turn on real traffic.</h1>
          <p className="hero-lead">
            This is a no-login launch planner for AI apps. It turns rough traffic and
            token assumptions into a monthly ceiling, fallback plan, and launch-day
            guardrails.
          </p>
        </div>

        <div className="hero-stats" aria-label="Current burn summary">
          <div className="stat-card">
            <span className="stat-label">Planned monthly burn</span>
            <strong>{dollars(plan.monthlyBurn)}</strong>
            <span className="stat-note">
              {integer(plan.monthlyRequests)} requests / month
            </span>
          </div>
          <div className="stat-card">
            <span className="stat-label">Hard cap</span>
            <strong>{dollars(plan.hardMonthlyCap)}</strong>
            <span className="stat-note">
              {oneDecimal(plan.budgetUsage)}% of current budget tolerance
            </span>
          </div>
          <div className="stat-card">
            <span className="stat-label">Guardrail score</span>
            <strong>{plan.guardrailScore}/100</strong>
            <span className="stat-note">
              Based on logging, alerts, limits, fallback, and kill switch
            </span>
          </div>
        </div>
      </section>

      <section className="preset-band">
        <div className="section-heading">
          <h2>Start from a launch pattern</h2>
          <p>Use one of these presets, then tighten the numbers for your own app.</p>
        </div>
        <div className="preset-grid">
          {PRESETS.map((preset) => (
            <button
              key={preset.id}
              type="button"
              className={`preset-card${
                planner.selectedPresetId === preset.id ? " preset-card--active" : ""
              }`}
              onClick={() => applyPreset(preset)}
            >
              <span className="preset-name">{preset.label}</span>
              <span className="preset-summary">{preset.summary}</span>
            </button>
          ))}
        </div>
      </section>

      <section className="workspace">
        <div className="planner-panel">
          <div className="section-heading">
            <h2>Planner inputs</h2>
            <p>Keep this honest. A rough but real estimate is more useful than perfect fiction.</p>
          </div>

          <div className="form-section">
            <h3>Traffic</h3>
            <div className="field-grid">
              <label className="field">
                <span>App type</span>
                <input
                  value={planner.appType}
                  onChange={(event) => updatePlanner("appType", event.target.value)}
                />
              </label>
              <label className="field">
                <span>Monthly active users</span>
                <input
                  type="number"
                  min={0}
                  value={planner.monthlyActiveUsers}
                  onChange={(event) =>
                    updatePlanner("monthlyActiveUsers", Number(event.target.value) || 0)
                  }
                />
              </label>
              <label className="field">
                <span>Prompts per user / month</span>
                <input
                  type="number"
                  min={0}
                  value={planner.promptsPerUserPerMonth}
                  onChange={(event) =>
                    updatePlanner(
                      "promptsPerUserPerMonth",
                      Number(event.target.value) || 0,
                    )
                  }
                />
              </label>
            </div>
          </div>

          <div className="form-section">
            <h3>Token shape</h3>
            <div className="field-grid">
              <label className="field">
                <span>Avg input tokens / request</span>
                <input
                  type="number"
                  min={0}
                  step={100}
                  value={planner.avgInputTokens}
                  onChange={(event) =>
                    updatePlanner("avgInputTokens", Number(event.target.value) || 0)
                  }
                />
              </label>
              <label className="field">
                <span>Avg output tokens / request</span>
                <input
                  type="number"
                  min={0}
                  step={100}
                  value={planner.avgOutputTokens}
                  onChange={(event) =>
                    updatePlanner("avgOutputTokens", Number(event.target.value) || 0)
                  }
                />
              </label>
              <label className="field">
                <span>Monthly budget tolerance (USD)</span>
                <input
                  type="number"
                  min={0}
                  step={25}
                  value={planner.monthlyBudget}
                  onChange={(event) =>
                    updatePlanner("monthlyBudget", Number(event.target.value) || 0)
                  }
                />
              </label>
            </div>
          </div>

          <div className="form-section">
            <h3>Model mix</h3>
            <div className="field-grid">
              <label className="field">
                <span>Primary model profile</span>
                <select
                  value={planner.primaryModelId}
                  onChange={(event) => updatePlanner("primaryModelId", event.target.value)}
                >
                  {MODEL_PROFILES.map((profile) => (
                    <option key={profile.id} value={profile.id}>
                      {profile.label}
                    </option>
                  ))}
                </select>
                <small>{plan.primary.note}</small>
              </label>
              <label className="field">
                <span>Fallback model profile</span>
                <select
                  value={planner.fallbackModelId}
                  onChange={(event) => updatePlanner("fallbackModelId", event.target.value)}
                >
                  {MODEL_PROFILES.map((profile) => (
                    <option key={profile.id} value={profile.id}>
                      {profile.label}
                    </option>
                  ))}
                </select>
                <small>{plan.fallback.note}</small>
              </label>
              <label className="field">
                <span>Fallback share (%)</span>
                <input
                  type="number"
                  min={0}
                  max={100}
                  step={5}
                  value={planner.fallbackShare}
                  onChange={(event) =>
                    updatePlanner("fallbackShare", Number(event.target.value) || 0)
                  }
                />
              </label>
            </div>
          </div>

          <div className="form-section">
            <h3>Guardrails already in place</h3>
            <div className="toggle-grid">
              <label className="toggle">
                <input
                  type="checkbox"
                  checked={planner.hasUsageLogging}
                  onChange={(event) =>
                    updatePlanner("hasUsageLogging", event.target.checked)
                  }
                />
                <span>Usage logging</span>
              </label>
              <label className="toggle">
                <input
                  type="checkbox"
                  checked={planner.hasBudgetAlerts}
                  onChange={(event) =>
                    updatePlanner("hasBudgetAlerts", event.target.checked)
                  }
                />
                <span>Budget alerts</span>
              </label>
              <label className="toggle">
                <input
                  type="checkbox"
                  checked={planner.hasDailyLimit}
                  onChange={(event) =>
                    updatePlanner("hasDailyLimit", event.target.checked)
                  }
                />
                <span>Daily spend cap</span>
              </label>
              <label className="toggle">
                <input
                  type="checkbox"
                  checked={planner.hasKillSwitch}
                  onChange={(event) =>
                    updatePlanner("hasKillSwitch", event.target.checked)
                  }
                />
                <span>Kill switch</span>
              </label>
            </div>
          </div>
        </div>

        <div className="results-panel">
          <div className={`status-banner${plan.overBudget ? " status-banner--warn" : ""}`}>
            <div className="status-icon">
              {plan.overBudget ? <AlertTriangle size={18} /> : <ShieldCheck size={18} />}
            </div>
            <div>
              <strong>
                {plan.overBudget
                  ? `This plan is over budget by ${dollars(Math.abs(plan.headroom))}.`
                  : `You still have ${dollars(plan.headroom)} of monthly headroom.`}
              </strong>
              <p>
                {plan.overBudget
                  ? "Lower request volume, route more traffic to fallback, or raise the launch budget before paid traffic."
                  : "The current assumptions fit inside budget, but you still need hard caps and a launch drill."}
              </p>
            </div>
          </div>

          <div className="summary-grid">
            <article className="result-card">
              <div className="result-header">
                <Gauge size={18} />
                <h3>Burn plan</h3>
              </div>
              <ul className="metric-list">
                <li>
                  <span>Daily requests</span>
                  <strong>{integer(plan.dailyRequests)}</strong>
                </li>
                <li>
                  <span>Monthly burn</span>
                  <strong>{dollars(plan.monthlyBurn)}</strong>
                </li>
                <li>
                  <span>Per-request cost</span>
                  <strong>{dollars(plan.blendedPerRequest)}</strong>
                </li>
                <li>
                  <span>All-primary daily burn</span>
                  <strong>{dollars(plan.dailyBurnAllPrimary)}</strong>
                </li>
              </ul>
            </article>

            <article className="result-card">
              <div className="result-header">
                <ShieldCheck size={18} />
                <h3>Recommended caps</h3>
              </div>
              <ul className="metric-list">
                <li>
                  <span>Soft monthly cap</span>
                  <strong>{dollars(plan.softMonthlyCap)}</strong>
                </li>
                <li>
                  <span>Hard monthly cap</span>
                  <strong>{dollars(plan.hardMonthlyCap)}</strong>
                </li>
                <li>
                  <span>Daily cap</span>
                  <strong>{dollars(plan.dailyCap)}</strong>
                </li>
                <li>
                  <span>Budget usage now</span>
                  <strong>{oneDecimal(plan.budgetUsage)}%</strong>
                </li>
              </ul>
            </article>
          </div>

          <div className="detail-stack">
            <article className="detail-card">
              <div className="result-header">
                <AlertTriangle size={18} />
                <h3>Top runaway risks</h3>
              </div>
              <ol className="scenario-list">
                {plan.riskScenarios.map((scenario) => (
                  <li key={scenario.label}>
                    <div>
                      <strong>{scenario.label}</strong>
                      <p>{scenario.note}</p>
                    </div>
                    <span>{dollars(scenario.delta)}</span>
                  </li>
                ))}
              </ol>
            </article>

            <article className="detail-card">
              <div className="result-header">
                <Sparkles size={18} />
                <h3>Launch-day checklist</h3>
              </div>
              <ol className="checklist">
                {plan.checklist.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ol>
            </article>

            <article className="detail-card export-card">
              <div className="result-header">
                <Clipboard size={18} />
                <h3>Export and feedback</h3>
              </div>
              <p className="export-copy">
                Copy or download the plan, then send the gaps that still feel fake.
              </p>
              <div className="button-row">
                <button type="button" className="action-button" onClick={handleCopyPlan}>
                  <Clipboard size={16} />
                  {copyState === "done"
                    ? "Copied plan"
                    : copyState === "error"
                      ? "Copy failed"
                      : "Copy plan"}
                </button>
                <button type="button" className="action-button" onClick={handleDownloadPlan}>
                  <Download size={16} />
                  Download
                </button>
                <a className="text-link" href={plan.feedbackHref}>
                  Send feedback
                </a>
              </div>
            </article>
          </div>
        </div>
      </section>
    </main>
  );
}

export default App;
