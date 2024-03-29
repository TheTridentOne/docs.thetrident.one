---
title: 常见问题
---

### 为什么操作失败了

Assistant 所有操作都是以 `task` 为单位的，一般情况下在 `task` 的详情页里可以找到操作失败的原因。

### 批量操作为什么这么慢

在给机器人转 XIN 作为发行费用的时候，建议可以小额分多笔转账。例如你需要批量铸造 100 个 NFT，总共需要 0.1 XIN，建议你给机器人转 10 笔 0.01 XIN，而不是转一笔 0.1 XIN。

其中的原因涉及 Mixin 底层的 UTXO 模型。简单理解就是，如果只转一笔 0.1 XIN，那钱包里就只有一张大额的 UTXO，每次支付之后，要等找零回来，才可以支付下一笔。多笔小额就相当于有较多的零钱，节省等待找零的时间。

### 铸造好的 NFT 为什么不显示

所有 Mixin 中的 NFT 都是由 [NFO](https://github.com/MixinNetwork/nfo) 发行的。NFT 铸造完成之后，NFT 会转到创作者的钱包内，即 Mixin 机器人的钱包中。你可以通过 Assistant 网站查看机器人的钱包。

而 Trident 网站此时无法感知 NFT 已经铸造完成，所有网站上并不会展示，直至你将 NFT 托管至 Trident MTG 后，Trident 网站才会确认 NFT 已经铸造成功，然后将其展示。

### 如何出售

在出售之前，需要先将 NFT 托管(deposit)到 Trident MTG，成功托管之后，就会出现出售的操作按钮，`Sell` 即一口价出售，`Auction` 即拍卖。

### 交易成功如何收到提醒

因为出售者是 Mixin 机器人，除非你监听机器人的钱包，否则你无法直接收到交易成功的提醒。但是，你可以在 Trident 网站上关注你的合辑，这样你也可以收到该合辑所有成交的提醒消息。

### 交易成功收到的币在哪

Mixin 机器人作为 NFT 的创作者和出售者，交易成功之后，Trident MTG 会将币转到机器人的钱包。你可以在 Trident Assistant 网站顶部的 Wallet 里查看机器人的钱包。
