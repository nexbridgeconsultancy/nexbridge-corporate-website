import Link from "next/link";
import { ArrowUpRight, Mail, MapPin } from "lucide-react";
import "../final-premium.css";
export default function Contact(){
return <div className="nb-final nb-final-contact">
<section className="nb-final-hero"><div className="wrap nb-final-hero-grid"><div className="nb-final-copy"><span className="nb-final-kicker">NEXBRIDGE / CONTACT</span><h1>Let's discuss what's next<span>.</span></h1><p>Business priorities, technology challenges or a new direction—we'd welcome a brief introduction.</p><a className="nb-final-primary" href="mailto:nexbridgeconsultancy@gmail.com?subject=Nexbridge%20Business%20Enquiry">Email Nexbridge <ArrowUpRight size={19}/></a><div className="nb-final-hero-meta">SINGAPORE-BASED <span/> BUSINESS ENQUIRIES</div></div><div className="nb-final-photo" role="img" aria-label="Corporate office interior"/></div></section>
<section className="nb-final-outcomes"><div className="wrap nb-final-outcomes-grid"><div><span className="nb-final-tag">DIRECT CONTACT</span><h2>Start with the essentials.</h2><p>Introduce your organisation, what you're looking to achieve and the best way to reach you.</p></div><div className="nb-final-output-list"><div><Mail size={21}/><a href="mailto:nexbridgeconsultancy@gmail.com" style={{overflowWrap:"anywhere",color:"#075e9a",fontWeight:700}}>nexbridgeconsultancy@gmail.com</a></div><div><MapPin size={21}/><strong>Singapore</strong></div><div><span>01</span><strong>Nexbridge Management Consulting Pte. Ltd.</strong></div></div></div></section>
</div>}
