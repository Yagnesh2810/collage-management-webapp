import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Image from "next/image"

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <div className="container mx-auto px-4 py-8">
        <header className="flex justify-between items-center mb-12">
          <div className="flex items-center gap-2">
            <Image src="/placeholder.svg?height=40&width=40" alt="Logo" width={40} height={40} className="rounded-md" />
            <h1 className="text-2xl font-bold text-blue-800">EduConnect</h1>
          </div>
          <Link href="/login">
            <Button variant="outline" className="border-blue-500 text-blue-500 hover:bg-blue-50">
              Login
            </Button>
          </Link>
        </header>

        <main>
          <section className="flex flex-col md:flex-row items-center justify-between gap-8 mb-16">
            <div className="md:w-1/2">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Comprehensive College Management System</h2>
              <p className="text-lg text-gray-600 mb-6">
                A unified platform for students, faculty, and administrators to manage academic activities,
                communication, and resources.
              </p>
              <Link href="/login">
                <Button className="bg-blue-600 hover:bg-blue-700 text-white">Get Started</Button>
              </Link>
            </div>
            <div className="md:w-1/2">
              <Image
                src="/placeholder.svg?height=400&width=500"
                alt="College Management"
                width={500}
                height={400}
                className="rounded-lg shadow-lg"
              />
            </div>
          </section>

          <section className="mb-16">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">Key Features</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Academic Management</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>Track attendance, submit assignments, access classroom notes, and view grades all in one place.</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Communication</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>
                    Integrated chat and video calling features for seamless communication between students and faculty.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Resource Sharing</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>Share and access study materials, notices, and important announcements with ease.</p>
                </CardContent>
              </Card>
            </div>
          </section>

          <section>
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">For Everyone in the Institution</h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Students</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>Access course materials, check grades, submit assignments, and communicate with faculty.</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Faculty</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>Manage classes, track attendance, grade assignments, and share learning resources.</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Admin</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>Oversee all academic activities, manage users, and handle system configurations.</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Principal</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>Monitor institution performance, access reports, and make executive decisions.</p>
                </CardContent>
              </Card>
            </div>
          </section>
        </main>

        <footer className="mt-16 py-8 border-t border-gray-200">
          <p className="text-center text-gray-600">© 2023 EduConnect College Management System. All rights reserved.</p>
        </footer>
      </div>
    </div>
  )
}

