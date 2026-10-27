import './homepage-v04.css';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowUpRight, ArrowRight, BriefcaseBusiness, CloudCog, Code2, Compass, Globe2, Building2, HeartPulse, Truck, Factory, CheckCircle2 } from 'lucide-react';
import HomeSlideshow from "./components/HomeSlideshow";

const services = [
  { icon: Compass, title: 'Management Consulting', description: 'Business strategy, operating model reviews and practical transformation roadmaps.', href: '/management-consulting', number: '01' },
  { icon: Code2, title: 'IT Consulting & Solutions', description: 'Technology advisory, application planning and scalable digital solutions.', href: '/it-consulting', number: '02' },
  { icon: CloudCog, title: 'Cloud & DevOps', description: 'Cloud architecture, automation, infrastructure and modern delivery practices.', href: '/cloud-devops', number: '03' },
];
const industries = [
  { icon: Code2, label: 'Technology & SaaS' },
  { icon: BriefcaseBusiness, label: 'Professional Services' },
  { icon: HeartPulse, label: 'Healthcare' },
  { icon: Building2, label: 'Financial Services' },
  { icon: Truck, label: 'Logistics & Supply Chain' },
  { icon: Factory, label: 'Growing Enterprises' },
];

export default function Home() {
  return <div className="n4">
    <section className="n4-hero">
      <HomeSlideshow />
      <div className="wrap n4-hero-grid">
        <div className="n4-hero-copy">
          <div className="n4-kicker n4-kicker-light"><span className="n4-spark"/> SINGAPORE-BASED · GLOBALLY MINDED</div>
          <h1>Bridging Vision.<br/><span>Delivering Value.</span></h1>
          <p className="n4-hero-lead">Your partner in business strategy, technology consulting and meaningful transformation.</p>
          <p className="n4-hero-detail">Nexbridge connects strategic thinking with practical execution to help ambitious organisations navigate change and create lasting value.</p>
          <div className="n4-actions"><Link href="/contact" className="n4-primary">Start a Conversation <ArrowUpRight size={19}/></Link><Link href="#services" className="n4-secondary">Explore Our Services <ArrowRight size={18}/></Link></div>
          <div className="n4-hero-bottom"><span>STRATEGY</span><i/> <span>TECHNOLOGY</span><i/> <span>EXECUTION</span></div>
        </div>
        <div className="n4-hero-visual" aria-label="Nexbridge brand visual">
          <div className="n4-visual-halo"/>
          <div className="n4-visual-grid"/>
          <div className="n4-logo-panel"><Image src="/images/branding/nexbridge-c2.png" alt="Nexbridge approved C2 corporate logo" width={580} height={580} priority className="n4-hero-logo"/></div>
          <span className="n4-visual-caption">CONNECTING IDEAS · CREATING OPPORTUNITY</span>
        </div>
      </div>
    </section>

    <section className="n4-principles"><div className="wrap n4-principles-inner"><span>THE NEXBRIDGE APPROACH</span><strong>Clarity in strategy.</strong><strong>Confidence in technology.</strong><strong>Focus on outcomes.</strong></div></section>

    <section className="n4-section" id="services"><div className="wrap"><div className="n4-heading-row"><div><div className="n4-kicker">01 / WHAT WE DO</div><h2>Expertise that moves<br/><em>business forward.</em></h2></div><p>Integrated advisory capabilities designed to turn complex challenges into clear, actionable opportunities.</p></div><div className="n4-service-grid">{services.map(s => <Link href={s.href} key={s.number} className="n4-service-card"><div className="n4-card-top"><s.icon size={32} strokeWidth={1.5}/><span>{s.number} / 03</span></div><h3>{s.title}</h3><p>{s.description}</p><div className="n4-card-link">Explore Service <ArrowUpRight size={19}/></div></Link>)}</div></div></section>

    <section className="n4-about"><div className="wrap n4-about-grid"><div className="n4-about-art"><div className="n4-about-ring"/><div className="n4-about-text">Where ideas<br/>meet <em>impact.</em></div><div className="n4-about-mark">N / BRIDGE</div></div><div className="n4-about-copy"><div className="n4-kicker">02 / ABOUT NEXBRIDGE</div><h2>Built to connect<br/><em>what matters.</em></h2><p>Nexbridge Management Consulting Pte. Ltd. is a Singapore-based consultancy bringing together business insight and technology expertise.</p><p>Our approach starts with understanding your objectives, then developing practical recommendations that align people, processes and platforms.</p><div className="n4-checks"><span><CheckCircle2 size={18}/> Business-first thinking</span><span><CheckCircle2 size={18}/> Technology-informed solutions</span><span><CheckCircle2 size={18}/> Practical execution pathways</span></div><Link href="/about" className="n4-outline">Discover Nexbridge <ArrowUpRight size={18}/></Link></div></div></section>

    <section className="n4-section n4-industry-section"><div className="wrap"><div className="n4-heading-row"><div><div className="n4-kicker">03 / SECTORS WE FOCUS ON</div><h2>Understanding different<br/><em>business landscapes.</em></h2></div><p>Our consulting approach is applicable across organisations balancing growth, operations and technology decisions.</p></div><div className="n4-industry-grid">{industries.map(x => <div className="n4-industry" key={x.label}><x.icon size={25} strokeWidth={1.6}/><strong>{x.label}</strong><ArrowUpRight size={16}/></div>)}</div><p className="n4-industry-note">These are areas of focus and do not imply existing client engagements.</p></div></section>

    <section className="n4-cta"><div className="wrap n4-cta-inner"><div><div className="n4-kicker n4-kicker-light">04 / LET'S CONNECT</div><h2>Ready to move<br/><em>forward together?</em></h2><p>Tell us about your business priorities. Let's explore how Nexbridge can help.</p></div><Link href="/contact" className="n4-primary n4-primary-light">Get in Touch <ArrowUpRight size={20}/></Link></div></section>
  </div>;
}
