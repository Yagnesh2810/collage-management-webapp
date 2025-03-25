"use client"

import { useState, type ReactNode } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {
  LayoutDashboard,
  Users,
  BookOpen,
  Calendar,
  FileText,
  MessageSquare,
  Video,
  Bell,
  Settings,
  LogOut,
  Menu,
  X,
  CheckSquare,
  BarChart,
} from "lucide-react"
import { cn } from "@/lib/utils"

interface DashboardLayoutProps {
  children: ReactNode
  userType: "student" | "faculty" | "admin" | "principal"
}

export default function DashboardLayout({ children, userType }: DashboardLayoutProps) {
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const pathname = usePathname()

  const userTypeToName = {
    student: "Student",
    faculty: "Faculty",
    admin: "Admin",
    principal: "Principal",
  }

  const userTypeToInitials = {
    student: "ST",
    faculty: "FA",
    admin: "AD",
    principal: "PR",
  }

  const userTypeToFullName = {
    student: "John Doe",
    faculty: "Dr. Jane Smith",
    admin: "Admin User",
    principal: "Dr. Robert Johnson",
  }

  const commonNavItems = [
    { name: "Dashboard", href: `/dashboard/${userType}`, icon: <LayoutDashboard className="h-5 w-5" /> },
    { name: "Notices", href: `/dashboard/${userType}/notices`, icon: <Bell className="h-5 w-5" /> },
    { name: "Chat", href: `/dashboard/${userType}/chat`, icon: <MessageSquare className="h-5 w-5" /> },
    { name: "Video Call", href: `/dashboard/${userType}/video-call`, icon: <Video className="h-5 w-5" /> },
    { name: "Settings", href: `/dashboard/${userType}/settings`, icon: <Settings className="h-5 w-5" /> },
  ]

  const userSpecificNavItems = {
    student: [
      { name: "Courses", href: `/dashboard/student/courses`, icon: <BookOpen className="h-5 w-5" /> },
      { name: "Assignments", href: `/dashboard/student/assignments`, icon: <FileText className="h-5 w-5" /> },
      { name: "Attendance", href: `/dashboard/student/attendance`, icon: <CheckSquare className="h-5 w-5" /> },
      { name: "Timetable", href: `/dashboard/student/timetable`, icon: <Calendar className="h-5 w-5" /> },
    ],
    faculty: [
      { name: "Students", href: `/dashboard/faculty/students`, icon: <Users className="h-5 w-5" /> },
      { name: "Courses", href: `/dashboard/faculty/courses`, icon: <BookOpen className="h-5 w-5" /> },
      { name: "Assignments", href: `/dashboard/faculty/assignments`, icon: <FileText className="h-5 w-5" /> },
      { name: "Attendance", href: `/dashboard/faculty/attendance`, icon: <CheckSquare className="h-5 w-5" /> },
      { name: "Timetable", href: `/dashboard/faculty/timetable`, icon: <Calendar className="h-5 w-5" /> },
    ],
    admin: [
      { name: "Users", href: `/dashboard/admin/users`, icon: <Users className="h-5 w-5" /> },
      { name: "Courses", href: `/dashboard/admin/courses`, icon: <BookOpen className="h-5 w-5" /> },
      { name: "Timetable", href: `/dashboard/admin/timetable`, icon: <Calendar className="h-5 w-5" /> },
    ],
    principal: [
      { name: "Faculty", href: `/dashboard/principal/faculty`, icon: <Users className="h-5 w-5" /> },
      { name: "Departments", href: `/dashboard/principal/departments`, icon: <BookOpen className="h-5 w-5" /> },
      { name: "Reports", href: `/dashboard/principal/reports`, icon: <BarChart className="h-5 w-5" /> },
    ],
  }

  const navItems = [...userSpecificNavItems[userType], ...commonNavItems]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Mobile sidebar toggle */}
      <div className="lg:hidden fixed top-4 left-4 z-50">
        <Button variant="outline" size="icon" onClick={() => setSidebarOpen(!sidebarOpen)} className="bg-white">
          {sidebarOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </Button>
      </div>

      {/* Sidebar */}
      <div
        className={cn(
          "fixed inset-y-0 left-0 z-40 w-64 bg-white shadow-lg transform transition-transform duration-300 ease-in-out lg:translate-x-0",
          sidebarOpen ? "translate-x-0" : "-translate-x-full",
        )}
      >
        <div className="flex flex-col h-full">
          <div className="p-4 border-b">
            <div className="flex items-center space-x-3">
              <Avatar>
                <AvatarImage src={`/placeholder.svg?height=40&width=40`} alt={userTypeToName[userType]} />
                <AvatarFallback>{userTypeToInitials[userType]}</AvatarFallback>
              </Avatar>
              <div>
                <p className="text-sm font-medium">{userTypeToFullName[userType]}</p>
                <p className="text-xs text-gray-500">{userTypeToName[userType]}</p>
              </div>
            </div>
          </div>

          <nav className="flex-1 p-4 space-y-1 overflow-y-auto">
            {navItems.map((item) => (
              <Link key={item.name} href={item.href} onClick={() => setSidebarOpen(false)}>
                <div
                  className={cn(
                    "flex items-center space-x-3 px-3 py-2 rounded-md text-sm font-medium",
                    pathname === item.href ? "bg-blue-50 text-blue-700" : "text-gray-700 hover:bg-gray-100",
                  )}
                >
                  {item.icon}
                  <span>{item.name}</span>
                </div>
              </Link>
            ))}
          </nav>

          <div className="p-4 border-t">
            <Link href="/">
              <div className="flex items-center space-x-3 px-3 py-2 rounded-md text-sm font-medium text-red-600 hover:bg-red-50">
                <LogOut className="h-5 w-5" />
                <span>Logout</span>
              </div>
            </Link>
          </div>
        </div>
      </div>

      {/* Main content */}
      <div className="lg:ml-64 min-h-screen">
        <main className="p-4 md:p-8">{children}</main>
      </div>
    </div>
  )
}

