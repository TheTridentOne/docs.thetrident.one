---
title: 如何批量生成 NFT
---

## 创建合辑

正式生成 NFT 之前，先为 NFT 创建合辑，确认信息无误之后，将合辑 `list`，即在 Trident 平台正式创建合辑。

:::info
`listed` 的合辑，其重要的信息 `name`、`symbol` 和 `split` 将无法修改，其余信息包括 `icon` 则可以多次编辑。
:::

## 准备 metadata

一份典型的 Mixin NFT metadata 如[链接](https://thetrident.one/api/collectibles/12bc104d7dda323393595f9f96a80f8526d580f2e331c31637bccbea722f7f9e)所示。

考虑到多数用户会使用一些市面上流行的平台([generate-nft](https://nft-generator.art/), [mintables](https://www.mintables.club/) 等)或者脚本工具([Generate-NFT](https://github.com/Jianghuchengphilip/Generate-NFT))批量制作 NFT，所以 Assistant 兼容这些流行 metadata 格式。

使用这些工具得到的一份典型 metadata 是一个以 NFT ID 命名的 `json` 文件，如 `1.json`，内容格式是这样的。

```json
{
  "name": "#1",
  "description": "Bravas OG",
  "external_url": "",
  "image": "1.png",
  "attributes": [
    {
      "trait_type": "Background",
      "value": "Red"
    },
    {
      "trait_type": "Skins",
      "value": "Caramel_Skin"
    },
    {
      "trait_type": "Bandages",
      "value": "Cheek_XScar"
    },
    {
      "trait_type": "Tops",
      "value": "Stardust_Aqua"
    },
    {
      "trait_type": "Eyes",
      "value": "Smiley"
    },
    {
      "trait_type": "Sunglasses",
      "value": "GameOver_Orange"
    },
    {
      "trait_type": "Haircuts",
      "value": "TopTwintails_Orange"
    },
    {
      "trait_type": "Mouths",
      "value": "Joint"
    }
  ],
  "properties": {
    "category": "image",
    "files": [
      {
        "uri": "1.png",
        "type": "image/png"
      }
    ],
    "creators": []
  },
  "compiler": "https://nft-generator.art"
}
```

将这些 metadata 文件打包成一个 `.zip` 压缩包。

## 上传源文件

NFT 的源文件一般是图片，铸造 NFT 的时候，源文件并不会上链，但是源文件的唯一哈希值会上链，所以源文件的存储相对不重要，主要是用于展示。只要是同一份文件（能计算出相同的唯一哈希值），展示的链接可以变更。

你可以将你的源文件上传至自建的云存储，比如云服务商的对象存储，在生成 metadata 文件时，`image` 请改成对应的图片链接。

也可以上传至 Assistant 平台。在 Attachments 标签下，点击 `Upload` 按钮，选择要上传的源文件即可。

![collection-attachments-tab](@site/static/img/docs/assistant/collection-attachments-tab.png)

![collection-upload-attachments](@site/static/img/docs/assistant/collection-upload-attachments.png)

:::warning
上传的源文件文件名必须与 metadata 中`image` 所指一致。
:::

## 创建任务

在 Assistant 平台中，进入需要生成 NFT 的合辑上的 `items`，点击按钮 `Generate NFT`。

![collection-tabs](@site/static/img/docs/assistant/collection-tabs.png)

需要为 NFT 指定一个统一的 royalty，即创作者版税比例，比如 0.05。然后上传 `metadata.zip`，再点击 `Save` 即可。

![generate-nft-task-form](@site/static/img/docs/assistant/generate-nft-task-form.png)

## NFT 生成任务

这时，Assistant 为你创建了一个 `GenerateNftTask` 类型的任务，在合辑的 `tasks` 标签下可以看到这个任务的运行情况。

如果任务成功执行，状态会变成 `finished`，并且会创建一系列 `CreateItemTask` 的子任务，去分别执行 NFT 的创建工作。如果任务执行失败，状态会变成 `failed`，点击任务的 `detail`，可以看到任务执行的结果，在 `Result` 一般会指出任务失败的原因。

![generate-nft-task-detail](@site/static/img/docs/assistant/generate-nft-task-detail.png)

## 创建完成

如果一切顺利，在合辑页面，即可以看到你创建好的 NFT，状态都是 `drafted`。

![drafted-items](@site/static/img/docs/assistant/drafted-items.png)

你可以点击 `detail` 去检查 NFT 的信息是否正确，也可以单独编辑或者删除。

## 铸造 NFT

开始前，确保你的机器人钱包内有足够的 XIN。

:::tip
为了提高铸造效率，在给机器人转账的时候，可以小额多次。比如你需要铸造 100 个 NFT，总共需要 0.1 XIN。你可以给机器人分 10 次转账，每次转账 0.01 XIN。这样使得机器人钱包中有 10 个 0.01 XIN 的 UTXO，可以大大提高铸造时的转账效率。
:::

在批量执行铸造任务之前，建议先执行一个，点击 item 后的 `mint` 按钮即可。

Assistant 会创建一个类型为 `MintNftTask` 的任务。同样地，在 `tasks` 下可以找到这个任务的执行情况。如果执行成功，在 `detail` 中的 `Result` 里，可以看到发行费的转账详细信息。

![multi-selected-drafted-items](@site/static/img/docs/assistant/multi-selected-drafted-items.png)

确认一切正常的话，就可以批量执行任务了。将状态为 `drafted` 的 items 筛选出来，全选或者选择多个需要铸造的 item，会出现一个 `Mint All` 的按钮，点击即可批量执行铸造任务。

然后等待铸造任务完成即可。同样地，在 `taks` 标签下可以查看任务运行情况。如果有些任务状态长时间停滞，可以手动取消，重新执行。

## 查看 NFT

成功铸造的 NFT 会在你机器人的钱包里，通过下拉菜单选择 `wallet` 可以将钱包里的 NFT 筛选出来，状态应该均为 `minted`。

:::tip
刚刚铸造好的 NFT 是由发行 MTG 直接转入你机器人的钱包，Trident 平台无法感知 NFT 是否已经铸造完成。所以在 Trident 平台上，此 NFT 是隐藏状态，在列表中无法查看。只有将 NFT 托管至 Trident 后，才会将其显示。
:::

此时，你可以 `deposit`，即将 NFT 托管至 Trident 平台，然后上架出售。或者 `transfer`，即将 NFT 转到任意 Mixin 钱包上。同样地，这两个操作也可以批量执行，只要选择多个钱包中的 items，会出现 `Deposit All` 和 `Transfer All` 的按钮。

## 出售、拍卖

托管至 Trident 平台后，就可以为 NFT 创建一口价或者拍卖订单。通过下拉菜单 `listed`，可以将所有已经托管的 NFT 筛选出来。

点击 `Sell` 即创建一口价订单，对应的任务类型是 `AskOrderTask`。

![ask-order-task-form](@site/static/img/docs/assistant/ask-order-task-form.png)

点击 `Auction` 即创建拍卖订单，对应的任务类型是 `AuctionOrderTask`。

![auction-order-task-form](@site/static/img/docs/assistant/auction-order-task-form.png)

当然，你也点击 `Withdraw` 将 NFT 提现回机器人钱包，对应的任务类型是 `WithdrawNftTask`。

:::tip
Trident 是 MTG 应用，所有交互都是通过转账来完成的，上述的出售和拍卖任务，实质上是给 Trident MTG 的多签钱包转一笔账，并在转账中携带相应的 memo 说明操作的类型。转账的币种和金额并不重要，memo 才是重要的。在 Assistant 中此类任务转账采用的是 CNB，每次执行转账最小单位，即 0.00000001 CNB。

同样地，为了转账效率，可以给机器人转账多笔 CNB，比如转 10 笔 1 CNB。
:::

在 `orders` 标签下，可以看到成功创建的订单。在这里，你可以取消订单，也可以查看已经成交的订单。

![collection-orders-tab](@site/static/img/docs/assistant/collection-orders-tab.png)

在 `items` 标签下，可以通过 `On Sale` 和 `On Auction` 分别筛选出一口价和拍卖中的 NFT。

## 成交款

在这种情况下，你的机器人是 NFT 的创作者，也是出售方，所有成交得到的币都会转到机器人的钱包里。在 Assistant 顶部菜单的 Wallet 可以查看机器人钱包情况。你也可以通过 Mixin 开发平台操作你机器人的钱包，比如将币转到你的个人钱包。
