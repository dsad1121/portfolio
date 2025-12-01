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
  {
    id: '1',
    title: '金融科技仪表盘 UI',
    category: 'UI设计',
    description: '为一家金融科技公司设计的综合数据仪表盘，专注于大数据的可视化呈现与用户操作的便捷性，采用了清晰的卡片式布局。',
    // 缩略图：建议尺寸 600x400
    thumbnailUrl: 'https://picsum.photos/id/1/600/400', 
    // 详情图/视频：如果是图片建议宽度 1200px+
    mediaUrl: 'https://picsum.photos/id/1/1200/800',
    mediaType: 'image',
    tools: ['Figma', 'Sketch'],
    date: '2023-10-15',
  },
  {
    id: '2',
    title: '赛博朋克音乐节海报',
    category: '海报图',
    description: '为电子音乐节设计的宣传海报，运用了高饱和度的霓虹色彩与未来感十足的排版风格，旨在传达狂欢与科技结合的氛围。',
    thumbnailUrl: 'https://picsum.photos/id/12/600/800',
    mediaUrl: 'https://picsum.photos/id/12/1200/1600',
    mediaType: 'image',
    tools: ['Photoshop', 'Illustrator'],
    date: '2023-09-01',
  },
  {
    id: '3',
    title: '品牌 Logo 动态演绎',
    category: 'MG动画',
    description: '为初创品牌制作的 Logo 演绎动画，通过流畅的线条变换与回弹效果，生动展示了品牌形象的活力与亲和力。',
    thumbnailUrl: 'https://picsum.photos/id/33/600/400',
    // 视频文件路径示例
    mediaUrl: 'https://media.w3.org/2010/05/sintel/trailer.mp4', 
    mediaType: 'video',
    tools: ['After Effects', 'Lottie'],
    date: '2023-11-20',
  },
  {
    id: '4',
    title: '效率工具图标集',
    category: '图标',
    description: '一套为生产力工具 APP 设计的线性图标，包含 50+ 个基础功能图标，风格统一，线条简洁有力。',
    thumbnailUrl: 'https://picsum.photos/id/48/400/400',
    mediaUrl: 'https://picsum.photos/id/48/800/800',
    mediaType: 'image',
    tools: ['Illustrator'],
    date: '2023-08-12',
  },
  {
    id: '5',
    title: '时尚电商 APP 界面',
    category: 'UI设计',
    description: '时尚类电商移动端应用界面设计，主打极简主义风格，优化了购物流程与结账体验，提升了转化率。',
    thumbnailUrl: 'https://picsum.photos/id/60/600/1000',
    mediaUrl: 'https://picsum.photos/id/60/1000/1800',
    mediaType: 'image',
    tools: ['Figma'],
    date: '2023-12-05',
  },
  {
    id: '6',
    title: '独立电影节系列海报',
    category: '海报图',
    description: '为独立电影节创作的系列极简海报，通过负空间与象征性符号的运用，隐喻电影的主题内核。',
    thumbnailUrl: 'https://picsum.photos/id/76/600/850',
    mediaUrl: 'https://picsum.photos/id/76/1200/1700',
    mediaType: 'image',
    tools: ['InDesign', 'Photoshop'],
    date: '2023-07-30',
  },
  {
    id: '7',
    title: '加载状态微交互',
    category: 'MG动画',
    description: '探索了一系列加载状态下的微交互动画，旨在缓解用户等待时的焦虑感，增加产品的趣味性。',
    thumbnailUrl: 'https://picsum.photos/id/96/600/400',
    mediaUrl: 'https://media.w3.org/2010/05/sintel/trailer.mp4',
    mediaType: 'video',
    tools: ['Principle', 'After Effects'],
    date: '2023-10-01',
  },
  {
    id: '8',
    title: 'SaaS 系统图标',
    category: '图标',
    description: '为企业级 SaaS 平台定制的像素级系统图标，确保在小尺寸下依然保持高清晰度与识别度。',
    thumbnailUrl: 'https://picsum.photos/id/111/400/400',
    mediaUrl: 'https://picsum.photos/id/111/800/800',
    mediaType: 'image',
    tools: ['Figma'],
    date: '2023-06-15',
  },
];

export const CONTACT_INFO = {
  email: 'design@example.com',
  wechat: 'wx_designer_id', // 您的微信ID
  social: {
    dribbble: 'https://dribbble.com',
    behance: 'https://behance.net'
  }
};