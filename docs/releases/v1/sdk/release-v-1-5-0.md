---
sidebar_label: 'ver.1.5.0 (25.04.18)'
description: nachocode Client SDK ver.1.5.0의 릴리즈노트입니다.
image: /img/docs/releases/release_note_sdk_detail.png
---

# Release: ver.1.5.0 (2025-04-18)

![sdk_detail](/img/docs/releases/release_note_sdk_detail.png)

> 🔔 **배포 일자:** 2025-04-18

이번 업데이트 **v1.5.0**에서는 **소셜 로그인 (Google, Kakao)** 추가 지원, **카카오톡 공유 기능 네임스페이스 이동**, **새로운 권한 타입(사진 접근)** 추가가 이루어졌습니다.

## 주요 변경 사항 (ver.1.5.0)

### 🚨 Deprecated 안내

- `share.sendKakao()` 메서드가 `kakao.share()`로 이동 및 대체되었습니다.
- `KakaoShareType`, `KakaoShareCustom`, `KakaoShareScrap` 등 관련 타입들도 `kakao` 네임스페이스로 이동했습니다.

### 추가된 기능 목록

- [Google 소셜 로그인 기능 추가](#1-google-소셜-로그인-기능-추가-google-네임스페이스)
- [Kakao 소셜 로그인 및 공유 기능 이동](#2-kakao-소셜-로그인-및-공유-기능-이동-kakao-네임스페이스)
- [권한 타입 `PHOTO` 추가](#3-권한-타입-photo-추가-permission-네임스페이스)

---

### 1. Google 소셜 로그인 기능 추가 (`google` 네임스페이스)

- 네이티브 Google 로그인 기능이 추가되었습니다.
- 로그인 성공 시 `idToken` 및 유저 정보(`GoogleUserData`)를 제공합니다.
- 로그인 상태 확인, 유저 데이터 조회, 로그아웃 기능을 지원합니다.

➡️ [`google` 네임스페이스 문서](/docs/sdk/integrations/google)에서 상세 정보를 확인할 수 있습니다.

#### 추가된 메서드 (`google`)

| 메서드                  | 설명                            |
| ----------------------- | ------------------------------- |
| `login(callback)`       | Google 로그인 실행 후 결과 반환 |
| `isLoggedIn(callback)`  | 현재 Google 로그인 상태 확인    |
| `getUserData(callback)` | 로그인한 Google 유저 정보 조회  |
| `logout(callback)`      | Google 소셜 로그아웃 수행       |

#### 사용 예제 (Google 로그인)

```javascript
Nachocode.google.login((result, idToken, userData) => {
  if (result.status === 'success') {
    console.log('Google 로그인 성공', idToken, userData);
  } else {
    console.error('Google 로그인 실패', result.message);
  }
});
```

---

### 2. Kakao 소셜 로그인 및 공유 기능 이동 (`kakao` 네임스페이스)

- Kakao 네이티브 소셜 로그인 기능이 추가되었습니다.
- 로그인 상태 확인, 유저 데이터 조회, 로그아웃, 연결 끊기(`unlink`) 기능을 지원합니다.
- 기존 `share.sendKakao` 메서드가 `kakao.share` 메서드로 통합 및 개선되었습니다.

➡️ [`kakao` 네임스페이스 문서 확인하기](/docs/sdk/integrations/kakao)

#### 추가된 메서드 (`kakao`)

| 메서드                         | 설명                                      |
| ------------------------------ | ----------------------------------------- |
| `login(callback)`              | Kakao 소셜 로그인 실행 후 결과 반환       |
| `isLoggedIn(callback)`         | 현재 Kakao 로그인 상태 확인               |
| `getUserData(callback)`        | 로그인한 Kakao 유저 정보 조회             |
| `logout(callback)`             | Kakao 소셜 로그아웃 수행                  |
| `unlink(callback)`             | Kakao 계정과 앱 연결 해제 (완전 로그아웃) |
| `share(type, data, callback?)` | Kakao 커스텀 템플릿/스크랩 공유 기능 제공 |

#### 사용 예제 (Kakao 로그인)

```javascript
Nachocode.kakao.login((result, loginData) => {
  if (result.status === 'success') {
    console.log('Kakao 로그인 성공', loginData);
  } else {
    console.error('Kakao 로그인 실패', result.message);
  }
});
```

#### 사용 예제 (Kakao 공유)

```javascript
// 커스텀 템플릿을 활용한 카카오톡 공유
Nachocode.kakao.share(
  'custom',
  {
    templateId: 12345,
    templateArgs: { key1: 'value1' },
  },
  result => {
    if (result.status === 'success') {
      console.log('Kakao 공유 성공');
    } else {
      console.error('Kakao 공유 실패', result.message);
    }
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

### 3. 권한 타입 `PHOTO` 추가 (`permission` 네임스페이스)

- 디바이스 권한 요청에 **사진 접근 권한(`photo`)** 타입이 추가되었습니다.
- `permission.checkPermission({ type: 'photo' })` 형태로 사용합니다.

➡️ [`permission` 네임스페이스 문서 확인하기](/docs/sdk/namespaces/permission)

#### 추가된 권한 타입 (`permission.PERMISSION_TYPES`)

| 권한 타입 | 설명           |
| --------- | -------------- |
| `photo`   | 사진 접근 권한 |

#### 사용 예제 (사진 권한 요청)

```javascript
Nachocode.permission.checkPermission({ type: 'photo', ask: true }, granted => {
  if (granted) {
    console.log('사진 접근 권한 허용됨');
  } else {
    console.log('사진 접근 권한 거부됨');
  }
});
```

---

### 업데이트 방법

nachocode JavaScript Client SDK **ver.1.5.0**를 사용하려면 아래의 스크립트를 업데이트하십시오.

#### SDK CDN 주소

```html
<script src="https://cdn.nachocode.io/nachocode/client-sdk/@1.5.0/client-sdk.min.js"></script>
```
