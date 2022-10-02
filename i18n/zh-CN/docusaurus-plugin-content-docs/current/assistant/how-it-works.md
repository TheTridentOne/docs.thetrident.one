---
title: Assistant 工作原理
---

在开始使用 [Trident Assistant](https://assistant.thetrident.one) 之前，最好能了解 Mixin NFT 和 Trident 的一些基本工作原理。

## 通过转账来铸造 Mixin NFT

Mixin NFT 是通过一个 MTG 应用，即 [NFO](https://github.com/MixinNetwork/nfo) 来发行的。

铸造 Mixin NFT 的过程就是，创作者向 NFO 这个 MTG 的多签钱包转账一笔发行费（0.001 XIN），并且在转账中携带一个特定格式的 memo。NFO 收到发行费，并成功解析 memo 之后，就会将 NFT 原路返回，即转到创作者的钱包上。

:::tip
这里有一个关键点是，在 NFO 的层面，铸造时的发行费来自于谁，谁就是该 NFT 的创作者，铸造好的 NFT 就转给谁。
:::

由此可知，批量铸造 Mixin NFT 的关键在于**批量转账**。

## Mixin 机器人作为 NFT 创作者

Mixin Messenger 的用户都知道，每次转账都必须输入 6 位数字 PIN 码。所以 Mixin Messenger 帐号作为创作者时，很难实现批量铸造 Mixin NFT。

一个简单可行的办法是利用 Mixin 机器人来批量转账铸造 NFT。

:::tip
支持 MVM 之后，用以太坊帐号，通过 MVM 来批量铸造 Mixin NFT 也是可行的，编写相关脚本，批量调用转账合约就可以。
:::

[Trident Assistant](https://assistant.thetrident.one) 就是基于 Mixin 机器人来实现批量操作 NFT 的。

在使用 [Trident Assistant](https://assistant.thetrident.one) 之前，得先在 Mixin 开发者后台注册一个 Mixin 机器人。每一个 Mixin Messenger 帐号至少可以免费注册一个 Mixin 机器人，注册网址是 https://development.mixin.one/dashboard 。

有了 Mixin 机器人后，下载应用 session 可以得到一个 `keystore.json` 文件，即机器人的密钥。利用 `keystore.json` 文件即可登录 [Trident Assistant](https://assistant.thetrident.one) 使用。

:::tip
Mixin 机器人的 `keystore.json` 文件如果丢失，可以在 Mixin 开发者后台重新生成一个，旧的则会同时失效。因为 NFT 的创作者为你的 Mixin 机器人，出售 NFT 收到的款也会在机器人的钱包里，安全起见，建议及时转移到你的个人钱包。
:::

## 通过转账操作订单

Trident 是一个 MTG 应用，对于 MTG 应用来说，转账是唯一的通讯手段。所以出售、拍卖、出价、购买、取消订单等操作，都是通过给 Trident MTG 转账并携带相应格式的 memo 来完成，其中重要的是转账携带的 memo，至于转账的币种和金额则不重要。在 [Trident 网站](https://thetrident.one)，用户进行订单操作时，需要支付最小单位的 XIN 或者 ETH（对于 MVM 用户）。在 [Trident Assistant](https://assistant.thetrident.one) 中使用的是测试币 CNB。

所以使用 [Trident Assistant](https://assistant.thetrident.one) 时，除了需要给机器人准备铸造 NFT 所需要的 XIN（0.001 XIN/枚）以外，还得准备一点 CNB（如果没有可以在社区里问一下，大家会很慷慨送你一些，或者在 [4swap](https://4swap.org) 直接购买一些）。MTG 操作每次只需要最小单位，即 0.00000001 CNB，所以只需要准备一点就可以。
