"use client"

import DashboardLayout from "@/components/dashboard-layout"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Calendar } from "@/components/ui/calendar"
import { CheckCircle2, XCircle } from "lucide-react"

export default function StudentAttendance() {
  // Mock data
  const attendanceData = [
    { course: "Introduction to Computer Science", percentage: 92, classes: 23, present: 21, absent: 2 },
    { course: "Calculus I", percentage: 85, classes: 20, present: 17, absent: 3 },
    { course: "Physics 101", percentage: 95, classes: 22, present: 21, absent: 1 },
    { course: "English Composition", percentage: 78, classes: 18, present: 14, absent: 4 },
  ]

  const recentAttendance = [
    { date: "2023-11-10", course: "Introduction to Computer Science", status: "present" },
    { date: "2023-11-09", course: "Calculus I", status: "present" },
    { date: "2023-11-09", course: "Physics 101", status: "present" },
    { date: "2023-11-08", course: "English Composition", status: "absent" },
    { date: "2023-11-08", course: "Introduction to Computer Science", status: "present" },
    { date: "2023-11-07", course: "Calculus I", status: "present" },
    { date: "2023-11-07", course: "Physics 101", status: "present" },
    { date: "2023-11-06", course: "English Composition", status: "present" },
  ]

  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    return date.toLocaleDateString("en-US", { weekday: "short", month: "short", day: "numeric" })
  }

  return (
    <DashboardLayout userType="student">
      <div className="space-y-8">
        <div>
          <h1 className="text-3xl font-bold">Attendance</h1>
          <p className="text-gray-500">Track your class attendance</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Overall Attendance</CardTitle>
              <CardDescription>Your attendance across all courses</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                {attendanceData.map((item, index) => (
                  <div key={index} className="space-y-2">
                    <div className="flex justify-between">
                      <span className="font-medium">{item.course}</span>
                      <span
                        className={`${
                          item.percentage >= 85
                            ? "text-green-600"
                            : item.percentage >= 75
                              ? "text-amber-600"
                              : "text-red-600"
                        }`}
                      >
                        {item.percentage}%
                      </span>
                    </div>
                    <Progress
                      value={item.percentage}
                      className={`h-2 ${
                        item.percentage >= 85 ? "bg-green-100" : item.percentage >= 75 ? "bg-amber-100" : "bg-red-100"
                      }`}
                    />
                    <div className="flex justify-between text-xs text-gray-500">
                      <span>Present: {item.present} classes</span>
                      <span>Absent: {item.absent} classes</span>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Attendance Calendar</CardTitle>
                <CardDescription>View your monthly attendance</CardDescription>
              </CardHeader>
              <CardContent>
                <Calendar mode="single" selected={new Date()} className="rounded-md border" />
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Attendance Statistics</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-green-50 p-4 rounded-lg text-center">
                    <p className="text-3xl font-bold text-green-600">
                      {Math.round(
                        attendanceData.reduce((acc, curr) => acc + curr.percentage, 0) / attendanceData.length,
                      )}
                      %
                    </p>
                    <p className="text-sm text-gray-600">Average Attendance</p>
                  </div>
                  <div className="bg-blue-50 p-4 rounded-lg text-center">
                    <p className="text-3xl font-bold text-blue-600">
                      {attendanceData.reduce((acc, curr) => acc + curr.classes, 0)}
                    </p>
                    <p className="text-sm text-gray-600">Total Classes</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Recent Attendance</CardTitle>
            <CardDescription>Your attendance in the last few days</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentAttendance.map((item, index) => (
                <div key={index} className="flex items-center justify-between border-b pb-2">
                  <div className="flex items-center space-x-4">
                    {item.status === "present" ? (
                      <CheckCircle2 className="h-5 w-5 text-green-500" />
                    ) : (
                      <XCircle className="h-5 w-5 text-red-500" />
                    )}
                    <div>
                      <p className="font-medium">{item.course}</p>
                      <p className="text-sm text-gray-500">{formatDate(item.date)}</p>
                    </div>
                  </div>
                  <span
                    className={`px-2 py-1 rounded text-xs font-medium ${
                      item.status === "present" ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"
                    }`}
                  >
                    {item.status.charAt(0).toUpperCase() + item.status.slice(1)}
                  </span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  )
}

