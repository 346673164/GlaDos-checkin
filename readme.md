# Checkin

GitHub Actions 实现 [GLaDOS](https://glados.space/landing/ZTIMU-AU8P5-O9VGU-AJ7CB) 自动签到

([GLaDOS](https://glados.space/landing/ZTIMU-AU8P5-O9VGU-AJ7CB) 可用邀请码: [ZTIMU-AU8P5-O9VGU-AJ7CB](https://glados.space/landing/ZTIMU-AU8P5-O9VGU-AJ7CB), 双方都有奖励天数)

## 使用说明

1. Fork 这个仓库

1. 登录 [GLaDOS](https://glados.space/landing/ZTIMU-AU8P5-O9VGU-AJ7CB) 获取 Cookie

1. 添加 Cookie 到 Secret `GLADOS`

1. 启用 Actions, 每天北京时间 00:10 自动签到

1. 如需推送通知, 可用 [PushPlus][pushplus], 添加 Token 到 Secret `NOTIFY`

[glados]: https://github.com/glados-network/GLaDOS
[pushplus]: https://www.pushplus.plus/
