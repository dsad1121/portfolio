
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // 部署到 Netlify/Vercel 时，请移除或注释掉 base 配置
  // base: '/portfolio/', 
})
