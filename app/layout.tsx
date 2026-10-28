import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PremiumNavbar from "./components/PremiumNavbar";
import "./globals.css";
import "./subpage-refinements.css";
import "./v06-premium.css";
import "./v08-launch.css";

const site = "https://nexbridgeconsultancy.com";
const description = "Singapore-based management consulting, IT advisory and Cloud & DevOps services. Bridging Vision. Delivering Value.";
export const metadata: Metadata = {
  metadataBase: new URL(site),
  title: { default: "Nexbridge | Management & IT Consulting Singapore", template: "%s | Nexbridge" },
  description,
  applicationName: "Nexbridge",
  alternates: { canonical: "/" },
  openGraph: {
    type: "website", locale: "en_SG", url: site,
    siteName: "Nexbridge Management Consulting",
    title: "Nexbridge | Bridging Vision. Delivering Value.",
    description,
    images: [{ url: "/images/branding/nexbridge-c2.png", alt: "Nexbridge corporate logo" }]
  },
  twitter: { card: "summary", title: "Nexbridge Management Consulting", description, images: ["/images/branding/nexbridge-c2.png"] },
  robots: { index: true, follow: true }
};
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <html lang="en"><body>
    <a className="nb-v8-skip" href="#main-content">Skip to main content</a>
    <div className="top"><div className="wrap">SINGAPORE · MANAGEMENT & TECHNOLOGY CONSULTING</div></div>
    <PremiumNavbar />
    <main id="main-content">{children}</main>
    <footer className="footer"><div className="wrap">
      <div className="footerGrid">
        <div><Link href="/" className="n4-footer-brand" aria-label="Nexbridge homepage"><Image src="/images/branding/nexbridge-c2.png" alt="Nexbridge" width={190} height={100}/></Link><p>Bridging Vision. Delivering Value.<br/>Business strategy and technology consulting from Singapore.</p></div>
        <nav className="footerLinks" aria-label="Footer navigation">
          <Link href="/about">About</Link><Link href="/management-consulting">Management</Link><Link href="/it-consulting">IT Consulting</Link><Link href="/cloud-devops">Cloud & DevOps</Link><Link href="/industries">Industries</Link><Link href="/contact">Contact</Link><Link href="/privacy">Privacy</Link>
        </nav>
      </div>
      <div className="footnote">© {new Date().getFullYear()} Nexbridge Management Consulting Pte. Ltd. All rights reserved. · Singapore</div>
    </div></footer>
  </body></html>;
}
