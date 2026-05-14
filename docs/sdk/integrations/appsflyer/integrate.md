---
sidebar_label: 연동하기
pagination_label: 연동하기 (Integrate)
description: nachocode SDK의 `appsflyer` 네임스페이스를 사용하기 위한 필수 사전 준비 절차를 설명합니다. AppsFlyer 대시보드에서 앱 등록부터 nachocode 연동까지의 상세한 방법을 제공합니다.
keywords:
  [
    앱 마케팅,
    앱스플라이어 어트리뷰션,
    앱스플라이어 사용자 추적,
    앱스플라이어 이벤트 로깅,
    앱스플라이어 커스텀 유저 아이디,
    AppsFlyer 마케팅 어트리뷰션,
    AppsFlyer 연동,
    앱스플라이어 연동,
    앱스플라이어 Dev Key,
    앱스플라이어 원링크,
    앱스플라이어 인게이지,
    AppsFlyer Marketing Attribution,
    AppsFlyer Attribution,
    AppsFlyer User Tracking,
    AppsFlyer Event Logging,
    AppsFlyer Custom User ID,
    AppsFlyer Dev Key,
    AppsFlyer OneLink,
    AppsFlyer Engage,
    AppsFlyer Integration,
  ]
image: /img/docs/thumbnails/SDK/appsflyer.png
---

# 앱스플라이어 (`appsflyer`) - 연동하기

import { BadgeWithVersion } from '@site/src/components/svg/badge-with-version';
import { ThumbnailImage } from '@site/src/components/common/image/thumbnail-image';

<ThumbnailImage src='/img/docs/thumbnails/SDK/appsflyer.png'/>

> 🚀 **추가된 버전 :** <BadgeWithVersion type="SDK" version="v1.7.0" link="/docs/releases/v1/sdk/release-v-1-7-0" /> <BadgeWithVersion type="Android" version="v1.7.0" link="/docs/releases/v1/app-source/android/release-v-1-7-0" /> <BadgeWithVersion type="iOS" version="v1.7.0" link="/docs/releases/v1/app-source/ios/release-v-1-7-0" />  
> 🔔 **최신화 일자:** 2026-01-16

## **필수 선행 작업** {#prerequisite}

nachocode SDK로 **AppsFlyer 연동 기능**을 사용하기 위해서는 아래 사항이 먼저 완료되어야 합니다.

### 1. AppsFlyer 대시보드에서 앱 추가 {#prerequisite-step-1}

#### 1-1. [AppsFlyer 대시보드](https://hq1.appsflyer.com/)에 로그인 후 새로운 앱 추가 {#prerequisite-step-1-1}

#### 1-2. 앱 정보 입력 및 플랫폼 선택 {#prerequisite-step-1-2}

- **Android**
  - 출시된 앱: 구글 플레이 스토어 URL 입력
  - 승인 대기 중, 배포되지 않음: 안드로이드 패키지명 입력
- **iOS**
  - 출시된 앱: 앱스토어 URL 입력
  - 승인 대기 중, 배포되지 않음: 국가, iOS App ID 입력

![appsflyer_prerequisite_step_1_2](/img/docs/appsflyer/appsflyer_prerequisite_step_1_2.png)

:::info 앱스플라이어 공식 문서 바로가기
➡️ [앱스플라이어에 앱 추가하기](https://support.appsflyer.com/hc/ko/articles/207377436-%EC%95%B1%EC%8A%A4%ED%94%8C%EB%9D%BC%EC%9D%B4%EC%96%B4%EC%97%90-%EC%95%B1-%EC%B6%94%EA%B0%80%ED%95%98%EA%B8%B0)
:::

<br/>

---

### 2. AppsFlyer에서 Dev Key 발급 {#prerequisite-step-2}

#### 2-1. AppsFlyer 대시보드에서 [ 설정 ] → [ 앱 설정 ] 접속 {#prerequisite-step-2-1}

#### 2-2. [ SDK 인증 ] → **Dev Key** 복사 {#prerequisite-step-2-2}

- **Dev Key**는 [nachocode 연동 설정](#prerequisite-step-3) 시 필요합니다.

![appsflyer_dashboard_dev_key](/img/docs/appsflyer/appsflyer_prerequisite_step_2_2.png)

<br/>

---

### 3. nachocode에 AppsFlyer Dev Key 등록 {#prerequisite-step-3}

#### 3-1. [nachocode 대시보드](https://nachocode.io/?utm_source=docs&utm_medium=documentation&utm_campaign=devguide)에서 [ 앱 설정 ] → [ 연동 ] 접속 {#prerequisite-step-3-1}

![nachocode_dashboard_linked_services](/img/docs/appsflyer/nachocode_dashboard_linked_services.png)

#### 3-2. 앱스플라이어 토글 활성화 {#prerequisite-step-3-2}

![nachocode_dashboard_linked_services_appsflyer](/img/docs/appsflyer/nachocode_dashboard_linked_services_appsflyer.png)

#### 3-3. SDK 인증을 위해 [2-2](#prerequisite-step-2-2)에서 복사한 **Dev Key** 입력 {#prerequisite-step-3-3}

---

### 4. (선택사항) AppsFlyer 인게이지 / 원링크 관리 설정 {#prerequisite-step-4}

딥링크 어트리뷰션 및 리타겟팅 캠페인을 위해 원링크 설정이 필요한 경우

#### 4-1. AppsFlyer 대시보드에서 [ 인게이지 ] → [ 원링크 관리 ] 접속 {#prerequisite-step-4-1}

![appsflyer_prerequisite_step_4_1](/img/docs/appsflyer/appsflyer_prerequisite_step_4_1.png)

#### 4-2. 새로운 원링크 템플릿 생성 {#prerequisite-step-4-2}

![appsflyer_prerequisite_step_4_2](/img/docs/appsflyer/appsflyer_prerequisite_step_4_2.png)

#### 4-3. 새로운 원링크 생성 {#prerequisite-step-4-3}

![appsflyer_prerequisite_step_4_3](/img/docs/appsflyer/appsflyer_prerequisite_step_4_3.png)

#### 4-4. 원링크 설정 완료 후 **원링크 도메인** 복사 {#prerequisite-step-4-4}

- **원링크 도메인**은 [nachocode 연동 설정](#prerequisite-step-5) 시 필요합니다.
- **원링크 도메인**은 [ 템플릿 ] → [ 하위 도메인 ]에서 등록한 **서브도메인**을 의미합니다.
- ex. `https://yourapp.onelink.me`

![appsflyer_prerequisite_step_4_4](/img/docs/appsflyer/appsflyer_prerequisite_step_4_4.png)

<br/>

---

### 5. (선택사항) 발급한 원링크 도메인 [nachocode](https://nachocode.io/?utm_source=docs&utm_medium=documentation&utm_campaign=devguide)에 등록 {#prerequisite-step-5}

원링크를 사용하는 경우, OneLink 도메인을 nachocode에 등록해야 합니다.

![nachocode_dashboard_linked_services_appsflyer_onelink](/img/docs/appsflyer/nachocode_dashboard_linked_services_appsflyer_onelink.png)

앱스플라이어에서 발급받은 **원링크 도메인** ([4단계](#prerequisite-step-4)에서 복사한 값)을 OneLink 도메인에 등록해주세요.

---

### 6. [nachocode 대시보드](https://nachocode.io/?utm_source=docs&utm_medium=documentation&utm_campaign=devguide)에서 재빌드 수행 {#prerequisite-step-6}

#### 6-1. [ 앱 빌드 ] → [ 안드로이드 앱 ] 혹은 [ iOS 앱 ] → [ 빌드 ] 접속 {#prerequisite-step-6-1}

#### 6-2. [ 새 버전 만들기 ] 버튼을 클릭하여 빌드 {#prerequisite-step-6-2}

![nachocode_build_android_new_version](/img/docs/android/nachocode_build_android_new_version.png)

:::info **빌드 필수!**

- **AppsFlyer 관련 기능은 새로 빌드 된 버전의 앱부터 적용됩니다.**

:::

<br/>

---

## **설정 완료 확인** {#verification}

설정이 완료되면 다음 방법으로 확인할 수 있습니다.

### 앱 빌드 후 SDK 테스트 {#verification-1}

```javascript
// AppsFlyer 커스텀 이벤트 로깅
const result = await Nachocode.appsflyer.logEvent('integration_success', {
  integration_success: true,
});

if (result.status === 'success') {
  console.log('AppsFlyer 연동 성공: ', result.message);
} else {
  console.error('AppsFlyer 연동 확인 필요: ', result.errorCode, result.message);
}
```

---

## **문제 해결** {#troubleshooting}

### 자주 발생하는 문제

#### 1. AppsFlyer 데이터가 수집되지 않는 경우

- **원인**: Dev Key 설정이 올바르지 않거나 빌드가 완료되지 않았을 때
- **해결방법**
  - Dev Key 정확성 재확인
  - 새 버전으로 재빌드

#### 2. 원링크가 동작하지 않는 경우

- **원인**: 원링크 도메인이 nachocode에 등록되지 않았을 때
- **해결방법**
  - [5단계](#prerequisite-step-5) 원링크 도메인 등록 확인
  - AppsFlyer 대시보드에서 원링크 설정 재확인

#### 3. 어트리뷰션 데이터가 부정확한 경우

- **원인**: 앱 스토어 정보와 AppsFlyer 설정이 일치하지 않을 때
- **해결방법**
  - 패키지 이름/Bundle ID 일치 여부 확인
  - AppsFlyer 앱 설정에서 스토어 정보 재확인

---

:::tip **지원팀 연락처**
설정 과정에서 문제가 발생하거나 질문이 있으시면 언제든지 연락주세요.

**이메일**: [support@nachocode.io](mailto:support@nachocode.io)  
**응답 시간**: 영업일 기준 1~2일 이내
:::

---
