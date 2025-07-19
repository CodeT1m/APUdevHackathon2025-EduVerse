"use client"

import type React from "react"

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
import { BookOpen, Trophy, Home, ShoppingCart, Upload, Star, Award, Brain, Zap, Crown } from "lucide-react"
import Link from "next/link"

const sidebarItems = [
  { title: "My Passport", url: "/dashboard", icon: BookOpen, active: true },
  { title: "Learn", url: "/learn", icon: Brain },
  { title: "Rewards", url: "/rewards", icon: Trophy },
  { title: "My Room", url: "/room", icon: Home },
  { title: "Marketplace", url: "/marketplace", icon: ShoppingCart },
]

const nftCertificates = [
  {
    id: 1,
    title: "JavaScript Fundamentals",
    issuer: "CodeAcademy",
    date: "2024-01-15",
    rarity: "Common",
    image: "/placeholder.svg?height=200&width=200",
  },
  {
    id: 2,
    title: "React Development",
    issuer: "TechU",
    date: "2024-02-20",
    rarity: "Rare",
    image: "/placeholder.svg?height=200&width=200",
  },
  {
    id: 3,
    title: "Blockchain Basics",
    issuer: "CryptoEdu",
    date: "2024-03-10",
    rarity: "Epic",
    image: "/placeholder.svg?height=200&width=200",
  },
  {
    id: 4,
    title: "AI & Machine Learning",
    issuer: "AIInstitute",
    date: "2024-03-25",
    rarity: "Legendary",
    image: "/placeholder.svg?height=200&width=200",
  },
]

const achievements = [
  { id: 1, title: "First Certificate", description: "Earned your first NFT certificate", icon: Award, earned: true },
  { id: 2, title: "Quick Learner", description: "Completed 5 courses in one month", icon: Zap, earned: true },
  { id: 3, title: "Knowledge Seeker", description: "Earned 10 certificates", icon: Star, earned: true },
  { id: 4, title: "Master Student", description: "Reached 5000 XP points", icon: Crown, earned: false },
]

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

export default function Dashboard() {
  const [uploadedFile, setUploadedFile] = useState<File | null>(null)

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]
    if (file) {
      setUploadedFile(file)
    }
  }

  const getRarityColor = (rarity: string) => {
    switch (rarity) {
      case "Common":
        return "bg-gray-100 text-gray-800"
      case "Rare":
        return "bg-blue-100 text-blue-800"
      case "Epic":
        return "bg-purple-100 text-purple-800"
      case "Legendary":
        return "bg-yellow-100 text-yellow-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
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
                Student Dashboard
              </h1>
              <div className="w-10" />
            </div>
          </div>

          <div className="p-6 space-y-6">
            {/* Profile Summary */}
            <Card className="border-2 border-blue-200">
              <CardHeader className="bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-t-lg">
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle className="text-2xl">Welcome back, Alex!</CardTitle>
                    <CardDescription className="text-blue-100">
                      Wallet: 0x742d35Cc6634C0532925a3b8D4C0532925a3b8D4
                    </CardDescription>
                  </div>
                  <div className="text-right">
                    <div className="text-3xl font-bold">2,450</div>
                    <div className="text-blue-100">XP Points</div>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="p-6">
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-blue-600 mb-1">12</div>
                    <div className="text-gray-600">Certificates Earned</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-purple-600 mb-1">8</div>
                    <div className="text-gray-600">Courses Completed</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-green-600 mb-1">Advanced</div>
                    <div className="text-gray-600">Current Level</div>
                  </div>
                </div>
                <div className="mt-6">
                  <div className="flex justify-between text-sm mb-2">
                    <span>Progress to next level</span>
                    <span>2,450 / 3,000 XP</span>
                  </div>
                  <Progress value={81} className="h-3" />
                </div>
              </CardContent>
            </Card>

            {/* Upload Section */}
            <Card className="border-2 border-green-200">
              <CardHeader>
                <CardTitle className="flex items-center text-green-600">
                  <Upload className="w-5 h-5 mr-2" />
                  Submit New Certification
                </CardTitle>
                <CardDescription>Upload your certificates to get them verified and minted as NFTs</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="border-2 border-dashed border-green-300 rounded-lg p-8 text-center">
                  <input
                    type="file"
                    accept=".pdf,.jpg,.jpeg,.png"
                    onChange={handleFileUpload}
                    className="hidden"
                    id="file-upload"
                  />
                  <label htmlFor="file-upload" className="cursor-pointer">
                    <Upload className="w-12 h-12 text-green-500 mx-auto mb-4" />
                    <p className="text-lg font-medium text-gray-700 mb-2">
                      Drop your certificate here or click to browse
                    </p>
                    <p className="text-gray-500">Supports PDF, JPG, PNG files</p>
                  </label>
                  {uploadedFile && (
                    <div className="mt-4 p-3 bg-green-50 rounded-lg">
                      <p className="text-green-700 font-medium">File uploaded: {uploadedFile.name}</p>
                      <Button className="mt-2 bg-green-600 hover:bg-green-700">Submit for Verification</Button>
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>

            {/* NFT Certificates Grid */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Trophy className="w-5 h-5 mr-2 text-yellow-500" />
                  My NFT Certificates
                </CardTitle>
                <CardDescription>Your verified achievements on the blockchain</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {nftCertificates.map((cert) => (
                    <Card key={cert.id} className="border-2 hover:shadow-lg transition-shadow nft-glow">
                      <CardContent className="p-4">
                        <img
                          src={cert.image || "/placeholder.svg"}
                          alt={cert.title}
                          className="w-full h-32 object-cover rounded-lg mb-3"
                        />
                        <Badge className={`mb-2 ${getRarityColor(cert.rarity)}`}>{cert.rarity}</Badge>
                        <h3 className="font-bold text-sm mb-1">{cert.title}</h3>
                        <p className="text-xs text-gray-600 mb-1">by {cert.issuer}</p>
                        <p className="text-xs text-gray-500">{cert.date}</p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Achievements */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Star className="w-5 h-5 mr-2 text-yellow-500" />
                  Achievements
                </CardTitle>
                <CardDescription>Your learning milestones</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-4">
                  {achievements.map((achievement) => (
                    <div
                      key={achievement.id}
                      className={`flex items-center space-x-3 p-4 rounded-lg border-2 ${
                        achievement.earned ? "border-yellow-200 bg-yellow-50" : "border-gray-200 bg-gray-50 opacity-60"
                      }`}
                    >
                      <div
                        className={`w-10 h-10 rounded-full flex items-center justify-center ${
                          achievement.earned ? "bg-yellow-500 text-white" : "bg-gray-300 text-gray-500"
                        }`}
                      >
                        <achievement.icon className="w-5 h-5" />
                      </div>
                      <div>
                        <h3 className="font-bold text-sm">{achievement.title}</h3>
                        <p className="text-xs text-gray-600">{achievement.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </main>
      </div>
    </SidebarProvider>
  )
}
