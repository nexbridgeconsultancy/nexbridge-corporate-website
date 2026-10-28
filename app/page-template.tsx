import Link from "next/link";
import { ArrowUpRight, Check } from "lucide-react";
import "./final-premium.css";
import "./launch-polish.css";

type Section = {heading:string;body:string;bullets?:string[]};
type PageType = "it-consulting"|"cloud-devops"|"management-consulting"|"industries";
const content:Record<PageType,{label:string;intro:string;deliverables:string[];process:[string,string,string]}> = {
 "it-consulting":{label:"TECHNOLOGY ADVISORY",intro:"Connect business priorities with architecture, systems and a realistic delivery plan.",deliverables:["Technology assessment","Target-state architecture outline","Prioritised implementation roadmap"],process:["Assess the landscape","Design the direction","Plan delivery"]},
 "cloud-devops":{label:"CLOUD ENGINEERING",intro:"Design for resilience, repeatability and delivery confidence.",deliverables:["Cloud readiness assessment","Automation and CI/CD recommendations","Reliability and operations checklist"],process:["Review foundations","Define engineering standards","Plan improvements"]},
 "management-consulting":{label:"BUSINESS ADVISORY",intro:"Turn strategic ambition into an operating model and an executable roadmap.",deliverables:["Business priorities assessment","Operating-model recommendations","Transformation roadmap"],process:["Understand the business","Evaluate opportunities","Structure the roadmap"]},
 "industries":{label:"SECTOR PERSPECTIVES",intro:"Different industries need different answers. Our work begins with the specific operating environment.",deliverables:["Sector-specific challenge mapping","Practical options assessment","Prioritised next-step recommendations"],process:["Understand sector context","Identify constraints","Recommend priorities"]}
};
export function InnerPage({eyebrow,title,lead,sections,pageType="it-consulting"}:{eyebrow:string;title:string;lead:string;sections:Section[];pageType?:PageType}){
 const detail=content[pageType];
 return <div className={`nb-final nb-final-${pageType}`}>
  <section className="nb-final-hero"><div className="wrap nb-final-hero-grid">
   <div className="nb-final-copy"><span className="nb-final-kicker">NEXBRIDGE / {eyebrow.toUpperCase()}</span>
    <h1>{title.replace(/[.]+$/,"")}<span>.</span></h1><p>{lead.replace(/\\u2014/g,"—")}</p>
    <Link href="/contact" className="nb-final-primary">Discuss your priorities <ArrowUpRight size={19}/></Link>
    <div className="nb-final-hero-meta">SINGAPORE-BASED <span/> STRATEGY & TECHNOLOGY</div>
   </div><div className="nb-final-photo" role="img" aria-label={`${eyebrow} corporate photography`}/></div></section>
  <section className="nb-final-lead"><div className="wrap nb-final-lead-grid"><div><span className="nb-final-tag">01 / {detail.label}</span><h2>{detail.intro}</h2></div><p>We begin with the operating reality: objectives, constraints, existing systems and the decisions that matter most.</p></div></section>
  <section className="nb-final-capabilities"><div className="wrap"><div className="nb-final-heading"><span className="nb-final-tag">02 / AREAS OF FOCUS</span><h2>Where we can help</h2></div><div className="nb-final-rows">{sections.map((s,i)=><article key={s.heading} className="nb-final-row"><span className="nb-final-index">{String(i+1).padStart(2,"0")}</span><div><h3>{s.heading}</h3><p>{s.body}</p>{s.bullets&&<ul>{s.bullets.map(b=><li key={b}><Check size={15}/>{b}</li>)}</ul>}</div></article>)}</div></div></section>
  <section className="nb-final-outcomes"><div className="wrap nb-final-outcomes-grid"><div><span className="nb-final-tag">03 / ILLUSTRATIVE OUTPUTS</span><h2>Practical outputs.</h2><p>Depending on the engagement, the work may include practical outputs such as:</p></div><div className="nb-final-output-list">{detail.deliverables.map((x,i)=><div key={x}><span>{String(i+1).padStart(2,"0")}</span><strong>{x}</strong></div>)}</div></div></section>
  <section className="nb-final-process"><div className="wrap"><span className="nb-final-tag">04 / OUR APPROACH</span><h2>From understanding to action.</h2><div className="nb-final-process-grid">{detail.process.map((x,i)=><div key={x}><span>0{i+1}</span><h3>{x}</h3><p>{["Start with your priorities and current reality.","Evaluate practical options and trade-offs.","Agree on recommendations and next steps."][i]}</p></div>)}</div></div></section>
  <section className="nb-final-cta"><div className="wrap nb-final-cta-grid"><div><span className="nb-final-tag">NEXT STEP</span><h2>Let's make the next move count.</h2><p>Tell us what you are working towards.</p></div><Link href="/contact" className="nb-final-primary">Contact Nexbridge <ArrowUpRight size={19}/></Link></div></section>
 </div>
}
