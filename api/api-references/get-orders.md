---
title: Get Orders
sidebar_position: 4
---

## GET /orders

### Endpoint URL

```
https://thetrident.one/api/orders
```

### Authorization

Mixin authentication token for GET https://api.mixin.one/me.

With authentication token, it'll response with orders made by the account.

### Parameters

| param           | explain                            |
| --------------- | ---------------------------------- |
| `collection_id` | orders in a particular collection  |
| `metahash`      | orders of a particular collectible |
| `state`         | `open` \| `completed`              |
| `type`          | `ask` \| `bid` \| `auction`        |
| `page`          | pagination                         |

### Example Request

```
curl -X GET \
  'https://thetrident.one/api/orders?state=open&type=bid' \
  -H 'content-type: application/json'
```

### Example Response

```
{
  "orders": [
    {
      "id": "c78499bd-eef9-4ef0-8ead-3eb797c3c719",
      "type": "BidOrder",
      "state": "open",
      "price": "0.33",
      "royalty": 0.1,
      "split": 0.08,
      "token_id": "b5f18c77-d79b-3561-8864-93a52b993fee",
      "opened_at": "2022-04-11T05:43:29.849Z",
      "expired_at": "2022-04-17T21:43:00.000Z",
      "currency": {
        "asset_id": "4d8c508b-91c5-375b-92b0-ee702ed2dac5",
        "name": "Tether USD",
        "symbol": "USDT",
        "price_usd": 1.0
      },
      "maker": {
        "id": "4dee5a4e-1817-4e1e-ae2c-215052073a83",
        "name": "Jack Young"
      }
    },
    {
      "id": "727e7cc4-d4b5-4e14-b143-dad5a3a2b0ae",
      "type": "BidOrder",
      "state": "open",
      "price": "0.02",
      "royalty": 0.1,
      "split": 0.1,
      "token_id": "cf786f68-bf07-3ae0-8137-ed15b5553c7e",
      "opened_at": "2022-04-11T05:39:03.547Z",
      "expired_at": "2022-04-18T05:38:00.000Z",
      "currency": {
        "asset_id": "c94ac88f-4671-3976-b60a-09064f1811e8",
        "name": "Mixin",
        "symbol": "XIN",
        "price_usd": 347.2725169
      },
      "maker": { "id": "6d326ac7-51f0-462a-8041-35f0f5f0eb66", "name": "良宵" }
    },
    //....
  ],
  "current_page": 1,
  "next_page": 2,
  "previous_page": null
}
```
