"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent } from "@/components/ui/card"
import { Mail, MessageSquare, Send } from "lucide-react"

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log("Form submitted:", formData)
  }

  return (
    <section id="contact" className="py-24 px-6 bg-secondary/30">
      <div className="container mx-auto max-w-4xl">
        <div className="space-y-12">
          <div className="space-y-4 text-center">
            <p className="text-sm text-muted-foreground tracking-wider uppercase">Contact</p>
            <h2 className="text-4xl md:text-5xl font-bold">Contact Me</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              함께 일하고 싶다면 연락 주세요
              <br />
              채용/협업 문의
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="border-border/50">
              <CardContent className="p-8 space-y-6">
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Mail className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-bold mb-1">이메일</h3>
                      <p className="text-sm text-muted-foreground">pdasol0703@naver.com</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <MessageSquare className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-bold mb-1">응답 시간</h3>
                      <p className="text-sm text-muted-foreground">보통 24시간 이내에 답변드립니다</p>
                    </div>
                  </div>
                </div>
                <div className="pt-6 border-t border-border">
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    프로젝트 및 채용과 관련한 모든 문의를 환영합니다.
                  </p>
                  <br/>
                  <a
                      href="/files/Cover_letter_WD.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium text-white bg-primary rounded-lg hover:bg-primary/90 transition"
                  >
                    📄 개발자용 자소서
                  </a>
                  <br/>
                  <br/>
                  <a
                      href="/files/Cover_letter_D.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium text-white bg-primary rounded-lg hover:bg-primary/90 transition"
                  >
                    📄 디자이너용 자소서
                  </a>
                </div>
              </CardContent>
            </Card>

            <Card className="border-border/50">
              <CardContent className="p-8">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium">
                      이름
                    </label>
                    <Input
                      id="name"
                      placeholder="홍길동"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium">
                      이메일
                    </label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="hello@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium">
                      메시지
                    </label>
                    <Textarea
                      id="message"
                      placeholder="메세지를 입력하세요..."
                      rows={5}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      required
                    />
                  </div>
                  <Button type="submit" className="w-full" size="lg">
                    <Send className="h-4 w-4 mr-2" />
                    메시지 보내기
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          <div className="text-center pt-12 border-t border-border">
            <p className="text-sm text-muted-foreground">© 2025 Portfolio. All rights reserved.</p>
          </div>
        </div>
      </div>
    </section>
  )
}
