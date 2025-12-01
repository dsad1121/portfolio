import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Project } from '../types';
import { PlayCircle } from 'lucide-react';

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // 自动轮播图片（如果是多张图片的话）
  useEffect(() => {
    if (project.mediaType === 'image' && project.mediaUrls && project.mediaUrls.length > 1) {
      const interval = setInterval(() => {
        setCurrentImageIndex((prev) => (prev + 1) % project.mediaUrls.length);
      }, 3000); // 每3秒切换一张图片

      return () => clearInterval(interval);
    }
  }, [project.mediaType, project.mediaUrls]);

  const renderMedia = () => {
    if (project.mediaType === 'video') {
      // 视频直接播放
      return (
        <video
          src={project.thumbnailUrl}
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-auto transition-transform duration-500 group-hover:scale-105"
        />
      );
    } else if (project.mediaType === 'image') {
      // 如果是多张图片，显示轮播
      if (project.mediaUrls && project.mediaUrls.length > 1) {
        return (
          <img
            src={project.mediaUrls[currentImageIndex]}
            alt={`${project.title} - ${currentImageIndex + 1}`}
            loading="lazy"
            className="w-full h-auto transition-transform duration-500 group-hover:scale-105"
          />
        );
      } else {
        // 单张图片或GIF
        const isGif = project.thumbnailUrl.toLowerCase().endsWith('.gif');
        return (
          <img
            src={project.thumbnailUrl}
            alt={project.title}
            loading="lazy"
            className="w-full h-auto transition-transform duration-500 group-hover:scale-105"
          />
        );
      }
    }
  };

  return (
    <Link to={`/project/${project.id}`} className="group block break-inside-avoid mb-8">
      <div className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 transform hover:-translate-y-1">
        <div className="relative bg-gray-100 overflow-hidden">
          {renderMedia()}
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