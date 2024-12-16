import { Link } from "react-router-dom";

function About() {
    return (
        <section className="bg-gray-100 py-10">
            <div className="container mx-auto px-4 text-center">
                <h2 className="text-3xl font-bold mb-4">
                    About Me
                </h2>
                <p className="text-lg text-gray-700 mb-6">
                    My name is Johary Jonathan RABARISON, I&apos;m a Backend Developer passionate about building efficient and scalable systems.
                </p>
                <p className="text-gray-600 mb-8">
                    With a strong foundation in server-side programming and database management, I specialize in creating robust APIs, optimizing application performance, and ensuring seamless integration between services. My expertise lies in languages like Node.js, Python, and Java, along with frameworks like Spring Boot and Express.js.
                    <br />
                    I love tackling complex challenges, automating workflows, and collaborating with teams to deliver impactful solutions.
                </p>
                <div className="flex justify-center space-x-6 text-2xl">
                    <Link to="https://wa.me/+261340992549" className="text-green-500 hover:text-green-700">
                        <i className="bi bi-whatsapp"></i>
                    </Link>
                    <Link to="https://www.linkedin.com/in/johary-rabarison-130bb0327/" className="text-blue-700 hover:text-blue-900">
                        <i className="bi bi-linkedin"></i>
                    </Link>
                    <Link to="https://github.com/JoharyJonathan" className="text-gray-800 hover:text-gray-900">
                        <i className="bi bi-github"></i>
                    </Link>
                </div>
            </div>
        </section>
    );
}

export default About;