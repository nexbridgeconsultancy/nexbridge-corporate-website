
import type { Metadata } from "next";
import Link from "next/link";
import {
  Building2,
  Target,
  Telescope,
  Layers3,
  Workflow,
  ShieldCheck,
  Globe2,
  ArrowUpRight,
  Check,
} from "lucide-react";
import "./about-v05.css";


export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about Nexbridge Management Consulting Pte. Ltd., a Singapore-based management and technology consultancy.",
};

const cards = [
  {
    label: "OUR IDENTITY",
    title: "Who We Are",
    Icon: Building2,
    description:
      "Nexbridge brings together management consulting and technology advisory perspectives to help organisations make informed decisions and turn strategic priorities into actionable plans. Our approach emphasises clarity, collaboration and solutions aligned with each client's business needs.",
  },
  {
    label: "OUR PURPOSE",
    title: "Our Mission",
    Icon: Target,
    description:
      "To bridge the gap between vision and execution through practical advice, responsible technology solutions and value-focused consulting.",
  },
  {
    label: "OUR AMBITION",
    title: "Our Vision",
    Icon: Telescope,
    description:
      "To build Nexbridge into a trusted consulting partner for organisations seeking sustainable growth, operational excellence and meaningful digital transformation.",
  },
  {
    label: "OUR PRINCIPLES",
    title: "Our Values",
    Icon: ShieldCheck,
    description:
      "Integrity, transparency, accountability, collaboration and continuous improvement guide the way we aim to work with our clients and partners.",
  },
];

const capabilities = [
  "Management consulting and business strategy",
  "Business process and operational improvement",
  "IT consulting and technology advisory",
  "Cloud architecture and infrastructure consulting",
  "DevOps, automation and delivery practices",
  "Digital transformation planning",
];

const approach = [
  "Understand business goals and challenges",
  "Identify priorities and practical solutions",
  "Develop clear recommendations and roadmaps",
  "Support execution and continuous improvement",
];

export default function AboutPage() {
  return (
    <div className="nb-about">
      <section className="nb-about-hero">
        <div className="nb-about-container">
          <div className="nb-about-eyebrow">
            ABOUT NEXBRIDGE · SINGAPORE
          </div>
          <h1>
            Connecting business ambition with{" "}
            <span>practical execution.</span>
          </h1>
          <p>
            Nexbridge Management Consulting Pte. Ltd. is a
            Singapore-based consultancy focused on helping
            organisations navigate business challenges,
            technology decisions and transformation opportunities.
          </p>
        </div>
      </section>

      <section className="nb-about-content">
        <div className="nb-about-container">
          <div className="nb-section-intro">
            <span className="nb-section-label">
              GET TO KNOW NEXBRIDGE
            </span>
            <h2>
              Built around clarity.
              <br />
              <span>Focused on value.</span>
            </h2>
            <p>
              Our consulting philosophy connects business priorities
              with practical technology thinking and collaborative
              execution.
            </p>
          </div>

          <div className="nb-premium-grid">
            {cards.map(({ label, title, Icon, description }) => (
              <article className="nb-premium-card" key={title}>
                <div className="nb-premium-icon">
                  <Icon size={27} strokeWidth={1.8} />
                </div>
                <span className="nb-card-label">{label}</span>
                <h3>{title}</h3>
                <p>{description}</p>
                <div className="nb-card-accent" />
              </article>
            ))}
          </div>

          <section className="nb-capabilities">
            <div className="nb-capabilities-heading">
              <div className="nb-premium-icon nb-dark-icon">
                <Layers3 size={28} strokeWidth={1.8} />
              </div>
              <span className="nb-section-label">
                WHAT WE DO
              </span>
              <h2>Our Core Capabilities</h2>
              <p>
                Consulting and advisory services across
                business and technology disciplines.
              </p>
            </div>

            <div className="nb-capabilities-list">
              {capabilities.map((item) => (
                <div className="nb-capability" key={item}>
                  <Check size={19} strokeWidth={2.4} />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </section>

          <div className="nb-bottom-grid">
            <section className="nb-info-panel">
              <div className="nb-premium-icon">
                <Workflow size={27} strokeWidth={1.8} />
              </div>
              <span className="nb-card-label">
                OUR METHODOLOGY
              </span>
              <h2>How We Work</h2>
              <p>
                We begin by understanding the client's objectives
                and operating environment. We then assess
                opportunities, recommend practical approaches
                and support clearly defined implementation priorities.
              </p>
              <ul>
                {approach.map((item) => (
                  <li key={item}>
                    <Check size={17} />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </section>

            <section className="nb-info-panel nb-global-panel">
              <div className="nb-premium-icon">
                <Globe2 size={27} strokeWidth={1.8} />
              </div>
              <span className="nb-card-label">
                OUR OUTLOOK
              </span>
              <h2>Singapore-Based. Globally Minded.</h2>
              <p>
                Headquartered in Singapore, Nexbridge aims
                to support organisations with business and
                technology consulting needs across markets,
                with an approach informed by international
                business practices.
              </p>
              <div className="nb-global-foot">
                SINGAPORE · GLOBAL PERSPECTIVE
              </div>
            </section>
          </div>
        </div>
      </section>

      <section className="nb-about-cta">
        <div className="nb-about-container">
          <h2>Bridging Vision. Delivering Value.</h2>
          <p>
            Let's discuss how Nexbridge can support your
            business and technology objectives.
          </p>
          <Link href="/contact">
            Start a Conversation
            <ArrowUpRight size={18} />
          </Link>
        </div>
      </section>
    </div>
  );
}
