---
sidebar_label: 'ver.1.11.1 (26.07.28)'
description: nachocode Client SDK ver.1.11.1의 릴리즈노트입니다.
image: /img/docs/releases/release_note_sdk_detail.png
---

# Release: ver.1.11.1 (2026-07-28)

import { ThumbnailImage } from '@site/src/components/common/image/thumbnail-image';

<ThumbnailImage src='/img/docs/releases/release_note_sdk_detail.png'/>

> 🔔 **배포 일자:** 2026-07-28

이번 업데이트 **v1.11.1**에서는 **통신사 앱에서만 사용 가능한 일부 기능**이 새롭게 추가되었습니다.

새로운 **`telecom` 네임스페이스**를 통해 통신사 앱의 사용자 토큰을 네이티브 레이어에서 직접 관리할 수 있습니다.

## 주요 변경 사항 (ver.1.11.1)

### 새로운 기능 {#new-features}

- **`telecom` 네임스페이스**: 통신사 앱 사용자 토큰 관리 기능 추가

  - 네이티브 레이어에서 **통신사 앱 사용자 토큰을 설정 및 관리**할 수 있습니다.
  - **사용자 인증 토큰을 안전하게 저장 및 삭제**하여 연동 서비스를 구현할 수 있습니다.
  - ➡️ [**`telecom` 네임스페이스 문서 바로가기**](/docs/sdk/namespaces/telecom)

---

### 통신사 기능 (`telecom` 네임스페이스)

통신사 서비스와의 연동을 위한 토큰 관리 기능이 추가되었습니다.  
사용자 인증, 인가 처리 구현에 활용할 수 있습니다.

#### 추가된 메서드 (`telecom`)

| 메서드                       | 설명                                 |
| ---------------------------- | ------------------------------------ |
| `setTelecomUserToken(token)` | 통신사 앱 사용자 토큰 설정           |
| `deleteTelecomUserToken()`   | 통신사 앱 사용자 토큰 삭제           |
| `checkTelecomUserToken()`    | 통신사 앱 사용자 토큰 존재 여부 확인 |

#### 새로운 타입 정의

**`TelecomUserTokenResult`**

```typescript
export declare type TelecomUserTokenResult = {
  /**
   * 성공 또는 오류 상태
   */
  status: 'success' | 'error';
  /**
   * 상태 코드
   */
  statusCode: number;
  /**
   * 메시지 (오류 시 포함)
   */
  message?: string;
};
```

**`CheckTelecomUserTokenResult`**

```typescript
export declare type CheckTelecomUserTokenSuccessResult = {
  status: 'success';
  statusCode: 200;
  message: string;
  /**
   * 토큰이 존재하면 `true`, 존재하지 않으면 `false`
   */
  data: boolean;
};

export declare type CheckTelecomUserTokenErrorResult = {
  status: 'error';
  statusCode: 400 | 500;
  message: string;
};

export declare type CheckTelecomUserTokenResult =
  | CheckTelecomUserTokenSuccessResult
  | CheckTelecomUserTokenErrorResult;
```

#### 사용 예제 {#telecom-examples}

##### **사용자 토큰 설정**

```javascript
// 사용자 인증 후 토큰 저장
const result = await Nachocode.telecom.setTelecomUserToken(
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...'
);

if (result.status === 'success') {
  console.log('사용자 토큰이 성공적으로 설정되었습니다.');
  // 사용자 연동 서비스 이용 가능
} else {
  console.error('토큰 설정 실패:', result.message);
}
```

##### **사용자 토큰 삭제**

```javascript
// 사용자 연동 해제 시 토큰 삭제
const result = await Nachocode.telecom.deleteTelecomUserToken();

if (result.status === 'success') {
  console.log('사용자 토큰이 삭제되었습니다.');
  // 연동 해제 완료
} else {
  console.error('토큰 삭제 실패:', result.message);
}
```

##### **사용자 토큰 존재 여부 확인**

쿠키나 세션 방식으로 로그인을 관리할 때, 웹에서는 로그인되어 있으나 네이티브 레이어에 토큰이 비어있는 경우를 확인하여 토큰을 다시 저장하는 데 활용할 수 있습니다.

```javascript
// 토큰 존재 여부 확인 후 없으면 재저장
const result = await Nachocode.telecom.checkTelecomUserToken();

if (result.status === 'success') {
  if (result.data) {
    console.log('사용자 토큰이 저장되어 있습니다.');
  } else {
    console.log('사용자 토큰이 없습니다. 토큰을 다시 저장합니다.');
    // 웹 세션 등에서 토큰을 가져와 재저장
    await Nachocode.telecom.setTelecomUserToken(token);
  }
} else {
  console.error('토큰 존재 여부 확인 실패:', result.message);
}
```

:::tip 공지

통신사 연동 SDK는 통신사 앱들만 사용 가능한 namespace로 nachocode 문의를 통해 기능 활성화가 가능합니다.

- 이메일 문의: [support@nachocode.io](mailto:support@nachocode.io)
- 채팅 문의: [https://nachocode.channel.io](https://nachocode.channel.io/home)

:::

---

### 개선 사항 {#improvements}

- **TypeScript 정의**(`Nachocode.d.ts`) **업데이트**
  - v.1.11.1 변경 사항을 반영하여 새로운 네임스페이스와 메서드의 타입 정의가 추가되었습니다.
  - `telecom` 네임스페이스가 새롭게 추가되었습니다.
  - `TelecomUserTokenResult`, `CheckTelecomUserTokenResult` 타입이 정의되었습니다.

:::info
➡️ [`Nachocode.d.ts`](https://github.com/FlipperCorporation/nachocode-client-sdk-js/blob/main/releases/Nachocode.d.ts)에서 최신 정의를 확인하세요.
:::

---

### 업데이트 방법

nachocode JavaScript Client SDK **ver.1.11.1**를 사용하려면 아래의 스크립트를 업데이트하십시오.

#### SDK CDN 주소

```html
<script src="https://cdn.nachocode.io/nachocode/client-sdk/@1.11.1/client-sdk.min.js"></script>
```

---

### 호환성 정보

- **최소 요구 앱 소스 버전**
- Android: v1.11.2 이상
- iOS: v1.11.2 이상

---

:::tip 문의하기

nachocode는 지속적으로 사용자의 개발 경험
향상을 위해 최선을 다하겠습니다.  
추가적인 요청이나 문의사항은 언제든지 지원팀에게 [이메일](mailto:support@nachocode.io)을 보내주세요. 감사합니다.

:::
