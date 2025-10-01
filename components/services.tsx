import { Palette, Code, Layout, Sparkles } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

const expertise = [
  {
    icon: Palette,
    title: "제품 디자인",
    description: "제품 개발 과정에서 디자인 기획부터 비주얼 시스템 구축까지 경험을 쌓았습니다.",
  },
  {
    icon: Layout,
    title: "UI/UX 디자인",
    description: "사용자 중심 사고를 바탕으로 인터페이스 설계와 상세 페이지 디자인을 진행해왔습니다.",
  },
  {
    icon: Code,
    title: "웹 개발",
    description: "반응형 웹사이트, 랜딩 페이지, 웹 애플리케이션을 직접 구현한 경험이 있습니다.",
  },
  {
    icon: Sparkles,
    title: "인터랙티브 경험",
    description: "애니메이션과 영상 인터랙션을 활용해 몰입감 있는 웹 경험을 만드는 데 강점을 가지고 있습니다.",
  },
]

export function Services() {
  return (
      <section id="expertise" className="py-24 px-6 bg-secondary/30">
        <div className="container mx-auto max-w-6xl">
          <div className="space-y-12">
            {/* 섹션 헤더 */}
            <div className="space-y-4 text-center">
              <p className="text-sm text-muted-foreground tracking-wider uppercase">Expertise</p>
              <h2 className="text-4xl md:text-5xl font-bold">제가 잘하는 분야</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                디자인부터 개발까지, 사용자 경험 전반을 다루는 제 역량을 소개합니다.
              </p>
            </div>

            {/* 역량 카드 리스트 */}
            <div className="grid md:grid-cols-2 gap-6">
              {expertise.map((item, index) => {
                const Icon = item.icon
                return (
                    <Card
                        key={index}
                        className="border-border/50 hover:border-primary/50 transition-colors"
                    >
                      <CardContent className="p-8 space-y-4">
                        <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                          <Icon className="h-6 w-6 text-primary" />
                        </div>
                        <h3 className="text-xl font-bold">{item.title}</h3>
                        <p className="text-muted-foreground leading-relaxed">{item.description}</p>
                      </CardContent>
                    </Card>
                )
              })}
            </div>
          </div>
        </div>
      </section>
  )
}
