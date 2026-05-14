---
sidebar_label: 푸시 토큰 관리
pagination_label: 푸시 토큰 관리
description: nachocode 푸시 토큰 관리 API의 모든 엔드포인트에 대한 요청과 응답 구조 및 사용 방법을 안내합니다.
keywords:
  [
    FCM 디바이스 토큰,
    FCM Device Token,
    푸시 토큰,
    푸시 토큰 등록해재,
    푸시 토큰 관리,
    푸시 토큰 제어,
    푸시 토픽 API,
    푸시 알림,
    개인화 푸시,
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

# 푸시 토큰 관리 API Endpoints

import { ThumbnailImage } from '@site/src/components/common/image/thumbnail-image';

<ThumbnailImage src='/img/docs/thumbnails/API/push.png'/>

> 🔔 **최신화 일자:** 2026-01-13

<!-- 2026-01-12 최초 생성(endpoint페이지 분리) / User ID로 토큰 삭제 API 생성 -->

<br/>

nachocode 푸시 토큰 관리 API를 활용하여 푸시 토큰을 관리 할 수 있습니다.

이 문서에서는 **API 사용법**, **요청/응답 형식**, **에러 케이스** 등을 다룹니다.

## **[DELETE] `/api/push/v2/token`** {#delete-v2-token}

### 설명 {#delete-v2-token-summary}

- SDK의 [`registerPushToken()`](../../sdk/namespaces/push.md#register-push-token)을 통해 토큰이 등록된 유저에 한하여, **해당 유저에게 매칭된 토큰을 모두** 삭제합니다.
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

  ```bash
  curl -X DELETE "https://app.nachocode.io/api/push/v2/token" \
    -H "Content-Type: application/json" \
    -H "x-api-key: API_KEY_VALUE" \
    -H "x-secret-key: SECRET_KEY_VALUE" \
    -d '{
      "userIds": ["USER_ID_1", "USER_ID_2", "USER_ID_3", ...]
    }'
  ```

<hr style={{border: "1px dashed #8E8C8C", opacity: "0.2"}}/>

### Response {#delete-v2-token-response}

- **Success Response**

  - **Property**

    | **Properties** | **Type**                                                           | **Description**                                          |
    | -------------- | ------------------------------------------------------------------ | -------------------------------------------------------- |
    | status         | `number`                                                           | HTTP 응답 상태 코드 (202)                                |
    | response       | [`DeleteTokenResult`](#delete-push-token-result-object-definition) | 토큰삭제 성공, 등록 토큰 부재, 토큰삭제 실패 유저의 목록 |

  - **Example**

    ```json
    {
      "success": ["USER_ID_1", "USER_ID_2", "USER_ID_3"],
      "tokenNotFound": ["USER_ID_5", "USER_ID_6"],
      "failed": ["USER_ID_4"]
    }
    ```

---

- **Error Response**

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
      "path": "/api/push/v2/token",
      "code": "ERR-AB-VAL-00",
      "message": "Incorrect request. Server cannot understand request."
    }
    ```

  - [에러코드](#push-token-common-error-code-definition)

<br/><br/><hr style={{ border: "1px solid #8E8C8C"}} /><br/>

## **상수 및 객체 상세 설명**

### DeletePushTokenResult {#delete-push-token-result-object-definition}

- **Property**

  | **Parameter** | **Type**   | **Description**                                                                                                  |
  | ------------- | ---------- | ---------------------------------------------------------------------------------------------------------------- |
  | success       | `string[]` | userId를 통해 등록된 토큰이 존재하였고, 삭제에 성공한 userId들의 목록                                            |
  | tokenNotFound | `string[]` | userId를 통해 토큰이 발견되지 않은 userId들의 목록                                                               |
  | failed        | `string[]` | 삭제에 실패한 userId들의 목록 <span style={{fontSize: "12px"}}>(토큰 발견여부를 판별하기에 부적합합니다.)</span> |

  \* _유저가 여러개의 토큰을 보유하고 있을 경우, `success`, `failed` 항목에 동일한 userId가 존재할 수 있습니다._

- **Example**

  ```json
  {
    "success": ["USER_ID_1", "USER_ID_2", "USER_ID_3"],
    "tokenNotFound": ["USER_ID_5", "USER_ID_6"],
    "failed": ["USER_ID_4"]
  }
  ```

<br/><hr style={{border: "1px dashed #8E8C8C", opacity: "0.2"}}/><br/>

## **공통 에러코드** {#push-token-common-error-code-definition}

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
