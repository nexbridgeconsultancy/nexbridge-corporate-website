import type { Metadata } from "next";
import { ArrowUpRight,Mail,MapPin } from "lucide-react";
import CopyEmail from "../components/CopyEmail";
import "../final-premium.css";
import "../launch-polish.css";
export const metadata:Metadata={title:"Contact",description:"Contact Nexbridge Management Consulting Pte. Ltd. in Singapore."};
export default function Contact(){return <div className="nb-final nb-polish-contact">
<section className="nb-polish-contact-hero"><div className="wrap"><span className="nb-final-kicker">NEXBRIDGE / CONTACT</span><h1>Let's start a conversation.</h1><p>Tell us what you are planning, changing or trying to solve.</p></div></section>
<section className="nb-polish-contact-body"><div className="wrap nb-polish-contact-grid"><div><span className="nb-final-tag">DIRECT CONTACT</span><h2>Good work starts with a clear brief.</h2><p>Include your organisation, your objective, and any useful context. We welcome enquiries about management consulting, IT consulting and Cloud & DevOps.</p><div className="nb-polish-contact-steps"><span>01 / Introduce your organisation</span><span>02 / Share the challenge</span><span>03 / Suggest a next step</span></div></div><aside className="nb-polish-contact-card"><div className="nb-polish-contact-icon"><Mail size={24}/></div><h3>Business enquiries</h3><a className="nb-polish-email" href="mailto:nexbridgeconsultancy@gmail.com">nexbridgeconsultancy@gmail.com</a><div className="nb-polish-contact-actions"><a href="mailto:nexbridgeconsultancy@gmail.com?subject=Nexbridge%20Business%20Enquiry" className="nb-final-primary">Write an email <ArrowUpRight size={18}/></a><CopyEmail/></div><div className="nb-polish-location"><MapPin size={17}/> Singapore · Nexbridge Management Consulting Pte. Ltd.</div></aside></div></section>
</div>}
