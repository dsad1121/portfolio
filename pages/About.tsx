import React from 'react';
import { User, Code, Heart } from 'lucide-react';

const SKILLS = [
  'Adobe XD', 'Adobe Photoshop', 'Adobe After Effects', 'Adobe Premiere Pro',
  'Web前端', 'Vue.js', 'PHP', 'UI设计', 'MG动画'
];

const About: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-16">
      <div className="bg-white rounded-2xl p-8 md:p-12 shadow-sm border border-gray-100">
        
        {/* Header Profile */}
        <div className="flex flex-col md:flex-row items-center md:items-start gap-8 mb-12">
          <div className="w-32 h-32 md:w-40 md:h-40 flex-shrink-0 bg-gray-200 rounded-full overflow-hidden border-4 border-white shadow-md">
            <img 
              src="/assets/projects/个人图片.png" 
              alt="Profile" 
              className="w-full h-full object-cover"
            />
          </div>
          <div className="text-center md:text-left">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">卢泽雄</h1>
            <p className="text-lg text-blue-600 font-medium mb-4">视觉设计师 & 前端爱好者</p>
            <p className="text-gray-600 leading-relaxed max-w-2xl">
              我是一名来自广东的学生，对视觉设计和Web开发充满热情。
              我喜欢创造美观且实用的东西，并享受将想法变为现实的过程。
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* My Story */}
          <div>
            <h3 className="flex items-center text-xl font-bold text-gray-900 mb-4">
              <User className="mr-2 text-blue-500" size={20} /> 关于我
            </h3>
            <div className="text-gray-600 space-y-4 leading-relaxed text-sm sm:text-base">
              <p>
                我目前正在学习设计和开发的交叉领域，努力成为一名全能型选手。
                我相信好的设计能够解决问题，而代码能将设计赋予生命。
              </p>
              <p>
                虽然我还是一个学生，但我对新技术充满好奇，并乐于接受挑战。
                我希望通过不断学习和实践，在设计的道路上走得更远。
              </p>
            </div>
          </div>

          {/* Skills */}
          <div>
            <h3 className="flex items-center text-xl font-bold text-gray-900 mb-4">
              <Code className="mr-2 text-blue-500" size={20} /> 技能 & 工具
            </h3>
            <div className="flex flex-wrap gap-2">
              {SKILLS.map(skill => (
                <span 
                  key={skill}
                  className="px-3 py-1 bg-gray-50 text-gray-700 text-sm rounded-md border border-gray-100 hover:border-blue-200 transition-colors"
                >
                  {skill}
                </span>
              ))}
            </div>
            
            <h3 className="flex items-center text-xl font-bold text-gray-900 mt-8 mb-4">
              <Heart className="mr-2 text-blue-500" size={20} /> 个人兴趣
            </h3>
            <p className="text-gray-600 text-sm">
              动漫、游戏、看电影、听音乐。
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;