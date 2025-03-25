"use client"

import DashboardLayout from "@/components/dashboard-layout"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { BookOpen, Calendar, Clock, FileText, Users } from "lucide-react"

export default function FacultyDashboard() {
  // Mock data
  const courses = [
    { id: 1, name: "Introduction to Computer Science", students: 35, code: "CS101" },
    { id: 2, name: "Data Structures and Algorithms", students: 28, code: "CS201" },
    { id: 3, name: "Database Management Systems", students: 30, code: "CS301" },
  ]

  const upcomingClasses = [
    { id: 1, course: "Introduction to Computer Science", time: "10:00 AM - 11:30 AM", room: "Room 101" },
    { id: 2, course: "Data Structures and Algorithms", time: "1:00 PM - 2:30 PM", room: "Room 203" },
    { id: 3, course: "Database Management Systems", time: "3:00 PM - 4:30 PM", room: "Lab 3B" },
  ]

  const pendingAssignments = [
    {
      id: 1,
      title: "Programming Assignment #3",
      course: "Introduction to Computer Science",
      submissions: 25,
      total: 35,
    },
    { id: 2, title: "Algorithm Analysis", course: "Data Structures and Algorithms", submissions: 20, total: 28 },
    { id: 3, title: "Database Design Project", course: "Database Management Systems", submissions: 15, total: 30 },
  ]

  const recentStudents = [
    { id: 1, name: "Alice Johnson", course: "Introduction to Computer Science", avatar: "AJ" },
    { id: 2, name: "Bob Smith", course: "Data Structures and Algorithms", avatar: "BS" },
    { id: 3, name: "Charlie Brown", course: "Database Management Systems", avatar: "CB" },
    { id: 4, name: "Diana Miller", course: "Introduction to Computer Science", avatar: "DM" },
  ]

  return (
    <DashboardLayout userType="faculty">
      <div className="space-y-8">
        <div>
          <h1 className="text-3xl font-bold">Faculty Dashboard</h1>
          <p className="text-gray-500">Welcome back, Dr. Jane Smith</p>
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
              <CardTitle className="text-sm font-medium text-gray-500">Students</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center">
                <Users className="h-5 w-5 text-green-500 mr-2" />
                <span className="text-2xl font-bold">{courses.reduce((acc, course) => acc + course.students, 0)}</span>
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
              <CardTitle className="text-sm font-medium text-gray-500">Pending Assignments</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center">
                <FileText className="h-5 w-5 text-amber-500 mr-2" />
                <span className="text-2xl font-bold">{pendingAssignments.length}</span>
              </div>
            </CardContent>
          </Card>
        </div>

        <Tabs defaultValue="courses">
          <TabsList className="mb-4">
            <TabsTrigger value="courses">My Courses</TabsTrigger>
            <TabsTrigger value="schedule">Today's Schedule</TabsTrigger>
            <TabsTrigger value="assignments">Pending Assignments</TabsTrigger>
            <TabsTrigger value="students">Recent Students</TabsTrigger>
          </TabsList>

          <TabsContent value="courses">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {courses.map((course) => (
                <Card key={course.id}>
                  <CardHeader>
                    <CardTitle>{course.name}</CardTitle>
                    <CardDescription>Course Code: {course.code}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center">
                      <Users className="h-4 w-4 mr-2 text-gray-500" />
                      <span>{course.students} Students</span>
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

          <TabsContent value="assignments">
            <div className="space-y-4">
              {pendingAssignments.map((assignment) => (
                <Card key={assignment.id}>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-lg">{assignment.title}</CardTitle>
                    <CardDescription>{assignment.course}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <span className="text-sm">Submissions</span>
                        <span className="text-sm font-medium">
                          {assignment.submissions} / {assignment.total}
                        </span>
                      </div>
                      <Progress value={(assignment.submissions / assignment.total) * 100} />
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="students">
            <div className="space-y-4">
              {recentStudents.map((student) => (
                <Card key={student.id}>
                  <CardContent className="p-4">
                    <div className="flex items-center space-x-4">
                      <Avatar>
                        <AvatarImage src={`/placeholder.svg?height=40&width=40`} alt={student.name} />
                        <AvatarFallback>{student.avatar}</AvatarFallback>
                      </Avatar>
                      <div>
                        <p className="font-medium">{student.name}</p>
                        <p className="text-sm text-gray-500">{student.course}</p>
                      </div>
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

