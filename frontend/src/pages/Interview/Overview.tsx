import React from "react";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { FileText, Search, MessageSquareText, UserRound, BriefcaseBusiness, Lightbulb, Timer } from "lucide-react"; // Icons
const Overview = () => {
    return (
        <Card>
            <CardHeader>
                <CardTitle>Your Interview Roadmap</CardTitle>
                <CardDescription>Follow these steps to prepare effectively for your interview</CardDescription>
            </CardHeader>
            <CardContent className="grid gap-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <Card className="bg-primary/5">
                        <CardHeader className="pb-2">
                            <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mb-2">
                                <FileText className="h-5 w-5 text-primary" />
                            </div>
                            <CardTitle className="text-lg">Resume Preparation</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p className="text-sm text-muted-foreground">
                                Tailor your resume to highlight relevant experience and skills for the position.
                            </p>
                        </CardContent>
                    </Card>

                    <Card className="bg-primary/5">
                        <CardHeader className="pb-2">
                            <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mb-1">
                                <Search className="h-5 w-5 text-primary" />
                            </div>
                            <CardTitle className="text-lg">Company Research</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p className="text-sm text-muted-foreground">
                                Research the company's culture, values, products, and recent news.
                            </p>
                        </CardContent>
                    </Card>

                    <Card className="bg-primary/5">
                        <CardHeader className="pb-2">
                            <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mb-2">
                                <MessageSquareText className="h-5 w-5 text-primary" />
                            </div>
                            <CardTitle className="text-lg">Practice Responses</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p className="text-sm text-muted-foreground">
                                Prepare and practice answers to common interview questions.
                            </p>
                        </CardContent>
                    </Card>
                </div>

                <div className="space-y-4">
                    <h3 className="text-lg font-medium">Key Areas to Focus On</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="flex items-start gap-3">
                            <div className="mt-0.5">
                                <UserRound className="h-5 w-5 text-primary" />
                            </div>
                            <div>
                                <h4 className="font-medium">Behavioral Questions</h4>
                                <p className="text-sm text-muted-foreground">
                                    Prepare STAR method responses (Situation, Task, Action, Result) for behavioral questions.
                                </p>
                            </div>
                        </div>
                        <div className="flex items-start gap-3">
                            <div className="mt-0.5">
                                <BriefcaseBusiness className="h-5 w-5 text-primary" />
                            </div>
                            <div>
                                <h4 className="font-medium">Technical Skills</h4>
                                <p className="text-sm text-muted-foreground">
                                    Review technical concepts and be prepared to demonstrate your expertise.
                                </p>
                            </div>
                        </div>
                        <div className="flex items-start gap-3">
                            <div className="mt-0.5">
                                <Lightbulb className="h-5 w-5 text-primary" />
                            </div>
                            <div>
                                <h4 className="font-medium">Problem-Solving</h4>
                                <p className="text-sm text-muted-foreground">
                                    Practice thinking aloud when solving problems to showcase your thought process.
                                </p>
                            </div>
                        </div>
                        <div className="flex items-start gap-3">
                            <div className="mt-0.5">
                                <Timer className="h-5 w-5 text-primary" />
                            </div>
                            <div>
                                <h4 className="font-medium">Time Management</h4>
                                <p className="text-sm text-muted-foreground">
                                    Plan your interview day carefully and arrive early to avoid unnecessary stress.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </CardContent>
            <CardFooter >
                <div className=" mx-auto">
                    <Button className="w-full sm:w-auto">Start Preparation</Button>
                </div>
            </CardFooter>
        </Card>
    )
}

export default Overview