import type { Metadata } from "next";
import Link from "next/link";
import "../launch-polish.css";
export const metadata:Metadata={title:"Privacy Notice",description:"How Nexbridge handles information submitted through business enquiries."};
export default function Privacy(){return <div className="nb-v9-privacy nb-polish-privacy">
<section className="pageHead nb-v6-page-hero"><div className="wrap"><div className="kicker">PRIVACY / NEXBRIDGE</div><h1>Privacy notice</h1><p className="lead">Information about enquiries sent to Nexbridge.</p><p className="nb-polish-updated">Last updated: 28 October 2026</p></div></section>
<section className="content"><div className="wrap" style={{maxWidth:850}}>
<h2>Information you choose to share</h2><p>When you contact us by email, you may provide your name, organisation, email address and details about your enquiry. Please avoid sending sensitive personal information unless necessary and appropriate arrangements have been agreed.</p>
<h2>How we use enquiry information</h2><p>We use enquiry information to understand your request, respond and discuss relevant consulting services. Business correspondence may be retained for operational and record-keeping purposes.</p>
<h2>Service providers</h2><p>Our website hosting and email providers may process technical or correspondence information as needed to deliver their services. Some website photographs are hosted externally.</p>
<h2>Questions and requests</h2><p>For questions about information you have shared, or to request correction or deletion where applicable, email <a href="mailto:nexbridgeconsultancy@gmail.com">nexbridgeconsultancy@gmail.com</a>.</p>
<h2>Changes to this notice</h2><p>We may update this notice as our website, services or information-handling practices change.</p><p><Link href="/contact">Contact Nexbridge</Link></p>
</div></section></div>}
