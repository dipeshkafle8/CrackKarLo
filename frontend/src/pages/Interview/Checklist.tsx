import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";

interface ChecklistProps {
    updateProgress: (checked: boolean, value: number) => void;
}

const InterviewChecklist: React.FC<ChecklistProps> = ({ updateProgress }) => {
    return (
        <Card>
            <CardHeader>
                <CardTitle>Interview Day Checklist</CardTitle>
                <CardDescription>Ensure you're fully prepared for your interview</CardDescription>
            </CardHeader>
            <CardContent>
                <div className="space-y-6">
                    <div className="space-y-4">
                        <h3 className="text-lg font-medium">Before the Interview</h3>
                        <div className="grid gap-3">
                            <div className="flex items-start space-x-3">
                                <Checkbox
                                    id="research-company"
                                    onCheckedChange={(checked) => updateProgress(checked as boolean, 2)}
                                />
                                <div className="grid gap-1.5 leading-none">
                                    <label
                                        htmlFor="research-company"
                                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                    >
                                        Research the company thoroughly
                                    </label>
                                </div>
                            </div>
                            <div className="flex items-start space-x-3">
                                <Checkbox
                                    id="prepare-questions"
                                    onCheckedChange={(checked) => updateProgress(checked as boolean, 2)}
                                />
                                <div className="grid gap-1.5 leading-none">
                                    <label
                                        htmlFor="prepare-questions"
                                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                    >
                                        Prepare questions to ask the interviewer
                                    </label>
                                </div>
                            </div>
                            <div className="flex items-start space-x-3">
                                <Checkbox
                                    id="print-resume"
                                    onCheckedChange={(checked) => updateProgress(checked as boolean, 2)}
                                />
                                <div className="grid gap-1.5 leading-none">
                                    <label
                                        htmlFor="print-resume"
                                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                    >
                                        Print extra copies of your resume
                                    </label>
                                </div>
                            </div>
                            <div className="flex items-start space-x-3">
                                <Checkbox
                                    id="outfit-ready"
                                    onCheckedChange={(checked) => updateProgress(checked as boolean, 2)}
                                />
                                <div className="grid gap-1.5 leading-none">
                                    <label
                                        htmlFor="outfit-ready"
                                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                    >
                                        Prepare your outfit the night before
                                    </label>
                                </div>
                            </div>
                            <div className="flex items-start space-x-3">
                                <Checkbox
                                    id="route-planned"
                                    onCheckedChange={(checked) => updateProgress(checked as boolean, 2)}
                                />
                                <div className="grid gap-1.5 leading-none">
                                    <label
                                        htmlFor="route-planned"
                                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                    >
                                        Plan your route to the interview location
                                    </label>
                                </div>
                            </div>
                        </div>
                    </div>

                    <Separator />

                    <div className="space-y-4">
                        <h3 className="text-lg font-medium">Day of the Interview</h3>
                        <div className="grid gap-3">
                            <div className="flex items-start space-x-3">
                                <Checkbox
                                    id="arrive-early"
                                    onCheckedChange={(checked) => updateProgress(checked as boolean, 2)}
                                />
                                <div className="grid gap-1.5 leading-none">
                                    <label
                                        htmlFor="arrive-early"
                                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                    >
                                        Arrive 15-20 minutes early
                                    </label>
                                </div>
                            </div>
                            <div className="flex items-start space-x-3">
                                <Checkbox
                                    id="bring-materials"
                                    onCheckedChange={(checked) => updateProgress(checked as boolean, 2)}
                                />
                                <div className="grid gap-1.5 leading-none">
                                    <label
                                        htmlFor="bring-materials"
                                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                    >
                                        Bring copies of your resume, portfolio, and ID
                                    </label>
                                </div>
                            </div>
                            <div className="flex items-start space-x-3">
                                <Checkbox
                                    id="phone-silent"
                                    onCheckedChange={(checked) => updateProgress(checked as boolean, 2)}
                                />
                                <div className="grid gap-1.5 leading-none">
                                    <label
                                        htmlFor="phone-silent"
                                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                    >
                                        Turn your phone to silent mode
                                    </label>
                                </div>
                            </div>
                            <div className="flex items-start space-x-3">
                                <Checkbox
                                    id="firm-handshake"
                                    onCheckedChange={(checked) => updateProgress(checked as boolean, 2)}
                                />
                                <div className="grid gap-1.5 leading-none">
                                    <label
                                        htmlFor="firm-handshake"
                                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                    >
                                        Greet with a firm handshake and smile
                                    </label>
                                </div>
                            </div>
                            <div className="flex items-start space-x-3">
                                <Checkbox
                                    id="take-notes"
                                    onCheckedChange={(checked) => updateProgress(checked as boolean, 2)}
                                />
                                <div className="grid gap-1.5 leading-none">
                                    <label
                                        htmlFor="take-notes"
                                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                    >
                                        Bring a notepad and pen to take notes
                                    </label>
                                </div>
                            </div>
                        </div>
                    </div>

                    <Separator />

                    <div className="space-y-4">
                        <h3 className="text-lg font-medium">After the Interview</h3>
                        <div className="grid gap-3">
                            <div className="flex items-start space-x-3">
                                <Checkbox id="thank-you" onCheckedChange={(checked) => updateProgress(checked as boolean, 2)} />
                                <div className="grid gap-1.5 leading-none">
                                    <label
                                        htmlFor="thank-you"
                                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                    >
                                        Send a thank-you email within 24 hours
                                    </label>
                                </div>
                            </div>
                            <div className="flex items-start space-x-3">
                                <Checkbox id="reflect" onCheckedChange={(checked) => updateProgress(checked as boolean, 2)} />
                                <div className="grid gap-1.5 leading-none">
                                    <label
                                        htmlFor="reflect"
                                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                    >
                                        Reflect on the interview and note areas for improvement
                                    </label>
                                </div>
                            </div>
                            <div className="flex items-start space-x-3">
                                <Checkbox id="follow-up" onCheckedChange={(checked) => updateProgress(checked as boolean, 2)} />
                                <div className="grid gap-1.5 leading-none">
                                    <label
                                        htmlFor="follow-up"
                                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                    >
                                        Follow up if you haven't heard back within a week
                                    </label>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </CardContent>
            <CardFooter>
                <Button className="w-full sm:w-auto">Download Checklist</Button>
            </CardFooter>
        </Card>
    );
}
export default InterviewChecklist;