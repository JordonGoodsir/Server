# Server

## Routes

### Auth

POST `auth/register`

POST `auth/login`

GET `auth/logout`

### GiftLists

GET `giftlist/:userId` - get users giftlist

POST `giftlist/:userId` - add giftlist
body should reflect

```JSON
    {
      gifts: [gift: "giftitem"],
      receiver: "giftreceiver"
    }
```

PATCH `giftlist/:userId` - update giftlist
body should reflect

```JSON
    {
      "gifts": ["gift": "giftitem"],
      "receiver": "giftreceiver",
    }
```

DELETE `giftlist/:userId` - delete giftlist
body should reflect

```JSON
    {
      "gifts": ["gift": "giftitem"],
      "receiver": "giftreceiver",
    }
```
