import React, { useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { ArrowLeft, Calendar, PenTool, ChevronLeft, ChevronRight } from 'lucide-react';
import { PROJECTS } from '../constants';

const ProjectDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [currentMediaIndex, setCurrentMediaIndex] = useState(0);

  const projectIndex = PROJECTS.findIndex(p => p.id === id);
  const project = PROJECTS[projectIndex];
  
  const prevProject = projectIndex > 0 ? PROJECTS[projectIndex - 1] : null;
  const nextProject = projectIndex < PROJECTS.length - 1 ? PROJECTS[projectIndex + 1] : null;

  if (!project) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">项目未找到</h2>
        <button 
          onClick={() => navigate('/portfolio')}
          className="text-blue-600 hover:underline"
        >
          返回作品列表
        </button>
      </div>
    );
  }

  const handlePrevMedia = () => {
    setCurrentMediaIndex(prev => (prev > 0 ? prev - 1 : project.mediaUrls.length - 1));
  };

  const handleNextMedia = () => {
    setCurrentMediaIndex(prev => (prev < project.mediaUrls.length - 1 ? prev + 1 : 0));
  };

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-12">
      {/* Back Button */}
      <Link 
        to="/portfolio" 
        className="inline-flex items-center text-gray-500 hover:text-gray-900 mb-8 transition-colors"
      >
        <ArrowLeft size={20} className="mr-2" /> 返回列表
      </Link>

      {/* Header */}
      <div className="mb-8">
        <span className="inline-block px-3 py-1 rounded-full bg-blue-50 text-blue-600 text-xs font-bold uppercase tracking-wide mb-3">
          {project.category}
        </span>
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">{project.title}</h1>
        <p className="text-xl text-gray-500 leading-relaxed">{project.description}</p>
      </div>

      {/* Main Media */}
      <div className="bg-gray-100 rounded-xl overflow-hidden shadow-sm mb-10 relative">
        {project.mediaType === 'video' ? (
          <video 
            key={project.mediaUrls[currentMediaIndex]}
            controls 
            className="w-full h-auto aspect-video" 
            poster={project.thumbnailUrl}
            playsInline
          >
            <source src={project.mediaUrls[currentMediaIndex]} type={project.mediaUrls[currentMediaIndex].endsWith('.mp4') ? 'video/mp4' : 'video/quicktime'} />
            您的浏览器不支持 HTML5 视频播放。
          </video>
        ) : (
          <img 
            src={project.mediaUrls[currentMediaIndex]} 
            alt={`${project.title} - ${currentMediaIndex + 1}`} 
            className="w-full h-auto object-contain max-h-[80vh] bg-gray-50"
          />
        )}

        {project.mediaUrls.length > 1 && (
          <>
            <button 
              onClick={handlePrevMedia}
              className="absolute left-2 top-1/2 -translate-y-1/2 p-2 bg-black/30 text-white rounded-full hover:bg-black/50 transition-colors focus:outline-none"
              aria-label="上一张"
            >
              <ChevronLeft size={24} />
            </button>
            <button 
              onClick={handleNextMedia}
              className="absolute right-2 top-1/2 -translate-y-1/2 p-2 bg-black/30 text-white rounded-full hover:bg-black/50 transition-colors focus:outline-none"
              aria-label="下一张"
            >
              <ChevronRight size={24} />
            </button>
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/40 text-white text-xs rounded-full px-3 py-1">
              {currentMediaIndex + 1} / {project.mediaUrls.length}
            </div>
          </>
        )}
      </div>

      {/* Details Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16 border-t border-gray-100 pt-8">
        <div className="md:col-span-2 space-y-4">
          <h3 className="text-lg font-bold text-gray-900">项目介绍</h3>
          <p className="text-gray-600 leading-7">
            {/* Extended description simulation */}
            {project.description} 这个项目挑战了我对 {project.category} 领域的理解，
            并让我熟练掌握了 {project.tools.join(' 和 ')} 等工具的使用。
            设计目标是创造出既实用又具美感的作品。
          </p>
        </div>
        <div className="space-y-6">
          <div>
            <h4 className="flex items-center text-sm font-semibold text-gray-900 uppercase tracking-wider mb-3">
              <PenTool size={16} className="mr-2" /> 创作工具
            </h4>
            <div className="flex flex-wrap gap-2">
              {project.tools.map(tool => (
                <span key={tool} className="px-2 py-1 bg-gray-100 text-gray-600 text-sm rounded-md">
                  {tool}
                </span>
              ))}
            </div>
          </div>
          <div>
            <h4 className="flex items-center text-sm font-semibold text-gray-900 uppercase tracking-wider mb-3">
              <Calendar size={16} className="mr-2" /> 创作时间
            </h4>
            <p className="text-gray-600 text-sm">{project.date}</p>
          </div>
        </div>
      </div>

      {/* Project Navigation */}
      <div className="border-t border-gray-200 pt-8 flex justify-between items-center">
        {prevProject ? (
          <Link to={`/project/${prevProject.id}`} className="group flex items-center text-left">
            <div className="mr-4 p-2 rounded-full bg-gray-50 group-hover:bg-blue-50 transition-colors">
              <ChevronLeft className="text-gray-500 group-hover:text-blue-600" />
            </div>
            <div className="hidden sm:block">
              <span className="block text-xs text-gray-400 uppercase">上一个</span>
              <span className="block text-sm font-medium text-gray-900 group-hover:text-blue-600">
                {prevProject.title}
              </span>
            </div>
          </Link>
        ) : <div />} {/* Spacer */}

        {nextProject ? (
          <Link to={`/project/${nextProject.id}`} className="group flex items-center text-right">
             <div className="hidden sm:block">
              <span className="block text-xs text-gray-400 uppercase">下一个</span>
              <span className="block text-sm font-medium text-gray-900 group-hover:text-blue-600">
                {nextProject.title}
              </span>
            </div>
            <div className="ml-4 p-2 rounded-full bg-gray-50 group-hover:bg-blue-50 transition-colors">
              <ChevronRight className="text-gray-500 group-hover:text-blue-600" />
            </div>
          </Link>
        ) : <div />}
      </div>
    </div>
  );
};

export default ProjectDetail;