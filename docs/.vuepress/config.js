module.exports = {
    plugins: [
        'img-lazy'
      ],
    themeConfig: {
        logo: '/assets/img/logo.jpg',
        activeHeaderLinks: true,
        displayAllHeaders: true,
        sidebar: [{
                title: '会战类',
                path: '/clan/',
                collapsable: true,
                sidebarDepth: 2,
                children: ['/clan/clan_main', '/clan/clan_work']
            },
            {
                title: '娱乐类',
                path: '/entertain/',
                collapsable: true,
                sidebarDepth: 2,
                children: ['/entertain/game', '/entertain/new_gacha', '/entertain/yobot_original']
            },
            {
                title: '系统类',
                path: '/system/',
                collapsable: true,
                siderbarDepth: 2,
                children: ['/system/sys','/system/sysWeb']
            },
            {
                title: '花舞类',
                path: '/huawu/',
                collapsable: true,
                siderbarDepth: 2,
                children: ['/huawu/huawu']
            },
            {
                title: '额外功能',
                path: '/extra/',
                collapsable: false
            }
        ]
    }
}