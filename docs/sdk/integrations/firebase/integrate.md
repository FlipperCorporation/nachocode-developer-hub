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

<ThumbnailImage src='/img/docs/thumbnails/SDK/firebase.png'/>

> 🚀 **추가된 버전 :** <BadgeWithVersion type="SDK" version="v1.11.0" link="/docs/releases/v1/sdk/release-v-1-11-0" /> <BadgeWithVersion type="Android" version="v1.11.0" link="/docs/releases/v1/app-source/android/release-v-1-11-0" /> <BadgeWithVersion type="iOS" version="v1.11.0" link="/docs/releases/v1/app-source/ios/release-v-1-11-0" />  
> 🔔 **최신화 일자:** 2026-07-16

## **필수 선행 작업** {#prerequisite}

nachocode SDK로 **Firebase Analytics 기능**을 사용하기 위해서는 아래 사항이 먼저 완료되어야 합니다.

### 1. [Firebase Console](https://firebase.google.com/?hl=ko) 접속 {#prerequisite-step-1}

- **[firebase.google.com](https://firebase.google.com/?hl=ko)에 접속 후, [Go to console] 버튼 클릭**

![firebase_console](/img/docs/firebase/firebase_console.png)

<br/>

### 2. Firebase Analytics 사용 설정 확인 {#prerequisite-step-2}

- **[ Analytics Dashboard ]에서 Google 애널리틱스가 활성화되어 있는지 확인**

![firebase_console_analytics_dashboard](/img/docs/firebase/firebase_console_analytics_dashboard.png)

<br/>

### 3. `GoogleService-Info.plist` 파일 다운로드 {#prerequisite-step-3}

- **`GoogleService-Info.plist` 를 다운받은 후, [ 프로젝트 설정 ] 클릭**

![firebase_authentication_login_methods_complete](/img/docs/google/firebase_authentication_login_methods_complete.png)

<br/>

### 4. `google-services.json` 파일 다운로드 {#prerequisite-step-4}

![firebase_download_google_services](/img/docs/google/firebase_download_google_services.png)

<br/>

### 5. [nachocode 대시보드](https://nachocode.io/?utm_source=docs&utm_medium=documentation&utm_campaign=devguide)에서 구성 파일 업로드 {#prerequisite-step-5}

- **[ 앱 기능 > 푸시 알림 > 설정 ]에서 다운받은 파일 업로드**

> **안드로이드 앱 푸시 설정** - `google-services.json`

![nachocode_android_app_push_settings_google-services](/img/docs/firebase/nachocode_android_app_push_settings_google-service.png)

> **iOS 앱 푸시 설정** - `GoogleService-Info.plist`

![nachocode_ios_app_push_settings_google-service-info](/img/docs/firebase/nachocode_ios_app_push_settings_googleservice-info.png)

:::warning
**이미 푸시 설정이 되어있더라도 Firebase Analytics 사용을 위해 최신 구성 파일을 업로드해야 합니다.**
:::

<br/>

### 5. [nachocode 대시보드](https://nachocode.io/?utm_source=docs&utm_medium=documentation&utm_campaign=devguide)에서 재빌드 {#prerequisite-step-5}

- **[ 앱 빌드 ]에서 [ 새 버전 만들기 ] 버튼을 클릭하여 새 버전의 앱 빌드**

![nachocode_build_android_new_version](/img/docs/android/nachocode_build_android_new_version.png)

:::warning
Firebase Analytics 기능은 새로 빌드된 버전의 앱부터 적용됩니다.
:::

---

:::tip **지원팀 연락처**
설정 과정에서 문제가 발생하거나 질문이 있으시면 언제든지 연락주세요.

**이메일**: [support@nachocode.io](mailto:support@nachocode.io)  
**응답 시간**: 영업일 기준 1~2일 이내
:::

---
