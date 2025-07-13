import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Recommendations from "./pages/Recommendations";
import Roadmap from "./pages/Roadmap";
import Tracker from "./pages/Tracker";

export default function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow p-4">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/recommendations" element={<Recommendations />} />
            <Route path="/roadmap" element={<Roadmap />} />
            <Route path="/tracker" element={<Tracker />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}
