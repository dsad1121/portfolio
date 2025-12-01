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
  // ==========================================================================
  // UI 设计
  // ==========================================================================
  {
    id: 'ui-kuwo-music',
    title: '酷我音乐概念设计',
    category: 'UI设计',
    description: '作为一名UI设计爱好者，我对酷我音乐APP进行了重新构想。此项目涵盖了从加载页、登录注册到核心的播放页、首页、听书、直播和个人中心等多个关键界面。设计旨在优化用户体验，并赋予其现代、简洁的视觉风格。',
    thumbnailUrl: '/assets/projects/ui设计/酷我音乐/首页.png',
    mediaUrls: [
      '/assets/projects/ui设计/酷我音乐/首页.png',
      '/assets/projects/ui设计/酷我音乐/播放页.png',
      '/assets/projects/ui设计/酷我音乐/听书页.png',
      '/assets/projects/ui设计/酷我音乐/直播页.png',
      '/assets/projects/ui设计/酷我音乐/我的页.png',
      '/assets/projects/ui设计/酷我音乐/加载页.png',
      '/assets/projects/ui设计/酷我音乐/登录页.png',
      '/assets/projects/ui设计/酷我音乐/注册页.png',
    ],
    mediaType: 'image',
    tools: ['XD', 'Photoshop'],
    date: '2024-05-10',
  },
  {
    id: 'ui-minions-theme',
    title: '小黄人主题界面设计',
    category: 'UI设计',
    description: '一个充满乐趣的个人项目，将可爱的小黄人元素融入UI设计中。这个项目探索了如何将强烈的IP风格与实用的界面布局相结合，创造出既好玩又易用的用户体验。包含了一套定制图标和主题界面。',
    thumbnailUrl: '/assets/projects/ui设计/小黄人主题/小黄人主题.png',
    mediaUrls: [
      '/assets/projects/ui设计/小黄人主题/小黄人主题.png',
      '/assets/projects/ui设计/小黄人主题/小黄人图标.png',
    ],
    mediaType: 'image',
    tools: ['XD', 'Illustrator', 'Photoshop'],
    date: '2024-04-20',
  },
  // ==========================================================================
  // 图标设计
  // ==========================================================================
  {
    id: 'icons-collection',
    title: '系列图标设计练习',
    category: '图标',
    description: '作为基本功的练习，我设计了一系列不同风格的图标。这套作品集包含了一组相机图标和一组带有模糊效果的创意图标，旨在探索图标设计中的形式、颜色和视觉清晰度。',
    thumbnailUrl: '/assets/projects/ui设计/图标制作/图标.png',
    mediaUrls: [
      '/assets/projects/ui设计/图标制作/图标.png',
      '/assets/projects/ui设计/图标制作/相机图标.png',
      '/assets/projects/ui设计/图标制作/模糊图标.png',
    ],
    mediaType: 'image',
    tools: ['Illustrator', 'XD'],
    date: '2024-03-15',
  },
  // ==========================================================================
  // 海报设计
  // ==========================================================================
  {
    id: 'posters-festival',
    title: '节日主题海报',
    category: '海报图',
    description: '为圣诞节、情人节和感恩节等传统节日设计的系列海报。通过不同的色彩和构图风格，捕捉每个节日的独特氛围，是对视觉叙事能力的一次锻炼。',
    thumbnailUrl: '/assets/projects/海报/圣诞节海报.jpg',
    mediaUrls: [
      '/assets/projects/海报/圣诞节海报.jpg',
      '/assets/projects/海报/情人节海报.jpg',
      '/assets/projects/海报/感恩节海报.jpg',
    ],
    mediaType: 'image',
    tools: ['Photoshop', 'Illustrator'],
    date: '2024-06-30',
  },
  {
    id: 'posters-commercial',
    title: '商业与活动海报',
    category: '海报图',
    description: '一系列为商业活动设计的海报，包括开业宣传、电商促销等。重点在于信息传达的清晰度和视觉冲击力，以吸引目标客户。',
    thumbnailUrl: '/assets/projects/海报/开业海报.jpg',
    mediaUrls: [
      '/assets/projects/海报/开业海报.jpg',
      '/assets/projects/海报/电商海报.jpg',
    ],
    mediaType: 'image',
    tools: ['Photoshop'],
    date: '2024-07-05',
  },
  {
    id: 'posters-food',
    title: '美食主题海报',
    category: '海报图',
    description: '专注于美食领域的商业海报设计。通过诱人的构图和色彩搭配，突出羊腿、面包等产品特色，旨在激发观众的食欲和购买欲望。',
    thumbnailUrl: '/assets/projects/海报/羊腿海报.jpg',
    mediaUrls: [
      '/assets/projects/海报/羊腿海报.jpg',
      '/assets/projects/海报/羊腿海报1.jpg',
      '/assets/projects/海报/面包海报.jpg',
    ],
    mediaType: 'image',
    tools: ['Photoshop', 'Lightroom'],
    date: '2024-07-15',
  },
  {
    id: 'posters-creative-series',
    title: '创意视觉海报系列',
    category: '海报图',
    description: '一组探索性的创意海报作品。通过抽象的图形和符号，进行视觉实验，锻炼自己的创意思维和表现技巧。',
    thumbnailUrl: '/assets/projects/海报/海报1.jpg',
    mediaUrls: [
      '/assets/projects/海报/海报1.jpg',
      '/assets/projects/海报/海报2.jpg',
      '/assets/projects/海报/海报3.jpg',
      '/assets/projects/海报/海报4.jpg',
      '/assets/projects/海报/海报5.jpg',
      '/assets/projects/海报/海报6.jpg',
      '/assets/projects/海报/瞳孔变色.jpg',
    ],
    mediaType: 'image',
    tools: ['Photoshop', 'Illustrator'],
    date: '2024-02-18',
  },
  // ==========================================================================
  // MG 动画
  // ==========================================================================
  {
    id: 'mg-tea-time',
    title: '“得闲饮茶”MG动画',
    category: 'MG动画',
    description: '一个充满粤式生活气息的MG动画短片。通过流畅的动画和有趣的场景，传达“有空一起喝茶”的悠闲与人情味。这是我在动态图形设计方面的一次愉快尝试。',
    thumbnailUrl: '/assets/projects/mg动画/得闲饮茶.mp4',
    mediaUrls: ['/assets/projects/mg动画/得闲饮茶.mp4'],
    mediaType: 'video',
    tools: ['After Effects', 'Illustrator'],
    date: '2024-08-25',
  },
  {
    id: 'mg-reindeer',
    title: '驯鹿MG动画',
    category: 'MG动画',
    description: '一个可爱的驯鹿动画短片，探索了角色动画的基本技巧。通过流畅的动作和生动的表情，展现了圣诞节的温馨氛围。',
    thumbnailUrl: '/assets/projects/mg动画/驯鹿.mp4',
    mediaUrls: ['/assets/projects/mg动画/驯鹿.mp4'],
    mediaType: 'video',
    tools: ['After Effects'],
    date: '2024-09-10',
  },
  {
    id: 'mg-arrow-shield',
    title: '箭射盾牌MG动画',
    category: 'MG动画',
    description: '一个动态的箭射盾牌动画效果，展示了物理动画和粒子系统的应用。通过精准的时序控制，创造出戏剧性的视觉冲击。',
    thumbnailUrl: '/assets/projects/mg动画/箭射盾牌.mov',
    mediaUrls: ['/assets/projects/mg动画/箭射盾牌.mov'],
    mediaType: 'video',
    tools: ['After Effects'],
    date: '2024-09-10',
  },
  {
    id: 'mg-boat-motion',
    title: '运动的船GIF动画',
    category: 'MG动画',
    description: '一个循环的船只运动动画，使用GIF格式展现了水面波动的效果。通过简洁的线条和流畅的动画，传达了宁静的航行意象。',
    thumbnailUrl: '/assets/projects/mg动画/运动的船.gif',
    mediaUrls: ['/assets/projects/mg动画/运动的船.gif'],
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