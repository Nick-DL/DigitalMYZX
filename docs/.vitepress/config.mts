import { defineConfig } from 'vitepress'

export default defineConfig({
  lang: 'zh-CN',
  title: '玩转数字绵中',
  description: '玩转数字绵中 文档站',
  lastUpdated: true,
  sitemap: {
    hostname: 'https://dgmz.nickdl.site'
  },

  head: [
    ['link', { rel: 'icon', type: 'image/svg+xml', href: '/logo.svg' }],
    ['meta', { name: 'theme-color', content: '#9D2C1A' }]
  ],

  themeConfig: {
    logo: '/logo.svg',
    nav: [
      { text: '指南', link: '/guide/', activeMatch: '/guide/' },
      { text: '资源', link: '/resources/', activeMatch: '/resources/' },
      { text: '参与编辑', link: '/contribute/', activeMatch: '/contribute/' }
    ],

    sidebar: {
      '/guide/': [
        {
          text: '指南',
          items: [
            { text: '序言', link: '/guide/' },
            { text: '0. 概述', link: '/guide/overview' },
            { text: '1. 校园网', link: '/guide/campus-local-area-network' },
            { text: '2. 希沃（教室电教设备）', link: '/guide/classroom-equipment' },
            { text: '3. 教室灯', link: '/guide/classroom-lights' },
            { text: '4. 教室空调', link: '/guide/classroom-ac' },
            { text: '5. 电子班牌（请假系统）', link: '/guide/electronic-class-badge' },
            { text: '6. 办公设备', link: '/guide/office-equipment' },
            { text: '7. 流水系统', link: '/guide/circulation-system' },
            { text: '8. 广播系统', link: '/guide/broadcasting' },
            { text: '9. 监控', link: '/guide/monitor' }
          ]
        },
        {
          text: '更多',
          items: [
          { text: '资源', link: '/resources/' },
          { text: '参与编辑', link: '/contribute/' }
          ]
        }
      ],
      '/resources/': [
        {
          text: '资源',
          link: '/resources/',
          items: [
            { text: 'IP 表', link: '/resources/ip-table' },
            { text: '广播素材', link: '/resources/broadcasting-materials' },
            { text: '常用网址导航', link: '/resources/common-websites' }
          ]
        },
        {
          text: '更多',
          items: [
            { text: '指南', link: '/guide/' },
            { text: '参与编辑', link: '/contribute/' }
          ]
        }
      ]
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/Nick-DL/DigitalMYZX' }
    ],

    outline: {
      label: '本页目录',
      level: [2, 3]
    },

    docFooter: {
      prev: '上一页',
      next: '下一页'
    },

    darkModeSwitchLabel: '外观',
    lightModeSwitchTitle: '切换到浅色模式',
    darkModeSwitchTitle: '切换到深色模式',
    sidebarMenuLabel: '菜单',
    returnToTopLabel: '返回顶部',
    langMenuLabel: '切换语言',

    lastUpdated: {
      text: '最近更新于'
    },

    notFound: {
      title: '找不到页面',
      quote: '页面不存在或已被移除……',
      linkLabel: '返回首页',
      linkText: '返回首页'
    }
  }
})
