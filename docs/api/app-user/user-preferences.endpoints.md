---
sidebar_label: 마케팅 동의 관리
pagination_label: 마케팅 동의 관리
description: nachocode 앱 유저 마케팅 동의 관리 API의 모든 엔드포인트에 대한 요청과 응답 구조 및 사용 방법을 안내합니다.
keywords:
  [
    마케팅 동의,
    마케팅 푸시 동의,
    유저 설정 관리,
    사용자 설정 관리,
    유저 상태 관리,
    사용자 상태 관리,
    CRM,
  ]
image: /img/docs/thumbnails/API/push.png
---

# 유저 마케팅 동의 관리 API Endpoints

import { ThumbnailImage } from '@site/src/components/common/image/thumbnail-image';

<ThumbnailImage src='/img/docs/thumbnails/API/push.png'/>

> 🔔 **최신화 일자:** 2026-06-05

<!-- 2026-06-05 최초 생성 / 마케팅 푸시 회원 탈퇴 관리 API 생성 -->

<br/>

nachocode 회원 마케팅 동의 관리 API를 활용하여 회원의 마케팅 동의 여부를 관리 할 수 있습니다.

이 문서에서는 **API 사용법**, **요청/응답 형식**, **에러 케이스** 등을 다룹니다.

<!-- @todo: 채널톡 문의로 유도하는게 나을까요? 그리고 관련 법률을 안내하는 링크가 필요할까요? (전체푸시 API Endpoint에도?)-->

:::info 멤버십 등급 제한 기능
아래 API Endpoint는 **비즈니스 멤버십 이상** 사용 가능한 API로 nachocode 문의를 통해 기능 활성화가 가능합니다.

:::

:::info 마케팅 푸시

<!-- 나쵸코드 대시보드에서 전송 가능한 마케팅 관련 푸시 전송 시, 유저 마케팅 동의값에 따라 전송 여부가 결정됩니다. -->

마케팅 푸시 전송 시 유저 마케팅 동의값에 따라 전송 여부가 결정됩니다.

:::

## **[PUT] `/api/app-user/v2/marketing`** {#put-app-user-v2-marketing}

### 설명 {#put-app-user-v2-marketing-summary}

- SDK의 [`setUserId()`](../../sdk/namespaces/user#set-user-id) 또는 [`registerPushToken()`](../../sdk/namespaces/push.md#register-push-token)을 통해 등록된 **유저와 유저가 보유중인 모든 토큰의 광고성 푸시 동의값을 변경**합니다.
- 유저와 유저가 보유중인 모든 디바이스의 **마케팅 푸시 수신 동의 여부를 동기화**합니다.

<hr style={{border: "1px dashed #8E8C8C", opacity: "0.2"}}/>

### Request {#put-app-user-v2-marketing-request}

- **Header**

  | **Parameter** | **Type** | **Required** | **Description** |
  | ------------- | -------- | ------------ | --------------- |
  | x-api-key     | `string` | ✔           | API 키          |
  | x-secret-key  | `string` | ✔           | Secret 키       |

- **Body**

  | **Parameter**    | **Type**                                                                             | **Required** | **Constraints** | **Description**                                    |
  | ---------------- | ------------------------------------------------------------------------------------ | ------------ | --------------- | -------------------------------------------------- |
  | userId           | `string \| number`                                                                   | ✔           |                 | 동의값을 변경할 유저 ID                            |
  | state            | [`UserMarketingPreferenceState`](#user-marketing-preference-state-object-definition) | ✔           |                 | 변경할 마케팅 동의값                               |
  | ignoreWithdrawal | `boolean`                                                                            |              |                 | 요청된 사용자가 탈퇴된 회원일 시, 정상 유저로 전환 |

  <br/>

  #### UserMarketingPreferenceState \{#user-marketing-preference-state-object-definition}

  | **Parameter**  | **Type**  | **Required** | **Constraints**                                                                                    | **Description**                 |
  | -------------- | --------- | ------------ | -------------------------------------------------------------------------------------------------- | ------------------------------- |
  | marketing      | `boolean` |              |                                                                                                    | 마케팅 푸시 수신 동의 여부      |
  | marketingNight | `boolean` |              | <i style={{fontSize: "14px"}}>`{ marketing: false }`일 때, <br/>`{ marketingNight: true }`불가</i> | 야간 마케팅 푸시 수신 동의 여부 |

  _\* <i style={{fontSize: "14px"}}>변경할 항목만을 파라미터로 전달합니다. (ex: `{"marketingNight": true}`)</i>_

  <br/>

- **Example**

  ```bash
  curl -X POST "https://app.nachocode.io/api/app-user/v2/marketing" \
    -H "Content-Type: application/json" \
    -H "x-api-key: API_KEY_VALUE" \
    -H "x-secret-key: SECRET_KEY_VALUE" \
    -d '{
        "userId": "USER_ID_VALUE",
        "ignoreWithdrawal": true,
        "state": {
          "marketing": true,
          "marketingNight": true
        }
      }'
  ```

<hr style={{border: "1px dashed #8E8C8C", opacity: "0.2"}}/>

### Response {#put-app-user-v2-marketing-response}

- **Success Response**

  - **Property**

    | **Properties** | **Type** | **Description**           |
    | -------------- | -------- | ------------------------- |
    | status         | `number` | HTTP 응답 상태 코드 (200) |
    | response       | `@todo`  | 요청 결과                 |

  - **Example**

    ```json
    { "marketing": true, "marketingNight": true }
    ```

---

- **Error Response**

  - [Error Response](#put-app-user-v2-marketing-error-response-object-definition)

  - 에러코드

    <i style={{fontSize: "14px"}}>이 외 에러코드는 공통 [에러코드 명세](#user-preferences-common-error-code-definition)에서 확인 가능합니다.</i>

    | **ErrorCode** | **Status Code** | **Message**                                   | **Description**                        |
    | ------------- | --------------- | --------------------------------------------- | -------------------------------------- |
    | ERR-AB-ACS-02 | 400             | This app is unable to handle user preference. | 유저 동의값 관리 기능이 사용 불가한 앱 |
    | ERR-AB-ACS-02 | 410             | User already withdrawn.                       | 이미 탈퇴처리된 유저                   |

<hr style={{border: "1px dashed #8E8C8C", opacity: "0.2"}}/>

### Error Response {#put-app-user-v2-marketing-error-response-object-definition}

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

## **공통 에러코드** {#user-preferences-common-error-code-definition}

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
