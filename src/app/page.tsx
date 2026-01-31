import Image from "next/image";

type NavItem = { label: string; href: string };

const nav: NavItem[] = [
  { label: "Product", href: "#product" },
  { label: "Research", href: "#research" },
  { label: "About Us", href: "#about" },
  { label: "Media", href: "#media" },
  { label: "Login", href: "https://app.edyou.com" },
];

const partnerLogos = [
  "UAB",
  "Residents Medical",
  "Harvard",
  "Stanford",
  "Wake Forest",
  "Rush",
];

const featuredIn = [
  "CBS",
  "NBC",
  "USA TODAY",
  "FOX",
  "KTLA",
  "LA Weekly",
];

const faqs = [
  {
    q: "Is this just ChatGPT for schools?",
    a: "No. edYOU is designed for safe, curriculum-aligned learning. It emphasizes accuracy, guardrails, and institutional control—so learners get consistent, trusted support.",
  },
  {
    q: "How does edYOU protect our curriculum and IP?",
    a: "We help institutions digitize and deploy their materials in a secure environment, with access controls and governance designed for academic and clinical standards.",
  },
  {
    q: "Can program directors track outcomes?",
    a: "Yes—real-time analytics surface strengths, knowledge gaps, and at-risk learners early so educators can intervene long before exam day.",
  },
  {
    q: "Do you support residents and fellows at scale?",
    a: "That’s the point: 24/7 practice on your content, personalized tutoring, and dashboards built for GME workflows—without adding workload.",
  },
];

function Pill({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white/70 px-3 py-1 text-xs font-semibold text-slate-700 shadow-sm backdrop-blur">
      {children}
    </span>
  );
}

function SectionTitle({ eyebrow, title, desc }: { eyebrow?: string; title: string; desc?: string }) {
  return (
    <div className="mx-auto max-w-3xl text-center">
      {eyebrow ? (
        <div className="mb-3 flex justify-center">
          <Pill>{eyebrow}</Pill>
        </div>
      ) : null}
      <h2 className="text-balance text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
        {title}
      </h2>
      {desc ? (
        <p className="mt-4 text-pretty text-base leading-7 text-slate-600 sm:text-lg">{desc}</p>
      ) : null}
    </div>
  );
}

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      {/* Top gradient backdrop */}
      <div className="hero-bg">
        {/* Sticky Nav */}
        <header className="sticky top-0 z-50 border-b border-white/30 bg-white/55 backdrop-blur">
          <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-6">
            <a href="#" className="flex items-center gap-3">
              <Image src="/edyou-logo.png" alt="edYOU" width={110} height={52} priority />
              <span className="hidden text-sm font-semibold tracking-tight text-slate-700 sm:inline">
                Empower Yourself
              </span>
            </a>

            <nav className="hidden items-center gap-6 md:flex">
              {nav.map((n) => (
                <a
                  key={n.label}
                  href={n.href}
                  className="text-sm font-semibold text-slate-700 transition-colors hover:text-slate-900"
                >
                  {n.label}
                </a>
              ))}
              <a
                href="#book"
                className="rounded-full bg-slate-900 px-4 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-slate-800"
              >
                Book a demo
              </a>
            </nav>

            {/* Mobile CTA */}
            <a
              href="#book"
              className="inline-flex items-center rounded-full bg-slate-900 px-4 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-slate-800 md:hidden"
            >
              Book
            </a>
          </div>
        </header>

        {/* Hero */}
        <section className="relative overflow-hidden">
          <div className="pointer-events-none absolute inset-0">
            <div className="absolute left-1/2 top-[-180px] h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-gradient-to-tr from-sky-400/30 via-indigo-400/20 to-fuchsia-400/20 blur-3xl" />
            <div className="absolute right-[-120px] top-[120px] h-[380px] w-[380px] rounded-full bg-gradient-to-tr from-indigo-400/25 via-sky-300/15 to-transparent blur-3xl" />
          </div>

          <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 py-14 sm:px-6 sm:py-20 lg:grid-cols-2">
            <div>
              <div className="flex flex-wrap items-center gap-2">
                <Pill>GME-ready · Safe AI · Curriculum-first</Pill>
                <Pill>Built for academic & clinical standards</Pill>
              </div>
              <h1 className="mt-6 text-balance text-4xl font-semibold tracking-tight text-slate-900 sm:text-5xl">
                Elevate GME at your institution with <span className="text-slate-900">edYOU</span>
              </h1>
              <p className="mt-5 max-w-xl text-pretty text-base leading-7 text-slate-600 sm:text-lg">
                The safe, trusted, and accurate AI teaching platform for medical education. Unlimited
                test prep. Personalized AI tutors. Improved outcomes for residents and fellows.
              </p>

              <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:items-center">
                <a
                  href="#book"
                  className="inline-flex items-center justify-center rounded-full bg-slate-900 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-slate-900/10 transition hover:bg-slate-800"
                >
                  Book your personalized demo
                </a>
                <a
                  href="#product"
                  className="inline-flex items-center justify-center rounded-full border border-slate-200 bg-white/70 px-6 py-3 text-sm font-semibold text-slate-800 shadow-sm backdrop-blur transition hover:bg-white"
                >
                  Explore the platform
                </a>
              </div>

              <div className="mt-10">
                <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                  Trusted by institutions & partners
                </p>
                <div className="mt-4 flex flex-wrap items-center gap-2">
                  {partnerLogos.map((name) => (
                    <div
                      key={name}
                      className="glass relative overflow-hidden rounded-xl px-4 py-2"
                    >
                      <div className="pointer-events-none absolute inset-0 gradient-sheen" />
                      <span className="relative text-xs font-semibold text-slate-700">{name}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Demo card */}
            <div id="book" className="glass relative overflow-hidden rounded-3xl p-5 sm:p-7">
              <div className="pointer-events-none absolute inset-0 opacity-70">
                <div className="absolute -left-24 -top-24 h-64 w-64 rounded-full bg-sky-400/20 blur-3xl" />
                <div className="absolute -right-24 -bottom-24 h-64 w-64 rounded-full bg-indigo-400/20 blur-3xl" />
              </div>

              <div className="relative">
                <h3 className="text-lg font-semibold text-slate-900">Book your personalized demo</h3>
                <p className="mt-1 text-sm text-slate-600">
                  Get a guided walkthrough for program directors and faculty.
                </p>

                <form className="mt-6 space-y-3" action="#">
                  <div className="grid gap-3 sm:grid-cols-2">
                    <label className="block">
                      <span className="text-xs font-semibold text-slate-600">First name</span>
                      <input
                        className="mt-1 w-full rounded-xl border border-slate-200 bg-white/70 px-4 py-3 text-sm outline-none ring-0 transition focus:border-slate-300"
                        placeholder="Max"
                      />
                    </label>
                    <label className="block">
                      <span className="text-xs font-semibold text-slate-600">Last name</span>
                      <input
                        className="mt-1 w-full rounded-xl border border-slate-200 bg-white/70 px-4 py-3 text-sm outline-none ring-0 transition focus:border-slate-300"
                        placeholder="Jay"
                      />
                    </label>
                  </div>

                  <label className="block">
                    <span className="text-xs font-semibold text-slate-600">Work email</span>
                    <input
                      type="email"
                      className="mt-1 w-full rounded-xl border border-slate-200 bg-white/70 px-4 py-3 text-sm outline-none ring-0 transition focus:border-slate-300"
                      placeholder="name@institution.edu"
                    />
                  </label>

                  <label className="block">
                    <span className="text-xs font-semibold text-slate-600">Institution / Program</span>
                    <input
                      className="mt-1 w-full rounded-xl border border-slate-200 bg-white/70 px-4 py-3 text-sm outline-none ring-0 transition focus:border-slate-300"
                      placeholder="GME program name"
                    />
                  </label>

                  <button
                    type="submit"
                    className="mt-2 inline-flex w-full items-center justify-center rounded-xl bg-slate-900 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-slate-900/10 transition hover:bg-slate-800"
                  >
                    Request demo
                  </button>

                  <p className="text-xs text-slate-500">
                    By submitting, you agree to be contacted about edYOU. (Placeholder form)
                  </p>
                </form>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* Residents Medical callout */}
      <section id="about" className="py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="grid gap-8 lg:grid-cols-2">
            <div className="glass relative overflow-hidden rounded-3xl p-6 sm:p-10">
              <div className="pointer-events-none absolute inset-0 gradient-sheen" />
              <div className="relative">
                <h3 className="text-xl font-semibold text-slate-900">edYOU is brought to you by Residents Medical</h3>
                <p className="mt-3 text-sm leading-7 text-slate-600">
                  Residents Medical is the world’s most trusted GME brand for over 30 years, helping
                  thousands of candidates secure medical residency and fellowship.
                </p>
                <a
                  href="#"
                  className="mt-6 inline-flex items-center rounded-full bg-slate-900 px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-slate-800"
                >
                  Learn more
                </a>
              </div>
            </div>

            <div className="grid gap-4">
              <div className="glass animate-floaty relative overflow-hidden rounded-3xl p-6 sm:p-10">
                <div className="pointer-events-none absolute inset-0 opacity-70">
                  <div className="absolute left-10 top-10 h-24 w-24 rounded-full bg-sky-400/25 blur-2xl" />
                  <div className="absolute right-10 bottom-10 h-24 w-24 rounded-full bg-indigo-400/25 blur-2xl" />
                </div>
                <div className="relative">
                  <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                    Outcome-driven
                  </p>
                  <h4 className="mt-2 text-lg font-semibold text-slate-900">Protect your curriculum. Amplify your impact.</h4>
                  <p className="mt-2 text-sm leading-7 text-slate-600">
                    Digitize expert material and extend your reach—learners can practice with your content 24/7.
                  </p>
                </div>
              </div>

              <div className="glass relative overflow-hidden rounded-3xl p-6 sm:p-10">
                <div className="pointer-events-none absolute inset-0 gradient-sheen" />
                <div className="relative">
                  <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">Institution-ready</p>
                  <h4 className="mt-2 text-lg font-semibold text-slate-900">Safe, trusted AI for GME</h4>
                  <p className="mt-2 text-sm leading-7 text-slate-600">
                    Built to meet academic and clinical standards—governance, guardrails, and analytics.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured In */}
      <section id="media" className="border-y border-slate-100 bg-slate-50/60 py-14">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <SectionTitle eyebrow="Press" title="Featured In" desc="A quick snapshot of where edYOU is being discussed." />
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            {featuredIn.map((name) => (
              <div key={name} className="rounded-2xl border border-slate-200 bg-white px-5 py-3 text-sm font-semibold text-slate-700 shadow-sm">
                {name}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Professors & Societies */}
      <section id="product" className="py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="grid items-center gap-10 lg:grid-cols-2">
            <div>
              <SectionTitle
                eyebrow="For educators"
                title="Why Professors & Societies Choose edYOU"
                desc="A safe AI partner to digitize, scale, and monetize curriculum—without sacrificing academic integrity."
              />
              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                {[
                  {
                    t: "Curriculum-first",
                    d: "Upload teaching materials into a secure platform and keep outcomes aligned to your standards.",
                  },
                  {
                    t: "IP protection",
                    d: "Safeguards designed to respect and protect decades of expert work.",
                  },
                  {
                    t: "Revenue sharing",
                    d: "Opportunities to digitize and distribute high-quality educational content.",
                  },
                  {
                    t: "Quality guardrails",
                    d: "Safety checks + oversight to keep learning on-track and appropriate.",
                  },
                ].map((c) => (
                  <div key={c.t} className="glass rounded-2xl p-5">
                    <h4 className="text-sm font-semibold text-slate-900">{c.t}</h4>
                    <p className="mt-2 text-sm leading-7 text-slate-600">{c.d}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="glass relative overflow-hidden rounded-3xl p-6 sm:p-10">
              <div className="pointer-events-none absolute inset-0">
                <div className="absolute -left-24 -top-24 h-72 w-72 rounded-full bg-sky-400/20 blur-3xl" />
                <div className="absolute -right-24 -bottom-24 h-72 w-72 rounded-full bg-fuchsia-400/15 blur-3xl" />
              </div>
              <div className="relative">
                <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">Always available</p>
                <h4 className="mt-2 text-xl font-semibold text-slate-900">Your curriculum, 24/7 practice</h4>
                <p className="mt-3 text-sm leading-7 text-slate-600">
                  Learners get personalized tutoring and practice in a consistent, curriculum-aligned way—without
                  adding workload for faculty.
                </p>

                <div className="mt-6 grid gap-3 sm:grid-cols-2">
                  {[
                    { k: "Zero surprises", v: "Track progress continuously" },
                    { k: "Targeted remediation", v: "Surface knowledge gaps" },
                    { k: "Better outcomes", v: "Improve pass rates" },
                    { k: "Faster review", v: "Study smarter" },
                  ].map((s) => (
                    <div key={s.k} className="rounded-2xl border border-slate-200 bg-white/70 p-4">
                      <div className="text-xs font-semibold text-slate-900">{s.k}</div>
                      <div className="mt-1 text-xs text-slate-600">{s.v}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Analytics section */}
      <section className="section-gradient py-16 sm:py-20" id="research">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="mx-auto max-w-3xl text-center">
            <div className="mb-3 flex justify-center">
              <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs font-semibold text-white/90">
                Real-time analytics
              </span>
            </div>
            <h2 className="text-balance text-3xl font-semibold tracking-tight text-white sm:text-4xl">
              Real-time insight. Real academic impact.
            </h2>
            <p className="mt-4 text-pretty text-base leading-7 text-white/70 sm:text-lg">
              Track performance, identify at-risk learners early, and personalize remediation—before exam day.
            </p>
          </div>

          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {[
              {
                t: "Track Progress",
                d: "Dashboards highlight strengths, reveal knowledge gaps, and show growth over time.",
              },
              {
                t: "Target interventions",
                d: "Automated insights help instructors adapt study plans and strengthen clinical reasoning.",
              },
              {
                t: "Institution-ready",
                d: "Designed for GME workflows—accuracy, safety, and governance are built in.",
              },
            ].map((c) => (
              <div key={c.t} className="rounded-3xl border border-white/15 bg-white/10 p-6 backdrop-blur">
                <h3 className="text-base font-semibold text-white">{c.t}</h3>
                <p className="mt-2 text-sm leading-7 text-white/70">{c.d}</p>
              </div>
            ))}
          </div>

          <div className="mt-10 glass relative overflow-hidden rounded-3xl p-6 sm:p-10">
            <div className="pointer-events-none absolute inset-0 opacity-70">
              <div className="absolute left-10 top-10 h-28 w-28 rounded-full bg-sky-400/25 blur-2xl" />
              <div className="absolute right-10 bottom-10 h-28 w-28 rounded-full bg-indigo-400/25 blur-2xl" />
            </div>
            <div className="relative grid gap-6 lg:grid-cols-2">
              <div>
                <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">Dashboard preview</p>
                <h3 className="mt-2 text-xl font-semibold text-slate-900">Clarity for faculty. Confidence for learners.</h3>
                <p className="mt-3 text-sm leading-7 text-slate-600">
                  See cohort trends, drill into individual progress, and align remediation with your curriculum.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-3">
                {[
                  { k: "Knowledge gap score", v: "Down 18%" },
                  { k: "At-risk learners", v: "Identified early" },
                  { k: "Practice sessions", v: "+2.3×" },
                  { k: "Readiness", v: "Up trend" },
                ].map((s) => (
                  <div key={s.k} className="rounded-2xl border border-slate-200 bg-white/70 p-4">
                    <div className="text-xs font-semibold text-slate-900">{s.k}</div>
                    <div className="mt-1 text-xs text-slate-600">{s.v}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Top Institutions */}
      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <SectionTitle
            eyebrow="Built for GME"
            title="Why Top Institutions Choose edYOU"
            desc="Tools and safeguards designed for professors, program directors, and clinical educators."
          />

          <div className="mt-10 grid gap-4 md:grid-cols-3">
            {[
              {
                t: "Built for GME Professors",
                d: "Digitize decades of curriculum and keep it aligned to your standards.",
              },
              {
                t: "Accurate & Secure AI Platform",
                d: "Accuracy, safety, and IP protection are first-class features.",
              },
              {
                t: "Data-Driven Outcomes",
                d: "Dashboards that help faculty guide study plans and boost pass rates.",
              },
            ].map((c) => (
              <div key={c.t} className="glass rounded-3xl p-6">
                <h3 className="text-base font-semibold text-slate-900">{c.t}</h3>
                <p className="mt-2 text-sm leading-7 text-slate-600">{c.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="border-y border-slate-100 bg-slate-50/60 py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <SectionTitle
            eyebrow="Proof"
            title="Trusted by learners and leaders"
            desc="A few highlights from partners, educators, and students."
          />

          <div className="mt-10 grid gap-4 md:grid-cols-3">
            {[
              {
                quote:
                  "The greatest performance enhancement tool we've used in a long time.",
                name: "Coach Trent Dilfer",
                role: "Superbowl Champion Head Coach",
              },
              {
                quote:
                  "Sierra Canyon is happy to utilize edYOU, as this is the future of learning.",
                name: "Jim Skrumbis",
                role: "Head of School",
              },
              {
                quote:
                  "It’s made learning easier for me. It helps me retain information—and made studying fun.",
                name: "Dr. Shakirat",
                role: "Doctor of Medicine",
              },
            ].map((t) => (
              <div key={t.name} className="glass rounded-3xl p-6">
                <div className="flex items-center gap-1 text-amber-400">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <span key={i}>★</span>
                  ))}
                </div>
                <p className="mt-4 text-sm leading-7 text-slate-700">“{t.quote}”</p>
                <div className="mt-5">
                  <div className="text-sm font-semibold text-slate-900">{t.name}</div>
                  <div className="text-xs text-slate-600">{t.role}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Labs Promo */}
      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="glass relative overflow-hidden rounded-3xl p-6 sm:p-10">
            <div className="pointer-events-none absolute inset-0 opacity-70">
              <div className="absolute -left-24 -top-24 h-72 w-72 rounded-full bg-indigo-400/20 blur-3xl" />
              <div className="absolute -right-24 -bottom-24 h-72 w-72 rounded-full bg-sky-400/20 blur-3xl" />
            </div>
            <div className="relative grid items-center gap-8 lg:grid-cols-2">
              <div>
                <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">edYOU Labs</p>
                <h3 className="mt-2 text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl">
                  Reliable & proven through published research
                </h3>
                <p className="mt-3 text-sm leading-7 text-slate-600">
                  Learn more about the technologies powering edYOU and how institutions deploy safe, accurate AI.
                </p>
                <a
                  href="https://edyou.com/labs"
                  className="mt-6 inline-flex items-center rounded-full bg-slate-900 px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-slate-800"
                >
                  Explore Labs
                </a>
              </div>

              <div className="grid gap-3 sm:grid-cols-2">
                {[
                  { k: "PIE", v: "Proprietary Ingestion Engine" },
                  { k: "ICE", v: "Intelligent Curation Engine" },
                  { k: "Safety", v: "Human + automation review" },
                  { k: "Integrity", v: "Curriculum-aligned learning" },
                ].map((x) => (
                  <div key={x.k} className="rounded-2xl border border-slate-200 bg-white/70 p-4">
                    <div className="text-xs font-semibold text-slate-900">{x.k}</div>
                    <div className="mt-1 text-xs text-slate-600">{x.v}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="border-t border-slate-100 bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <SectionTitle eyebrow="FAQ" title="Frequently asked questions" desc="Quick answers about safety, outcomes, and deployment." />

          <div className="mx-auto mt-10 max-w-3xl space-y-3">
            {faqs.map((f) => (
              <details key={f.q} className="glass group rounded-2xl p-5">
                <summary className="cursor-pointer list-none text-sm font-semibold text-slate-900">
                  <span className="flex items-center justify-between gap-4">
                    <span>{f.q}</span>
                    <span className="text-slate-500 transition group-open:rotate-45">+</span>
                  </span>
                </summary>
                <p className="mt-3 text-sm leading-7 text-slate-600">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-100 bg-slate-950 py-10 text-white">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="flex flex-col items-start justify-between gap-8 sm:flex-row sm:items-center">
            <div className="flex items-center gap-3">
              <Image src="/edyou-logo.png" alt="edYOU" width={110} height={52} />
              <div>
                <div className="text-sm font-semibold">Study smarter, not harder.</div>
                <div className="text-xs text-white/70">The future of education is edYOU.</div>
              </div>
            </div>
            <div className="flex flex-wrap gap-4 text-sm text-white/80">
              <a className="hover:text-white" href="#product">
                Product
              </a>
              <a className="hover:text-white" href="#research">
                Research
              </a>
              <a className="hover:text-white" href="#about">
                About
              </a>
              <a className="hover:text-white" href="#media">
                Media
              </a>
              <a className="hover:text-white" href="https://app.edyou.com">
                Login
              </a>
            </div>
          </div>

          <div className="mt-8 flex flex-col gap-2 border-t border-white/10 pt-6 text-xs text-white/60 sm:flex-row sm:items-center sm:justify-between">
            <div>© {new Date().getFullYear()} edYOU. All rights reserved.</div>
            <div className="text-white/50">Deployed on Netlify · Built with Next.js</div>
          </div>
        </div>
      </footer>
    </div>
  );
}
