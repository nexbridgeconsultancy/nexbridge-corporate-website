import type { Metadata } from "next";
import Link from "next/link";
export const metadata: Metadata = { title: "Privacy", description: "Privacy information for Nexbridge Management Consulting Pte. Ltd." };
export default function Privacy(){return <><section className="pageHead"><div className="wrap"><div className="kicker">PRIVACY</div><h1>Privacy information</h1><p className="lead">How to contact us about information shared in business enquiries.</p></div></section><section className="content"><div className="wrap" style={{maxWidth:850}}>
<h2>Business enquiries</h2><p>When you email Nexbridge, you choose what information to share. We may use your message and contact details to respond to your enquiry and communicate about the services you request.</p>
<h2>Website enquiries</h2><p>This website currently does not provide a contact submission form. Enquiries are made through your own email application.</p>
<h2>Third-party services</h2><p>Website hosting and externally hosted visual assets may process technical information such as IP addresses when you access the site. Please review the final hosting and asset configuration before publication.</p>
<h2>Your questions</h2><p>For questions about personal information you have shared with us, contact <a className="contactLink" href="mailto:nexbridgeconsultancy@gmail.com">nexbridgeconsultancy@gmail.com</a>.</p>
<p>This page is a preliminary privacy notice and should be reviewed against actual operational practices and Singapore PDPA obligations before launch.</p>
<p><Link className="contactLink" href="/contact">Contact Nexbridge</Link></p>
</div></section></>}
