const experiences = [
  {
    role: 'Associate Product Manager (Platform)',
    company: 'Vertafore',
    duration: 'Mar 2023 — Present',
    highlights: [
      'Owned end-to-end delivery of platform features impacting internal users and business stakeholders.',
      'Translated user pain points into clear PRDs and measurable product requirements.',
      'Prioritized backlog based on user value, business impact, and engineering constraints.',
      'Defined KPI framework to track adoption, quality, and release outcomes.',
      'Reduced production issues by 20–30% through root-cause analysis and stronger planning loops.'
    ]
  },
  {
    role: 'Software Engineer',
    company: 'Vertafore',
    duration: 'Dec 2022 — Mar 2023',
    highlights: [
      'Built backend APIs and improved platform reliability through bug resolution.',
      'Collaborated with product teams to refine feature scope and prioritize fixes.'
    ]
  }
];

const projects = [
  {
    name: 'Improving Product Availability in Blinkit',
    impact: 'Estimated +5% product availability and 12–15% reduction in wastage.',
    points: [
      'Analyzed stockout patterns in dark stores during demand spikes.',
      'Proposed predictive demand forecasting with smart replenishment workflow.',
      'Designed dashboards for availability rate, demand trends, and replenishment cycles.'
    ]
  },
  {
    name: 'Delivery Batch Optimization for Quick Commerce',
    impact: 'Estimated 10–15% reduction in delivery cost per order and better consistency.',
    points: [
      'Identified dispatch inefficiencies caused by single-order routing during peak demand.',
      'Proposed smart batching logic to group nearby orders within short time windows.',
      'Designed assignment workflow based on order distance and preparation times.'
    ]
  }
];

function App() {
  return (
    <main className="page">
      <section className="hero card">
        <p className="eyebrow">Product Portfolio</p>
        <h1>Utkarsh</h1>
        <h2>Associate Product Manager</h2>
        <p className="summary">
          Building scalable B2B SaaS platforms through <strong>0→1 problem discovery</strong>,
          KPI-driven execution, and cross-functional leadership.
        </p>
        <div className="contact">
          <a href="mailto:singhutkarsh6666@gmail.com">singhutkarsh6666@gmail.com</a>
          <span>+91 6387023383</span>
          <a href="https://www.linkedin.com" target="_blank" rel="noreferrer">LinkedIn</a>
        </div>
      </section>

      <section className="grid">
        <article className="card">
          <h3>Core Skills</h3>
          <ul>
            <li><strong>Product:</strong> Roadmapping, PRDs, User Stories, Prioritization, Lifecycle Management</li>
            <li><strong>Execution:</strong> Agile, Scrum, Sprint Planning, Cross-functional Leadership</li>
            <li><strong>Analytics:</strong> SQL, KPI Tracking, A/B Testing, Root Cause Analysis</li>
            <li><strong>Tech:</strong> APIs, Microservices, System Design</li>
            <li><strong>Tools:</strong> JIRA, Confluence, Excel, Google Sheets</li>
          </ul>
        </article>

        <article className="card">
          <h3>Product Impact</h3>
          <ul>
            <li>Improved system performance by resolving latency bottlenecks.</li>
            <li>Reduced recurring issues by 20%+ using structured RCA.</li>
            <li>Strengthened platform security by fixing critical vulnerabilities.</li>
          </ul>
        </article>
      </section>

      <section className="card">
        <h3>Experience</h3>
        {experiences.map((exp) => (
          <div className="timeline" key={exp.role}>
            <div className="timeline-header">
              <h4>{exp.role} · {exp.company}</h4>
              <span>{exp.duration}</span>
            </div>
            <ul>
              {exp.highlights.map((point) => <li key={point}>{point}</li>)}
            </ul>
          </div>
        ))}
      </section>

      <section className="card">
        <h3>Product Exploration Projects</h3>
        <div className="projects">
          {projects.map((project) => (
            <article key={project.name} className="project">
              <h4>{project.name}</h4>
              <ul>
                {project.points.map((point) => <li key={point}>{point}</li>)}
              </ul>
              <p><strong>Potential Impact:</strong> {project.impact}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="card education">
        <h3>Education</h3>
        <p><strong>B.Tech, Electronics & Telecommunication</strong></p>
        <p>Kalinga Institute of Industrial Technology · 2018 — 2022</p>
      </section>
    </main>
  );
}

export default App;
