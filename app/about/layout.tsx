import type { Metadata } from "next";
import type { ReactNode } from "react";
export const metadata: Metadata = {
 title: "About Nexbridge | Singapore Consulting Company",
 description: "Learn about Nexbridge Management Consulting Pte. Ltd., our mission, values and approach to business and technology advisory.",
 alternates: { canonical: "/about" },
 openGraph: { title: "About Nexbridge | Singapore Consulting Company", description: "Learn about Nexbridge Management Consulting Pte. Ltd., our mission, values and approach to business and technology advisory.", url: "/about" },
 twitter: { title: "About Nexbridge | Singapore Consulting Company", description: "Learn about Nexbridge Management Consulting Pte. Ltd., our mission, values and approach to business and technology advisory." }
};
export default function SectionLayout({children}:{children:ReactNode}){return <>{children}</>}
