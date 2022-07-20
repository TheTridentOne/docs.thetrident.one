---
title: Update Collection
sidebar_position: 3
---

## PUT /collections/:id

### Endpoint URL

```
https://thetrident.one/api/collections/:id
```

### Authorization

Mixin authentication token for GET https://api.mixin.one/me.

Visit [mixin developers doc](https://developers.mixin.one/docs/api/guide#signing) for more details.

### Payload

```json
{
  "description": "This is an awesome collection",
  "external_url": "https://thetrident.one",
  "icon_url": "https://image.thetrident.one/collection_icon.png"
}
```
