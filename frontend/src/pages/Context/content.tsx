import { useEffect, useState } from 'react';
import bg_veido from './videos/206779_tiny.mp4';
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
// import { Badge } from "@/components/ui/badge"
import {
  BookOpen,
  Video,
  CheckCircle,
  BrainCircuit,
    Laptop,
    Users,
    MessageSquare,
    ArrowRight,
} from "lucide-react"
import Footer from '../BaseLayout/footer';
import {Link} from 'react-router-dom';



const Content = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isAnimating, setIsAnimating] = useState(false);
    const [isTransitioning, setIsTransitioning] = useState(false);

    const boxes = [
        { id: 1, text: 'Best Networking', subtext: 'Suspendisse tempor mauris a sem elementum bibendum. Praesent facilisis massa non vestibulum.' },
        { id: 2, text: 'Best Education', subtext: 'Suspendisse tempor mauris a sem elementum bibendum. Praesent facilisis massa non vestibulum.' },
        { id: 3, text: 'Best Teachers', subtext: 'Suspendisse tempor mauris a sem elementum bibendum. Praesent facilisis massa non vestibulum.' },
        { id: 4, text: 'Best Networking', subtext: 'Suspendisse tempor mauris a sem elementum bibendum. Praesent facilisis massa non vestibulum.' },
        { id: 5, text: 'Best Education', subtext: 'Suspendisse tempor mauris a sem elementum bibendum. Praesent facilisis massa non vestibulum.' },
        { id: 6, text: 'Best Teachers', subtext: 'Suspendisse tempor mauris a sem elementum bibendum. Praesent facilisis massa non vestibulum.' },
    ];

    // Clone items for smooth forward transition
    const clonedBoxes = [
        ...boxes,
        ...boxes.slice(0, 3), // First 3 items for smooth transition
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            if (!isTransitioning) {
                handleNextClick();
            }
        }, 3000);

        return () => clearInterval(interval);
    }, [isTransitioning]);

    const handleTransitionEnd = () => {
        setIsTransitioning(false);
        setIsAnimating(false);

        // Reset to beginning without animation when reaching the end
        if (currentIndex >= boxes.length) {
            setIsAnimating(false);
            setCurrentIndex(0);
        }
    };

    const handleNextClick = () => {
        if (isTransitioning) return;
        setIsTransitioning(true);
        setIsAnimating(true);
        setCurrentIndex((prevIndex) => {
            const nextIndex = prevIndex + 1;
            return nextIndex >= boxes.length ? 0 : nextIndex;
        });
    };

    return (
        <div className='relative h-screen'>
            {/* Background Video */}
            <video autoPlay loop muted className='absolute w-[100%] h-[100%] object-cover z-[-1] brightness-80 rounded-b-md'>
                <source src={bg_veido} type="video/mp4" />
            </video>

            {/* Content Section */}
            <div className="flex flex-col text-white justify-center h-screen pl-20">
                <h1 className="text-2xl font-semibold">HELLO STUDENTS</h1>
                <p className="text-5xl font-bold pt-2">WELCOME TO OUR WEBSITE</p>
                <p className="text-lg pt-2">We provide the best education for you</p>
                <button className="bg-[#a70b0b] text-white w-35 h-auto hover:bg-blue-600 px-4 py-2 rounded-full mt-4">
                    Get Started!
                </button>
            </div>

            {/* Carousel Section */}
            <div className='absolute bottom-[-90px] left-0 right-0 flex justify-center items-center'>
                <div className='relative w-[1100px] overflow-hidden'>
                    <div
                        className={`flex transition-transform duration-500 ease-in-out ${isAnimating ? '' : 'duration-0'} gap-3`}
                        style={{
                            transform: `translate3d(-${currentIndex * 350}px, 0, 0)`,
                            width: `${clonedBoxes.length * 350}px`,
                        }}
                        onTransitionEnd={handleTransitionEnd}
                    >
                        {clonedBoxes.map((box, index) => (
                            <div
                                key={index}
                                className='border-2 pr-4 w-[350px] h-[220px] rounded-2xl border-[#a70b0b] bg-[#a70b0b] flex-shrink-0 flex items-center justify-center flex-col'
                            >
                                <h1 className="text-xl font-bold">{box.text}</h1>
                                <p className="text-sm">{box.subtext}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/*Our model*/}
            <section className="flex w-full py-12 md:py-24 lg:py-32  bg-opacity-10 bg-gray-100 border-t border-b border-gray-200 rounded-2xl algin-center justify-center  ">
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
              <Card className='bg-white'>
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
                    <Link to="/course" className='w-full'>
                  <Button variant="outline" className="w-full">
                  Explore Courses
                  </Button>
                  </Link>
                </CardFooter>
              </Card>

              <Card className='bg-white'>
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
                  <Link to="/interview" className='w-full'>
                  <Button variant="outline" className="w-full">
                    Practice Now
                  </Button>
                  </Link>
                </CardFooter>
              </Card>

              <Card className='bg-white'>
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
                  <Link to="/booksession" className='w-full'>
                  <Button variant="outline" className="w-full">
                    Book a Session
                  </Button>
                  </Link>
                </CardFooter>
              </Card>
            </div>
          </div>
        </section>

        {/*Learning Paths*/}
        <section className="flex justify-center algin-center w-full py-12 md:py-24 lg:py-32">
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
              <TabsList className="grid w-full grid-cols-3 bg-gray-200">
                <TabsTrigger value="frontend" >Frontend</TabsTrigger>
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
                  <Link to={'/course'}>
                  <CardFooter>
                    <Button className="w-full">Start Frontend Path</Button>
                  </CardFooter>
                  </Link>
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
                  <Link to={'/course'}>
                  <CardFooter>
                    <Button className="w-full">Start Full Stack Path</Button>
                  </CardFooter>
                  </Link>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </section>
        
        <section className=' flex justify-center algin-center w-full py-12 md:py-24 lg:py-32 bg-gray-100 border-t border-b border-gray-200 rounded-2xl'>
          <div className='container px-4 md:px-6'>
          <div className='flex flex-col items-center justify-center space-y-4 text-center'>
          <div className='space-y-2'>
            <h2 className='text-3xl font-bold tracking-tighter sm:text-5xl'>Interview Preparation</h2>
            <p className='max-w-[900px] text-muted-foreground md:text-xl/relaxed'>
              Structured practice to help you ace technical interviews at top companies
              </p>
          </div>
          </div>
          <div className='mx-auto grid max-w-5xl gap-8 py-12 md:grid-cols-2'>
            <Card className='flex flex-col'>
              <CardHeader>
                <CardTitle>Mock Interviews</CardTitle>
                <CardDescription>Practice with real interview scenarios</CardDescription>
              </CardHeader>
              <CardContent className='flex-1'>
                <img src=""
                width={400}
                height={200}
                alt='Mock Interview'
                className="rounded-lg object-cover w-full h-48 mb-4" />
                <p className='text-sm text-muted-foreground'>
                Our mock interviews simulate real technical interviews at top tech companies. Get feedback from
                experienced interviewers and improve your performance.
                </p>
              </CardContent>
              <Link to={'/praticesession'}>
              <CardFooter>
                <Button className="w-full" variant="outline">Start Mock Interview</Button>
              </CardFooter>
              </Link>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Coading Challenges</CardTitle>
                <CardDescription>Prepare for coding interviews with real problems</CardDescription>
              </CardHeader>
              <CardContent className='flex-1'>
              <img src=""
                width={400}
                height={200}
                alt='Mock Interview'
                className="rounded-lg object-cover w-full h-48 mb-4"/>
                <p className='text-sm text-muted-foreground'>
                Practice coding problems from top tech companies and improve your problem-solving skills. Get
                detailed solutions and explanations for each challenge.
                </p>
                </CardContent>
                <Link to={'/course'}>
                <CardFooter>
                  <Button className="w-full" variant="outline">Start Coding Challenges</Button>
                </CardFooter>
                </Link>
            </Card>
          </div>
          </div>
        </section>

        {/* <section className="flex justify-center algin-center w-full py-12 md:py-24 lg:py-32">
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
        </section> */}

        <section className='flex justify-center algin-center pt-25 bg-gray-100 border-t border-b border-gray-200 rounded-2xl'>
          <div className='container px-4 md:px-6'>
            <div className='flex flex-col items-center justify-center space-y-4 text-center'>
              <img src=""
                width={550}
                height={550}
                alt="Students learning"
                className="mx-auto aspect-video overflow-hidden rounded-xl object-cover sm:w-2/3 border-2"/>
                <div className='flex flex-col items-center justify-center text-center py-12 md:py-24 lg:py-32'>
                <div className='space-y-3'>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
                    Ready to start your coding journey?
                  </h2>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed">Join us now to take a best knowledge about how to crack jobs and learn how to code with professionals</p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Button size="lg">
                    Get Started Today
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                  </div>
            </div>
          </div>
          </div>
        </section>
        <Footer/>
        </div>
    );
};

export default Content;