import type { Metadata } from "next";
import type { ReactNode } from "react";
export const metadata: Metadata = {
 title: "IT Consulting & Technology Advisory Singapore",
 description: "IT strategy, architecture, application modernization and delivery advisory from Nexbridge Management Consulting in Singapore.",
 alternates: { canonical: "/it-consulting" },
 openGraph: { title: "IT Consulting & Technology Advisory Singapore", description: "IT strategy, architecture, application modernization and delivery advisory from Nexbridge Management Consulting in Singapore.", url: "/it-consulting" },
 twitter: { title: "IT Consulting & Technology Advisory Singapore", description: "IT strategy, architecture, application modernization and delivery advisory from Nexbridge Management Consulting in Singapore." }
};
export default function SectionLayout({children}:{children:ReactNode}){return <>{children}</>}
