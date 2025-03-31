import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CheckCircle } from "lucide-react"; // For the checkmark icon

const Practice = () => {
    return (
    <Card>
        <CardHeader>
            <CardTitle>Practice Interviews</CardTitle>
            <CardDescription>Rehearse your responses and get feedback</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
            <div className="space-y-4">
                <h3 className="text-lg font-medium">Mock Interview Tips</h3>
                <div className="grid gap-4">
                    <div className="flex items-start gap-3 p-4 border rounded-lg">
                        <div className="mt-0.5">
                            <CheckCircle className="h-5 w-5 text-primary" />
                        </div>
                        <div>
                            <h4 className="font-medium">Record yourself</h4>
                            <p className="text-sm text-muted-foreground">
                                Record your practice sessions to review your body language, tone, and verbal fillers.
                            </p>
                        </div>
                    </div>
                    <div className="flex items-start gap-3 p-4 border rounded-lg">
                        <div className="mt-0.5">
                            <CheckCircle className="h-5 w-5 text-primary" />
                        </div>
                        <div>
                            <h4 className="font-medium">Practice with a friend</h4>
                            <p className="text-sm text-muted-foreground">
                                Ask a friend or family member to conduct a mock interview and provide feedback.
                            </p>
                        </div>
                    </div>
                    <div className="flex items-start gap-3 p-4 border rounded-lg">
                        <div className="mt-0.5">
                            <CheckCircle className="h-5 w-5 text-primary" />
                        </div>
                        <div>
                            <h4 className="font-medium">Use interview practice platforms</h4>
                            <p className="text-sm text-muted-foreground">
                                Try online platforms that offer AI-powered mock interviews or connect you with professionals.
                            </p>
                        </div>
                    </div>
                    <div className="flex items-start gap-3 p-4 border rounded-lg">
                        <div className="mt-0.5">
                            <CheckCircle className="h-5 w-5 text-primary" />
                        </div>
                        <div>
                            <h4 className="font-medium">Time your responses</h4>
                            <p className="text-sm text-muted-foreground">
                                Aim for 1-2 minute answers for most questions to avoid rambling or being too brief.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="space-y-4">
                <h3 className="text-lg font-medium">Practice Schedule</h3>
                <div className="border rounded-lg overflow-hidden">
                    <div className="grid grid-cols-3 bg-muted p-3">
                        <div className="font-medium">Day</div>
                        <div className="font-medium">Focus Area</div>
                        <div className="font-medium">Duration</div>
                    </div>
                    <div className="divide-y">
                        <div className="grid grid-cols-3 p-3">
                            <div>Day 1</div>
                            <div>Common Questions</div>
                            <div>30 minutes</div>
                        </div>
                        <div className="grid grid-cols-3 p-3">
                            <div>Day 2</div>
                            <div>Behavioral Questions</div>
                            <div>45 minutes</div>
                        </div>
                        <div className="grid grid-cols-3 p-3">
                            <div>Day 3</div>
                            <div>Technical Questions</div>
                            <div>60 minutes</div>
                        </div>
                        <div className="grid grid-cols-3 p-3">
                            <div>Day 4</div>
                            <div>Full Mock Interview</div>
                            <div>90 minutes</div>
                        </div>
                        <div className="grid grid-cols-3 p-3">
                            <div>Day 5</div>
                            <div>Review & Refine</div>
                            <div>45 minutes</div>
                        </div>
                    </div>
                </div>
            </div>
        </CardContent>
        <CardFooter>
            <Button className="w-full sm:w-auto">Schedule Practice Session</Button>
        </CardFooter>
    </Card>
    );
}

export default Practice;