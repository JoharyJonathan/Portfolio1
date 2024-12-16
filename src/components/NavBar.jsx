import { Link } from "react-router-dom";

function Navbar() {
    return (
        <nav className="bg-white py-3 shadow">
            <div className="container mx-auto px-5 sm:px-0 flex justify-between items-center">
                <Link to="/" className="text-xl font-bold text-primary">Johary RABARISON</Link>
                <ul className="flex space-x-4 text-sm font-bold">
                    <li><Link to="/" className="text-gray-500 hover:text-gray-900">Home</Link></li>
                    <li><Link to="/resume" className="text-gray-500 hover:text-gray-900">Resume</Link></li>
                    <li><Link to="/projects" className="text-gray-500 hover:text-gray-900">Projects</Link></li>
                    <li><Link to="/contact" className="text-gray-500 hover:text-gray-900">Contact</Link></li>
                </ul>
            </div>
        </nav>
    );
}

export default Navbar;