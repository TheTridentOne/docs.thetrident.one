---
title: Actions
sidebar_position: 7
---

## POST /actions

### Endpoint URL

```
https://thetrident.one/api/actions
```

### Actions Protocol

Use this API may create the required memo for different action. See also [Action Protocol](../guide/action-protocol.md).

### Create Fixed Price Order

Request:

```json
{
  "T": "A",
  "N": "97701fb3-c773-31ed-aa6b-d85bcf3550df",
  "O": "943122cb-edeb-4656-9d12-22731353f4ae",
  "P": "1.0",
  "A": "c6d0c728-2624-429b-8e0d-d9d19b6592fa",
  "E": 1658249820
}
```

Response:

```json
{
  "memo": "hqFUoUGhTsQQl3Afs8dzMe2qa9hbzzVQ36FPxBCUMSLL7etGVp0SInMTU_SuoVCjMS4woUHEEMbQxygmJEKbjg3Z0ZtlkvqhRc5i1uJc",
  "mtg": {
    "members": [
      "1a361145-66a7-48cd-ab6c-db9a42da4074",
      "6f5a84ce-d663-451e-b413-2d0c84b7629d",
      "99216bb5-9787-49b6-b251-537362ce23eb",
      "9ba50819-159c-45e6-9bed-1eb2dded3360",
      "fcc1e3ec-97f1-41a7-89a3-20a0ec30a31f"
    ],
    "threshold": 3
  }
}
```

### Create Auction Order

Request:

```json
{
  "T": "AU",
  "N": "97701fb3-c773-31ed-aa6b-d85bcf3550df",
  "O": "943122cb-edeb-4656-9d12-22731353f4ae",
  "P": "1.0",
  "R": "1.5",
  "A": "c6d0c728-2624-429b-8e0d-d9d19b6592fa",
  "E": 1658249820
}
```

Response:

```json
{
  "memo": "h6FUokFVoU7EEJdwH7PHczHtqmvYW881UN-hT8QQlDEiy-3rRladEiJzE1P0rqFQozEuMKFSozEuNaFBxBDG0McoJiRCm44N2dGbZZL6oUXOYtbiXA",
  "mtg": {
    "members": [
      "1a361145-66a7-48cd-ab6c-db9a42da4074",
      "6f5a84ce-d663-451e-b413-2d0c84b7629d",
      "99216bb5-9787-49b6-b251-537362ce23eb",
      "9ba50819-159c-45e6-9bed-1eb2dded3360",
      "fcc1e3ec-97f1-41a7-89a3-20a0ec30a31f"
    ],
    "threshold": 3
  }
}
```

### Create Bid Order

Request:

```json
{
  "T": "B",
  "N": "97701fb3-c773-31ed-aa6b-d85bcf3550df",
  "O": "943122cb-edeb-4656-9d12-22731353f4ae",
  "P": "1.0",
  "E": 1658249820
}
```

Response:

```json
{
  "memo": "haFUoUKhTsQQl3Afs8dzMe2qa9hbzzVQ36FPxBCUMSLL7etGVp0SInMTU_SuoVCjMS4woUXOYtbiXA",
  "mtg": {
    "members": [
      "1a361145-66a7-48cd-ab6c-db9a42da4074",
      "6f5a84ce-d663-451e-b413-2d0c84b7629d",
      "99216bb5-9787-49b6-b251-537362ce23eb",
      "9ba50819-159c-45e6-9bed-1eb2dded3360",
      "fcc1e3ec-97f1-41a7-89a3-20a0ec30a31f"
    ],
    "threshold": 3
  }
}
```

### Fill Order

Request:

```json
{
  "T": "F",
  "N": "97701fb3-c773-31ed-aa6b-d85bcf3550df",
  "O": "943122cb-edeb-4656-9d12-22731353f4ae"
}
```

Response:

```json
{
  "memo": "g6FUoUahTsQQl3Afs8dzMe2qa9hbzzVQ36FPxBCUMSLL7etGVp0SInMTU_Su",
  "mtg": {
    "members": [
      "1a361145-66a7-48cd-ab6c-db9a42da4074",
      "6f5a84ce-d663-451e-b413-2d0c84b7629d",
      "99216bb5-9787-49b6-b251-537362ce23eb",
      "9ba50819-159c-45e6-9bed-1eb2dded3360",
      "fcc1e3ec-97f1-41a7-89a3-20a0ec30a31f"
    ],
    "threshold": 3
  }
}
```

### Cancel Order

Request:

```json
{
  "T": "C",
  "N": "97701fb3-c773-31ed-aa6b-d85bcf3550df",
  "O": "943122cb-edeb-4656-9d12-22731353f4ae"
}
```

Response:

```json
{
  "memo": "g6FUoUOhTsQQl3Afs8dzMe2qa9hbzzVQ36FPxBCUMSLL7etGVp0SInMTU_Su",
  "mtg": {
    "members": [
      "1a361145-66a7-48cd-ab6c-db9a42da4074",
      "6f5a84ce-d663-451e-b413-2d0c84b7629d",
      "99216bb5-9787-49b6-b251-537362ce23eb",
      "9ba50819-159c-45e6-9bed-1eb2dded3360",
      "fcc1e3ec-97f1-41a7-89a3-20a0ec30a31f"
    ],
    "threshold": 3
  }
}
```
