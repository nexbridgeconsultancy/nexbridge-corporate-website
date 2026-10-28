import type { Metadata } from "next";
import type { ReactNode } from "react";
export const metadata: Metadata = {
 title: "Contact Nexbridge | Singapore Consulting Enquiries",
 description: "Contact Nexbridge Management Consulting Pte. Ltd. in Singapore about management consulting, IT advisory and Cloud & DevOps.",
 alternates: { canonical: "/contact" },
 openGraph: { title: "Contact Nexbridge | Singapore Consulting Enquiries", description: "Contact Nexbridge Management Consulting Pte. Ltd. in Singapore about management consulting, IT advisory and Cloud & DevOps.", url: "/contact" },
 twitter: { title: "Contact Nexbridge | Singapore Consulting Enquiries", description: "Contact Nexbridge Management Consulting Pte. Ltd. in Singapore about management consulting, IT advisory and Cloud & DevOps." }
};
export default function SectionLayout({children}:{children:ReactNode}){return <>{children}</>}
