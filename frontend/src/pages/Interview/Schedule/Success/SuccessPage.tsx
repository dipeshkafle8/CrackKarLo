"use client"

import { CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Link } from "react-router-dom"

export default function SuccessPage() {
  return (
    <div className="container mx-auto py-10">
      <div className="max-w-md mx-auto text-center">
        <div className="flex justify-center mb-6">
          <CheckCircle className="h-16 w-16 text-green-500" />
        </div>
        <h1 className="text-2xl font-bold mb-4">Interview Scheduled!</h1>
        <p className="mb-6 text-muted-foreground">
          Your practice interview has been successfully scheduled. You will receive a confirmation email with all the
          details.
        </p>
        <div className="bg-muted p-4 rounded-lg mb-6">
          <div className="grid grid-cols-2 gap-2 text-sm">
            <div className="text-left font-medium">Date:</div>
            <div className="text-right">April 30, 2025</div>
            <div className="text-left font-medium">Time:</div>
            <div className="text-right">10:00 AM</div>
            <div className="text-left font-medium">Type:</div>
            <div className="text-right">Technical Interview</div>
            <div className="text-left font-medium">Duration:</div>
            <div className="text-right">60 minutes</div>
          </div>
        </div>
        <div className="space-y-4">
          <Button asChild className="w-full">
            <Link to="/">Go to Dashboard</Link>
          </Button>
          <Button variant="outline" asChild className="w-full">
            <Link to="/schedule">Schedule Another</Link>
          </Button>
        </div>
      </div>
    </div>
  )
}
