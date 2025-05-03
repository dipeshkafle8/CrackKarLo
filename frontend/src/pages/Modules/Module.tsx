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
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
    DialogFooter,
} from "@/components/ui/dialog"

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { Airplay, ArrowBigRightDash } from "lucide-react";
import { Label } from "@radix-ui/react-label";
import { axiosInstanceWithToken } from "@/lib/axios";

const CourseModule = () => {
    const { courseId } = useParams<{ courseId: string }>();
    const [course, setCourse] = useState([]);
    const [isAdmin, setIsAdmin] = useState<boolean>(false);
    const [from, setfrom] = useState({
        name: "",
        description: "",
        course: courseId,
    })
    const [question, setQuestion] = useState({
        question: "",
        description: "",
        constraints: "",
        time: "",
        requiredDetails: ""
    })

    const getCourse = async () => {
        try {
            const resp = await axios.get(`/api/course/getModules/${courseId}`);
            const modules = resp.data.Modules;
            const modulesWithQuestions = await Promise.all(
                modules.map(async (module) => {
                    try {
                        const questionResp = await axios.get(`/api/course/getQuestions/${module._id}`);
                        return { ...module, questions: questionResp.data.Questions };
                    } catch (error) {
                        console.error(`Error fetching questions for module ${module._id}:`, error);
                        return { ...module, questions: [] };
                    }
                })
            );

            setCourse(modulesWithQuestions);
            console.log("Course data with questions:", modulesWithQuestions);
        } catch (error) {
            console.error("Error fetching course:", error);
        }
    };

    const handleInputChnage = (e) => {
        e.preventDefault();
        const { name, value } = e.target;
        setfrom((prevData) => ({ ...prevData, [name]: value }));
    }


    const handleCreateModule = async (e) => {
        e.preventDefault();
        if (!from.name || !from.description) {
            alert("Please fill in all the fields");
            return;
        }
        try {
            const res = await axiosInstanceWithToken.post("/course/addModule", {
                name: from.name,
                description: from.description,
                course: from.course  // This should be a valid MongoDB ObjectId
            });
            console.log("Module created: ", res.data);
            alert("Module created successfully");
            getCourse();
            // Reset form
            setfrom({
                name: "",
                description: "",
                course: courseId
            });
        } catch (err) {
            alert("Error in creating Module");
            console.error("Error in creating module:", err);
        }
    }

    const handeleInputChangeQuestion = (e) => {
        e.preventDefault();
        const { name, value } = e.target;
        setQuestion((prevData) => ({ ...prevData, [name]: value }));
    };

    const handleCreateQuestion = async (e) => {
        e.preventDefault();
        if (!question.question || !question.description || !question.constraints || !question.time || !question.requiredDetails) {
            alert("Please fill in all the fields");
            return;
        }
        try {
            const res = await axiosInstanceWithToken.post("/course/addQuestion", {
                name: question.question,
                description: question.description,
                constraints: question.constraints,
                time: question.time,
                requiredDetails: question.requiredDetails,
                moduleId: courseId // This should be a valid MongoDB ObjectId
            });
            console.log("Question created: ", res.data);
            alert("Question created successfully");
            getCourse();
            // Reset form
            setQuestion({
                question: "",
                description: "",
                constraints: "",
                time: "",
                requiredDetails: ""
            });
        } catch (err) {
            alert("Error in creating Question");
            console.error("Error in creating question:", err);
        }


    };


    useEffect(() => {
        if (courseId) {
            getCourse();
        }
    }, [courseId]);

    useEffect(() => {
        const checkIsAdmin = async () => {
            try {
                const res = await axiosInstanceWithToken.get("/user/checkIsAdmin");
                console.log(res);
                setIsAdmin(true);
            } catch (error) {
                console.log("Error in checking admin", error);
            }
        }
        checkIsAdmin();

    }, [])


    return (
        <>
            {isAdmin ? (
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
                            <form onSubmit={handleCreateModule}>
                                <div className="grid gap-4 py-4 ml-3 mr-2">
                                    <div className="grid gap-2">
                                        <label>Module Name:</label>
                                        <Input
                                            name="name"
                                            value={from.name}
                                            onChange={handleInputChnage}
                                            type="text"
                                            placeholder="Module Name"
                                        />
                                    </div>
                                    <div className="grid gap-2">
                                        <label>Module Description:</label>
                                        <Textarea
                                            name="description"
                                            value={from.description}
                                            onChange={handleInputChnage}
                                            placeholder="Module Description"
                                        />
                                    </div>
                                    <SheetFooter>
                                        <SheetClose asChild>
                                            <Button type="submit">Submit</Button>
                                        </SheetClose>
                                    </SheetFooter>
                                </div>
                            </form>
                        </SheetContent>
                    </Sheet>
                </div>
            ) : null}

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
                                                {isAdmin ? (
                                                    <div className="flex justify-end">
                                                        <Dialog>
                                                            <DialogTrigger>
                                                                <Button>Create Question</Button>
                                                            </DialogTrigger>
                                                            <form onSubmit={handleCreateQuestion}>
                                                            <DialogContent>
                                                                <DialogHeader>
                                                                    <DialogTitle>
                                                                        Fill all the required Inputs :
                                                                    </DialogTitle>
                                                                    <DialogDescription className="flex gap-y-6 flex-col">
                                                                        <div className="flex flex-col gap-2">
                                                                            <Label className="font-semibold">Question Name:</Label>
                                                                            <Textarea
                                                                                name="question"
                                                                                value={question.question}
                                                                                onChange={handeleInputChangeQuestion}
                                                                                placeholder="Question Name"
                                                                            />
                                                                        </div>
                                                                        <div className="flex flex-col gap-2">
                                                                            <Label className="font-semibold">Description: </Label>
                                                                            <Textarea
                                                                                name="description"
                                                                                value={question.description}
                                                                                onChange={handeleInputChangeQuestion}
                                                                                placeholder="Description"
                                                                            />
                                                                        </div>
                                                                        <div className="flex flex-col gap-2">
                                                                            <Label className="font-semibold">Constraints:</Label>
                                                                            <Textarea
                                                                                name="constraints"
                                                                                value={question.constraints}
                                                                                onChange={handeleInputChangeQuestion}
                                                                                placeholder="Constraints"
                                                                            />
                                                                        </div>
                                                                        <div className="flex flex-col gap-2">
                                                                            <Label className="font-semibold">Time:</Label>
                                                                            <Input
                                                                                type="number"
                                                                                placeholder="Time in minutes"
                                                                                name="time"
                                                                                value={question.time}
                                                                                onChange={handeleInputChangeQuestion}
                                                                                min={1}
                                                                                max={60}
                                                                            />
                                                                        </div>
                                                                        <div className="flex flex-col gap-2">
                                                                            <Label className="font-semibold">Required Details</Label>
                                                                            <Textarea
                                                                                name="requiredDetails"
                                                                                value={question.requiredDetails}
                                                                                onChange={handeleInputChangeQuestion}
                                                                                placeholder="Required Details"
                                                                            />
                                                                        </div>
                                                                    </DialogDescription>
                                                                </DialogHeader>
                                                                <DialogFooter>
                                                                    <Button type="submit">Submit</Button>
                                                                </DialogFooter>
                                                            </DialogContent>
                                                            </form>
                                                        </Dialog>

                                                    </div>
                                                ) : null}
                                                {module.questions && module.questions.length > 0 ? (
                                                    <ul className="list-disc ml-4">
                                                        {module.questions.map((question, questionIndex) => (
                                                            <Dialog>
                                                                <div key={questionIndex} className="space-y-3 cursor-default">
                                                                    <DialogTrigger>
                                                                        <div className="flex items-center align-center">
                                                                            <ArrowBigRightDash />
                                                                            <h1 className="font-bold pl-0.5 pb-0.5 hover:text-blue-400">{question.name}</h1>
                                                                        </div>
                                                                    </DialogTrigger>
                                                                    <DialogContent>
                                                                        <DialogHeader>
                                                                            <DialogTitle>
                                                                                <div className="p-4">
                                                                                    <p className="text-accent-foreground">{question.name}</p>
                                                                                </div>
                                                                            </DialogTitle>
                                                                            <DialogDescription>
                                                                                <div className="p-4 bg-muted rounded-md">
                                                                                    <p className="text-accent-foreground">{question.description}</p>
                                                                                </div>
                                                                                <div className="p-4 bg-muted rounded-md mt-2">
                                                                                    <p className="text-sidebar-accent-foreground">{question.constraints} </p>
                                                                                </div>
                                                                            </DialogDescription>
                                                                        </DialogHeader>
                                                                    </DialogContent>
                                                                </div>
                                                            </Dialog>
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