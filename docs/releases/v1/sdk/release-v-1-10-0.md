---
sidebar_label: 'ver.1.10.0 (26.03.05)'
description: nachocode Client SDK ver.1.10.0의 릴리즈노트입니다.
image: /img/docs/releases/release_note_sdk_detail.png
---

# Release: ver.1.10.0 (2026-03-05)

import { ThumbnailImage } from '@site/src/components/common/image/thumbnail-image';

<ThumbnailImage src='/img/docs/releases/release_note_sdk_detail.png'/>

> 🔔 **배포 일자:** 2026-03-05

이번 업데이트 **v1.10.0**에서는 **사용자 ID 관리 기능**, **마케팅/야간 푸시 동의 관리**, **nachocode 디바이스 토큰 조회** 등 사용자 관리 및 푸시 알림 기능이 대폭 강화되었습니다.

새로운 **`user` 네임스페이스**를 통해 사용자 식별자를 관리하고, **푸시 알림 마케팅 수신 동의 관리 기능**으로 광고성 푸시와 야간 푸시에 대한 사용자 동의를 세밀하게 제어할 수 있습니다.

## 주요 변경 사항 (ver.1.10.0)

### 새로운 기능 {#new-features}

- **`user` 네임스페이스**: 사용자 ID 관리 기능 추가

  - 네이티브 레이어에서 **사용자 고유 ID를 저장 및 관리**할 수 있습니다.
  - **클라이언트의 사용자 ID를 설정**하면 사용자 추적 및 분석을 용이하게 할 수 있습니다.
  - ➡️ [**`user` 네임스페이스 문서 바로가기**](/docs/sdk/namespaces/user)

- **`push` 네임스페이스**: 마케팅 푸시 동의 관리 기능 추가

  - **광고성 푸시 알림**에 대한 사용자 동의를 설정하고 조회할 수 있습니다.
  - 게스트 사용자와 로그인 사용자의 동의 상태를 **별도로 관리**합니다.
  - 마케팅 푸시 토픽 구독 목록을 조회할 수 있습니다.
  - ➡️ [**`push` 네임스페이스 문서 바로가기**](/docs/sdk/namespaces/push)

- **`push` 네임스페이스**: 야간 푸시 동의 관리 기능 추가

  - **야간(21:00 ~ 08:00) 푸시 알림**에 대한 사용자 동의를 설정하고 조회할 수 있습니다.
  - 정보통신망법 준수를 위한 필수 기능입니다.
  - ➡️ [**`push` 네임스페이스 문서 바로가기**](/docs/sdk/namespaces/push)

- **`device` 네임스페이스**: nachocode 디바이스 토큰 조회 기능 추가
  - nachocode에서 생성한 **고유 디바이스 토큰**을 조회할 수 있습니다.
  - 디바이스별 사용자 행동 분석 및 추적에 활용됩니다.
  - ➡️ [**`device` 네임스페이스 문서 바로가기**](/docs/sdk/namespaces/device)

---

### 사용자 ID 관리 기능 (`user` 네임스페이스)

사용자 고유 ID를 네이티브 레이어에 저장하고 관리할 수 있는 새로운 네임스페이스가 추가되었습니다.

#### 추가된 메서드 (`user`)

| 메서드              | 설명                  |
| ------------------- | --------------------- |
| `setUserId(userId)` | 사용자 ID 설정        |
| `getUserId()`       | 저장된 사용자 ID 조회 |
| `deleteUserId()`    | 저장된 사용자 ID 삭제 |

#### 사용 예제 {#user-examples}

##### **사용자 ID 설정**

```javascript
// 사용자 로그인 시 사용자 ID 설정
Nachocode.user.setUserId('user_12345');
```

##### **사용자 ID 조회**

```javascript
// 저장된 사용자 ID 조회
const userId = await Nachocode.user.getUserId();

if (userId) {
  console.log('저장된 사용자 ID:', userId);
} else {
  console.log('저장된 사용자 ID가 없습니다.');
}
```

##### **사용자 ID 삭제**

```javascript
// 사용자 로그아웃 시 사용자 ID 삭제
Nachocode.user.deleteUserId();
```

---

### 마케팅 푸시 동의 관리 (`push` 네임스페이스)

광고성 푸시 알림에 대한 사용자 동의를 관리할 수 있는 기능이 추가되었습니다.

#### 추가된 메서드 (`push`) {#push-methods-marketing}

| 메서드                         | 설명                       |
| ------------------------------ | -------------------------- |
| `setMarketingAllowed(allowed)` | 마케팅 푸시 동의 설정      |
| `getMarketingAllowed()`        | 마케팅 푸시 동의 상태 조회 |

#### 새로운 타입 정의

**`MarketingAllowedResult`**

```typescript
export declare type MarketingAllowedResult = {
  /**
   * 게스트 사용자의 마케팅 푸시 동의 여부
   * - `null`: 미선택 또는 알 수 없음
   */
  guest: boolean | null;
  /**
   * 로그인 사용자의 마케팅 푸시 동의 여부
   * - `null`: 미선택 또는 알 수 없음
   */
  user: boolean | null;
};
```

#### 사용 예제 {#push-examples-marketing}

##### **마케팅 푸시 동의 설정**

```javascript
// 사용자가 마케팅 푸시를 수신하도록 설정
Nachocode.push.setMarketingAllowed(true);

// 사용자가 마케팅 푸시를 수신하지 않도록 설정
Nachocode.push.setMarketingAllowed(false);
```

##### **마케팅 푸시 동의 상태 조회**

```javascript
// 마케팅 푸시 동의 상태 조회
const marketingAllowed = await Nachocode.push.getMarketingAllowed();

console.log('게스트 사용자 동의 상태:', marketingAllowed.guest);
console.log('로그인 사용자 동의 상태:', marketingAllowed.user);

// 동의 상태에 따른 로직 작성
if (marketingAllowed.user === true) {
  // true: 마케팅 수신 동의한 상태
  // ...
} else if (marketingAllowed.user === false) {
  // false: 마케팅 수신 거부한 상태
  // ...
} else {
  // null: 아직 선택하지 않은 상태
  // ...
}
```

:::info 정보통신망법 준수
광고성 정보 알림 전송은 [**정보통신망 이용촉진 및 정보보보호 등에 관한 법률 제50조**](https://www.law.go.kr/LSW/lsLawLinkInfo.do?chrClsCd=010202&lsJoLnkSeq=1000688185&lsId=000030)에 따라 사용자의 **사전 동의**가 반드시 필요합니다.
:::

---

### 야간 푸시 동의 관리 (`push` 네임스페이스)

야간(21:00 ~ 08:00) 시간대 푸시 알림에 대한 사용자 동의를 관리할 수 있는 기능이 추가되었습니다.

#### 추가된 메서드 (`push`)

| 메서드                     | 설명                     |
| -------------------------- | ------------------------ |
| `setNightAllowed(allowed)` | 야간 푸시 동의 설정      |
| `getNightAllowed()`        | 야간 푸시 동의 상태 조회 |

#### 사용 예제 {#push-examples}

##### **야간 푸시 동의 설정**

```javascript
// 사용자가 야간 푸시를 수신하도록 설정
Nachocode.push.setNightAllowed(true);

// 사용자가 야간 푸시를 수신하지 않도록 설정
Nachocode.push.setNightAllowed(false);
```

##### **야간 푸시 동의 상태 조회**

```javascript
// 야간 푸시 동의 상태 조회
const nightAllowed = await Nachocode.push.getNightAllowed();

// 동의 상태에 따른 로직 작성
if (nightAllowed === true) {
  // true: 야간 수신 동의한 상태
  // ...
} else if (nightAllowed === false) {
  // false: 야간 수신 거부한 상태
  // ...
} else {
  // null: 아직 선택하지 않은 상태
  // ...
}
```

:::info 정보통신망법 준수
야간 시간대(21:00 ~ 08:00) 광고성 정보 전송은 [**정보통신망 이용촉진 및 정보보보호 등에 관한 법률 제50조 3항**](https://www.law.go.kr/LSW/lsLawLinkInfo.do?chrClsCd=010202&lsJoLnkSeq=1000688185&lsId=000030)에 따라 수신자의 **별도 사전 동의**가 반드시 필요합니다.
:::

---

### nachocode 디바이스 토큰 조회 (`device` 네임스페이스)

nachocode에서 생성한 고유 디바이스 토큰을 조회할 수 있는 기능이 추가되었습니다.

#### 추가된 메서드 (`device`)

| 메서드                  | 설명                         | 지원 플랫폼  |
| ----------------------- | ---------------------------- | ------------ |
| `getNachoDeviceToken()` | nachocode 디바이스 토큰 조회 | Android, iOS |

#### 사용 예제 {#device-examples}

```javascript
// 웹 환경에서는 디바이스 토큰을 사용할 수 없습니다.
// 네이티브 환경에서만 사용
if (Nachocode.env.isApp()) {
  // nachocode 디바이스 토큰 조회
  const deviceToken = Nachocode.device.getNachoDeviceToken();
  console.log('nachocode 디바이스 토큰:', deviceToken);
  // 디바이스 토큰 활용 로직 작성
  // ...
}
```

---

### 개선 사항 {#improvements}

- **`push` 네임스페이스**: 푸시 토큰 관리 메서드 기능 추가

  - `registerPushToken(userId)`가 내부적으로 `Nachocode.user.setUserId()`를 호출하여 사용자 ID를 자동으로 설정합니다.
  - `deletePushToken(userId?)`가 내부적으로 `Nachocode.user.deleteUserId()`를 호출하여 사용자 ID를 자동으로 삭제합니다.

- **TypeScript 정의**(`Nachocode.d.ts`) **업데이트**
  - v.1.10.0 변경 사항을 반영하여 새로운 네임스페이스와 메서드의 타입 정의가 추가되었습니다.
  - `user` 네임스페이스가 새롭게 추가되었습니다.
  - `push` 네임스페이스에 마케팅 및 야간 푸시 관련 메서드와 타입이 추가되었습니다.
  - `device` 네임스페이스에 `getNachoDeviceToken()` 메서드가 추가되었습니다.
  - `MarketingAllowedResult` 등의 새로운 타입이 정의되었습니다.

:::info
➡️ [`Nachocode.d.ts`](https://github.com/FlipperCorporation/nachocode-client-sdk-js/blob/main/releases/Nachocode.d.ts)에서 최신 정의를 확인하세요.
:::

---

### 활용 사례 {#use-cases}

이번 업데이트의 새로운 기능들을 활용하여 다음과 같은 개선을 할 수 있습니다.

1. **사용자 식별 관리**: `user` 네임스페이스를 활용하여 앱 내 사용자에게 ID를 부여하여 사용자 추적 용이
2. **법적 요구사항 준수**: 마케팅 및 야간 푸시 동의 관리를 통한 정보통신망법 및 개인정보보호법 준수
3. **세분화된 푸시 전략**: 사용자의 동의 상태에 따른 맞춤형 푸시 알림 전송 전략 수립
4. **사용자 경험 향상**: 사용자가 원하는 시간대와 유형의 푸시만 수신하도록 설정하여 만족도 향상
5. **디바이스 분석**: nachocode 디바이스 토큰을 활용한 디바이스별 사용자 행동 분석 및 추적
6. **통합 동의 관리 UI**: 마케팅 푸시와 야간 푸시 동의를 한 곳에서 관리하는 설정 페이지 구현

---

### 업데이트 방법

nachocode JavaScript Client SDK **ver.1.10.0**를 사용하려면 아래의 스크립트를 업데이트하십시오.

#### SDK CDN 주소

```html
<script src="https://cdn.nachocode.io/nachocode/client-sdk/@1.10.0/client-sdk.min.js"></script>
```

:::tip 문의하기
nachocode는 지속적으로 사용자의 개발 경험 향상을 위해 최선을 다하겠습니다.
추가적인 요청이나 문의사항은 언제든지 지원팀에게 [이메일](mailto:support@nachocode.io)을 보내주세요.
감사합니다.
:::
