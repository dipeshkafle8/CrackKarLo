import "./App.css";
import Home from "./layout/home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from "./pages/login";

function App() {
  return (
    <BrowserRouter>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
    </BrowserRouter>

  );
}

export default App;
