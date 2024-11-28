---
sidebar_position: 12
---

# 공유 (`share`)

> 🔔 **최신화 일자:** 2024-11-27

네이티브 공유 UI를 통해 공유 기능을 제공하는 네임스페이스입니다.

---

## 타입 정의

### `KakaoShareType`

```typescript
declare enum KakaoShareType {
  CUSTOM = 'custom',
  SCRAP = 'scrap',
}
```

- `'custom'`: 미리 만들어둔 커스텀 템플릿으로 카카오톡 공유하기 메시지를 전송합니다.
- `'scrap'`: URL을 활용하여 카카오톡 스크랩 공유하기 메시지를 전송합니다. 선택적으로 미리 만들어둔 템플릿을 활용할 수 있습니다.

---

### `KakaoShareCustom`

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

- `templateId`: kakao developers 웹 사이트에 등록된 메시지 템플릿 아이디
- `templateArgs`: (_optional_) 메시지 템플릿에 미리 등록된 arguments 키와 가변적으로 넣어줄 값
- `serverCallbackArgs`: (_optional_) 카카오톡 공유하기 결과를 서버에서 처리하고 싶을 때 arguments로 넘겨줄 키와 값

---

### `KakaoShareScrap`

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

- `requestUrl`: 스크랩 공유할 URL
- `templateId`: (_optional_) kakao developers 사이트에 미리 만들어둔 메시지 템플릿의 ID
- `templateArgs`: (_optional_) 메시지 템플릿에 미리 등록된 arguments 키와 가변적으로 넣어줄 값
- `serverCallbackArgs`: (_optional_) 카카오톡 공유하기 결과를 서버에서 처리하고 싶을 때 arguments로 넘겨줄 키와 값

---

### `KakaoShareResultStatusCode`

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

---

### `KakaoShareResult`

```typescript
declare type KakaoShareResult = {
  status: 'error' | 'success';
  statusCode: KakaoShareStatusCode;
  message?: string;
};
```

---

## 주요 메서드

### `openSharing(url: string): void`

제공된 URL로 앱 Native 공유하기 UI를 엽니다.

```javascript
// 공유 할 URL. ex) 'https://nachocode.io'
const sharedURL = 'https://nachocode.io';
// 해당 URL을 Native UI로 공유합니다.
Nachocode.share.openSharing(sharedURL);
```

---

### `sendKakao` (카카오톡 공유하기)

```typescript
sendKakao(
  type: KakaoShareType,
  data: KakaoShareCustom | KakaoShareScrap,
  callback?: (result: KakaoShareResult) => void
): void
```

---
