import "./App.css";
import Home from "../layout/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>

      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <h1 className="text-2xl font-bold underline text-center mt-12">
        Test for Tailwindcss
      </h1>
    </BrowserRouter>
  );
}

export default App;
