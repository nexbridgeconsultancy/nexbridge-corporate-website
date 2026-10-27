import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import './globals.css';

export const metadata: Metadata = {
  title: { default: 'Nexbridge | Management & IT Consulting Singapore', template: '%s | Nexbridge' },
  description: 'Nexbridge Management Consulting Pte. Ltd. — Singapore-based management, IT and cloud consulting. Bridging Vision. Delivering Value.',
  metadataBase: new URL('https://nexbridgeconsultancy.com'),
};

const links = [['About', '/about'], ['IT Consulting', '/it-consulting'], ['Cloud & DevOps', '/cloud-devops'], ['Management', '/management-consulting'], ['Industries', '/industries'], ['Contact', '/contact']];

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <html lang="en"><body>
    <div className="top"><div className="wrap">SINGAPORE · MANAGEMENT & TECHNOLOGY CONSULTING</div></div>
    <header className="wrap nav n4-site-header">
      <Link href="/" className="n4-brand" aria-label="Nexbridge home"><Image src="/images/branding/nexbridge-c2.png" alt="Nexbridge" width={180} height={90} priority/></Link>
      <nav className="links" aria-label="Main navigation">{links.map(([label, url]) => <Link href={url} key={url}>{label}</Link>)}</nav>
    </header>
    <main>{children}</main>
    <footer className="footer"><div className="wrap"><div className="footerGrid"><div><Link href="/" className="n4-footer-brand"><Image src="/images/branding/nexbridge-c2.png" alt="Nexbridge" width={190} height={100}/></Link><p>Bridging Vision. Delivering Value.<br/>Business strategy and technology consulting from Singapore.</p></div><div className="footerLinks"><Link href="/about">About</Link><Link href="/it-consulting">Services</Link><Link href="/industries">Industries</Link><Link href="/contact">Contact</Link><Link href="/privacy">Privacy</Link></div></div><div className="footnote">© {new Date().getFullYear()} Nexbridge Management Consulting Pte. Ltd. All rights reserved. · Singapore</div></div></footer>
  </body></html>;
}
