import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import PremiumNavbar from './components/PremiumNavbar';
import './globals.css';
import "./subpage-refinements.css";
import "./v06-premium.css";

export const metadata: Metadata = {
  title: { default: 'Nexbridge | Management & IT Consulting Singapore', template: '%s | Nexbridge' },
  description: 'Nexbridge Management Consulting Pte. Ltd. — Singapore-based management, IT and cloud consulting. Bridging Vision. Delivering Value.',
  metadataBase: new URL('https://nexbridgeconsultancy.com'),
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <html lang="en"><body>
    <div className="top"><div className="wrap">SINGAPORE · MANAGEMENT & TECHNOLOGY CONSULTING</div></div>
    <PremiumNavbar />
    <main>{children}</main>
    <footer className="footer"><div className="wrap"><div className="footerGrid"><div><Link href="/" className="n4-footer-brand"><Image src="/images/branding/nexbridge-c2.png" alt="Nexbridge" width={190} height={100}/></Link><p>Bridging Vision. Delivering Value.<br/>Business strategy and technology consulting from Singapore.</p></div><div className="footerLinks"><Link href="/about">About</Link><Link href="/it-consulting">Services</Link><Link href="/industries">Industries</Link><Link href="/contact">Contact</Link><Link href="/privacy">Privacy</Link></div></div><div className="footnote">© {new Date().getFullYear()} Nexbridge Management Consulting Pte. Ltd. All rights reserved. · Singapore</div></div></footer>
  </body></html>;
}
