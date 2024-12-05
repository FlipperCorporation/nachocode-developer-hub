---
id: endpoints
sidebar_label: API 엔드포인트
---

# 푸시 알림 API Endpoints

> 🔔 **최신화 일자:** 2024-11-27

nachocode 푸시 알림 API는 다양한 엔드포인트를 제공하여 푸시 알림 관리 및 전송을 지원합니다.

---

## [POST] `/api/push/v1/users`

### **API 설명 - /users**

- 동일한 제목과 내용으로 여러 유저에게 푸시 알림을 전송합니다.
- 유저 ID로 조회된 모든 푸시 토큰을 대상으로 전송합니다.
- 유저 1명당 요청 건수를 차감합니다.

### **Request - /users**

#### **Header - /users**

| **Parameter**  | **Type** | **Required** | **Description** |
| -------------- | -------- | ------------ | --------------- |
| `x-api-key`    | string   | ✔           | API 키          |
| `x-secret-key` | string   | ✔           | Secret 키       |

#### **Body - /users**

| **Parameter** | **Type**               | **Required** | **Description**                |
| ------------- | ---------------------- | ------------ | ------------------------------ |
| `userIds`     | `(string \| number)[]` | ✔           | 푸시를 전송할 유저 ID 배열     |
| `title`       | `string`               | ✔           | 푸시 알림 제목                 |
| `content`     | `string`               | ✔           | 푸시 알림 내용                 |
| `linkURL`     | `string`               | ✘            | 푸시 클릭 시 이동할 URL (옵션) |

#### Example - /users

```json
{
  "header": {
    "x-api-key": "APIKEYVALUE",
    "x-secret-key": "SECRETKEYVALUE"
  },
  "body": {
    "userIds": ["nachoUser1", "nachoUser2", 3, 4],
    "title": "나쵸코드 개인화 푸시 기능 추가!",
    "content": "새로운 기능이 추가되었습니다.",
    "linkURL": "https://nachocode.io"
  }
}
```

### **Response - /users**

#### 성공 시 - /users

| **Properties** | **Type** | **Description**                        |
| -------------- | -------- | -------------------------------------- |
| `status`       | `number` | HTTP 응답 상태 코드                    |
| `response`     | `object` | 성공/실패한 유저에 대한 상세 결과 정보 |

```json
{
  "requested": {
    "success": {
      "count": 100,
      "userIds": ["successUser1", "successUser2"]
    },
    "tokenNotFound": {
      "count": 10,
      "userIds": ["notFoundUser5", "notFoundUser6"]
    }
  },
  "failed": {
    "count": 2,
    "userIds": ["failedUser9", 1]
  }
}
```

#### 실패 시 - /users

| **Error Code**  | **Status** | **Message**                                                                   | **Description**                |
| --------------- | ---------- | ----------------------------------------------------------------------------- | ------------------------------ |
| `ERR-AB-PSS-22` | `400`      | `Requested user not exist.`                                                   | 요청된 유저 ID 배열이 비어있음 |
| `ERR-AB-PSS-23` | `404`      | `Account information has either never been registered or could not be found.` | 푸시 설정이 등록되지 않음      |

---

## [POST] `/api/push/v1/messages`

### **API 설명**

- 개별적으로 설정된 메시지를 각 유저 ID의 푸시 토큰에 전송합니다.
- 요청된 유저의 총 푸시 토큰 수에 따라 요청 건수가 차감됩니다.

### **Request - /messages**

#### **Header**

| **Parameter**  | **Type** | **Required** | **Description** |
| -------------- | -------- | ------------ | --------------- |
| `x-api-key`    | string   | ✔           | API 키          |
| `x-secret-key` | string   | ✔           | Secret 키       |

#### **Body - /messages**

| **Parameter** | **Type**    | **Required** | **Description**    |
| ------------- | ----------- | ------------ | ------------------ |
| `messages`    | `Message[]` | ✔           | 전송할 메시지 배열 |

**Message** 객체 정의:

| **Parameter** | **Type** | **Required** | **Description**                |
| ------------- | -------- | ------------ | ------------------------------ |
| `userId`      | `string` | ✔           | 유저 ID                        |
| `title`       | `string` | ✔           | 푸시 알림 제목                 |
| `content`     | `string` | ✔           | 푸시 알림 내용                 |
| `linkURL`     | `string` | ✘            | 푸시 클릭 시 이동할 URL (옵션) |

#### Example - /messages

```json
{
  "header": {
    "x-api-key": "APIKEYVALUE",
    "x-secret-key": "SECRETKEYVALUE"
  },
  "body": {
    "messages": [
      {
        "userId": "nachoUser1",
        "title": "나쵸코드 업데이트",
        "content": "새로운 기능이 추가되었습니다.",
        "linkURL": "https://nachocode.io"
      },
      {
        "userId": "nachoUser2",
        "title": "알림 메시지",
        "content": "지금 확인하세요!"
      }
    ]
  }
}
```

### **Response - /messages**

#### 성공 시 - /messages

| **Properties** | **Type** | **Description**                        |
| -------------- | -------- | -------------------------------------- |
| `status`       | `number` | HTTP 응답 상태 코드                    |
| `response`     | `object` | 성공/실패한 유저에 대한 상세 결과 정보 |

#### 실패 시 - /messages

| **Error Code**  | **Status** | **Message**                                                                   | **Description**           |
| --------------- | ---------- | ----------------------------------------------------------------------------- | ------------------------- |
| `ERR-AB-PSS-52` | `404`      | `Account information has either never been registered or could not be found.` | 푸시 설정이 등록되지 않음 |
