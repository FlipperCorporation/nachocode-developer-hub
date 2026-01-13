---
sidebar_label: V2 API
pagination_label: V2 API
description: nachocode 개인화 푸시 API의 모든 엔드포인트에 대한 요청과 응답 구조 및 사용 방법을 안내합니다.
keywords:
  [
    토픽 푸시,
    그룹 푸시,
    예약 푸시,
    스케줄 푸시,
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
    푸시 API,
  ]
image: /img/docs/thumbnails/API/push.svg
---

# 푸시알림 V2 API Endpoints

import { ThumbnailImage } from '@site/src/components/common/image/thumbnail-image';

<ThumbnailImage src='/img/docs/thumbnails/API/push.svg'/>

> 🔔 **최신화 일자:** 2026-01-08

<!-- 2024-11-27 최초 생성/ V0버전 제외 V1버전만 생성 -->
<!-- 2025-03-27 V1버전 Deprecated처리 및 V2버전 신규 등록 -->
<!-- 2025-04-23 V1 Obsolete 예정 일 확정, isUsingBadge 옵션 추가 -->
<!-- 2025-06-04 V1 / V2 세그먼트로 분리, 토픽 푸시 추가 -->
<!-- 2025-08-25 PushOptions에 requestGroupId옵션 추가 -->
<!-- 2025-10-02 문서 오기입 수정, App Source 링크 추가 -->
<!-- 2025-10-13 전송불가 유저 식별을 위한 웹훅 안내(팁) 컴포넌트 추가 -->
<!-- 2026-01-07 나쵸토픽 전송 API, UserId목록으로 토큰 삭제 API 추가 -->

<br/>

nachocode 푸시 API는 다양한 엔드포인트를 제공하여 푸시 알림 관리 및 전송을 지원합니다.

이 문서에서는 **API 사용법**, **요청/응답 형식**, **에러 케이스** 등을 다룹니다.

## **[POST] `/api/push/v2/messages`** {#post-v2-messages}

### 설명 {#post-v2-messages-summary}

- 개별적으로 설정된 메시지를 각 유저 ID의 푸시 토큰에 전송합니다.
- 요청된 유저의 총 푸시 토큰 수에 따라 요청 건수가 차감됩니다.

:::warning
**요청 당 메세지의 최대 개수는 200개이며, Body의 크기는 150KB를 초과하지 않아야 합니다.**
:::

:::info
토큰이 없거나, 토큰 만료 또는 앱 삭제의 이유로 전송 불가한 유저의 목록은 웹훅을 통해 확인할 수 있습니다.  
➡️ [전송불가 유저 웹훅 개요](../../../guide/webhook/overview)  
➡️ [전송불가 유저 웹훅 등록](https://docs.nachocode.io/ko/articles/4-%EC%9B%B9%ED%9B%85-%EC%84%A4%EC%A0%95-4ab8a296)
:::

<hr style={{border: "1px dashed #8E8C8C", opacity: "0.2"}}/>

### Request {#post-v2-messages-request}

- **Header**

  | **Parameter** | **Type** | **Required** | **Description** |
  | ------------- | -------- | ------------ | --------------- |
  | x-api-key     | `string` | ✔           | API 키          |
  | x-secret-key  | `string` | ✔           | Secret 키       |

- **Body**

  | **Parameter** | **Type**                                                      | **Required** | **Constraints**     | **Description**    |
  | ------------- | ------------------------------------------------------------- | ------------ | ------------------- | ------------------ |
  | messages      | [`Message[]`](#v2-message-object-definition)                  | ✔           | 길이 200이하의 배열 | 전송할 메시지 배열 |
  | options       | [`V2MessagePushOptions`](#v2-message-push-options-definition) |              |                     | 푸시 상세 옵션     |

  <br/>

  #### V2MessagePushOptions \{#v2-message-push-options-definition}

  | Property       | Type      | Description                                                 |
  | -------------- | --------- | ----------------------------------------------------------- |
  | isUsingBadge   | `boolean` | 푸시 뱃지 제어 여부 ([상세](#v2-push-options-definition))   |
  | requestGroupId | `string`  | 푸시 전송 내역 고유값 ([상세](#v2-push-options-definition)) |

  <br/>

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
          "linkURL": "https://nachocode.io",
          "imageURL": "https://example.com/images/sample-image.jpg" // since App Source ver.1.6.0
        },
        {
          "userId": "nachoUser2",
          "title": "알림 메시지",
          "content": "지금 확인하세요!"
        }
      ],
      "options": {
        "isUsingBadge": true, // since App Source ver.1.5.0
        "requestGroupId": "20260101_event_ad"
      }
    }
  }
  ```

<hr style={{border: "1px dashed #8E8C8C", opacity: "0.2"}}/>

### Response {#post-v2-messages-response}

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

---

- **Error Response**

  - [Error Response](#v2-error-response-object-definition)

  - 에러코드

    <i style={{fontSize: "14px"}}>이 외 에러코드는 공통 [에러코드 명세](#v2-push-common-error-code-definition)에서 확인 가능합니다.</i>

    | **ErrorCode** | **Status Code** | **Message**                 | **Description**                |
    | ------------- | --------------- | --------------------------- | ------------------------------ |
    | ERR-AB-PSS-91 | 404             | App data not found.         | 미등록 앱                      |
    | ERR-AB-PSS-92 | 404             | FCM Account data not found. | FCM Service Account파일 미등록 |

<br/><br/><hr style={{ border: "1px solid #8E8C8C"}} /><br/>

## **[POST] `/api/push/v2/users`** {#post-v2-users}

### 설명 {#post-v2-users-summary}

- 동일한 제목과 내용으로 여러 유저에게 푸시 알림을 전송합니다.
- 유저 ID로 조회된 모든 푸시 토큰을 대상으로 전송합니다.
- 유저 1명당 요청 건수를 차감합니다.

:::warning 제한

**요청 당 userId의 최대 개수는 500개입니다.**

:::

:::info
토큰이 없거나, 토큰 만료 또는 앱 삭제의 이유로 전송 불가한 유저의 목록은 웹훅을 통해 확인할 수 있습니다.  
➡️ [전송불가 유저 웹훅 개요](../../../guide/webhook/overview)  
➡️ [전송불가 유저 웹훅 등록](https://docs.nachocode.io/ko/articles/4-%EC%9B%B9%ED%9B%85-%EC%84%A4%EC%A0%95-4ab8a296)

:::

<hr style={{border: "1px dashed #8E8C8C", opacity: "0.2"}}/>

### Request {#post-v2-users-request}

- **Header**

  | **Parameter** | **Type** | **Required** | **Description** |
  | ------------- | -------- | ------------ | --------------- |
  | x-api-key     | `string` | ✔           | API 키          |
  | x-secret-key  | `string` | ✔           | Secret 키       |

- **Body**

  | **Parameter** | **Type**                                                | **Required** | **Constraints**                                                                                                                                                                                                                                                                                                                                                                                     | **Description**             |
  | ------------- | ------------------------------------------------------- | ------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------- |
  | userIds       | `(string \| number)[]`                                  | ✔           | 길이 500이하의 배열                                                                                                                                                                                                                                                                                                                                                                                 | 푸시를 전송할 유저 ID 배열  |
  | title         | `string`                                                | ✔           |                                                                                                                                                                                                                                                                                                                                                                                                     | 푸시 알림 제목              |
  | content       | `string`                                                | ✔           |                                                                                                                                                                                                                                                                                                                                                                                                     | 푸시 알림 내용              |
  | linkURL       | `string`                                                |              | 길이 255이하의 배열                                                                                                                                                                                                                                                                                                                                                                                 | 푸시 클릭 시 이동할 URL     |
  | imageURL      | `string`                                                |              | - 길이 500이하의 문자열<br/> - [App Source](/docs/guide/app-source) ver.1.6.0이상의 앱 <br/> <i style={{fontSize: "13px"}}>&nbsp;&nbsp;(25년 06월 11일 이후 빌드된 앱에서만 노출) <br/><br/> ⚠️FCM정책에 따라 아래 조건에서는 이미지가 노출되지 않을 수 있습니다.<br/> - SSL인증이 되지 않은 **http프로토콜 링크**<br/> - 용량이 **1MB**를 초과하는 이미지<br/> - **리다이렉션 처리 되는 링크**</i> | 푸시에 표시될 이미지의 링크 |
  | options       | [`V2UserPushOptions`](#v2-user-push-options-definition) |              |                                                                                                                                                                                                                                                                                                                                                                                                     | 푸시 상세 옵션              |

  <br/>

  #### V2UserPushOptions \{#v2-user-push-options-definition}

  | Property       | Type      | Description                                                 |
  | -------------- | --------- | ----------------------------------------------------------- |
  | isUsingBadge   | `boolean` | 푸시 뱃지 제어 여부 ([상세](#v2-push-options-definition))   |
  | requestGroupId | `string`  | 푸시 전송 내역 고유값 ([상세](#v2-push-options-definition)) |
  | scheduleTime   | `string`  | 예약 시간 ([상세](#v2-push-options-definition))             |

  <br/>

- **Example**

  ```json
  {
    "header": { "x-api-key": "APIKEYVALUE", "x-secret-key": "SECRETKEYVALUE" },
    "body": {
      "userIds": ["nachoUser1", "nachoUser2", 3, 4],
      "title": "나쵸코드 개인화 푸시 기능 추가!",
      "content": "새로운 기능이 추가되었습니다.",
      "linkURL": "https://nachocode.io",
      "imageURL": "https://example.com/images/sample-image.jpg", // since App Source ver.1.6.0
      "options": {
        "isUsingBadge": true, // since App Source ver.1.5.0
        "requestGroupId": "20260101_event_ad",
        "scheduleTime": "2026-01-01T20:00"
      }
    }
  }
  ```

<hr style={{border: "1px dashed #8E8C8C", opacity: "0.2"}}/>

### Response {#post-v2-users-response}

- **Success Response**

  - **Property**

    | **Properties** | **Type** | **Description**           |
    | -------------- | -------- | ------------------------- |
    | status         | `number` | HTTP 응답 상태 코드 (200) |
    | response       | `string` | 요청 성공 문자열          |

  - **Example**

    ```json
    // case1. 즉시 발송
    "Push successfully requested to be sent."

    // case2. 예약 발송
    "Push successfully requested to be scheduled."
    ```

---

- **Error Response**

  - [Error Response](#v2-error-response-object-definition)

  - 에러코드

    <i style={{fontSize: "14px"}}>이 외 에러코드는 공통 [에러코드 명세](#v2-push-common-error-code-definition)에서 확인 가능합니다.</i>

    | **ErrorCode** | **Status Code** | \*_Message_)\*              | **Description**                |
    | ------------- | --------------- | --------------------------- | ------------------------------ |
    | ERR-AB-PSS-91 | 404             | App data not found.         | 미등록 앱                      |
    | ERR-AB-PSS-92 | 404             | FCM Account data not found. | FCM Service Account파일 미등록 |

<br/><br/><hr style={{ border: "1px solid black", opacity: "0.5"}} /><br/>

## **[POST] `/api/push/v2/nacho-topic`** {#post-v2-nacho-topic}

### 설명 {#post-v2-nacho-topic-summary}

- 나쵸코드에서 자동적으로 관리하는 토픽으로 구독된 모든 디바이스로 푸시를 전송합니다.
- 나쵸 토픽 푸시 전송 요청 건수에 따라 차감됩니다.

---

<hr style={{border: "1px dashed #8E8C8C", opacity: "0.2"}}/>

### Request {#post-v2-nacho-topic-request}

- **Header**

  | **Parameter** | **Type** | **Required** | **Description** |
  | ------------- | -------- | ------------ | --------------- |
  | x-api-key     | `string` | ✔           | API 키          |
  | x-secret-key  | `string` | ✔           | Secret 키       |

- **Body**

  | **Parameter** | **Type**                                                             | **Required** | **Constraints**                                                                                                                                                                                                                                                                                                                                                                                     | **Description**             |
  | ------------- | -------------------------------------------------------------------- | ------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------- |
  | topicName     | [`NachoTopic`](#v2-nacho-topic-constant-definition)                  | ✔           | 나쵸토픽 상수 값: `'ALL'`                                                                                                                                                                                                                                                                                                                                                                           | 푸시를 전송할 토픽명        |
  | title         | `string`                                                             | ✔           |                                                                                                                                                                                                                                                                                                                                                                                                     | 푸시 알림 제목              |
  | content       | `string`                                                             | ✔           |                                                                                                                                                                                                                                                                                                                                                                                                     | 푸시 알림 내용              |
  | linkURL       | `string`                                                             |              | 길이 255이하의 문자열                                                                                                                                                                                                                                                                                                                                                                               | 푸시 클릭 시 이동할 URL     |
  | imageURL      | `string`                                                             |              | - 길이 500이하의 문자열<br/> - [App Source](/docs/guide/app-source) ver.1.6.0이상의 앱 <br/> <i style={{fontSize: "13px"}}>&nbsp;&nbsp;(25년 06월 11일 이후 빌드된 앱에서만 노출) <br/><br/> ⚠️FCM정책에 따라 아래 조건에서는 이미지가 노출되지 않을 수 있습니다.<br/> - SSL인증이 되지 않은 **http프로토콜 링크**<br/> - 용량이 **1MB**를 초과하는 이미지<br/> - **리다이렉션 처리 되는 링크**</i> | 푸시에 표시될 이미지의 링크 |
  | options       | [`V2NachoTopicPushOptions`](#v2-nacho-topic-push-options-definition) |              |                                                                                                                                                                                                                                                                                                                                                                                                     | 푸시 상세 옵션              |

  <br/>

  #### V2NachoTopicPushOptions \{#v2-nacho-topic-push-options-definition}

  | Property     | Type      | Description                                               |
  | ------------ | --------- | --------------------------------------------------------- |
  | isUsingBadge | `boolean` | 푸시 뱃지 제어 여부 ([상세](#v2-push-options-definition)) |
  | scheduleTime | `string`  | 예약 시간 ([상세](#v2-push-options-definition))           |

  <br/>

- **Example**

  ```json
  {
    "header": { "x-api-key": "APIKEYVALUE", "x-secret-key": "SECRETKEYVALUE" },
    "body": {
      "topicName": "ALL",
      "title": "전체알림",
      "content": "전체에게 보내는 푸시 알림입니다.",
      "linkURL": "https://nachocode.io",
      "imageURL": "https://example.com/images/sample-image.jpg", // since App Source ver.1.6.0
      "options": {
        "isUsingBadge": true, // since App Source ver.1.5.0
        "scheduleTime": "2026-01-01T20:00"
      }
    }
  }
  ```

<hr style={{border: "1px dashed #8E8C8C", opacity: "0.2"}}/>

### Response {#post-v2-nacho-topic-response}

- **Success Response**

  - **Property**

    | **Properties** | **Type**              | **Description**           |
    | -------------- | --------------------- | ------------------------- |
    | status         | `number`              | HTTP 응답 상태 코드 (200) |
    | response       | `{ message: string }` | 요청 성공 문자열          |

  - **Example**

    ```json
    // case1. 즉시 발송
    { "message": "Push successfully requested to be sent." }

    // case2. 예약 발송
    { "message": "Push successfully requested to be scheduled." }
    ```

---

- **Error Response**

  - [Error Response](#v2-error-response-object-definition)

  - 에러코드

    <i style={{fontSize: "14px"}}>이 외 에러코드는 공통 [에러코드 명세](#v2-push-common-error-code-definition)에서 확인 가능합니다.</i>

    | **ErrorCode** | **Status Code** | **Message**                 | **Description**                |
    | ------------- | --------------- | --------------------------- | ------------------------------ |
    | ERR-AB-PSS-91 | 404             | App data not found.         | 미등록 앱                      |
    | ERR-AB-PSS-92 | 404             | FCM Account data not found. | FCM Service Account파일 미등록 |

  <br/><br/><hr style={{ border: "1px solid #8E8C8C"}} /><br/>

## **[POST] `/api/push/v2/topic`** {#post-v2-topic}

### 설명 {#post-v2-topic-summary}

- 특정 토픽에 대한 구독 과정을 통해 구독된 모든 디바이스로 푸시를 전송합니다.
- 토픽 푸시 전송 요청 건수에 따라 차감됩니다.

---

<hr style={{border: "1px dashed #8E8C8C", opacity: "0.2"}}/>

### Request {#post-v2-topic-request}

- **Header**

  | **Parameter** | **Type** | **Required** | **Description** |
  | ------------- | -------- | ------------ | --------------- |
  | x-api-key     | `string` | ✔           | API 키          |
  | x-secret-key  | `string` | ✔           | Secret 키       |

- **Body**

  | **Parameter** | **Type**                                                  | **Required** | **Constraints**                                                                                                                                                                                                                                                                                                                                                                                     | **Description**             |
  | ------------- | --------------------------------------------------------- | ------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------- |
  | topicName     | `string`                                                  | ✔           | 길이 500이하의 문자열                                                                                                                                                                                                                                                                                                                                                                               | 푸시를 전송할 토픽명        |
  | title         | `string`                                                  | ✔           |                                                                                                                                                                                                                                                                                                                                                                                                     | 푸시 알림 제목              |
  | content       | `string`                                                  | ✔           |                                                                                                                                                                                                                                                                                                                                                                                                     | 푸시 알림 내용              |
  | linkURL       | `string`                                                  |              | 길이 255이하의 문자열                                                                                                                                                                                                                                                                                                                                                                               | 푸시 클릭 시 이동할 URL     |
  | imageURL      | `string`                                                  |              | - 길이 500이하의 문자열<br/> - [App Source](/docs/guide/app-source) ver.1.6.0이상의 앱 <br/> <i style={{fontSize: "13px"}}>&nbsp;&nbsp;(25년 06월 11일 이후 빌드된 앱에서만 노출) <br/><br/> ⚠️FCM정책에 따라 아래 조건에서는 이미지가 노출되지 않을 수 있습니다.<br/> - SSL인증이 되지 않은 **http프로토콜 링크**<br/> - 용량이 **1MB**를 초과하는 이미지<br/> - **리다이렉션 처리 되는 링크**</i> | 푸시에 표시될 이미지의 링크 |
  | options       | [`V2TopicPushOptions`](#v2-topic-push-options-definition) |              |                                                                                                                                                                                                                                                                                                                                                                                                     | 푸시 상세 옵션              |

    <br/>

  #### V2TopicPushOptions \{#v2-topic-push-options-definition}

  | Property     | Type      | Description                                               |
  | ------------ | --------- | --------------------------------------------------------- |
  | isUsingBadge | `boolean` | 푸시 뱃지 제어 여부 ([상세](#v2-push-options-definition)) |

  <br/>

- **Example**

  ```json
  {
    "header": { "x-api-key": "APIKEYVALUE", "x-secret-key": "SECRETKEYVALUE" },
    "body": {
      "topicName": "update-topic",
      "title": "나쵸코드 업데이트",
      "content": "토픽 푸시 기능이 추가되었습니다.",
      "linkURL": "https://nachocode.io",
      "imageURL": "https://example.com/images/sample-image.jpg", // since App Source ver.1.6.0
      "options": {
        "isUsingBadge": true // since App Source ver.1.5.0
      }
    }
  }
  ```

<hr style={{border: "1px dashed #8E8C8C", opacity: "0.2"}}/>

### Response {#post-v2-topic-response}

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

---

- **Error Response**

  - [Error Response](#v2-error-response-object-definition)

  - 에러코드

    <i style={{fontSize: "14px"}}>이 외 에러코드는 공통 [에러코드 명세](#v2-push-common-error-code-definition)에서 확인 가능합니다.</i>

    | **ErrorCode** | **Status Code** | **Message**                      | **Description**                      |
    | ------------- | --------------- | -------------------------------- | ------------------------------------ |
    | ERR-AB-PSS-91 | 404             | App data not found.              | 미등록 앱                            |
    | ERR-AB-PSS-92 | 404             | FCM Account data not found.      | FCM Service Account파일 미등록       |
    | ERR-AB-CST-51 | 400             | No topics are available to send. | 전송이 불가하거나 존재하지 않는 토픽 |

<br/><br/><hr style={{ border: "1px solid #8E8C8C"}} /><br/>

## **[POST] `/api/push/v2/topic/subscription`** {#post-v2-topic-subscription}

### 설명 {#post-v2-topic-subscription-summary}

- SDK의 [`registerPushToken()`](../../../sdk/namespaces/push#register-push-token)을 통해 토큰이 등록된 유저에 한하여, 해당 유저들의 토큰을 토픽에 구독시킵니다.
- FCM으로의 구독과정 중 발견된 유효하지 않은 토큰의 경우, nachocode server에서 자동 삭제됩니다.
- 유저 1명당 요청 건수를 차감합니다.

:::warning 제한

**요청 당 userId의 최대 개수는 100개입니다**.

:::

<hr style={{border: "1px dashed #8E8C8C", opacity: "0.2"}}/>

### Request {#post-v2-topic-subscription-request}

- **Header**

  | **Parameter** | **Type** | **Required** | **Description** |
  | ------------- | -------- | ------------ | --------------- |
  | x-api-key     | `string` | ✔           | API 키          |
  | x-secret-key  | `string` | ✔           | Secret 키       |

- **Body**

  | **Parameter** | **Type**               | **Required** | **Constraints**       | **Description**     |
  | ------------- | ---------------------- | ------------ | --------------------- | ------------------- |
  | userIds       | `(string \| number)[]` | ✔           | 길이 100이하의 배열   | 구독할 유저 ID 배열 |
  | topicName     | `string`               | ✔           | 길이 500이하의 문자열 | 구독시킬 토픽 명    |

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

### Response {#post-v2-topic-subscription-response}

- **Success Response**

  - **Property**

    | **Properties** | **Type**                                                        | **Description**                                               |
    | -------------- | --------------------------------------------------------------- | ------------------------------------------------------------- |
    | status         | `number`                                                        | HTTP 응답 상태 코드 (200)                                     |
    | response       | [SubscriptionResult](#v2-subscription-result-object-definition) | 구독 성공, 구독 실패, 등록된 토큰 부재, 토큰 삭제 유저의 목록 |

  - **Example**

    ```json
    {
      "success": ["nachoUser1", "nachoUser2", "nachoUser3"],
      "notFound": ["nachoUser4", "nachoUser5"],
      "failed": ["nachoUser1", "nachoUser6"]
    }
    ```

---

- **Error Response**

  - [Error Response Object](#v2-error-response-object-definition)

  - 에러코드

    <i style={{fontSize: "14px"}}>이 외 에러코드는 공통 [에러코드 명세](#v2-push-common-error-code-definition)에서 확인 가능합니다.</i>

    | **ErrorCode** | **Status Code** | **Message**                 | **Description**                |
    | ------------- | --------------- | --------------------------- | ------------------------------ |
    | ERR-AB-PSS-91 | 404             | App data not found.         | 미등록 앱                      |
    | ERR-AB-PSS-92 | 404             | FCM Account data not found. | FCM Service Account파일 미등록 |

<br/><br/><hr style={{ border: "1px solid black", opacity: "0.5"}} /><br/>

## **[DELETE] `/api/push/v2/topic/subscription`** {#delete-v2-topic-subscription}

### 설명 {#delete-v2-topic-subscription-summary}

- SDK의 [`registerPushToken()`](../../../sdk/namespaces/push#register-push-token)을 통해 토큰이 등록된 유저에 한하여, 해당 유저들의 토큰을 토픽에서 구독을 해제합니다.
- FCM으로의 구독해제 과정 중 발견된 유효하지 않은 토큰의 경우, nachocode server에서 자동 삭제됩니다.
- 유저 1명당 요청 건수를 차감합니다.

:::warning 제한

**요청 당 userId의 최대 개수는 100개입니다**.

:::

<hr style={{border: "1px dashed #8E8C8C", opacity: "0.2"}}/>

### Request {#delete-v2-topic-subscription-request}

- **Header**

  | **Parameter** | **Type** | **Required** | **Description** |
  | ------------- | -------- | ------------ | --------------- |
  | x-api-key     | `string` | ✔           | API 키          |
  | x-secret-key  | `string` | ✔           | Secret 키       |

- **Body**

  | **Parameter** | **Type**               | **Required** | **Constraints**       | **Description**         |
  | ------------- | ---------------------- | ------------ | --------------------- | ----------------------- |
  | userIds       | `(string \| number)[]` | ✔           | 길이 100이하의 배열   | 구독해제할 유저 ID 배열 |
  | topicName     | `string`               | ✔           | 길이 500이하의 문자열 | 구독을 해제시킬 토픽 명 |

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

### Response {#delete-v2-topic-subscription-response}

- **Success Response**

  - **Property**

    | **Properties** | **Type**                                                        | **Description**                                                     |
    | -------------- | --------------------------------------------------------------- | ------------------------------------------------------------------- |
    | status         | `number`                                                        | HTTP 응답 상태 코드 (200)                                           |
    | response       | [SubscriptionResult](#v2-subscription-result-object-definition) | 구독해제 성공, 구독해제 실패, 등록 토큰 부재, 토큰 삭제 유저의 목록 |

  - **Example**

    ```json
    {
      "success": ["nachoUser1", "nachoUser2", "nachoUser3"],
      "notFound": ["nachoUser4", "nachoUser5"],
      "failed": ["nachoUser1", "nachoUser6"]
    }
    ```

---

- **Error Response**

  - [Error Response](#v2-error-response-object-definition)

  - 에러코드

    <i style={{fontSize: "14px"}}>이 외 에러코드는 공통 [에러코드 명세](#v2-push-common-error-code-definition)에서 확인 가능합니다.</i>

    | **ErrorCode** | **Status Code** | **Message**                 | **Description**                |
    | ------------- | --------------- | --------------------------- | ------------------------------ |
    | ERR-AB-PSS-91 | 404             | App data not found.         | 미등록 앱                      |
    | ERR-AB-PSS-92 | 404             | FCM Account data not found. | FCM Service Account파일 미등록 |

<br/><br/><hr style={{ border: "1px solid #8E8C8C"}} /><br/>

## **[DELETE] `/api/push/v2/token`** {#delete-v2-token}

### 설명 {#delete-v2-token-summary}

- SDK의 [`registerPushToken()`](../../../sdk/namespaces/push.md#register-push-token)을 통해 토큰이 등록된 유저에 한하여, 해당 유저들의 토큰을 삭제합니다.
- 유저 1명당 요청 건수를 차감합니다.

:::warning 제한

**요청 당 userId의 최대 개수는 100개입니다**.

:::

<hr style={{border: "1px dashed #8E8C8C", opacity: "0.2"}}/>

### Request {#delete-v2-token-request}

- **Header**

  | **Parameter** | **Type** | **Required** | **Description** |
  | ------------- | -------- | ------------ | --------------- |
  | x-api-key     | `string` | ✔           | API 키          |
  | x-secret-key  | `string` | ✔           | Secret 키       |

- **Body**

  | **Parameter** | **Type**               | **Required** | **Constraints**     | **Description**            |
  | ------------- | ---------------------- | ------------ | ------------------- | -------------------------- |
  | userIds       | `(string \| number)[]` | ✔           | 길이 100이하의 배열 | 토큰을 삭제할 유저 ID 배열 |

- **Example**

  ```json
  {
    "header": { "x-api-key": "APIKEYVALUE", "x-secret-key": "SECRETKEYVALUE" },
    "body": {
      "userIds": ["nachoUser1", "nachoUser2", 3, 4]
    }
  }
  ```

<hr style={{border: "1px dashed #8E8C8C", opacity: "0.2"}}/>

### Response {#delete-v2-token-response}

- **Success Response**

  - **Property**

    | **Properties** | **Type**                                                                              | **Description**                                          |
    | -------------- | ------------------------------------------------------------------------------------- | -------------------------------------------------------- |
    | status         | `number`                                                                              | HTTP 응답 상태 코드 (200)                                |
    | response       | [`PushTokenManipulationResult`](#v2-push-token-manipulation-result-object-definition) | 토큰삭제 성공, 등록 토큰 부재, 토큰삭제 실패 유저의 목록 |

  - **Example**

    ```json
    {
      "success": ["nachoUser1", "nachoUser2", "nachoUser3"],
      "failed": ["nachoUser1", "nachoUser6"],
      "tokenNotFound": ["nachoUser4", "nachoUser5"]
    }
    ```

---

- **Error Response**

  - [Error Response](#v2-error-response-object-definition)

  - [에러코드](#v2-push-common-error-code-definition)

<br/><br/><hr style={{ border: "1px solid #8E8C8C"}} /><br/>

## **상수 및 객체 상세 설명**

### PushOptions {#v2-push-options-definition}

푸시 전송 시 사용할 수 있는 옵션의 프로퍼티입니다.  
각 엔드포인트별 사용 가능한 옵션이 다르므로, 각 엔드포인트 **Request**에 기재된 프로퍼티 종류를 참고하세요.

- **Constraint**

  | **Name**       | **Type**  | **Required** | **Constraints**                                                                                                                                                                                                                                                                                                                                                                                                   | **Description**       | **Since (App Source)** |
  | -------------- | --------- | ------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------- | ---------------------- |
  | isUsingBadge   | `boolean` |              |                                                                                                                                                                                                                                                                                                                                                                                                                   | 푸시 뱃지 제어 여부   | ver.1.5.0              |
  | requestGroupId | `string`  |              | <i style={{fontSize: "13px"}}>**문자 구성**: 영어 대소문자, 숫자, 특수문자<br/> **필수 조건**: 영어 대소문자 반드시 포함<br/> **길이 제한**: 5~20자리 문자열<br/> **제외 문자**: 작은따옴표(\'), 큰따옴표(\"), 백슬래시(\), 백틱(\`)</i>                                                                                                                                                                          | 푸시 전송 내역 고유값 |                        |
  | scheduleTime   | `string`  |              | <i style={{fontSize: "13px"}}>**입력 시간 형식**: `YYYY-MM-DDTHH:MM` (ISO 8601 형식)<br/>- 정규표현식: `^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}$`<br/>- ex: `2026-01-07T22:00`<br/><br/>**예약 시간 제한**: API 호출 시점 기준 **최소 60초 이후** 시간만 예약 가능<br/>- ex: 현재 시간이 `22:04:30`인 경우, `22:05:00`은 예약 불가 (30초 후)<br/>- ex: 현재 시간이 `22:04:30`인 경우, `22:06:00`은 예약 가능 (90초 후)</i> | 예약 시간             |                        |

---

- **Detail Description**

  | **Name**       | **Description**                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
  | -------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
  | isUsingBadge   | 이 설정은 플랫폼(android, ios)에 따라 동작 방식에 차이가 있습니다. <br/><br/> [**Android**] <br/> OS레벨에서 뱃지 기능을 자동으로 처리하므로, `isUsingBadge`설정값과 관계없이<br/> android정책에 따라 알림 뱃지가 자연스럽게 나타납니다. <br/><br/> [**iOS**] <br/> 알림이 하나 이상 도착하면 앱 아이콘에 '**1**'이 이미지가 나타납니다. <br/>실제 알림 개수와 관계없이 뱃지 숫자가 항상 '**1**'로 표시되고, 이는 **푸시가 도착했음을 표시**하는 용도로 활용 가능합니다. <br/>알림 건수 누적 기능의 경우, 추후 업데이트 예정입니다. <br/><br/>&nbsp;⚠️<br/><i style={{fontSize: "13px"}}>- **25년 04월 23일 이후로 빌드된 앱**(App Source ver.1.5.0)에만 뱃지가 노출됩니다.</i> |
  | requestGroupId | **여러 개의 분리된 푸시 요청을 하나의 히스토리로 묶어 관리**할 수 있도록 하는 옵션입니다.<br/>개수 제한으로 동일한 내용을 반복 전송하는 경우 또는 하나의 히스토리로써 관리할 푸시에 유용하게 사용됩니다.<br/><br/>&nbsp;⚠️<br/><i style={{fontSize: "13px"}}>- **연관성이 약한 푸시 요청(ex: 서로 다른 내용)들에** 대하여 동일한 `requestGroupId` 를 부여할 경우, 무관한 히스토리가 하나로 합쳐져 부정확한 데이터가 표시됩니다.</i><br/>- <i style={{fontSize: "13px"}}>최대 20자리 문자열을 사용하므로 충돌 가능성은 낮지만, **필요 시 별도의 관리 전략**을 권장합니다.</i>                                                                                                    |
  | scheduleTime   | 푸시 알림을 **특정 시간에 예약하여 전송**할 수 있도록 하는 옵션입니다.<br/>ISO 8601 형식(`YYYY-MM-DDTHH:MM`)으로 시간을 지정하며, API 호출 시점 기준 **최소 60초 이후**의 시간만 예약 가능합니다.<br/><br/>예약된 푸시는 지정된 시간에 자동으로 전송되며, **전송 시간 5분 전까지는 나쵸코드 대시보드를 통해 취소, 수정**이 가능합니다.                                                                                                                                                                                                                                                                                                                                          |

---

<br/><hr style={{border: "1px dashed #8E8C8C", opacity: "0.2"}}/><br/>

### Message {#v2-message-object-definition}

- **Property**

  | **Parameter** | **Type** | **Required** | **Constraints**                                                                                                                                                                                                                                                                                                                                                                                     | **Description**             |
  | ------------- | -------- | ------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------- |
  | userId        | `string` | ✔           |                                                                                                                                                                                                                                                                                                                                                                                                     | 유저 ID                     |
  | title         | `string` | ✔           |                                                                                                                                                                                                                                                                                                                                                                                                     | 푸시 알림 제목              |
  | content       | `string` | ✔           |                                                                                                                                                                                                                                                                                                                                                                                                     | 푸시 알림 내용              |
  | linkURL       | `string` |              | 길이 255이하의 문자열                                                                                                                                                                                                                                                                                                                                                                               | 푸시 클릭 시 이동할 URL     |
  | imageURL      | `string` |              | - 길이 500이하의 문자열<br/> - [App Source](/docs/guide/app-source) ver.1.6.0이상의 앱 <br/> <i style={{fontSize: "13px"}}>&nbsp;&nbsp;(25년 06월 11일 이후 빌드된 앱에서만 노출) <br/><br/> ⚠️FCM정책에 따라 아래 조건에서는 이미지가 노출되지 않을 수 있습니다.<br/> - SSL인증이 되지 않은 **http프로토콜 링크**<br/> - 용량이 **1MB**를 초과하는 이미지<br/> - **리다이렉션 처리 되는 링크**</i> | 푸시에 표시될 이미지의 링크 |

- **Example**

  ```json
  {
    "userId": "nachoUser1",
    "title": "나쵸코드 업데이트",
    "content": "새로운 기능이 추가되었습니다.",
    "linkURL": "https://nachocode.io",
    "imageURL": "https://example.com/images/sample-image.jpg" // since App Source ver.1.6.0
  }
  ```

<br/><hr style={{border: "1px dashed #8E8C8C", opacity: "0.2"}}/><br/>

### NachoTopic {#v2-nacho-topic-constant-definition}

- **Description**

  - 나쵸코드에서 자동으로 관리하는 토픽 상수입니다.  
    [`/api/push/v2/nacho-topic`](#post-v2-nacho-topic) 엔드포인트의 `topicName` 파라미터에 사용됩니다.
  - 나쵸토픽 상수는 나쵸코드에서 관리되며, 향후 추가될 수 있습니다.

- **Type**: `'ALL'`

- **Values**

  | **Value** | **Description**                    |
  | --------- | ---------------------------------- |
  | `'ALL'`   | 모든 디바이스에 푸시를 전송합니다. |

- **Example**

  ```json
  {
    "header": { "x-api-key": "APIKEYVALUE", "x-secret-key": "SECRETKEYVALUE" },
    "body": {
      "topicName": "ALL",
      "title": "전체 공지",
      "content": "모든 사용자에게 전송되는 공지사항입니다."
    }
  }
  ```

<br/><hr style={{border: "1px dashed #8E8C8C", opacity: "0.2"}}/><br/>

### SubscriptionResult {#v2-subscription-result-object-definition}

- **Property**

  | **Parameter** | **Type**   | **Description**                                                                              |
  | ------------- | ---------- | -------------------------------------------------------------------------------------------- |
  | success       | `string[]` | userId를 통해 등록된 토큰이 존재하였고, 요청된 동작에 성공한 userId들의 목록                 |
  | failed        | `string[]` | userId를 통해 등록된 토큰이 존재했지만, 요청된 동작에 실패한 userId들의 목록                 |
  | tokenNotFound | `string[]` | 토큰을 보유하지 않은 유저 ID목록                                                             |
  | tokenDeleted  | `string[]` | FCM으로부터 '유효하지 않은 토큰'이라는 결과를 반환받아 삭제처리된 토큰의 소유자(유저) ID목록 |

  \* _유저가 여러개의 토큰을 보유하고 있을 경우, `failed`, `success`, `tokenDeleted`항목에 동일한 userId가 존재할 수 있습니다._

- **Example**

  ```json
  {
    "success": ["nachoUser1", "nachoUser2", "nachoUser3"],
    "notFound": ["nachoUser4", "nachoUser5"],
    "failed": ["nachoUser1", "nachoUser6"]
  }
  ```

<br/><hr style={{border: "1px dashed #8E8C8C", opacity: "0.2"}}/><br/>

### PushTokenManipulationResult {#v2-push-token-manipulation-result-object-definition}

- **Property**

  | **Parameter** | **Type**   | **Description**                                                                                                  |
  | ------------- | ---------- | ---------------------------------------------------------------------------------------------------------------- |
  | success       | `string[]` | userId를 통해 등록된 토큰이 존재하였고, 삭제에 성공한 userId들의 목록                                            |
  | failed        | `string[]` | 삭제에 실패한 userId들의 목록 <span style={{fontSize: "12px"}}>(토큰 발견여부를 판별하기에 부적합합니다.)</span> |
  | tokenNotFound | `string[]` | userId를 통해 토큰이 발견되지 않은 userId들의 목록                                                               |

  \* _유저가 여러개의 토큰을 보유하고 있을 경우, `success`, `failed` 항목에 동일한 userId가 존재할 수 있습니다._

- **Example**

  ```json
  {
    "success": ["nachoUser1", "nachoUser2", "nachoUser3"],
    "tokenNotFound": ["nachoUser4", "nachoUser5"],
    "failed": ["nachoUser1", "nachoUser6"]
  }
  ```

<br/><hr style={{border: "1px dashed #8E8C8C", opacity: "0.2"}}/><br/>

### Error Response {#v2-error-response-object-definition}

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

<br/><hr style={{border: "1px dashed #8E8C8C", opacity: "0.2"}}/><br/>

## **공통 에러코드** {#v2-push-common-error-code-definition}

샌드박스 혹은 운영환경에서 아래에 명세되지 않은 에러 코드를 수신받을 경우 나쵸코드로 문의해주세요.

| **ErrorCode** | **StatusCode** | **Message**                                                                                              | **Description**                   |
| ------------- | -------------- | -------------------------------------------------------------------------------------------------------- | --------------------------------- |
| ERR-AB-VAL-00 | 400            | <span style={{fontSize: "13px"}}>Incorrect request. Server cannot understand request.</span>             | 요청 Body 데이터가 잘못된 경우    |
| ERR-AB-SGK-11 | 400            | <span style={{fontSize: "13px"}}>Secret key not found.</span>                                            | Secret Key가 전달되지 않았을 경우 |
| ERR-AB-SGK-13 | 401            | <span style={{fontSize: "13px"}}>Incorrect secret key.</span>                                            | 유효하지 않은 Secret Key          |
| ERR-AB-KSY-11 | 400            | <span style={{fontSize: "13px"}}>Required parameters missing.</span>                                     | API Key가 전달되지 않았을 경우    |
| ERR-AB-KSY-13 | 404            | <span style={{fontSize: "13px"}}>Provided key information not found. Please check your key again.</span> | 유효하지 않은 API Key             |
| ERR-AB-AGK-11 | 400            | <span style={{fontSize: "13px"}}>Api key not found.</span>                                               | Api Key가 전달되지 않았을 경우    |
| ERR-AB-AGK-12 | 400            | <span style={{fontSize: "13px"}}>Invalid api key type.</span>                                            | 유효하지 않은 API Key             |
