"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar"
import {
  BookOpen,
  Trophy,
  Home,
  ShoppingCart,
  Brain,
  Beaker,
  Calculator,
  BookText,
  Play,
  Star,
  Lock,
  CheckCircle,
} from "lucide-react"
import Link from "next/link"

const sidebarItems = [
  { title: "My Passport", url: "/dashboard", icon: BookOpen },
  { title: "Learn", url: "/learn", icon: Brain, active: true },
  { title: "Rewards", url: "/rewards", icon: Trophy },
  { title: "My Room", url: "/room", icon: Home },
  { title: "Marketplace", url: "/marketplace", icon: ShoppingCart },
]

const subjects = [
  {
    id: "science",
    title: "Science",
    icon: Beaker,
    color: "from-green-500 to-emerald-600",
    description: "Explore the wonders of physics, chemistry, and biology",
    progress: 75,
    lessons: 12,
    completed: 9,
  },
  {
    id: "math",
    title: "Mathematics",
    icon: Calculator,
    color: "from-blue-500 to-cyan-600",
    description: "Master algebra, geometry, and calculus concepts",
    progress: 60,
    lessons: 15,
    completed: 9,
  },
  {
    id: "english",
    title: "English",
    icon: BookText,
    color: "from-purple-500 to-pink-600",
    description: "Improve your reading, writing, and communication skills",
    progress: 40,
    lessons: 10,
    completed: 4,
  },
]

const lessons = {
  science: [
    { id: 1, title: "Introduction to Physics", completed: true, locked: false, xp: 100 },
    { id: 2, title: "Newton's Laws of Motion", completed: true, locked: false, xp: 150 },
    { id: 3, title: "Energy and Work", completed: true, locked: false, xp: 120 },
    { id: 4, title: "Waves and Sound", completed: false, locked: false, xp: 180 },
    { id: 5, title: "Light and Optics", completed: false, locked: true, xp: 200 },
  ],
  math: [
    { id: 1, title: "Basic Algebra", completed: true, locked: false, xp: 100 },
    { id: 2, title: "Linear Equations", completed: true, locked: false, xp: 120 },
    { id: 3, title: "Quadratic Functions", completed: false, locked: false, xp: 150 },
    { id: 4, title: "Trigonometry Basics", completed: false, locked: true, xp: 180 },
    { id: 5, title: "Calculus Introduction", completed: false, locked: true, xp: 250 },
  ],
  english: [
    { id: 1, title: "Grammar Fundamentals", completed: true, locked: false, xp: 80 },
    { id: 2, title: "Essay Writing", completed: true, locked: false, xp: 120 },
    { id: 3, title: "Literature Analysis", completed: false, locked: false, xp: 150 },
    { id: 4, title: "Creative Writing", completed: false, locked: true, xp: 180 },
    { id: 5, title: "Public Speaking", completed: false, locked: true, xp: 200 },
  ],
}

function AppSidebar() {
  return (
    <Sidebar>
      <SidebarHeader className="border-b border-gray-200">
        <div className="flex items-center space-x-2 p-4">
          <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
            <BookOpen className="w-5 h-5 text-white" />
          </div>
          <span className="text-lg font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            EduVerse
          </span>
        </div>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Navigation</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {sidebarItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild isActive={item.active}>
                    <Link href={item.url}>
                      <item.icon className="w-4 h-4" />
                      <span>{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  )
}

export default function LearnPage() {
  const [selectedSubject, setSelectedSubject] = useState<string | null>(null)
  const [showQuizModal, setShowQuizModal] = useState(false)
  const [currentLesson, setCurrentLesson] = useState<any>(null)

  const startQuiz = (lesson: any) => {
    setCurrentLesson(lesson)
    setShowQuizModal(true)
  }

  const completeQuiz = () => {
    setShowQuizModal(false)
    // Add reward animation logic here
  }

  return (
    <SidebarProvider>
      <div className="flex min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-green-50">
        <AppSidebar />
        <main className="flex-1">
          <div className="border-b bg-white/80 backdrop-blur-sm sticky top-0 z-40">
            <div className="flex items-center justify-between p-4">
              <SidebarTrigger />
              <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                AI Learning Agents
              </h1>
              <div className="w-10" />
            </div>
          </div>

          <div className="p-6 space-y-6">
            {!selectedSubject ? (
              <>
                {/* Subject Selection */}
                <div className="text-center mb-8">
                  <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                    Choose Your Learning Path
                  </h2>
                  <p className="text-gray-600 text-lg">Select a subject to start learning with our AI-powered tutors</p>
                </div>

                <div className="grid md:grid-cols-3 gap-6">
                  {subjects.map((subject) => (
                    <Card
                      key={subject.id}
                      className="border-2 hover:shadow-lg transition-all cursor-pointer hover:scale-105"
                      onClick={() => setSelectedSubject(subject.id)}
                    >
                      <CardHeader className={`bg-gradient-to-r ${subject.color} text-white rounded-t-lg`}>
                        <div className="flex items-center justify-between">
                          <div>
                            <CardTitle className="flex items-center text-xl">
                              <subject.icon className="w-6 h-6 mr-2" />
                              {subject.title}
                            </CardTitle>
                            <CardDescription className="text-white/80 mt-2">{subject.description}</CardDescription>
                          </div>
                        </div>
                      </CardHeader>
                      <CardContent className="p-6">
                        <div className="space-y-4">
                          <div className="flex justify-between text-sm">
                            <span>Progress</span>
                            <span>{subject.progress}%</span>
                          </div>
                          <Progress value={subject.progress} className="h-2" />
                          <div className="flex justify-between text-sm text-gray-600">
                            <span>
                              {subject.completed}/{subject.lessons} lessons completed
                            </span>
                            <span>{subject.lessons - subject.completed} remaining</span>
                          </div>
                          <Button className={`w-full bg-gradient-to-r ${subject.color} hover:opacity-90`}>
                            Continue Learning
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </>
            ) : (
              <>
                {/* Lesson View */}
                <div className="flex items-center justify-between mb-6">
                  <Button variant="outline" onClick={() => setSelectedSubject(null)}>
                    ← Back to Subjects
                  </Button>
                  <h2 className="text-2xl font-bold capitalize">{selectedSubject} Lessons</h2>
                  <div className="w-20" />
                </div>

                <div className="grid gap-4">
                  {lessons[selectedSubject as keyof typeof lessons]?.map((lesson, index) => (
                    <Card
                      key={lesson.id}
                      className={`border-2 ${
                        lesson.completed
                          ? "border-green-200 bg-green-50"
                          : lesson.locked
                            ? "border-gray-200 bg-gray-50 opacity-60"
                            : "border-blue-200 hover:shadow-lg"
                      }`}
                    >
                      <CardContent className="p-6">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-4">
                            <div
                              className={`w-12 h-12 rounded-full flex items-center justify-center ${
                                lesson.completed
                                  ? "bg-green-500 text-white"
                                  : lesson.locked
                                    ? "bg-gray-300 text-gray-500"
                                    : "bg-blue-500 text-white"
                              }`}
                            >
                              {lesson.completed ? (
                                <CheckCircle className="w-6 h-6" />
                              ) : lesson.locked ? (
                                <Lock className="w-6 h-6" />
                              ) : (
                                <Play className="w-6 h-6" />
                              )}
                            </div>
                            <div>
                              <h3 className="text-lg font-bold">{lesson.title}</h3>
                              <div className="flex items-center space-x-2">
                                <Badge variant="outline" className="text-yellow-600 border-yellow-300">
                                  <Star className="w-3 h-3 mr-1" />
                                  {lesson.xp} XP
                                </Badge>
                                {lesson.completed && <Badge className="bg-green-100 text-green-800">Completed</Badge>}
                              </div>
                            </div>
                          </div>
                          <div>
                            {lesson.completed ? (
                              <Button variant="outline" disabled>
                                Completed
                              </Button>
                            ) : lesson.locked ? (
                              <Button variant="outline" disabled>
                                Locked
                              </Button>
                            ) : (
                              <Button
                                onClick={() => startQuiz(lesson)}
                                className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700"
                              >
                                Start Quiz
                              </Button>
                            )}
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </>
            )}

            {/* Quiz Modal */}
            {showQuizModal && currentLesson && (
              <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
                <Card className="w-full max-w-2xl mx-4">
                  <CardHeader className="bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-t-lg">
                    <CardTitle className="flex items-center">
                      <Brain className="w-6 h-6 mr-2" />
                      AI Quiz: {currentLesson.title}
                    </CardTitle>
                    <CardDescription className="text-white/80">Answer questions with your AI tutor</CardDescription>
                  </CardHeader>
                  <CardContent className="p-6">
                    <div className="space-y-6">
                      <div className="text-center">
                        <div className="w-24 h-24 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                          <Brain className="w-12 h-12 text-white" />
                        </div>
                        <h3 className="text-xl font-bold mb-2">AI Tutor Ready!</h3>
                        <p className="text-gray-600">
                          Your personalized AI tutor will guide you through interactive questions and provide instant
                          feedback on your answers.
                        </p>
                      </div>
                      <div className="flex space-x-4">
                        <Button variant="outline" onClick={() => setShowQuizModal(false)} className="flex-1">
                          Cancel
                        </Button>
                        <Button
                          onClick={completeQuiz}
                          className="flex-1 bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700"
                        >
                          Complete Quiz (+{currentLesson.xp} XP)
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            )}
          </div>
        </main>
      </div>
    </SidebarProvider>
  )
}
