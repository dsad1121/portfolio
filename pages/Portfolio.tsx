import React, { useState, useEffect, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Search } from 'lucide-react';
import { CATEGORIES, PROJECTS } from '../constants';
import { Category } from '../types';
import ProjectCard from '../components/ProjectCard';

const Portfolio: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const initialCat = (searchParams.get('cat') as Category) || '全部';
  
  const [activeCategory, setActiveCategory] = useState<Category>(
    CATEGORIES.includes(initialCat) ? initialCat : '全部'
  );
  const [searchQuery, setSearchQuery] = useState('');

  // Update URL when category changes locally
  useEffect(() => {
    if (activeCategory === '全部') {
      searchParams.delete('cat');
    } else {
      searchParams.set('cat', activeCategory);
    }
    setSearchParams(searchParams);
  }, [activeCategory, setSearchParams, searchParams]);

  // Filter Logic
  const filteredProjects = useMemo(() => {
    return PROJECTS.filter(project => {
      const matchesCategory = activeCategory === '全部' || project.category === activeCategory;
      const matchesSearch = project.title.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchQuery]);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 min-h-screen">
      <div className="flex flex-col md:flex-row md:items-center justify-between mb-10 space-y-4 md:space-y-0">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">作品集</h1>
          <p className="text-gray-500 mt-1">探索我在不同领域的设计实践</p>
        </div>

        {/* Search */}
        <div className="relative w-full md:w-64">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <Search className="h-4 w-4 text-gray-400" />
          </div>
          <input
            type="text"
            className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 sm:text-sm transition-shadow"
            placeholder="搜索作品名称..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
      </div>

      {/* Category Tabs */}
      <div className="flex flex-wrap gap-2 mb-10 border-b border-gray-200 pb-4">
        {CATEGORIES.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
              activeCategory === cat
                ? 'bg-gray-900 text-white shadow-md'
                : 'bg-white text-gray-600 hover:bg-gray-100 border border-gray-200'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Masonry Grid -> Changed to CSS Columns for waterfall layout */}
      {filteredProjects.length > 0 ? (
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-8">
          {filteredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      ) : (
        <div className="text-center py-20">
          <p className="text-gray-500">未找到匹配的作品。</p>
          <button 
            onClick={() => { setActiveCategory('全部'); setSearchQuery(''); }}
            className="mt-2 text-blue-600 hover:underline text-sm"
          >
            清除筛选条件
          </button>
        </div>
      )}
    </div>
  );
};

export default Portfolio;