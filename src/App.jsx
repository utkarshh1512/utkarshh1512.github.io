const contactItems = [
  { label: 'Phone', value: '+91 6387023383', icon: '📞', href: 'tel:+916387023383' },
  { label: 'Email', value: 'singhutkarsh6666@gmail.com', icon: '✉️', href: 'mailto:singhutkarsh6666@gmail.com' },
  { label: 'LinkedIn', value: 'LinkedIn', icon: '🔗', href: 'https://www.linkedin.com/in/utkarsh-547a821b3' },
  { label: 'Location', value: 'India', icon: '📍' }
];

const skillGroups = [
  {
    title: 'Product Skills',
    items: ['Product Discovery', 'User Research', 'User Journey Mapping', 'Roadmapping', 'Prioritization', 'PRDs', 'Metrics', 'A/B Testing', 'UAT', 'Go-to-Market Basics']
  },
  {
    title: 'Technical Understanding',
    items: ['Java', 'SQL', 'APIs', 'Spring Boot Basics', 'SDLC', 'Agile/Scrum', 'System Design Basics']
  },
  {
    title: 'Tools & Prototyping',
    items: ['Jira', 'Figma', 'Notion', 'Excel', 'GitHub', 'Postman', 'Cursor', 'ChatGPT', 'Claude']
  },
  {
    title: 'Collaboration & Execution',
    items: ['Stakeholder Management', 'Cross-functional Collaboration', 'Communication', 'Ownership', 'Problem Solving', 'Sprint Execution']
  }
];

const caseStudyDecks = [
  { title: 'Dodo Payments: Activation Strategy', desc: 'Improving merchant activation from signup to first successful transaction.', icon: '💳', link: 'https://docs.google.com/presentation/d/1JuyIN4Pmc-X_G2UzDghTT14ztTxhhnwc9aHszKHjoio/edit?usp=sharing' },
  { title: 'Rapido: Strengthening Retention & Affordability', desc: 'Retention-first mobility strategy balancing reliability and user affordability.', icon: '🏍️', link: 'https://docs.google.com/presentation/d/1UXhFrwAn6wDSXfISyMNIih-qrJjjRaZnza21z93PJTI/edit?usp=sharing' },
  { title: 'ixigo TripWise: AI-Driven Multimodal Route Optimization for India\'s Next Billion', desc: 'AI-assisted route planning to improve multimodal travel confidence and outcomes.', icon: '🧭', link: '#' },
  { title: 'Spotify: ESCAPING THE ECHO CHAMBER', desc: 'Product exploration focused on discovery depth and healthier listening diversity.', icon: '🎵', link: '#' }
];

function App() {
  return (
    <div className="min-h-screen bg-[radial-gradient(circle_at_20%_10%,rgba(185,28,28,0.16),transparent_28%),radial-gradient(circle_at_78%_20%,rgba(153,27,27,0.12),transparent_35%),linear-gradient(160deg,#040405_0%,#0b0b0d_52%,#121218_100%)] text-zinc-100 antialiased">
      <main className="mx-auto max-w-7xl px-5 py-10 sm:px-8 lg:py-14">
        <header className="mb-7 rounded-3xl border border-red-400/20 bg-gradient-to-r from-red-600/15 via-red-500/5 to-transparent p-6 shadow-[0_0_60px_rgba(127,29,29,0.25)] sm:p-8">
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-red-300">APM Portfolio</p>
          <h1 className="mt-4 text-4xl font-extrabold tracking-wide text-white sm:text-5xl">UTKARSH</h1>
        </header>

        <section className="grid gap-7 lg:grid-cols-[360px_1fr]">
          <aside className="space-y-5">
            <div className="rounded-3xl border border-zinc-800 bg-zinc-900/85 p-6 shadow-[0_8px_40px_rgba(0,0,0,0.5)]">
              <div className="mx-auto h-40 w-40 overflow-hidden rounded-full border-4 border-red-500/45">
                <img src="../assets/utkarsh_profile.jpg" alt="Utkarsh profile" className="h-full w-full object-cover" />
              </div>
              <h2 className="mt-5 text-2xl font-bold leading-tight">Hey there 👋, I&apos;m Utkarsh</h2>
              <p className="mt-2 text-sm font-medium text-zinc-300">Associate Product Manager | Product Owner | Technical Product Thinker</p>
              <p className="mt-4 text-sm leading-7 text-zinc-300">I&apos;m a product-focused professional with a software development background, interested in building user-first products across AI, fintech, SaaS, and workflow automation.</p>
            </div>

            <div className="rounded-3xl border border-zinc-800 bg-zinc-900/85 p-5 shadow-[0_8px_40px_rgba(0,0,0,0.45)]">
              <h3 className="mb-4 text-xs font-semibold uppercase tracking-[0.22em] text-zinc-400">Contact</h3>
              <div className="space-y-3">
                {contactItems.map(({ label, value, icon, href }) => (
                  <div key={label} className="flex items-center gap-3 rounded-xl border border-zinc-800 bg-zinc-950/70 p-3">
                    <span className="text-red-300">{icon}</span>
                    <div>
                      <p className="text-xs text-zinc-400">{label}</p>
                      {href ? <a className="text-sm text-zinc-100 hover:text-red-300" href={href}>{value}</a> : <p className="text-sm">{value}</p>}
                    </div>
                  </div>
                ))}
              </div>
              <a href="/assets/Utkarsh_Resume.pdf" className="mt-4 inline-flex w-full items-center justify-center rounded-xl bg-gradient-to-r from-red-600 to-rose-500 px-4 py-3 text-sm font-semibold text-white hover:brightness-110">Download Resume</a>
            </div>
          </aside>

          <div className="space-y-6">
            <section className="rounded-3xl border border-zinc-800 bg-zinc-900/85 p-6 shadow-[0_8px_40px_rgba(0,0,0,0.45)]">
              <h3 className="text-xl font-semibold">About Me</h3>
              <p className="mt-3 text-sm leading-8 text-zinc-300">I&apos;m an aspiring Associate Product Manager with a strong software development background. Having worked on Java-based enterprise systems, Agile delivery, security improvements, and cross-functional execution, I bring the ability to understand technical trade-offs while thinking deeply about user problems and business impact. My product interests include AI, fintech, SaaS, internal tools, and workflow automation.</p>
            </section>

            <section className="rounded-3xl border border-zinc-800 bg-zinc-900/85 p-6 shadow-[0_8px_40px_rgba(0,0,0,0.45)]">
              <h3 className="text-xl font-semibold">Skills</h3>
              <div className="mt-4 grid gap-4 sm:grid-cols-2">
                {skillGroups.map((group) => (
                  <article key={group.title} className="rounded-2xl border border-zinc-800 bg-zinc-950/70 p-4 transition duration-300 hover:border-red-500/45 hover:shadow-[0_0_35px_rgba(220,38,38,0.14)]">
                    <h4 className="font-semibold text-red-300">{group.title}</h4>
                    <p className="mt-2 text-sm leading-7 text-zinc-300">{group.items.join(', ')}</p>
                  </article>
                ))}
              </div>
            </section>

            <section className="rounded-3xl border border-zinc-800 bg-zinc-900/85 p-6 shadow-[0_8px_40px_rgba(0,0,0,0.45)]">
              <h3 className="text-xl font-semibold">Experience</h3>
              <article className="mt-4 rounded-2xl border border-zinc-800 bg-zinc-950/70 p-5">
                <h4 className="text-lg font-semibold text-white">Associate Product Manager / Software Engineer — Vertafore</h4>
                <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-7 text-zinc-300">
                  <li>Worked on enterprise B2B SaaS platform features across development, execution, and stakeholder coordination.</li>
                  <li>Translated stakeholder pain points into clear requirements, user stories, and actionable backlog items.</li>
                  <li>Prioritized fixes and enhancements based on user impact, business urgency, and engineering effort.</li>
                  <li>Collaborated with engineering, QA, and business teams to deliver features, resolve issues, and improve platform reliability.</li>
                  <li>Used RCA, SQL/log analysis, Jira, and Agile ceremonies to reduce recurring production issues and improve execution quality.</li>
                </ul>
              </article>
            </section>

            <section className="rounded-3xl border border-zinc-800 bg-zinc-900/85 p-6 shadow-[0_8px_40px_rgba(0,0,0,0.45)]">
              <h3 className="text-xl font-semibold">Case Study Decks</h3>
              <p className="mt-2 text-sm text-zinc-300">Selected product case studies that showcase my thinking on user problems, execution strategy, and business impact.</p>
              <div className="mt-5 grid gap-4 sm:grid-cols-2">
                {caseStudyDecks.map((deck) => (
                  <a key={deck.title} href={deck.link} target="_blank" rel="noreferrer" className="group rounded-2xl border border-zinc-800 bg-zinc-950/70 p-4 transition duration-300 hover:-translate-y-1 hover:border-red-500/45 hover:shadow-[0_0_35px_rgba(220,38,38,0.16)]">
                    <div className="flex items-start gap-3">
                      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-red-500/15 text-xl">{deck.icon}</div>
                      <div>
                        <h4 className="font-semibold leading-6 text-white">{deck.title}</h4>
                        <p className="mt-1 text-sm text-zinc-300">{deck.desc}</p>
                      </div>
                    </div>
                    <p className="mt-3 text-sm font-medium text-red-300">View Case Study ↗</p>
                  </a>
                ))}
              </div>
            </section>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
