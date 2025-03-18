import React from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import {
  Code2,
  BookOpen,
  Video,
  Users,
  CheckCircle,
  ArrowRight,
  Laptop,
  BrainCircuit,
  MessageSquare,
} from "lucide-react"

export default function Component() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <Code2 className="h-6 w-6" />
            <span className="text-xl font-bold">CodeMaster</span>
          </div>
          <nav className="hidden md:flex gap-6">
            <Link href="#" className="text-sm font-medium transition-colors hover:text-primary">
              Courses
            </Link>
            <Link href="#" className="text-sm font-medium transition-colors hover:text-primary">
              Interview Prep
            </Link>
            <Link href="#" className="text-sm font-medium transition-colors hover:text-primary">
              Live Sessions
            </Link>
            <Link href="#" className="text-sm font-medium transition-colors hover:text-primary">
              About
            </Link>
            <Link href="#" className="text-sm font-medium transition-colors hover:text-primary">
              Contact
            </Link>
          </nav>
          <div className="flex items-center gap-4">
            <Link href="#" className="text-sm font-medium hover:underline underline-offset-4">
              Log in
            </Link>
            <Button>Sign up</Button>
          </div>
        </div>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <Badge className="inline-flex bg-primary text-primary-foreground">New Courses Added Weekly</Badge>
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                    Master Coding & Ace Your Tech Interviews
                  </h1>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl">
                    Comprehensive coding education, interview preparation, and live mentoring to help you launch your
                    tech career.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Button size="lg">
                    Get Started
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                  <Button size="lg" variant="outline">
                    View Courses
                  </Button>
                </div>
              </div>
              <Image
                src="/placeholder.svg?height=550&width=550"
                width={550}
                height={550}
                alt="Hero"
                className="mx-auto aspect-video overflow-hidden rounded-xl object-cover sm:w-full lg:order-last"
              />
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">What We Offer</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed">
                  Everything you need to master coding and land your dream job in tech
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 md:grid-cols-2 lg:grid-cols-3">
              <Card>
                <CardHeader>
                  <BookOpen className="h-10 w-10 text-primary mb-2" />
                  <CardTitle>Comprehensive Courses</CardTitle>
                  <CardDescription>
                    From beginner to advanced, learn at your own pace with structured curriculum
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-center">
                      <CheckCircle className="mr-2 h-4 w-4 text-primary" />
                      <span>Frontend & Backend Development</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="mr-2 h-4 w-4 text-primary" />
                      <span>Data Structures & Algorithms</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="mr-2 h-4 w-4 text-primary" />
                      <span>Project-based Learning</span>
                    </li>
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" className="w-full">
                    Explore Courses
                  </Button>
                </CardFooter>
              </Card>

              <Card>
                <CardHeader>
                  <BrainCircuit className="h-10 w-10 text-primary mb-2" />
                  <CardTitle>Interview Preparation</CardTitle>
                  <CardDescription>Structured practice to help you ace technical interviews</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-center">
                      <CheckCircle className="mr-2 h-4 w-4 text-primary" />
                      <span>Mock Interviews</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="mr-2 h-4 w-4 text-primary" />
                      <span>Coding Challenges</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="mr-2 h-4 w-4 text-primary" />
                      <span>System Design Practice</span>
                    </li>
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" className="w-full">
                    Practice Now
                  </Button>
                </CardFooter>
              </Card>

              <Card>
                <CardHeader>
                  <Video className="h-10 w-10 text-primary mb-2" />
                  <CardTitle>Live Video Sessions</CardTitle>
                  <CardDescription>Real-time guidance from industry professionals</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-center">
                      <CheckCircle className="mr-2 h-4 w-4 text-primary" />
                      <span>1-on-1 Mentoring</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="mr-2 h-4 w-4 text-primary" />
                      <span>Group Coding Sessions</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="mr-2 h-4 w-4 text-primary" />
                      <span>Code Reviews</span>
                    </li>
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" className="w-full">
                    Book a Session
                  </Button>
                </CardFooter>
              </Card>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Popular Learning Paths</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed">
                  Choose a structured path to achieve your career goals
                </p>
              </div>
            </div>

            <Tabs defaultValue="frontend" className="mt-12 max-w-4xl mx-auto">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="frontend">Frontend</TabsTrigger>
                <TabsTrigger value="backend">Backend</TabsTrigger>
                <TabsTrigger value="fullstack">Full Stack</TabsTrigger>
              </TabsList>
              <TabsContent value="frontend" className="mt-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Frontend Development Path</CardTitle>
                    <CardDescription>Master modern web development with React, Next.js and more</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid gap-4 md:grid-cols-2">
                      <div className="flex flex-col gap-2 border rounded-lg p-4">
                        <div className="flex items-center gap-2">
                          <Laptop className="h-5 w-5 text-primary" />
                          <h3 className="font-medium">HTML, CSS & JavaScript</h3>
                        </div>
                        <p className="text-sm text-muted-foreground">
                          Build a solid foundation with the core web technologies
                        </p>
                      </div>
                      <div className="flex flex-col gap-2 border rounded-lg p-4">
                        <div className="flex items-center gap-2">
                          <Laptop className="h-5 w-5 text-primary" />
                          <h3 className="font-medium">React & Next.js</h3>
                        </div>
                        <p className="text-sm text-muted-foreground">Create dynamic, interactive user interfaces</p>
                      </div>
                      <div className="flex flex-col gap-2 border rounded-lg p-4">
                        <div className="flex items-center gap-2">
                          <Laptop className="h-5 w-5 text-primary" />
                          <h3 className="font-medium">State Management</h3>
                        </div>
                        <p className="text-sm text-muted-foreground">
                          Learn Redux, Context API, and other state solutions
                        </p>
                      </div>
                      <div className="flex flex-col gap-2 border rounded-lg p-4">
                        <div className="flex items-center gap-2">
                          <Laptop className="h-5 w-5 text-primary" />
                          <h3 className="font-medium">Frontend Testing</h3>
                        </div>
                        <p className="text-sm text-muted-foreground">
                          Write tests to ensure your applications work correctly
                        </p>
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button className="w-full">Start Frontend Path</Button>
                  </CardFooter>
                </Card>
              </TabsContent>
              <TabsContent value="backend" className="mt-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Backend Development Path</CardTitle>
                    <CardDescription>Build robust server-side applications and APIs</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid gap-4 md:grid-cols-2">
                      <div className="flex flex-col gap-2 border rounded-lg p-4">
                        <div className="flex items-center gap-2">
                          <Laptop className="h-5 w-5 text-primary" />
                          <h3 className="font-medium">Node.js Fundamentals</h3>
                        </div>
                        <p className="text-sm text-muted-foreground">Learn server-side JavaScript with Node.js</p>
                      </div>
                      <div className="flex flex-col gap-2 border rounded-lg p-4">
                        <div className="flex items-center gap-2">
                          <Laptop className="h-5 w-5 text-primary" />
                          <h3 className="font-medium">Express & API Design</h3>
                        </div>
                        <p className="text-sm text-muted-foreground">Create RESTful APIs and web servers</p>
                      </div>
                      <div className="flex flex-col gap-2 border rounded-lg p-4">
                        <div className="flex items-center gap-2">
                          <Laptop className="h-5 w-5 text-primary" />
                          <h3 className="font-medium">Databases</h3>
                        </div>
                        <p className="text-sm text-muted-foreground">Work with SQL and NoSQL databases</p>
                      </div>
                      <div className="flex flex-col gap-2 border rounded-lg p-4">
                        <div className="flex items-center gap-2">
                          <Laptop className="h-5 w-5 text-primary" />
                          <h3 className="font-medium">Authentication & Security</h3>
                        </div>
                        <p className="text-sm text-muted-foreground">Implement secure user authentication systems</p>
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button className="w-full">Start Backend Path</Button>
                  </CardFooter>
                </Card>
              </TabsContent>
              <TabsContent value="fullstack" className="mt-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Full Stack Development Path</CardTitle>
                    <CardDescription>Master both client and server-side development</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid gap-4 md:grid-cols-2">
                      <div className="flex flex-col gap-2 border rounded-lg p-4">
                        <div className="flex items-center gap-2">
                          <Laptop className="h-5 w-5 text-primary" />
                          <h3 className="font-medium">Frontend Essentials</h3>
                        </div>
                        <p className="text-sm text-muted-foreground">HTML, CSS, JavaScript and React</p>
                      </div>
                      <div className="flex flex-col gap-2 border rounded-lg p-4">
                        <div className="flex items-center gap-2">
                          <Laptop className="h-5 w-5 text-primary" />
                          <h3 className="font-medium">Backend Development</h3>
                        </div>
                        <p className="text-sm text-muted-foreground">Node.js, Express, and databases</p>
                      </div>
                      <div className="flex flex-col gap-2 border rounded-lg p-4">
                        <div className="flex items-center gap-2">
                          <Laptop className="h-5 w-5 text-primary" />
                          <h3 className="font-medium">Full Stack Projects</h3>
                        </div>
                        <p className="text-sm text-muted-foreground">Build complete applications from scratch</p>
                      </div>
                      <div className="flex flex-col gap-2 border rounded-lg p-4">
                        <div className="flex items-center gap-2">
                          <Laptop className="h-5 w-5 text-primary" />
                          <h3 className="font-medium">Deployment & DevOps</h3>
                        </div>
                        <p className="text-sm text-muted-foreground">Deploy and manage your applications</p>
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button className="w-full">Start Full Stack Path</Button>
                  </CardFooter>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Interview Preparation</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed">
                  Structured practice to help you ace technical interviews at top companies
                </p>
              </div>
            </div>

            <div className="mx-auto grid max-w-5xl gap-8 py-12 md:grid-cols-2">
              <Card className="flex flex-col">
                <CardHeader>
                  <CardTitle>Mock Interviews</CardTitle>
                  <CardDescription>Practice with real interview scenarios</CardDescription>
                </CardHeader>
                <CardContent className="flex-1">
                  <Image
                    src="/placeholder.svg?height=200&width=400"
                    width={400}
                    height={200}
                    alt="Mock Interview"
                    className="rounded-lg object-cover w-full h-48 mb-4"
                  />
                  <p className="text-sm text-muted-foreground">
                    Our mock interviews simulate real technical interviews at top tech companies. Get feedback from
                    experienced interviewers and improve your performance.
                  </p>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" className="w-full">
                    Schedule Mock Interview
                  </Button>
                </CardFooter>
              </Card>

              <Card className="flex flex-col">
                <CardHeader>
                  <CardTitle>Coding Challenges</CardTitle>
                  <CardDescription>Solve problems from real interviews</CardDescription>
                </CardHeader>
                <CardContent className="flex-1">
                  <Image
                    src="/placeholder.svg?height=200&width=400"
                    width={400}
                    height={200}
                    alt="Coding Challenge"
                    className="rounded-lg object-cover w-full h-48 mb-4"
                  />
                  <p className="text-sm text-muted-foreground">
                    Practice with our curated collection of coding challenges from real technical interviews. Learn
                    optimal solutions and improve your problem-solving skills.
                  </p>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" className="w-full">
                    Try Coding Challenges
                  </Button>
                </CardFooter>
              </Card>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Live Video Sessions</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed">
                  Get real-time guidance and feedback from industry professionals
                </p>
              </div>
            </div>

            <div className="mx-auto grid max-w-5xl gap-8 py-12 md:grid-cols-3">
              <Card>
                <CardHeader>
                  <CardTitle>1-on-1 Mentoring</CardTitle>
                  <CardDescription>Personalized guidance for your career</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="aspect-video relative rounded-lg overflow-hidden mb-4 bg-muted">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <Video className="h-12 w-12 text-muted-foreground/50" />
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Connect with experienced developers who can provide personalized guidance on your learning journey.
                  </p>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" className="w-full">
                    Book a Mentor
                  </Button>
                </CardFooter>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Group Sessions</CardTitle>
                  <CardDescription>Learn and collaborate with peers</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="aspect-video relative rounded-lg overflow-hidden mb-4 bg-muted">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <Users className="h-12 w-12 text-muted-foreground/50" />
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Join interactive group sessions where you can learn new concepts and collaborate on coding
                    challenges.
                  </p>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" className="w-full">
                    Join a Session
                  </Button>
                </CardFooter>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Code Reviews</CardTitle>
                  <CardDescription>Get feedback on your projects</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="aspect-video relative rounded-lg overflow-hidden mb-4 bg-muted">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <MessageSquare className="h-12 w-12 text-muted-foreground/50" />
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Submit your code for review by experienced developers and receive detailed feedback to improve your
                    skills.
                  </p>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" className="w-full">
                    Request Code Review
                  </Button>
                </CardFooter>
              </Card>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
              <Image
                src="/placeholder.svg?height=550&width=550"
                width={550}
                height={550}
                alt="Students learning"
                className="mx-auto aspect-video overflow-hidden rounded-xl object-cover sm:w-full"
              />
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
                    Ready to start your coding journey?
                  </h2>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed">
                    Join thousands of students who have successfully launched their careers in tech with our
                    comprehensive platform.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Button size="lg">
                    Get Started Today
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                  <Button size="lg" variant="outline">
                    View Pricing
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="w-full border-t py-6 md:py-0">
        <div className="container flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row">
          <div className="flex items-center gap-2">
            <Code2 className="h-6 w-6" />
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} CodeMaster. All rights reserved.
            </p>
          </div>
          <nav className="flex gap-4 sm:gap-6">
            <Link href="#" className="text-sm font-medium hover:underline underline-offset-4">
              Terms
            </Link>
            <Link href="#" className="text-sm font-medium hover:underline underline-offset-4">
              Privacy
            </Link>
            <Link href="#" className="text-sm font-medium hover:underline underline-offset-4">
              Cookies
            </Link>
          </nav>
        </div>
      </footer>
    </div>
  )
}

