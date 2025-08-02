"use client"

import { useState, useEffect } from "react"
import { Mic, MicOff, MessageCircle, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

// Type declaration for custom element
declare global {
  namespace JSX {
    interface IntrinsicElements {
      'elevenlabs-convai': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> & {
        'agent-id': string;
        style?: React.CSSProperties;
      }
    }
  }
}

export default function VoiceAssistant() {
  const [isListening, setIsListening] = useState(false)

  useEffect(() => {
    // Load ElevenLabs ConvAI widget script
    const script = document.createElement('script')
    script.src = "https://unpkg.com/@elevenlabs/convai-widget-embed"
    script.async = true
    script.type = "text/javascript"
    document.head.appendChild(script)

    return () => {
      const existingScript = document.querySelector('script[src*="convai-widget-embed"]')
      if (existingScript) {
        document.head.removeChild(existingScript)
      }
    }
  }, [])

  return (
    <>
      {/* AI Voice Widget positioned to match the image exactly */}
      <div style={{
        position: 'fixed',
        bottom: '120px',
        right: '40px',
        zIndex: 9999,
        width: '260px',
        height: '380px'
      }}>
        <elevenlabs-convai 
          agent-id="agent_9101k1kddf7zf9mvr2wtrej7ywmk"
          style={{
            width: '100%',
            height: '100%',
            border: 'none',
            borderRadius: '12px',
            background: 'transparent',
            boxShadow: '0 6px 24px rgba(0, 0, 0, 0.12)',
            display: 'block'
          }}
        />
      </div>
    </>
  )
} 