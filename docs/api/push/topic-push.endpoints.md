---
sidebar_label: 토픽 푸시 전송, 구독 관리
pagination_label: 토픽 푸시 전송, 구독 관리
description: nachocode 토픽 푸시 API의 모든 엔드포인트에 대한 요청과 응답 구조 및 사용 방법을 안내합니다.
keywords:
  [
    토픽 푸시,
    그룹 푸시,
    세그먼트 푸시,
    그룹화 푸시,
    구독형 푸시,
    예약 푸시,
    스케줄 푸시,
    푸시 알림,
    타겟 푸시,
    타겟 알림,
    마케팅 푸시,
    고객 마케팅,
    사용자 맞춤 메시지,
    나쵸코드 푸시,
    nachocode 푸시,
    푸시 API,
  ]
image: /img/docs/thumbnails/API/push.png
---

# 토픽 푸시 알림 API Endpoints

import { ThumbnailImage } from '@site/src/components/common/image/thumbnail-image';

<ThumbnailImage src='/img/docs/thumbnails/API/push.png'/>

> 🔔 **최신화 일자:** 2026-01-12

<!-- 2026-01-12 최초 생성(endpoint페이지 분리) / 기존 토픽푸시 API 페이지 분리 생성 -->

<br/>

nachocode 토픽 푸시 API는 다양한 엔드포인트를 제공하여 푸시 토픽 관리 및 전송을 지원합니다.

이 문서에서는 **API 사용법**, **요청/응답 형식**, **에러 케이스** 등을 다룹니다.

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

  | **Parameter** | **Type**                                        | **Required** | **Constraints**                                                                                                                                                                                                                                                                                                                                                                                     | **Description**             |
  | ------------- | ----------------------------------------------- | ------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------- |
  | topicName     | `string`                                        | ✔           | 길이 500이하의 문자열                                                                                                                                                                                                                                                                                                                                                                               | 푸시를 전송할 토픽명        |
  | title         | `string`                                        | ✔           |                                                                                                                                                                                                                                                                                                                                                                                                     | 푸시 알림 제목              |
  | content       | `string`                                        | ✔           |                                                                                                                                                                                                                                                                                                                                                                                                     | 푸시 알림 내용              |
  | linkURL       | `string`                                        |              | 길이 255이하의 문자열                                                                                                                                                                                                                                                                                                                                                                               | 푸시 클릭 시 이동할 URL     |
  | imageURL      | `string`                                        |              | - 길이 500이하의 문자열<br/> - [App Source](/docs/guide/app-source) ver.1.6.0이상의 앱 <br/> <i style={{fontSize: "13px"}}>&nbsp;&nbsp;(25년 06월 11일 이후 빌드된 앱에서만 노출) <br/><br/> ⚠️FCM정책에 따라 아래 조건에서는 이미지가 노출되지 않을 수 있습니다.<br/> - SSL인증이 되지 않은 **http프로토콜 링크**<br/> - 용량이 **1MB**를 초과하는 이미지<br/> - **리다이렉션 처리 되는 링크**</i> | 푸시에 표시될 이미지의 링크 |
  | options       | [`PushOptions`](#topic-push-options-definition) |              |                                                                                                                                                                                                                                                                                                                                                                                                     | 푸시 상세 옵션              |

  <br/>

- **Example**

  ```bash
  curl -X POST "https://app.nachocode.io/api/push/v2/topic" \
    -H "Content-Type: application/json" \
    -H "x-api-key: API_KEY_VALUE" \
    -H "x-secret-key: SECRET_KEY_VALUE" \
    -d '{
      "topicName": "TOPIC_EVENT_AD"
      "title": "업데이트 전체 알림",
      "content": "나쵸코드 이용자 여러분 새로운 기능이 추가되었습니다.",
      "linkURL": "https://SERVICE_DOMAIN",
      "imageURL": "https://IMAGE_DOMAIN/path/sample-image.jpg"
      "options": {
        "isUsingBadge": true,
        "scheduleTime": "2026-01-01T09:00"
      }
    }'
  ```

<hr style={{border: "1px dashed #8E8C8C", opacity: "0.2"}}/>

### Response {#post-v2-topic-response}

- **Success Response**

  - **Property**

    | **Properties** | **Type**            | **Description**           |
    | -------------- | ------------------- | ------------------------- |
    | status         | `number`            | HTTP 응답 상태 코드 (200) |
    | response       | `{message: string}` | 요청 성공 문자열          |

  - **Example**

    ```json
    { "message": "Push send request was successful." }
    ```

---

- **Error Response**

  - [Error Response](#topic-push-error-response-object-definition)

  - 에러코드

    <i style={{fontSize: "14px"}}>이 외 에러코드는 공통 [에러코드 명세](#topic-push-common-error-code-definition)에서 확인 가능합니다.</i>

    | **ErrorCode** | **Status Code** | **Message**                      | **Description**                      |
    | ------------- | --------------- | -------------------------------- | ------------------------------------ |
    | ERR-AB-PSS-91 | 404             | App data not found.              | 미등록 앱                            |
    | ERR-AB-PSS-92 | 404             | FCM Account data not found.      | FCM Service Account파일 미등록       |
    | ERR-AB-CST-51 | 400             | No topics are available to send. | 전송이 불가하거나 존재하지 않는 토픽 |

<br/><br/><hr style={{ border: "1px solid #8E8C8C"}} /><br/>

## **[POST] `/api/push/v2/topic/subscription`** {#post-v2-topic-subscription}

### 설명 {#post-v2-topic-subscription-summary}

- SDK의 [`registerPushToken()`](../../sdk/namespaces/push#register-push-token)을 통해 토큰이 등록된 유저에 한하여, 해당 유저들의 토큰을 토픽에 구독시킵니다.
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

  ```bash
  curl -X POST "https://app.nachocode.io/api/push/v2/topic/subscription" \
    -H "Content-Type: application/json" \
    -H "x-api-key: API_KEY_VALUE" \
    -H "x-secret-key: SECRET_KEY_VALUE" \
    -d '{
      "userIds": ["USER_ID_1", "USER_ID_2", "USER_ID_3", ...],
      "topicName": "TOPIC_NAME",
    }'
  ```

<hr style={{border: "1px dashed #8E8C8C", opacity: "0.2"}}/>

### Response {#post-v2-topic-subscription-response}

- **Success Response**

  - **Property**

    | **Properties** | **Type**                                                                  | **Description**                                               |
    | -------------- | ------------------------------------------------------------------------- | ------------------------------------------------------------- |
    | status         | `number`                                                                  | HTTP 응답 상태 코드 (200)                                     |
    | response       | [`SubscriptionResult`](#topic-push-subscription-result-object-definition) | 구독 성공, 구독 실패, 등록된 토큰 부재, 토큰 삭제 유저의 목록 |

  - **Example**

    ```json
    {
      "success": ["USER_ID_1", "USER_ID_2", "USER_ID_3"],
      "tokenNotFound": ["USER_ID_4", "USER_ID_5"],
      "tokenDeleted": ["USER_ID_7", "USER_ID_8", "USER_ID_9"],
      "failed": ["USER_ID_6"]
    }
    ```

---

- **Error Response**

  - [Error Response Object](#topic-push-error-response-object-definition)

  - 에러코드

    <i style={{fontSize: "14px"}}>이 외 에러코드는 공통 [에러코드 명세](#topic-push-common-error-code-definition)에서 확인 가능합니다.</i>

    | **ErrorCode** | **Status Code** | **Message**                 | **Description**                |
    | ------------- | --------------- | --------------------------- | ------------------------------ |
    | ERR-AB-PSS-91 | 404             | App data not found.         | 미등록 앱                      |
    | ERR-AB-PSS-92 | 404             | FCM Account data not found. | FCM Service Account파일 미등록 |

<br/><br/><hr style={{ border: "1px solid black", opacity: "0.5"}} /><br/>

## **[DELETE] `/api/push/v2/topic/subscription`** {#delete-v2-topic-subscription}

### 설명 {#delete-v2-topic-subscription-summary}

- SDK의 [`registerPushToken()`](../../sdk/namespaces/push#register-push-token)을 통해 토큰이 등록된 유저에 한하여, 해당 유저들의 토큰을 토픽에서 구독을 해제합니다.
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

  ```bash
  curl -X DELETE "https://app.nachocode.io/api/push/v2/topic/subscription" \
    -H "Content-Type: application/json" \
    -H "x-api-key: API_KEY_VALUE" \
    -H "x-secret-key: SECRET_KEY_VALUE" \
    -d '{
      "userIds": ["USER_ID_1", "USER_ID_2", "USER_ID_3", ...],
      "topicName": "TOPIC_NAME",
    }'
  ```

<hr style={{border: "1px dashed #8E8C8C", opacity: "0.2"}}/>

### Response {#delete-v2-topic-subscription-response}

- **Success Response**

  - **Property**

    | **Properties** | **Type**                                                                  | **Description**                                                     |
    | -------------- | ------------------------------------------------------------------------- | ------------------------------------------------------------------- |
    | status         | `number`                                                                  | HTTP 응답 상태 코드 (202)                                           |
    | response       | [`SubscriptionResult`](#topic-push-subscription-result-object-definition) | 구독해제 성공, 구독해제 실패, 등록 토큰 부재, 토큰 삭제 유저의 목록 |

  - **Example**

    ```json
    {
      "success": ["USER_ID_1", "USER_ID_2", "USER_ID_3"],
      "tokenNotFound": ["USER_ID_4", "USER_ID_5"],
      "tokenDeleted": ["USER_ID_7", "USER_ID_8", "USER_ID_9"],
      "failed": ["USER_ID_6"]
    }
    ```

---

- **Error Response**

  - [Error Response](#topic-push-error-response-object-definition)

  - 에러코드

    <i style={{fontSize: "14px"}}>이 외 에러코드는 공통 [에러코드 명세](#topic-push-common-error-code-definition)에서 확인 가능합니다.</i>

    | **ErrorCode** | **Status Code** | **Message**                 | **Description**                |
    | ------------- | --------------- | --------------------------- | ------------------------------ |
    | ERR-AB-PSS-91 | 404             | App data not found.         | 미등록 앱                      |
    | ERR-AB-PSS-92 | 404             | FCM Account data not found. | FCM Service Account파일 미등록 |

<br/><br/><hr style={{ border: "1px solid #8E8C8C"}} /><br/>

## **상수 및 객체 상세 설명**

### PushOptions {#topic-push-options-definition}

토픽 푸시 전송 시 사용할 수 있는 옵션의 프로퍼티입니다.

- **Constraint**

  | **Name**     | **Type**  | **Required** | **Constraints** | **Description**     | **Since (App Source)** |
  | ------------ | --------- | ------------ | --------------- | ------------------- | ---------------------- |
  | isUsingBadge | `boolean` |              |                 | 푸시 뱃지 제어 여부 | ver.1.5.0              |

---

- **Detail Description**

  | **Name**     | **Description**                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
  | ------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
  | isUsingBadge | 이 설정은 플랫폼(android, ios)에 따라 동작 방식에 차이가 있습니다. <br/><br/> [**Android**] <br/> OS레벨에서 뱃지 기능을 자동으로 처리하므로, `isUsingBadge`설정값과 관계없이<br/> android정책에 따라 알림 뱃지가 자연스럽게 나타납니다. <br/><br/> [**iOS**] <br/> 알림이 하나 이상 도착하면 앱 아이콘에 '**1**'이 이미지가 나타납니다. <br/>실제 알림 개수와 관계없이 뱃지 숫자가 항상 '**1**'로 표시되고, 이는 **푸시가 도착했음을 표시**하는 용도로 활용 가능합니다. <br/>알림 건수 누적 기능의 경우, 추후 업데이트 예정입니다. <br/><br/>&nbsp;⚠️<br/><i style={{fontSize: "13px"}}>- **25년 04월 23일 이후로 빌드된 앱**(App Source ver.1.5.0)에만 뱃지가 노출됩니다.</i> |

---

<br/><hr style={{border: "1px dashed #8E8C8C", opacity: "0.2"}}/><br/>

### SubscriptionResult {#topic-push-subscription-result-object-definition}

- **Property**

  | **Parameter** | **Type**   | **Description**                                                                              |
  | ------------- | ---------- | -------------------------------------------------------------------------------------------- |
  | success       | `string[]` | userId를 통해 등록된 토큰이 존재하였고, 요청된 동작에 성공한 userId들의 목록                 |
  | tokenNotFound | `string[]` | 토큰을 보유하지 않은 유저 ID목록                                                             |
  | tokenDeleted  | `string[]` | FCM으로부터 '유효하지 않은 토큰'이라는 결과를 반환받아 삭제처리된 토큰의 소유자(유저) ID목록 |
  | failed        | `string[]` | userId를 통해 등록된 토큰이 존재했지만, 요청된 동작에 실패한 userId들의 목록                 |

  \* _유저가 여러개의 토큰을 보유하고 있을 경우, `failed`, `success`, `tokenDeleted`항목에 동일한 userId가 존재할 수 있습니다._

- **Example**

  ```json
  {
    "success": ["USER_ID_1", "USER_ID_2", "USER_ID_3"],
    "tokenNotFound": ["USER_ID_4", "USER_ID_5"],
    "tokenDeleted": ["USER_ID_7", "USER_ID_8", "USER_ID_9"],
    "failed": ["USER_ID_6"]
  }
  ```

<br/><hr style={{border: "1px dashed #8E8C8C", opacity: "0.2"}}/><br/>

### Error Response {#topic-push-error-response-object-definition}

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

## **공통 에러코드** {#topic-push-common-error-code-definition}

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
