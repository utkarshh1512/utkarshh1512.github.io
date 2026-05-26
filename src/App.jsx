const contactItems = [
  { label: 'Phone', value: '+91 6387023383', icon: '📞', href: 'tel:+916387023383' },
  { label: 'Email', value: 'singhutkarsh6666@gmail.com', icon: '✉️', href: 'mailto:singhutkarsh6666@gmail.com' },
  { label: 'LinkedIn', value: 'linkedin.com/in/utkarsh-singh', icon: '🔗', href: 'https://www.linkedin.com/in/utkarsh-singh/' },
  { label: 'Location', value: 'India', icon: '📍' }
];

const skillGroups = [
  { title: 'Product', items: ['Roadmapping', 'User Research', 'Prioritization', 'PRDs', 'Metrics', 'A/B Testing', 'UAT'] },
  { title: 'Technical', items: ['Java', 'SQL', 'Spring Boot basics', 'APIs', 'Jira', 'Agile/Scrum', 'SDLC'] },
  { title: 'Tools', items: ['Jira', 'Figma', 'Notion', 'Excel', 'GitHub', 'Postman', 'ChatGPT', 'Claude', 'Cursor'] },
  { title: 'Soft Skills', items: ['Stakeholder Management', 'Communication', 'Ownership', 'Problem Solving'] }
];

const projects = [
  {
    title: 'Dodo Payments Merchant Activation Improvement',
    problem: 'Merchants were dropping off between signup, verification, live access, and first transaction.',
    role: 'Product Strategy, Funnel Analysis, Activation Improvement',
    solution: 'Redesigned onboarding flow, reduced blank-dashboard confusion, added guided setup checklist, and proposed A/B testing.',
    metrics: 'Signup to first transaction conversion, verification completion rate, activation rate, 60-day retention.',
    tools: 'Notion, Figma, Funnel Analysis, Product Metrics'
  },
  {
    title: 'AI-Powered Internal Workflow Automation',
    problem: 'Teams spend too much time on repetitive reporting, Jira tracking, and manual status updates.',
    role: 'Product Discovery, Workflow Mapping, AI-Assisted Prototyping',
    solution: 'Designed an AI-assisted dashboard/workflow that summarizes Jira progress, highlights blockers, and generates leadership updates.',
    metrics: 'Manual effort reduction, reporting turnaround time, sprint predictability.',
    tools: 'Jira, AI tools, Notion, Dashboarding'
  },
  {
    title: 'Rapido Ride Reliability Improvement',
    problem: 'Occasional users do not build a habit because booking reliability drops during peak hours.',
    role: 'Product Thinking, User Segmentation, Metrics Definition',
    solution: 'Proposed instant-match optimization, predictive availability, and user confidence indicators.',
    metrics: 'Weekly rides per occasional user, ride success rate, captain acceptance rate, cancellations.',
    tools: 'Product Strategy, Metrics, Experimentation'
  },
  {
    title: 'Instagram Creation Flow Improvement',
    problem: 'Users drop off while creating Stories/Reels due to music issues and editing lag.',
    role: 'Product Analysis, UX Improvement, Metrics',
    solution: 'Improved music error messaging and optimized multi-clip editing experience.',
    metrics: 'Publish completion rate, crash rate, upload success rate, creator retention.',
    tools: 'UX Analysis, Product Metrics'
  }
];

const caseStudyDecks = [
  {
    company: 'Dodo Payments',
    title: 'Merchant Activation Case Study Deck',
    link: 'https://docs.google.com/presentation/d/1JuyIN4Pmc-X_G2UzDghTT14ztTxhhnwc9aHszKHjoio/edit?usp=sharing',
    logo: 'https://logo.clearbit.com/dodopayments.com'
  },
  {
    company: 'Workflow AI',
    title: 'Internal Workflow Automation Deck',
    link: 'https://docs.google.com/presentation/d/1SlRNhMcjbkR6T_nkhMLmH8_6_IY1DpthZS7ug-gILbs/edit?usp=sharing',
    logo: 'https://logo.clearbit.com/openai.com'
  },
  {
    company: 'Rapido',
    title: 'Ride Reliability Improvement Deck',
    link: 'https://docs.google.com/presentation/d/1UXhFrwAn6wDSXfISyMNIih-qrJjjRaZnza21z93PJTI/edit?usp=sharing',
    logo: 'https://logo.clearbit.com/rapido.bike'
  },
  {
    company: 'Instagram',
    title: 'Creation Flow Optimization Deck',
    link: 'https://docs.google.com/presentation/d/1XdTqZ-TH9pGaNKgAuSmDXDghRUNayM8bwDcEqaETFyI/edit?usp=sharing',
    logo: 'https://logo.clearbit.com/instagram.com'
  }
];

function App() {
  return (
    <div className="min-h-screen bg-[#0F1115] text-slate-100 antialiased selection:bg-blue-600/40">
      <div className="fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute -top-28 left-1/3 h-72 w-72 rounded-full bg-violet-600/30 blur-3xl" />
        <div className="absolute top-48 -left-20 h-72 w-72 rounded-full bg-blue-500/20 blur-3xl" />
      </div>

      <header className="relative overflow-hidden border-b border-white/10 bg-gradient-to-r from-blue-600/25 via-indigo-500/20 to-violet-600/25">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-12">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-blue-200">BUILD. VALIDATE. SCALE.</p>
          <h1 className="mt-4 text-4xl font-bold leading-tight sm:text-5xl">Product Strategy • User Research • Execution</h1>
        </div>
      </header>

      <main className="mx-auto max-w-7xl px-6 py-10 lg:px-12">
        <section className="grid gap-8 lg:grid-cols-[320px_1fr]">
          <aside className="space-y-5">
            <div className="rounded-2xl border border-white/10 bg-[#181C23] p-6">
              <img src="/assets/profile.jpg" alt="Utkarsh Singh" className="h-24 w-24 rounded-full border-4 border-blue-500/50 object-cover" />
              <h2 className="mt-5 text-3xl font-bold">Hey there 👋, I&apos;m Utkarsh Singh</h2>
              <p className="mt-3 text-sm text-slate-300">Associate Product Manager | Product Owner | Java Developer transitioning into Product Management</p>
              <p className="mt-4 text-sm leading-7 text-slate-300">I&apos;m a product-focused software professional with 3+ years of experience working across Java development, Agile execution, security enhancements, stakeholder communication, and product problem-solving. I enjoy turning user pain points into structured product solutions through research, prioritization, and execution.</p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-[#181C23] p-4">
              <h3 className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-slate-400">Contact</h3>
              <div className="space-y-3">
                {contactItems.map(({ label, value, icon, href }) => (
                  <div key={label} className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 p-3">
                    <span className="text-blue-300">{icon}</span>
                    <div>
                      <p className="text-xs text-slate-400">{label}</p>
                      {href ? <a className="text-sm text-slate-100 hover:text-blue-300" href={href}>{value}</a> : <p className="text-sm">{value}</p>}
                    </div>
                  </div>
                ))}
              </div>
              <a href="/assets/Utkarsh_Resume.pdf" className="mt-4 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-blue-500 to-violet-600 px-4 py-3 text-sm font-semibold hover:opacity-90">
                📄 Resume
              </a>
            </div>
          </aside>

          <div className="space-y-6">
            <section className="rounded-2xl border border-white/10 bg-[#181C23] p-6">
              <h3 className="text-xl font-semibold">About Me</h3>
              <p className="mt-3 leading-7 text-slate-300">I bring a strong mix of technical depth and product thinking. My background in Java development, Agile delivery, security improvements, and cross-functional coordination helps me work closely with engineering, design, business, and operations teams. I&apos;m especially interested in AI products, fintech, SaaS, internal tools, and workflow automation.</p>
            </section>

            <section className="rounded-2xl border border-white/10 bg-[#181C23] p-6">
              <h3 className="text-xl font-semibold">Skills</h3>
              <div className="mt-4 grid gap-4 sm:grid-cols-2">
                {skillGroups.map((group) => (
                  <div key={group.title} className="rounded-xl border border-white/10 bg-white/5 p-4">
                    <h4 className="font-semibold text-blue-300">{group.title}</h4>
                    <p className="mt-2 text-sm leading-7 text-slate-300">{group.items.join(', ')}</p>
                  </div>
                ))}
              </div>
            </section>

            <section id="projects" className="rounded-2xl border border-white/10 bg-[#181C23] p-6">
              <h3 className="text-xl font-semibold">Portfolio / Projects</h3>
              <div className="mt-4 grid gap-4 md:grid-cols-2">
                {projects.map((project) => (
                  <article key={project.title} className="group rounded-xl border border-white/10 bg-white/5 p-5 transition hover:-translate-y-1 hover:border-blue-400/40 hover:bg-white/10">
                    <h4 className="text-lg font-semibold">{project.title}</h4>
                    <p className="mt-3 text-sm text-slate-300"><span className="font-semibold text-slate-100">Problem:</span> {project.problem}</p>
                    <p className="mt-2 text-sm text-slate-300"><span className="font-semibold text-slate-100">My Role:</span> {project.role}</p>
                    <p className="mt-2 text-sm text-slate-300"><span className="font-semibold text-slate-100">Solution:</span> {project.solution}</p>
                    <p className="mt-2 text-sm text-slate-300"><span className="font-semibold text-slate-100">Key Metrics:</span> {project.metrics}</p>
                    <p className="mt-2 text-sm text-slate-300"><span className="font-semibold text-slate-100">Tools:</span> {project.tools}</p>
                    <button className="mt-4 inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-blue-500 to-violet-600 px-4 py-2 text-sm font-medium hover:opacity-90">View Case Study ↗</button>
                  </article>
                ))}
              </div>
            </section>

            <section className="rounded-2xl border border-white/10 bg-[#181C23] p-6">
              <div className="flex items-end justify-between gap-4">
                <div>
                  <h3 className="text-xl font-semibold">Case Study Decks</h3>
                  <p className="mt-2 text-sm text-slate-300">A curated set of product case-study presentations that showcase my structured PM thinking, frameworks, and recommendations.</p>
                </div>
              </div>
              <div className="mt-5 grid gap-4 sm:grid-cols-2">
                {caseStudyDecks.map((deck) => (
                  <a
                    key={deck.link}
                    href={deck.link}
                    target="_blank"
                    rel="noreferrer"
                    className="group rounded-xl border border-white/10 bg-white/5 p-4 transition hover:-translate-y-1 hover:border-violet-400/50 hover:bg-white/10"
                  >
                    <div className="flex items-center gap-3">
                      <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-white p-2">
                        <img src={deck.logo} alt={`${deck.company} logo`} className="h-full w-full object-contain" />
                      </div>
                      <div>
                        <p className="text-sm text-blue-300">{deck.company}</p>
                        <h4 className="font-semibold">{deck.title}</h4>
                      </div>
                    </div>
                    <p className="mt-3 text-sm text-slate-300">Open Google Slides deck ↗</p>
                  </a>
                ))}
              </div>
            </section>

            <section className="rounded-2xl border border-white/10 bg-[#181C23] p-6">
              <h3 className="text-xl font-semibold">Experience</h3>
              <div className="mt-4 rounded-xl border border-white/10 bg-white/5 p-5">
                <h4 className="text-lg font-semibold">Software Engineer / Scrum Master</h4>
                <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-slate-300">
                  <li>Worked on Java-based enterprise products.</li>
                  <li>Handled security enhancements and bug fixes.</li>
                  <li>Worked with Agile teams and facilitated Scrum ceremonies.</li>
                  <li>Collaborated with stakeholders and engineering teams.</li>
                  <li>Used Jira, Java, SQL, logs, and CI/CD tools.</li>
                </ul>
              </div>
            </section>

            <section className="rounded-2xl border border-blue-400/30 bg-gradient-to-r from-blue-600/20 via-indigo-600/10 to-violet-600/20 p-6">
              <h3 className="text-2xl font-semibold">Want to know more about my work?</h3>
              <div className="mt-4 flex flex-wrap gap-3">
                <a href="/assets/Utkarsh_Resume.pdf" className="rounded-lg bg-gradient-to-r from-blue-500 to-violet-600 px-4 py-2 text-sm font-semibold">Download Resume</a>
                <a href="https://www.linkedin.com/in/utkarsh-singh/" className="rounded-lg border border-white/20 px-4 py-2 text-sm font-semibold hover:bg-white/10">Connect on LinkedIn</a>
                <a href="#projects" className="rounded-lg border border-white/20 px-4 py-2 text-sm font-semibold hover:bg-white/10">View Projects</a>
              </div>
            </section>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
