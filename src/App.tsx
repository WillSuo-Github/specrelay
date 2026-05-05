import { useMemo, useState } from "react";
import {
  AlertTriangle,
  CheckCircle2,
  ClipboardList,
  Copy,
  Download,
  FileText,
  Gauge,
  MessageSquare,
  RefreshCw,
  Rocket,
  ShieldCheck,
} from "lucide-react";

type FormState = {
  productName: string;
  prototypeUrl: string;
  builder: string;
  stage: string;
  primaryUser: string;
  launchWindow: string;
  workflows: string;
  knownIssues: string;
  integrations: string;
  dataSensitivity: string;
  handoffAudience: string;
  hasAuth: boolean;
  hasPayments: boolean;
  hasUserData: boolean;
  hasAdmin: boolean;
  hasAnalytics: boolean;
};

type Tab = "report" | "qa" | "brief";
type SampleKey = "onboarding" | "booking" | "ops";

type Score = {
  label: string;
  value: number;
  note: string;
};

const feedbackUrl = "https://github.com/WillSuo-Github/specrelay/issues/1";

const defaultForm: FormState = {
  productName: "AI onboarding concierge",
  prototypeUrl: "https://prototype.example.com",
  builder: "Lovable",
  stage: "Private beta",
  primaryUser: "Solo SaaS founder",
  launchWindow: "Next 14 days",
  workflows:
    "New user signs up and creates a workspace\nFounder imports a customer list\nTeam member reviews generated onboarding tasks\nAdmin invites a teammate",
  knownIssues:
    "Password reset flow is untested\nMobile layout breaks on the customer list\nNo analytics events for activation",
  integrations: "Supabase auth, Postgres, Stripe planned, Resend email",
  dataSensitivity: "Customer names, work emails, workspace notes, billing status",
  handoffAudience: "Contract engineer",
  hasAuth: true,
  hasPayments: false,
  hasUserData: true,
  hasAdmin: true,
  hasAnalytics: false,
};

const samplePackets: Array<{
  key: SampleKey;
  name: string;
  meta: string;
  form: FormState;
}> = [
  {
    key: "onboarding",
    name: "SaaS onboarding",
    meta: "Auth, data, invites",
    form: defaultForm,
  },
  {
    key: "booking",
    name: "Booking pilot",
    meta: "Payments, email, calendar",
    form: {
      productName: "AI appointment desk",
      prototypeUrl: "https://appointments.example.com",
      builder: "Bolt",
      stage: "Customer pilot",
      primaryUser: "Clinic operations lead",
      launchWindow: "Next 30 days",
      workflows:
        "Visitor chooses an appointment type\nVisitor pays a deposit and books a slot\nStaff member confirms or reschedules the visit\nCustomer receives reminder and intake email",
      knownIssues:
        "Calendar timezone edge cases are unclear\nFailed payment state is not designed\nReminder email copy has not been reviewed",
      integrations: "Stripe Checkout, Google Calendar, Supabase, Resend email",
      dataSensitivity: "Patient contact details, appointment notes, payment status",
      handoffAudience: "Agency",
      hasAuth: true,
      hasPayments: true,
      hasUserData: true,
      hasAdmin: true,
      hasAnalytics: false,
    },
  },
  {
    key: "ops",
    name: "Ops dashboard",
    meta: "Admin, imports, analytics",
    form: {
      productName: "Vendor operations console",
      prototypeUrl: "https://ops-console.example.com",
      builder: "Cursor",
      stage: "Private beta",
      primaryUser: "Marketplace operations manager",
      launchWindow: "This quarter",
      workflows:
        "Ops imports a CSV of vendor records\nReviewer flags missing compliance fields\nManager approves a vendor profile\nTeam exports a weekly status report",
      knownIssues:
        "CSV validation accepts malformed rows\nLarge tables feel slow after 500 records\nRole permissions have not been tested",
      integrations: "Postgres, CSV import, Segment planned, internal admin auth",
      dataSensitivity: "Vendor contacts, compliance notes, approval history",
      handoffAudience: "Co-founder",
      hasAuth: true,
      hasPayments: false,
      hasUserData: true,
      hasAdmin: true,
      hasAnalytics: true,
    },
  },
];

const builders = ["Lovable", "Bolt", "Replit", "Cursor", "v0", "Other"];
const stages = ["Prototype", "Private beta", "Customer pilot", "Public launch"];
const audiences = ["Contract engineer", "Co-founder", "Agency", "Investor diligence", "Customer pilot"];

function splitLines(value: string): string[] {
  return value
    .split(/\n|,/)
    .map((item) => item.trim())
    .filter(Boolean);
}

function clampScore(value: number): number {
  return Math.max(18, Math.min(96, Math.round(value)));
}

function scoreReadiness(form: FormState): Score[] {
  const workflows = splitLines(form.workflows);
  const issues = splitLines(form.knownIssues);
  const integrations = splitLines(form.integrations);
  const sensitiveSystems = [form.hasAuth, form.hasPayments, form.hasUserData, form.hasAdmin].filter(Boolean).length;

  return [
    {
      label: "Scope clarity",
      value: clampScore(38 + workflows.length * 10 + (form.primaryUser ? 14 : 0) + (form.stage !== "Prototype" ? 6 : 0)),
      note: workflows.length >= 4 ? "Core jobs are named." : "Add the top customer journeys.",
    },
    {
      label: "QA readiness",
      value: clampScore(34 + workflows.length * 8 + issues.length * 5 + (form.prototypeUrl ? 8 : 0)),
      note: issues.length ? "Known gaps are explicit." : "Record known bugs before handoff.",
    },
    {
      label: "Risk handoff",
      value: clampScore(80 - sensitiveSystems * 9 + integrations.length * 5 + (form.dataSensitivity ? 8 : 0)),
      note: sensitiveSystems > 2 ? "Sensitive paths need named owners." : "Risk surface is contained.",
    },
    {
      label: "Release proof",
      value: clampScore(35 + (form.launchWindow ? 12 : 0) + (form.hasAnalytics ? 18 : 0) + (form.stage === "Public launch" ? 16 : 0)),
      note: form.hasAnalytics ? "Events can prove activation." : "Add basic activation telemetry.",
    },
    {
      label: "Engineer handoff",
      value: clampScore(32 + workflows.length * 8 + integrations.length * 6 + issues.length * 4 + (form.handoffAudience ? 8 : 0)),
      note: "Brief is ready for a first implementation review.",
    },
  ];
}

function generateRisks(form: FormState): string[] {
  const risks = [
    form.hasAuth ? "Confirm auth redirects, password reset, session expiry, and role boundaries." : "",
    form.hasPayments ? "Map payment states, webhook retries, invoice access, and refund handling." : "",
    form.hasUserData ? "List user data fields, retention expectations, export needs, and deletion expectations." : "",
    form.hasAdmin ? "Test admin-only actions with non-admin accounts before any customer pilot." : "",
    !form.hasAnalytics ? "Add activation events before launch so user behavior is not invisible." : "",
    !form.prototypeUrl ? "Attach the live prototype URL before handing this to an engineer." : "",
    splitLines(form.workflows).length < 3 ? "Name at least three customer workflows before scoping fixes." : "",
  ].filter(Boolean);

  return risks.length ? risks : ["No high-priority handoff gaps detected from the current inputs."];
}

function generateQaChecklist(form: FormState): string[] {
  const workflows = splitLines(form.workflows);
  const base = workflows.map((workflow) => `Run the "${workflow}" path once as a new user and once as a returning user.`);
  const conditional = [
    form.hasAuth ? "Verify signup, login, logout, password reset, expired session, and blocked account states." : "",
    form.hasPayments ? "Test checkout, failed payment, canceled payment, receipt, and subscription state changes." : "",
    form.hasUserData ? "Create, edit, delete, empty-state, and large-list data scenarios for customer-owned records." : "",
    form.hasAdmin ? "Attempt admin actions from a standard user account and document every blocked path." : "",
    "Capture screenshots for every broken or uncertain state and attach them to the handoff brief.",
    "Record browser, viewport, test account, and exact reproduction steps for every issue.",
  ].filter(Boolean);

  return [...base, ...conditional];
}

function generateStabilityPass(form: FormState): string[] {
  const workflows = splitLines(form.workflows);
  const issues = splitLines(form.knownIssues);
  const basicFlows = workflows.slice(0, 3);
  const blockers = issues.slice(0, 3);

  return [
    basicFlows.length
      ? `Freeze the basic feature set around these flows before adding new scope: ${basicFlows.join("; ")}.`
      : "Name the smallest set of basic flows that must stay stable before adding new scope.",
    blockers.length
      ? `Promote fixes from observed issues first: ${blockers.join("; ")}.`
      : "Run one smoke pass and record the first real issue before planning feature improvements.",
    "Keep the next pass stability-first: reproduce the issue, fix the basic path, rerun the affected workflow, then promote the improvement.",
  ];
}

function generateBrief(form: FormState): string[] {
  const workflows = splitLines(form.workflows);
  const issues = splitLines(form.knownIssues);
  const integrations = splitLines(form.integrations);
  return [
    `Product: ${form.productName || "Unnamed product"}`,
    `Prototype: ${form.prototypeUrl || "Missing"}`,
    `Built with: ${form.builder}`,
    `Stage: ${form.stage}`,
    `Primary user: ${form.primaryUser || "Missing"}`,
    `Launch window: ${form.launchWindow || "Missing"}`,
    `Handoff audience: ${form.handoffAudience}`,
    `Core workflows: ${workflows.length ? workflows.join("; ") : "Missing"}`,
    `Known issues: ${issues.length ? issues.join("; ") : "None recorded"}`,
    `Integrations: ${integrations.length ? integrations.join("; ") : "None recorded"}`,
    `Data handled: ${form.dataSensitivity || "Not recorded"}`,
  ];
}

function generateReviewQuestions(form: FormState): string[] {
  return [
    `Would you use this ${form.handoffAudience.toLowerCase()} packet before the next ${form.launchWindow.toLowerCase()} review? Why or why not?`,
    "Does the stability-first pass match how you would decide the next engineering improvement?",
    "Which risk or QA item would most likely block a real launch or handoff call?",
    "What information would an engineer, agency, or customer still need before trusting this prototype?",
  ];
}

function buildMarkdown(
  form: FormState,
  scores: Score[],
  risks: string[],
  stabilityPass: string[],
  checklist: string[],
  brief: string[],
  reviewQuestions: string[],
): string {
  return [
    `# ${form.productName || "AI-built app"} handoff packet`,
    "",
    "## Readiness",
    ...scores.map((score) => `- ${score.label}: ${score.value}/100 - ${score.note}`),
    "",
    "## Priority Risks",
    ...risks.map((risk) => `- ${risk}`),
    "",
    "## Stability-First Pass",
    ...stabilityPass.map((item) => `- ${item}`),
    "",
    "## QA Checklist",
    ...checklist.map((item) => `- [ ] ${item}`),
    "",
    "## Engineering Brief",
    ...brief.map((item) => `- ${item}`),
    "",
    "## Review Questions",
    ...reviewQuestions.map((item) => `- ${item}`),
    "",
    "## Feedback",
    `Share review notes: ${feedbackUrl}`,
    "",
    "## Decision",
    "Ship only after auth, data, and activation proof are reviewed for the current launch window.",
  ].join("\n");
}

function Field({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <label className="field">
      <span>{label}</span>
      {children}
    </label>
  );
}

export default function App() {
  const [form, setForm] = useState<FormState>(defaultForm);
  const [tab, setTab] = useState<Tab>("report");
  const [copied, setCopied] = useState(false);
  const activeSample = samplePackets.find((sample) => sample.form.productName === form.productName)?.key;

  const scores = useMemo(() => scoreReadiness(form), [form]);
  const risks = useMemo(() => generateRisks(form), [form]);
  const stabilityPass = useMemo(() => generateStabilityPass(form), [form]);
  const checklist = useMemo(() => generateQaChecklist(form), [form]);
  const brief = useMemo(() => generateBrief(form), [form]);
  const reviewQuestions = useMemo(() => generateReviewQuestions(form), [form]);
  const markdown = useMemo(
    () => buildMarkdown(form, scores, risks, stabilityPass, checklist, brief, reviewQuestions),
    [form, scores, risks, stabilityPass, checklist, brief, reviewQuestions],
  );
  const overall = Math.round(scores.reduce((sum, score) => sum + score.value, 0) / scores.length);

  function update<K extends keyof FormState>(key: K, value: FormState[K]) {
    setForm((current) => ({ ...current, [key]: value }));
  }

  function loadSample(nextForm: FormState) {
    setForm(nextForm);
    setTab("report");
    setCopied(false);
  }

  async function copyReport() {
    await navigator.clipboard.writeText(markdown);
    setCopied(true);
    window.setTimeout(() => setCopied(false), 1600);
  }

  function downloadReport() {
    const blob = new Blob([markdown], { type: "text/markdown;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = `${(form.productName || "specrelay").toLowerCase().replace(/[^a-z0-9]+/g, "-")}-handoff.md`;
    link.click();
    URL.revokeObjectURL(url);
  }

  return (
    <main className="shell">
      <header className="topbar" aria-label="SpecRelay">
        <div className="brand-mark">
          <span>SR</span>
        </div>
        <div>
          <p className="eyebrow">SpecRelay</p>
          <h1>Turn an AI-built prototype into a handoff packet.</h1>
        </div>
        <button className="icon-button" type="button" onClick={() => loadSample(defaultForm)} aria-label="Reset sample">
          <RefreshCw size={18} />
        </button>
      </header>

      <section className="hero-grid">
        <div className="workspace">
          <form className="form-panel">
            <div className="section-heading">
              <ClipboardList size={19} />
              <h2>Prototype Intake</h2>
            </div>

            <div className="sample-picker" aria-label="Sample packets">
              {samplePackets.map((sample) => (
                <button
                  className={activeSample === sample.key ? "active" : ""}
                  key={sample.key}
                  type="button"
                  onClick={() => loadSample(sample.form)}
                >
                  <strong>{sample.name}</strong>
                  <span>{sample.meta}</span>
                </button>
              ))}
            </div>

            <div className="two-col">
              <Field label="Product name">
                <input value={form.productName} onChange={(event) => update("productName", event.target.value)} />
              </Field>
              <Field label="Prototype URL">
                <input value={form.prototypeUrl} onChange={(event) => update("prototypeUrl", event.target.value)} />
              </Field>
            </div>

            <div className="three-col">
              <Field label="Builder">
                <select value={form.builder} onChange={(event) => update("builder", event.target.value)}>
                  {builders.map((builder) => (
                    <option key={builder}>{builder}</option>
                  ))}
                </select>
              </Field>
              <Field label="Stage">
                <select value={form.stage} onChange={(event) => update("stage", event.target.value)}>
                  {stages.map((stage) => (
                    <option key={stage}>{stage}</option>
                  ))}
                </select>
              </Field>
              <Field label="Audience">
                <select value={form.handoffAudience} onChange={(event) => update("handoffAudience", event.target.value)}>
                  {audiences.map((audience) => (
                    <option key={audience}>{audience}</option>
                  ))}
                </select>
              </Field>
            </div>

            <Field label="Primary user">
              <input value={form.primaryUser} onChange={(event) => update("primaryUser", event.target.value)} />
            </Field>

            <Field label="Core workflows">
              <textarea value={form.workflows} onChange={(event) => update("workflows", event.target.value)} rows={5} />
            </Field>

            <Field label="Known issues">
              <textarea value={form.knownIssues} onChange={(event) => update("knownIssues", event.target.value)} rows={4} />
            </Field>

            <div className="two-col">
              <Field label="Integrations">
                <textarea value={form.integrations} onChange={(event) => update("integrations", event.target.value)} rows={4} />
              </Field>
              <Field label="Data handled">
                <textarea value={form.dataSensitivity} onChange={(event) => update("dataSensitivity", event.target.value)} rows={4} />
              </Field>
            </div>

            <Field label="Launch window">
              <input value={form.launchWindow} onChange={(event) => update("launchWindow", event.target.value)} />
            </Field>

            <div className="toggle-grid" aria-label="Risk surface">
              {[
                ["hasAuth", "Auth"],
                ["hasPayments", "Payments"],
                ["hasUserData", "User data"],
                ["hasAdmin", "Admin"],
                ["hasAnalytics", "Analytics"],
              ].map(([key, label]) => (
                <label className="toggle" key={key}>
                  <input
                    type="checkbox"
                    checked={Boolean(form[key as keyof FormState])}
                    onChange={(event) => update(key as keyof FormState, event.target.checked as never)}
                  />
                  <span>{label}</span>
                </label>
              ))}
            </div>
          </form>

          <aside className="result-panel">
            <img src={`${import.meta.env.BASE_URL}spec-relay-hero.png`} alt="" className="hero-asset" />
            <div className="score-row">
              <div>
                <p className="eyebrow">Launch Readiness</p>
                <strong>{overall}/100</strong>
              </div>
              <Gauge size={34} />
            </div>

            <div className="metric-grid">
              {scores.map((score) => (
                <article className="metric" key={score.label}>
                  <span>{score.label}</span>
                  <strong>{score.value}</strong>
                  <div className="meter" aria-hidden="true">
                    <i style={{ width: `${score.value}%` }} />
                  </div>
                  <p>{score.note}</p>
                </article>
              ))}
            </div>

            <div className="tabs" role="tablist" aria-label="Output view">
              <button className={tab === "report" ? "active" : ""} type="button" onClick={() => setTab("report")}>
                <FileText size={16} />
                Report
              </button>
              <button className={tab === "qa" ? "active" : ""} type="button" onClick={() => setTab("qa")}>
                <ShieldCheck size={16} />
                QA
              </button>
              <button className={tab === "brief" ? "active" : ""} type="button" onClick={() => setTab("brief")}>
                <Rocket size={16} />
                Brief
              </button>
            </div>

            {tab === "report" && (
              <section className="output">
                <div className="section-heading">
                  <AlertTriangle size={18} />
                  <h2>Priority Risks</h2>
                </div>
                <ul>
                  {risks.map((risk) => (
                    <li key={risk}>{risk}</li>
                  ))}
                </ul>
                <div className="review-block">
                  <h3>Stability-First Pass</h3>
                  <ul>
                    {stabilityPass.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
                <div className="review-block">
                  <h3>Review Questions</h3>
                  <ul>
                    {reviewQuestions.map((question) => (
                      <li key={question}>{question}</li>
                    ))}
                  </ul>
                </div>
              </section>
            )}

            {tab === "qa" && (
              <section className="output">
                <div className="section-heading">
                  <CheckCircle2 size={18} />
                  <h2>QA Checklist</h2>
                </div>
                <ul>
                  {checklist.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </section>
            )}

            {tab === "brief" && (
              <section className="output">
                <div className="section-heading">
                  <FileText size={18} />
                  <h2>Engineering Brief</h2>
                </div>
                <ul>
                  {brief.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </section>
            )}

            <div className="actions">
              <button type="button" onClick={copyReport}>
                <Copy size={17} />
                {copied ? "Copied" : "Copy Markdown"}
              </button>
              <button type="button" onClick={downloadReport}>
                <Download size={17} />
                Download
              </button>
            </div>

            <a className="feedback-cta" href={feedbackUrl} target="_blank" rel="noreferrer">
              <MessageSquare size={17} />
              <span>
                <strong>Share feedback</strong>
                Help judge whether this packet saves a scoping call.
              </span>
            </a>
          </aside>
        </div>
      </section>
    </main>
  );
}
