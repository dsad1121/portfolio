import React from 'react';
import { Mail, MessageCircle, Github, Globe } from 'lucide-react';
import { CONTACT_INFO } from '../constants';

const Contact: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-20 min-h-[80vh] flex flex-col items-center justify-center text-center">
      <h1 className="text-4xl font-bold text-gray-900 mb-6">期待与您合作</h1>
      <p className="text-xl text-gray-500 max-w-xl mb-12">
        无论是有项目合作意向，还是单纯想打个招呼，都欢迎随时联系。
        我目前开放接受自由职业与商业合作机会。
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-2xl">
        {/* Email Card */}
        <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 flex flex-col items-center hover:shadow-md transition-shadow">
          <div className="bg-blue-50 p-4 rounded-full text-blue-600 mb-4">
            <Mail size={32} />
          </div>
          <h3 className="text-lg font-bold text-gray-900 mb-2">邮箱联系</h3>
          <a href={`mailto:${CONTACT_INFO.email}`} className="text-blue-600 hover:underline font-medium">
            {CONTACT_INFO.email}
          </a>
        </div>

        {/* WeChat/Social Card */}
        <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 flex flex-col items-center hover:shadow-md transition-shadow">
          <div className="bg-green-50 p-4 rounded-full text-green-600 mb-4">
            <MessageCircle size={32} />
          </div>
          <h3 className="text-lg font-bold text-gray-900 mb-2">微信联系</h3>
          <p className="text-gray-600 mb-2 text-sm">扫描或搜索 ID</p>
          <div className="w-32 h-32 bg-gray-200 mb-2 flex items-center justify-center text-gray-400 text-xs">
            <img src="/assets/projects/微信图片.png" alt="微信二维码" className="w-full h-full object-cover" />
          </div>
          <span className="text-gray-800 font-mono text-sm bg-gray-50 px-2 py-1 rounded">
            {CONTACT_INFO.wechat}
          </span>
        </div>
      </div>

      <div className="flex gap-6 mt-16">
         <a 
            href={CONTACT_INFO.social.dribbble} 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-pink-500 transition-colors"
          >
           <Globe size={24} /> <span className="sr-only">Dribbble</span>
         </a>
         <a 
            href={CONTACT_INFO.social.behance} 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-blue-600 transition-colors"
          >
           <Globe size={24} /> <span className="sr-only">Behance</span>
         </a>
         <a 
            href="#" 
            className="text-gray-400 hover:text-gray-900 transition-colors"
          >
           <Github size={24} /> <span className="sr-only">GitHub</span>
         </a>
      </div>
    </div>
  );
};

export default Contact;