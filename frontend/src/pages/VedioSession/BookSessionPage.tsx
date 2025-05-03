import BookingForm from "./BookSession"
import type { Metadata } from "next"
import NavigateToHome from "@/Home/Navigate"

export const metadata: Metadata = {
  title: "Book a Session",
  description: "Schedule a live video session with our experts",
}

export default function BookSessionPage() {
  return (
    <>
    <div className="absolute left-2 top-3">
      <NavigateToHome/>
    </div>
    <div className="flex justify-center items-center">
    <div className="container max-w-5xl py-10 min-h-screen">
      <div className="grid gap-8 md:grid-cols-2 w-full">
        <div className="space-y-4">
          <h1 className="text-3xl font-bold tracking-tight md:text-4xl">Book a Live Session</h1>
          <p className="text-muted-foreground">
            Schedule a one-on-one video consultation with our experts. Fill out the form and select your preferred date
            and time.
          </p>
          <div className="space-y-2 rounded-lg bg-muted p-4">
            <h3 className="font-medium">What to expect:</h3>
            <ul className="ml-4 list-disc space-y-1 text-sm text-muted-foreground">
              <li>Personalized one-on-one video consultation</li>
              <li>Expert guidance tailored to your needs</li>
              <li>Screen sharing capabilities for demonstrations</li>
              <li>Session recording available upon request</li>
              <li>Follow-up resources after your session</li>
            </ul>
          </div>
        </div>
        <div>
          <BookingForm />
        </div>
      </div>
    </div>
    </div>
    </>
  )
}