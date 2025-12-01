import React from 'react';
import { User, Code, Heart } from 'lucide-react';

const SKILLS = [
  'UI/UX 设计', '视觉设计', '交互设计', 
  '原型制作', '线框图', '用户研究',
  'Adobe Photoshop', 'Adobe Illustrator', 'Figma',
  'After Effects', 'Cinema 4D', 'HTML/CSS'
];

const About: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-16">
      <div className="bg-white rounded-2xl p-8 md:p-12 shadow-sm border border-gray-100">
        
        {/* Header Profile */}
        <div className="flex flex-col md:flex-row items-center md:items-start gap-8 mb-12">
          <div className="w-32 h-32 md:w-40 md:h-40 flex-shrink-0 bg-gray-200 rounded-full overflow-hidden border-4 border-white shadow-md">
            <img 
              src="https://picsum.photos/id/64/400/400" 
              alt="Profile" 
              className="w-full h-full object-cover"
            />
          </div>
          <div className="text-center md:text-left">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">卢泽雄 设计师</h1>
            <p className="text-lg text-blue-600 font-medium mb-4">数字产品设计师 & 艺术指导</p>
            <p className="text-gray-600 leading-relaxed max-w-2xl">
              我是一名充满激情的设计师，常驻云端。在设计行业拥有超过 5 年的经验，
              我擅长将复杂的问题简化为直观、优美的界面。
              我的工作范畴涵盖 UI/UX、品牌设计及动态视觉。
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
                我的设计之旅始于传统的平面设计，但我很快便爱上了 Web 的交互特性。
                我相信优秀的设计不仅仅是关于外观，更在于它是如何运作的。
              </p>
              <p>
                我热衷于在协作环境中工作，并乐于通过设计连接技术与艺术。
                工作之余，我喜欢徒步旅行、摄影，或者尝试一些 3D 艺术创作。
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
              摄影、排版设计、极简建筑、科幻电影以及咖啡。
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;