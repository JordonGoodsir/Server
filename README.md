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
      "gifts": [{"gift": "giftitem"}],
      "receiver": "giftreceiver",
      "uid": "uid"
    }
```

PATCH `giftlist/:userId` - update giftlist
body should reflect

```JSON
    {
      "gifts": [{"gift": "giftitem"}],
      "uid": "uid",
    }
```

DELETE `giftlist/:userId/:uid` - delete gift giftlist

### User

GET `:userId` - get user

POST `:userId/addchild` - adds a child
body should reflect

```JSON
    {
      "name": "name",
      "age": "age",
      "uid": "uid"
    }
```

### ChildGiftList

GET `lettertosanta/:childUid` - get users giftlist

POST `lettertosanta/:childUid` - add giftlist
body should reflect

```JSON
    {
      "gifts": [{"gift": "giftitem"}],
      "uid": "uid"
    }
```

PATCH `lettertosanta/:childUid` - update giftlist
body should reflect

```JSON
    {
      "gifts": [{"gift": "giftitem"}],
      "uid": "uid",
    }
```

DELETE `lettertosanta/:childUid/:uid` - delete gift giftlist
