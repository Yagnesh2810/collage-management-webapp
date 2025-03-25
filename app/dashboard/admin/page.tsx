"use client"

import DashboardLayout from "@/components/dashboard-layout"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Users, UserPlus, BookOpenCheck, Building } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"

export default function AdminDashboard() {
  // Mock data
  const stats = {
    totalStudents: 1250,
    totalFaculty: 75,
    totalCourses: 48,
    totalDepartments: 8,
  }

  const recentUsers = [
    { id: 1, name: "Alice Johnson", role: "Student", department: "Computer Science", avatar: "AJ", date: "2023-11-10" },
    { id: 2, name: "Dr. Robert Smith", role: "Faculty", department: "Mathematics", avatar: "RS", date: "2023-11-09" },
    { id: 3, name: "Emily Davis", role: "Student", department: "Physics", avatar: "ED", date: "2023-11-08" },
    { id: 4, name: "Prof. Michael Brown", role: "Faculty", department: "Chemistry", avatar: "MB", date: "2023-11-07" },
  ]

  const departments = [
    { id: 1, name: "Computer Science", students: 320, faculty: 18 },
    { id: 2, name: "Mathematics", students: 280, faculty: 15 },
    { id: 3, name: "Physics", students: 210, faculty: 12 },
    { id: 4, name: "Chemistry", students: 190, faculty: 10 },
    { id: 5, name: "Biology", students: 250, faculty: 14 },
  ]

  const systemStatus = [
    { name: "Server Load", value: 65, status: "normal" },
    { name: "Database Usage", value: 78, status: "normal" },
    { name: "Storage", value: 42, status: "normal" },
    { name: "Network", value: 25, status: "normal" },
  ]

  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    return date.toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" })
  }

  return (
    <DashboardLayout userType="admin">
      <div className="space-y-8">
        <div>
          <h1 className="text-3xl font-bold">Admin Dashboard</h1>
          <p className="text-gray-500">Welcome back, Admin User</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-gray-500">Total Students</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center">
                <Users className="h-5 w-5 text-blue-500 mr-2" />
                <span className="text-2xl font-bold">{stats.totalStudents}</span>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-gray-500">Total Faculty</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center">
                <UserPlus className="h-5 w-5 text-green-500 mr-2" />
                <span className="text-2xl font-bold">{stats.totalFaculty}</span>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-gray-500">Total Courses</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center">
                <BookOpenCheck className="h-5 w-5 text-purple-500 mr-2" />
                <span className="text-2xl font-bold">{stats.totalCourses}</span>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-gray-500">Departments</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center">
                <Building className="h-5 w-5 text-amber-500 mr-2" />
                <span className="text-2xl font-bold">{stats.totalDepartments}</span>
              </div>
            </CardContent>
          </Card>
        </div>

        <Tabs defaultValue="users">
          <TabsList className="mb-4">
            <TabsTrigger value="users">Recent Users</TabsTrigger>
            <TabsTrigger value="departments">Departments</TabsTrigger>
            <TabsTrigger value="system">System Status</TabsTrigger>
          </TabsList>

          <TabsContent value="users">
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <h3 className="text-lg font-medium">Recently Added Users</h3>
                <Button variant="outline">View All Users</Button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {recentUsers.map((user) => (
                  <Card key={user.id}>
                    <CardContent className="p-4">
                      <div className="flex items-center space-x-4">
                        <Avatar>
                          <AvatarImage src={`/placeholder.svg?height=40&width=40`} alt={user.name} />
                          <AvatarFallback>{user.avatar}</AvatarFallback>
                        </Avatar>
                        <div className="flex-1">
                          <p className="font-medium">{user.name}</p>
                          <p className="text-sm text-gray-500">
                            {user.role} - {user.department}
                          </p>
                        </div>
                        <div className="text-sm text-gray-500">Added: {formatDate(user.date)}</div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </TabsContent>

          <TabsContent value="departments">
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <h3 className="text-lg font-medium">Department Overview</h3>
                <Button variant="outline">Manage Departments</Button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {departments.map((dept) => (
                  <Card key={dept.id}>
                    <CardHeader>
                      <CardTitle>{dept.name}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <div className="flex justify-between items-center">
                          <span className="text-sm text-gray-500">Students</span>
                          <span className="font-medium">{dept.students}</span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-sm text-gray-500">Faculty</span>
                          <span className="font-medium">{dept.faculty}</span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-sm text-gray-500">Student-Faculty Ratio</span>
                          <span className="font-medium">{(dept.students / dept.faculty).toFixed(1)}:1</span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </TabsContent>

          <TabsContent value="system">
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <h3 className="text-lg font-medium">System Health</h3>
                <Button variant="outline">System Settings</Button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {systemStatus.map((item, index) => (
                  <Card key={index}>
                    <CardHeader className="pb-2">
                      <CardTitle className="text-lg">{item.name}</CardTitle>
                      <CardDescription>
                        Status:{" "}
                        <span className={`font-medium ${item.status === "normal" ? "text-green-500" : "text-red-500"}`}>
                          {item.status.charAt(0).toUpperCase() + item.status.slice(1)}
                        </span>
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-2">
                        <div className="flex justify-between">
                          <span className="text-sm">Usage</span>
                          <span className="text-sm font-medium">{item.value}%</span>
                        </div>
                        <Progress
                          value={item.value}
                          className={item.value < 50 ? "bg-green-100" : item.value < 80 ? "bg-amber-100" : "bg-red-100"}
                        />
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </DashboardLayout>
  )
}

