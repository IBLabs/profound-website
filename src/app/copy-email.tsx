"use client";

import { useEffect, useRef, useState } from "react";

export function CopyEmail({ email, className }: { email: string; className: string }) {
  const [copied, setCopied] = useState(false);
  const timer = useRef<ReturnType<typeof setTimeout> | undefined>(undefined);
  useEffect(() => () => clearTimeout(timer.current), []);

  async function copy() {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      clearTimeout(timer.current);
      timer.current = setTimeout(() => setCopied(false), 1600);
    } catch { setCopied(false); }
  }

  return <button className={className} type="button" onClick={copy} aria-label={`Copy ${email}`}><span>{email}</span><b aria-live="polite">{copied ? "Copied" : "Copy"}</b></button>;
}
