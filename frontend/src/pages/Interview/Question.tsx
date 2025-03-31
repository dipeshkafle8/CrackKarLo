import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";
import { UserRound } from "lucide-react"; // For the user icon

const Question = () => {
    return (
        <Card>
            <CardHeader>
                <CardTitle>Common Interview Questions</CardTitle>
                <CardDescription>Prepare answers for these frequently asked questions</CardDescription>
            </CardHeader>
            <CardContent>
                <Accordion type="single" collapsible className="w-full">
                    <AccordionItem value="item-1">
                        <AccordionTrigger>
                            <div className="flex items-center gap-3">
                                <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                                    <UserRound className="h-4 w-4 text-primary" />
                                </div>
                                <span>Tell me about yourself</span>
                            </div>
                        </AccordionTrigger>
                        <AccordionContent className="pl-11">
                            <div className="space-y-4">
                                <p className="text-muted-foreground">
                                    This is often the opening question. Keep your answer professional and concise (1-2 minutes).
                                </p>
                                <div className="space-y-2">
                                    <h4 className="font-medium">Tips:</h4>
                                    <ul className="list-disc pl-5 space-y-1 text-sm">
                                        <li>Start with your current role and responsibilities</li>
                                        <li>Highlight 2-3 key achievements or experiences</li>
                                        <li>Explain why you're interested in this position</li>
                                        <li>Focus on relevant skills and experience</li>
                                    </ul>
                                </div>
                                <div className="p-4 bg-muted rounded-md">
                                    <h4 className="font-medium mb-2">Example Answer Framework:</h4>
                                    <p className="text-sm">
                                        "I'm currently a [position] at [company] where I [key responsibility]. Before that, I
                                        [previous experience]. Throughout my career, I've developed strong skills in [relevant
                                        skills]. I'm particularly proud of [achievement]. I'm interested in this role because
                                        [specific reason related to the position]."
                                    </p>
                                </div>
                            </div>
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-2">
                        <AccordionTrigger>
                            <div className="flex items-center gap-3">
                                <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                                    <UserRound className="h-4 w-4 text-primary" />
                                </div>
                                <span>What are your strengths and weaknesses?</span>
                            </div>
                        </AccordionTrigger>
                        <AccordionContent className="pl-11">
                            <div className="space-y-4">
                                <p className="text-muted-foreground">
                                    This question tests your self-awareness and honesty. For weaknesses, show how you're working
                                    to improve.
                                </p>
                                <div className="space-y-2">
                                    <h4 className="font-medium">Tips for Strengths:</h4>
                                    <ul className="list-disc pl-5 space-y-1 text-sm">
                                        <li>Choose strengths relevant to the position</li>
                                        <li>Provide specific examples that demonstrate each strength</li>
                                        <li>Connect your strengths to the job requirements</li>
                                    </ul>
                                </div>
                                <div className="space-y-2">
                                    <h4 className="font-medium">Tips for Weaknesses:</h4>
                                    <ul className="list-disc pl-5 space-y-1 text-sm">
                                        <li>Choose a genuine weakness that isn't critical to the job</li>
                                        <li>Explain the steps you're taking to improve</li>
                                        <li>Show that you're self-aware and committed to growth</li>
                                    </ul>
                                </div>
                            </div>
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-3">
                        <AccordionTrigger>
                            <div className="flex items-center gap-3">
                                <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                                    <UserRound className="h-4 w-4 text-primary" />
                                </div>
                                <span>Why do you want to work here?</span>
                            </div>
                        </AccordionTrigger>
                        <AccordionContent className="pl-11">
                            <div className="space-y-4">
                                <p className="text-muted-foreground">
                                    This question tests if you've done your research and are genuinely interested in the company.
                                </p>
                                <div className="space-y-2">
                                    <h4 className="font-medium">Tips:</h4>
                                    <ul className="list-disc pl-5 space-y-1 text-sm">
                                        <li>Mention specific aspects of the company that appeal to you</li>
                                        <li>Connect the company's mission or values to your own</li>
                                        <li>Explain how the role aligns with your career goals</li>
                                        <li>Show enthusiasm for the company's products or services</li>
                                    </ul>
                                </div>
                            </div>
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-4">
                        <AccordionTrigger>
                            <div className="flex items-center gap-3">
                                <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                                    <UserRound className="h-4 w-4 text-primary" />
                                </div>
                                <span>Tell me about a challenge you faced at work</span>
                            </div>
                        </AccordionTrigger>
                        <AccordionContent className="pl-11">
                            <div className="space-y-4">
                                <p className="text-muted-foreground">
                                    Use the STAR method (Situation, Task, Action, Result) to structure your response.
                                </p>
                                <div className="space-y-2">
                                    <h4 className="font-medium">STAR Method:</h4>
                                    <ul className="list-disc pl-5 space-y-1 text-sm">
                                        <li>
                                            <strong>Situation:</strong> Describe the context and background
                                        </li>
                                        <li>
                                            <strong>Task:</strong> Explain your responsibility in that situation
                                        </li>
                                        <li>
                                            <strong>Action:</strong> Detail the specific steps you took
                                        </li>
                                        <li>
                                            <strong>Result:</strong> Share the outcomes and what you learned
                                        </li>
                                    </ul>
                                </div>
                                <div className="p-4 bg-muted rounded-md">
                                    <h4 className="font-medium mb-2">Example Answer Framework:</h4>
                                    <p className="text-sm">
                                        "In my role at [company], we faced [specific challenge]. I was responsible for [your task].
                                        To address this, I [specific actions taken]. As a result, [positive outcome]. From this
                                        experience, I learned [lesson learned]."
                                    </p>
                                </div>
                            </div>
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-5">
                        <AccordionTrigger>
                            <div className="flex items-center gap-3">
                                <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                                    <UserRound className="h-4 w-4 text-primary" />
                                </div>
                                <span>Where do you see yourself in 5 years?</span>
                            </div>
                        </AccordionTrigger>
                        <AccordionContent className="pl-11">
                            <div className="space-y-4">
                                <p className="text-muted-foreground">
                                    This question assesses your career goals and if they align with the company's growth plans.
                                </p>
                                <div className="space-y-2">
                                    <h4 className="font-medium">Tips:</h4>
                                    <ul className="list-disc pl-5 space-y-1 text-sm">
                                        <li>Be realistic but ambitious</li>
                                        <li>Show how this role fits into your long-term career path</li>
                                        <li>Demonstrate commitment to growth and development</li>
                                        <li>Connect your goals to the company's future</li>
                                    </ul>
                                </div>
                            </div>
                        </AccordionContent>
                    </AccordionItem>
                </Accordion>
            </CardContent>
        </Card>
    )
}

export default Question;