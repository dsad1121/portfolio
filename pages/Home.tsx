import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Layers, Image, Film, Component } from 'lucide-react';
import { PROJECTS } from '../constants';
import ProjectCard from '../components/ProjectCard';

const Home: React.FC = () => {
  // Get latest 4 projects for preview
  const recentProjects = PROJECTS.slice(0, 4);

  const categories = [
    { name: 'UI设计', icon: Layers, desc: '界面设计 & 用户体验', path: '/portfolio?cat=UI设计' },
    { name: '海报图', icon: Image, desc: '视觉艺术 & 平面排版', path: '/portfolio?cat=海报图' },
    { name: 'MG动画', icon: Film, desc: '动态影像 & 视频', path: '/portfolio?cat=MG动画' },
    { name: '图标', icon: Component, desc: '符号系统 & 图标设计', path: '/portfolio?cat=图标' },
  ];

  return (
    <div className="space-y-16 pb-12">
      {/* Hero Section */}
      <section className="relative bg-white py-20 sm:py-32 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 mb-6 tracking-tight">
            设计 · 创造 · <span className="text-blue-600">灵感</span>
          </h1>
          <p className="text-lg sm:text-xl text-gray-500 max-w-2xl mx-auto mb-10 leading-relaxed">
            你好，我是一名视觉设计师。专注于 UI/UX、MG 动画及品牌形象设计。<br className="hidden sm:block" />
            致力于创造兼具美感与功能性的数字体验。
          </p>
          <div className="flex justify-center gap-4">
            <Link 
              to="/portfolio" 
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 transition-colors"
            >
              浏览作品
            </Link>
            <Link 
              to="/contact" 
              className="inline-flex items-center px-6 py-3 border border-gray-300 text-base font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 transition-colors"
            >
              联系我
            </Link>
          </div>
        </div>
      </section>

      {/* Category Quick Links */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
          {categories.map((cat) => (
            <Link 
              key={cat.name} 
              to={cat.path}
              className="group bg-white p-6 rounded-xl shadow-sm hover:shadow-md border border-gray-100 transition-all text-center flex flex-col items-center justify-center hover:-translate-y-1"
            >
              <div className="p-3 bg-gray-50 rounded-full mb-3 text-gray-600 group-hover:text-blue-600 group-hover:bg-blue-50 transition-colors">
                <cat.icon size={28} />
              </div>
              <h3 className="font-semibold text-gray-900 mb-1">{cat.name}</h3>
              <p className="text-xs text-gray-400">{cat.desc}</p>
            </Link>
          ))}
        </div>
      </section>

      {/* Recent Works */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-end mb-8">
          <div>
            <h2 className="text-2xl font-bold text-gray-900">最新作品</h2>
            <p className="text-gray-500 mt-1">精选近期设计案例</p>
          </div>
          <Link to="/portfolio" className="hidden sm:flex items-center text-blue-600 hover:text-blue-700 font-medium transition-colors">
            查看全部 <ArrowRight size={16} className="ml-1" />
          </Link>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {recentProjects.map(project => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
        
        <div className="mt-8 text-center sm:hidden">
           <Link to="/portfolio" className="text-blue-600 font-medium hover:underline">
             查看全部作品 &rarr;
           </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;