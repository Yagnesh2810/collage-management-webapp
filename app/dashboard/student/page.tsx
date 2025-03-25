"use client"

import DashboardLayout from "@/components/dashboard-layout"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { BookOpen, Calendar, CheckSquare, Clock, FileText } from "lucide-react"

export default function StudentDashboard() {
  // Mock data
  const courses = [
    { id: 1, name: "Introduction to Computer Science", progress: 75, instructor: "Dr. Jane Smith" },
    { id: 2, name: "Calculus I", progress: 60, instructor: "Prof. Michael Brown" },
    { id: 3, name: "Physics 101", progress: 90, instructor: "Dr. Robert Johnson" },
    { id: 4, name: "English Composition", progress: 40, instructor: "Prof. Emily Davis" },
  ]

  const upcomingAssignments = [
    { id: 1, title: "Programming Assignment #3", course: "Introduction to Computer Science", dueDate: "2023-11-15" },
    { id: 2, title: "Problem Set 5", course: "Calculus I", dueDate: "2023-11-18" },
    { id: 3, title: "Lab Report", course: "Physics 101", dueDate: "2023-11-20" },
  ]

  const upcomingClasses = [
    { id: 1, course: "Introduction to Computer Science", time: "10:00 AM - 11:30 AM", room: "Room 101" },
    { id: 2, course: "Calculus I", time: "1:00 PM - 2:30 PM", room: "Room 203" },
    { id: 3, course: "Physics 101", time: "3:00 PM - 4:30 PM", room: "Lab 3B" },
  ]

  const attendanceData = [
    { course: "Introduction to Computer Science", percentage: 92 },
    { course: "Calculus I", percentage: 85 },
    { course: "Physics 101", percentage: 95 },
    { course: "English Composition", percentage: 78 },
  ]

  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    return date.toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" })
  }

  return (
    <DashboardLayout userType="student">
      <div className="space-y-8">
        <div>
          <h1 className="text-3xl font-bold">Student Dashboard</h1>
          <p className="text-gray-500">Welcome back, John Doe</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-gray-500">Courses</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center">
                <BookOpen className="h-5 w-5 text-blue-500 mr-2" />
                <span className="text-2xl font-bold">{courses.length}</span>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-gray-500">Assignments</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center">
                <FileText className="h-5 w-5 text-green-500 mr-2" />
                <span className="text-2xl font-bold">{upcomingAssignments.length}</span>
                <span className="text-sm text-gray-500 ml-2">pending</span>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-gray-500">Today's Classes</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center">
                <Calendar className="h-5 w-5 text-purple-500 mr-2" />
                <span className="text-2xl font-bold">{upcomingClasses.length}</span>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-gray-500">Average Attendance</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center">
                <CheckSquare className="h-5 w-5 text-amber-500 mr-2" />
                <span className="text-2xl font-bold">
                  {Math.round(attendanceData.reduce((acc, curr) => acc + curr.percentage, 0) / attendanceData.length)}%
                </span>
              </div>
            </CardContent>
          </Card>
        </div>

        <Tabs defaultValue="courses">
          <TabsList className="mb-4">
            <TabsTrigger value="courses">My Courses</TabsTrigger>
            <TabsTrigger value="assignments">Upcoming Assignments</TabsTrigger>
            <TabsTrigger value="schedule">Today's Schedule</TabsTrigger>
            <TabsTrigger value="attendance">Attendance</TabsTrigger>
          </TabsList>

          <TabsContent value="courses">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {courses.map((course) => (
                <Card key={course.id}>
                  <CardHeader>
                    <CardTitle>{course.name}</CardTitle>
                    <CardDescription>Instructor: {course.instructor}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <span className="text-sm">Progress</span>
                        <span className="text-sm font-medium">{course.progress}%</span>
                      </div>
                      <Progress value={course.progress} />
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="assignments">
            <div className="space-y-4">
              {upcomingAssignments.map((assignment) => (
                <Card key={assignment.id}>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-lg">{assignment.title}</CardTitle>
                    <CardDescription>{assignment.course}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center text-amber-600">
                      <Clock className="h-4 w-4 mr-2" />
                      <span>Due: {formatDate(assignment.dueDate)}</span>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="schedule">
            <div className="space-y-4">
              {upcomingClasses.map((classItem) => (
                <Card key={classItem.id}>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-lg">{classItem.course}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center text-gray-600 mb-2">
                      <Clock className="h-4 w-4 mr-2" />
                      <span>{classItem.time}</span>
                    </div>
                    <div className="flex items-center text-gray-600">
                      <Calendar className="h-4 w-4 mr-2" />
                      <span>{classItem.room}</span>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="attendance">
            <div className="space-y-4">
              {attendanceData.map((item, index) => (
                <Card key={index}>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-lg">{item.course}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <span className="text-sm">Attendance Rate</span>
                        <span className="text-sm font-medium">{item.percentage}%</span>
                      </div>
                      <Progress
                        value={item.percentage}
                        className={item.percentage < 80 ? "bg-red-100" : "bg-green-100"}
                      />
                      <p className="text-xs text-gray-500 mt-1">
                        {item.percentage < 80
                          ? "Attendance below required minimum (80%)"
                          : "Attendance meets requirements"}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </DashboardLayout>
  )
}

