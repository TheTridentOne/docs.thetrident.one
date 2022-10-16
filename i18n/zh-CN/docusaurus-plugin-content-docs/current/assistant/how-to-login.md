---
title: 如何登录
---

Assistant 是帮助用户使用机器人来完成程序化的 NFT 操作，所以需要使用机器人的 `keystore.json` 文件来登录 Assistant。

`keystore.json` 文件可以在 Mixin 开发者平台中生成。

:::warning
拥有 `keystore.json` 文件意味着获得机器人的控制权，可以控制机器人进行发消息和转账等操作，请妥善保管。转账对于 NFT 的操作必不可少，所以对于 Assistant 平台来说，上传 `keystore.json` 是必需的。

Assistant 平台是[开源](https://github.com/TheTridentOne/trident_assistant_web)的，不会滥用用户信息。如果你非常在意安全，可以在每次使用完 Assistant 之后，都在 Mixin 开发者平台中为机器人重新生成一个新的 `keystore.json` 文件，旧的 `keystore.json` 则会即时失效。
:::
