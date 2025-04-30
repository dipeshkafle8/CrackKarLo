import type React from "react"
export default function ScheduleLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="min-h-screen bg-slate-50">
      <header className="bg-white border-b py-4">
        <div className="container mx-auto">
          <h2 className="text-xl font-semibold">Interview Prep Platform</h2>
        </div>
      </header>
      <main>{children}</main>
    </div>
  )
}
