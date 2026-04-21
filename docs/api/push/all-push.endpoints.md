---
sidebar_label: 전체 푸시 전송
pagination_label: 전체 푸시 전송
description: nachocode 전체 푸시 API의 모든 엔드포인트에 대한 요청과 응답 구조 및 사용 방법을 안내합니다.
keywords:
  [
    전체 푸시,
    전체 푸시 알림,
    토픽 푸시,
    그룹 푸시,
    구독 알림,
    예약 푸시,
    스케줄 푸시,
    푸시 알림,
    타겟 푸시,
    타겟 알림,
    마케팅 푸시,
    고객 마케팅,
    나쵸코드 푸시,
    nachocode 푸시,
    푸시 API,
  ]
image: /img/docs/thumbnails/API/push.png
---

# 전체 푸시 알림 API Endpoints

import { ThumbnailImage } from '@site/src/components/common/image/thumbnail-image';

<ThumbnailImage src='/img/docs/thumbnails/API/push.png'/>

> 🔔 **최신화 일자:** 2026-01-13

<!-- 2026-01-12 최초 생성(endpoint페이지 분리) / 전체푸시 API 생성 -->

<br/>

nachocode 전체 푸시 API는 다양한 엔드포인트를 제공하여 푸시 알림 관리 및 전송을 지원합니다.

이 문서에서는 **API 사용법**, **요청/응답 형식**, **에러 케이스** 등을 다룹니다.

## **[POST] `/api/push/v2/all`** {#post-v2-all}

### 설명 {#post-v2-all-summary}

- 토큰 등록 여부, 회원 여부에 관계없이 **앱이 설치된 모든 디바이스**로 푸시 알림을 전송합니다.
- 전체 푸시 전송 요청 건수에 따라 차감됩니다.

<hr style={{border: "1px dashed #8E8C8C", opacity: "0.2"}}/>

### Request {#post-v2-all-request}

- **Header**

  | **Parameter** | **Type** | **Required** | **Description** |
  | ------------- | -------- | ------------ | --------------- |
  | x-api-key     | `string` | ✔           | API 키          |
  | x-secret-key  | `string` | ✔           | Secret 키       |

- **Body**

  | **Parameter** | **Type**                                         | **Required** | **Constraints**                                                                                                                                                                                                                                                                                                                                                                                     | **Description**             |
  | ------------- | ------------------------------------------------ | ------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------- |
  | title         | `string`                                         | ✔           |                                                                                                                                                                                                                                                                                                                                                                                                     | 푸시 알림 제목              |
  | content       | `string`                                         | ✔           |                                                                                                                                                                                                                                                                                                                                                                                                     | 푸시 알림 내용              |
  | linkURL       | `string`                                         |              | 길이 255이하의 문자열                                                                                                                                                                                                                                                                                                                                                                               | 푸시 클릭 시 이동할 URL     |
  | imageURL      | `string`                                         |              | - 길이 500이하의 문자열<br/> - [App Source](/docs/guide/app-source) ver.1.6.0이상의 앱 <br/> <i style={{fontSize: "13px"}}>&nbsp;&nbsp;(25년 06월 11일 이후 빌드된 앱에서만 노출) <br/><br/> ⚠️FCM정책에 따라 아래 조건에서는 이미지가 노출되지 않을 수 있습니다.<br/> - SSL인증이 되지 않은 **http프로토콜 링크**<br/> - 용량이 **1MB**를 초과하는 이미지<br/> - **리다이렉션 처리 되는 링크**</i> | 푸시에 표시될 이미지의 링크 |
  | options       | [`AllPushOptions`](#all-push-options-definition) |              |                                                                                                                                                                                                                                                                                                                                                                                                     | 푸시 상세 옵션              |

- **Example**

  ```bash
  curl -X POST "https://app.nachocode.io/api/push/v2/all" \
    -H "Content-Type: application/json" \
    -H "x-api-key: API_KEY_VALUE" \
    -H "x-secret-key: SECRET_KEY_VALUE" \
    -d '{
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

### Response {#post-v2-all-response}

- **Success Response**

  - **Property**

    | **Properties** | **Type**              | **Description**           |
    | -------------- | --------------------- | ------------------------- |
    | status         | `number`              | HTTP 응답 상태 코드 (200) |
    | response       | `{ message: string }` | 요청 성공 문자열          |

  - **Example**

    ```json
    // case1. 즉시 발송
    { "message": "Push send request was successful." }

    // case2. 예약 발송
    { "message": "Push scheduling request was successful." }
    ```

---

- **Error Response**

  - [Error Response](#all-push-error-response-object-definition)

  - 에러코드

    <i style={{fontSize: "14px"}}>이 외 에러코드는 공통 [에러코드 명세](#v2-push-common-error-code-definition)에서 확인 가능합니다.</i>

    | **ErrorCode** | **Status Code** | **Message**                 | **Description**                |
    | ------------- | --------------- | --------------------------- | ------------------------------ |
    | ERR-AB-PSS-91 | 404             | App data not found.         | 미등록 앱                      |
    | ERR-AB-PSS-92 | 404             | FCM Account data not found. | FCM Service Account파일 미등록 |

  <br/><br/><hr style={{ border: "1px solid #8E8C8C"}} /><br/>

## **상수 및 객체 상세 설명**

### AllPushOptions {#all-push-options-definition}

전체 푸시 전송 시 사용할 수 있는 옵션의 프로퍼티입니다.

- **Constraint**

  | **Name**     | **Type**  | **Required** | **Constraints**                                                                                                                                                                                                                                                                                                                                                                                                   | **Description**     | **Since (App Source)** |
  | ------------ | --------- | ------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------- | ---------------------- |
  | isUsingBadge | `boolean` |              |                                                                                                                                                                                                                                                                                                                                                                                                                   | 푸시 뱃지 제어 여부 | ver.1.5.0              |
  | scheduleTime | `string`  |              | <i style={{fontSize: "13px"}}>**입력 시간 형식**: `YYYY-MM-DDTHH:MM` (ISO 8601 형식)<br/>- 정규표현식: `^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}$`<br/>- ex: `2026-01-07T22:00`<br/><br/>**예약 시간 제한**: API 호출 시점 기준 **최소 60초 이후** 시간만 예약 가능<br/>- ex: 현재 시간이 `22:04:30`인 경우, `22:05:00`은 예약 불가 (30초 후)<br/>- ex: 현재 시간이 `22:04:30`인 경우, `22:06:00`은 예약 가능 (90초 후)</i> | 예약 시간           |                        |

---

- **Detail Description**

  | **Name**     | **Description**                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
  | ------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
  | isUsingBadge | 이 설정은 플랫폼(android, ios)에 따라 동작 방식에 차이가 있습니다. <br/><br/> [**Android**] <br/> OS레벨에서 뱃지 기능을 자동으로 처리하므로, `isUsingBadge`설정값과 관계없이<br/> android정책에 따라 알림 뱃지가 자연스럽게 나타납니다. <br/><br/> [**iOS**] <br/> 알림이 하나 이상 도착하면 앱 아이콘에 '**1**'이 이미지가 나타납니다. <br/>실제 알림 개수와 관계없이 뱃지 숫자가 항상 '**1**'로 표시되고, 이는 **푸시가 도착했음을 표시**하는 용도로 활용 가능합니다. <br/>알림 건수 누적 기능의 경우, 추후 업데이트 예정입니다. <br/><br/>&nbsp;⚠️<br/><i style={{fontSize: "13px"}}>- **25년 04월 23일 이후로 빌드된 앱**(App Source ver.1.5.0)에만 뱃지가 노출됩니다.</i> |
  | scheduleTime | 푸시 알림을 **특정 시간에 예약하여 전송**할 수 있도록 하는 옵션입니다.<br/>ISO 8601 형식(`YYYY-MM-DDTHH:MM`)으로 시간을 지정하며, API 호출 시점 기준 **최소 60초 이후**의 시간만 예약 가능합니다.<br/><br/>예약된 푸시는 지정된 시간에 자동으로 전송되며, **전송 시간 5분 전까지는 나쵸코드 대시보드를 통해 취소, 수정**이 가능합니다.                                                                                                                                                                                                                                                                                                                                          |

---

<br/><hr style={{border: "1px dashed #8E8C8C", opacity: "0.2"}}/><br/>

### Error Response {#all-push-error-response-object-definition}

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
