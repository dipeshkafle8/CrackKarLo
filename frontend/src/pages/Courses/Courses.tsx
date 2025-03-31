import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import axios from "axios";

import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card";

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

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";


export default function AllCourses() {
    const [allcourses, setCourses] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [form, setForm] = useState({
        title: "",
        description: "",
    });

    const navigate = useNavigate(); // Initialize useNavigate

    const receiveData = async () => {
        try {
            const res = await axios.get("/api/course/getCourses");
            console.log("Fetched data:", res.data);

            if (res.data && Array.isArray(res.data.Courses)) {
                setCourses(res.data.Courses);
            } else {
                throw new Error("Invalid response format");
            }
        } catch (err) {
            console.error("Error in fetching data:", err);
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        receiveData();
    }, []);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setForm((prevForm) => ({ ...prevForm, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!form.title || !form.description) {
            alert("Please fill in all the fields");
            return;
        }
        try {
            const res = await axios.post("/api/course/addCourse", form);
            console.log("Course created:", res.data);
            alert("Course created successfully");
            receiveData();
        } catch (err) {
            alert("Error in creating course");
            console.error("Error in creating course:", err);
        }
    };

    if (loading) return <div>Loading courses...</div>;
    if (error) return <div>Error: {error}</div>;

    return (
        <>
            <div className="relative flex justify-end mr-2 mt-2 ">
                <Sheet>
                    <SheetTrigger>
                        <Button className="">Create Course</Button>
                    </SheetTrigger>
                    <SheetContent>
                        <SheetHeader>
                            <SheetTitle>Create Your own Course</SheetTitle>
                            <SheetDescription>
                                Fill in the details to create your own course
                            </SheetDescription>
                        </SheetHeader>
                        <form className="w-full" onSubmit={handleSubmit}>
                            <div className="grid gap-4 py-4 ml-2 w-full">
                                <div className="grid grid-cols-4 items-center gap-4">
                                    <Label htmlFor="title" className="text-right">
                                        Title
                                    </Label>
                                    <Input name="title" placeholder="Course Title" value={form.title} onChange={handleInputChange} className="col-span-3 w-3/4" type="text" />
                                </div>
                                <div className="grid grid-cols-4 items-center gap-4">
                                    <Label htmlFor="description" className="text-right">
                                        Description
                                    </Label>
                                    <Input name="description" placeholder="Course Description" value={form.description} onChange={handleInputChange} className="col-span-3 w-3/4" />
                                </div>
                            </div>
                            <SheetFooter>
                                <SheetClose asChild>
                                    <Button type="submit">Create</Button>
                                </SheetClose>
                            </SheetFooter>
                        </form>
                    </SheetContent>
                </Sheet>
            </div>
            <div className="container mx-auto mb-4 ">
                <div className="container mx-auto py-8 px-4 max-w-6xl">
                    <div className="flex flex-col space-y-4">
                        <div className="space-y-2">
                            <h1 className="text-4xl font-bold tracking-tight">All Courses</h1>
                            <p className="text-muted-foreground">Here are all the courses available</p>
                        </div>

                        {allcourses.length === 0 ? (
                            <p>No courses available</p>
                        ) : (
                            <div className="space-y-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                                {allcourses.map((course) => (
                                    <Card className="transition-transform hover:scale-120 shadow-lg shadow-gray-300">
                                        <CardHeader className="space-y-1" key={course._id}>
                                            <CardTitle className="text-2xl font-bold">{course.title}</CardTitle>
                                            <CardDescription>{course.description}</CardDescription>
                                        </CardHeader>
                                        <CardFooter className="space-y-2">
                                            <Button onClick={() => navigate(`/modules/${course._id}`)}>View Modules</Button>
                                        </CardFooter>
                                    </Card>
                                ))}
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </>
    );
}