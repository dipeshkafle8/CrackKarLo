import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Progress } from "@/components/ui/progress"
import Overview from "./Overview";
import Questions from "./Question";
import Practice from "./Pratice";
import Checklist from "./Checklist"


const Interview = () => {
    const [progress, setProgress] = useState(0);

    const updateProgress = (checked: boolean, value: number) => {
        if (checked) {
            setProgress((prev) => Math.min(prev + value, 100))
        } else {
            setProgress((prev) => Math.max(prev - value, 0))
        }
    }

    return (
        <div className="container mx-auto py-8 px-4 max-w-6xl">
            <div className="felx flex-col gap-6">
                <div className="space-y-2">
                    <h1 className="text-3xl font-bold tracking-tight">Interview Preparation Guide</h1>
                    <p className="text-muted-foreground">A comprehensive guide to help you prepare for your next job interview</p>
                </div>

                <div className="flex items-center gap-4 mb-6 mt-2">
                    <Progress value={progress} className="h-2 flex-1" />
                    <span className="text-sm font-medium">{progress}% Complete</span>
                </div>

                <Tabs defaultValue="overview" className="w-full">
                    <TabsList className="grid grid-cols-2 md:grid-cols-4 mb-4 w-full">
                        <TabsTrigger value="overview">Overview</TabsTrigger>
                        <TabsTrigger value="questions">Questions</TabsTrigger>
                        <TabsTrigger value="practice">Practice</TabsTrigger>
                        <TabsTrigger value="checklist">Checklist</TabsTrigger>
                    </TabsList>
                    <TabsContent value="overview" className="space-y-6">
                       <Overview/>
                    </TabsContent>

                    <TabsContent value="questions" className="space-y-6">
                       <Questions/>
                    </TabsContent>

                    <TabsContent value="practice" className="space-y-6">
                        <Practice/>
                    </TabsContent>

                    <TabsContent value="checklist" className="space-y-6">
                    <Checklist updateProgress={updateProgress} />
                    </TabsContent>
                </Tabs>
            </div>
        </div>
    )
}

export default Interview;