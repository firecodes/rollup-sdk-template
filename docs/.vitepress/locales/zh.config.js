export default {
  label: '中文',
  lang: 'zh',
  link: '/zh/',
  title: 'SDK Client 开发文档',
  themeConfig: {
    nav: [
      {
        text: '文档',
        items: [
          { text: '快速上手', link: '/zh/guide/get-start' },
          { text: 'Cesium', link: 'https://github.com/CesiumGS/cesium/' },
        ],
      },
      { text: 'API', link: '/zh/api/global' },
      {
        text: '周边社区',
        items: [
          {
            text: 'Vue',
            items: [
              { text: 'dc-vue', link: 'https://github.com/dvgis/dc-vue' },
              {
                text: 'dc-vue-next',
                link: 'https://github.com/dvgis/dc-vue-next',
              },
            ],
          },
          {
            text: 'vite',
            items: [
              {
                text: 'vite-plugin-dc',
                link: 'https://github.com/dvgis/vite-plugin-dc',
              },
              { text: 'dc-vite', link: 'https://github.com/dvgis/dc-vite' },
            ],
          },
        ],
      },
      { text: '赞助', link: '/zh/donation/' },
    ],
    sidebar: {
      '/zh/guide/': [
        {
          text: '文档',
          items: [
            { text: '简介', link: '/zh/guide/introduction' },
            { text: '快速上手', link: '/zh/guide/get-start' }
          ],
        },
      ],
      '/zh/api/': [
        {
          items: [
            { text: '全局 API', link: '/zh/api/global' },
            { text: '基础 API', link: '/zh/api/base' },
            {
              text: '<b>要素 API</b>',
              items: [
                { text: '矢量要素', link: '/zh/api/overlay-vector' },
              ],
            },
            {
              text: '效果 API',
              items: [
                { text: '场景效果', link: '/zh/api/effect-scene' },
                { text: '动画效果', link: '/zh/api/effect-animation' },
              ],
            },
          ],
        },
      ],
    },
    docFooter: {
      prev: '上一页',
      next: '下一页',
    },
    outlineTitle: '目录',
    search: {
      provider: 'local',
    },
  },
}
