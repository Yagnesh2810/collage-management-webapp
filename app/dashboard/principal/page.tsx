"use client"

import DashboardLayout from "@/components/dashboard-layout"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { BarChart, Building, GraduationCap, LineChart, PieChart, Users, UserPlus } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"

export default function PrincipalDashboard() {
  // Mock data
  const stats = {
    totalStudents: 1250,
    totalFaculty: 75,
    totalDepartments: 8,
    averageAttendance: 87,
  }

  const departmentPerformance = [
    { id: 1, name: "Computer Science", passRate: 92, attendance: 88, satisfaction: 4.5 },
    { id: 2, name: "Mathematics", passRate: 88, attendance: 85, satisfaction: 4.2 },
    { id: 3, name: "Physics", passRate: 85, attendance: 82, satisfaction: 4.0 },
    { id: 4, name: "Chemistry", passRate: 90, attendance: 86, satisfaction: 4.3 },
    { id: 5, name: "Biology", passRate: 91, attendance: 84, satisfaction: 4.4 },
  ]

  const topFaculty = [
    { id: 1, name: "Dr. Jane Smith", department: "Computer Science", rating: 4.9, students: 120, avatar: "JS" },
    { id: 2, name: "Prof. Michael Brown", department: "Mathematics", rating: 4.8, students: 105, avatar: "MB" },
    { id: 3, name: "Dr. Emily Davis", department: "Physics", rating: 4.7, students: 95, avatar: "ED" },
    { id: 4, name: "Prof. Robert Johnson", department: "Chemistry", rating: 4.7, students: 100, avatar: "RJ" },
  ]

  const recentReports = [
    { id: 1, title: "Monthly Attendance Report", date: "2023-11-01", type: "Attendance" },
    { id: 2, title: "Semester Academic Performance", date: "2023-10-15", type: "Academic" },
    { id: 3, title: "Faculty Evaluation Summary", date: "2023-10-10", type: "Evaluation" },
    { id: 4, title: "Infrastructure Utilization Report", date: "2023-10-05", type: "Infrastructure" },
  ]

  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    return date.toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" })
  }

  return (
    <DashboardLayout userType="principal">
      <div className="space-y-8">
        <div>
          <h1 className="text-3xl font-bold">Principal Dashboard</h1>
          <p className="text-gray-500">Welcome back, Dr. Robert Johnson</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-gray-500">Total Students</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center">
                <GraduationCap className="h-5 w-5 text-blue-500 mr-2" />
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
              <CardTitle className="text-sm font-medium text-gray-500">Departments</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center">
                <Building className="h-5 w-5 text-purple-500 mr-2" />
                <span className="text-2xl font-bold">{stats.totalDepartments}</span>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-gray-500">Avg. Attendance</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center">
                <Users className="h-5 w-5 text-amber-500 mr-2" />
                <span className="text-2xl font-bold">{stats.averageAttendance}%</span>
              </div>
            </CardContent>
          </Card>
        </div>

        <Tabs defaultValue="departments">
          <TabsList className="mb-4">
            <TabsTrigger value="departments">Department Performance</TabsTrigger>
            <TabsTrigger value="faculty">Top Faculty</TabsTrigger>
            <TabsTrigger value="reports">Recent Reports</TabsTrigger>
          </TabsList>

          <TabsContent value="departments">
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <h3 className="text-lg font-medium">Department Performance Overview</h3>
                <Button variant="outline">View Detailed Analytics</Button>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {departmentPerformance.map((dept) => (
                  <Card key={dept.id}>
                    <CardHeader>
                      <CardTitle>{dept.name}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <div>
                          <div className="flex justify-between mb-1">
                            <span className="text-sm">Pass Rate</span>
                            <span className="text-sm font-medium">{dept.passRate}%</span>
                          </div>
                          <Progress value={dept.passRate} className="bg-blue-100" />
                        </div>

                        <div>
                          <div className="flex justify-between mb-1">
                            <span className="text-sm">Attendance</span>
                            <span className="text-sm font-medium">{dept.attendance}%</span>
                          </div>
                          <Progress value={dept.attendance} className="bg-green-100" />
                        </div>

                        <div className="flex justify-between items-center">
                          <span className="text-sm">Student Satisfaction</span>
                          <span className="text-sm font-medium">{dept.satisfaction}/5.0</span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </TabsContent>

          <TabsContent value="faculty">
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <h3 className="text-lg font-medium">Top Performing Faculty</h3>
                <Button variant="outline">View All Faculty</Button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {topFaculty.map((faculty) => (
                  <Card key={faculty.id}>
                    <CardContent className="p-4">
                      <div className="flex items-center space-x-4">
                        <Avatar>
                          <AvatarImage src={`/placeholder.svg?height=40&width=40`} alt={faculty.name} />
                          <AvatarFallback>{faculty.avatar}</AvatarFallback>
                        </Avatar>
                        <div className="flex-1">
                          <p className="font-medium">{faculty.name}</p>
                          <p className="text-sm text-gray-500">{faculty.department}</p>
                        </div>
                        <div className="text-right">
                          <p className="font-medium">{faculty.rating}/5.0</p>
                          <p className="text-sm text-gray-500">{faculty.students} Students</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </TabsContent>

          <TabsContent value="reports">
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <h3 className="text-lg font-medium">Recent Reports</h3>
                <Button variant="outline">Generate New Report</Button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {recentReports.map((report) => (
                  <Card key={report.id}>
                    <CardContent className="p-4">
                      <div className="flex items-center space-x-4">
                        {report.type === "Attendance" && <BarChart className="h-10 w-10 text-blue-500" />}
                        {report.type === "Academic" && <LineChart className="h-10 w-10 text-green-500" />}
                        {report.type === "Evaluation" && <PieChart className="h-10 w-10 text-purple-500" />}
                        {report.type === "Infrastructure" && <Building className="h-10 w-10 text-amber-500" />}

                        <div className="flex-1">
                          <p className="font-medium">{report.title}</p>
                          <p className="text-sm text-gray-500">Generated on {formatDate(report.date)}</p>
                        </div>

                        <Button variant="outline" size="sm">
                          View
                        </Button>
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

