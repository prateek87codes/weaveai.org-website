"use client";

import { useEffect } from "react";
import Script from "next/script";

export default function ElevenLabsWidget() {
  useEffect(() => {
    // Small delay to ensure widget loads properly
    const timer = setTimeout(() => {
      // The widget should auto-open based on ElevenLabs config
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
      <elevenlabs-convai agent-id="agent_8001kh8hmpegfgbr4w1qevq32syq"></elevenlabs-convai>
    </>
  );
}
