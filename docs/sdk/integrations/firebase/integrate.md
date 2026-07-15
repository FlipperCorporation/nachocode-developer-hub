---
sidebar_label: 연동하기
pagination_label: 연동하기 (Integrate)
description: nachocode SDK의 `firebase` 네임스페이스를 사용하기 위한 필수 사전 준비 절차를 설명합니다. Firebase 프로젝트 설정 및 nachocode 대시보드에서 Firebase Analytics를 연동하는 상세한 방법을 제공합니다.
keywords:
  [
    Firebase Analytics,
    파이어베이스 애널리틱스,
    Firebase 연동,
    Firebase 이벤트,
    Firebase 사용자 속성,
    firebase analytics,
    firebase integration,
    firebase event logging,
  ]
image: /img/docs/thumbnails/SDK/firebase.png
---

# 파이어베이스 (`firebase`) - 연동하기

import { BadgeWithVersion } from '@site/src/components/svg/badge-with-version';
import { ThumbnailImage } from '@site/src/components/common/image/thumbnail-image';

<!-- <ThumbnailImage src='/img/docs/thumbnails/SDK/firebase.png'/> -->

> 🚀 **추가된 버전 :** <BadgeWithVersion type="SDK" version="v1.11.0" link="/docs/releases/v1/sdk/release-v-1-11-0" /> <BadgeWithVersion type="Android" version="v1.11.0" link="/docs/releases/v1/app-source/android/release-v-1-11-0" /> <BadgeWithVersion type="iOS" version="v1.11.0" link="/docs/releases/v1/app-source/ios/release-v-1-11-0" />  
> 🔔 **최신화 일자:** 2026-07-15

## **필수 선행 작업** {#prerequisite}

nachocode SDK로 **Firebase Analytics 기능**을 사용하기 위해서는 아래 사항이 먼저 완료되어야 합니다.

### 1. [Firebase 콘솔](https://console.firebase.google.com/)에서 프로젝트 생성 또는 선택 {#prerequisite-step-1}

- **Firebase 콘솔**에 접속하여 **새 프로젝트를 생성**하거나 **기존 프로젝트를 선택**합니다.

<!-- ![firebase_console_projects](/img/docs/firebase/firebase_console_projects.png) -->

<br/>

### 2. Firebase 프로젝트에 Android 앱 추가 {#prerequisite-step-2}

- [ **프로젝트 개요** > **프로젝트 설정** ]에서 **[ Android 앱 추가 ]** 버튼을 클릭합니다.
- **Android 패키지 이름**을 입력합니다 (nachocode 대시보드의 앱 패키지 이름과 동일해야 합니다).

<!-- ![firebase_add_android_app](/img/docs/firebase/firebase_add_android_app.png) -->

<br/>

### 3. Firebase 프로젝트에 iOS 앱 추가 {#prerequisite-step-3}

- [ **프로젝트 개요** > **프로젝트 설정** ]에서 **[ iOS 앱 추가 ]** 버튼을 클릭합니다.
- **iOS 번들 ID**를 입력합니다 (nachocode 대시보드의 번들 ID와 동일해야 합니다).

<!-- ![firebase_add_ios_app](/img/docs/firebase/firebase_add_ios_app.png) -->

<br/>

### 4. Firebase 구성 파일 다운로드 {#prerequisite-step-4}

- **Android 앱**의 경우 `google-services.json` 파일을 다운로드합니다.
- **iOS 앱**의 경우 `GoogleService-Info.plist` 파일을 다운로드합니다.

<!-- ![firebase_download_config](/img/docs/firebase/firebase_download_config.png) -->

:::info
이미 Firebase 푸시 알림을 사용 중인 경우, 기존 구성 파일을 재사용할 수 있습니다.
:::

<br/>

### 5. Firebase Analytics 사용 설정 확인 {#prerequisite-step-5}

- [ **Analytics** > **대시보드** ]에서 Analytics가 활성화되어 있는지 확인합니다.

<!-- ![firebase_analytics_dashboard](/img/docs/firebase/firebase_analytics_dashboard.png) -->

<br/>

### 6. [nachocode 대시보드](https://nachocode.io/?utm_source=docs&utm_medium=documentation&utm_campaign=devguide)에 구성파일 업로드 {#prerequisite-step-6}

- [ **앱 기능** > **푸시 알림** > **앱 푸시 설정** ]에 다운받은 파일(`GoogleService-Info.plist`, `google-services.json`)을 업로드합니다.

<!-- ![nachocode_firebase_push_notification_setting](/img/docs/firebase/nachocode_firebase_push_notification_setting.png) -->

:::warning
**이미 푸시 설정이 되어있더라도 Firebase Analytics 사용을 위해 최신 구성 파일을 업로드해야 합니다.**
:::

<br/>

### 7. [nachocode 대시보드](https://nachocode.io/?utm_source=docs&utm_medium=documentation&utm_campaign=devguide)에서 재빌드 {#prerequisite-step-8}

- [ **앱 빌드** > **Android 앱 빌드** ]에서 **[ 새 버전 만들기 ]** 버튼을 클릭하여 Android 앱을 빌드합니다.
- [ **앱 빌드** > **iOS 앱 빌드** ]에서 **[ 새 버전 만들기 ]** 버튼을 클릭하여 iOS 앱을 빌드합니다.

<!-- ![nachocode_build_new_version](/img/docs/firebase/nachocode_build_new_version.png) -->

:::warning
Firebase Analytics 기능은 새로 빌드 된 버전의 앱부터 적용됩니다.
:::

<br/>

---

## **연동 확인** {#verify-integration}

Firebase Analytics 연동이 제대로 되었는지 확인

1. **앱을 실행**합니다.
2. nachocode SDK를 통해 테스트 이벤트를 로깅합니다.

```javascript
// 테스트 이벤트 로깅
const result = await Nachocode.firebase.logEvent('test_event', {
  test_param: 'test_value',
});

if (result.status === 'success') {
  console.log('Firebase Analytics 연동 성공!');
}
```

---

:::tip **지원팀 연락처**
설정 과정에서 문제가 발생하거나 질문이 있으시면 언제든지 연락주세요.

**이메일**: [support@nachocode.io](mailto:support@nachocode.io)
**응답 시간**: 영업일 기준 1~2일 이내
:::

---
