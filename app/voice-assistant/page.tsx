"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { MessageCircle, Mic, MicOff, Settings, HelpCircle } from "lucide-react"

export default function VoiceAssistantPage() {
  const [isWidgetLoaded, setIsWidgetLoaded] = useState(false)

  useEffect(() => {
    // Load ElevenLabs ConvAI widget script
    const script = document.createElement('script')
    script.src = "https://unpkg.com/@elevenlabs/convai-widget-embed"
    script.async = true
    script.type = "text/javascript"
    script.onload = () => setIsWidgetLoaded(true)
    document.head.appendChild(script)

    return () => {
      const existingScript = document.querySelector('script[src*="convai-widget-embed"]')
      if (existingScript) {
        document.head.removeChild(existingScript)
      }
    }
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-br from-violet-50 to-purple-100 dark:from-violet-950 dark:to-purple-950">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-8 text-center">
          <h1 className="mb-4 text-4xl font-bold text-violet-900 dark:text-violet-100">
            AI Voice Assistant
          </h1>
          <p className="text-lg text-violet-700 dark:text-violet-300">
            Sizning shaxsiy AI yordamchisi bilan suhbatlashing va mahsulotlar haqida ma'lumot oling
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-3">
          {/* Main Voice Assistant */}
          <div className="lg:col-span-2">
            <Card className="h-[600px] shadow-xl">
              <CardHeader className="bg-gradient-to-r from-violet-600 to-purple-700 text-white">
                <CardTitle className="flex items-center gap-2">
                  <MessageCircle className="h-5 w-5" />
                  AI Yordamchi
                </CardTitle>
              </CardHeader>
              <CardContent className="p-0 h-full">
                {isWidgetLoaded ? (
                  <div className="h-full">
                    <elevenlabs-convai 
                      agent-id="agent_9101k1kddf7zf9mvr2wtrej7ywmk"
                      style={{
                        width: '100%',
                        height: '100%',
                        border: 'none',
                        borderRadius: '0 0 8px 8px'
                      }}
                    />
                  </div>
                ) : (
                  <div className="flex items-center justify-center h-full">
                    <div className="text-center">
                      <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-violet-600 mx-auto mb-4"></div>
                      <p className="text-muted-foreground">AI yordamchi yuklanmoqda...</p>
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>

          {/* Features Sidebar */}
          <div className="space-y-6">
            {/* Features */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Settings className="h-5 w-5" />
                  Xususiyatlar
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center gap-3">
                  <Badge variant="secondary" className="bg-green-100 text-green-800">
                    <Mic className="mr-1 h-3 w-3" />
                  </Badge>
                  <span className="text-sm">Ovozli suhbat</span>
                </div>
                <div className="flex items-center gap-3">
                  <Badge variant="secondary" className="bg-blue-100 text-blue-800">
                    <MessageCircle className="mr-1 h-3 w-3" />
                  </Badge>
                  <span className="text-sm">Mahsulot tavsiyalari</span>
                </div>
                <div className="flex items-center gap-3">
                  <Badge variant="secondary" className="bg-purple-100 text-purple-800">
                    <HelpCircle className="mr-1 h-3 w-3" />
                  </Badge>
                  <span className="text-sm">Savol-javob</span>
                </div>
              </CardContent>
            </Card>

            {/* How to Use */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <HelpCircle className="h-5 w-5" />
                  Qanday ishlatish
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-start gap-3">
                  <div className="flex h-6 w-6 items-center justify-center rounded-full bg-violet-100 text-xs font-bold text-violet-600">
                    1
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Mikrofon tugmasini bosing va suhbatni boshlang
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="flex h-6 w-6 items-center justify-center rounded-full bg-violet-100 text-xs font-bold text-violet-600">
                    2
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Mahsulotlar haqida savol bering yoki tavsiya so'rang
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="flex h-6 w-6 items-center justify-center rounded-full bg-violet-100 text-xs font-bold text-violet-600">
                    3
                  </div>
                  <p className="text-sm text-muted-foreground">
                    AI yordamchisi sizga javob beradi va tavsiyalar beradi
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Quick Actions */}
            <Card>
              <CardHeader>
                <CardTitle>Tezkor harakatlar</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <Button variant="outline" className="w-full justify-start">
                  "Eng yaxshi mahsulotlar nima?"
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  "Kiyim o'lchamini qanday tanlash kerak?"
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  "Yetkazib berish haqida ma'lumot"
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  "Qaytarish siyosati"
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
} 