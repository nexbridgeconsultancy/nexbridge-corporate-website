"use client";
import { useState } from "react";
import { Copy,Check } from "lucide-react";
export default function CopyEmail(){const [copied,setCopied]=useState(false);async function copy(){try{await navigator.clipboard.writeText("nexbridgeconsultancy@gmail.com");setCopied(true)}catch{setCopied(false)}}return <button type="button" className="nb-copy-email" onClick={copy} aria-label="Copy Nexbridge email address">{copied?<Check size={17}/>:<Copy size={17}/>} {copied?"Copied":"Copy email"}</button>}
