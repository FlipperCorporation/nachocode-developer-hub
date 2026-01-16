---
sidebar_label: 'ver.1.9.0 (26.01.15)'
description: nachocode Client SDK ver.1.9.0의 릴리즈노트입니다.
image: /img/docs/releases/release_note_sdk_detail.png
---

# Release: ver.1.9.0 (2026-01-15)

import { ThumbnailImage } from '@site/src/components/common/image/thumbnail-image';

<ThumbnailImage src='/img/docs/releases/release_note_sdk_detail.png'/>

> 🔔 **배포 일자:** 2026-01-15

이번 업데이트 **v1.9.0**에서는 **네이버 네이티브 로그인 기능**이 새롭게 추가되었습니다.

**네이버 연동**을 통해 네이버 계정 기반 인증, 사용자 정보 조회, 로그인 상태 관리 등의 소셜 로그인 기능을 사용할 수 있습니다.

또한 **Facebook 앱 이벤트 로깅** 기능이 추가되어 Meta 마케팅 분석 기능이 강화되었습니다.

## 주요 변경 사항 (ver.1.9.0)

### 새로운 기능 {#new-features}

- **`naver` 네임스페이스**: 네이버 네이티브 로그인 기능 추가

  - 네이버 계정을 통한 **소셜 로그인 및 사용자 인증** 기능을 제공합니다.
  - **로그인**, **로그인 상태 확인**, **사용자 정보 조회**, **로그아웃**, **연결 해제** 등의 기능을 지원합니다.
  - 콜백 기반으로 동작하여 비동기 처리가 용이합니다.
  - ➡️ [**`naver` 네임스페이스 문서 바로가기**](/docs/sdk/integrations/naver/reference)

- **`facebook` 네임스페이스**: 앱 이벤트 로깅 기능 추가
  - Meta 이벤트 관리자에서 사용자 행동 추적을 위한 **커스텀 앱 이벤트 로깅** 기능이 추가되었습니다.
  - 마케팅 분석 및 광고 최적화에 활용할 수 있습니다.
  - ➡️ [**`facebook` 네임스페이스 문서 바로가기**](/docs/sdk/integrations/facebook/reference)

---

### 네이버 네이티브 로그인 기능 (`naver` 네임스페이스)

네이버 계정을 활용한 소셜 로그인 기능이 새롭게 추가되었습니다.

#### 추가된 메서드 (`naver`)

| 메서드                                                                          | 설명                   |
| ------------------------------------------------------------------------------- | ---------------------- |
| [`login(callback)`](/docs/sdk/integrations/naver/reference#login)               | 네이버 네이티브 로그인 |
| [`isLoggedIn(callback)`](/docs/sdk/integrations/naver/reference#is-logged-in)   | 로그인 상태 확인       |
| [`getUserData(callback)`](/docs/sdk/integrations/naver/reference#get-user-data) | 사용자 데이터 요청     |
| [`logout(callback?)`](/docs/sdk/integrations/naver/reference#logout)            | 네이버 사용자 로그아웃 |
| [`disconnect(callback?)`](/docs/sdk/integrations/naver/reference#disconnect)    | 네이버 사용자 연결끊기 |

#### 사용 예제

##### **네이버 로그인**

```javascript
// 네이버 로그인 요청
Nachocode.naver.login((result, loginData) => {
  if (result.status === 'success') {
    console.log('네이버 로그인 성공');
    console.log('Access Token:', loginData.accessToken);
    console.log('Refresh Token:', loginData.refreshToken);
    console.log('Expires At:', loginData.expiresAt);
  } else {
    console.error('네이버 로그인 실패:', result.errorCode, result.message);
  }
});
```

##### **로그인 상태 확인**

```javascript
// 네이버 로그인 상태 확인
Nachocode.naver.isLoggedIn((result, isLoggedIn, accessToken) => {
  if (isLoggedIn) {
    console.log('네이버 로그인 상태입니다.');
    console.log('Access Token:', accessToken);
  } else {
    console.log('네이버에 로그인되어 있지 않습니다.');
  }
});
```

##### **사용자 정보 조회**

```javascript
// 사용자 데이터 요청
Nachocode.naver.getUserData((result, userData) => {
  if (result.status === 'success') {
    console.log('사용자 데이터:', userData);
    console.log('이름:', userData.name);
    console.log('이메일:', userData.email);
    console.log('닉네임:', userData.nickName);
    console.log('프로필 이미지:', userData.profile_image);
  } else {
    console.error('사용자 데이터 요청 실패:', result.errorCode, result.message);
  }
});
```

##### **로그아웃 및 연결 해제**

```javascript
// 네이버 로그아웃
Nachocode.naver.logout(result => {
  if (result.status === 'success') {
    console.log('네이버에서 로그아웃되었습니다.');
  }
});

// 네이버 연결 해제
Nachocode.naver.disconnect(result => {
  if (result.status === 'success') {
    console.log('네이버 계정 연결을 해제하였습니다.');
  }
});
```

#### 지원하는 데이터 타입

**네이버 로그인 데이터** (`NaverLoginData`)

로그인 성공 시 반환되는 데이터입니다.

- `accessToken`: 액세스 토큰
- `refreshToken`: 리프레시 토큰
- `expiresAt`: 토큰 만료 시간

**네이버 사용자 데이터** (`NaverUserData`)

사용자 정보 조회 시 반환되는 데이터입니다.

- `id`: 네이버 사용자 고유 ID
- `gender`: 성별 ('F' 또는 'M')
- `name`: 이름
- `nickName`: 닉네임
- `email`: 이메일 주소
- `mobile`: 휴대전화 번호
- `mobile_e164`: E.164 형식 휴대전화 번호
- `age`: 연령대 (ex. "20-29")
- `birthyear`: 출생연도 (ex. "2000")
- `birthday`: 생일 (MM-DD 형식, ex. "12-31")
- `profile_image`: 프로필 이미지 URL

:::info 추가 정보
사용자 정보는 **네이버 개발자 센터에서 승인받은 항목만** 조회할 수 있으며, 사용자가 정보 제공에 동의해야 합니다.
:::

---

### Facebook 앱 이벤트 로깅 (`facebook` 네임스페이스)

Facebook에 커스텀 앱 이벤트를 로깅하여 사용자 행동을 추적할 수 있는 기능이 추가되었습니다.

#### 추가된 메서드 (`facebook`)

| 메서드                                                                                    | 설명                |
| ----------------------------------------------------------------------------------------- | ------------------- |
| [`logEvent(eventName, parameters?)`](/docs/sdk/integrations/facebook/reference#log-event) | Meta 앱 이벤트 로깅 |

#### 사용 예제 (`logEvent`)

```javascript
// 커스텀 앱 이벤트 로깅
Nachocode.facebook.logEvent('purchase', {
  product_id: 'item_001',
  price: '9.99',
  currency: 'USD',
  category: 'electronics',
});

// 간단한 이벤트 로깅
Nachocode.facebook.logEvent('button_clicked');

// 파라미터와 함께 이벤트 로깅
Nachocode.facebook.logEvent('page_view', {
  page_name: 'product_detail',
  product_category: 'fashion',
});
```

#### 메서드 상세

**`logEvent(eventName: string, parameters?: Record<string, string>): void`**

- `eventName`: 이벤트 이름 (필수)
- `parameters`: 이벤트와 함께 전송할 추가 파라미터 (선택)

:::info 이벤트 확인
집계된 이벤트 로그는 [Meta 이벤트 관리자](https://eventsmanager.facebook.com/events_manager2/overview)에서 확인할 수 있습니다.
:::

---

### 개선 사항 {#improvements}

- **TypeScript 정의**(`Nachocode.d.ts`) **업데이트**
  - v1.9.0 변경 사항을 반영하여 `naver` 네임스페이스 관련 타입 정의가 추가되었습니다.
  - `NaverResult`, `NaverSuccessResult`, `NaverErrorResult`, `NaverLoginData`, `NaverUserData` 등의 새로운 타입이 정의되었습니다.
  - Facebook 네임스페이스에 `logEvent` 메서드가 추가되었습니다.

:::info
➡️ [`Nachocode.d.ts`](https://github.com/FlipperCorporation/nachocode-client-sdk-js/blob/main/releases/Nachocode.d.ts)에서 최신 정의를 확인하세요.
:::

---

### 활용 사례 {#use-cases}

이번 업데이트의 새로운 기능들을 활용하여 다음과 같은 개선을 할 수 있습니다.

1. **소셜 로그인 확장**: 기존 Facebook, Google, Kakao, Apple에 이어 Naver 로그인을 추가하여 국내 사용자 접근성 향상
2. **사용자 정보 통합**: 네이버 계정 정보를 활용한 회원가입 간소화 및 사용자 프로필 자동 구성
3. **마케팅 분석 강화**: Facebook 앱 이벤트를 통한 사용자 행동 패턴 분석 및 광고 최적화
4. **전환율 추적**: 주요 사용자 액션(구매, 가입 등)을 이벤트로 로깅하여 마케팅 성과 측정
5. **맞춤형 광고**: Facebook 픽셀과 연동하여 타겟 광고 및 리타겟팅 캠페인 최적화

---

### 업데이트 방법

nachocode JavaScript Client SDK **ver.1.9.0**를 사용하려면 아래의 스크립트를 업데이트하십시오.

#### SDK CDN 주소

```html
<script src="https://cdn.nachocode.io/nachocode/client-sdk/@1.9.0/client-sdk.min.js"></script>
```

:::tip 문의하기
nachocode는 지속적으로 사용자의 개발 경험 향상을 위해 최선을 다하겠습니다.
추가적인 요청이나 문의사항은 언제든지 지원팀에게 [이메일](mailto:support@nachocode.io)을 보내주세요.
감사합니다.
:::
