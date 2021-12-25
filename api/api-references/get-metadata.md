---
title: Get Metadata
sidebar_position: 1
---

## GET /collectibles/:metahash

### Endpoint URL

```
https://thetrident.one/api/collectibles/:metahash
```

### Example Request

```
curl -X GET \
  'https://thetrident.one/api/collectibles/bd2709b368ac29279ce93d656f64b77be373478ad187b2b5a35e866d9b8e147c?' \
  -H 'content-type: application/json'
```

### Example Response

```json
{
  "creator": {
    "id": "51944ccd-9060-4dae-9435-f6d57cf45155",
    "name": "夜夜"
  },
  "collection": {
    "id": "4aa4c030-a293-4979-8252-9fa776134cdb",
    "name": "OneNightinHamburg",
    "description": " OneNightinHamburg",
    "icon": {
      "url": "https://trident-dev.oss-accelerate.aliyuncs.com/i5s5t0j03zg2syjspxb5gkvajyul"
    }
  },
  "token": {
    "id": "5",
    "name": "Night",
    "description": "One Night in Hamburg,  lots of love was left.",
    "icon": {
      "url": "https://trident-dev.oss-accelerate.aliyuncs.com/588m3pbeyjblc8h1be1san5i9v1p"
    },
    "media": {
      "url": ""
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
    "algorithm": "sha256"
  }
}
```
