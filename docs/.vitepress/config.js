// .vitepress/config.js
export default {
  // site-level options
  title: 'High Ping Network',
  description: 'This Is High Ping Network Official Website',

  themeConfig: {
    logo: '/logo.png',
    nav: [
      { text: 'GitHub', link: 'https://github.com/High-Ping-Network/' },
      { text: 'Telegram', link: 'https://t.me/HighPingNetwork' },
      ],
//      {
//        text: 'Blog',
//        items: [
//          { text: 'Item A', link: '/item-1' }
//        ]
//      }
    socialLinks: [
      { icon: 'github', link: 'https://github.com/High-Ping-Network' }
    ],
    footer: {
      message: 'Powered By VitePress',
      copyright: 'Copyright © 2023 High Ping Network. All rights reserved.',
    }
  }
}
