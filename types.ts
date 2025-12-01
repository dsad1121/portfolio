export type Category = '全部' | 'UI设计' | '海报图' | 'MG动画' | '图标';

export interface Project {
  id: string;
  title: string;
  category: Category;
  description: string;
  thumbnailUrl: string; // URL for the grid view
  mediaUrls: string[]; // URL(s) for the detail view (high res image or video)
  mediaType: 'image' | 'video'; // To decide how to render details
  tools: string[];
  date: string;
}

export interface NavigationItem {
  label: string;
  path: string;
}