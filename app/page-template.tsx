import Link from "next/link";
import { ArrowUpRight, CheckCircle2 } from "lucide-react";
type Section = {heading:string;body:string;bullets?:string[]};
export function InnerPage({eyebrow,title,lead,sections}:{eyebrow:string;title:string;lead:string;sections:Section[]}) {
 return <div className="nb-v6-inner">
  <section className="pageHead nb-v6-page-hero"><div className="wrap">
   <div className="kicker">{eyebrow} / NEXBRIDGE</div>
   <h1>{title}</h1><p className="lead">{lead}</p>
   <Link className="nb-v6-hero-link" href="/contact">Discuss your priorities <ArrowUpRight size={18}/></Link>
  </div></section>
  <section className="content nb-v6-content"><div className="wrap">
   <div className="nb-v6-section-intro"><div className="kicker">HOW WE CAN HELP</div><h2>Thoughtful advice.<br/><span>Practical next steps.</span></h2><p>Explore the areas where Nexbridge can support your planning and execution.</p></div>
   <div className="nb-v6-grid">{sections.map((s,i)=><article className="nb-v6-card" key={s.heading}>
    <div className="nb-v6-card-number">{String(i+1).padStart(2,"0")} / {String(sections.length).padStart(2,"0")}</div>
    <h3>{s.heading}</h3><p>{s.body}</p>
    {s.bullets && <ul>{s.bullets.map(b=><li key={b}><CheckCircle2 size={16}/>{b}</li>)}</ul>}
   </article>)}</div>
  </div></section>
  <section className="nb-v6-banner"><div className="wrap nb-v6-banner-inner"><div><div className="kicker">NEXT STEPS</div><h2>Let’s turn your priorities into progress.</h2><p>Start with a conversation about your goals, challenges and opportunities.</p></div><Link href="/contact">Contact Nexbridge <ArrowUpRight size={18}/></Link></div></section>
 </div>;
}
