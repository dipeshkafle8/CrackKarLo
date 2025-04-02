import "./App.css";
import Home from "./layout/home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from "./pages/Login/Login";
import Courses from "./pages/Courses/Courses";
import Create_courses from "./pages/Courses/Create_courses";
import Interview from "./pages/Interview/A_Interview";
import CourseModule from "./pages/Modules/Module";
import SignupPage from "./pages/SignUp/Sign_up";
import InterviewForm from "./pages/InterviewForm/InterviewForm";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/course" element={<Courses />} />
        <Route path="/createcourse" element={<Create_courses />} />
        <Route path="/interview" element={<Interview />} />
        <Route path="/modules/:courseId" element={<CourseModule />} />
        <Route path="/addInterviewExp" element={<InterviewForm />} />
        {/* <Route path="/module" element={<CourseModule />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
