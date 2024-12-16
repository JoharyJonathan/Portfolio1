const ProjectCard = ({ title, description, image, link }) => {
  return (
    <div className="bg-white shadow rounded-lg overflow-hidden mb-8">
      <div className="flex items-center">
        <div className="p-6">
          <h2 className="text-2xl font-bold mb-2">{title}</h2>
          <p className="text-gray-600">{description}</p>
          {/* Bouton avec lien fonctionnel */}
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-block bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition-colors"
          >
            View Project
          </a>
        </div>
        <img
          src={image}
          className="w-48 h-auto object-cover rounded-r-lg"
        />
      </div>
    </div>
  );
};

export default ProjectCard;