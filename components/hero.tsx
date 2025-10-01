"use client"

import { ArrowDown } from "lucide-react"

export function Hero() {
  const scrollToAbout = () => {
    const element = document.getElementById("about")
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center px-6 pt-20">
      <div className="container mx-auto max-w-5xl">
        <div className="text-center space-y-8">
          <div className="space-y-4">
            <p className="text-sm text-muted-foreground tracking-wider uppercase">Design & Web Development</p>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-balance leading-tight">
              창의적인 디자인과
              <br />
              <span className="text-primary">완벽한 구현</span>
            </h1>
          </div>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto text-pretty leading-relaxed">
            사용자 경험을 최우선으로 생각하며, 아름다운 제품 디자인과 기능적인 웹사이트를 만듭니다.
          </p>
          <button
            onClick={scrollToAbout}
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors group mt-8"
          >
            <span>더 알아보기</span>
            <ArrowDown className="h-4 w-4 group-hover:translate-y-1 transition-transform" />
          </button>
        </div>
      </div>
    </section>
  )
}
