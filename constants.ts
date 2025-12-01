import { Project, Category } from './types';

export const CATEGORIES: Category[] = ['全部', 'UI设计', '海报图', 'MG动画', '图标'];

/**
 * ============================================================================
 * 如何添加新作品？(How to add a new project)
 * ============================================================================
 * 
 * 1. 准备资源 (Prepare Assets):
 *    - 将您的图片或视频文件放入 public/assets/projects/ 文件夹中。
 *    - 建议文件名规范，例如: project-1-thumb.jpg, project-1-full.jpg
 *    - 视频文件支持 .mp4, .mov
 * 
 * 2. 填写数据 (Add Data):
 *    - 复制下方的对象结构，粘贴到 PROJECTS 数组中。
 *    - 修改对应字段：
 *      - id: 唯一标识符，不要重复 (例如 '9', '10')
 *      - category: 必须是上面 CATEGORIES 中定义的一个 ('UI设计', '海报图', 'MG动画', '图标')
 *      - thumbnailUrl: 列表页的小图路径 (例如 '/assets/projects/demo-thumb.jpg')
 *      - mediaUrl: 详情页的大图或视频路径
 * 
 * ============================================================================
 */

// 示例数据
// 注意：实际使用时，请确保 public/assets/projects/ 下有对应的图片文件
// 这里的路径 '/assets/...' 对应的是项目根目录下的 public 文件夹
export const PROJECTS: Project[] = [
  // UI设计 - 酷我音乐
  {
    id: '9',
    title: '酷我音乐概念设计',
    category: 'UI设计',
    description: '作为一名UI设计爱好者，我对酷我音乐APP进行了重新构想。此项目涵盖了从加载页、登录注册到核心的播放页、首页、听书、直播和个人中心等多个关键界面。设计旨在优化用户体验，并赋予其现代、简洁的视觉风格。',
    thumbnailUrl: '/assets/projects/ui设计/酷我音乐/首页.png',
    mediaUrl: '/assets/projects/ui设计/酷我音乐/首页.png',
    mediaType: 'image',
    tools: ['Figma', 'Photoshop'],
    date: '2024-05-10',
  },
  // UI设计 - 小黄人主题
  {
    id: '10',
    title: '小黄人主题界面设计',
    category: 'UI设计',
    description: '一个充满乐趣的个人项目，将可爱的小黄人元素融入UI设计中。这个项目探索了如何将强烈的IP风格与实用的界面布局相结合，创造出既好玩又易用的用户体验。包含了一套定制图标和主题界面。',
    thumbnailUrl: '/assets/projects/ui设计/小黄人主题/小黄人主题.png',
    mediaUrl: '/assets/projects/ui设计/小黄人主题/小黄人主题.png',
    mediaType: 'image',
    tools: ['Illustrator', 'Photoshop'],
    date: '2024-04-20',
  },
  // 图标制作
  {
    id: '11',
    title: '系列图标设计',
    category: '图标',
    description: '作为基本功的练习，我设计了一系列不同风格的图标。这套作品集包含了一组相机图标和一组带有模糊效果的创意图标，旨在探索图标设计中的形式、颜色和视觉清晰度。',
    thumbnailUrl: '/assets/projects/ui设计/图标制作/图标.png',
    mediaUrl: '/assets/projects/ui设计/图标制作/图标.png',
    mediaType: 'image',
    tools: ['Illustrator', 'Figma'],
    date: '2024-03-15',
  },
  // 海报
  {
    id: '12',
    title: '节日与商业海报系列',
    category: '海报图',
    description: '这是一系列为不同场景设计的海报作品。内容涵盖了圣诞节、情人节、感恩节等节日海报，以及开业、电商、美食等商业海报。每一张海报都是对排版、色彩和视觉传达的一次探索。',
    thumbnailUrl: '/assets/projects/海报/圣诞节海报.jpg',
    mediaUrl: '/assets/projects/海报/圣诞节海报.jpg',
    mediaType: 'image',
    tools: ['Photoshop', 'Illustrator'],
    date: '2024-06-30',
  },
  {
    id: '13',
    title: '美食主题海报',
    category: '海报图',
    description: '专注于美食领域的商业海报设计。通过诱人的构图和色彩搭配，突出羊腿、面包等产品特色，旨在激发观众的食欲和购买欲望。',
    thumbnailUrl: '/assets/projects/海报/羊腿海报.jpg',
    mediaUrl: '/assets/projects/海报/羊腿海报.jpg',
    mediaType: 'image',
    tools: ['Photoshop'],
    date: '2024-07-15',
  },
  // MG动画
  {
    id: '14',
    title: '“得闲饮茶”MG动画',
    category: 'MG动画',
    description: '一个充满粤式生活气息的MG动画短片。通过流畅的动画和有趣的场景，传达“有空一起喝茶”的悠闲与人情味。这是我在动态图形设计方面的一次愉快尝试。',
    thumbnailUrl: '/assets/projects/mg动画/得闲饮茶.mp4', // 建议为视频创建一个封面图
    mediaUrl: '/assets/projects/mg动画/得闲饮茶.mp4',
    mediaType: 'video',
    tools: ['After Effects', 'Illustrator'],
    date: '2024-08-25',
  },
  {
    id: '15',
    title: '动态图形练习',
    category: 'MG动画',
    description: '一系列MG动画的练习作品，包括了“驯鹿”、“箭射盾牌”和“运动的船”等多个小短片。这些项目帮助我掌握了After Effects中的关键帧、路径动画和粒子效果等核心技巧。',
    thumbnailUrl: '/assets/projects/mg动画/驯鹿.mp4', // 建议为视频创建一个封面图
    mediaUrl: '/assets/projects/mg动画/驯鹿.mp4',
    mediaType: 'video',
    tools: ['After Effects'],
    date: '2024-09-10',
  },
];

export const CONTACT_INFO = {
  email: '3517000936@qq.com',
  wechat: 'luzexio', // 您的微信ID
  social: {
    dribbble: 'https://dribbble.com',
    behance: 'https://behance.net'
  }
};