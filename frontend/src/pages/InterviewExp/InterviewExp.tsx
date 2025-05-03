import { axiosInstance } from "@/lib/axios";
import { useEffect, useState } from "react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { format } from "date-fns";
import { Calendar, Briefcase, BarChart3 } from "lucide-react";
import { Link } from "react-router-dom";
import NavigateToHome from "../../Home/Navigate";

//for defining question type
export interface QuestionsType {
  dsa: { name: string }[];
  theory: { question: string }[];
  queries: { question: string }[];
}
//for interview experience data received from backend
export interface ExperienceType {
  company: string;
  createdAt: string;
  date: string;
  difficultyLevel: string;
  experience: string;
  interviewType: string;
  questions: QuestionsType;
  role: string;
  updatedAt: string;
  _id: string;
}

const InterviewExp = () => {
  const [Experiences, setExperiences] = useState<ExperienceType[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  useEffect(() => {
    const fetchInterviews = async () => {
      try {
        const res = await axiosInstance.get("/interview/getAllInterviews");
        setExperiences(res.data.experiences);
      } catch (err) {
        console.log("Error in fetching data", err);
      } finally {
        setLoading(false);
      }
    };
    fetchInterviews();
  }, []);

  // Helper function to get badge color based on difficulty level
  const getDifficultyColor = (level: string) => {
    switch (level) {
      case "easy":
        return "bg-green-500 hover:bg-green-600";
      case "medium":
        return "bg-yellow-500 hover:bg-yellow-600";
      case "hard":
        return "bg-orange-500 hover:bg-orange-600";
      case "very-hard":
        return "bg-red-500 hover:bg-red-600";
      default:
        return "bg-gray-500 hover:bg-gray-600";
    }
  };

  // Helper function to format interview type
  const formatInterviewType = (type: string) => {
    return type
      .split("-")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");
  };

  if (loading) {
    return <div>Fetching interview Experiences from backend....</div>;
  }
  return (
    <>
    <div className="flex justify-end mr-3 mt-2">
      <NavigateToHome/>
    </div>
      <div className="container mx-auto py-8">
        <div>

        </div>
        <h1 className="text-3xl font-bold mb-8">Interview Experiences</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {Experiences.map((interview) => (
            <Link
              to={`/interview/${interview._id as string}`}
              key={interview._id}
              className="block transition-transform hover:scale-[1.02]"
            >
              <Card className="h-full hover:shadow-md transition-shadow">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <CardTitle className="text-xl">
                      {interview.company}
                    </CardTitle>
                    <Badge
                      className={getDifficultyColor(interview.difficultyLevel)}
                    >
                      {interview.difficultyLevel.charAt(0).toUpperCase() +
                        interview.difficultyLevel.slice(1)}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center gap-2">
                    <Briefcase className="h-4 w-4 opacity-70" />
                    <span>{interview.role}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar className="h-4 w-4 opacity-70" />
                    <span>{format(interview.date, "MMM d, yyyy")}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <BarChart3 className="h-4 w-4 opacity-70" />
                    <span>{formatInterviewType(interview.interviewType)}</span>
                  </div>
                  <p className="text-muted-foreground line-clamp-2">
                    {interview.experience}
                  </p>
                </CardContent>
                <CardFooter>
                  <div className="text-sm text-muted-foreground">
                    {interview.questions.dsa.length} DSA,{" "}
                    {interview.questions.theory.length} Theory Questions
                  </div>
                </CardFooter>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
};

export default InterviewExp;
