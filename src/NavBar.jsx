import { Link } from "react-router-dom"

function NavBar() {
    return <>
        <div>
            <nav>
            <Link to="/">Accueil</Link>
            <Link to="/about">About</Link>
            <Link to="/contact">Contact</Link>
            </nav>
      </div>
    </>
}

export default NavBar