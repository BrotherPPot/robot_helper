module.exports = {
    themeConfig: {
        logo: '/assets/img/五等分的牢饭.jpg',
        activeHeaderLinks: true,
        displayAllHeaders: true,
        sidebar: [
            {
                title: '会战类',
                path: '/clan/',
                collapsable: false,
                sidebarDepth: 1,
                children: ['/clan/clan_work', '/clan/clan_main']
            },
            {
                title: '娱乐类',
                path: '/entertain/',
                collapsable: false,
                sidebarDepth: 1,
                children: ['/entertain/game', '/entertain/old_gacha', '/entertain/new_gacha']
            },
            {
                title: '系统类',
                path: '/system/',
                collapsable: false,
                siderbarDepth: 1,
                children: ['/system/sys']
            }
        ]
    }
}