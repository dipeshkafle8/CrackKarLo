import { axiosInstance } from "@/lib/axios";
import { useEffect, useState } from "react";

const InterviewExp = () => {
  const [Experiences, setExperiences] = useState([]);

  useEffect(() => {
    const fetchInterviews = async () => {
      let res = await axiosInstance.get("/interview/getAllInterviews");
      console.log(res.data);
    };
    fetchInterviews();
  }, []);
  return (
    <>
      <div>This is the page for displaying the interview experience</div>
    </>
  );
};

export default InterviewExp;
