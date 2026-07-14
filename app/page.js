const services = [
  {
    number: "01",
    title: "Private business AI assistants",
    description:
      "Give your team a secure way to search, understand and talk to the company information you already hold.",
  },
  {
    number: "02",
    title: "LLM integration & development",
    description:
      "Connect leading language models to your existing software, data sources and day-to-day operations.",
  },
  {
    number: "03",
    title: "Workflow automation",
    description:
      "Reduce repetitive administration with practical automations designed around the way your team actually works.",
  },
  {
    number: "04",
    title: "Consulting & team training",
    description:
      "Identify the right use cases, build a realistic adoption plan and help your people use AI with confidence.",
  },
];

const openingHours = [
  ["Monday", "07:00–19:00"],
  ["Tuesday", "07:00–19:00"],
  ["Wednesday", "07:00–19:00"],
  ["Thursday", "07:00–19:00"],
  ["Friday", "07:00–19:00"],
  ["Saturday", "07:00–19:00"],
  ["Sunday", "Closed"],
];

const businessSchema = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "LLM Consulting",
  url: "https://www.llmconsulting.co.uk/",
  email: "info@llmconsulting.co.uk",
  telephone: "+44 7857 137258",
  description:
    "LLM Consulting helps SMEs adopt secure, practical AI solutions, including private AI assistants, LLM integrations and workflow automation.",
  address: {
    "@type": "PostalAddress",
    streetAddress: "61 Otley Road, Headingley",
    addressLocality: "Leeds",
    postalCode: "LS6 3AB",
    addressCountry: "GB",
  },
  areaServed: "United Kingdom",
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      opens: "07:00",
      closes: "19:00",
    },
  ],
};

function ArrowIcon() {
  return (
    <svg viewBox="0 0 20 20" aria-hidden="true">
      <path d="M4 10h11M11 5l5 5-5 5" />
    </svg>
  );
}

function CheckIcon() {
  return (
    <svg viewBox="0 0 20 20" aria-hidden="true">
      <path d="m5 10 3 3 7-7" />
    </svg>
  );
}

export default function Home() {
  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(businessSchema) }}
      />

      <header className="site-header">
        <a className="brand" href="#top" aria-label="LLM Consulting home">
          <span className="brand-mark" aria-hidden="true">L</span>
          <span>LLM Consulting</span>
        </a>
        <nav aria-label="Main navigation">
          <a href="#services">Services</a>
          <a href="#approach">Approach</a>
          <a href="#contact">Contact</a>
        </nav>
        <a className="header-cta" href="mailto:info@llmconsulting.co.uk?subject=AI%20consultation">
          Book a consultation
          <ArrowIcon />
        </a>
      </header>

      <section className="hero" id="top">
        <div className="hero-copy">
          <p className="eyebrow"><span /> Practical AI for UK SMEs</p>
          <h1>Make AI useful<br />for <em>your</em> business.</h1>
          <p className="hero-intro">
            We help small and medium-sized organisations adopt secure, practical AI—connecting it to the data, software and workflows your teams already use.
          </p>
          <div className="hero-actions">
            <a className="button button-primary" href="mailto:info@llmconsulting.co.uk?subject=AI%20consultation">
              Discuss your business <ArrowIcon />
            </a>
            <a className="text-link" href="#example">See a practical example <ArrowIcon /></a>
          </div>
          <div className="trust-row" aria-label="Service options">
            <span><CheckIcon /> Tailored to your organisation</span>
            <span><CheckIcon /> On-site or remote</span>
            <span><CheckIcon /> Private deployment options</span>
          </div>
        </div>

        <div className="hero-visual" aria-label="Diagram showing private AI connected to business data">
          <div className="visual-grid" />
          <div className="status-pill"><span /> Your data stays under your control</div>
          <div className="data-card data-source">
            <span className="card-kicker">Your business</span>
            <strong>Company data</strong>
            <div className="file-row"><i>PDF</i><span>Policies & documents</span></div>
            <div className="file-row"><i>DB</i><span>Internal databases</span></div>
            <div className="file-row"><i>CRM</i><span>Business systems</span></div>
          </div>
          <div className="flow-line flow-line-one"><span>secure connection</span></div>
          <div className="ai-core">
            <span className="ai-orbit" />
            <span className="ai-label">Private<br /><strong>AI</strong></span>
          </div>
          <div className="flow-line flow-line-two" />
          <div className="chat-card">
            <span className="card-kicker">Your team asks</span>
            <p>“Summarise the key changes in our supplier contracts.”</p>
            <div className="answer"><span>AI</span><i /><i /><i /></div>
          </div>
        </div>
      </section>

      <section className="outcomes" aria-label="How we help">
        <p>From uncertainty to a working AI solution</p>
        <div><strong>01</strong><span>Find the right<br />use case</span></div>
        <div><strong>02</strong><span>Connect your data<br />and systems</span></div>
        <div><strong>03</strong><span>Equip your team<br />to use it</span></div>
      </section>

      <section className="example section-pad" id="example">
        <div className="section-heading">
          <p className="eyebrow"><span /> A practical example</p>
          <h2>Talk to your company data.<br /><em>Without moving it out.</em></h2>
        </div>
        <div className="example-grid">
          <div className="example-copy">
            <p className="lead">
              Your organisation may already have years of valuable information stored across servers, shared drives and business systems. We can make it securely searchable through a conversational AI assistant.
            </p>
            <ul>
              <li><CheckIcon /><span><strong>Ask questions in plain English</strong> and receive clear answers grounded in your own information.</span></li>
              <li><CheckIcon /><span><strong>Respect permissions and access controls</strong> so people only see the data they are meant to see.</span></li>
              <li><CheckIcon /><span><strong>Choose where it runs</strong> with on-premises, private-cloud and carefully controlled hosted options.</span></li>
            </ul>
          </div>
          <aside className="quote-panel">
            <span className="quote-mark">“</span>
            <blockquote>
              What did we agree with this customer, and what needs to happen next?
            </blockquote>
            <p>Your assistant searches approved sources, gives a concise answer and points your team back to the original documents.</p>
          </aside>
        </div>
      </section>

      <section className="services section-pad" id="services">
        <div className="section-heading services-heading">
          <div>
            <p className="eyebrow light"><span /> What we do</p>
            <h2>AI that fits the way<br />your business works.</h2>
          </div>
          <p>We combine practical consultancy with hands-on implementation, so ideas become tools your team can actually use.</p>
        </div>
        <div className="service-list">
          {services.map((service) => (
            <article key={service.number}>
              <span>{service.number}</span>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
              <ArrowIcon />
            </article>
          ))}
        </div>
      </section>

      <section className="approach section-pad" id="approach">
        <div className="section-heading compact">
          <p className="eyebrow"><span /> Our approach</p>
          <h2>Start with the business.<br /><em>Then choose the AI.</em></h2>
        </div>
        <div className="approach-grid">
          <article>
            <span>Discover</span>
            <h3>Understand the opportunity</h3>
            <p>We learn how your team works, where time is lost and which information is hardest to reach.</p>
          </article>
          <article>
            <span>Design & build</span>
            <h3>Create the right solution</h3>
            <p>We choose an appropriate model, connect the necessary systems and build with privacy in mind.</p>
          </article>
          <article>
            <span>Adopt</span>
            <h3>Make it part of the day-to-day</h3>
            <p>We test with your people, provide training and refine the solution using real feedback.</p>
          </article>
        </div>
      </section>

      <section className="contact section-pad" id="contact">
        <div className="contact-intro">
          <p className="eyebrow light"><span /> Let’s talk</p>
          <h2>Where could AI make<br />a real difference?</h2>
          <p>Tell us what is slowing your team down, or where your business information is difficult to use. We’ll help you identify a sensible next step.</p>
          <div className="contact-actions">
            <a className="button button-light" href="mailto:info@llmconsulting.co.uk?subject=AI%20consultation">
              Email us <ArrowIcon />
            </a>
            <a className="phone-link" href="tel:+447857137258">07857 137258</a>
          </div>
        </div>
        <div className="contact-card">
          <div>
            <span className="detail-label">Email</span>
            <a href="mailto:info@llmconsulting.co.uk">info@llmconsulting.co.uk</a>
          </div>
          <div>
            <span className="detail-label">Visit</span>
            <a href="https://www.google.com/maps/search/?api=1&query=61+Otley+Road+Headingley+Leeds+LS6+3AB" target="_blank" rel="noreferrer">
              61 Otley Road, Headingley<br />Leeds, LS6 3AB
            </a>
          </div>
          <div>
            <span className="detail-label">Opening hours</span>
            <dl>
              {openingHours.map(([day, hours]) => (
                <div key={day}><dt>{day}</dt><dd>{hours}</dd></div>
              ))}
            </dl>
          </div>
          <p className="availability"><span /> On-site and remote consultations available</p>
        </div>
      </section>

      <footer>
        <a className="brand footer-brand" href="#top">
          <span className="brand-mark">L</span>
          <span>LLM Consulting</span>
        </a>
        <p>Practical AI consulting for SMEs across the UK.</p>
        <p>© 2026 LLM Consulting</p>
      </footer>
    </main>
  );
}
