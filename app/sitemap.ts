import type { MetadataRoute } from "next";
const base="https://nexbridgeconsultancy.com";
export default function sitemap(): MetadataRoute.Sitemap {
 return ["/","/about","/management-consulting","/it-consulting","/cloud-devops","/industries","/contact","/privacy"].map(path=>({url:base+path,changeFrequency:"monthly" as const,priority:path==="/"?1:0.6}));
}
