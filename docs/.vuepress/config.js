const path = require('path');

module.exports = {
    title: 'easyUI',
    description: '基于elementUI二次开发的组件库',

    head: [
        ['link', { rel: 'icon', href: '/favicon.ico' }]
    ],
    themeConfig: {
        logo: '/assets/img/photo.jpg',
        nav: [
            { text: 'Home', link: '/' },
            { text: 'Guide', link: '/guide/' },
        ],
        sidebar: {
            '/guide/': [
                ['', '介绍'],
                ['quick-start', '快速上手'],
                ['component-guide', '组件']
            ],
        }
    }
}
