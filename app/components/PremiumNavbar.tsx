"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import "./premium-navbar.css";

const items = [
  { label: "About", href: "/about" },
  { label: "IT Consulting", href: "/it-consulting" },
  { label: "Cloud & DevOps", href: "/cloud-devops" },
  { label: "Management", href: "/management-consulting" },
  { label: "Industries", href: "/industries" },
  { label: "Contact", href: "/contact" },
];

export default function PremiumNavbar() {
  const pathname = usePathname();
  return (
    <header className="nb-nav-shell">
      <div className="wrap nb-nav-inner">
        <Link href="/" className="nb-nav-brand" aria-label="Nexbridge homepage">
          <Image src="/images/branding/nexbridge-c2.png" alt="Nexbridge" width={180} height={90} priority />
        </Link>
        <nav className="nb-nav-links" aria-label="Main navigation">
          {items.map((item) => (
            <Link key={item.href} href={item.href} className={`nb-nav-link${pathname === item.href ? " nb-current" : ""}${item.href === "/contact" ? " nb-contact-link" : ""}`} aria-current={pathname === item.href ? "page" : undefined}>
              <span>{item.label}</span>
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
