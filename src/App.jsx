import { Link } from "react-router-dom"

function App() {

  return (
    <>
      <h1 className='text-3xl font-bold underline flex justify-center'>Test</h1>
      <div>
        <nav>
          <Link to="/">Accueil</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
        </nav>
      </div>
    </>
  )
}

export default App
