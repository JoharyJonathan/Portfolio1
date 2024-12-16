import ProjectCard from "./ProjectCard";
import NavBar from "./NavBar";
import Footer from "./Footer";

const Projects = () => {
  const projectData = [
    {
      title: "Mailing app",
      description: "A Mailing app with a ham/spam model detection using django and bootstrap",
      image: "",
      link: "https://github.com/JoharyJonathan/Mail-spam-django",
    },
    {
      title: "Movie Recommendation site",
      description: "A movie recommendation website using Clustering model based by users preferences",
      image: "",
      link: "https://github.com/JoharyJonathan/django-movie",
    },
    {
      title: "Community Support Platform Site",
      description: "A Support Platform website developped in laravel using php and tailwindCss",
      image: "",
      link: "https://github.com/JoharyJonathan/PlateformeEntraideCommunautaire",
    },
    {
      title: "Tweets Sentiment detection (TF-IDF) project",
      description: "A program that predicts whether a comment is positive or negative based on TF-IDF.",
      image: "",
      link: "https://github.com/JoharyJonathan/TF-IDF-Comments",
    },
  ];

  return (
    <>
      <NavBar />
      <div className="container mx-auto px-5 py-10">
        <h1 className="text-center text-4xl font-extrabold mb-10">Projects</h1>
        <div className="space-y-6">
          {projectData.map((project, index) => (
            <ProjectCard
              key={index}
              title={project.title}
              description={project.description}
              image={project.image}
              link={project.link}
            />
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Projects;