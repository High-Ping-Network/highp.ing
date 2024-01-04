import { defineConfig } from 'vitepress'


// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "HP Net's site",
  titleTemplate: 'Custom Suffix',
  description: "HP Net's site",
  i18nRouting: false,
  locales: {
    root: {
      label: '中文',
      lang: 'zh'
    },
    cn: {
      label: 'English',
      lang: 'en', 
      link: '/docs/' 
    }
  },
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    i18nRouting: true,
    nav: [
      { text: 'Home', link: '/' },
      { text: 'blog', link: 'https://blog.highp.ing' },
      { text: 'Team', link: '/docs/team'}
    ],

    sidebar: [
      {
        items: [
          { text: 'Team', link: '/docs/team' },
          { text: 'About', link: '/docs/about' }
        ]
      }
    ],
    head: [
      // 添加Font Awesome CSS链接
      ['link', { rel: 'stylesheet', href: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css' }],
      ['link', { rel: 'icon', href: '/favicon.ico' }]
    ],
  
    socialLinks: [
      { icon: 'github', link: 'https://github.com/High-Ping-Network' }
    ]
  }
})
