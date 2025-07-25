import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="bg-white shadow-md p-4 flex justify-between items-center">
      <h1 className="text-2xl font-bold text-purple-600">🍔 FoodBot CRM</h1>
      <div className="space-x-4">
        <Link to="/" className="text-gray-700 hover:text-purple-600">Dashboard</Link>
        <Link to="/create" className="text-gray-700 hover:text-purple-600">Create Lead</Link>
        <Link to="/playground" className="text-gray-700 hover:text-purple-600">Playground</Link>
      </div>
    </nav>
  );
}
