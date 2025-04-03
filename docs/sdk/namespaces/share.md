---
sidebar_position: 18
description: nachocode SDK의 share 네임스페이스는 네이티브 공유 UI로 콘텐츠 공유 기능을 손쉽게 제공합니다.
---

# 공유 (`share`)

> 🔔 **최신화 일자:** 2025-02-20

## **개요**

`share` 네임스페이스는 **네이티브 공유 UI를 통해 콘텐츠를 공유하는 기능**을 제공합니다.  
또한, **카카오톡 공유 기능**을 지원하며, 커스텀 템플릿 또는 URL 스크랩 방식으로 메시지를 전송할 수 있습니다.

---

## **타입 정의**

### **`KakaoShareType`**

카카오톡 공유 유형을 나타내는 열거형(enum)입니다.

```typescript
declare enum KakaoShareType {
  CUSTOM = 'custom',
  SCRAP = 'scrap',
}
```

| 값       | 설명                                                             |
| -------- | ---------------------------------------------------------------- |
| `custom` | 사전에 등록된 커스텀 템플릿을 사용하여 카카오톡 공유 메시지 전송 |
| `scrap`  | URL을 기반으로 카카오톡 스크랩 공유 메시지 전송                  |

---

### **`KakaoShareCustom`**

카카오톡 커스텀 템플릿 공유 시 사용할 데이터 타입입니다.

```typescript
declare type KakaoShareCustom = {
  templateId: number;
  templateArgs?: {
    [key: string]: string;
  };
  serverCallbackArgs?: {
    [key: string]: string;
  };
};
```

| 필드                 | 타입                                     | 설명                                            |
| -------------------- | ---------------------------------------- | ----------------------------------------------- |
| `templateId`         | `number`                                 | 카카오 개발자 센터에서 등록한 템플릿 ID         |
| `templateArgs`       | `{ [key: string]: string }` _(optional)_ | 템플릿에 전달할 가변적인 값                     |
| `serverCallbackArgs` | `{ [key: string]: string }` _(optional)_ | 공유 결과를 서버에서 처리할 경우 함께 전달할 값 |

---

### **`KakaoShareScrap`**

카카오톡 URL 스크랩 공유 시 사용할 데이터 타입입니다.

```typescript
declare type KakaoShareScrap = {
  requestUrl: string;
  templateId?: number;
  templateArgs?: {
    [key: string]: string;
  };
  serverCallbackArgs?: {
    [key: string]: string;
  };
};
```

| 필드                 | 타입                                     | 설명                                            |
| -------------------- | ---------------------------------------- | ----------------------------------------------- |
| `requestUrl`         | `string`                                 | 스크랩할 대상 URL                               |
| `templateId`         | `number` _(optional)_                    | 카카오 개발자 센터에서 등록한 템플릿 ID         |
| `templateArgs`       | `{ [key: string]: string }` _(optional)_ | 템플릿에 전달할 가변적인 값                     |
| `serverCallbackArgs` | `{ [key: string]: string }` _(optional)_ | 공유 결과를 서버에서 처리할 경우 함께 전달할 값 |

---

### **`KakaoShareResultStatusCode`**

카카오 공유 요청의 상태 코드입니다.

```typescript
declare enum KakaoShareResultStatusCode {
  ERROR_JSON_FAILED = 102,
  ERROR_JSON_FAILED_TO_MODEL = 103,
  ERROR_JSON_FAILED_TO_KAKAO_MODEL = 104,
  ERROR_JSON_WRONG_SHARE_TYPE = 105,
  ERROR_JSON_EMPTY_REQUEST_URL = 106,
  ERROR_JSON_EMPTY_TEMPLATE_ID = 108,
  ERROR_KAKAO_FAILED = 199,
  SUCCESS_KAKAO = 200,
  SUCCESS_SAFARI = 201,
}
```

| 값    | 설명                                                 |
| ----- | ---------------------------------------------------- |
| `102` | JSON 변환 실패                                       |
| `103` | JSON을 모델로 변환하는 과정에서 오류 발생            |
| `104` | JSON을 카카오 모델로 변환하는 과정에서 오류 발생     |
| `105` | 잘못된 공유 타입 지정 (`custom` 또는 `scrap`이 아님) |
| `106` | `scrap` 공유 타입에서 `requestUrl`이 비어 있음       |
| `108` | `custom` 공유 타입에서 `templateId`가 비어 있음      |
| `199` | 카카오 공유 요청 실패                                |
| `200` | 카카오 공유 성공                                     |
| `201` | Safari 브라우저에서 공유 성공                        |

---

### **`KakaoShareResult`**

카카오 공유 요청 결과를 포함하는 타입입니다.

```typescript
declare type KakaoShareResult = {
  status: 'error' | 'success';
  statusCode: KakaoShareStatusCode;
  message?: string;
};
```

| 필드         | 타입                         | 설명                           |
| ------------ | ---------------------------- | ------------------------------ |
| `status`     | `'error' \| 'success'`       | 공유 성공 여부                 |
| `statusCode` | `KakaoShareResultStatusCode` | 요청 결과 상태 코드            |
| `message`    | `string` _(optional)_        | 요청 실패 시, 오류 메시지 포함 |

---

## **메서드 목록**

| 메서드                                                                                                                                                 | 설명                                         | 추가된 버전 |
| ------------------------------------------------------------------------------------------------------------------------------------------------------ | -------------------------------------------- | ----------- |
| [`openSharing(url)`](#opensharingurl-string-void)                                                                                                      | 네이티브 공유 UI를 열어 콘텐츠를 공유합니다. | ver.1.1.0   |
| [`sendKakao(type, data, callback?)`](#sendkakaotype-kakaosharetype-data-kakaosharecustom--kakaosharescrap-callback-result-kakaoshareresult--void-void) | 카카오톡 공유를 수행합니다.                  | ver.1.2.0   |

---

## **메서드 상세**

### **`openSharing(url: string): void`**

- _since ver.1.1.0_

#### 설명 (`openSharing`)

지정된 `url`을 네이티브 공유 UI를 통해 공유합니다.  
네이티브 공유 UI는 **기본적으로 사용자의 디바이스에 설치된 공유 가능한 앱 목록**을 표시합니다.

#### 매개변수 (`openSharing`)

| 이름  | 타입     | 필수 여부 | 설명            |
| ----- | -------- | --------- | --------------- |
| `url` | `string` | ✅        | 공유할 대상 URL |

#### 반환 값 (`openSharing`)

해당 메서드는 반환 값을 가지지 않습니다.

#### 사용 예제 (`openSharing`)

```javascript
// 공유 할 URL. ex) 'https://nachocode.io'
const sharedURL = 'https://nachocode.io';
// 공유할 URL을 지정하여 네이티브 공유 UI를 엽니다.
Nachocode.share.openSharing(sharedURL);
```

---

### **`sendKakao(type: KakaoShareType, data: KakaoShareCustom | KakaoShareScrap, callback?: (result: KakaoShareResult) => void): void`**

- _since ver.1.2.0_

#### 설명 (`sendKakao`)

카카오톡 공유 기능을 수행합니다.  
커스텀 템플릿(`custom`) 또는 URL 스크랩(`scrap`) 방식을 사용하여 공유할 수 있습니다.  
공유 결과는 선택적으로 `callback` 함수를 통해 전달받을 수 있습니다.

#### 매개변수 (`sendKakao`)

| 이름       | 타입                                              | 필수 여부 | 설명                                    |
| ---------- | ------------------------------------------------- | --------- | --------------------------------------- |
| `type`     | `KakaoShareType`                                  | ✅        | `custom` 또는 `scrap` 공유 방식 선택    |
| `data`     | `KakaoShareCustom \| KakaoShareScrap`             | ✅        | 공유할 데이터 (템플릿 ID 또는 URL 필요) |
| `callback` | `(result: KakaoShareResult) => void` _(optional)_ | ❌        | 공유 결과를 처리할 콜백 함수            |

#### 반환 값 (`sendKakao`)

해당 메서드는 반환 값을 가지지 않습니다.  
공유 결과는 `callback` 함수에 전달됩니다.

#### 사용 예제 (`sendKakao`)

```javascript
// 커스텀 템플릿을 활용한 카카오톡 공유
Nachocode.share.sendKakao(
  'custom',
  {
    templateId: 12345,
    templateArgs: { title: 'nachocode SDK' },
  },
  result => {
    console.log('카카오 공유 결과:', result);
  }
);
```

```javascript
// URL을 활용한 카카오톡 공유
Nachocode.share.sendKakao(
  'scrap',
  {
    requestUrl: 'https://nachocode.io',
  },
  result => {
    if (result.status === 'success') {
      console.log('카카오톡 공유 성공');
    } else {
      console.error(`카카오톡 공유 실패: ${result.message}`);
    }
  }
);
```

---

### **추가 정보**

- `custom` 공유 방식의 경우, **카카오 개발자 센터에서 사전 등록된 템플릿 ID**가 필요합니다.
- `scrap` 공유 방식의 경우, **카카오 스크랩 API를 통해 미리보기 데이터를 가져옵니다.**
- 공유가 실패할 경우, `KakaoShareResult`의 `status` 값이 `'error'`로 설정되며 `message` 필드에 오류 원인이 포함됩니다.

---
