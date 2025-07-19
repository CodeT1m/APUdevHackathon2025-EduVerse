"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
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
  Star,
  Crown,
  Palette,
  Music,
  ImageIcon,
  Award,
} from "lucide-react"
import Link from "next/link"

const sidebarItems = [
  { title: "My Passport", url: "/dashboard", icon: BookOpen },
  { title: "Learn", url: "/learn", icon: Brain },
  { title: "Rewards", url: "/rewards", icon: Trophy, active: true },
  { title: "My Room", url: "/room", icon: Home },
  { title: "Marketplace", url: "/marketplace", icon: ShoppingCart },
]

const rewardCategories = [
  { id: "avatars", title: "Avatars", icon: Crown, color: "from-yellow-500 to-orange-600" },
  { id: "themes", title: "Themes", icon: Palette, color: "from-purple-500 to-pink-600" },
  { id: "music", title: "Music", icon: Music, color: "from-green-500 to-emerald-600" },
  { id: "backgrounds", title: "Backgrounds", icon: ImageIcon, color: "from-blue-500 to-cyan-600" },
  { id: "badges", title: "Badges", icon: Award, color: "from-red-500 to-rose-600" },
]

const rewards = {
  avatars: [
    { id: 1, name: "Wizard Student", cost: 500, owned: false, image: "/placeholder.svg?height=100&width=100" },
    { id: 2, name: "Robot Learner", cost: 750, owned: true, image: "/placeholder.svg?height=100&width=100" },
    { id: 3, name: "Space Explorer", cost: 1000, owned: false, image: "/placeholder.svg?height=100&width=100" },
    { id: 4, name: "Dragon Master", cost: 1500, owned: false, image: "/placeholder.svg?height=100&width=100" },
  ],
  themes: [
    { id: 1, name: "Ocean Depths", cost: 300, owned: false, image: "/placeholder.svg?height=100&width=100" },
    { id: 2, name: "Forest Magic", cost: 400, owned: true, image: "/placeholder.svg?height=100&width=100" },
    { id: 3, name: "Cyber Neon", cost: 600, owned: false, image: "/placeholder.svg?height=100&width=100" },
    { id: 4, name: "Galaxy Dreams", cost: 800, owned: false, image: "/placeholder.svg?height=100&width=100" },
  ],
  music: [
    { id: 1, name: "Study Beats", cost: 200, owned: false, image: "/placeholder.svg?height=100&width=100" },
    { id: 2, name: "Nature Sounds", cost: 250, owned: true, image: "/placeholder.svg?height=100&width=100" },
    { id: 3, name: "Epic Adventure", cost: 400, owned: false, image: "/placeholder.svg?height=100&width=100" },
    { id: 4, name: "Zen Meditation", cost: 350, owned: false, image: "/placeholder.svg?height=100&width=100" },
  ],
  backgrounds: [
    { id: 1, name: "Mountain View", cost: 400, owned: false, image: "/placeholder.svg?height=100&width=100" },
    { id: 2, name: "City Skyline", cost: 500, owned: true, image: "/placeholder.svg?height=100&width=100" },
    { id: 3, name: "Underwater", cost: 600, owned: false, image: "/placeholder.svg?height=100&width=100" },
    { id: 4, name: "Space Station", cost: 800, owned: false, image: "/placeholder.svg?height=100&width=100" },
  ],
  badges: [
    { id: 1, name: "First Steps", cost: 100, owned: true, image: "/placeholder.svg?height=100&width=100" },
    { id: 2, name: "Quick Learner", cost: 300, owned: true, image: "/placeholder.svg?height=100&width=100" },
    { id: 3, name: "Knowledge Seeker", cost: 500, owned: false, image: "/placeholder.svg?height=100&width=100" },
    { id: 4, name: "Master Scholar", cost: 1000, owned: false, image: "/placeholder.svg?height=100&width=100" },
  ],
}

const leaderboard = [
  { rank: 1, name: "Alex Chen", points: 4250, avatar: "/placeholder.svg?height=40&width=40" },
  { rank: 2, name: "Sarah Kim", points: 3890, avatar: "/placeholder.svg?height=40&width=40" },
  { rank: 3, name: "Mike Johnson", points: 3650, avatar: "/placeholder.svg?height=40&width=40" },
  { rank: 4, name: "Emma Davis", points: 3200, avatar: "/placeholder.svg?height=40&width=40" },
  { rank: 5, name: "You", points: 2450, avatar: "/placeholder.svg?height=40&width=40", isUser: true },
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

export default function RewardsPage() {
  const [selectedCategory, setSelectedCategory] = useState("avatars")
  const [userPoints, setUserPoints] = useState(2450)
  const [showPurchaseAnimation, setShowPurchaseAnimation] = useState(false)

  const purchaseReward = (reward: any) => {
    if (userPoints >= reward.cost && !reward.owned) {
      setUserPoints(userPoints - reward.cost)
      reward.owned = true
      setShowPurchaseAnimation(true)
      setTimeout(() => setShowPurchaseAnimation(false), 1000)
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
                NFT Rewards
              </h1>
              <div className="w-10" />
            </div>
          </div>

          <div className="p-6 space-y-6">
            {/* Points Display */}
            <Card className="border-2 border-yellow-200 bg-gradient-to-r from-yellow-50 to-orange-50">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <div className="w-16 h-16 bg-gradient-to-r from-yellow-500 to-orange-600 rounded-full flex items-center justify-center">
                      <Star className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <h2 className="text-2xl font-bold text-yellow-700">NFT Points</h2>
                      <p className="text-yellow-600">Earn points by completing lessons and quizzes</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-4xl font-bold text-yellow-700">{userPoints.toLocaleString()}</div>
                    <div className="text-yellow-600">Available Points</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="grid lg:grid-cols-3 gap-6">
              {/* Rewards Section */}
              <div className="lg:col-span-2 space-y-6">
                {/* Category Tabs */}
                <div className="flex flex-wrap gap-2">
                  {rewardCategories.map((category) => (
                    <Button
                      key={category.id}
                      variant={selectedCategory === category.id ? "default" : "outline"}
                      onClick={() => setSelectedCategory(category.id)}
                      className={
                        selectedCategory === category.id ? `bg-gradient-to-r ${category.color} text-white` : ""
                      }
                    >
                      <category.icon className="w-4 h-4 mr-2" />
                      {category.title}
                    </Button>
                  ))}
                </div>

                {/* Rewards Grid */}
                <div className="grid md:grid-cols-2 gap-4">
                  {rewards[selectedCategory as keyof typeof rewards]?.map((reward) => (
                    <Card
                      key={reward.id}
                      className={`border-2 transition-all ${
                        reward.owned
                          ? "border-green-200 bg-green-50"
                          : "border-gray-200 hover:shadow-lg hover:scale-105"
                      } ${showPurchaseAnimation ? "reward-bounce" : ""}`}
                    >
                      <CardContent className="p-4">
                        <div className="flex items-center space-x-4">
                          <img
                            src={reward.image || "/placeholder.svg"}
                            alt={reward.name}
                            className="w-16 h-16 rounded-lg object-cover"
                          />
                          <div className="flex-1">
                            <h3 className="font-bold text-lg">{reward.name}</h3>
                            <div className="flex items-center space-x-2 mt-2">
                              <Badge variant="outline" className="text-yellow-600 border-yellow-300">
                                <Star className="w-3 h-3 mr-1" />
                                {reward.cost} points
                              </Badge>
                              {reward.owned && <Badge className="bg-green-100 text-green-800">Owned</Badge>}
                            </div>
                          </div>
                          <div>
                            {reward.owned ? (
                              <Button variant="outline" disabled>
                                Owned
                              </Button>
                            ) : userPoints >= reward.cost ? (
                              <Button
                                onClick={() => purchaseReward(reward)}
                                className="bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700"
                              >
                                Buy
                              </Button>
                            ) : (
                              <Button variant="outline" disabled>
                                Not enough points
                              </Button>
                            )}
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>

              {/* Leaderboard */}
              <div>
                <Card className="border-2 border-purple-200">
                  <CardHeader className="bg-gradient-to-r from-purple-500 to-pink-600 text-white rounded-t-lg">
                    <CardTitle className="flex items-center">
                      <Trophy className="w-5 h-5 mr-2" />
                      Top Point Earners
                    </CardTitle>
                    <CardDescription className="text-purple-100">
                      See how you rank against other students
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="p-4">
                    <div className="space-y-3">
                      {leaderboard.map((student) => (
                        <div
                          key={student.rank}
                          className={`flex items-center space-x-3 p-3 rounded-lg ${
                            student.isUser ? "bg-blue-50 border-2 border-blue-200" : "bg-gray-50"
                          }`}
                        >
                          <div
                            className={`w-8 h-8 rounded-full flex items-center justify-center text-white font-bold ${
                              student.rank === 1
                                ? "bg-yellow-500"
                                : student.rank === 2
                                  ? "bg-gray-400"
                                  : student.rank === 3
                                    ? "bg-orange-500"
                                    : "bg-gray-300"
                            }`}
                          >
                            {student.rank}
                          </div>
                          <img
                            src={student.avatar || "/placeholder.svg"}
                            alt={student.name}
                            className="w-10 h-10 rounded-full object-cover"
                          />
                          <div className="flex-1">
                            <div className="font-medium">{student.name}</div>
                            <div className="text-sm text-gray-600">{student.points.toLocaleString()} points</div>
                          </div>
                          {student.rank <= 3 && (
                            <Crown
                              className={`w-5 h-5 ${
                                student.rank === 1
                                  ? "text-yellow-500"
                                  : student.rank === 2
                                    ? "text-gray-400"
                                    : "text-orange-500"
                              }`}
                            />
                          )}
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </main>
      </div>
    </SidebarProvider>
  )
}
