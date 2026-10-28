"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import "./premium-navbar.css";
import "./navbar-v07.css";

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
  const [open, setOpen] = useState(false);
  return <header className="nb-nav-shell">
    <div className="wrap nb-nav-inner">
      <Link href="/" className="nb-nav-brand" aria-label="Nexbridge homepage" onClick={()=>setOpen(false)}>
        <Image src="/images/branding/nexbridge-c2.png" alt="Nexbridge" width={180} height={90} priority />
      </Link>
      <button className="nb-v7-toggle" type="button" aria-label={open?"Close navigation":"Open navigation"} aria-expanded={open} aria-controls="nb-main-nav" onClick={()=>setOpen(!open)}>
        {open ? <X size={25}/> : <Menu size={25}/>}
      </button>
      <nav id="nb-main-nav" className={`nb-nav-links${open?" nb-v7-open":""}`} aria-label="Main navigation">
        {items.map(item=><Link key={item.href} href={item.href}
          onClick={()=>setOpen(false)}
          className={`nb-nav-link${pathname===item.href?" nb-current":""}${item.href==="/contact"?" nb-contact-link":""}`}
          aria-current={pathname===item.href?"page":undefined}><span>{item.label}</span></Link>)}
      </nav>
    </div>
  </header>;
}
