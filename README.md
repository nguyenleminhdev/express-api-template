# EXPRESS API TEMPLATE V3

## I. Api Document

***

---

### 1. API NAME

```http
POST {{host}}/path/of/api
```

**Properties**

| Properties | Type | Description |
| :--- | :--- | :--- |
| `test` | String | `TEST_1` `TEST_2` `TEST_3` |

**Header**

| Header | Type | Description/Value | 
| :--- | :--- | :--- |
| `Authorization` | String | Token |

***

**a. `test` TEST_1**

Do something

**Properties**

| Properties | Type | Description |
| :--- | :--- | :--- |
| `test` | String | test |

**Response**

| Properties | Type | Description |
| :--- | :--- | :--- |
| `code` | Number | 200 |
| `data` | Object | *data* object |

_data_

| Properties | Type | Description |
| :--- | :--- | :--- |
| `test` | String | test |

**Error**

| Properties | Type | Description |
| :--- | :--- | :--- |
| `code` | Number | 403 |
| `message` | String | error message |

_message_

| Code | Message |
| :--- | :--- |
| `TEST` | test |

***

---