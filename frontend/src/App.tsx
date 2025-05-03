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
import ProtectedRoute from "./ProtectedRoute/ProtectedRoute";
import InterviewExp from "./pages/InterviewExp/InterviewExp";
import Account from "./pages/Account/Account";
import PublicRoute from "./ProtectedRoute/PublicRoute";
import BookSessionPage from "./pages/VedioSession/BookSessionPage";
import SchedulePage from "./pages/Interview/Schedule/Page";
import SuccessPage from "./pages/Interview/Schedule/Success/SuccessPage";
import InterviewExpDetails from "./pages/InterviewExp/InterviewExpDetails";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/login"
          element={
            <PublicRoute>
              <LoginPage />
            </PublicRoute>
          }
        />
        <Route
          path="/signup"
          element={
            <PublicRoute>
              <SignupPage />
            </PublicRoute>
          }
        />
        <Route path="/course" element={<Courses />} />
        <Route path="/createcourse" element={<Create_courses />} />
        <Route path="/interview" element={<Interview />} />
        <Route path="/modules/:courseId" element={<CourseModule />} />
        <Route path="/interviewExp" element={<InterviewExp />} />
        <Route path="interview/:id" element={<InterviewExpDetails/>}/>
        <Route path="/account" element={<Account />} />
        <Route path="/booksession" element={<BookSessionPage/>}/>
        <Route path="/praticesession" element={<SchedulePage/>}/>
        <Route path="/success" element={<SuccessPage/>}/>
        {/* only logged in user can access these routes */}
        <Route element={<ProtectedRoute />}>
          <Route path="/addInterviewExp" element={<InterviewForm />} />
        </Route>
        {/* <Route path="/module" element={<CourseModule />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
