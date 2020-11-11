module.exports = {
    themeConfig: {
        logo: '/assets/img/五等分的牢饭.jpg',
        activeHeaderLinks: true,
        displayAllHeaders: true,
        sidebar: {
            '/clan/': [{
                title: '会战类',
                siderbarDepth: 2,
                children: [{
                        title: '会战作业',
                        path: '/clan/clan_work'
                    },
                    {
                        title: '会战出刀',
                        path: '/clan/clan_main'
                    }
                ]
            }],
            '/entertain/': [{
                tltle: '娱乐类',
                siderbarDepth: 2,
                children: [{
                        title: '新游戏',
                        path: '/entertain/game'
                    },
                    {
                        title: '旧版抽卡指令',
                        path: '/entertain/old_gacha'
                    },
                    {
                        title: '新版抽卡指令',
                        path: '/entertain/new_gacha'
                    }
                ]
            }],
            '/system/': [{
                title: '系统类',
                siderbarDepth: 2,
                children: [{
                    title: '系统指令',
                    path: '/system/sys'
                }]
            }]
        }
    }
}