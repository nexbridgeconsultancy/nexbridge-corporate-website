import Link from "next/link";
import { ArrowUpRight, ArrowRight, Check, Compass, Layers, MoveUpRight } from "lucide-react";
type Section={heading:string;body:string;bullets?:string[]};
export function InnerPage({eyebrow,title,lead,sections}:{eyebrow:string;title:string;lead:string;sections:Section[]}) {
 return <div className="nb-v10-inner">
  <section className="nb-v10-hero"><div className="wrap nb-v10-hero-grid"><div className="nb-v10-hero-copy">
   <div className="nb-v10-eyebrow"><span className="nb-v10-dot"/> NEXBRIDGE / {eyebrow.toUpperCase()}</div>
   <h1>{title}<span className="nb-v10-period">.</span></h1><p>{lead}</p>
   <Link href="/contact" className="nb-v10-button">Discuss your project <ArrowUpRight size={19}/></Link>
   <div className="nb-v10-hero-foot">SINGAPORE-BASED <span/> STRATEGY × TECHNOLOGY</div>
  </div><div className="nb-v10-hero-art" aria-hidden="true"><div className="nb-v10-art-lines"/><div className="nb-v10-art-orbit"/><div className="nb-v10-art-word">N<span>/</span></div><div className="nb-v10-art-caption">BRIDGING VISION<br/>DELIVERING VALUE</div></div></div></section>
  <section className="nb-v10-intro"><div className="wrap nb-v10-intro-grid"><div><div className="nb-v10-section-tag">01 / OUR EXPERTISE</div><h2>Clarity for the decisions that matter.</h2></div><p>Every organisation faces a different set of priorities. We connect strategic thinking with practical recommendations, helping teams evaluate options and move forward with purpose.</p></div></section>
  <section className="nb-v10-work"><div className="wrap"><div className="nb-v10-section-top"><span className="nb-v10-section-tag">02 / CAPABILITIES</span><span className="nb-v10-small-note">FOCUSED ADVISORY AREAS</span></div>
   <div className="nb-v10-work-list">{sections.map((s,i)=><article className="nb-v10-work-row" key={s.heading}><div className="nb-v10-work-index">{String(i+1).padStart(2,"0")}</div><div className="nb-v10-work-main"><h3>{s.heading}</h3><p>{s.body}</p>{s.bullets&&<ul>{s.bullets.map(b=><li key={b}><Check size={15}/>{b}</li>)}</ul>}</div><MoveUpRight size={23} className="nb-v10-work-arrow" aria-hidden="true"/></article>)}</div>
  </div></section>
  <section className="nb-v10-process"><div className="wrap nb-v10-process-grid"><div><span className="nb-v10-section-tag">03 / HOW WE APPROACH IT</span><h2>From complexity to a clear direction.</h2><p>We begin with your business context—not a pre-packaged answer. Our work is shaped around the challenge, available information and agreed scope.</p></div><div className="nb-v10-steps">{[{n:"01",h:"Discover",p:"Understand objectives, constraints and decision-makers."},{n:"02",h:"Define",p:"Assess options and establish a practical direction."},{n:"03",h:"Deliver",p:"Set out recommendations, priorities and next steps."}].map(s=><div key={s.n}><span>{s.n}</span><div><h3>{s.h}</h3><p>{s.p}</p></div><ArrowRight size={17}/></div>)}</div></div></section>
  <section className="nb-v10-final"><div className="wrap nb-v10-final-grid"><div><span className="nb-v10-section-tag">LET'S BUILD WHAT'S NEXT</span><h2>Bring us your next challenge.</h2><p>Start with a focused conversation about your objectives and opportunities.</p></div><Link href="/contact" className="nb-v10-button nb-v10-button-light">Start a conversation <ArrowUpRight size={19}/></Link></div></section>
 </div>
}
