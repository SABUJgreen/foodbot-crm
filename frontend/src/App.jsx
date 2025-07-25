import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Dashboard from "./pages/Dashboard";
import CreateLead from "./pages/CreateLead";
import Playground from "./pages/Playground";

export default function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50 text-gray-900">
        <Navbar />
        <div className="max-w-5xl mx-auto px-4 py-6">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/create" element={<CreateLead />} />
            <Route path="/playground" element={<Playground />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}
