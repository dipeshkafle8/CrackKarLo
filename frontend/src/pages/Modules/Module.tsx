import { useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
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
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

const CourseModule = () => {
    const { courseId } = useParams<{ courseId: string }>();
    const [course, setCourse] = useState(null); // Store course details, including modules

    const getCourse = async () => {
        try {
            const resp = await axios.get(`/api/course/getCourseById/${courseId}`);
            setCourse(resp.data.course);
            console.log("Course data:", resp.data.course);
        } catch (error) {
            console.error("Error fetching course:", error);
        }
    };

    useEffect(() => {
        if (courseId) {
            getCourse();
        }
    }, [courseId]);

    return (
        <>
            <div>
                {course && (
                    <div>
                        <h1>{course.title}</h1>
                        <p>{course.description}</p>
                    </div>
                )}

                {/* Display modules */}
                {course?.modules?.length > 0 ? (
                    <div>
                        <h2>Modules</h2>
                        <ul>
                            {course.modules.map((module: any, index: number) => (
                                <li key={index}>
                                    <h3>{module.name}</h3>
                                    <p>{module.description}</p>
                                </li>
                            ))}
                        </ul>
                    </div>
                ) : (
                    <p>No modules available</p>
                )}
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
                            <label>Module Name:</label>
                            <Input type="text" placeholder="Module Name" />
                            <label>Module Description:</label>
                            <Textarea placeholder="Module Description" />
                            <SheetFooter>
                                <Button type="submit">Submit</Button>
                                <SheetClose>Close</SheetClose>
                            </SheetFooter>
                        </form>
                    </SheetContent>
                </Sheet>
            </div>
        </>
    );
};

export default CourseModule;