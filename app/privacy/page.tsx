import type { Metadata } from "next";
import Link from "next/link";
export const metadata: Metadata = { title: "Privacy Notice", description: "Information about how Nexbridge handles business enquiry information." };
export default function Privacy() {return <div className="nb-v9-privacy">
<section className="pageHead nb-v6-page-hero"><div className="wrap"><div className="kicker">PRIVACY / NEXBRIDGE</div><h1>Privacy notice</h1><p className="lead">Information about business enquiries sent to Nexbridge.</p></div></section>
<section className="content"><div className="wrap" style={{maxWidth:850}}>
<h2>Information you choose to share</h2><p>When you contact us by email, you may provide your name, organisation, email address and details about your enquiry. Please avoid sending sensitive personal information unless it is necessary and you have agreed with us how it will be handled.</p>
<h2>How we use enquiry information</h2><p>We use information provided in business enquiries to understand your request, respond to you, and discuss relevant consulting services. Business correspondence may be retained for operational and record-keeping purposes.</p>
<h2>Service providers</h2><p>Our website hosting and email providers may process technical or correspondence information as needed to deliver their services. Website pages also use externally hosted photographs.</p>
<h2>Questions and requests</h2><p>For questions about personal information you shared in an enquiry, or to request correction or deletion where applicable, email <a href="mailto:nexbridgeconsultancy@gmail.com">nexbridgeconsultancy@gmail.com</a>.</p>
<h2>Changes to this notice</h2><p>We may update this notice when our website, services or information-handling practices change.</p>
<p><Link href="/contact">Contact Nexbridge</Link></p>
</div></section></div>}
