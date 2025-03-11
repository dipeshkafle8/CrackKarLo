import "./App.css";
import Navbar from "./pages/Navbar";
import { BrowserRouter, Routes } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>{/* <Route path="/" element={} /> */}</Routes>
      <h1 className="text-2xl font-bold underline text-center mt-12">
        Test for Tailwindcss
      </h1>
    </BrowserRouter>
  );
}

export default App;
