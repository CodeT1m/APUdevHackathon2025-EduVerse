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
  Shield,
  CheckCircle,
  XCircle,
  Clock,
  FileText,
  User,
  Calendar,
  Award,
  History,
  Zap,
} from "lucide-react"
import Link from "next/link"

const sidebarItems = [
  { title: "Dashboard", url: "/admin", icon: Shield, active: true },
  { title: "Pending Reviews", url: "/admin/pending", icon: Clock },
  { title: "Approved Certificates", url: "/admin/approved", icon: CheckCircle },
  { title: "History Log", url: "/admin/history", icon: History },
]

const pendingCertifications = [
  {
    id: 1,
    studentName: "Emma Wilson",
    studentWallet: "0x742d35Cc6634C0532925a3b8D4",
    certificateTitle: "Advanced React Development",
    issuer: "TechBootcamp Pro",
    submittedDate: "2024-01-20",
    fileType: "PDF",
    fileSize: "2.4 MB",
    status: "pending",
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    id: 2,
    studentName: "Marcus Chen",
    studentWallet: "0x8f3e2b1a9c7d5e4f6a8b9c0d1e",
    certificateTitle: "Machine Learning Fundamentals",
    issuer: "AI Institute",
    submittedDate: "2024-01-19",
    fileType: "PNG",
    fileSize: "1.8 MB",
    status: "pending",
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    id: 3,
    studentName: "Sofia Rodriguez",
    studentWallet: "0x1a2b3c4d5e6f7a8b9c0d1e2f3a",
    certificateTitle: "Blockchain Development",
    issuer: "CryptoAcademy",
    submittedDate: "2024-01-18",
    fileType: "PDF",
    fileSize: "3.1 MB",
    status: "pending",
    image: "/placeholder.svg?height=200&width=300",
  },
]

const recentApprovals = [
  {
    id: 101,
    studentName: "Alex Johnson",
    certificateTitle: "JavaScript Fundamentals",
    approvedDate: "2024-01-19",
    nftMinted: true,
    tokenId: "EDU-2024-001",
  },
  {
    id: 102,
    studentName: "Sarah Kim",
    certificateTitle: "Python for Data Science",
    approvedDate: "2024-01-18",
    nftMinted: true,
    tokenId: "EDU-2024-002",
  },
  {
    id: 103,
    studentName: "Mike Davis",
    certificateTitle: "Web Design Basics",
    approvedDate: "2024-01-17",
    nftMinted: false,
    tokenId: null,
  },
]

function AppSidebar() {
  return (
    <Sidebar>
      <SidebarHeader className="border-b border-gray-200">
        <div className="flex items-center space-x-2 p-4">
          <div className="w-8 h-8 bg-gradient-to-r from-red-500 to-orange-600 rounded-lg flex items-center justify-center">
            <Shield className="w-5 h-5 text-white" />
          </div>
          <span className="text-lg font-bold bg-gradient-to-r from-red-600 to-orange-600 bg-clip-text text-transparent">
            Admin Panel
          </span>
        </div>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Admin Tools</SidebarGroupLabel>
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
        <SidebarGroup>
          <SidebarGroupLabel>Quick Actions</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton asChild>
                  <Link href="/dashboard">
                    <BookOpen className="w-4 h-4" />
                    <span>Student View</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  )
}

export default function AdminPage() {
  const [selectedCertificate, setSelectedCertificate] = useState<any>(null)
  const [showMintModal, setShowMintModal] = useState(false)

  const approveCertificate = (certId: number) => {
    const cert = pendingCertifications.find((c) => c.id === certId)
    if (cert) {
      cert.status = "approved"
      setShowMintModal(true)
      setSelectedCertificate(cert)
    }
  }

  const rejectCertificate = (certId: number) => {
    const cert = pendingCertifications.find((c) => c.id === certId)
    if (cert) {
      cert.status = "rejected"
    }
  }

  const mintNFT = () => {
    setShowMintModal(false)
    // Add NFT minting logic here
    alert("NFT Certificate minted successfully!")
  }

  return (
    <SidebarProvider>
      <div className="flex min-h-screen bg-gradient-to-br from-red-50 via-orange-50 to-yellow-50">
        <AppSidebar />
        <main className="flex-1">
          <div className="border-b bg-white/80 backdrop-blur-sm sticky top-0 z-40">
            <div className="flex items-center justify-between p-4">
              <SidebarTrigger />
              <h1 className="text-2xl font-bold bg-gradient-to-r from-red-600 to-orange-600 bg-clip-text text-transparent">
                Teacher Verification Panel
              </h1>
              <div className="w-10" />
            </div>
          </div>

          <div className="p-6 space-y-6">
            {/* Stats Overview */}
            <div className="grid md:grid-cols-4 gap-6">
              <Card className="border-2 border-orange-200">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-2xl font-bold text-orange-600">
                        {pendingCertifications.filter((c) => c.status === "pending").length}
                      </div>
                      <div className="text-gray-600">Pending Reviews</div>
                    </div>
                    <Clock className="w-8 h-8 text-orange-500" />
                  </div>
                </CardContent>
              </Card>

              <Card className="border-2 border-green-200">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-2xl font-bold text-green-600">47</div>
                      <div className="text-gray-600">Approved Today</div>
                    </div>
                    <CheckCircle className="w-8 h-8 text-green-500" />
                  </div>
                </CardContent>
              </Card>

              <Card className="border-2 border-blue-200">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-2xl font-bold text-blue-600">1,247</div>
                      <div className="text-gray-600">Total Verified</div>
                    </div>
                    <Award className="w-8 h-8 text-blue-500" />
                  </div>
                </CardContent>
              </Card>

              <Card className="border-2 border-purple-200">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-2xl font-bold text-purple-600">892</div>
                      <div className="text-gray-600">NFTs Minted</div>
                    </div>
                    <Zap className="w-8 h-8 text-purple-500" />
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Pending Certifications */}
            <Card className="border-2 border-orange-200">
              <CardHeader className="bg-gradient-to-r from-orange-500 to-red-600 text-white rounded-t-lg">
                <CardTitle className="flex items-center">
                  <Clock className="w-5 h-5 mr-2" />
                  Pending Certificate Reviews
                </CardTitle>
                <CardDescription className="text-orange-100">
                  Review and approve student-submitted certificates
                </CardDescription>
              </CardHeader>
              <CardContent className="p-6">
                <div className="space-y-6">
                  {pendingCertifications
                    .filter((cert) => cert.status === "pending")
                    .map((cert) => (
                      <Card key={cert.id} className="border-2 border-gray-200 hover:shadow-lg transition-shadow">
                        <CardContent className="p-6">
                          <div className="grid md:grid-cols-3 gap-6">
                            {/* Certificate Preview */}
                            <div className="space-y-3">
                              <img
                                src={cert.image || "/placeholder.svg"}
                                alt={cert.certificateTitle}
                                className="w-full h-40 object-cover rounded-lg border-2 border-gray-200"
                              />
                              <div className="flex items-center space-x-2">
                                <FileText className="w-4 h-4 text-gray-500" />
                                <span className="text-sm text-gray-600">
                                  {cert.fileType} • {cert.fileSize}
                                </span>
                              </div>
                            </div>

                            {/* Certificate Details */}
                            <div className="space-y-3">
                              <div>
                                <h3 className="text-lg font-bold text-gray-800">{cert.certificateTitle}</h3>
                                <p className="text-gray-600">Issued by {cert.issuer}</p>
                              </div>

                              <div className="space-y-2">
                                <div className="flex items-center space-x-2">
                                  <User className="w-4 h-4 text-gray-500" />
                                  <span className="text-sm">{cert.studentName}</span>
                                </div>
                                <div className="flex items-center space-x-2">
                                  <Calendar className="w-4 h-4 text-gray-500" />
                                  <span className="text-sm">Submitted {cert.submittedDate}</span>
                                </div>
                                <div className="text-xs text-gray-500 font-mono">Wallet: {cert.studentWallet}...</div>
                              </div>

                              <Badge className="bg-yellow-100 text-yellow-800">Pending Review</Badge>
                            </div>

                            {/* Action Buttons */}
                            <div className="flex flex-col space-y-3">
                              <Button
                                onClick={() => approveCertificate(cert.id)}
                                className="bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white"
                              >
                                <CheckCircle className="w-4 h-4 mr-2" />
                                Approve & Mint NFT
                              </Button>

                              <Button
                                variant="outline"
                                onClick={() => rejectCertificate(cert.id)}
                                className="border-red-300 text-red-600 hover:bg-red-50"
                              >
                                <XCircle className="w-4 h-4 mr-2" />
                                Reject
                              </Button>

                              <Button variant="outline" size="sm">
                                <FileText className="w-4 h-4 mr-2" />
                                View Full Document
                              </Button>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                </div>
              </CardContent>
            </Card>

            {/* Recent Approvals */}
            <Card className="border-2 border-green-200">
              <CardHeader>
                <CardTitle className="flex items-center text-green-600">
                  <CheckCircle className="w-5 h-5 mr-2" />
                  Recent Approvals
                </CardTitle>
                <CardDescription>Recently approved certificates and their NFT status</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {recentApprovals.map((approval) => (
                    <div
                      key={approval.id}
                      className="flex items-center justify-between p-4 border border-gray-200 rounded-lg"
                    >
                      <div className="flex items-center space-x-4">
                        <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                          <CheckCircle className="w-5 h-5 text-green-600" />
                        </div>
                        <div>
                          <h4 className="font-medium">{approval.certificateTitle}</h4>
                          <p className="text-sm text-gray-600">
                            {approval.studentName} • Approved {approval.approvedDate}
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-3">
                        {approval.nftMinted ? (
                          <Badge className="bg-blue-100 text-blue-800">NFT Minted: {approval.tokenId}</Badge>
                        ) : (
                          <Button size="sm" className="bg-gradient-to-r from-blue-500 to-purple-600">
                            <Zap className="w-3 h-3 mr-1" />
                            Mint NFT
                          </Button>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* NFT Minting Modal */}
            {showMintModal && selectedCertificate && (
              <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
                <Card className="w-full max-w-md mx-4">
                  <CardHeader className="bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-t-lg">
                    <CardTitle className="flex items-center">
                      <Zap className="w-5 h-5 mr-2" />
                      Mint NFT Certificate
                    </CardTitle>
                    <CardDescription className="text-blue-100">
                      Create blockchain certificate for approved submission
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="p-6">
                    <div className="space-y-4">
                      <div>
                        <h3 className="font-bold">{selectedCertificate.certificateTitle}</h3>
                        <p className="text-gray-600">Student: {selectedCertificate.studentName}</p>
                        <p className="text-sm text-gray-500">Wallet: {selectedCertificate.studentWallet}...</p>
                      </div>

                      <div className="bg-blue-50 p-4 rounded-lg">
                        <h4 className="font-medium text-blue-800 mb-2">NFT Details</h4>
                        <div className="text-sm space-y-1">
                          <div>Token ID: EDU-2024-{String(selectedCertificate.id).padStart(3, "0")}</div>
                          <div>Blockchain: Ethereum</div>
                          <div>Gas Fee: ~$5.50</div>
                        </div>
                      </div>

                      <div className="flex space-x-3">
                        <Button variant="outline" onClick={() => setShowMintModal(false)} className="flex-1">
                          Cancel
                        </Button>
                        <Button
                          onClick={mintNFT}
                          className="flex-1 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700"
                        >
                          <Zap className="w-4 h-4 mr-1" />
                          Mint NFT
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
