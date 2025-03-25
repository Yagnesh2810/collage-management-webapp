"use client"

import { useState } from "react"
import DashboardLayout from "@/components/dashboard-layout"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Mic, MicOff, Video, VideoOff, Phone, PhoneOff, MessageSquare, Users, Calendar, Search } from "lucide-react"

export default function VideoCall() {
  const [inCall, setInCall] = useState(false)
  const [micEnabled, setMicEnabled] = useState(true)
  const [videoEnabled, setVideoEnabled] = useState(true)

  // Mock data
  const contacts = [
    { id: 1, name: "Dr. Jane Smith", role: "Faculty", avatar: "JS", status: "available" },
    { id: 2, name: "Prof. Michael Brown", role: "Faculty", avatar: "MB", status: "busy" },
    { id: 3, name: "Alice Johnson", role: "Student", avatar: "AJ", status: "available" },
    { id: 4, name: "Bob Williams", role: "Student", avatar: "BW", status: "available" },
    { id: 5, name: "Academic Advisor", role: "Staff", avatar: "AA", status: "offline" },
  ]

  const scheduledMeetings = [
    { id: 1, title: "Project Discussion", with: "Dr. Jane Smith", time: "Today, 3:00 PM", duration: "30 min" },
    { id: 2, title: "Study Group", with: "Alice Johnson, Bob Williams", time: "Tomorrow, 5:00 PM", duration: "1 hour" },
    { id: 3, title: "Office Hours", with: "Prof. Michael Brown", time: "Friday, 2:00 PM", duration: "45 min" },
  ]

  const recentCalls = [
    { id: 1, name: "Dr. Jane Smith", time: "Yesterday, 4:30 PM", duration: "15 min", type: "outgoing" },
    { id: 2, name: "Alice Johnson", time: "Nov 8, 6:00 PM", duration: "32 min", type: "incoming" },
    { id: 3, name: "Prof. Michael Brown", time: "Nov 7, 2:15 PM", duration: "10 min", type: "missed" },
  ]

  const startCall = () => {
    setInCall(true)
  }

  const endCall = () => {
    setInCall(false)
  }

  return (
    <DashboardLayout userType="student">
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold">Video Call</h1>
          <p className="text-gray-500">Connect with faculty and classmates</p>
        </div>

        {inCall ? (
          <div className="space-y-4">
            <Card className="bg-gray-900 text-white overflow-hidden">
              <CardContent className="p-0 relative">
                <div className="aspect-video bg-black flex items-center justify-center">
                  {videoEnabled ? (
                    <img
                      src="/placeholder.svg?height=480&width=640"
                      alt="Video call"
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="text-center">
                      <Avatar className="h-24 w-24 mx-auto mb-4">
                        <AvatarFallback className="text-4xl">JS</AvatarFallback>
                      </Avatar>
                      <p className="text-xl">Dr. Jane Smith</p>
                    </div>
                  )}

                  {/* Self view */}
                  <div className="absolute bottom-4 right-4 w-48 h-36 bg-gray-800 rounded-lg overflow-hidden border-2 border-gray-700">
                    {videoEnabled ? (
                      <img
                        src="/placeholder.svg?height=120&width=160"
                        alt="Self view"
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center">
                        <Avatar>
                          <AvatarFallback>You</AvatarFallback>
                        </Avatar>
                      </div>
                    )}
                  </div>
                </div>

                <div className="absolute top-4 left-4 bg-gray-800 bg-opacity-70 px-3 py-1 rounded-full text-sm">
                  Dr. Jane Smith • 00:05:32
                </div>

                <div className="flex justify-center items-center space-x-4 py-4 bg-gray-800">
                  <Button
                    variant="ghost"
                    size="icon"
                    className="rounded-full bg-gray-700 hover:bg-gray-600 text-white h-12 w-12"
                    onClick={() => setMicEnabled(!micEnabled)}
                  >
                    {micEnabled ? <Mic className="h-5 w-5" /> : <MicOff className="h-5 w-5" />}
                  </Button>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="rounded-full bg-gray-700 hover:bg-gray-600 text-white h-12 w-12"
                    onClick={() => setVideoEnabled(!videoEnabled)}
                  >
                    {videoEnabled ? <Video className="h-5 w-5" /> : <VideoOff className="h-5 w-5" />}
                  </Button>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="rounded-full bg-red-600 hover:bg-red-700 text-white h-12 w-12"
                    onClick={endCall}
                  >
                    <PhoneOff className="h-5 w-5" />
                  </Button>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="rounded-full bg-gray-700 hover:bg-gray-600 text-white h-12 w-12"
                  >
                    <MessageSquare className="h-5 w-5" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="md:col-span-2">
              <CardHeader>
                <CardTitle>Start a New Call</CardTitle>
                <CardDescription>Connect with faculty or classmates</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="relative">
                    <Search className="absolute left-2 top-2.5 h-4 w-4 text-gray-500" />
                    <Input placeholder="Search contacts..." className="pl-8" />
                  </div>

                  <Tabs defaultValue="contacts">
                    <TabsList className="grid grid-cols-3 mb-4">
                      <TabsTrigger value="contacts">
                        <Users className="h-4 w-4 mr-2" />
                        Contacts
                      </TabsTrigger>
                      <TabsTrigger value="recent">
                        <Phone className="h-4 w-4 mr-2" />
                        Recent
                      </TabsTrigger>
                      <TabsTrigger value="scheduled">
                        <Calendar className="h-4 w-4 mr-2" />
                        Scheduled
                      </TabsTrigger>
                    </TabsList>

                    <TabsContent value="contacts">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {contacts.map((contact) => (
                          <div
                            key={contact.id}
                            className="flex items-center space-x-4 p-3 border rounded-lg hover:bg-gray-50 cursor-pointer"
                          >
                            <Avatar>
                              <AvatarImage src={`/placeholder.svg?height=40&width=40`} alt={contact.name} />
                              <AvatarFallback>{contact.avatar}</AvatarFallback>
                            </Avatar>
                            <div className="flex-1">
                              <p className="font-medium">{contact.name}</p>
                              <p className="text-sm text-gray-500">{contact.role}</p>
                            </div>
                            <div className="flex space-x-2">
                              <Button
                                variant="ghost"
                                size="icon"
                                className="rounded-full"
                                disabled={contact.status === "offline" || contact.status === "busy"}
                                onClick={startCall}
                              >
                                <Video className="h-4 w-4" />
                              </Button>
                              <Button
                                variant="ghost"
                                size="icon"
                                className="rounded-full"
                                disabled={contact.status === "offline" || contact.status === "busy"}
                              >
                                <Phone className="h-4 w-4" />
                              </Button>
                            </div>
                          </div>
                        ))}
                      </div>
                    </TabsContent>

                    <TabsContent value="recent">
                      <div className="space-y-4">
                        {recentCalls.map((call) => (
                          <div key={call.id} className="flex items-center space-x-4 p-3 border rounded-lg">
                            <Avatar>
                              <AvatarImage src={`/placeholder.svg?height=40&width=40`} alt={call.name} />
                              <AvatarFallback>
                                {call.name
                                  .split(" ")
                                  .map((n) => n[0])
                                  .join("")}
                              </AvatarFallback>
                            </Avatar>
                            <div className="flex-1">
                              <p className="font-medium">{call.name}</p>
                              <div className="flex items-center text-sm text-gray-500">
                                <span
                                  className={`w-2 h-2 rounded-full mr-2 ${
                                    call.type === "outgoing"
                                      ? "bg-green-500"
                                      : call.type === "incoming"
                                        ? "bg-blue-500"
                                        : "bg-red-500"
                                  }`}
                                ></span>
                                <span>
                                  {call.type.charAt(0).toUpperCase() + call.type.slice(1)} • {call.time}
                                </span>
                              </div>
                            </div>
                            <div className="text-sm text-gray-500">{call.duration}</div>
                            <Button variant="ghost" size="icon" className="rounded-full" onClick={startCall}>
                              <Video className="h-4 w-4" />
                            </Button>
                          </div>
                        ))}
                      </div>
                    </TabsContent>

                    <TabsContent value="scheduled">
                      <div className="space-y-4">
                        {scheduledMeetings.map((meeting) => (
                          <div key={meeting.id} className="p-4 border rounded-lg">
                            <div className="flex justify-between items-start mb-2">
                              <div>
                                <p className="font-medium">{meeting.title}</p>
                                <p className="text-sm text-gray-500">With: {meeting.with}</p>
                              </div>
                              <Button
                                variant="outline"
                                size="sm"
                                className="text-green-600 border-green-600 hover:bg-green-50"
                                onClick={startCall}
                              >
                                Join
                              </Button>
                            </div>
                            <div className="flex items-center text-sm text-gray-500">
                              <Calendar className="h-4 w-4 mr-2" />
                              <span>{meeting.time}</span>
                              <span className="mx-2">•</span>
                              <span>{meeting.duration}</span>
                            </div>
                          </div>
                        ))}
                      </div>
                    </TabsContent>
                  </Tabs>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Call Settings</CardTitle>
                <CardDescription>Configure your call preferences</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <p className="font-medium">Audio Input</p>
                  <select className="w-full p-2 border rounded-md">
                    <option>Default Microphone</option>
                    <option>External Microphone</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <p className="font-medium">Video Input</p>
                  <select className="w-full p-2 border rounded-md">
                    <option>Default Camera</option>
                    <option>External Camera</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <p className="font-medium">Speaker</p>
                  <select className="w-full p-2 border rounded-md">
                    <option>Default Speaker</option>
                    <option>External Speaker</option>
                    <option>Headphones</option>
                  </select>
                </div>

                <div className="pt-4">
                  <Button className="w-full">Test Audio and Video</Button>
                </div>
              </CardContent>
            </Card>
          </div>
        )}
      </div>
    </DashboardLayout>
  )
}

