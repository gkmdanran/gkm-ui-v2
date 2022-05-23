const path = require('path');

module.exports = {
    title: 'gkmUI',
    description: '基于elementUI二次开发的组件库',
    port: 8087,
    head: [
        ['link', { rel: 'icon', href: '/favicon.ico' }]
    ],
    themeConfig: {
        search: false,
        logo: '/assets/img/photo.jpg',
        nav: [
            {
                text: '组件',
                link: '/components/'
            },
            {
                text: 'GitHub',
                link: 'https://github.com/gkmdanran/gkm-ui-vue3'
            },
            {
                text: '其他链接',
                items: [
                    {
                        text: '博客',
                        items: [
                            {
                                text: '掘金',
                                link: 'https://juejin.cn/user/562566008155693'
                            },
                            {
                                text: '个人博客',
                                link: 'http://101.132.68.0:3333/'
                            }
                        ]
                    },
                    {
                        text: '作品',
                        items: [
                            {
                                text: '头像生成器',
                                link: 'http://101.132.68.0:81/makePhoto/'
                            },
                        ]
                    }
                ]
            }
        ],
        sidebar: {
            '/components/': [
                {
                    title: 'Basic 基础组件',
                    children: [
                        ['/components/pages/Button', 'Button 按钮'],
                        ['/components/pages/Container', 'Container 容器'],
                        ['/components/pages/Panel', 'Panel 面板'],
                    ]
                },
                {
                    title: 'Data 数据展示',
                    children: [
                        ['/components/pages/Table', 'Table 表格'],
                        ['/components/pages/CollapseText', 'CollapseText 折叠文本'],
                        ['/components/pages/CollapseList', 'CollapseList 折叠列表'],
                    ]
                },
                {
                    title: 'Form 表单组件',
                    children: [
                        ['/components/pages/RadioGroup', 'RadioGroup 单选框组'],
                        ['/components/pages/Search', 'Search 搜索'],
                    ]
                },
                {
                    title: 'Navigation 导航',
                    children: [
                        ['/components/pages/Menu', 'Menu 菜单'],
                    ]
                },
            ]
        },
        sidebarDepth: 2, // 侧边栏显示2级
    }
}
