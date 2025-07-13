import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="bg-blue-600 text-white px-4 py-3 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold">SkillBridge</Link>
        <div className="space-x-4">
          <Link to="/" className="hover:underline">Home</Link>
          <Link to="/recommendations" className="hover:underline">Recommendations</Link>
          <Link to="/roadmap" className="hover:underline">Roadmap</Link>
          <Link to="/tracker" className="hover:underline">Tracker</Link>
        </div>
      </div>
    </nav>
  );
}
