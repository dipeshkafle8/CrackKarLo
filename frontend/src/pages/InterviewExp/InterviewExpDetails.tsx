import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ExperienceType } from "./InterviewExp";
import { axiosInstance } from "@/lib/axios";
import { format } from "date-fns";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft, Calendar, BarChart3 } from "lucide-react";
import { Link } from "react-router-dom";
import NavigateToHome from "../../Home/Navigate";

const InterviewExpDetails = () => {
  const [interview, setInterview] = useState<ExperienceType | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const { id } = useParams();

  useEffect(() => {
    const fetchExperience = async () => {
      try {
        const res = await axiosInstance.get(`/interview/getExperience/${id}`);
        setInterview(res.data.Experience);
      } catch (err) {
        console.log("Error in fetching particular interview experience",err);
      } finally {
        setLoading(false);
      }
    };
    fetchExperience();
  }, []);

  // Helper function to get badge color based on difficulty level
  function getDifficultyColor(level: string) {
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
  }

  // Helper function to format interview type
  function formatInterviewType(type: string) {
    return type
      .split("-")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");
  }

  if (loading) {
    return <div>Loading...</div>;
  }
  if (!interview) {
    return <div>No interview experience.....</div>;
  }

  console.log(interview);

  return (
    <>
    <div className="relative">
    <div className="absolute flex justify-end items-end top-2 right-3">
      <NavigateToHome/>
    </div>
    </div>
    <div className="container mx-auto py-8">
      <div className="mb-6">
        <Link to="/interviewExp">
          <Button variant="ghost" className="pl-0">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to all interviews
          </Button>
        </Link>
      </div>

      <div className="grid gap-6">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <h1 className="text-3xl font-bold">{interview?.company}</h1>
            <p className="text-xl text-muted-foreground">{interview?.role}</p>
          </div>
          <Badge
            className={`${getDifficultyColor(
              interview?.difficultyLevel
            )} text-white px-3 py-1 text-sm`}
          >
            {interview?.difficultyLevel.charAt(0).toUpperCase() +
              interview?.difficultyLevel.slice(1)}{" "}
            Difficulty
          </Badge>
        </div>

        {/* Interview Details */}
        <Card>
          <CardHeader>
            <CardTitle>Interview Details</CardTitle>
          </CardHeader>
          <CardContent className="grid gap-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="flex items-center gap-2">
                <Calendar className="h-5 w-5 opacity-70" />
                <div>
                  <p className="text-sm text-muted-foreground">Date</p>
                  <p className="font-medium">
                    {format(interview?.date, "MMMM d, yyyy")}
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <BarChart3 className="h-5 w-5 opacity-70" />
                <div>
                  <p className="text-sm text-muted-foreground">
                    Interview Type
                  </p>
                  <p className="font-medium">
                    {formatInterviewType(interview?.interviewType)}
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Experience */}
        <Card>
          <CardHeader>
            <CardTitle>Experience</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="whitespace-pre-line">{interview?.experience}</p>
          </CardContent>
        </Card>

        {/* Questions */}
        <Card>
          <CardHeader>
            <CardTitle>Interview Questions</CardTitle>
          </CardHeader>
          <CardContent className="grid gap-6">
            {/* DSA Questions */}
            {interview?.questions.dsa.length > 0 && (
              <div>
                <h3 className="font-semibold text-lg mb-2">DSA Questions</h3>
                <ul className="list-disc pl-5 space-y-1">
                  {interview?.questions.dsa.map((q, i) => (
                    <li key={i}>{q.name}</li>
                  ))}
                </ul>
              </div>
            )}

            {/* Theory Questions */}
            {interview.questions.theory.length > 0 && (
              <div>
                <h3 className="font-semibold text-lg mb-2">Theory Questions</h3>
                <ul className="list-disc pl-5 space-y-1">
                  {interview?.questions.theory.map((q, i) => (
                    <li key={i}>{q.question}</li>
                  ))}
                </ul>
              </div>
            )}

            {/* Additional Queries */}
            {interview?.questions?.queries?.length > 0 && (
              <div>
                <h3 className="font-semibold text-lg mb-2">
                  Additional Queries
                </h3>
                <ul className="list-disc pl-5 space-y-1">
                  {interview?.questions.queries.map((q, i) => (
                    <li key={i}>{q?.question}</li>
                  ))}
                </ul>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
    </>
  );
};

export default InterviewExpDetails;
