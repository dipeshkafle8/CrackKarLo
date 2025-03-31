import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
  } from "@/components/ui/sheet"
  import { Button } from "@/components/ui/button"

export default function Create_courses() {
    return (
        <div>
            <h1>Create Courses</h1>
            <div>
                <Sheet>
                    <SheetTrigger>
                        <Button>Create Course</Button>
                    </SheetTrigger>
                    <SheetContent>
                    <SheetHeader>
                        <SheetTitle>Create Course</SheetTitle>
                        <SheetDescription>
                            <form>
                                <label>Course Name:</label>
                                <input type="text" name="course_name" />
                                <label>Course Description:</label>
                                <input type="text" name="course_description" />
                                <label>Course Price:</label>
                                <input type="text" name="course_price" />
                                <button>Create</button>
                            </form>
                        </SheetDescription>

                    </SheetHeader>
                    </SheetContent>
                    

                </Sheet>
            </div>
        </div>
    )
}   
