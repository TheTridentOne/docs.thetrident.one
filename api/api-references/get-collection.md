---
title: Get Collection
sidebar_position: 2
---

## GET /collections/:id

### Endpoint URL

```
https://thetrident.one/api/collections/:id
```

### Authorization

No limit.

### Example Request

```
curl -X GET \
'https://thetrident.one/api/collections/829ae48f-53d5-42f6-af5b-182cfac1bf39' \
-H 'content-type: application/json'
```

### Example Response

```json
{
  "id": "829ae48f-53d5-42f6-af5b-182cfac1bf39",
  "name": "Fennec",
  "description": "Fennec, as a cute ip in the Web3.0, they all want to show themself. so it would be a great opportunity to meet others on Trident!\r\n\r\nThe image design comes from Fennec wallet :)\r\n\r\nThis album will release 999 NFTs in total.\r\n\r\nFennec作为Web3.0届活泼可爱的小狐狸种群，它们都想上来跟大家秀一秀自己，所以就借着Trident的机会跟大家见面了！\r\n\r\n形象设计来源于Fennec钱包 : ) \r\n\r\n该合辑总共发行999份NFT。\r\n\r\n",
  "external_url": "https://pando.im/fennec/",
  "split": 0.1,
  "icon": {
    "url": "https://trident.ap-south-1.linodeobjects.com/h5yv9yulz7b82easaqufsvs7xnj5"
  },
  "creator": { "id": "cfbc7928-b9b5-416c-8943-92ec4893b565", "name": "Jony" }
}
```
