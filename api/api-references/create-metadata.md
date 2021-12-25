---
title: Create Metadata
sidebar_position: 2
---

## POST /collectibles

### Endpoint URL

```
https://thetrident.one/api/collectibles
```

### Authorization

Mixin authentication token for GET https://api.mixin.one/me with scope "FULL" is required.

Visit [mixin developers doc](https://developers.mixin.one/docs/api/guide#signing) for more details.

### Example Request

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
