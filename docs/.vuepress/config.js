module.exports = {
    themeConfig: {
        logo: '/assets/img/五等分的牢饭.jpg',
        activeHeaderLinks: true,
        displayAllHeaders: true,
        sidebar: [{
                title: '会战类',
                path: '/clan/',
                collapsable: true,
                sidebarDepth: 2,
                children: ['/clan/clan_work', '/clan/clan_main']
            },
            {
                title: '娱乐类',
                path: '/entertain/',
                collapsable: true,
                sidebarDepth: 2,
                children: ['/entertain/game', '/entertain/old_gacha', '/entertain/new_gacha', '/entertain/watch_photo']
            },
            {
                title: '系统类',
                path: '/system/',
                collapsable: true,
                siderbarDepth: 2,
                children: ['/system/sys']
            }
        ]
    }
}