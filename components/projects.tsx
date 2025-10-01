"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog"
import { ExternalLink, ChevronLeft, ChevronRight, X } from "lucide-react"
import { useState } from "react"

const projectsByCategory = {
  "제품 디자인": [
    {
      title: "캠핑용품 디자인",
      category: "제품 디자인",
      description: "사용자 친화적인 캠핑용품 디자인",
      detailedDescription: "아웃도어 활동을 더욱 편리하게 만드는 캠핑용품을 디자인했습니다. 휴대성과 기능성을 모두 고려하여 캠핑 초보자부터 베테랑까지 모두가 만족할 수 있는 제품을 개발했습니다.",
      image: "/Camping_1.png",
      images: [
        "/Camping_1.png",
        "/Camping_2.png",
        "/Camping_3.png"
      ],
      tags: ["제품디자인", "캠핑", "아웃도어"],
      duration: "2024.01 - 2024.02",
      role: "제품 디자이너",
      technologies: ["Fusion 360", "Rhino", "KeyShot"],
      outcomes: [
        "캠핑용품 디자인 완성 및 프로토타입 제작",
        "사용자 경험을 통한 편의성 개선"
      ]
    },
    {
      title: "IoT 식물 재배기",
      category: "제품 디자인",
      description: "스마트 IoT 기반 식물 재배 시스템",
      detailedDescription: "자동 급수 시스템, 생육 환경 모니터링, 모바일 앱 연동 등의 기능을 포함한 스마트 식물 재배기입니다. 초보자도 쉽게 식물을 키울 수 있도록 설계했습니다.",
      image: "/IoTPlant_1.png",
      images: [
        "/IoTPlant_1.png",
        "/IoTPlant_2.png",
        "/IoTPlant_3.png"
      ],
      tags: ["IoT", "스마트홈", "제품디자인"],
      duration: "2024.02 - 2024.03",
      role: "제품 디자이너",
      technologies: ["Fusion 360", "Arduino", "IoT Sensors"],
      outcomes: [
        "IoT 식물 재배기 프로토타입 개발",
        "모바일 앱 화면 구성",
        "자동화 시스템 구축"
      ]
    }
  ],
  "웹 개발": [
    {
      title: "취준생·이직자를 위한 경력 관리 & 커뮤니티 플랫폼",
      category: "웹 개발",
      description: "이력서·자소서 관리와 소통이 가능한 웹 서비스",
      detailedDescription: "취업 준비생과 이직자를 위한 올인원 경력 관리 플랫폼입니다. 이력서 및 자기소개서 버전 관리, AI 기반 첨삭 추천, 커뮤니티 기능을 통해 사용자들이 효율적으로 취업 준비를 할 수 있도록 지원합니다.",
      image: "/Init_0.png",
      images: [
        "/Init_0.png",
        "/Init_1.png",
        "/Init_2.png",
        "/Init_3.png",
        "/Init_4.png",
        "/Init_5.png",
        "/Init_6.png",
        "/Init_7.png",
        "/Init_8.png",
        "/Init_9.png",
        "/Init_10.png",
        "/Init_11.png",
        "/Init_12.png",
        "/Init_13.png"
      ],
      tags: ["웹사이트", "UX/UI", "취업플랫폼"],
      duration: "2023.09 - 2024.02",
      role: "풀스택 개발자",
      technologies: ["React", "Next.js", "MySQL", "Spring Boot"],
      outcomes: [
        "월간 활성 사용자 5,000명 달성",
        "이력서 관리 기능 만족도 4.5/5.0",
        "커뮤니티 게시글 누적 10,000건 돌파"
      ]
    }
  ],
  "UX/UI 디자인": [
    {
      title: "웹 상세페이지 및 배너 디자인",
      category: "UI, 웹 디자인",
      description: "제품·서비스를 돋보이게 하는 상세페이지 제작",
      detailedDescription: "가독성을 높이는 상세페이지 디자인 프로젝트입니다. 사용자 행동 분석을 기반으로 최적의 정보 구조를 설계하고, 반응형 디자인을 통해 모든 디바이스에서 일관된 경험을 제공합니다.",
      image: "/page_1.png",
      images: [
        "/page_1.png",
        "/page_2.png",
        "/page_3.png",
        "/page_4.png",
        "/page_5.png",
        "/page_6.png",
        "/page_7.png",
        "/page_8.png",
        "/page_9.png",
        "/page_10.png"
      ],
      tags: ["상세페이지", "웹페이지", "UI디자인"],
      duration: "2021.04 - 2023.05",
      role: "웹 디자이너",
      technologies: ["Photoshop", "Illustrator", "Adobe XD", "Figma", "HTML/CSS"],
      outcomes: [
        "제품 구매율 증가",
        "페이지 체류 시간 2분 → 4분 향상",
        "모바일 사용성 개선으로 이용자 증가"
      ]
    },
    {
      title: "UX / UI 디자인 & 브랜딩 디자인",
      category: "UX/UI 디자인, 포스터 디자인, 로고 디자인",
      description: "사용자 경험 중심의 인터페이스 설계 및 제작",
      detailedDescription: "3D 요소를 활용한 인터랙티브 UI/UX 디자인 프로젝트와 브랜딩을 위한 포스터 디자인 프로젝트입니다. 사용자 리서치부터 프로토타입 제작까지 전 과정을 담당하며, 3D 비주얼을 통해 차별화된 사용자 경험을 구현했으며, 브랜드에 맞게 로고와 포스터 등을 제작했습니다.",
      image: "/mobile-app-ui-design.png",
      images: [
        "/mobile-app-ui-design.png",
        "/project4-detail1.jpg",
        "/project4-detail2.jpg",
        "/project4-detail3.jpg"
      ],
      tags: ["UX디자인", "UI디자인", "3D제작", "로고제작", "포스터"],
      duration: "2016.07 - 2020.08",
      role: "UX/UI 디자이너 & 브랜딩 디자이너",
      technologies: ["Figma", "Photoshop", "Illustrator", "Creo", "Rhino3D", "Keyshot"],
      outcomes: [
        "사용자 만족도 조사 4.7/5.0 달성",
        "인터랙티브 3D UI로 브랜드 인지도 향상",
        "디자인 어워드 우수상 수상"
      ]
    }
  ]
}

type Project = {
  title: string
  category: string
  description: string
  detailedDescription: string
  image: string
  images: string[]
  tags: string[]
  duration: string
  role: string
  technologies: string[]
  outcomes: string[]
}

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [lightboxImage, setLightboxImage] = useState<string | null>(null)

  const openProjectModal = (project: Project) => {
    setSelectedProject(project)
    setCurrentImageIndex(0)
  }

  const closeModal = () => {
    setSelectedProject(null)
    setCurrentImageIndex(0)
  }

  const navigateImage = (direction: 'prev' | 'next') => {
    if (!selectedProject) return

    const totalImages = selectedProject.images.length
    const newIndex = direction === 'prev'
      ? (currentImageIndex - 1 + totalImages) % totalImages
      : (currentImageIndex + 1) % totalImages

    setCurrentImageIndex(newIndex)
  }

  return (
      <section id="projects" className="py-24 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="space-y-12">
            <div className="space-y-4 text-center">
              <p className="text-sm text-muted-foreground tracking-wider uppercase">Projects</p>
              <h2 className="text-4xl md:text-5xl font-bold">주요 프로젝트</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                개인적으로 진행했던 디자인 프로젝트 입니다
              </p>
            </div>

            {/* Categories */}
            {Object.entries(projectsByCategory).map(([category, projects]) => (
              <div key={category} className="space-y-6">
                <h3 className="text-2xl font-bold text-primary">{category}</h3>
                <div className="grid md:grid-cols-2 gap-8">
                  {projects.map((project, index) => (
                    <Card
                      key={index}
                      className="group overflow-hidden border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-lg cursor-pointer"
                      onClick={() => openProjectModal(project)}
                    >
                      <div className="relative aspect-[3/2] overflow-hidden bg-muted">
                        <img
                          src={project.image || "/placeholder.svg"}
                          alt={project.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-end p-6">
                          <ExternalLink className="h-6 w-6 text-primary-foreground" />
                        </div>
                      </div>
                      <CardContent className="p-6 space-y-4">
                        <div className="space-y-2">
                          <p className="text-sm text-primary font-medium">{project.category}</p>
                          <h3 className="text-xl font-bold">{project.title}</h3>
                          <p className="text-muted-foreground leading-relaxed">{project.description}</p>
                        </div>
                        <div className="flex flex-wrap gap-2">
                          {project.tags.map((tag, tagIndex) => (
                            <span
                              key={tagIndex}
                              className="px-3 py-1 text-xs bg-secondary text-secondary-foreground rounded-full"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Project Detail Modal */}
        <Dialog open={!!selectedProject} onOpenChange={closeModal}>
          <DialogContent className="max-w-5xl max-h-[90vh] overflow-y-auto overflow-x-hidden">
            {selectedProject && (
              <>
                <DialogHeader>
                  <DialogTitle className="text-2xl font-bold">{selectedProject.title}</DialogTitle>
                  <DialogDescription className="text-base">
                    {selectedProject.category}
                  </DialogDescription>
                </DialogHeader>

                <div className="space-y-6 mt-4 overflow-x-hidden">
                  {/* Project Images Gallery with Navigation */}
                  <div className="relative w-full overflow-x-hidden">
                    {selectedProject.images && selectedProject.images.length > 0 ? (
                      <div className="space-y-4 w-full">
                        <div className="relative w-full rounded-lg bg-muted group flex items-center justify-center p-4 overflow-hidden" style={{ minHeight: '400px' }}>
                          <img
                            src={selectedProject.images[currentImageIndex] || "/placeholder.svg"}
                            alt={`${selectedProject.title} - 이미지 ${currentImageIndex + 1}`}
                            className="max-w-full max-h-[70vh] w-auto h-auto object-contain cursor-pointer hover:opacity-90 transition-opacity"
                            onClick={() => setLightboxImage(selectedProject.images[currentImageIndex])}
                          />

                          {/* Image Navigation Buttons */}
                          {selectedProject.images.length > 1 && (
                            <>
                              <button
                                onClick={() => navigateImage('prev')}
                                className="absolute left-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-background/80 hover:bg-background transition-all opacity-0 group-hover:opacity-100"
                                aria-label="이전 이미지"
                              >
                                <ChevronLeft className="h-6 w-6" />
                              </button>
                              <button
                                onClick={() => navigateImage('next')}
                                className="absolute right-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-background/80 hover:bg-background transition-all opacity-0 group-hover:opacity-100"
                                aria-label="다음 이미지"
                              >
                                <ChevronRight className="h-6 w-6" />
                              </button>

                              {/* Image Counter */}
                              <div className="absolute bottom-4 right-4 px-3 py-1 rounded-full bg-background/80 text-sm">
                                {currentImageIndex + 1} / {selectedProject.images.length}
                              </div>
                            </>
                          )}
                        </div>

                        {/* Thumbnail Navigation */}
                        {selectedProject.images.length > 1 && (
                          <div className="flex gap-2 overflow-x-auto pb-2">
                            {selectedProject.images.map((img, idx) => (
                              <button
                                key={idx}
                                onClick={() => setCurrentImageIndex(idx)}
                                className={`relative flex-shrink-0 w-20 h-20 rounded-lg overflow-hidden border-2 transition-all cursor-pointer hover:opacity-80 ${
                                  idx === currentImageIndex 
                                    ? 'border-primary' 
                                    : 'border-transparent hover:border-primary/50'
                                }`}
                              >
                                <img
                                  src={img || "/placeholder.svg"}
                                  alt={`썸네일 ${idx + 1}`}
                                  className="w-full h-full object-cover pointer-events-none"
                                />
                              </button>
                            ))}
                          </div>
                        )}
                      </div>
                    ) : (
                      <div className="relative w-full rounded-lg bg-muted flex items-center justify-center p-4 overflow-hidden" style={{ minHeight: '400px' }}>
                        <img
                          src={selectedProject.image || "/placeholder.svg"}
                          alt={selectedProject.title}
                          className="max-w-full max-h-[70vh] w-auto h-auto object-contain"
                        />
                      </div>
                    )}
                  </div>

                  {/* Project Info Grid */}
                  <div className="grid grid-cols-2 gap-4 p-4 bg-secondary/50 rounded-lg">
                    <div>
                      <p className="text-sm text-muted-foreground mb-1">기간</p>
                      <p className="font-medium">{selectedProject.duration}</p>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground mb-1">역할</p>
                      <p className="font-medium">{selectedProject.role}</p>
                    </div>
                  </div>

                  {/* Detailed Description */}
                  <div>
                    <h4 className="font-semibold text-lg mb-2">프로젝트 개요</h4>
                    <p className="text-muted-foreground leading-relaxed">
                      {selectedProject.detailedDescription}
                    </p>
                  </div>

                  {/* Technologies */}
                  <div>
                    <h4 className="font-semibold text-lg mb-3">사용 기술</h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedProject.technologies.map((tech, index) => (
                        <span
                          key={index}
                          className="px-4 py-2 bg-primary/10 text-primary rounded-md font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Tags */}
                  <div>
                    <h4 className="font-semibold text-lg mb-3">태그</h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedProject.tags.map((tag, index) => (
                        <span
                          key={index}
                          className="px-3 py-1 text-sm bg-secondary text-secondary-foreground rounded-full"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </>
            )}
          </DialogContent>
        </Dialog>

        {/* Lightbox for Full-Size Image */}
        {lightboxImage && (
          <div
            className="fixed inset-0 bg-black/95 z-[100] flex items-center justify-center p-4 cursor-zoom-out"
            onClick={() => setLightboxImage(null)}
          >
            <button
              onClick={() => setLightboxImage(null)}
              className="absolute top-4 right-4 p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors z-[101]"
              aria-label="닫기"
            >
              <X className="h-6 w-6 text-white" />
            </button>
            <img
              src={lightboxImage}
              alt="Full size view"
              className="max-w-full max-h-full object-contain"
              onClick={(e) => e.stopPropagation()}
            />
          </div>
        )}
      </section>
  )
}