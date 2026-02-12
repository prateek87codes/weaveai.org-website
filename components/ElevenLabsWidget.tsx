"use client";

import { useEffect, useRef } from "react";
import Script from "next/script";

export default function ElevenLabsWidget() {
  const widgetRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Create the custom element after script loads
    const timer = setTimeout(() => {
      if (widgetRef.current && !widgetRef.current.querySelector('elevenlabs-convai')) {
        const widget = document.createElement('elevenlabs-convai');
        widget.setAttribute('agent-id', 'agent_8001kh8hmpegfgbr4w1qevq32syq');
        widgetRef.current.appendChild(widget);
      }
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <Script
        src="https://unpkg.com/@elevenlabs/convai-widget-embed"
        strategy="lazyOnload"
        type="text/javascript"
      />
      <div ref={widgetRef} />
    </>
  );
}
