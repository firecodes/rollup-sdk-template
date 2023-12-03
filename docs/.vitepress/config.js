import { defineConfig } from 'vitepress'
import zhConfig from './locales/zh.config.js'
import enConfig from './locales/en.config.js'
export default defineConfig({
  base: '/sdk-docs/',
  cleanUrls: 'without-subfolders',
  head: [['link', { rel: 'icon', href: '/sdk-docs/assets/favicon.png' }]],
  locales: {
    root: zhConfig,
    // en: enConfig,
  },
  themeConfig: {
    logo: '/assets/logo.svg',
    search: {
      provider: 'local',
    },
    socialLinks: [{ icon: 'github', link: 'https://github.com/firecodes/webpack5-sdk-template' }],
    footer: {
      copyright: '版权所有 © 2019 - 2023',
    },
  },
})
