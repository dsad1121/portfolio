import React from 'react';
import { Link } from 'react-router-dom';
import { Project } from '../types';
import { PlayCircle } from 'lucide-react';

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <Link to={`/project/${project.id}`} className="group block break-inside-avoid mb-8">
      <div className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 transform hover:-translate-y-1">
        {/* Thumbnail Container - Removed fixed aspect ratio for waterfall layout */}
        <div className="relative bg-gray-100 overflow-hidden">
          <img
            src={project.thumbnailUrl}
            alt={project.title}
            loading="lazy"
            className="w-full h-auto transition-transform duration-500 group-hover:scale-105"
          />
          {project.mediaType === 'video' && (
            <div className="absolute inset-0 flex items-center justify-center bg-black/20 group-hover:bg-black/30 transition-colors">
              <PlayCircle className="text-white opacity-80 w-12 h-12" />
            </div>
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
            <span className="text-white text-sm font-medium">查看详情</span>
          </div>
        </div>
        
        {/* Info */}
        <div className="p-4">
          <div className="flex justify-between items-start mb-2">
            <span className="text-xs font-semibold tracking-wider text-blue-500 uppercase">
              {project.category}
            </span>
          </div>
          <h3 className="text-lg font-bold text-gray-800 mb-1 group-hover:text-blue-600 transition-colors">
            {project.title}
          </h3>
          <p className="text-gray-500 text-sm line-clamp-2">
            {project.description}
          </p>
        </div>
      </div>
    </Link>
  );
};

export default ProjectCard;