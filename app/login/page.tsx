"use client"

import type React from "react"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { useToast } from "@/components/ui/use-toast"
import Link from "next/link"
import Image from "next/image"

export default function LoginPage() {
  const router = useRouter()
  const { toast } = useToast()
  const [loading, setLoading] = useState(false)
  const [credentials, setCredentials] = useState({
    loginId: "",
    password: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCredentials({
      ...credentials,
      [e.target.name]: e.target.value,
    })
  }

  const handleLogin = async (userType: string) => {
    setLoading(true)

    // In a real application, this would be an API call
    // For demo purposes, we're using hardcoded credentials
    const validCredentials = {
      student: { loginId: "101", password: "student123" },
      faculty: { loginId: "201", password: "faculty123" },
      admin: { loginId: "301", password: "admin123" },
      principal: { loginId: "401", password: "principal123" },
    }

    setTimeout(() => {
      const valid = validCredentials[userType as keyof typeof validCredentials]

      if (credentials.loginId === valid.loginId && credentials.password === valid.password) {
        toast({
          title: "Login Successful",
          description: `Welcome, ${userType}!`,
        })

        // Redirect to the appropriate dashboard
        router.push(`/dashboard/${userType}`)
      } else {
        toast({
          title: "Login Failed",
          description: "Invalid credentials. Please try again.",
          variant: "destructive",
        })
      }

      setLoading(false)
    }, 1000)
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-blue-50 to-white p-4">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <Link href="/" className="inline-block">
            <div className="flex items-center justify-center gap-2">
              <Image
                src="/placeholder.svg?height=40&width=40"
                alt="Logo"
                width={40}
                height={40}
                className="rounded-md"
              />
              <h1 className="text-2xl font-bold text-blue-800">EduConnect</h1>
            </div>
          </Link>
        </div>

        <Card>
          <CardHeader>
            <CardTitle className="text-2xl text-center">Login</CardTitle>
            <CardDescription className="text-center">Access your account based on your role</CardDescription>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue="student">
              <TabsList className="grid grid-cols-4 mb-6">
                <TabsTrigger value="student">Student</TabsTrigger>
                <TabsTrigger value="faculty">Faculty</TabsTrigger>
                <TabsTrigger value="admin">Admin</TabsTrigger>
                <TabsTrigger value="principal">Principal</TabsTrigger>
              </TabsList>

              <TabsContent value="student">
                <form
                  onSubmit={(e) => {
                    e.preventDefault()
                    handleLogin("student")
                  }}
                >
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="student-id">Student ID</Label>
                      <Input
                        id="student-id"
                        name="loginId"
                        placeholder="Enter your student ID"
                        value={credentials.loginId}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="student-password">Password</Label>
                      <Input
                        id="student-password"
                        name="password"
                        type="password"
                        placeholder="Enter your password"
                        value={credentials.password}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <Button type="submit" className="w-full" disabled={loading}>
                      {loading ? "Logging in..." : "Login as Student"}
                    </Button>
                  </div>
                </form>
              </TabsContent>

              <TabsContent value="faculty">
                <form
                  onSubmit={(e) => {
                    e.preventDefault()
                    handleLogin("faculty")
                  }}
                >
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="faculty-id">Faculty ID</Label>
                      <Input
                        id="faculty-id"
                        name="loginId"
                        placeholder="Enter your faculty ID"
                        value={credentials.loginId}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="faculty-password">Password</Label>
                      <Input
                        id="faculty-password"
                        name="password"
                        type="password"
                        placeholder="Enter your password"
                        value={credentials.password}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <Button type="submit" className="w-full" disabled={loading}>
                      {loading ? "Logging in..." : "Login as Faculty"}
                    </Button>
                  </div>
                </form>
              </TabsContent>

              <TabsContent value="admin">
                <form
                  onSubmit={(e) => {
                    e.preventDefault()
                    handleLogin("admin")
                  }}
                >
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="admin-id">Admin ID</Label>
                      <Input
                        id="admin-id"
                        name="loginId"
                        placeholder="Enter your admin ID"
                        value={credentials.loginId}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="admin-password">Password</Label>
                      <Input
                        id="admin-password"
                        name="password"
                        type="password"
                        placeholder="Enter your password"
                        value={credentials.password}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <Button type="submit" className="w-full" disabled={loading}>
                      {loading ? "Logging in..." : "Login as Admin"}
                    </Button>
                  </div>
                </form>
              </TabsContent>

              <TabsContent value="principal">
                <form
                  onSubmit={(e) => {
                    e.preventDefault()
                    handleLogin("principal")
                  }}
                >
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="principal-id">Principal ID</Label>
                      <Input
                        id="principal-id"
                        name="loginId"
                        placeholder="Enter your principal ID"
                        value={credentials.loginId}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="principal-password">Password</Label>
                      <Input
                        id="principal-password"
                        name="password"
                        type="password"
                        placeholder="Enter your password"
                        value={credentials.password}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <Button type="submit" className="w-full" disabled={loading}>
                      {loading ? "Logging in..." : "Login as Principal"}
                    </Button>
                  </div>
                </form>
              </TabsContent>
            </Tabs>
          </CardContent>
          <CardFooter className="flex justify-center">
            <p className="text-sm text-gray-500">
              Demo Credentials:
              <br />
              Student: 101 / student123
              <br />
              Faculty: 201 / faculty123
              <br />
              Admin: 301 / admin123
              <br />
              Principal: 401 / principal123
            </p>
          </CardFooter>
        </Card>
      </div>
    </div>
  )
}

