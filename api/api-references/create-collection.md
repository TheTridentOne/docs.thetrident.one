---
title: Create Collection
sidebar_position: 1
---

## POST /collections

### Endpoint URL

```
https://thetrident.one/api/collections
```

### Authorization

Mixin authentication token for GET https://api.mixin.one/me.

Visit [mixin developers doc](https://developers.mixin.one/docs/api/guide#signing) for more details.

### Payload

```json
{
  "name": "Awsome collection",
  "symbol": "Symol fo collection",
  "description": "This is an awesome collection",
  "external_url": "https://thetrident.one",
  "split": 0.05,
  "icon_url": "https://image.thetrident.one/collection_icon.png"
}
```
