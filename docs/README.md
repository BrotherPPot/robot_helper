---
title: 首页
---

# 机器人使用帮助
本文档由 **@二人之心不从 和 @LinePro** 在 [Yobot](https://github.com/yuudi/yobot) 的基础上，重新整理编写而成。  
主要内容是 **定制版 Yobot** 的使用说明，其中大致分为**工会战，娱乐，系统**三大模块。  
相比原来纯表格的写法更直观，加入了更多的示例，更便于用户使用，希望各位使用愉快。

**本文档最后更新时间：2021 年 7 月 5 日**

# 公告
当前报刀指令已取消强制队伍名上报限制，如果仍需记录队伍等信息请使用 `备注` 功能，该信息会直观地展示在查刀页面上，指令格式如下：
* 完整刀和补偿刀：`报刀 xxx @yyy :队伍等备注信息`
* 尾刀：`尾刀 @yyy :队伍等备注信息`
> 其中 `@yyy` 为代刀代报，是可选的，注意由于 QQ 的限制，**@人复制是无效的**。指令最后使用冒号可添加备注信息，也是可选的。

# 机器人服务提示
1. 有意购置本机器人服务者请联系 **@二人之心不从 (QQ: 13993844304) 或 @LinePro (QQ: 465232051)**，联系请备注`公主连结机器人`，目前定价：**￥15/月**。
2. 购置本机器人服务者，在提供额外 QQ 账号的前提下还可获赠 **涩图和竞技场排名变动提醒** 两大功能，详见文档中的 [额外功能](./extra/README.md) 模块。

# 机器人服务说明
**￥15/月** 包含的服务如下：
1. 公会战机器人（兼部分娱乐功能）【无头少女凯露酱】部分
    * 不需要提供 QQ 号和服务器。
    * 机器人程序的日常维护和正常运行。
    * 有限的技术支持（并非 7 × 24小时）
    * 接受一定程度上的功能定制（不能保证完成时间）

2. 额外功能部分
    * 需要提供 QQ 号，该 QQ 号和使用该功能的群可能会被腾讯封禁，我方不承担相应责任。
    * 只提供程序源码。提供搭建服务和有限的维护服务。
    * 有限的技术支持（并非 7 × 24小时）。
    * 接受一定程度上的功能定制（不能保证完成时间）。
    * 不保证图片可达性（即可能发生指令没有响应的情况）。
    * 限制每日 300 次涩图指令响应。
    * 不保证竞技场排名变动提醒功能的稳定性（即服务随时有可能出错中断）。
    * 赠送服务器运行环境，但会有额外限制，可能会包括但不限于以下类型：
        * 指令冷却时间。
        * 图片限速发送.
        * 指令队列响应（队列处理可能会有时间间隔）。
        * 一次指令执行未完成时不响应其他指令。
        * 不保证稳定性。
        * ……
        > 注：可以使用自己的服务器，搭建和有限的维护不需要额外收费，但需自行解决网络问题。
