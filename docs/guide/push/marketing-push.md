---
sidebar_position: 8
sidebar_label: 마케팅 푸시
pagination_label: 마케팅 푸시 가이드
description: nachocode 마케팅 푸시 가이드는 정보통신망법을 준수하여 광고성 푸시 알림을 관리하는 방법을 안내합니다. 대시보드에서 노코드로 제작하는 광고성 푸시 동의 팝업 연동 방법부터 SDK로 직접 구현하는 방법까지 상세히 설명합니다.
keywords:
  [
    마케팅 푸시,
    광고성 푸시,
    마케팅 알림,
    푸시 수신 동의,
    광고성 푸시 동의 팝업,
    마케팅 동의 팝업,
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
image: /img/docs/thumbnails/GUIDE/push.png
---

# 마케팅 푸시

import { ThumbnailImage } from '@site/src/components/common/image/thumbnail-image';
import { BadgeWithVersion } from '@site/src/components/svg/badge-with-version';

<ThumbnailImage src='/img/docs/thumbnails/GUIDE/push.png'/>

> 🚀 **추가된 버전:** <BadgeWithVersion type="SDK" version="v1.10.0" link="/docs/releases/v1/sdk/release-v-1-10-0" /> <BadgeWithVersion type="Android" version="v1.10.1" link="/docs/releases/v1/app-source/android/release-v-1-10-1" /> <BadgeWithVersion type="iOS" version="v1.10.1" link="/docs/releases/v1/app-source/ios/release-v-1-10-1" />  
> 🛠️ **개선된 버전:** <BadgeWithVersion type="SDK" version="v1.11.2" link="/docs/releases/v1/sdk/release-v-1-11-2" /> <BadgeWithVersion type="Android" version="v1.11.3" link="/docs/releases/v1/app-source/android/release-v-1-11-3" /> <BadgeWithVersion type="iOS" version="v1.11.3" link="/docs/releases/v1/app-source/ios/release-v-1-11-3" /> - 네이티브 마케팅 수신 동의 팝업, 앱 설정 화면 추가  
> 🔔 **최신화 일자:** 2026-08-21

<!-- 2026-08-20 대시보드 노코드 광고성 푸시 동의 팝업 기능 추가에 따라 [방법 A] 나쵸코드 팝업 / [방법 B] 직접 개발 구조로 분리 -->

이 문서는 **광고성 푸시 알림**(**마케팅 푸시**)의 법적 요구사항과 nachocode를 활용한 구현 방법을 안내합니다.

:::tip 어떤 방식으로 구현하시나요?

나쵸코드 대시보드의 **광고성 푸시 설정**에서 선택한 **팝업 개발 방식**에 따라 필요한 작업이 달라집니다.

- **나쵸코드로 만들게요** → [**[방법 A] 나쵸코드 동의 팝업 사용하기**](#nachocode-popup) 섹션만 보시면 됩니다. SDK 메서드 **3가지**만 연동하면 끝입니다.
- **직접 개발할게요** → [**[방법 B] 동의 팝업 직접 개발하기**](#custom-implementation) 섹션을 참고하여 SDK로 동의 관리를 직접 구현합니다.

아직 선택하지 않았다면 [구현 방식 선택하기](#choose-method)에서 두 방식을 비교해 보세요.

:::

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

- [x] **사전 동의 받기**: 마케팅 푸시 전송 전 반드시 사용자 동의 획득
- [x] **야간 푸시 별도 동의**: 21:00~08:00 시간대 전송 시 별도 동의 필요
- [x] **명확한 동의 문구**: 어떤 정보를 받게 되는지 구체적으로 설명
- [x] **선택적 동의**: 마케팅 동의는 서비스 이용의 필수 조건이 아님을 명시
- [x] **수신 거부 기능**: 설정에서 언제든 동의 철회 가능하도록 구현
- [x] **동의 기록 보관**: 서비스 서버에 동의 일시 및 내역 저장 (법적 분쟁 대비)

#### 권장 사항

- [x] **정보성 푸시와 구분**: 시스템 알림과 마케팅 알림을 명확히 구분
- [x] **동의 철회 안내**: 마케팅 푸시 발송 시 수신 거부 방법 안내

---

## 구현 방식 선택하기 {#choose-method}

nachocode는 광고성 푸시 수신 동의 팝업을 **두 가지 방식**으로 구현할 수 있도록 지원합니다.

:::info 대시보드 설정 경로
[**나쵸코드 대시보드**](https://nachocode.io/?utm_source=docs&utm_medium=documentation&utm_campaign=devguide) > **푸시 알림 > 설정** > **광고성 푸시 설정** 탭 > **광고성 푸시** 활성화 > **1. 팝업 개발 방식**
:::

<!-- TODO: 대시보드 > 광고성 푸시 설정 > 팝업 개발 방식 선택 화면 스크린샷 추가 -->

| 구분                    | [방법 A] 나쵸코드로 만들게요                                 | [방법 B] 직접 개발할게요                                                                               |
| ----------------------- | ------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ |
| **동의 팝업 UI**        | 대시보드에서 **노코드**로 제작 (팝업 / 바텀 시트 / 풀스크린) | 웹 프론트엔드에서 **직접 개발**                                                                        |
| **팝업 노출 시점**      | 대시보드에서 설정 (로그인 직후 또는 앱 실행 시)              | 직접 제어                                                                                              |
| **동의 저장·토픽 구독** | 네이티브 레이어에서 **자동 처리**                            | [`setMarketingAllowed()`](/docs/sdk/namespaces/push#set-marketing-allowed) 등 SDK 메서드 **직접 호출** |
| **수신 동의 변경 화면** | 네이티브 **앱 설정 화면** 제공                               | 직접 구현 (또는 네이티브 앱 설정 화면 활용)                                                            |
| **필요한 SDK 연동**     | `setUserId()`, `deleteUserId()`, `withdrawUser()` **3가지**  | 유저 상태 관리 + 마케팅 동의 조회/설정 **전체**                                                        |
| **필요 버전**           | SDK **v1.11.2+**, 앱소스 **v1.11.3+**                        | SDK **v1.10.0+**, 앱소스 **v1.10.1+**                                                                  |
| **추천 대상**           | 빠르게 도입하고 싶거나 개발 리소스가 제한적인 경우           | 팝업 디자인, 노출 시점, 동의 항목을 세밀하게 제어해야 하는 경우                                        |
| **가이드 바로가기**     | [**[방법 A] 나쵸코드 동의 팝업 사용하기**](#nachocode-popup) | [**[방법 B] 동의 팝업 직접 개발하기**](#custom-implementation)                                         |

:::info 어떤 방식을 선택하더라도 동일하게 처리되는 것
게스트/회원 동의 구분, 로그인·로그아웃·탈퇴 시 동의 상태 전환, 마케팅 토픽 구독 관리 등 **법적 준수를 위한 핵심 로직은 nachocode가 두 방식 모두 동일하게 자동 처리**합니다.

동작 원리가 궁금하다면 [게스트 vs 회원 동의](#guest-vs-user), [로그아웃, 회원 탈퇴 시 중요한 법적 원칙](#logout-principle)을 참고하세요.
:::

---

## [방법 A] 나쵸코드 동의 팝업 사용하기 {#nachocode-popup}

대시보드에서 **나쵸코드로 만들게요**를 선택하면, 광고성 푸시 수신 동의 팝업이 **앱의 네이티브 레이어에서 직접 제공**됩니다.  
동의 팝업 UI, 동의 저장, 토픽 구독, 수신 동의 변경 화면까지 모두 nachocode가 처리하므로,  
개발자는 **사용자의 로그인 상태를 SDK에 알려주는 3가지 메서드만 연동**하면 됩니다.

:::warning 버전 요구사항
나쵸코드 동의 팝업은 <BadgeWithVersion type="SDK" version="v1.11.2" link="/docs/releases/v1/sdk/release-v-1-11-2" /> <BadgeWithVersion type="Android" version="v1.11.3" link="/docs/releases/v1/app-source/android/release-v-1-11-3" /> <BadgeWithVersion type="iOS" version="v1.11.3" link="/docs/releases/v1/app-source/ios/release-v-1-11-3" /> 이상에서 지원됩니다.  
이전 버전의 앱소스로 빌드된 앱에서는 팝업이 노출되지 않으니, 앱을 **새 버전으로 다시 빌드**해 주세요.
:::

### 1단계. 대시보드에서 팝업 설정하기 {#nachocode-popup-dashboard}

대시보드의 **광고성 푸시 설정**은 아래 4단계로 구성됩니다.

<!-- TODO: 대시보드 > 광고성 푸시 설정 (나쵸코드로 만들게요) 각 단계 스크린샷 추가 -->

| 단계  | 설정 항목          | 내용                                                                                                                                  |
| ----- | ------------------ | ------------------------------------------------------------------------------------------------------------------------------------- |
| **1** | **팝업 개발 방식** | **나쵸코드로 만들게요** 선택                                                                                                          |
| **2** | **팝업**           | 팝업 **타입**(팝업 / 바텀 시트 / 풀스크린), **모서리**(각진 / 보통 / 둥근), **제목·본문** 등 팝업의 디자인과 문구 설정                |
| **3** | **이벤트**         | 팝업 **노출 시점** 설정 — **로그인 기능 있어요**(로그인 직후 노출) / **로그인 기능 없어요**(앱 실행 시 노출)                          |
| **4** | **앱 설정 화면**   | 사용자가 언제든 수신 동의 여부를 변경할 수 있도록 **앱 설정 화면**을 앱 내 페이지에 연결 ([3단계](#nachocode-popup-app-setting) 참고) |

:::info 로그인 기능이 없는 앱이라면
**로그인 기능 없어요**를 선택하면 **앱 실행 시점**에 동의 팝업이 노출되며, 동의 여부는 **게스트(기기) 동의**로 관리됩니다.  
로그인이 없어 `setUserId()` 등으로 알려줄 유저 상태가 없으므로, 아래 [2단계 SDK 연동](#nachocode-popup-sdk)은 건너뛰고 [3단계 앱 설정 화면 연결](#nachocode-popup-app-setting)만 진행하면 됩니다.
:::

### 2단계. SDK 연동하기 — 메서드 3가지 {#nachocode-popup-sdk}

대시보드 **3. 이벤트** 단계의 **이벤트 설정 마무리**에서 안내하는 SDK 연동입니다.

나쵸코드 동의 팝업은 **로그인 직후**에 노출되고, 동의 상태는 **로그인 → 로그아웃 → 탈퇴**에 따라 게스트/회원 상태가 전환됩니다.  
따라서 앱이 **사용자의 상태 변화를 감지**할 수 있도록, 서비스의 해당 시점에 아래 3가지 메서드를 호출해 주세요.

| 시점          | 호출 메서드                                                                 | nachocode가 자동으로 처리하는 것                                                         |
| ------------- | --------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| **로그인**    | [`Nachocode.user.setUserId(userId)`](/docs/sdk/namespaces/user#set-user-id) | 회원 상태로 전환, 푸시 토큰 등록, 해당 회원의 기존 동의 정보 동기화, **동의 팝업 노출**  |
| **로그아웃**  | [`Nachocode.user.deleteUserId()`](/docs/sdk/namespaces/user#delete-user-id) | 게스트 상태로 전환, 회원 마케팅 토픽 구독 해제, 게스트 동의 정보 복원                    |
| **회원 탈퇴** | [`Nachocode.user.withdrawUser()`](/docs/sdk/namespaces/user#withdraw-user)  | 해당 회원의 모든 유저·디바이스 정보 삭제, 모든 마케팅 토픽 구독 해제, 게스트 상태로 전환 |

:::danger SDK 연동을 진행하지 않으면
**광고성 푸시 알림이 고객에게 도착하지 않습니다.**  
nachocode 서버와 네이티브 레이어는 위 메서드 호출 없이는 사용자의 로그인 상태를 스스로 알 수 없으므로, 동의 팝업 노출과 토픽 구독이 정상적으로 처리되지 않습니다.
:::

<br/>

#### 로그인 시 — `setUserId()`

사용자가 로그인에 성공한 직후 호출합니다. 이 호출을 기준으로 **동의 팝업이 노출**됩니다.

```javascript
// 로그인 핸들러에서 사용
async function handleLogin(userId) {
  // 서비스 로그인 성공 후 nachocode에 사용자 ID 설정
  const result = await Nachocode.user.setUserId(userId);

  if (result.status === 'success') {
    console.log('사용자 ID가 설정되었습니다:', userId);
  } else {
    console.error('사용자 ID 설정 실패:', result.message);
  }
}
```

:::tip 푸시 토큰 등록은 따로 하지 않아도 됩니다
`setUserId()`는 [`registerPushToken()`](/docs/sdk/namespaces/push#register-push-token)이 수행하던 **푸시 토큰 등록을 내부적으로 함께 처리**합니다.  
`setUserId()`를 사용한다면 `registerPushToken()`을 중복 호출하지 않는 것을 권장합니다.
:::

:::tip 자동 로그인도 잊지 마세요
앱을 다시 실행했을 때 저장된 세션으로 **자동 로그인**되는 경우에도 `setUserId()`를 호출해 주세요.  
앱 실행 시마다 호출해도 문제없으며, 이미 동의 여부를 선택한 사용자에게는 팝업이 중복 노출되지 않습니다.
:::

<br/>

#### 로그아웃 시 — `deleteUserId()`

사용자가 로그아웃할 때 호출합니다. 앱이 **게스트 상태로 전환**되며, 저장되어 있던 게스트 동의 정보를 기준으로 마케팅 푸시 수신 여부가 결정됩니다.

```javascript
// 로그아웃 핸들러에서 사용
async function handleLogout() {
  // 서비스 로그아웃 처리 후 nachocode에 사용자 ID 제거
  const result = await Nachocode.user.deleteUserId();

  if (result.status === 'success') {
    console.log('사용자 ID가 삭제되었습니다.');
  } else {
    console.error('사용자 ID 삭제 실패:', result.message);
  }
}
```

:::warning 주의사항
명시적으로 사용자가 로그아웃 할 때뿐 아니라, **토큰, 세션 만료 등으로 인한 유저 로그아웃 시에도 반드시 `deleteUserId()`를 호출해서 유저 상태를 관리**해주세요.

네이티브 레이어와 nachocode 측 서버에서는 해당 메서드를 호출하지 않을 경우 유저의 현재 로그인 상태를 자체적으로 알 수 없습니다.
:::

<br/>

#### 회원 탈퇴 시 — `withdrawUser()`

사용자가 회원 탈퇴를 완료했을 때 호출합니다. nachocode 서버에서 해당 회원의 **모든 유저 및 디바이스 정보가 완전히 삭제**되고, 마케팅 푸시 전송이 즉시 중단됩니다.

```javascript
// 회원 탈퇴 핸들러에서 사용
async function handleWithdraw() {
  // 서비스 회원 탈퇴 처리 후 nachocode 유저 및 디바이스 정보 초기화
  const result = await Nachocode.user.withdrawUser();

  if (result.status === 'success') {
    console.log('사용자 탈퇴가 완료되었습니다.');
    // 탈퇴 완료 후 처리 (ex. 로그인 페이지로 이동)
    window.location.href = '/login';
  } else {
    console.error('사용자 탈퇴 실패:', result.message);
  }
}
```

:::warning 복구할 수 없는 작업입니다
`withdrawUser()`는 마케팅 동의 정보를 포함한 **모든 사용자 데이터를 영구 삭제**합니다. 실행 전에 사용자에게 명확한 확인 절차를 제공하는 것을 강력히 권장합니다.
:::

:::info 웹(서버)에서 회원 탈퇴를 처리한다면
서버에서 [**`[DELETE] /api/app-user/v2`**](../../api/app-user/user-management.endpoints#delete-app-user-v2) API를 호출하여 `withdrawUser()`와 동일하게 탈퇴 처리할 수 있습니다.
:::

### 3단계. 앱 설정 화면 연결하기 {#nachocode-popup-app-setting}

정보통신망법에 따라 사용자는 **언제든지 수신 거부 의사를 쉽게 표시**할 수 있어야 합니다.  
nachocode는 마케팅 푸시 동의와 야간 푸시 동의를 사용자가 직접 변경할 수 있는 **네이티브 앱 설정 화면**을 제공합니다.

<div style={{"textAlign":"center"}}>
  <img alt="nachocode-app-native-setting-view" src="/img/docs/settings/nachocode_app_native_setting_view.png" style={{maxHeight:"600px", border:"1px solid #dbdbdb", marginBottom: "1.5rem"}} />
</div>

대시보드 **4. 앱 설정 화면** 단계의 체크리스트에 따라, **로그인 후 접근 가능한 페이지**(마이페이지, 설정 등)에 앱 설정 화면으로 이동하는 버튼을 추가해 주세요.

연결 방법은 두 가지 중 편한 방식을 선택하면 됩니다.

<!-- TODO: 대시보드 > 광고성 푸시 설정 > 앱 설정 화면 단계 스크린샷 추가 -->

#### 방법 1. 앱 설정 화면 URL 연결 (노코드)

대시보드에서 제공하는 **앱 설정 화면 URL**을 복사하여 버튼의 링크로 삽입합니다.

1. 대시보드 **4. 앱 설정 화면** 단계에서 **앱 설정 화면 URL 복사**
2. 로그인으로 접근 가능한 페이지에 **버튼 추가**
3. 버튼에 복사한 **앱 설정 화면 URL 삽입**

```html
<!-- 예시: 마이페이지의 '앱 설정' 버튼 -->
<a href="https://cdn.nachocode.io/nachocode/client-widget/open-app-setting">
  앱 설정
</a>
```

#### 방법 2. SDK 메서드 호출

[`Nachocode.setting.openAppSettingView()`](/docs/sdk/namespaces/setting#open-app-setting-view)를 호출하면 동일한 네이티브 앱 설정 화면이 열립니다.

```javascript
// '앱 설정' 버튼 클릭 시 네이티브 앱 설정 화면 열기
document.getElementById('app-setting-button').addEventListener('click', () => {
  Nachocode.setting.openAppSettingView();
});
```

:::tip 앱 환경에서만 노출하기
앱 설정 화면은 nachocode 앱 환경에서만 동작합니다.  
웹 브라우저에서는 버튼을 숨기고 싶다면 [`Nachocode.env.isApp()`](/docs/sdk/namespaces/env#is-app)으로 앱 환경 여부를 확인하세요.
:::

### 전체 동작 흐름 {#nachocode-popup-flow}

```text
[사용자 로그인]
   └─ 서비스: Nachocode.user.setUserId(userId) 호출
        └─ nachocode: 회원 상태 전환 → 푸시 토큰 등록 → 기존 동의 정보 동기화
             └─ 설정한 노출 시점에 네이티브 동의 팝업 노출
                  ├─ 동의하기 → 동의 저장 + 마케팅 토픽 구독 (자동)
                  └─ 거부하기 → 거부 저장 + 마케팅 토픽 구독 해제 (자동)

[수신 동의 변경]
   └─ 사용자: 앱 설정 화면에서 마케팅/야간 푸시 동의 변경 (자동 반영)

[사용자 로그아웃]
   └─ 서비스: Nachocode.user.deleteUserId() 호출
        └─ nachocode: 게스트 상태 전환 → 게스트 동의 기준으로 토픽 재구성 (자동)

[회원 탈퇴]
   └─ 서비스: Nachocode.user.withdrawUser() 호출
        └─ nachocode: 모든 유저·디바이스 정보 삭제 → 마케팅 푸시 전송 중단 (자동)
```

:::tip 여기까지 하면 끝입니다
**[방법 A]** 를 사용하는 경우 아래 **[방법 B]** 섹션의 `setMarketingAllowed()`, `setNightAllowed()` 등은 **직접 호출할 필요가 없습니다.** nachocode가 내부적으로 어떻게 동의를 관리하는지 이해하고 싶을 때 참고용으로만 확인하세요.

서비스 화면에서 현재 동의 상태를 표시하고 싶다면, [`getMarketingPreference()`](/docs/sdk/namespaces/push#get-marketing-preference)로 **조회**도 언제든 가능합니다.
:::

---

## [방법 B] 동의 팝업 직접 개발하기 {#custom-implementation}

대시보드에서 **직접 개발할게요**를 선택하면, 동의 팝업 UI를 **서비스에서 직접 개발**하고  
사용자의 **로그인 상태**와 **광고성 푸시 수신 동의 여부**를 SDK를 통해 nachocode에 알려주어야 합니다.

<!-- TODO: 대시보드 > 광고성 푸시 설정 (직접 개발할게요) > SDK 연동 단계 스크린샷 추가 -->

:::danger SDK 연동을 진행하지 않으면
**광고성 푸시 알림이 고객에게 도착하지 않습니다.**  
직접 개발한 팝업에서 사용자가 동의하더라도, SDK로 동의 여부를 전달하지 않으면 nachocode는 해당 사용자를 마케팅 푸시 대상으로 인식하지 못합니다.
:::

### 구현 체크리스트 {#custom-implementation-checklist}

- [x] **동의 팝업 UI 개발**: [법적 준수 체크리스트](#compliance-checklist)의 문구 요건(명확한 동의 문구, 선택적 동의 명시, 야간 동의 별도 항목)을 반영
- [x] **유저 상태 연동**: 로그인 [`setUserId()`](/docs/sdk/namespaces/user#set-user-id) / 로그아웃 [`deleteUserId()`](/docs/sdk/namespaces/user#delete-user-id) / 회원 탈퇴 [`withdrawUser()`](/docs/sdk/namespaces/user#withdraw-user)
- [x] **동의 여부 설정**: 팝업에서 선택한 결과를 [`setMarketingPreference()`](/docs/sdk/namespaces/push#set-marketing-preference) 또는 [`setMarketingAllowed()`](/docs/sdk/namespaces/push#set-marketing-allowed) / [`setNightAllowed()`](/docs/sdk/namespaces/push#set-night-allowed)로 전달
- [x] **동의 상태 조회**: [`getMarketingPreference()`](/docs/sdk/namespaces/push#get-marketing-preference)로 현재 상태를 조회하여 팝업 노출 여부 판단
- [x] **수신 거부 기능**: 설정 화면에서 언제든 동의를 변경할 수 있도록 구현 (직접 구현 또는 [`openAppSettingView()`](/docs/sdk/namespaces/setting#open-app-setting-view) 활용)

### 구현 예시 {#custom-implementation-example}

```javascript
// 1. 로그인 성공 후 사용자 ID 설정 (푸시 토큰 등록 포함)
await Nachocode.user.setUserId(userId);

// 2. 현재 회원의 동의 상태 조회
const preference = await Nachocode.push.getMarketingPreference();

// 3. 아직 동의 여부를 선택하지 않은 경우에만 직접 개발한 팝업 노출
if (preference.user.marketingAllowed === null) {
  showMarketingConsentPopup({
    // 4. 팝업에서 선택한 결과를 nachocode에 전달
    onSubmit: async ({ marketingAllowed, nightAllowed }) => {
      const result = await Nachocode.push.setMarketingPreference({
        marketingAllowed,
        nightAllowed,
      });

      if (result.status === 'success') {
        console.log('마케팅 수신 동의가 설정되었습니다.');
      } else {
        console.error('설정 실패:', result.message);
      }
    },
  });
}
```

이어지는 섹션에서는 nachocode가 마케팅 동의를 어떻게 관리하는지, 직접 구현 시 알아야 할 동작 원리를 상세히 설명합니다.

---

### 동의 상태 조회 {#get-consent-status}

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

- 해당 `userId`의 기존 마케팅 동의 정보를 조회
- 기존 회원이 다시 로그인한 경우 이전 동의 상태를 **자동 복원**

<br/>

#### 2. 동의 변경 시 토픽 구독 자동 관리

```javascript
// 한 디바이스에서 마케팅 동의 변경
await Nachocode.push.setMarketingAllowed(false);

// 또는 야간 푸시 동의 변경
await Nachocode.push.setNightAllowed(false);
```

- 디바이스의 마케팅 토픽 구독/구독해제를 **자동 처리**

<br/>

#### 3. 로그아웃 시 자동 상태 전환

```javascript
// 사용자가 로그아웃할 때 단순히 userId 제거
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

:::warning 주의사항
명시적으로 사용자가 로그아웃 할 때뿐 아니라, **토큰, 세션 만료 등으로 인한 유저 로그아웃 시에도 반드시 `deleteUserId()`를 호출해서 유저 상태를 관리**해주세요.

네이티브 레이어와 nachocode 측 서버에서는 해당 메서드를 호출하지 않을 경우 유저의 현재 로그인 상태를 자체적으로 알 수 없습니다.
:::

<br/>

#### 4. 회원 탈퇴 시 모든 유저 및 디바이스 정보 초기화 ([v1.10.4](/docs/releases/v1/sdk/release-v-1-10-4)+)

```javascript
// 앱 내 회원 탈퇴 시
await Nachocode.user.withdrawUser();
```

- **nachocode 서버에서 해당 userId의 모든 정보 완전 삭제**
  - 해당 `userId`와 연결된 **모든 디바이스의 푸시 토큰 등록 해제**
  - 해당 `userId`의 **마케팅 동의 정보 완전 삭제** (게스트, 유저 모두)
  - 해당 `userId`의 **모든 사용자 설정 및 데이터 삭제**
- 현재 디바이스가 `user` 상태에서 `guest` 상태로 **자동 전환**
- 모든 `user`, `guest` 관련 마케팅 토픽 **자동 구독해제**

:::tip GDPR 및 개인정보 보호법 준수

nachocode는 GDPR 및 개인정보 보호법을 준수합니다.

- **서버 측 완전 삭제**: nachocode 서버에 저장된 해당 userId의 모든 데이터가 복구 불가능하게 삭제됩니다
- **다중 디바이스 지원**: 사용자가 여러 디바이스를 사용하더라도 모든 디바이스의 데이터가 삭제됩니다
- **법적 요구사항 충족**: 탈퇴 즉시 모든 마케팅 푸시 전송이 중단되며 재가입 전까지 발송되지 않습니다

개발자는 복잡한 데이터 삭제 로직을 작성할 필요 없이, **SDK 메서드 혹은 API 호출만으로 법적 요구사항을 완벽히 준수**할 수 있습니다.

:::

:::info 웹에서 회원 탈퇴 처리

앱뿐만 아니라 웹 환경에서도 회원 탈퇴 처리가 가능합니다.

- [**`[DELETE] /api/app-user/v2`**](../../api/app-user/user-management.endpoints#delete-app-user-v2) API Endpoint를 활용하여 서버에서 직접 탈퇴 처리
- SDK의 `withdrawUser()`와 동일하게 모든 유저 및 디바이스 정보 완전 삭제

:::

---

### 로그아웃, 회원 탈퇴 시 중요한 법적 원칙 {#logout-principle}

:::warning 로그아웃, 회원 탈퇴 시 필수 준수 사항

**정보통신망법 준수를 위해 다음 규칙을 반드시 지켜야 합니다.**

1. **회원이 수신거부**하면 **게스트 동의도 함께 철회**됩니다
2. **로그아웃 후에는 게스트 동의 상태를 기준**으로 마케팅 푸시 전송 여부 판단
3. 게스트 동의가 거부 상태라면 로그아웃 후 마케팅 푸시 전송 금지
4. **회원 탈퇴** 시, 회원/게스트 여부에 상관없이 **모든 마케팅 동의** 철회

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

##### 시나리오 3: 비로그인 동의 → 로그인 후 동의 → 회원 탈퇴 ([v1.10.4](/docs/releases/v1/sdk/release-v-1-10-4)+)

```javascript
// 1. 비로그인 상태에서 동의
await Nachocode.push.setMarketingAllowed(true);
// 결과: { guest: true, user: null }

// 2. 로그인 후 동의
await Nachocode.user.setUserId('user123');
await Nachocode.push.setMarketingAllowed(true);
// 결과: { guest: true, user: true }

// 3. 회원 탈퇴 후
await Nachocode.user.withdrawUser();
// 결과: 현재 디바이스 { guest: null, user: null }
// nachocode 서버에서 'user123'의 모든 유저 및 디바이스 정보 완전 삭제
// 'user123'으로 로그인된 모든 디바이스에 데이터 초기화 전파
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

나쵸코드 동의 팝업([방법 A](#nachocode-popup)) 또는 SDK([방법 B](#custom-implementation))를 통해 사용자의 마케팅 동의를 관리하면,  
nachocode 앱소스가 **내부적으로 마케팅 토픽 구독을 자동 처리**합니다.

:::info 향후 제공 예정

1. **nachocode 대시보드**: 마케팅 푸시 전송 기능 제공
2. **nachocode API**: 서버에서 직접 마케팅 푸시를 발송할 수 있는 API 또는 옵션 제공

:::

---

## 관련 문서 {#related-docs}

### SDK

- [**Nachocode.user**](/docs/sdk/namespaces/user) - 사용자 식별 관련 SDK 메서드

  - [`setUserId()`](/docs/sdk/namespaces/user#set-user-id) - 사용자 ID 설정 (로그인)
  - [`deleteUserId()`](/docs/sdk/namespaces/user#delete-user-id) - 사용자 ID 제거 (로그아웃)
  - [`withdrawUser()`](/docs/sdk/namespaces/user#withdraw-user) - 사용자 및 디바이스 정보 초기화 (회원 탈퇴) <BadgeWithVersion type="SDK" version="v1.10.4" link="/docs/releases/v1/sdk/release-v-1-10-4" />

- [**Nachocode.setting**](/docs/sdk/namespaces/setting) - 앱 설정 관련 SDK 메서드

  - [`openAppSettingView()`](/docs/sdk/namespaces/setting#open-app-setting-view) - 네이티브 앱 설정 화면 열기 (마케팅/야간 푸시 동의 변경) <BadgeWithVersion type="SDK" version="v1.11.2" link="/docs/releases/v1/sdk/release-v-1-11-2" />

- [**Nachocode.push**](/docs/sdk/namespaces/push) - 푸시 알림 관련 SDK 메서드

  - [`getMarketingAllowed()`](/docs/sdk/namespaces/push#get-marketing-allowed) - 마케팅 푸시 동의 상태 조회
  - [`setMarketingAllowed()`](/docs/sdk/namespaces/push#set-marketing-allowed) - 마케팅 푸시 동의 설정
  - [`getNightAllowed()`](/docs/sdk/namespaces/push#get-night-allowed) - 야간 푸시 동의 상태 조회
  - [`setNightAllowed()`](/docs/sdk/namespaces/push#set-night-allowed) - 야간 푸시 동의 설정
  - [`getMarketingPreference()`](/docs/sdk/namespaces/push#get-marketing-preference) - 마케팅 수신 동의 일괄 조회 <BadgeWithVersion type="SDK" version="v1.10.2" link="/docs/releases/v1/sdk/release-v-1-10-2" />
  - [`setMarketingPreference()`](/docs/sdk/namespaces/push#set-marketing-preference) - 마케팅 수신 동의 일괄 설정 <BadgeWithVersion type="SDK" version="v1.10.2" link="/docs/releases/v1/sdk/release-v-1-10-2" />

### API

- [**[DELETE] /api/app-user/v2**](../../api/app-user/user-management.endpoints#delete-app-user-v2) - 사용자 및 디바이스 정보 초기화 API (회원 탈퇴)
- [**[PUT] /api/app-user/v2/marketing**](../../api/app-user/user-preferences.endpoints#put-app-user-v2-marketing) - 사용자 광고성 푸시 알림 수신 동의 여부 변경 API (마케팅 동의)

### 릴리즈 노트

- [**SDK v1.11.2**](/docs/releases/v1/sdk/release-v-1-11-2) - `openAppSettingView()` 추가, `setUserId()` 푸시 토큰 등록 내부 처리
- [**Android v1.11.3**](/docs/releases/v1/app-source/android/release-v-1-11-3) / [**iOS v1.11.3**](/docs/releases/v1/app-source/ios/release-v-1-11-3) - 네이티브 마케팅 푸시 동의 팝업, 앱 설정 화면 추가

---
