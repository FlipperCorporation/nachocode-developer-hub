---
id: endpoints
sidebar_label: V2 API 엔드포인트
description: nachocode 개인화 푸시 API의 모든 엔드포인트에 대한 요청과 응답 구조 및 사용 방법을 안내합니다.
keywords:
  [
    푸시 API,
    푸시 알림,
    개인화 푸시,
    타겟 푸시,
    타겟 알림,
    마케팅 푸시,
    고객 마케팅,
    개인화 메시지,
    사용자 맞춤 메시지,
    나쵸코드 푸시,
    nachocode 푸시,
  ]
---

# 푸시알림 V2 API Endpoints

> 🔔 **최신화 일자:** 2025-06-09

<!-- 2024-11-27 최초 생성/ V0버전 제외 V1버전만 생성 -->
<!-- 2025-03-27 V1버전 Deprecated처리 및 V2버전 신규 등록 -->
<!-- 2025-04-23 V1 Obsolete 예정 일 확정, isUsingBadge 옵션 추가 -->
<!-- 2025-06-04 V1 / V2 세그먼트로 분리, 토픽 푸시 추가 -->

<br/>

nachocode 푸시 API는 다양한 엔드포인트를 제공하여 푸시 알림 관리 및 전송을 지원합니다.

이 문서에서는 **API 사용법**, **요청/응답 형식**, **에러 케이스** 등을 다룹니다.

## **[POST] `/api/push/v2/messages`**

### 설명 (`/v2/messages`)

- 개별적으로 설정된 메시지를 각 유저 ID의 푸시 토큰에 전송합니다.
- 요청된 유저의 총 푸시 토큰 수에 따라 요청 건수가 차감됩니다.<br/><br/>
- ⚠️**요청 당 메세지의 최대 개수는 200개이며, Body의 크기는 150KB를 초과하지 않아야 합니다.**

<hr style={{border: "1px dashed #8E8C8C", opacity: "0.2"}}/>

### Request (`/v2/messages`)

- **Header**

  | **Parameter** | **Type** | **Required** | **Description** |
  | ------------- | -------- | ------------ | --------------- |
  | x-api-key     | `string` | ✔           | API 키          |
  | x-secret-key  | `string` | ✔           | Secret 키       |

- **Body**

  | **Parameter** | **Type**                      | **Required** | **Description**    |
  | ------------- | ----------------------------- | ------------ | ------------------ |
  | messages      | [`Message[]`](#message)       | ✔           | 전송할 메시지 배열 |
  | options       | [`PushOptions`](#pushoptions) |              | 푸시 상세 옵션     |

- **Example**

  ```json
  {
    "header": { "x-api-key": "APIKEYVALUE", "x-secret-key": "SECRETKEYVALUE" },
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
      ],
      "options": {
        "isUsingBadge": true // since App Source ver.1.5.0
      }
    }
  }
  ```

<hr style={{border: "1px dashed #8E8C8C", opacity: "0.2"}}/>

### Response (`/v2/messages`)

- **Success Response**

  - **Property**

    | **Properties** | **Type** | **Description**           |
    | -------------- | -------- | ------------------------- |
    | status         | `number` | HTTP 응답 상태 코드 (200) |
    | response       | `string` | 요청 성공 문자열          |

  - **Example**

    ```json
    "Push successfully requested to be sent."
    ```

<br/>

- **Error Response**

  - [Error Response Object](#error-response-object)

  - 에러코드<br/>
    <span style={{fontSize: "12px"}}>(샌드박스 혹은 운영환경에서 아래에 명세되지 않은 에러 코드를 수신받을 경우 나쵸코드로 문의해주세요.)</span>

    | **ErrorCode** | **Status Code** | **Message**                 | **Description**                |
    | ------------- | --------------- | --------------------------- | ------------------------------ |
    | ERR-AB-PSS-91 | 404             | App data not found.         | 미등록 앱                      |
    | ERR-AB-PSS-92 | 404             | FCM Account data not found. | FCM Service Account파일 미등록 |

<br/><br/><hr style={{ border: "1px solid #8E8C8C"}} /><br/>

## **[POST] `/api/push/v2/users`**

### 설명 (`/v2/users`)

- 동일한 제목과 내용으로 여러 유저에게 푸시 알림을 전송합니다.
- 유저 ID로 조회된 모든 푸시 토큰을 대상으로 전송합니다.
- 유저 1명당 요청 건수를 차감합니다.<br/><br/>
- ⚠️**요청 당 userId의 최대 개수는 500개입니다.**

<hr style={{border: "1px dashed #8E8C8C", opacity: "0.2"}}/>

### Request (`/v2/users`)

- **Header**

  | **Parameter** | **Type** | **Required** | **Description** |
  | ------------- | -------- | ------------ | --------------- |
  | x-api-key     | `string` | ✔           | API 키          |
  | x-secret-key  | `string` | ✔           | Secret 키       |

- **Body**

  | **Parameter** | **Type**                      | **Required** | **Description**            |
  | ------------- | ----------------------------- | ------------ | -------------------------- |
  | userIds       | `(string \| number)[]`        | ✔           | 푸시를 전송할 유저 ID 배열 |
  | title         | `string`                      | ✔           | 푸시 알림 제목             |
  | content       | `string`                      | ✔           | 푸시 알림 내용             |
  | linkURL       | `string`                      |              | 푸시 클릭 시 이동할 URL    |
  | options       | [`PushOptions`](#pushoptions) |              | 푸시 상세 옵션             |

- **Example**

  ```json
  {
    "header": { "x-api-key": "APIKEYVALUE", "x-secret-key": "SECRETKEYVALUE" },
    "body": {
      "userIds": ["nachoUser1", "nachoUser2", 3, 4],
      "title": "나쵸코드 개인화 푸시 기능 추가!",
      "content": "새로운 기능이 추가되었습니다.",
      "linkURL": "https://nachocode.io",
      "options": {
        "isUsingBadge": true // since App Source ver.1.5.0
      }
    }
  }
  ```

<hr style={{border: "1px dashed #8E8C8C", opacity: "0.2"}}/>

### Response (`/v2/users`)

- **Success Response**

  - **Property**

    | **Properties** | **Type** | **Description**           |
    | -------------- | -------- | ------------------------- |
    | status         | `number` | HTTP 응답 상태 코드 (200) |
    | response       | `string` | 요청 성공 문자열          |

  - **Example**

    ```json
    "Push successfully requested to be sent."
    ```

<br/>

- **Error Response**

  - [Error Response Object](#error-response-object)

  - 에러코드<br/>
    <span style={{fontSize: "12px"}}>(샌드박스 혹은 운영환경에서 아래에 명세되지 않은 에러 코드를 수신받을 경우 나쵸코드로 문의해주세요.)</span>

    | **ErrorCode** | **Status Code** | **Message**                 | **Description**                 |
    | ------------- | --------------- | --------------------------- | ------------------------------- |
    | ERR-AB-PSS-91 | 404             | App data not found.         | 미등록 앱                       |
    | ERR-AB-PSS-92 | 404             | FCM Account data not found. | FCM Service Account 파일 미등록 |

<br/><br/><hr style={{ border: "1px solid black", opacity: "0.5"}} /><br/>

## **[POST] `/api/push/v2/topic`**

### 설명 (`/v2/topic`)

- 특정 토픽에 대한 구독 과정을 통해 구독된 모든 디바이스로 푸시를 전송합니다.
- 토픽 푸시 전송 요청 건수에 따라 차감됩니다.<br/><br/>

<hr style={{border: "1px dashed #8E8C8C", opacity: "0.2"}}/>

### Request (`/v2/topic`)

- **Header**

  | **Parameter** | **Type** | **Required** | **Description** |
  | ------------- | -------- | ------------ | --------------- |
  | x-api-key     | `string` | ✔           | API 키          |
  | x-secret-key  | `string` | ✔           | Secret 키       |

- **Body**

  | **Parameter** | **Type**                      | **Required** | **Description**         |
  | ------------- | ----------------------------- | ------------ | ----------------------- |
  | topicName     | `string`                      | ✔           | 푸시를 전송할 토픽명    |
  | title         | `string`                      | ✔           | 푸시 알림 제목          |
  | content       | `string`                      | ✔           | 푸시 알림 내용          |
  | linkURL       | `string`                      |              | 푸시 클릭 시 이동할 URL |
  | options       | [`PushOptions`](#pushoptions) |              | 푸시 상세 옵션          |

- **Example**

  ```json
  {
    "header": { "x-api-key": "APIKEYVALUE", "x-secret-key": "SECRETKEYVALUE" },
    "body": {
      "topicName": "update-topic",
      "title": "나쵸코드 업데이트",
      "content": "토픽 푸시 기능이 추가되었습니다.",
      "linkURL": "https://nachocode.io",
      "options": {
        "isUsingBadge": true // since App Source ver.1.5.0
      }
    }
  }
  ```

<hr style={{border: "1px dashed #8E8C8C", opacity: "0.2"}}/>

### Response (`/v2/topic`)

- **Success Response**

  - **Property**

    | **Properties** | **Type** | **Description**           |
    | -------------- | -------- | ------------------------- |
    | status         | `number` | HTTP 응답 상태 코드 (200) |
    | response       | `string` | 요청 성공 문자열          |

  - **Example**

    ```json
    "Push successfully requested to be sent."
    ```

<br/>

- **Error Response**

  - [Error Response Object](#error-response-object)

  - 에러코드<br/>
    <span style={{fontSize: "12px"}}>(샌드박스 혹은 운영환경에서 아래에 명세되지 않은 에러 코드를 수신받을 경우 나쵸코드로 문의해주세요.)</span>

    | **ErrorCode** | **Status Code** | **Message**                      | **Description**                      |
    | ------------- | --------------- | -------------------------------- | ------------------------------------ |
    | ERR-AB-PSS-91 | 404             | App data not found.              | 미등록 앱                            |
    | ERR-AB-PSS-92 | 404             | FCM Account data not found.      | FCM Service Account파일 미등록       |
    | ERR-AB-CST-51 | 400             | No topics are available to send. | 전송이 불가하거나 존재하지 않는 토픽 |

<br/><br/><hr style={{ border: "1px solid #8E8C8C"}} /><br/>

## **[POST] `/api/push/v2/topic/subscription`**

### 설명 (`/v2/topic/subscription`)

- SDK의 [`registerPushToken()`](@todo)을 통해 토큰이 등록된 유저에 한하여, 해당 유저들의 토큰을 토픽에 구독시킵니다.
- FCM으로의 구독과정 중 발견된 유효하지 않은 토큰의 경우, nachocode server에서 자동 삭제됩니다.
- 유저 1명당 요청 건수를 차감합니다.<br/><br/>
- ⚠️**요청 당 userId의 최대 개수는 100개입니다**.

<hr style={{border: "1px dashed #8E8C8C", opacity: "0.2"}}/>

### Request (`/v2/topic/subscription`)

- **Header**

  | **Parameter** | **Type** | **Required** | **Description** |
  | ------------- | -------- | ------------ | --------------- |
  | x-api-key     | `string` | ✔           | API 키          |
  | x-secret-key  | `string` | ✔           | Secret 키       |

- **Body**

  | **Parameter** | **Type**               | **Required** | **Description**     |
  | ------------- | ---------------------- | ------------ | ------------------- |
  | userIds       | `(string \| number)[]` | ✔           | 구독할 유저 ID 배열 |
  | topicName     | `string`               | ✔           | 구독시킬 토픽 명    |

- **Example**

  ```json
  {
    "header": { "x-api-key": "APIKEYVALUE", "x-secret-key": "SECRETKEYVALUE" },
    "body": {
      "userIds": ["nachoUser1", "nachoUser2", 3, 4],
      "topicName": "나쵸코드 개인화 푸시 기능 추가!"
    }
  }
  ```

<hr style={{border: "1px dashed #8E8C8C", opacity: "0.2"}}/>

### Response (`/v2/topic/subscription`)

- **Success Response**

  - **Property**

    | **Properties** | **Type**                                    | **Description**                                               |
    | -------------- | ------------------------------------------- | ------------------------------------------------------------- |
    | status         | `number`                                    | HTTP 응답 상태 코드 (200)                                     |
    | response       | [Subscription Result](#subscription-result) | 구독 성공, 구독 실패, 등록된 토큰 부재, 토큰 삭제 유저의 목록 |

  - **Example**

    ```json
    {
      "success": ["nachoUser1", "nachoUser2", "nachoUser3"],
      "notFound": ["nachoUser4", "nachoUser5"],
      "failed": ["nachoUser1", "nachoUser6"]
    }
    ```

<br/>

- **Error Response**

  - [Error Response Object](#error-response-object)

  - 에러코드<br/>
    <span style={{fontSize: "12px"}}>(샌드박스 혹은 운영환경에서 아래에 명세되지 않은 에러 코드를 수신받을 경우 나쵸코드로 문의해주세요.)</span>

    | **ErrorCode** | **Status Code** | **Message**                 | **Description**                 |
    | ------------- | --------------- | --------------------------- | ------------------------------- |
    | ERR-AB-PSS-91 | 404             | App data not found.         | 미등록 앱                       |
    | ERR-AB-PSS-92 | 404             | FCM Account data not found. | FCM Service Account 파일 미등록 |

<br/><br/><hr style={{ border: "1px solid black", opacity: "0.5"}} /><br/>

## **[DELETE] `/api/push/v2/topic/subscription`**

### 설명 (`/v2/topic/subscription`)

- SDK의 [`registerPushToken()`](@todo)을 통해 토큰이 등록된 유저에 한하여, 해당 유저들의 토큰을 토픽에서 구독을 해제합니다.
- FCM으로의 구독해제 과정 중 발견된 유효하지 않은 토큰의 경우, nachocode server에서 자동 삭제됩니다.
- 유저 1명당 요청 건수를 차감합니다.<br/><br/>
- ⚠️**요청 당 userId의 최대 개수는 100개입니다**.

<hr style={{border: "1px dashed #8E8C8C", opacity: "0.2"}}/>

### Request (`/v2/topic/subscription`)

- **Header**

  | **Parameter** | **Type** | **Required** | **Description** |
  | ------------- | -------- | ------------ | --------------- |
  | x-api-key     | `string` | ✔           | API 키          |
  | x-secret-key  | `string` | ✔           | Secret 키       |

- **Body**

  | **Parameter** | **Type**               | **Required** | **Description**         |
  | ------------- | ---------------------- | ------------ | ----------------------- |
  | userIds       | `(string \| number)[]` | ✔           | 구독해제할 유저 ID 배열 |
  | topicName     | `string`               | ✔           | 구독을 해제시킬 토픽 명 |

- **Example**

  ```json
  {
    "header": { "x-api-key": "APIKEYVALUE", "x-secret-key": "SECRETKEYVALUE" },
    "body": {
      "userIds": ["nachoUser1", "nachoUser2", 3, 4],
      "topicName": "나쵸코드 개인화 푸시 기능 추가!"
    }
  }
  ```

<hr style={{border: "1px dashed #8E8C8C", opacity: "0.2"}}/>

### Response (`/v2/topic/subscription`)

- **Success Response**

  - **Property**

    | **Properties** | **Type**                                    | **Description**                                                     |
    | -------------- | ------------------------------------------- | ------------------------------------------------------------------- |
    | status         | `number`                                    | HTTP 응답 상태 코드 (200)                                           |
    | response       | [Subscription Result](#subscription-result) | 구독해제 성공, 구독해제 실패, 등록 토큰 부재, 토큰 삭제 유저의 목록 |

  - **Example**

    ```json
    {
      "success": ["nachoUser1", "nachoUser2", "nachoUser3"],
      "notFound": ["nachoUser4", "nachoUser5"],
      "failed": ["nachoUser1", "nachoUser6"]
    }
    ```

<br/>

- **Error Response**

  - [Error Response Object](#error-response-object)

  - 에러코드<br/>
    <span style={{fontSize: "12px"}}>(샌드박스 혹은 운영환경에서 아래에 명세되지 않은 에러 코드를 수신받을 경우 나쵸코드로 문의해주세요.)</span>

    | **ErrorCode** | **Status Code** | **Message**                 | **Description**                 |
    | ------------- | --------------- | --------------------------- | ------------------------------- |
    | ERR-AB-PSS-91 | 404             | App data not found.         | 미등록 앱                       |
    | ERR-AB-PSS-92 | 404             | FCM Account data not found. | FCM Service Account 파일 미등록 |

<br/><br/><hr style={{ border: "1px solid #8E8C8C"}} /><br/>

## **객체 설명**

### PushOptions

- **Property**

  | **Parameter** | **Type**  | **Required** | **Description**     | **Since (App Source)** |
  | ------------- | --------- | ------------ | ------------------- | ---------------------- |
  | isUsingBadge  | `boolean` |              | 푸시 뱃지 제어 여부 | ver.1.5.0              |

  - **Example**

  ```json
  {
    "isUsingBadge": true // since App Source ver.1.5.0
  }
  ```

<br/>

- **Detail Description**

  | **Parameter** | **Description**                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
  | ------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
  | isUsingBadge  | 이 설정은 플랫폼(android, ios)에 따라 동작 방식에 차이가 있습니다. <br/><br/> [**Android**] <br/> OS레벨에서 뱃지 기능을 자동으로 처리하므로, `isUsingBadge`설정값과 관계없이<br/> android정책에 따라 알림 뱃지가 자연스럽게 표시됩니다. <br/><br/> [**iOS**] <br/> 알림이 하나 이상 도착하면 앱 아이콘에 '**1**'이 표시됩니다. 실제 알림 개수와 관계없이 <br/> 뱃지 숫자가 항상 '**1**'로 표시되고, 이는 **푸시가 도착했음을 표시**하는 용도로 활용 가능합니다. <br/>알림 건수 누적 기능의 경우 추후 업데이트 예정입니다. <br/><br/><i>25년 04월 23일 이후로 빌드된 앱(App Source ver.1.5.0)에만 뱃지가 노출됩니다.</i> |

<hr style={{border: "1px dashed #8E8C8C", opacity: "0.2"}}/>

### Message

- **Property**

  | **Parameter** | **Type** | **Required** | **Description**         |
  | ------------- | -------- | ------------ | ----------------------- |
  | userId        | `string` | ✔           | 유저 ID                 |
  | title         | `string` | ✔           | 푸시 알림 제목          |
  | content       | `string` | ✔           | 푸시 알림 내용          |
  | linkURL       | `string` |              | 푸시 클릭 시 이동할 URL |

- **Example**

  ```json
  {
    "userId": "nachoUser1",
    "title": "나쵸코드 업데이트",
    "content": "새로운 기능이 추가되었습니다.",
    "linkURL": "https://nachocode.io"
  }
  ```

<hr style={{border: "1px dashed #8E8C8C", opacity: "0.2"}}/>

### Subscription Result

- **Property**

  | **Parameter** | **Type**   | **Description**                                                                              |
  | ------------- | ---------- | -------------------------------------------------------------------------------------------- |
  | success       | `string[]` | userId를 통해 등록된 토큰이 존재하였고, 요청된 동작에 성공한 userId들의 목록                 |
  | failed        | `string[]` | userId를 통해 등록된 토큰이 존재했지만, 요청된 동작에 실패한 userId들의 목록                 |
  | tokenNotFound | `string[]` | 토큰을 보유하지 않은 유저 ID목록                                                             |
  | tokenDeleted  | `string[]` | FCM으로부터 '유효하지 않은 토큰'이라는 결과를 반환받아 삭제처리된 토큰의 소유자(유저) ID목록 |

  \*<i>유저가 여러개의 토큰을 보유하고 있을 경우, `failed`, `success`, `tokenDeleted`항목에 동일한 userId가 존재할 수 있습니다.</i>

- **Example**

  ```json
  {
    "success": ["nachoUser1", "nachoUser2", "nachoUser3"],
    "notFound": ["nachoUser4", "nachoUser5"],
    "failed": ["nachoUser1", "nachoUser6"]
  }
  ```

  <br/><br/><hr style={{ border: "1px solid #8E8C8C"}} /><br/>

### Error Response Object

- **Property**

  | **Parameter** | **Type** | **Description** |
  | ------------- | -------- | --------------- |
  | statusCode    | `number` | 상태 코드       |
  | path          | `string` | 요청 경로       |
  | code          | `string` | 에러 코드       |
  | message       | `string` | 에러 메세지     |

- **Example**

  ```json
  {
    "statusCode": 400,
    "path": "api/nacho/example",
    "code": "ERR-NA-CHO-00",
    "message": "Oops! Something went wrong!"
  }
  ```

<br/><br/><hr style={{ border: "1px solid #8E8C8C"}} /><br/>

## **기타 공용 에러코드**

| **ErrorCode** | **StatusCode** | **Message**                                                      | **Description**                   |
| ------------- | -------------- | ---------------------------------------------------------------- | --------------------------------- |
| ERR-AB-VAL-00 | 400            | Incorrect request. Server cannot understand request.             | 요청 Body 데이터가 잘못된 경우    |
| ERR-AB-SGK-11 | 400            | Secret key not found.                                            | Secret Key가 전달되지 않았을 경우 |
| ERR-AB-SGK-13 | 401            | Incorrect secret key.                                            | 유효하지 않은 Secret Key          |
| ERR-AB-KSY-11 | 400            | Required parameters missing.                                     | API Key가 전달되지 않았을 경우    |
| ERR-AB-KSY-13 | 404            | Provided key information not found. Please check your key again. | 유효하지 않은 API Key             |
| ERR-AB-AGK-11 | 400            | Api key not found.                                               | Api Key가 전달되지 않았을 경우    |
| ERR-AB-AGK-12 | 400            | Invalid api key type.                                            | 유효하지 않은 API Key             |
