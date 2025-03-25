"use client"

import DashboardLayout from "@/components/dashboard-layout"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import { Clock, FileText, Upload, CheckCircle } from "lucide-react"

export default function StudentAssignments() {
  // Mock data
  const pendingAssignments = [
    {
      id: 1,
      title: "Programming Assignment #3",
      course: "Introduction to Computer Science",
      dueDate: "2023-11-15",
      description: "Implement a simple data structure and algorithm to solve the given problem.",
      progress: 30,
    },
    {
      id: 2,
      title: "Problem Set 5",
      course: "Calculus I",
      dueDate: "2023-11-18",
      description: "Solve the differential equations and integration problems.",
      progress: 0,
    },
    {
      id: 3,
      title: "Lab Report",
      course: "Physics 101",
      dueDate: "2023-11-20",
      description: "Write a detailed report on the pendulum experiment conducted in the lab.",
      progress: 60,
    },
  ]

  const completedAssignments = [
    {
      id: 4,
      title: "Essay on Modern Literature",
      course: "English Composition",
      submittedDate: "2023-11-05",
      grade: "A",
      feedback: "Excellent analysis and well-structured arguments.",
    },
    {
      id: 5,
      title: "Programming Assignment #2",
      course: "Introduction to Computer Science",
      submittedDate: "2023-10-28",
      grade: "B+",
      feedback: "Good implementation but could improve code efficiency.",
    },
    {
      id: 6,
      title: "Problem Set 4",
      course: "Calculus I",
      submittedDate: "2023-10-20",
      grade: "A-",
      feedback: "Well done! Minor errors in the last two problems.",
    },
  ]

  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    return date.toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" })
  }

  const getDaysRemaining = (dueDate: string) => {
    const today = new Date()
    const due = new Date(dueDate)
    const diffTime = due.getTime() - today.getTime()
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24))
    return diffDays
  }

  return (
    <DashboardLayout userType="student">
      <div className="space-y-8">
        <div>
          <h1 className="text-3xl font-bold">Assignments</h1>
          <p className="text-gray-500">Manage your course assignments</p>
        </div>

        <Tabs defaultValue="pending">
          <TabsList className="mb-4">
            <TabsTrigger value="pending">Pending Assignments</TabsTrigger>
            <TabsTrigger value="completed">Completed Assignments</TabsTrigger>
          </TabsList>

          <TabsContent value="pending">
            <div className="grid grid-cols-1 gap-6">
              {pendingAssignments.map((assignment) => {
                const daysRemaining = getDaysRemaining(assignment.dueDate)
                return (
                  <Card key={assignment.id}>
                    <CardHeader>
                      <div className="flex justify-between items-start">
                        <div>
                          <CardTitle>{assignment.title}</CardTitle>
                          <CardDescription>{assignment.course}</CardDescription>
                        </div>
                        <Badge
                          className={
                            daysRemaining <= 2
                              ? "bg-red-100 text-red-800 hover:bg-red-100"
                              : daysRemaining <= 5
                                ? "bg-amber-100 text-amber-800 hover:bg-amber-100"
                                : "bg-green-100 text-green-800 hover:bg-green-100"
                          }
                        >
                          {daysRemaining <= 0 ? "Overdue" : `${daysRemaining} days remaining`}
                        </Badge>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-700 mb-4">{assignment.description}</p>
                      <div className="space-y-2">
                        <div className="flex justify-between">
                          <span className="text-sm">Progress</span>
                          <span className="text-sm font-medium">{assignment.progress}%</span>
                        </div>
                        <Progress value={assignment.progress} />
                      </div>
                      <div className="flex items-center mt-4 text-gray-600">
                        <Clock className="h-4 w-4 mr-2" />
                        <span>Due: {formatDate(assignment.dueDate)}</span>
                      </div>
                    </CardContent>
                    <CardFooter className="flex justify-between">
                      <Button variant="outline" className="flex items-center">
                        <FileText className="h-4 w-4 mr-2" />
                        View Details
                      </Button>
                      <Button className="flex items-center">
                        <Upload className="h-4 w-4 mr-2" />
                        Submit Assignment
                      </Button>
                    </CardFooter>
                  </Card>
                )
              })}
            </div>
          </TabsContent>

          <TabsContent value="completed">
            <div className="grid grid-cols-1 gap-6">
              {completedAssignments.map((assignment) => (
                <Card key={assignment.id}>
                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <div>
                        <CardTitle>{assignment.title}</CardTitle>
                        <CardDescription>{assignment.course}</CardDescription>
                      </div>
                      <Badge className="bg-blue-100 text-blue-800 hover:bg-blue-100">Grade: {assignment.grade}</Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="bg-gray-50 p-4 rounded-md mb-4">
                      <p className="text-sm font-medium mb-1">Feedback:</p>
                      <p className="text-gray-700">{assignment.feedback}</p>
                    </div>
                    <div className="flex items-center text-gray-600">
                      <CheckCircle className="h-4 w-4 mr-2 text-green-500" />
                      <span>Submitted: {formatDate(assignment.submittedDate)}</span>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button variant="outline" className="flex items-center">
                      <FileText className="h-4 w-4 mr-2" />
                      View Submission
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </DashboardLayout>
  )
}

