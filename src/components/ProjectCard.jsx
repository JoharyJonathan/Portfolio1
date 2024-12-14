const ProjectCard = ({ title, description, image }) => {
  return (
    <div className="bg-white shadow rounded-lg overflow-hidden mb-8">
      <div className="flex items-center">
        <div className="p-6">
          <h2 className="text-2xl font-bold mb-2">{title}</h2>
          <p className="text-gray-600">{description}</p>
        </div>
        <img
          src={image}
          alt={title}
          className="w-48 h-auto object-cover rounded-r-lg"
        />
      </div>
    </div>
  );
};

export default ProjectCard;