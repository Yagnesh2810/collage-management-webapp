"use client"

import { useState } from "react"
import DashboardLayout from "@/components/dashboard-layout"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { Calendar } from "@/components/ui/calendar"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { XCircle, CalendarIcon, BarChart } from "lucide-react"

export default function FacultyAttendance() {
  const [selectedCourse, setSelectedCourse] = useState("CS101")
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(new Date())

  // Mock data
  const courses = [
    { id: "CS101", name: "Introduction to Computer Science" },
    { id: "CS201", name: "Data Structures and Algorithms" },
    { id: "CS301", name: "Database Management Systems" },
  ]

  const students = [
    { id: 1, name: "Alice Johnson", enrollmentNo: "2023001", avatar: "AJ", present: true },
    { id: 2, name: "Bob Smith", enrollmentNo: "2023002", avatar: "BS", present: true },
    { id: 3, name: "Charlie Brown", enrollmentNo: "2023003", avatar: "CB", present: false },
    { id: 4, name: "Diana Miller", enrollmentNo: "2023004", avatar: "DM", present: true },
    { id: 5, name: "Edward Wilson", enrollmentNo: "2023005", avatar: "EW", present: true },
    { id: 6, name: "Fiona Garcia", enrollmentNo: "2023006", avatar: "FG", present: false },
    { id: 7, name: "George Martinez", enrollmentNo: "2023007", avatar: "GM", present: true },
    { id: 8, name: "Hannah Lee", enrollmentNo: "2023008", avatar: "HL", present: true },
  ]

  const attendanceStats = [
    { date: "2023-11-10", present: 35, total: 40 },
    { date: "2023-11-08", present: 38, total: 40 },
    { date: "2023-11-06", present: 33, total: 40 },
    { date: "2023-11-03", present: 36, total: 40 },
    { date: "2023-11-01", present: 39, total: 40 },
  ]

  const courseAttendance = {
    CS101: { average: 88, classes: 15 },
    CS201: { average: 92, classes: 14 },
    CS301: { average: 85, classes: 13 },
  }

  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    return date.toLocaleDateString("en-US", { weekday: "short", month: "short", day: "numeric" })
  }

  const toggleAttendance = (studentId: number) => {
    // In a real app, this would update the attendance in the database
    console.log(`Toggled attendance for student ${studentId}`)
  }

  return (
    <DashboardLayout userType="faculty">
      <div className="space-y-8">
        <div>
          <h1 className="text-3xl font-bold">Attendance Management</h1>
          <p className="text-gray-500">Track and manage student attendance</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card className="md:col-span-2">
            <CardHeader>
              <div className="flex justify-between items-center">
                <div>
                  <CardTitle>Mark Attendance</CardTitle>
                  <CardDescription>Record student attendance for today's class</CardDescription>
                </div>
                <Select value={selectedCourse} onValueChange={setSelectedCourse}>
                  <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Select course" />
                  </SelectTrigger>
                  <SelectContent>
                    {courses.map((course) => (
                      <SelectItem key={course.id} value={course.id}>
                        {course.name}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div className="flex justify-between items-center">
                  <p className="font-medium">
                    {courses.find((c) => c.id === selectedCourse)?.name} -{" "}
                    {new Date().toLocaleDateString("en-US", { weekday: "long", month: "long", day: "numeric" })}
                  </p>
                  <div className="flex space-x-2">
                    <Button variant="outline" size="sm">
                      Mark All Present
                    </Button>
                    <Button variant="outline" size="sm">
                      Reset
                    </Button>
                  </div>
                </div>

                <div className="border rounded-md">
                  <div className="grid grid-cols-12 bg-gray-50 p-3 border-b">
                    <div className="col-span-1 font-medium">No.</div>
                    <div className="col-span-5 font-medium">Name</div>
                    <div className="col-span-4 font-medium">Enrollment No.</div>
                    <div className="col-span-2 font-medium text-center">Attendance</div>
                  </div>

                  <div className="divide-y">
                    {students.map((student, index) => (
                      <div key={student.id} className="grid grid-cols-12 p-3 items-center">
                        <div className="col-span-1 text-gray-500">{index + 1}</div>
                        <div className="col-span-5 flex items-center space-x-2">
                          <Avatar className="h-8 w-8">
                            <AvatarImage src={`/placeholder.svg?height=32&width=32`} alt={student.name} />
                            <AvatarFallback>{student.avatar}</AvatarFallback>
                          </Avatar>
                          <span>{student.name}</span>
                        </div>
                        <div className="col-span-4 text-gray-600">{student.enrollmentNo}</div>
                        <div className="col-span-2 flex justify-center">
                          <Checkbox
                            checked={student.present}
                            onCheckedChange={() => toggleAttendance(student.id)}
                            className="h-5 w-5"
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="flex justify-end">
                  <Button>Save Attendance</Button>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Select Date</CardTitle>
                <CardDescription>View or edit attendance for a specific date</CardDescription>
              </CardHeader>
              <CardContent>
                <Calendar
                  mode="single"
                  selected={selectedDate}
                  onSelect={setSelectedDate}
                  className="rounded-md border"
                />
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Course Attendance</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {Object.entries(courseAttendance).map(([courseId, data]) => (
                    <div key={courseId} className="space-y-2">
                      <div className="flex justify-between">
                        <span className="font-medium">{courseId}</span>
                        <span>{data.average}%</span>
                      </div>
                      <Progress value={data.average} />
                      <p className="text-xs text-gray-500">{data.classes} classes conducted</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        <Tabs defaultValue="history">
          <TabsList className="mb-4">
            <TabsTrigger value="history">Attendance History</TabsTrigger>
            <TabsTrigger value="statistics">Statistics</TabsTrigger>
          </TabsList>

          <TabsContent value="history">
            <Card>
              <CardHeader>
                <CardTitle>Recent Attendance Records</CardTitle>
                <CardDescription>{courses.find((c) => c.id === selectedCourse)?.name}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {attendanceStats.map((record, index) => (
                    <div key={index} className="border rounded-md p-4">
                      <div className="flex justify-between items-center mb-2">
                        <div className="flex items-center">
                          <CalendarIcon className="h-5 w-5 mr-2 text-gray-500" />
                          <span className="font-medium">{formatDate(record.date)}</span>
                        </div>
                        <div className="text-sm">
                          <span className="font-medium">{record.present}</span>
                          <span className="text-gray-500">/{record.total} students present</span>
                        </div>
                      </div>
                      <Progress value={(record.present / record.total) * 100} />
                      <div className="flex justify-end mt-2">
                        <Button variant="outline" size="sm">
                          View Details
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="statistics">
            <Card>
              <CardHeader>
                <CardTitle>Attendance Statistics</CardTitle>
                <CardDescription>{courses.find((c) => c.id === selectedCourse)?.name}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                  <div className="bg-blue-50 p-4 rounded-lg text-center">
                    <p className="text-3xl font-bold text-blue-600">
                      {courseAttendance[selectedCourse as keyof typeof courseAttendance]?.average}%
                    </p>
                    <p className="text-sm text-gray-600">Average Attendance</p>
                  </div>
                  <div className="bg-green-50 p-4 rounded-lg text-center">
                    <p className="text-3xl font-bold text-green-600">
                      {courseAttendance[selectedCourse as keyof typeof courseAttendance]?.classes}
                    </p>
                    <p className="text-sm text-gray-600">Classes Conducted</p>
                  </div>
                  <div className="bg-amber-50 p-4 rounded-lg text-center">
                    <p className="text-3xl font-bold text-amber-600">{students.filter((s) => s.present).length}</p>
                    <p className="text-sm text-gray-600">Present Today</p>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <h3 className="font-medium">Students with Low Attendance</h3>
                    <Button variant="outline" size="sm" className="flex items-center">
                      <BarChart className="h-4 w-4 mr-2" />
                      Generate Report
                    </Button>
                  </div>

                  <div className="border rounded-md divide-y">
                    {students
                      .filter((s) => !s.present)
                      .map((student) => (
                        <div key={student.id} className="p-3 flex items-center justify-between">
                          <div className="flex items-center space-x-3">
                            <Avatar>
                              <AvatarImage src={`/placeholder.svg?height=40&width=40`} alt={student.name} />
                              <AvatarFallback>{student.avatar}</AvatarFallback>
                            </Avatar>
                            <div>
                              <p className="font-medium">{student.name}</p>
                              <p className="text-sm text-gray-500">{student.enrollmentNo}</p>
                            </div>
                          </div>
                          <div className="flex items-center">
                            <XCircle className="h-5 w-5 text-red-500 mr-2" />
                            <span className="text-red-500 font-medium">65% Attendance</span>
                          </div>
                        </div>
                      ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </DashboardLayout>
  )
}

