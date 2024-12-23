import { ExternalLink, Github } from 'lucide-react';

interface ProjectCardProps {
  title: string;
  description: string;
  link: string;
  github: string;
  image: string;
}

export default function ProjectCard({ title, description, link, github, image }: ProjectCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow">
      <img
        src={image}
        alt={title}
        className="w-full h-48 object-cover"
      />
      
      <div className="p-6">
        <h3 className="text-xl font-semibold text-gray-900 mb-2">
          {title}
        </h3>
        
        <p className="text-gray-600 mb-4">
          {description}
        </p>
        
        <div className="flex space-x-4">
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center text-blue-600 hover:text-blue-800"
          >
            <ExternalLink size={20} className="mr-1" />
            Demo
          </a>
          
          <a
            href={github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center text-gray-700 hover:text-gray-900"
          >
            <Github size={20} className="mr-1" />
            Code
          </a>
        </div>
      </div>
    </div>
  );
}