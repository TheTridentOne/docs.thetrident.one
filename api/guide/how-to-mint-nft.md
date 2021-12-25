---
title: How to Mint NFT
sidebar_position: 1
---

The typical steps to mint NFT on Mixin Network:

1. Prepare `metadata.json` for your NFT
2. Generate the **metahash** from `metadata.json`
3. Upload `metadata.json` to [Trident API](https://thetrident.one)
4. Make the transfer to the [NFO MTG](https://github.com/MixinNetwork/nfo)

## Metadata

The [NFO MTG](https://github.com/MixinNetwork/nfo) doesn't maintain metadata for tokens, it's up to the token creators and token browsers to generate and verify the metadata according to the token hash. 

Actually **[Trident](https://thetrident.one) will take the reponsibility to maintain metadata of NFTs for all token creators**. 

For the convenience to display NFTs in different token browsers, all metadata should follow the same format as following.

```json
{
  "collection": {
    "id": "collection-uuid", // required
    "name": "collection name", // required
    "description": "description",
    "icon": {
      "hash": "hash of the collection icon",
      "url": "https url for the icon"
    }
  },
  "token": {
    "id": "token-identifier", // required
    "name": "token name", // required
    "description": "description",
    "icon": {
      "hash": "hash of the token icon",
      "url": "https url for the icon"
    },
    "media": {
      "hash": "hash of the token media",
      "url": "https url for the media",
      "mime": "the media mime type"
    }
  },
  "checksum": {
    "fields": ["collection.id", "collection.name", "token.id", "token.name", "token.media.hash"], // required
    "algorithm": "sha3-256", // required
  }
}
```

The basic infomation like `collection.id`, `collection.name`, `token.id`, `token.name` are required. Also the `checksum` field is required for verifying the interrelationship between the NFT and its metadata.

:::caution

- `collection.id` must be a valid UUID string, which represents a collection, e.g. CryptoPunks. Everyone can start the collection if it is not minted yet.
- `token.id` must be an integer, which is the unique identifier in the collection, e.g. 1234. Only the collection creator can mint a new token in it, while everyone can mint in the default collection.

:::

Token creators may extend the format by adding more properties for any custom needs. Just make sure the metahash is generated from the specific content in `checksum.fields` using the `checksum.algorithm`. 

:::tip

Any fields in the `metadata.json` may be added into the `checksum.fields`, which means they will be parts of the `metahash` and they cannot be modified once minted because they will be onchain data.

:::

## Metahash

Mixin NFT's **metahash** is a 256-bit string generated from `metadata.json` using a particular algorithm, like [sha3-256](http://emn178.github.io/online-tools/sha3_256.html).

Let's take an example. Saying we have a `metadata.json` like this.

```json
{
  "creator": {
    "id": "7ed9292d-7c95-4333-aa48-a8c640064186",
    "name": "李安"
  },
  "collection": {
    "id": "0ae66126-623b-47e4-a227-b54822b7498e",
    "name": "TRIDENT.TEST.AVATARS",
    "description": "Some cool avatars",
    "icon": {
      "url": "https://trident-test.onrender.com/rails/active_storage/blobs/proxy/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaEpJaWxoTkRSbU9UTTVOaTB4T0RRNUxUUTJOMlF0WWpVeU1TMDNOVGxoTnpjNE16VmtZVFlHT2daRlZBPT0iLCJleHAiOm51bGwsInB1ciI6ImJsb2JfaWQifX0=--e1d880c81d2fc893f85bd363ea31d86ea906656b/hdz7wp4jiq3szsizk2gqdabduesu"
    }
  },
  "token": {
    "id": "9879",
    "name": "A video sample",
    "description": "# A video sample\r\n\r\nshould play\r\n\r\nhash included",
    "icon": {
      "url": "https://trident-test.onrender.com/rails/active_storage/blobs/proxy/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaEpJaWxoTnpsa09HUXdOQzFpTUdGbUxUUTNZV010WVRFNVppMWtORGMxWlRnM05EWXhNRFFHT2daRlZBPT0iLCJleHAiOm51bGwsInB1ciI6ImJsb2JfaWQifX0=--76f65faef7654b8dc0afea79bb8d060b4991d83e/index.jpeg"
    },
    "media": {
      "url": "https://trident-test.onrender.com/rails/active_storage/blobs/proxy/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaEpJaWxoTVRFMU4yTmxPUzFrTm1WbUxUUmlZMlF0WW1FeE5DMDVZemRsTldZeE9UTTNNVFFHT2daRlZBPT0iLCJleHAiOm51bGwsInB1ciI6ImJsb2JfaWQifX0=--9bd0b779a7a1af74328d798aaabbb9b3f33f2e4d/file_example_MP4_640_3MG.mp4",
      "hash": "3c55ab75802f97411616668b5bbe1dee414565eb5f8b74c04d913113dde066b8"
    }
  },
  "checksum": {
    "fields": [
      "creator.id",
      "collection.id",
      "collection.name",
      "token.id",
      "token.name",
      "token.media.hash"
    ],
    "algorithm": "sha3-256"
  }
}
```

According to the `checksum.fields`, we use the specific 6 fields to generate the checksum content which will be

```
7ed9292d-7c95-4333-aa48-a8c6400641860ae66126-623b-47e4-a227-b54822b7498eTRIDENT.TEST.AVATARS9879A video sample3c55ab75802f97411616668b5bbe1dee414565eb5f8b74c04d913113dde066b8
```

Then we hash the checksum content string above using [sha3-256](http://emn178.github.io/online-tools/sha3_256.html) algorithm. 

The result will be

```
8f31cb6b0a7f62294bc36864a5b8dff1fabe8cc9243bc7365a8c182e0a23eefa
```

So this is the metahash we need.

:::caution

If you want to add the `media.hash` to the `metadata.json` like the above example, make sure the `hash` is generated by the exact file specific in `media.url` using sha3-256 algorithm. Because Trident will verify that too when uploading metadata.

:::

## Upload Metadata

Since we have `metadata.json` and `metahash`, we can upload them to the metadata maintainer [Trident](https://thetrident.one).

```
curl -X POST \
  'https://thetrident.one/api/collectibles?' \
  -H 'Authorization: Bearer eyJhbGciOiJFZERTQSIsInR5cCI6IkpXVCJ9.eyJleHAiOjE2Mzk5OTY4OTUsImlhdCI6MTYzOTk5NjI5NSwianRpIjoiMDQxOGYxNmMtMGQ5Yy00MzVlLWIzY2YtYzg4MGZiZjUxYzA2Iiwic2NwIjoiRlVMTCIsInNpZCI6IjcxZjEzNGYzLTg2MTItNDQwNC1hYzI5LTc4NDg5NDlmNThkZiIsInNpZyI6IjVlNmI1OGZmYTEwYjNiYzUxNzI0ZmYwYmJkMmFmYjkxYzQ3NzFlZTM0MGY1ZDY4NTM0MGRmYTRjODU0YmFmYmEiLCJ1aWQiOiI2ZjlkYjBiYS00MDkxLTQzOWQtYjI4OC00YzFiZWU4MjUxYWMifQ.gFkhVRCeRbw6FbRTwJm1NyQcr192dki2B8EKROqDNAhYfpS-pv2kDtejyk_XJ8krak8aMltHgboSKG6IZHeQCA' \
  -H 'content-type: application/json' \
  -d '{
  "metadata": {"creator":{"id":"7ed9292d-7c95-4333-aa48-a8c640064186","name":"李安"},"collection":{"id":"0ae66126-623b-47e4-a227-b54822b7498e","name":"TRIDENT.TEST.AVATARS","description":"Some cool avatars","icon":{"url":"https://trident-test.onrender.com/rails/active_storage/blobs/proxy/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaEpJaWxoTkRSbU9UTTVOaTB4T0RRNUxUUTJOMlF0WWpVeU1TMDNOVGxoTnpjNE16VmtZVFlHT2daRlZBPT0iLCJleHAiOm51bGwsInB1ciI6ImJsb2JfaWQifX0=--e1d880c81d2fc893f85bd363ea31d86ea906656b/hdz7wp4jiq3szsizk2gqdabduesu"}},"token":{"id":"9879","name":"A video sample","description":"# A video sample\r\n\r\nshould play\r\n\r\nhash included","icon":{"url":"https://trident-test.onrender.com/rails/active_storage/blobs/proxy/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaEpJaWxoTnpsa09HUXdOQzFpTUdGbUxUUTNZV010WVRFNVppMWtORGMxWlRnM05EWXhNRFFHT2daRlZBPT0iLCJleHAiOm51bGwsInB1ciI6ImJsb2JfaWQifX0=--76f65faef7654b8dc0afea79bb8d060b4991d83e/index.jpeg"},"media":{"url":"https://trident-test.onrender.com/rails/active_storage/blobs/proxy/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaEpJaWxoTVRFMU4yTmxPUzFrTm1WbUxUUmlZMlF0WW1FeE5DMDVZemRsTldZeE9UTTNNVFFHT2daRlZBPT0iLCJleHAiOm51bGwsInB1ciI6ImJsb2JfaWQifX0=--9bd0b779a7a1af74328d798aaabbb9b3f33f2e4d/file_example_MP4_640_3MG.mp4","hash":"3c55ab75802f97411616668b5bbe1dee414565eb5f8b74c04d913113dde066b8"}},"checksum":{"fields":["creator.id","collection.id","collection.name","token.id","token.name","token.media.hash"],"algorithm":"sha3-256"}},
  "metahash": "8f31cb6b0a7f62294bc36864a5b8dff1fabe8cc9243bc7365a8c182e0a23eefa"
}'
```

Check the [API](/api/api-references/create-metadata) for detail.

## Transfer to NFO

After the preparation above, we can do the actual minting: **send 0.001 XIN to [NFO MTG](https://github.com/MixinNetwork/nfo) with a specific memo attached**.

The memo can be created using the code below provided by [nfo project](https://github.com/MixinNetwork/nfo/blob/main/nft/nfo.go#L64).

```golang
nfo := nft.BuildMintNFO(collectionId, tokenId, metahash)
memo := base64.RawURLEncoding.EncodeToString(nfo)
```

Another choice to create memo is using the [Ruby SDK](https://github.com/an-lee/mixin_bot).

```ruby
MixinBot.api.nft_memo collection_id, token_id, metahash
```

The [NFO MTG](https://github.com/MixinNetwork/nfo) members are as below.

```toml
members = [
  "4b188942-9fb0-4b99-b4be-e741a06d1ebf",
  "dd655520-c919-4349-822f-af92fabdbdf4",
  "047061e6-496d-4c35-b06b-b0424a8a400d",
  "acf65344-c778-41ee-bacb-eb546bacfb9f",
  "a51006d0-146b-4b32-a2ce-7defbf0d7735",
  "cf4abd9c-2cfa-4b5a-b1bd-e2b61a83fabd",
  "50115496-7247-4e2c-857b-ec8680756bee",
]
threshold = 5
```

You may reference to [transfer to a multi signature address](https://developers.mixin.one/docs/api/transfer/raw-transfer#transfer-to-a-multi-signature-address) or [generate a payment to multisig address for user](https://developers.mixin.one/docs/api/transfer/payment#post-payments).

## References

- [NFO project](https://github.com/MixinNetwork/nfo)
- [Mixin API Docs](https://developers.mixin.one/docs/api-overview)
