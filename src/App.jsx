import React, { Suspense, lazy, useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/common/Navbar";
import Error from "./pages/Error";
import About from "./pages/About";
import Loader from "./components/common/Loader";

const Home = lazy(() => import("./pages/Home"));

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Set a delay before rendering the page (e.g., 3 seconds)
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);

    return () => clearTimeout(timer); // Cleanup function
  }, []);

  return (
    <div className="w-screen bg-titan-white-100 relative min-h-screen max-w-[100vw] flex flex-col">
      {isLoading ? (
        <Loader /> // Show Loader for 3 seconds
      ) : (
        <Suspense fallback={<Loader />}>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="*" element={<Error />} />
          </Routes>
        </Suspense>
      )}
    </div>
  );
}

export default App;
