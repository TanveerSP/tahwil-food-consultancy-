import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/common/Navbar";
import Home from "./pages/Home";
import Error from "./pages/Error";

function App() {
  return (
    <div className="w-screen bg-titan-white-100 relative min-h-screen max-w-[100vw] flex flex-col">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </div>
  );
}

export default App;
