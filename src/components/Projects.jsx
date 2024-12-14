import ProjectCard from "./ProjectCard";
import NavBar from "./NavBar";

const Projects = () => {
  const projectData = [
    {
      title: "Project Name 1",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      image: "https://dummyimage.com/300x400/343a40/6c757d",
    },
    {
      title: "Project Name 2",
      description: "Eius at enim eum illum aperiam placeat esse.",
      image: "https://dummyimage.com/300x400/343a40/6c757d",
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
                    />
                ))}
            </div>
        </div>
    </>
  );
};

export default Projects;