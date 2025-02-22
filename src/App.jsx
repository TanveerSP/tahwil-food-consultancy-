import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/common/Navbar";
import Home from "./pages/Home";

function App() {
  return (
    <div className="w-screen bg-titan-white-100 relative min-h-screen max-w-[100vw] flex flex-col">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
