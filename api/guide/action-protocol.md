---
title: Action Protocol
sidebar_position: 2
---

:::tip

Trident is MTG application, which read multisig transactions from Mixin Network.

Sending transfer is the only way to talk to Trident MTG.

:::

## Action Fields

| symbol | explain        | memo               |
| ------ | -------------- | ------------------ |
| T      | Action type    | required           |
| N      | NFT's token_id | required, uuid     |
| O      | order_id       | required, uuid     |
| P      | price          | string             |
| A      | asset_id       | Mixin asset id     |
| E      | expired_at     | Unix time, integer |
| R      | reserve price  | string             |
| C      | client_id      | optional           |

## Action Types

| symbol | explain                             |
| ------ | ----------------------------------- |
| A      | Create ask order(Fixed price order) |
| B      | Create bid order                    |
| AU     | Create auction order                |
| C      | Cancel order                        |
| F      | Fill order                          |

## Create Fixed Price Order

```go
type OrderAction struct {
  T string    // action type
  N uuid.UUID // token id
  O uuid.UUID    // order id
  P string    // price
  A uuid.UUID // asset
  E int // expired_at
}

memo = base64.StdEncoding.EncodeToString(msgpack(OrderAction{
  T: "A",
  N: uuid.FromString("97701fb3-c773-31ed-aa6b-d85bcf3550df"),
  O: uuid.FromString("943122cb-edeb-4656-9d12-22731353f4ae"),
  P: "1.0",
  A: uuid.FromString("c6d0c728-2624-429b-8e0d-d9d19b6592fa"),
  E: 1658249820
}))
```

## Create Auction Order

```go
type OrderAction struct {
  T string    // action type
  N uuid.UUID // token id
  O uuid.UUID    // order id
  P string    // price
  R string    // reserve price
  A uuid.UUID // asset
  E int // expired_at
}

memo = base64.StdEncoding.EncodeToString(msgpack(OrderAction{
  T: "AU",
  N: uuid.FromString("97701fb3-c773-31ed-aa6b-d85bcf3550df"),
  O: uuid.FromString("943122cb-edeb-4656-9d12-22731353f4ae"),
  P: "1.0",
  R: "1.5",
  A: uuid.FromString("c6d0c728-2624-429b-8e0d-d9d19b6592fa"),
  E: 1658249820
}))
```

## Create Bid Order

```go
type OrderAction struct {
  T string    // action type
  N uuid.UUID // token id
  O uuid.UUID    // order id
  P string    // price
  E int // expired_at
}

memo = base64.StdEncoding.EncodeToString(msgpack(OrderAction{
  T: "B",
  N: uuid.FromString("97701fb3-c773-31ed-aa6b-d85bcf3550df"),
  O: uuid.FromString("943122cb-edeb-4656-9d12-22731353f4ae"),
  P: "1.0",
  E: 1658249820
}))
```

## Fill Order

```go
type OrderAction struct {
  T string    // action type
  N uuid.UUID // token id
  O uuid.UUID    // order id
}

memo = base64.StdEncoding.EncodeToString(msgpack(OrderAction{
  T: "F",
  N: uuid.FromString("97701fb3-c773-31ed-aa6b-d85bcf3550df"),
  O: uuid.FromString("943122cb-edeb-4656-9d12-22731353f4ae"),
}))
```

## Cancel Order

```go
type OrderAction struct {
  T string    // action type
  N uuid.UUID // token id
  O uuid.UUID    // order id
}

memo = base64.StdEncoding.EncodeToString(msgpack(OrderAction{
  T: "C",
  N: uuid.FromString("97701fb3-c773-31ed-aa6b-d85bcf3550df"),
  O: uuid.FromString("943122cb-edeb-4656-9d12-22731353f4ae"),
}))
```
