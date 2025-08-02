"use client"

import { useState, useEffect } from "react"
import { Mic, MicOff, MessageCircle, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export default function VoiceAssistant() {
  const [isOpen, setIsOpen] = useState(false)
  const [isListening, setIsListening] = useState(false)

  useEffect(() => {
    // Load ElevenLabs ConvAI widget script
    const script = document.createElement('script')
    script.src = "https://unpkg.com/@elevenlabs/convai-widget-embed"
    script.async = true
    script.type = "text/javascript"
    document.head.appendChild(script)

    return () => {
      document.head.removeChild(script)
    }
  }, [])

  return (
    <>
      {/* Floating Action Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <Button
          onClick={() => setIsOpen(!isOpen)}
          size="lg"
          className="h-14 w-14 rounded-full bg-violet-600 hover:bg-violet-700 shadow-lg"
        >
          {isOpen ? <X className="h-6 w-6" /> : <MessageCircle className="h-6 w-6" />}
        </Button>
      </div>

      {/* Voice Assistant Widget */}
      {isOpen && (
        <div className="fixed bottom-24 right-6 z-50">
          <Card className="w-96 h-[500px] shadow-2xl border-0">
            <CardContent className="p-0 h-full">
              <div className="h-full">
                <elevenlabs-convai 
                  agent-id="agent_9101k1kddf7zf9mvr2wtrej7ywmk"
                  style={{
                    width: '100%',
                    height: '100%',
                    border: 'none',
                    borderRadius: '8px'
                  }}
                />
              </div>
            </CardContent>
          </Card>
        </div>
      )}
    </>
  )
} 