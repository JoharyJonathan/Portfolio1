import { Link } from "react-router-dom";

function About() {
    return (
      <section className="bg-gray-100 py-10">
        <div className="container mx-auto px-5 text-center">
          <h2 className="text-3xl font-bold mb-4">
            About Me
          </h2>
          <p className="text-lg text-gray-700 mb-6">
            My name is Start Bootstrap and I help brands grow.
          </p>
          <p className="text-gray-600 mb-8">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit dolorum itaque qui unde quisquam consequatur autem. Eveniet quasi nobis aliquid cumque officiis sed rem iure ipsa! Praesentium ratione atque dolorem?
          </p>
          <div className="flex justify-center space-x-6 text-2xl">
            <Link to="https://twitter.com" className="text-blue-500 hover:text-blue-700">
              <i className="bi bi-twitter"></i>
            </Link>
            <Link to="https://linkedin.com" className="text-blue-700 hover:text-blue-900">
              <i className="bi bi-linkedin"></i>
            </Link>
            <Link to="https://github.com" className="text-gray-800 hover:text-gray-900">
              <i className="bi bi-github"></i>
            </Link>
          </div>
        </div>
      </section>
    );
}
  
export default About;  