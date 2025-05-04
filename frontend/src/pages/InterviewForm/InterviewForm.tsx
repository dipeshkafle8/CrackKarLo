"use client";

import type React from "react";
import { useNavigate } from "react-router-dom";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { format } from "date-fns";
import { CalendarIcon, PlusCircle, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { axiosInstanceWithToken } from "@/lib/axios";
import NavigateToHome from "@/Home/Navigate";

interface InterviewFormData {
  company: string;
  role: string;
  interviewType: string;
  experience: string;
  difficultyLevel: string;
  questions: {
    dsa: { name: string }[];
    theory: { question: string }[];
    queries: { question: string }[];
  };
  date?: Date; // Optional field for the interview date
}

export default function InterviewForm() {
  const navigate = useNavigate();
  const [date, setDate] = useState<Date>();
  const [formData, setFormData] = useState({
    company: "",
    role: "",
    interviewType: "",
    experience: "",
    difficultyLevel: "",
    questions: {
      dsa: [{ name: "" }],
      theory: [{ question: "" }],
      queries: [{ question: "" }],
    },
  });

  const handleSubmitToBackEnd = async (data: InterviewFormData) => {
    try {
      const res = await axiosInstanceWithToken.post(
        "/interview/addExperience",
        data
      );
      alert("Your Data added sucessfully!");
      navigate('/');
      console.log(res);
    } catch (err) {
      console.log("Error in adding new experience",err);
    }
  };
  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSelectChange = (name: string, value: string) => {
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleDateChange = (selectedDate: Date | undefined) => {
    setDate(selectedDate);
  };

  // Handle DSA questions
  const addDsaQuestion = () => {
    setFormData({
      ...formData,
      questions: {
        ...formData.questions,
        dsa: [...formData.questions.dsa, { name: "" }],
      },
    });
  };

  const removeDsaQuestion = (index: number) => {
    const updatedDsa = [...formData.questions.dsa];
    updatedDsa.splice(index, 1);
    setFormData({
      ...formData,
      questions: {
        ...formData.questions,
        dsa: updatedDsa,
      },
    });
  };

  const handleDsaChange = (index: number, value: string) => {
    const updatedDsa = [...formData.questions.dsa];
    updatedDsa[index] = { name: value };
    setFormData({
      ...formData,
      questions: {
        ...formData.questions,
        dsa: updatedDsa,
      },
    });
  };

  // Handle Theory questions
  const addTheoryQuestion = () => {
    setFormData({
      ...formData,
      questions: {
        ...formData.questions,
        theory: [...formData.questions.theory, { question: "" }],
      },
    });
  };

  const removeTheoryQuestion = (index: number) => {
    const updatedTheory = [...formData.questions.theory];
    updatedTheory.splice(index, 1);
    setFormData({
      ...formData,
      questions: {
        ...formData.questions,
        theory: updatedTheory,
      },
    });
  };

  const handleTheoryChange = (index: number, value: string) => {
    const updatedTheory = [...formData.questions.theory];
    updatedTheory[index] = { question: value };
    setFormData({
      ...formData,
      questions: {
        ...formData.questions,
        theory: updatedTheory,
      },
    });
  };

  // Handle Query questions
  const addQueryQuestion = () => {
    setFormData({
      ...formData,
      questions: {
        ...formData.questions,
        queries: [...formData.questions.queries, { question: "" }],
      },
    });
  };

  const removeQueryQuestion = (index: number) => {
    const updatedQueries = [...formData.questions.queries];
    updatedQueries.splice(index, 1);
    setFormData({
      ...formData,
      questions: {
        ...formData.questions,
        queries: updatedQueries,
      },
    });
  };

  const handleQueryChange = (index: number, value: string) => {
    const updatedQueries = [...formData.questions.queries];
    updatedQueries[index] = { question: value };
    setFormData({
      ...formData,
      questions: {
        ...formData.questions,
        queries: updatedQueries,
      },
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Combine all form data with the date
    const submissionData = {
      ...formData,
      date: date,
    };

    handleSubmitToBackEnd(submissionData);
  };

  return (
    <>
    <div className="relative ml-2 mb-[-15px] top-1">
      <NavigateToHome/>
    </div>
    <div className="my-8">
      <form onSubmit={handleSubmit} className="w-full max-w-4xl mx-auto">
        <Card>
          <CardHeader>
            <CardTitle className="text-xl font-bold">
              Interview Experience
            </CardTitle>
            <CardDescription>
              Share your interview experience to help others prepare better.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            {/* Basic Information */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="company">Company Name *</Label>
                <Input
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleInputChange}
                  placeholder="e.g. Google"
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="role">Role *</Label>
                <Input
                  id="role"
                  name="role"
                  value={formData.role}
                  onChange={handleInputChange}
                  placeholder="e.g. Software Engineer"
                  required
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="date">Interview Date *</Label>
                <Popover>
                  <PopoverTrigger asChild>
                    <Button
                      variant="outline"
                      className={cn(
                        "w-full justify-start text-left font-normal",
                        !date && "text-muted-foreground"
                      )}
                    >
                      <CalendarIcon className="mr-2 h-4 w-4" />
                      {date ? format(date, "PPP") : "Select date"}
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0">
                    <Calendar
                      mode="single"
                      selected={date}
                      onSelect={handleDateChange}
                      initialFocus
                    />
                  </PopoverContent>
                </Popover>
              </div>
              <div className="space-y-2">
                <Label htmlFor="interviewType">Interview Type *</Label>
                <Select
                  onValueChange={(value) =>
                    handleSelectChange("interviewType", value)
                  }
                  required
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select interview type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="phone">Phone Screen</SelectItem>
                    <SelectItem value="technical">Technical</SelectItem>
                    <SelectItem value="behavioral">Behavioral</SelectItem>
                    <SelectItem value="onsite">Onsite</SelectItem>
                    <SelectItem value="system-design">System Design</SelectItem>
                    <SelectItem value="hr">HR</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="difficultyLevel">Difficulty Level *</Label>
                <Select
                  onValueChange={(value) =>
                    handleSelectChange("difficultyLevel", value)
                  }
                  required
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select difficulty level" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="easy">Easy</SelectItem>
                    <SelectItem value="medium">Medium</SelectItem>
                    <SelectItem value="hard">Hard</SelectItem>
                    <SelectItem value="very-hard">Very Hard</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            {/* Experience */}
            <div className="space-y-2">
              <Label htmlFor="experience">Interview Experience *</Label>
              <Textarea
                id="experience"
                name="experience"
                value={formData.experience}
                onChange={handleInputChange}
                placeholder="Describe your interview experience in detail..."
                className="min-h-[150px]"
                required
              />
            </div>

            {/* DSA Questions */}
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <Label>DSA Questions</Label>
                <Button
                  type="button"
                  variant="outline"
                  size="sm"
                  onClick={addDsaQuestion}
                >
                  <PlusCircle className="h-4 w-4 mr-2" />
                  Add Question
                </Button>
              </div>
              {formData.questions.dsa.map((question, index) => (
                <div key={`dsa-${index}`} className="flex items-center gap-2">
                  <Input
                    value={question.name}
                    onChange={(e) => handleDsaChange(index, e.target.value)}
                    placeholder="e.g. Two Sum, Binary Search"
                    className="flex-1"
                  />
                  {formData.questions.dsa.length > 1 && (
                    <Button
                      type="button"
                      variant="ghost"
                      size="icon"
                      onClick={() => removeDsaQuestion(index)}
                    >
                      <X className="h-4 w-4" />
                    </Button>
                  )}
                </div>
              ))}
            </div>

            {/* Theory Questions */}
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <Label>Theory Questions</Label>
                <Button
                  type="button"
                  variant="outline"
                  size="sm"
                  onClick={addTheoryQuestion}
                >
                  <PlusCircle className="h-4 w-4 mr-2" />
                  Add Question
                </Button>
              </div>
              {formData.questions.theory.map((item, index) => (
                <div
                  key={`theory-${index}`}
                  className="flex items-center gap-2"
                >
                  <Input
                    value={item.question}
                    onChange={(e) => handleTheoryChange(index, e.target.value)}
                    placeholder="e.g. Explain SOLID principles"
                    className="flex-1"
                  />
                  {formData.questions.theory.length > 1 && (
                    <Button
                      type="button"
                      variant="ghost"
                      size="icon"
                      onClick={() => removeTheoryQuestion(index)}
                    >
                      <X className="h-4 w-4" />
                    </Button>
                  )}
                </div>
              ))}
            </div>

            {/* Query Questions */}
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <Label>Database Queries</Label>
                <Button
                  type="button"
                  variant="outline"
                  size="sm"
                  onClick={addQueryQuestion}
                >
                  <PlusCircle className="h-4 w-4 mr-2" />
                  Add Query
                </Button>
              </div>
              {formData.questions.queries.map((item, index) => (
                <div key={`query-${index}`} className="flex items-center gap-2">
                  <Input
                    value={item.question}
                    onChange={(e) => handleQueryChange(index, e.target.value)}
                    placeholder="e.g. maximum salaray of the employee?"
                    className="flex-1"
                  />
                  {formData.questions.queries.length > 1 && (
                    <Button
                      type="button"
                      variant="ghost"
                      size="icon"
                      onClick={() => removeQueryQuestion(index)}
                    >
                      <X className="h-4 w-4" />
                    </Button>
                  )}
                </div>
              ))}
            </div>
          </CardContent>
          <CardFooter className="flex justify-center">
            <Button type="submit" className="w-[40%] cursor-pointer">
              Submit Interview Experience
            </Button>
          </CardFooter>
        </Card>
      </form>
    </div>
    </>
  );
}
