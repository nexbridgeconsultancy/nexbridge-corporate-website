import type { Metadata } from "next";
import type { ReactNode } from "react";
export const metadata: Metadata = {
 title: "Management Consulting & Business Advisory Singapore",
 description: "Business strategy, operating model reviews, process improvement and transformation advisory from Nexbridge Singapore.",
 alternates: { canonical: "/management-consulting" },
 openGraph: { title: "Management Consulting & Business Advisory Singapore", description: "Business strategy, operating model reviews, process improvement and transformation advisory from Nexbridge Singapore.", url: "/management-consulting" },
 twitter: { title: "Management Consulting & Business Advisory Singapore", description: "Business strategy, operating model reviews, process improvement and transformation advisory from Nexbridge Singapore." }
};
export default function SectionLayout({children}:{children:ReactNode}){return <>{children}</>}
