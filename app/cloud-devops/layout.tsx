import type { Metadata } from "next";
import type { ReactNode } from "react";
export const metadata: Metadata = {
 title: "Cloud & DevOps Consulting Singapore",
 description: "Cloud architecture, AWS advisory, infrastructure automation, CI/CD and DevOps consulting services from Nexbridge.",
 alternates: { canonical: "/cloud-devops" },
 openGraph: { title: "Cloud & DevOps Consulting Singapore", description: "Cloud architecture, AWS advisory, infrastructure automation, CI/CD and DevOps consulting services from Nexbridge.", url: "/cloud-devops" },
 twitter: { title: "Cloud & DevOps Consulting Singapore", description: "Cloud architecture, AWS advisory, infrastructure automation, CI/CD and DevOps consulting services from Nexbridge." }
};
export default function SectionLayout({children}:{children:ReactNode}){return <>{children}</>}
