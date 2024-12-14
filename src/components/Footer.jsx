import { Link } from "react-router-dom";

function Footer() {
    return (
      <footer className="bg-white py-4 shadow-t">
        <div className="container mx-auto px-5 flex justify-between items-center">
          <p className="text-sm text-gray-600">© Your Website 2023</p>
          <div className="flex space-x-4 text-sm">
            <Link to="/privacy" className="hover:underline">Privacy</Link>
            <Link to="/terms" className="hover:underline">Terms</Link>
            <Link to="/contact" className="hover:underline">Contact</Link>
          </div>
        </div>
      </footer>
    );
}
  
export default Footer;  