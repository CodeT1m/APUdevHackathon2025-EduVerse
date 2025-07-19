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
  Palette,
  Music,
  ImageIcon,
  Share2,
  Eye,
  Save,
  RotateCcw,
} from "lucide-react"
import Link from "next/link"

const sidebarItems = [
  { title: "My Passport", url: "/dashboard", icon: BookOpen },
  { title: "Learn", url: "/learn", icon: Brain },
  { title: "Rewards", url: "/rewards", icon: Trophy },
  { title: "My Room", url: "/room", icon: Home, active: true },
  { title: "Marketplace", url: "/marketplace", icon: ShoppingCart },
]

const ownedItems = {
  themes: [
    { id: 1, name: "Forest Magic", image: "/placeholder.svg?height=80&width=80", active: false },
    { id: 2, name: "City Skyline", image: "/placeholder.svg?height=80&width=80", active: true },
  ],
  music: [
    { id: 1, name: "Nature Sounds", image: "/placeholder.svg?height=80&width=80", active: false },
    { id: 2, name: "Study Beats", image: "/placeholder.svg?height=80&width=80", active: true },
  ],
  backgrounds: [
    { id: 1, name: "Mountain View", image: "/placeholder.svg?height=80&width=80", active: false },
    { id: 2, name: "Space Station", image: "/placeholder.svg?height=80&width=80", active: true },
  ],
  avatars: [
    { id: 1, name: "Robot Learner", image: "/placeholder.svg?height=80&width=80", active: true },
    { id: 2, name: "Wizard Student", image: "/placeholder.svg?height=80&width=80", active: false },
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

export default function RoomPage() {
  const [selectedCategory, setSelectedCategory] = useState("themes")
  const [roomName, setRoomName] = useState("Alex's Study Space")
  const [isPublic, setIsPublic] = useState(false)
  const [draggedItem, setDraggedItem] = useState<any>(null)

  const categories = [
    { id: "themes", title: "Themes", icon: Palette, color: "from-purple-500 to-pink-600" },
    { id: "music", title: "Music", icon: Music, color: "from-green-500 to-emerald-600" },
    { id: "backgrounds", title: "Backgrounds", icon: ImageIcon, color: "from-blue-500 to-cyan-600" },
    { id: "avatars", title: "Avatars", icon: Home, color: "from-yellow-500 to-orange-600" },
  ]

  const activateItem = (category: string, itemId: number) => {
    ownedItems[category as keyof typeof ownedItems].forEach((item) => {
      item.active = item.id === itemId
    })
  }

  const shareRoom = () => {
    const shareUrl = `https://eduverse.app/room/${roomName.toLowerCase().replace(/\s+/g, "-")}`
    navigator.clipboard.writeText(shareUrl)
    alert("Room link copied to clipboard!")
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
                My Digital Room
              </h1>
              <div className="w-10" />
            </div>
          </div>

          <div className="p-6 space-y-6">
            {/* Room Controls */}
            <Card className="border-2 border-blue-200">
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  <span className="flex items-center">
                    <Home className="w-5 h-5 mr-2 text-blue-600" />
                    Room Settings
                  </span>
                  <div className="flex items-center space-x-2">
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => setIsPublic(!isPublic)}
                      className={isPublic ? "bg-green-50 border-green-300" : ""}
                    >
                      <Eye className="w-4 h-4 mr-1" />
                      {isPublic ? "Public" : "Private"}
                    </Button>
                    <Button variant="outline" size="sm" onClick={shareRoom}>
                      <Share2 className="w-4 h-4 mr-1" />
                      Share
                    </Button>
                  </div>
                </CardTitle>
                <CardDescription>Customize your personal learning space and share it with friends</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center space-x-4">
                  <input
                    type="text"
                    value={roomName}
                    onChange={(e) => setRoomName(e.target.value)}
                    className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Room name"
                  />
                  <Button className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700">
                    <Save className="w-4 h-4 mr-1" />
                    Save
                  </Button>
                </div>
              </CardContent>
            </Card>

            <div className="grid lg:grid-cols-3 gap-6">
              {/* Room Preview */}
              <div className="lg:col-span-2">
                <Card className="border-2 border-gray-200 h-96">
                  <CardHeader>
                    <CardTitle className="flex items-center justify-between">
                      <span>Room Preview</span>
                      <Button variant="outline" size="sm">
                        <RotateCcw className="w-4 h-4 mr-1" />
                        Reset
                      </Button>
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="p-0">
                    <div className="relative h-80 bg-gradient-to-br from-blue-100 to-purple-100 rounded-b-lg overflow-hidden">
                      {/* Background */}
                      <div className="absolute inset-0">
                        {ownedItems.backgrounds.find((bg) => bg.active) && (
                          <img
                            src={ownedItems.backgrounds.find((bg) => bg.active)?.image || "/placeholder.svg"}
                            alt="Background"
                            className="w-full h-full object-cover opacity-60"
                          />
                        )}
                      </div>

                      {/* Room Elements */}
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="text-center space-y-4">
                          {/* Avatar */}
                          {ownedItems.avatars.find((avatar) => avatar.active) && (
                            <div className="w-24 h-24 mx-auto">
                              <img
                                src={ownedItems.avatars.find((avatar) => avatar.active)?.image || "/placeholder.svg"}
                                alt="Avatar"
                                className="w-full h-full rounded-full border-4 border-white shadow-lg"
                              />
                            </div>
                          )}

                          {/* Room Name */}
                          <h2 className="text-2xl font-bold text-white drop-shadow-lg">{roomName}</h2>

                          {/* Theme Indicator */}
                          {ownedItems.themes.find((theme) => theme.active) && (
                            <Badge className="bg-white/20 text-white border-white/30">
                              Theme: {ownedItems.themes.find((theme) => theme.active)?.name}
                            </Badge>
                          )}

                          {/* Music Indicator */}
                          {ownedItems.music.find((music) => music.active) && (
                            <div className="flex items-center justify-center space-x-2 text-white">
                              <Music className="w-4 h-4" />
                              <span className="text-sm">{ownedItems.music.find((music) => music.active)?.name}</span>
                            </div>
                          )}
                        </div>
                      </div>

                      {/* Drag Drop Overlay */}
                      <div className="absolute inset-0 border-4 border-dashed border-white/30 rounded-lg flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity">
                        <div className="text-white text-center">
                          <div className="text-lg font-bold mb-2">Drag & Drop Items Here</div>
                          <div className="text-sm opacity-80">Customize your space</div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Customization Panel */}
              <div className="space-y-4">
                <Card className="border-2 border-purple-200">
                  <CardHeader>
                    <CardTitle className="flex items-center text-purple-600">
                      <Palette className="w-5 h-5 mr-2" />
                      Customize Room
                    </CardTitle>
                    <CardDescription>Drag and drop your owned items to customize your room</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {/* Category Tabs */}
                    <div className="grid grid-cols-2 gap-2">
                      {categories.map((category) => (
                        <Button
                          key={category.id}
                          variant={selectedCategory === category.id ? "default" : "outline"}
                          size="sm"
                          onClick={() => setSelectedCategory(category.id)}
                          className={
                            selectedCategory === category.id ? `bg-gradient-to-r ${category.color} text-white` : ""
                          }
                        >
                          <category.icon className="w-3 h-3 mr-1" />
                          {category.title}
                        </Button>
                      ))}
                    </div>

                    {/* Items Grid */}
                    <div className="grid grid-cols-2 gap-3">
                      {ownedItems[selectedCategory as keyof typeof ownedItems]?.map((item) => (
                        <div
                          key={item.id}
                          className={`relative p-3 border-2 rounded-lg cursor-pointer transition-all hover:scale-105 ${
                            item.active ? "border-green-400 bg-green-50" : "border-gray-200 hover:border-blue-300"
                          }`}
                          onClick={() => activateItem(selectedCategory, item.id)}
                          draggable
                          onDragStart={() => setDraggedItem(item)}
                        >
                          <img
                            src={item.image || "/placeholder.svg"}
                            alt={item.name}
                            className="w-full h-16 object-cover rounded mb-2"
                          />
                          <div className="text-xs font-medium text-center">{item.name}</div>
                          {item.active && (
                            <Badge className="absolute -top-1 -right-1 bg-green-500 text-white text-xs">Active</Badge>
                          )}
                        </div>
                      ))}
                    </div>

                    {ownedItems[selectedCategory as keyof typeof ownedItems]?.length === 0 && (
                      <div className="text-center py-8 text-gray-500">
                        <div className="text-lg mb-2">No items owned</div>
                        <div className="text-sm">Visit the Rewards page to unlock items</div>
                        <Link href="/rewards">
                          <Button className="mt-3 bg-gradient-to-r from-purple-500 to-pink-600">Get Rewards</Button>
                        </Link>
                      </div>
                    )}
                  </CardContent>
                </Card>

                {/* Room Stats */}
                <Card className="border-2 border-green-200">
                  <CardHeader>
                    <CardTitle className="text-green-600">Room Stats</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Visitors:</span>
                      <span className="font-bold">127</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Items Owned:</span>
                      <span className="font-bold">{Object.values(ownedItems).flat().length}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Room Level:</span>
                      <span className="font-bold text-green-600">Advanced</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Status:</span>
                      <Badge className={isPublic ? "bg-green-100 text-green-800" : "bg-gray-100 text-gray-800"}>
                        {isPublic ? "Public" : "Private"}
                      </Badge>
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
