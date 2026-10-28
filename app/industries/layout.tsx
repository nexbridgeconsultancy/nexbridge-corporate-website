import type { Metadata } from "next";
import type { ReactNode } from "react";
export const metadata: Metadata = {
 title: "Industries | Nexbridge Consulting Singapore",
 description: "Explore Nexbridge consulting focus across technology, professional services, logistics, healthcare, financial services and growing enterprises.",
 alternates: { canonical: "/industries" },
 openGraph: { title: "Industries | Nexbridge Consulting Singapore", description: "Explore Nexbridge consulting focus across technology, professional services, logistics, healthcare, financial services and growing enterprises.", url: "/industries" },
 twitter: { title: "Industries | Nexbridge Consulting Singapore", description: "Explore Nexbridge consulting focus across technology, professional services, logistics, healthcare, financial services and growing enterprises." }
};
export default function SectionLayout({children}:{children:ReactNode}){return <>{children}</>}
