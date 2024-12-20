import NavBar from "./NavBar";
import Footer from "./Footer";

const Resume = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
    <NavBar />

      {/* Page Header */}
      <header className="bg-gray-100 py-10 text-center">
        <h1 className="text-4xl font-extrabold text-gray-800">My Resume</h1>
      </header>

      {/* Main Content */}
      <main className="flex-grow container mx-auto px-6 py-10">
        {/* Experience Section */}
        <section>
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold text-primary">Experience</h2>
            <a
              href="/assets/John_Doe_Resume.pdf"
              className="bg-primary text-white px-4 py-2 rounded-md text-sm font-semibold flex items-center"
            >
              <i className="bi bi-download mr-2"></i> Download Resume
            </a>
          </div>
          {/* Experience Cards */}
          <div className="space-y-6">
            <ExperienceCard
              date="2023"
              title="Intern Full-Stack Developer"
              company="HULSIA SARL"
              location="Tsiadana, Antananarivo"
              tasks={[
                "Developed and maintained responsive web applications using Laravel Frameworks",
                "Collaborated with cross-functional teams on web design and implementation.",
              ]}
            />
            <ExperienceCard
              date="2022"
              title="Game Development"
              company="Infinity Creative"
              location="Analakely, Antananarivo"
              tasks={[
                "Creating 2D game with Unity Engine using C#",
                "Assist in maintenance and service for company"
              ]}
            />
          </div>
        </section>

        {/* Education Section */}
        <section className="mt-10">
          <h2 className="text-2xl font-bold text-secondary mb-6">Education</h2>
          <div className="space-y-6">
            <EducationCard
              date="2023 - present"
              degree="Master's in Computer Science"
              school="ESMIA University"
              location="Mahamasina, Antananarivo"
              description="Focusing in Software Engineering and Data Science."
            />
            <EducationCard
              date="2020 - 2023"
              degree="Bachelor's in Computer Science"
              school="ESMIA University"
              location="Mahamasina, Antananarivo"
              description="Focused on algorithms, web development, and machine learning."
            />
            <EducationCard
              date="2020"
              degree="Baccalaureat C"
              school=""
              location=""
              description=""
            />
          </div>
        </section>

        {/* Skills Section */}
        <section className="mt-10">
          <h2 className="text-2xl font-bold text-secondary mb-6">Skills</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              "JavaScript (Vue, React, Node.js)",
              "Python (Flask, Django)",
              "Database Management (PostgreSQL, MySQL, SQLite)",
              "RESTful APIs",
              "Git & Version Control",
              "Agile Development",
              "PHP (Laravel, CodeIgniter, Symfony)",
              "Java (SpringBoot)",
            ].map((skill, index) => (
              <div
                key={index}
                className="bg-gray-100 text-gray-800 text-sm font-medium rounded-md p-4"
              >
                {skill}
              </div>
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

// Reusable Experience Card Component
const ExperienceCard = ({ date, title, company, location, tasks }) => (
  <div className="bg-white shadow-md rounded-md p-6">
    <div className="text-gray-600 text-sm mb-2">{date}</div>
    <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
    <div className="text-sm text-gray-600">{company}</div>
    <div className="text-sm text-gray-500">{location}</div>
    <ul className="mt-4 list-disc list-inside space-y-2 text-sm text-gray-700">
      {tasks.map((task, index) => (
        <li key={index}>{task}</li>
      ))}
    </ul>
  </div>
);

// Reusable Education Card Component
const EducationCard = ({ date, degree, school, location, description }) => (
  <div className="bg-white shadow-md rounded-md p-6">
    <div className="text-gray-600 text-sm mb-2">{date}</div>
    <h3 className="text-lg font-semibold text-gray-800">{degree}</h3>
    <div className="text-sm text-gray-600">{school}</div>
    <div className="text-sm text-gray-500">{location}</div>
    <p className="mt-4 text-sm text-gray-700">{description}</p>
  </div>
);

export default Resume;