import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { BookOpen, Brain, Trophy, Home, Sparkles, Shield } from "lucide-react"
import Link from "next/link"

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-green-50">
      {/* Navigation */}
      <nav className="border-b bg-white/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
              <BookOpen className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              EduVerse Passport
            </span>
          </div>
          <div className="flex items-center space-x-4">
            <Link href="/dashboard">
              <Button variant="outline">Dashboard</Button>
            </Link>
            <Link href="/admin">
              <Button variant="outline">Admin</Button>
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-20 text-center">
        <div className="max-w-4xl mx-auto">
          <Badge className="mb-6 bg-gradient-to-r from-blue-500 to-purple-600 text-white">
            🚀 Powered by Blockchain Technology
          </Badge>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-600 via-purple-600 to-green-600 bg-clip-text text-transparent">
            Your Education, Verified and Gamified — on the Blockchain
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Transform your learning journey with NFT certificates, AI-powered tutors, and a gamified experience that
            makes education engaging and verifiable.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Link href="/dashboard">
              <Button
                size="lg"
                className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-8 py-4 text-lg"
              >
                <Sparkles className="w-5 h-5 mr-2" />
                Start Learning
              </Button>
            </Link>
            <Link href="/admin">
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-purple-300 hover:bg-purple-50 px-8 py-4 text-lg bg-transparent"
              >
                <Shield className="w-5 h-5 mr-2" />
                Verify Certificate
              </Button>
            </Link>
          </div>

          {/* NFT Passport Visual */}
          <div className="relative max-w-md mx-auto">
            <div className="nft-glow bg-gradient-to-br from-blue-500 via-purple-600 to-green-500 p-1 rounded-2xl">
              <div className="bg-white rounded-xl p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-2">
                    <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                      <BookOpen className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-800">Student ID NFT</h3>
                      <p className="text-sm text-gray-500">#EDU-2024-001</p>
                    </div>
                  </div>
                  <Badge className="bg-green-100 text-green-800">Verified</Badge>
                </div>
                <div className="space-y-2 text-left">
                  <div className="flex justify-between">
                    <span className="text-gray-600">XP Points:</span>
                    <span className="font-bold text-purple-600">2,450</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Certificates:</span>
                    <span className="font-bold text-blue-600">12</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Level:</span>
                    <span className="font-bold text-green-600">Advanced</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="container mx-auto px-4 py-20">
        <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
          Revolutionizing Education
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* NFT Education Passport */}
          <Card className="border-2 border-blue-200 hover:border-blue-400 transition-colors hover:shadow-lg">
            <CardHeader className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <CardTitle className="text-blue-600">NFT Education Passport</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-center">
                Secure, verifiable digital certificates stored on the blockchain. Your achievements are permanent and
                tamper-proof.
              </CardDescription>
            </CardContent>
          </Card>

          {/* AI Learning Agents */}
          <Card className="border-2 border-purple-200 hover:border-purple-400 transition-colors hover:shadow-lg">
            <CardHeader className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Brain className="w-8 h-8 text-white" />
              </div>
              <CardTitle className="text-purple-600">AI Learning Agents</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-center">
                Personalized AI tutors that adapt to your learning style and pace. Get instant feedback and guidance.
              </CardDescription>
            </CardContent>
          </Card>

          {/* NFT Rewards & Marketplace */}
          <Card className="border-2 border-green-200 hover:border-green-400 transition-colors hover:shadow-lg">
            <CardHeader className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Trophy className="w-8 h-8 text-white" />
              </div>
              <CardTitle className="text-green-600">NFT Rewards & Marketplace</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-center">
                Earn NFT rewards for completing courses and trade them in our marketplace. Learning has never been this
                rewarding.
              </CardDescription>
            </CardContent>
          </Card>

          {/* Personalized Digital Rooms */}
          <Card className="border-2 border-orange-200 hover:border-orange-400 transition-colors hover:shadow-lg">
            <CardHeader className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-orange-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Home className="w-8 h-8 text-white" />
              </div>
              <CardTitle className="text-orange-600">Personalized Digital Rooms</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-center">
                Create and customize your own digital learning space. Showcase your achievements and express your
                personality.
              </CardDescription>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-gradient-to-r from-blue-600 via-purple-600 to-green-600 py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 text-center text-white">
            <div>
              <div className="text-4xl font-bold mb-2">10,000+</div>
              <div className="text-xl opacity-90">Students Enrolled</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">50,000+</div>
              <div className="text-xl opacity-90">NFT Certificates Issued</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">500+</div>
              <div className="text-xl opacity-90">Partner Institutions</div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                <BookOpen className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold">EduVerse Passport</span>
            </div>
            <div className="text-gray-400">© 2024 EduVerse Passport. Powered by blockchain technology.</div>
          </div>
        </div>
      </footer>
    </div>
  )
}
