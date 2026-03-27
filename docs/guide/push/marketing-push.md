---
sidebar_position: 6
sidebar_label: 마케팅 푸시
pagination_label: 마케팅 푸시 가이드
description: nachocode 마케팅 푸시 가이드는 정보통신망법을 준수하여 광고성 푸시 알림을 관리하는 방법을 안내합니다. SDK를 활용한 마케팅 수신 동의 관리부터 법적 요구사항 준수까지 상세히 설명합니다.
keywords:
  [
    마케팅 푸시,
    광고성 푸시,
    마케팅 알림,
    푸시 수신 동의,
    정보통신망법,
    야간 푸시,
    마케팅 동의,
    사용자 동의,
    푸시 알림,
    타겟 푸시,
    광고성 정보,
    나쵸코드 푸시,
    nachocode 푸시,
    푸시 SDK,
  ]
image: /img/docs/thumbnails/GUIDE/push.svg
---

# 마케팅 푸시

import { ThumbnailImage } from '@site/src/components/common/image/thumbnail-image';
import { BadgeWithVersion } from '@site/src/components/svg/badge-with-version';

<ThumbnailImage src='/img/docs/thumbnails/GUIDE/push.svg'/>

> 🚀 **추가된 버전:** <BadgeWithVersion type="SDK" version="v1.10.0" link="/docs/releases/v1/sdk/release-v-1-10-0" /> <BadgeWithVersion type="Android" version="v1.10.1" link="/docs/releases/v1/app-source/android/release-v-1-10-1" /> <BadgeWithVersion type="iOS" version="v1.10.1" link="/docs/releases/v1/app-source/ios/release-v-1-10-1" />  
> 🔔 **최신화 일자:** 2026-03-27

이 문서는 **광고성 푸시 알림**(**마케팅 푸시**)의 법적 요구사항과 nachocode SDK를 활용한 구현 방법을 안내합니다.

---

## 마케팅 푸시란? {#what-is-marketing-push}

**마케팅 푸시**(광고성 푸시)는 영리 목적으로 제품, 서비스, 이벤트 등을 홍보하기 위해 발송하는 푸시 알림입니다.

:::tip 마케팅 푸시 예시

- 할인 쿠폰 및 프로모션 정보
- 이벤트 참여 유도 메시지
- 신규 상품 출시 안내
- 마케팅 캠페인 알림

:::

마케팅 푸시는 **정보성 푸시**(주문 배송 안내, 결제 완료, 시스템 알림 등)와 구분되며,  
**정보통신망법에 따라 반드시 사용자의 사전 동의가 필요**합니다.

---

## 법적 준수 의무 {#legal-requirements}

### 정보통신망법 제50조

**[정보통신망 이용촉진 및 정보보호 등에 관한 법률 제50조](https://www.law.go.kr/LSW/lsLawLinkInfo.do?chrClsCd=010202&lsJoLnkSeq=1000688185&lsId=000030)**

:::warning 필수 준수 사항

#### 제50조(영리목적의 광고성 정보 전송 제한)

① 누구든지 전자적 전송매체를 이용하여 영리목적의 광고성 정보를 전송하려는 자는 **그 수신자의 명시적인 사전 동의**를 받아야 한다.

② 제1항에 따른 사전 동의를 받은 자는 수신자가 **언제든지 수신 거부 의사를 쉽게 표시**할 수 있도록 하여야 한다.

③ 제1항에 따른 광고성 정보를 **오후 9시부터 그 다음 날 오전 8시까지의 시간에 전송**하려는 경우에는 제1항에 따른 사전 동의를 받을 때 **별도로 야간 시간대 수신 동의**를 받아야 한다.

:::

### 마케팅 푸시 vs 정보성 푸시

| 구분          | 마케팅 푸시 (광고성)                     | 정보성 푸시                              |
| ------------- | ---------------------------------------- | ---------------------------------------- |
| **목적**      | 상업적 홍보, 마케팅                      | 서비스 이용에 필요한 정보 제공           |
| **법적 요구** | **사전 동의 필수** (정보통신망법 제50조) | 사전 동의 불필요 (서비스 이용 필수 정보) |
| **예시**      | 할인 쿠폰, 이벤트 안내, 신상품 출시      | 주문 배송 안내, 결제 완료, 시스템 알림   |
| **야간 전송** | **별도 동의 필수** (21:00~08:00)         | 제한 없음 (필요 시 전송 가능)            |
| **수신 거부** | 언제든지 가능해야 함                     | 서비스 필수 알림은 거부 불가             |

---

### 법적 준수 체크리스트 {#compliance-checklist}

#### 필수 준수 사항

- [ ] **사전 동의 받기**: 마케팅 푸시 전송 전 반드시 사용자 동의 획득
- [ ] **야간 푸시 별도 동의**: 21:00~08:00 시간대 전송 시 별도 동의 필요
- [ ] **명확한 동의 문구**: 어떤 정보를 받게 되는지 구체적으로 설명
- [ ] **선택적 동의**: 마케팅 동의는 서비스 이용의 필수 조건이 아님을 명시
- [ ] **수신 거부 기능**: 설정에서 언제든 동의 철회 가능하도록 구현
- [ ] **동의 기록 보관**: 서비스 서버에 동의 일시 및 내역 저장 (법적 분쟁 대비)
- [ ] **로그아웃 시 게스트 동의 확인**: 회원이 수신거부한 경우 게스트 동의도 거부되므로 로그아웃 후 마케팅 푸시 전송 금지

#### 권장 사항

- [ ] **정보성 푸시와 구분**: 시스템 알림과 마케팅 알림을 명확히 구분
- [ ] **동의 철회 안내**: 마케팅 푸시 발송 시 수신 거부 방법 안내

---

## nachocode 마케팅 푸시 관리 시스템 {#nachocode-system}

### 동의 상태 조회

nachocode SDK는 마케팅 푸시 동의 상태를 다음과 같이 관리합니다.

#### 개별 조회 방식

```javascript
const marketingAllowed = await Nachocode.push.getMarketingAllowed();

console.log('게스트 동의:', marketingAllowed.guest); // boolean | null
console.log('회원 동의:', marketingAllowed.user); // boolean | null
```

#### 일괄 조회 방식 ([v1.10.2](/docs/releases/v1/sdk/release-v-1-10-2)+)

```javascript
// 마케팅 푸시와 야간 푸시 동의를 한 번에 조회
const preference = await Nachocode.push.getMarketingPreference();

console.log('게스트 마케팅 동의:', preference.guest.marketingAllowed); // boolean | null
console.log('게스트 야간 동의:', preference.guest.nightAllowed); // boolean | null
console.log('회원 마케팅 동의:', preference.user.marketingAllowed); // boolean | null
console.log('회원 야간 동의:', preference.user.nightAllowed); // boolean | null
```

| 값      | 의미                               |
| ------- | ---------------------------------- |
| `true`  | 마케팅 푸시 수신 **동의**          |
| `false` | 마케팅 푸시 수신 **거부**          |
| `null`  | 아직 동의 여부를 **선택하지 않음** |

---

### 게스트 vs 회원 동의 {#guest-vs-user}

:::warning 동의 주체의 구분

- **게스트 동의** (`guest`): **로그인하지 않은** 상태에서 해당 기기에 대한 마케팅 푸시 수신 동의
- **회원 동의** (`user`): **로그인한** 상태에서 해당 회원에 대한 마케팅 푸시 수신 동의

**이 두 동의는 법적으로 별개**이며, 각각 독립적으로 관리됩니다.

:::

#### 로그인 상태에 따른 동작

```javascript
// 비로그인 상태
await Nachocode.push.setMarketingAllowed(true);
// → `guest` 동의만 설정됨

// 로그인 (`Nachocode.user.setUserId` 호출 시 자동으로 `guest` → `user` 상태로 전환)
await Nachocode.user.setUserId('user123');

// 로그인 상태
await Nachocode.push.setMarketingAllowed(true);
// → `user` 동의 설정됨
```

---

### nachocode 서비스가 자동으로 관리해주는 것들 {#auto-management}

nachocode는 마케팅 동의 관리를 **간편하고 안전하게** 처리할 수 있도록 다음과 같은 기능을 자동으로 제공합니다.

#### 1. 로그인 시 마케팅 정보 자동 동기화

```javascript
// 사용자가 로그인할 때 단순히 userId만 설정
await Nachocode.user.setUserId('user123');
```

- 해당 `userId`의 기존 마케팅 동의 정보를 서버에서 조회
- 다른 디바이스에서 설정한 마케팅 동의 정보를 현재 디바이스에 **자동 동기화**
- 기존 회원이 다시 로그인한 경우 이전 동의 상태를 **자동 복원**

:::tip
앱 사용자가 여러 디바이스를 사용하더라도 마케팅 동의 설정이 **자동으로 일치**됩니다.  
A 디바이스에서 마케팅 수신을 거부했다면, B 디바이스에서도 자동으로 거부 상태가 유지됩니다.
:::

<br/>

#### 2. 동의 변경 시 모든 디바이스에 자동 전파

```javascript
// 한 디바이스에서 마케팅 동의 변경
await Nachocode.push.setMarketingAllowed(false);

// 또는 야간 푸시 동의 변경
await Nachocode.push.setNightAllowed(false);
```

- 로그인 상태(`user`)인 경우, 해당 `userId`를 가진 **모든 디바이스**에 동의 상태 변경을 **자동 전파**
- 각 디바이스의 마케팅 토픽 구독/구독해제를 **자동 처리**
- 동의 변경 내역을 서버에 **자동 저장**

:::tip
앱 사용자가 한 번만 마케팅 수신을 거부하면, **소유한 모든 디바이스**에서 자동으로 마케팅 푸시 수신이 중단됩니다.  
여러 디바이스에서 일일이 설정을 변경할 필요가 없습니다.
:::

<br/>

#### 3. 로그아웃 시 자동 상태 전환

```javascript
// 사용자가 로그아웃할 때 단순히 userId 삭제
await Nachocode.user.deleteUserId();
```

- `user` 상태에서 `guest` 상태로 **자동 전환**
- 저장된 `guest` 마케팅 동의 정보를 **자동 조회**
- `user` 관련 마케팅 토픽 **자동 구독해제**
- `guest` 관련 마케팅 토픽 **자동 구독** (동의한 경우에만)

:::tip
로그아웃 후에도 **법적으로 올바른 동의 상태**가 자동으로 유지됩니다.  
개발자는 복잡한 토픽 관리 로직을 작성할 필요 없이, **SDK 메서드 호출만으로 모든 것이 자동 처리**됩니다.
:::

---

### 로그아웃 시 중요한 법적 원칙 {#logout-principle}

:::warning 로그아웃 시 필수 준수 사항

**정보통신망법 준수를 위해 다음 규칙을 반드시 지켜야 합니다.**

1. **회원이 수신거부**하면 **게스트 동의도 함께 철회**됩니다
2. **로그아웃 후에는 게스트 동의 상태를 기준**으로 마케팅 푸시 전송 여부 판단
3. 게스트 동의가 거부 상태라면 로그아웃 후 마케팅 푸시 전송 금지

**nachocode는 이러한 법적 요구사항을 자동으로 준수**하도록 설계되어 있습니다.

:::

#### 시나리오 예시

##### 시나리오 1: 비로그인 동의 → 로그인 후 거부

```javascript
// 1. 비로그인 상태에서 동의
await Nachocode.push.setMarketingAllowed(true);
// 결과: { guest: true, user: null }

// 2. 로그인
await Nachocode.user.setUserId('user123');

// 3. 로그인 상태에서 거부
await Nachocode.push.setMarketingAllowed(false);
// 결과: { guest: false, user: false } ← 게스트 동의도 함께 철회됩니다.

// 4. 로그아웃 후
await Nachocode.user.deleteUserId();
// 게스트 동의가 false이므로 마케팅 푸시 전송 불가
```

##### 시나리오 2: 비로그인 거부 → 로그인 후 동의 → 로그아웃

```javascript
// 1. 비로그인 상태에서 거부
await Nachocode.push.setMarketingAllowed(false);
// 결과: { guest: false, user: null }

// 2. 로그인 후 동의
await Nachocode.user.setUserId('user123');
await Nachocode.push.setMarketingAllowed(true);
// 결과: { guest: false, user: true }

// 3. 로그아웃 후
await Nachocode.user.deleteUserId();
// 게스트 동의가 false이므로 마케팅 푸시 전송 불가
```

---

### 야간 푸시 별도 동의 {#night-push}

**21:00 ~ 08:00** 야간 시간대에 마케팅 푸시를 전송하려면 **별도의 야간 마케팅 푸시 수신 동의**가 필요합니다.

#### 개별 설정 방식

```javascript
// 야간 푸시 수신 동의
await Nachocode.push.setNightAllowed(true);

// 야간 푸시 동의 상태 조회
const nightAllowed = await Nachocode.push.getNightAllowed();
// true: 동의 / false: 거부 / null: 미선택
```

#### 일괄 설정 방식 ([v1.10.2](/docs/releases/v1/sdk/release-v-1-10-2)+)

```javascript
// 마케팅 푸시와 야간 푸시 동의를 한 번에 설정
const result = await Nachocode.push.setMarketingPreference({
  marketingAllowed: true,
  nightAllowed: true,
});

if (result.status === 'success') {
  console.log('마케팅 수신 동의가 설정되었습니다.');
} else {
  console.error('설정 실패:', result.message);
}
```

:::warning 야간 마케팅 푸시 요구사항

- **마케팅 푸시 동의**와 **야간 푸시 동의** 모두 있어야 야간 시간대 광고성 푸시 알림 전송이 가능합니다.

:::

---

## 마케팅 푸시 전송 방법 {#sending-marketing-push}

### 현재 지원 방식 (SDK 기반)

[**SDK v1.10.0**](/docs/releases/v1/sdk/release-v-1-10-0) 및 **앱소스 v1.10.1**부터 마케팅 동의 관리 기능이 지원됩니다.

SDK를 통해 사용자의 마케팅 동의를 관리하면, nachocode 앱소스가 **내부적으로 마케팅 토픽 구독을 자동 처리**합니다.

:::info 향후 제공 예정

1. **nachocode 대시보드**: 마케팅 푸시 전송 기능 제공
2. **nachocode API**: 서버에서 직접 마케팅 푸시를 발송할 수 있는 API 또는 옵션 제공

:::

---

## 관련 문서 {#related-docs}

:::tip **SDK 문서**

- [**Nachocode.push**](/docs/sdk/namespaces/push) - 푸시 알림 관련 SDK 메서드

  - [`getMarketingAllowed()`](/docs/sdk/namespaces/push#get-marketing-allowed) - 마케팅 푸시 동의 상태 조회
  - [`setMarketingAllowed()`](/docs/sdk/namespaces/push#set-marketing-allowed) - 마케팅 푸시 동의 설정
  - [`getNightAllowed()`](/docs/sdk/namespaces/push#get-night-allowed) - 야간 푸시 동의 상태 조회
  - [`setNightAllowed()`](/docs/sdk/namespaces/push#set-night-allowed) - 야간 푸시 동의 설정
  - [`getMarketingPreference()`](/docs/sdk/namespaces/push#get-marketing-preference) - 마케팅 수신 동의 일괄 조회 <BadgeWithVersion type="SDK" version="v1.10.2" link="/docs/releases/v1/sdk/release-v-1-10-2" />
  - [`setMarketingPreference()`](/docs/sdk/namespaces/push#set-marketing-preference) - 마케팅 수신 동의 일괄 설정 <BadgeWithVersion type="SDK" version="v1.10.2" link="/docs/releases/v1/sdk/release-v-1-10-2" />

- [**Nachocode.user**](/docs/sdk/namespaces/user) - 사용자 식별 관련 SDK 메서드
  - [`setUserId()`](/docs/sdk/namespaces/user#set-user-id) - 사용자 ID 설정 (로그인)
  - [`deleteUserId()`](/docs/sdk/namespaces/user#delete-user-id) - 사용자 ID 삭제 (로그아웃)

:::

---
