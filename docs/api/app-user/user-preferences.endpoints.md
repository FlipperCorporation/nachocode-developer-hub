---
sidebar_label: 마케팅 동의 관리
pagination_label: 마케팅 동의 관리
description: nachocode 앱 유저의 마케팅 푸시 알림 수신 동의 관리 API의 모든 엔드포인트에 대한 요청과 응답 구조 및 사용 방법을 안내합니다.
keywords:
  [
    마케팅 동의,
    마케팅 푸시 동의,
    마케팅 푸시 알림 수신 동의,
    푸시알림 수신 동의,
    유저 설정 관리,
    사용자 설정 관리,
    유저 상태 관리,
    사용자 상태 관리,
    CRM,
  ]
image: /img/docs/thumbnails/API/appuser.png
---

# 마케팅 동의 관리 API Endpoints

import { ThumbnailImage } from '@site/src/components/common/image/thumbnail-image';

<ThumbnailImage src='/img/docs/thumbnails/API/appuser.png'/>

> 🔔 **최신화 일자:** 2026-06-16

<!-- 2026-06-05 최초 생성 / 마케팅 푸시 회원 탈퇴 관리 API 생성 -->

<br/>

nachocode 마케팅 수신 동의 관리 API를 활용하여 앱 유저의 마케팅 푸시 알림 동의 여부를 관리 할 수 있습니다.

이 문서에서는 **API 사용법**, **요청/응답 형식**, **에러 케이스** 등을 다룹니다.

:::info 공지

앱 유저 API는 [**비즈니스 멤버십 이상**](https://nachocode.io/pricing?utm_source=docs&utm_medium=documentation&utm_campaign=devguide)부터 사용 가능한 API로 nachocode 문의를 통해 기능 활성화가 가능합니다.

- 이메일 문의: [support@nachocode.io](mailto:support@nachocode.io)
- 채팅 문의: [https://nachocode.channel.io](https://nachocode.channel.io/home)

:::

:::tip 마케팅 푸시

마케팅 푸시 전송 요청 시 저장된 유저의 마케팅 푸시 알림 수신 동의 여부에 따라 전송 여부가 결정됩니다.

:::

## **[PUT] `/api/app-user/v2/marketing`** {#put-app-user-v2-marketing}

### 설명 {#put-app-user-v2-marketing-summary}

- SDK의 [`setUserId()`](../../sdk/namespaces/user#set-user-id) 또는 [`registerPushToken()`](../../sdk/namespaces/push.md#register-push-token)을 통해 등록된 **유저와 매핑된 모든 토큰의 광고성 푸시 알림 수신 동의 여부를 일괄 변경**합니다.
- 앱 환경이 아닌 환경에서 **마케팅 수신 동의 여부 변경**이 이뤄진 상황에 사용하기 적합합니다.

<hr style={{border: "1px dashed #8E8C8C", opacity: "0.2"}}/>

### Request {#put-app-user-v2-marketing-request}

- **Header**

  | **Parameter** | **Type** | **Required** | **Description** |
  | ------------- | -------- | ------------ | --------------- |
  | x-api-key     | `string` | ✔           | API 키          |
  | x-secret-key  | `string` | ✔           | Secret 키       |

- **Body**

  | **Parameter** | **Type**                                                                             | **Required** | **Constraints** | **Description**            |
  | ------------- | ------------------------------------------------------------------------------------ | ------------ | --------------- | -------------------------- |
  | userId        | `string \| number`                                                                   | ✔           |                 | 동의 여부를 변경할 유저 ID |
  | state         | [`UserMarketingPreferenceState`](#user-marketing-preference-state-object-definition) | ✔           |                 | 변경할 마케팅 동의 값      |

  <br/>

  #### UserMarketingPreferenceState \{#user-marketing-preference-state-object-definition}

  ```typescript
  declare type UserMarketingPreferenceState =
    | {
        marketing: true;
        marketingNight?: boolean;
      }
    | {
        marketing: false;
        marketingNight?: false;
      }
    | {
        marketingNight: boolean;
      };
  ```

  | **Parameter**  | **Type**  | **Required** | **Constraints**                                                                                    | **Description**                 |
  | -------------- | --------- | ------------ | -------------------------------------------------------------------------------------------------- | ------------------------------- |
  | marketing      | `boolean` | 조건부       |                                                                                                    | 마케팅 푸시 수신 동의 여부      |
  | marketingNight | `boolean` | 조건부       | <i style={{fontSize: "14px"}}>`{ marketing: false }`일 때, <br/>`{ marketingNight: true }`불가</i> | 야간 마케팅 푸시 수신 동의 여부 |

  _\* <i style={{fontSize: "14px"}}>변경할 항목을 파라미터로 전달합니다. (ex: `{"marketingNight": true}`)</i>_

  <br/>

- **Example**

  ```bash
  curl -X POST "https://app.nachocode.io/api/app-user/v2/marketing" \
    -H "Content-Type: application/json" \
    -H "x-api-key: API_KEY_VALUE" \
    -H "x-secret-key: SECRET_KEY_VALUE" \
    -d '{
        "userId": "USER_ID_VALUE",
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

    | **Properties** | **Type**                                        | **Description**                      |
    | -------------- | ----------------------------------------------- | ------------------------------------ |
    | status         | `number`                                        | HTTP 응답 상태 코드 (200)            |
    | response       | `{marketing: boolean, marketingNight: boolean}` | 갱신된 앱 유저 마케팅 수신 동의 여부 |

  - **Example**

    ```json
    { "marketing": true, "marketingNight": true }
    ```

---

- **Error Response**

  - [Error Response](#put-app-user-v2-marketing-error-response-object-definition)

  - 에러코드

    <i style={{fontSize: "14px"}}>이 외 에러코드는 공통 [에러코드 명세](#user-preferences-common-error-code-definition)에서 확인 가능합니다.</i>

    | **ErrorCode** | **Status Code** | **Message**                                   | **Description**             |
    | ------------- | --------------- | --------------------------------------------- | --------------------------- |
    | ERR-AB-ACS-31 | 403             | This app is unable to handle user preference. | 앱 유저 관리 기능 사용 불가 |
    | ERR-AB-ACS-32 | 410             | User withdrawn. Please re-register.           | 이미 탈퇴 처리된 유저       |

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
    "statusCode": 410,
    "path": "/api/app-user/marketing",
    "code": "ERR-AB-ACS-32",
    "message": "User withdrawn. Please re-register."
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
