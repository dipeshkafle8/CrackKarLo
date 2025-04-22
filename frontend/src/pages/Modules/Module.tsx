import { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
    SheetFooter,
    SheetClose,
} from "@/components/ui/sheet";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Airplay, ArrowBigRightDash } from "lucide-react";

const CourseModule = () => {
    const { courseId } = useParams<{ courseId: string }>();
    const [course, setCourse] = useState([]); // Store course details, including modules and their questions

    // Fetch course modules and their questions
    const getCourse = async () => {
        try {
            const resp = await axios.get(`/api/course/getModules/${courseId}`);
            const modules = resp.data.Modules;

            // Fetch questions for each module
            const modulesWithQuestions = await Promise.all(
                modules.map(async (module) => {
                    try {
                        const questionResp = await axios.get(`/api/course/getQuestions/${module._id}`);
                        return { ...module, questions: questionResp.data.Questions }; // Add questions to the module
                    } catch (error) {
                        console.error(`Error fetching questions for module ${module._id}:`, error);
                        return { ...module, questions: [] }; // Default to an empty array if fetching fails
                    }
                })
            );

            setCourse(modulesWithQuestions);
            console.log("Course data with questions:", modulesWithQuestions);
        } catch (error) {
            console.error("Error fetching course:", error);
        }
    };

    // Fetch course modules and questions on component mount
    useEffect(() => {
        if (courseId) {
            getCourse();
        }
    }, [courseId]);

    return (
        <>
            <div className="flex justify-end m-2">
                <Sheet>
                    <SheetTrigger>
                        <Button>Create Module</Button>
                    </SheetTrigger>
                    <SheetContent>
                        <SheetHeader>
                            <SheetTitle>Course Module</SheetTitle>
                            <SheetDescription>Module Description</SheetDescription>
                        </SheetHeader>
                        <form>
                            <div className="grid gap-4 py-4 ml-3 mr-2">
                                <div className="grid gap-2">
                                    <label>Module Name:</label>
                                    <Input type="text" placeholder="Module Name" />
                                </div>
                                <div className="grid gap-2">
                                    <label>Module Description:</label>
                                    <Textarea placeholder="Module Description" />
                                </div>
                                <SheetFooter>
                                    <Button type="submit">Submit</Button>
                                    <SheetClose className="border-2 h-9 rounded-md hover:shadow-xl shadow-black">
                                        Close
                                    </SheetClose>
                                </SheetFooter>
                            </div>
                        </form>
                    </SheetContent>
                </Sheet>
            </div>

            <div className="w-5/6 mx-auto">
                <Card>
                    <CardContent>
                        {course && course.length > 0 ? (
                            <div>
                                <Accordion type="single" collapsible className="w-full">
                                    {course.map((module, index) => (
                                        <AccordionItem value={`module-${index}`} key={index}>
                                            <AccordionTrigger>
                                                <div className="flex justify-between items-center algin-center text-xl">
                                                    <div className="flex mr-2 justify-center algin-center">
                                                        <Airplay size={23} />
                                                    </div>
                                                    <div className="flex justify-center algin-center pb-1">
                                                        {module.name}
                                                    </div>
                                                </div>
                                            </AccordionTrigger>
                                            <AccordionContent>
                                                <div className="flex justify-end">
                                                    <Button>Create Question</Button>
                                                </div>
                                                {module.questions && module.questions.length > 0 ? (
                                                    <ul className="list-disc ml-4">
                                                        {module.questions.map((question, questionIndex) => (
                                                            <div key={questionIndex} className="space-y-3 cursor-default">
                                                                <div className="flex items-center align-center">
                                                                    <ArrowBigRightDash />
                                                                    <h1 className="text-muted-foreground pl-0.5 pb-0.5">{question.name}</h1>
                                                                </div>
                                                                <div className="p-4">
                                                                    <h2 className="hover:underline font-semibold pb-2">Description :</h2>
                                                                    <p className="text-accent-foreground">{question.description}</p>
                                                                </div>
                                                                <div className="p-4 bg-muted rounded-md">
                                                                    <h2 className="hover:underline font-semibold pb-2">Constraints :</h2>
                                                                    <p className="text-sidebar-accent-foreground">{question.constraints}</p>
                                                                </div>
                                                            </div>
                                                        ))}
                                                    </ul>
                                                ) : (
                                                    <p>No questions available</p>
                                                )}
                                            </AccordionContent>
                                        </AccordionItem>
                                    ))}
                                </Accordion>
                            </div>
                        ) : (
                            <p>No modules available</p>
                        )}
                    </CardContent>
                </Card>
            </div>
        </>
    );
};

export default CourseModule;