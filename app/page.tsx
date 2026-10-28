import "./homepage-v04.css";
import "./launch-polish.css";
import Link from "next/link";
import { ArrowUpRight,ArrowRight,BriefcaseBusiness,CloudCog,Code2,Compass,Building2,HeartPulse,Truck,Factory,CheckCircle2 } from "lucide-react";
import HomeSlideshow from "./components/HomeSlideshow";
const services=[
{icon:Compass,title:"Management Consulting",description:"Business strategy, operating models and practical transformation planning.",href:"/management-consulting",number:"01"},
{icon:Code2,title:"IT Consulting & Solutions",description:"Technology strategy, architecture and delivery planning.",href:"/it-consulting",number:"02"},
{icon:CloudCog,title:"Cloud & DevOps",description:"Cloud foundations, automation, CI/CD and reliability.",href:"/cloud-devops",number:"03"}];
const industries=[
{icon:Code2,label:"Technology & SaaS"},
{icon:BriefcaseBusiness,label:"Professional Services"},
{icon:HeartPulse,label:"Healthcare"},
{icon:Building2,label:"Financial Services"},
{icon:Truck,label:"Logistics & Supply Chain"},
{icon:Factory,label:"Growing Enterprises"}];
export default function Home(){return <div className="n4 nb-polish">
<section className="n4-hero"><HomeSlideshow/><div className="wrap n4-hero-grid">
<div className="n4-hero-copy"><div className="n4-kicker n4-kicker-light">SINGAPORE-BASED · GLOBALLY MINDED</div><h1>Bridging Vision.<br/><span>Delivering Value.</span></h1>
<p className="n4-hero-lead">Business strategy meets practical technology execution.</p><p className="n4-hero-detail">Management consulting, technology advisory and cloud engineering—aligned to the decisions your organisation needs to make.</p>
<div className="n4-actions"><Link href="/contact" className="n4-primary">Start a Conversation <ArrowUpRight size={19}/></Link><Link href="#services" className="n4-secondary">Explore Our Services <ArrowRight size={18}/></Link></div>
<div className="n4-hero-bottom"><span>STRATEGY</span><i/><span>TECHNOLOGY</span><i/><span>EXECUTION</span></div></div>
<div className="n4-hero-visual nb-original-hero-visual" aria-hidden="true"><div className="n4-visual-halo"/><div className="n4-visual-grid"/></div>
</div></section>
<section className="n4-principles"><div className="wrap n4-principles-inner"><span>OUR APPROACH</span><strong>Understand the challenge.</strong><strong>Define the direction.</strong><strong>Make progress measurable.</strong></div></section>
<section className="n4-section" id="services"><div className="wrap"><div className="n4-heading-row"><div><div className="n4-kicker">01 / WHAT WE DO</div><h2>Expertise that moves<br/><em>business forward.</em></h2></div><p>Practical advisory across business operations, technology strategy and modern engineering.</p></div><div className="n4-service-grid">{services.map(s=><Link href={s.href} key={s.number} className="n4-service-card"><div className="n4-card-top"><s.icon size={32} strokeWidth={1.5}/><span>{s.number} / 03</span></div><h3>{s.title}</h3><p>{s.description}</p><div className="n4-card-link">Explore Service <ArrowUpRight size={19}/></div></Link>)}</div></div></section>
<section className="n4-about"><div className="wrap n4-about-grid"><div className="n4-about-art"><div className="n4-about-text">From priorities<br/>to <em>progress.</em></div></div><div className="n4-about-copy"><div className="n4-kicker">02 / ABOUT NEXBRIDGE</div><h2>Business first.<br/><em>Technology informed.</em></h2><p>Nexbridge Management Consulting Pte. Ltd. is a Singapore-based management and technology consultancy.</p><p>We focus on understanding business needs, evaluating options and building realistic plans for implementation.</p><div className="n4-checks"><span><CheckCircle2 size={18}/> Business-led assessment</span><span><CheckCircle2 size={18}/> Practical recommendations</span><span><CheckCircle2 size={18}/> Clear implementation priorities</span></div><Link href="/about" className="n4-outline">Our Approach <ArrowUpRight size={18}/></Link></div></div></section>
<section className="n4-section n4-industry-section"><div className="wrap"><div className="n4-heading-row"><div><div className="n4-kicker">03 / SECTOR PERSPECTIVES</div><h2>Context matters.<br/><em>In every industry.</em></h2></div><p>Explore how business and technology challenges vary across sectors.</p></div><div className="n4-industry-grid">{industries.map(x=><Link href="/industries" className="n4-industry" key={x.label}><x.icon size={25} strokeWidth={1.6}/><strong>{x.label}</strong><ArrowUpRight size={16}/></Link>)}</div><p className="n4-industry-note">Areas of advisory focus; not a claim of existing client engagements.</p></div></section>
<section className="n4-cta"><div className="wrap n4-cta-inner"><div><div className="n4-kicker n4-kicker-light">04 / LET'S CONNECT</div><h2>Ready to move<br/><em>forward together?</em></h2><p>Tell us about your priorities and explore the next step.</p></div><Link href="/contact" className="n4-primary n4-primary-light">Get in Touch <ArrowUpRight size={20}/></Link></div></section>
</div>}
