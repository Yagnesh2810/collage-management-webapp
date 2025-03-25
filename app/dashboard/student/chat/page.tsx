"use client"

import { useState } from "react"
import DashboardLayout from "@/components/dashboard-layout"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Send, Search, Phone, Video } from "lucide-react"

export default function StudentChat() {
  const [activeChat, setActiveChat] = useState<string | null>("Dr. Jane Smith")
  const [message, setMessage] = useState("")

  // Mock data
  const contacts = [
    {
      id: 1,
      name: "Dr. Jane Smith",
      role: "Faculty",
      avatar: "JS",
      status: "online",
      lastMessage: "Do you have any questions about the assignment?",
    },
    {
      id: 2,
      name: "Prof. Michael Brown",
      role: "Faculty",
      avatar: "MB",
      status: "offline",
      lastMessage: "The deadline has been extended to next Friday.",
    },
    {
      id: 3,
      name: "Alice Johnson",
      role: "Student",
      avatar: "AJ",
      status: "online",
      lastMessage: "Can we meet to discuss the group project?",
    },
    {
      id: 4,
      name: "Bob Williams",
      role: "Student",
      avatar: "BW",
      status: "online",
      lastMessage: "Thanks for sharing your notes!",
    },
    {
      id: 5,
      name: "Academic Advisor",
      role: "Staff",
      avatar: "AA",
      status: "offline",
      lastMessage: "Your course registration has been confirmed.",
    },
  ]

  const chatHistory = {
    "Dr. Jane Smith": [
      { sender: "Dr. Jane Smith", message: "Hello! How are you doing with the assignment?", time: "10:30 AM" },
      {
        sender: "You",
        message: "Hi Dr. Smith! I'm making progress, but I have a question about the third problem.",
        time: "10:32 AM",
      },
      { sender: "Dr. Jane Smith", message: "Sure, what's your question?", time: "10:33 AM" },
      { sender: "You", message: "I'm not sure how to approach the algorithm complexity analysis.", time: "10:35 AM" },
      {
        sender: "Dr. Jane Smith",
        message: "That's a common challenge. Let me explain the approach...",
        time: "10:38 AM",
      },
      { sender: "Dr. Jane Smith", message: "First, identify the key operations in your algorithm.", time: "10:38 AM" },
      {
        sender: "Dr. Jane Smith",
        message: "Then, count how many times each operation is executed in terms of the input size.",
        time: "10:39 AM",
      },
      {
        sender: "You",
        message: "That makes sense. So for a nested loop, I'd multiply the iterations?",
        time: "10:41 AM",
      },
      {
        sender: "Dr. Jane Smith",
        message: "Exactly! For two nested loops iterating n times each, the complexity would be O(n²).",
        time: "10:42 AM",
      },
      { sender: "You", message: "Thank you! That clarifies things a lot.", time: "10:44 AM" },
      { sender: "Dr. Jane Smith", message: "You're welcome! Do you have any other questions?", time: "10:45 AM" },
    ],
    "Alice Johnson": [
      {
        sender: "Alice Johnson",
        message: "Hey! How's your part of the group project coming along?",
        time: "Yesterday",
      },
      {
        sender: "You",
        message: "Hi Alice! I've completed the research section. Working on the slides now.",
        time: "Yesterday",
      },
      { sender: "Alice Johnson", message: "Great! I've finished the data analysis part.", time: "Yesterday" },
      { sender: "You", message: "Awesome! Should we meet to put everything together?", time: "Yesterday" },
      {
        sender: "Alice Johnson",
        message: "Yes, that would be helpful. How about tomorrow at 3 PM in the library?",
        time: "Yesterday",
      },
      { sender: "You", message: "Works for me! See you then.", time: "Yesterday" },
      { sender: "Alice Johnson", message: "Perfect! Don't forget to bring your laptop.", time: "Yesterday" },
    ],
    "Prof. Michael Brown": [
      {
        sender: "Prof. Michael Brown",
        message: "I've posted additional practice problems for the upcoming exam.",
        time: "Monday",
      },
      { sender: "You", message: "Thank you, Professor! I'll work on them this week.", time: "Monday" },
      {
        sender: "Prof. Michael Brown",
        message: "Good. Also, I've decided to extend the deadline for the problem set to next Friday.",
        time: "Monday",
      },
      { sender: "You", message: "That's helpful, thank you for the extension!", time: "Monday" },
      {
        sender: "Prof. Michael Brown",
        message: "You're welcome. Let me know if you have any questions.",
        time: "Monday",
      },
    ],
  }

  const handleSendMessage = () => {
    if (message.trim() && activeChat) {
      // In a real app, this would send the message to the server
      // For this demo, we're just clearing the input
      setMessage("")
    }
  }

  return (
    <DashboardLayout userType="student">
      <div className="space-y-4">
        <div>
          <h1 className="text-3xl font-bold">Chat</h1>
          <p className="text-gray-500">Communicate with faculty and classmates</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 h-[calc(100vh-200px)]">
          {/* Contacts List */}
          <Card className="md:col-span-1 overflow-hidden">
            <CardHeader className="pb-2">
              <CardTitle>Conversations</CardTitle>
              <div className="relative mt-2">
                <Search className="absolute left-2 top-2.5 h-4 w-4 text-gray-500" />
                <Input placeholder="Search contacts..." className="pl-8" />
              </div>
            </CardHeader>
            <CardContent className="p-0">
              <ScrollArea className="h-[calc(100vh-300px)]">
                <div className="px-4 py-2">
                  {contacts.map((contact) => (
                    <div
                      key={contact.id}
                      className={`flex items-center space-x-4 p-3 rounded-lg cursor-pointer transition-colors ${
                        activeChat === contact.name ? "bg-blue-50" : "hover:bg-gray-50"
                      }`}
                      onClick={() => setActiveChat(contact.name)}
                    >
                      <div className="relative">
                        <Avatar>
                          <AvatarImage src={`/placeholder.svg?height=40&width=40`} alt={contact.name} />
                          <AvatarFallback>{contact.avatar}</AvatarFallback>
                        </Avatar>
                        <span
                          className={`absolute bottom-0 right-0 w-3 h-3 rounded-full border-2 border-white ${
                            contact.status === "online" ? "bg-green-500" : "bg-gray-400"
                          }`}
                        ></span>
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="font-medium truncate">{contact.name}</p>
                        <p className="text-sm text-gray-500 truncate">{contact.lastMessage}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </ScrollArea>
            </CardContent>
          </Card>

          {/* Chat Area */}
          <Card className="md:col-span-2 flex flex-col">
            {activeChat ? (
              <>
                <CardHeader className="pb-2 border-b">
                  <div className="flex justify-between items-center">
                    <div className="flex items-center space-x-3">
                      <Avatar>
                        <AvatarImage src={`/placeholder.svg?height=40&width=40`} alt={activeChat} />
                        <AvatarFallback>
                          {activeChat
                            .split(" ")
                            .map((n) => n[0])
                            .join("")}
                        </AvatarFallback>
                      </Avatar>
                      <div>
                        <CardTitle className="text-lg">{activeChat}</CardTitle>
                        <CardDescription>
                          {contacts.find((c) => c.name === activeChat)?.status === "online" ? "Online" : "Offline"}
                        </CardDescription>
                      </div>
                    </div>
                    <div className="flex space-x-2">
                      <Button variant="ghost" size="icon">
                        <Phone className="h-5 w-5" />
                      </Button>
                      <Button variant="ghost" size="icon">
                        <Video className="h-5 w-5" />
                      </Button>
                    </div>
                  </div>
                </CardHeader>
                <ScrollArea className="flex-1 p-4">
                  <div className="space-y-4">
                    {chatHistory[activeChat as keyof typeof chatHistory]?.map((msg, index) => (
                      <div key={index} className={`flex ${msg.sender === "You" ? "justify-end" : "justify-start"}`}>
                        <div
                          className={`max-w-[70%] ${
                            msg.sender === "You"
                              ? "bg-blue-500 text-white rounded-tl-lg rounded-tr-lg rounded-bl-lg"
                              : "bg-gray-100 text-gray-800 rounded-tl-lg rounded-tr-lg rounded-br-lg"
                          } p-3`}
                        >
                          <p>{msg.message}</p>
                          <p className={`text-xs mt-1 ${msg.sender === "You" ? "text-blue-100" : "text-gray-500"}`}>
                            {msg.time}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </ScrollArea>
                <div className="p-4 border-t">
                  <div className="flex space-x-2">
                    <Input
                      placeholder="Type a message..."
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      onKeyDown={(e) => e.key === "Enter" && handleSendMessage()}
                    />
                    <Button onClick={handleSendMessage}>
                      <Send className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </>
            ) : (
              <div className="flex items-center justify-center h-full">
                <div className="text-center">
                  <p className="text-gray-500">Select a conversation to start chatting</p>
                </div>
              </div>
            )}
          </Card>
        </div>
      </div>
    </DashboardLayout>
  )
}

