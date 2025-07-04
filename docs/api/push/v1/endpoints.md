---
sidebar_label: V1 API ⚠️
pagination_label: V1 API ⚠️
description: nachocode 개인화 푸시 API의 모든 엔드포인트에 대한 요청과 응답 구조 및 사용 방법을 안내합니다.
keywords:
  [
    푸시 알림,
    개인화 푸시,
    그룹 푸시,
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
---

# 푸시알림 V1 API Endpoints

> 🔔 **최신화 일자:** 2025-06-13

<!-- 2024-11-27 최초 생성/ V0버전 제외 V1버전만 생성 -->
<!-- 2025-03-27 V1버전 Deprecated처리 및 V2버전 신규 등록 -->
<!-- 2025-04-23 V1 Obsolete 예정 일 확정, isUsingBadge 옵션 추가 -->

:::warning

[V2버전](../v2/endpoints)이 Release됨에 따라 V1버전이 **Deprecated** 상태로 변경되었습니다.

**V1버전 종료일**: 2025년 10월 18일 23:59

**Obsolete** 예정 일 이 후, V1버전은 유지가 아닌 "**서비스 중지**"되는 점 양해 부탁드립니다.

:::

nachocode 푸시 API는 다양한 엔드포인트를 제공하여 푸시 알림 관리 및 전송을 지원합니다.

이 문서에서는 **API 사용법**, **요청/응답 형식**, **에러 케이스** 등을 다룹니다.

## **[POST] `/api/push/v1/messages`** <span style={{color:"#EA3E3E", fontSize:"20px"}}>(Deprecated)</span> {#post-v1-messages}

### 설명 {#post-v1-messages-summary}

- 개별적으로 설정된 메시지를 각 유저 ID의 푸시 토큰에 전송합니다.
- 요청된 유저의 총 푸시 토큰 수에 따라 요청 건수가 차감됩니다.

:::warning

Obsolete 예정 버전입니다. V2버전([`/v2/messages`](../v2/endpoints#post-v2-messages)) 사용을 권장합니다.

:::

<hr style={{border: "1px dashed #8E8C8C", opacity: "0.2"}}/>

### Request {#post-v1-messages-request}

- **Header**

  | **Parameter** | **Type** | **Required** | **Description** |
  | ------------- | -------- | ------------ | --------------- |
  | x-api-key     | `string` | ✔           | API 키          |
  | x-secret-key  | `string` | ✔           | Secret 키       |

- **Body**

  | **Parameter** | **Type**                | **Required** | **Description**    |
  | ------------- | ----------------------- | ------------ | ------------------ |
  | messages      | [`Message[]`](#message) | ✔           | 전송할 메시지 배열 |

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
      ]
    }
  }
  ```

<hr style={{border: "1px dashed #8E8C8C", opacity: "0.2"}}/>

### Response {#post-v1-messages-response}

- **Success Response**

  - **Property**

    | **Properties** | **Type** | **Description**                        |
    | -------------- | -------- | -------------------------------------- |
    | status         | `number` | HTTP 응답 상태 코드 (200)              |
    | response       | `object` | 성공/실패한 유저에 대한 상세 결과 정보 |

  - **Example**

    ```json
    {
      "requested": {
        "success": {
          "count": 3,
          "userIds": ["successUser1", "successUser2", "successUser3"]
        },
        "tokenNotFound": {
          "count": 2,
          "userIds": ["notFoundUser5", "notFoundUser6"]
        }
      },
      "failed": { "count": 2, "userIds": ["failedUser7", 123] }
    }
    ```

<br/>

- **Error Response**

  - [Error Response Object](#error-response-object)

  - 에러코드<br/>
    <span style={{fontSize: "12px"}}>(샌드박스 혹은 운영환경에서 아래에 명세되지 않은 에러 코드를 수신받을 경우 나쵸코드로 문의해주세요.)</span>

    | **ErrorCode** | **Status Code** | **Message**                                                                 | **Description**                         |
    | ------------- | --------------- | --------------------------------------------------------------------------- | --------------------------------------- |
    | ERR-AB-PSS-11 | 400             | Invalid key or messages.                                                    | 전송 요청된 메세지가 없을 경우(빈 배열) |
    | ERR-AB-PSS-52 | 404             | Account information has either never been registered or could not be found. | FCM Service Account파일 미등록          |

<br/><br/><hr style={{ border: "1px solid #8E8C8C"}} /><br/>

## **[POST] `/api/push/v1/users`**<span style={{color:"#EA3E3E", fontSize:"20px"}}>(Deprecated)</span> {#post-v1-users}

### 설명 {#post-v1-users-summary}

- 동일한 제목과 내용으로 여러 유저에게 푸시 알림을 전송합니다.
- 유저 ID로 조회된 모든 푸시 토큰을 대상으로 전송합니다.
- 유저 1명당 요청 건수를 차감합니다.

:::warning

Obsolete 예정 버전입니다. V2버전([`/v2/users`](../v2/endpoints#post-v2-users)) 사용을 권장합니다.

:::

<hr style={{border: "1px dashed #8E8C8C", opacity: "0.2"}}/>

### Request {#post-v1-users-request}

- **Header**

  | **Parameter** | **Type** | **Required** | **Description** |
  | ------------- | -------- | ------------ | --------------- |
  | x-api-key     | `string` | ✔           | API 키          |
  | x-secret-key  | `string` | ✔           | Secret 키       |

- **Body**

  | **Parameter** | **Type**               | **Required** | **Description**            |
  | ------------- | ---------------------- | ------------ | -------------------------- |
  | userIds       | `(string \| number)[]` | ✔           | 푸시를 전송할 유저 ID 배열 |
  | title         | `string`               | ✔           | 푸시 알림 제목             |
  | content       | `string`               | ✔           | 푸시 알림 내용             |
  | linkURL       | `string`               |              | 푸시 클릭 시 이동할 URL    |

<br/>

- **Example**

  ```json
  {
    "header": { "x-api-key": "APIKEYVALUE", "x-secret-key": "SECRETKEYVALUE" },
    "body": {
      "userIds": ["nachoUser1", "nachoUser2", 3, 4],
      "title": "나쵸코드 개인화 푸시 기능 추가!",
      "content": "새로운 기능이 추가되었습니다.",
      "linkURL": "https://nachocode.io"
    }
  }
  ```

<hr style={{border: "1px dashed #8E8C8C", opacity: "0.2"}}/>

### Response {#post-v1-users-response}

- **Success Response**

  - **Property**

    | **Properties** | **Type** | **Description**                        |
    | -------------- | -------- | -------------------------------------- |
    | status         | `number` | HTTP 응답 상태 코드 (200)              |
    | response       | `object` | 성공/실패한 유저에 대한 상세 결과 정보 |

  - **Example**

    ```json
    {
      "requested": {
        "success": {
          "count": 3,
          "userIds": ["successUser1", "successUser2", "successUser3"]
        },
        "tokenNotFound": {
          "count": 2,
          "userIds": ["notFoundUser5", "notFoundUser6"]
        }
      },
      "failed": { "count": 2, "userIds": ["failedUser7", 123] }
    }
    ```

<br/>

- **Error Response**

  - [Error Response Object](#error-response-object)

  - 에러코드<br/>
    <span style={{fontSize: "12px"}}>(샌드박스 혹은 운영환경에서 아래에 명세되지 않은 에러 코드를 수신받을 경우 나쵸코드로 문의해주세요.)</span>

    | **ErrorCode** | **Status Code** | **Message**                                                                     | **Description**                        |
    | ------------- | --------------- | ------------------------------------------------------------------------------- | -------------------------------------- |
    | ERR-AB-PSS-22 | 400             | Requested user not exist.                                                       | 전송 요청된 유저가 없을 경우 (빈 배열) |
    | ERR-AB-PSS-23 | 404             | Account information has either never been<br/>registered or could not be found. | FCM Service Account 파일 등록 확인     |

<br/><br/><hr style={{ border: "1px solid #8E8C8C"}} /><br/>

## **객체 설명**

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
