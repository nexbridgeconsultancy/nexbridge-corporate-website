import type { Metadata } from "next";
import type { ReactNode } from "react";
export const metadata: Metadata = {
 title: "Privacy Notice",
 description: "Read how Nexbridge handles information you share when contacting us about consulting and business enquiries.",
 alternates: { canonical: "/privacy" },
 openGraph: { title: "Privacy Notice | Nexbridge Singapore", description: "Read how Nexbridge handles information you share when contacting us about consulting and business enquiries.", url: "/privacy" },
 twitter: { title: "Privacy Notice | Nexbridge Singapore", description: "Read how Nexbridge handles information you share when contacting us about consulting and business enquiries." }
};
export default function SectionLayout({children}:{children:ReactNode}){return <>{children}</>}
