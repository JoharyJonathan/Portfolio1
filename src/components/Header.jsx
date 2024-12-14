import { Link } from "react-router-dom";

function Header() {
    return (
      <header className="py-16 bg-gradient-to-r from-blue-500 to-purple-600 text-white">
        <div className="container mx-auto px-5 flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 text-center md:text-left">
            <div className="bg-gradient-to-r from-pink-500 to-yellow-500 text-white py-2 px-4 rounded-full mb-4 inline-block">
              Design &middot; Development &middot; Marketing
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-5">
              Get online and grow fast
            </h1>
            <p className="text-lg text-gray-200 mb-6">
              I can help your business to achieve its goals effectively.
            </p>
            <div className="flex space-x-4">
              <Link to="/resume" className="bg-blue-600 py-3 px-6 text-lg font-semibold rounded-md shadow-md hover:bg-white hover:text-black border-white border-2">
                Resume
              </Link>
              <Link to="/projects" className="border-2 border-white py-3 px-6 text-lg font-semibold rounded-md shadow-md hover:bg-black">
                Projects
              </Link>
            </div>
          </div>
          <div className="md:w-1/2 mt-8 md:mt-0 flex justify-center">
            <img src="/profile.png" alt="Profile" className="rounded-full shadow-lg" />
          </div>
        </div>
      </header>
    );
}
  
export default Header;  