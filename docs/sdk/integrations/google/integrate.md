---
sidebar_label: 연동하기
pagination_label: 연동하기 (Integrate)
description: nachocode SDK의 `google` 네임스페이스를 사용하기 위한 필수 사전 준비 절차를 설명합니다. Firebase, Play Console, nachocode 대시보드에서 구글 네이티브 로그인을 연동하는 상세한 방법을 제공합니다.
keywords:
  [
    구글 소셜 로그인,
    구글 네이티브 로그인,
    구글 웹뷰 로그인,
    google 소셜 로그인,
    google 네이티브 로그인,
    google 웹뷰 로그인,
    google social login,
    google native login,
    google webview login,
  ]
---

# 구글 (`google`) - 연동하기

import { BadgeWithVersion } from '@site/src/components/svg/badge-with-version';

> 🚀 **추가된 버전 :** <BadgeWithVersion type="SDK" version="v1.5.0" link="/docs/releases/v1/sdk/release-v-1-5-0" /> <BadgeWithVersion type="Android" version="v1.5.0" link="/docs/releases/v1/app-source/android/release-v-1-5-0" /> <BadgeWithVersion type="iOS" version="v1.5.0" link="/docs/releases/v1/app-source/ios/release-v-1-5-0" />  
> 🔔 **최신화 일자:** 2025-07-16

## **필수 선행 작업** {#prerequisite}

nachocode SDK로 **구글 네이티브 기능**을 사용하기 위해서는 아래 사항이 먼저 완료되어야 합니다.

### 1. [nachocode 대시보드](https://nachocode.io/?utm_source=docs&utm_medium=documentation&utm_campaign=devguide)의 [ **앱 설정** > **개발자 설정** > **안드로이드 네이티브 설정** ]에서 [SHA-1 디지털 지문](https://developers.google.com/android/guides/client-auth?hl=ko) 확인 {#prerequisite-step-1}

![nachocode_developer_android_sha](/img/docs/android/nachcoode_developer_android_sha.png)
:::info
지문키를 확인하기 위해서는 안드로이드 빌드가 선행되어야 합니다.
:::
<br/>

### 2. [Firebase 대시보드](https://console.firebase.google.com/)의 [ 프로젝트 > Authentication > 로그인 방법 ]에서 추가 제공 업체로 [ Google ] 선택 후 사용설정 {#prerequisite-step-2}

![firebase_authentication_login_methods](/img/docs/google/firebase_authentication_login_methods.png)

<br/>

### 3. `GoogleService-Info.plist` 를 다운받은 후에 [ 프로젝트 설정 ] 클릭 {#prerequisite-step-3}

![firebase_authentication_login_methods_complete](/img/docs/google/firebase_authentication_login_methods_complete.png)

<br/>

### 4. `google-services.json` 파일 다운로드 {#prerequisite-step-4}

![firebase_download_google_services](/img/docs/google/firebase_download_google_services.png)

<br/>

### 5. [ Android 앱 ] 탭에서 [ 디지털 지문 추가 ] 클릭 {#prerequisite-step-5}

![firebase_android_add_fingerprint](/img/docs/google/firebase_android_add_fingerprint.png)

<br/>

### 6. [나쵸코드 대시보드](#prerequisite-step-1)에서 복사한 [ SHA-1 디지털 지문 ]을 입력 후 저장 {#prerequisite-step-6}

![firebase_android_save_fingerprint](/img/docs/google/firebase_android_save_fingerprint.png)

<br/>

### 7. [nachocode 대시보드](https://nachocode.io/?utm_source=docs&utm_medium=documentation&utm_campaign=devguide)의 [ 앱 기능 > 푸시 알림 > 앱 푸시 설정 ]에 다운받은 파일(`GoogleService-Info.plist`, `google-services.json`)을 업로드 {#prerequisite-step-7}

![nachocode_google_push_notification_setting](/img/docs/google/nachocode_google_push_notification_setting.png)
:::warning
이미 푸시 설정이 되어있더라도 최신 구성 파일을 업로드해야 합니다.
:::

<br/>

### 8. [nachocode 대시보드](https://nachocode.io/?utm_source=docs&utm_medium=documentation&utm_campaign=devguide)의 [ 앱 설정 > 개발자 설정 > 구글 네이티브 설정 ]에서 [ 구글 로그인 ] 토글을 활성화하여 앱 설정 완료 {#prerequisite-step-8}

![nachocode_developer_google_login](/img/docs/google/nachocode_developer_google_login.png)

<br/>

### 9. [nachocode 대시보드](https://nachocode.io/?utm_source=docs&utm_medium=documentation&utm_campaign=devguide)의 [ 앱 빌드 > 안드로이드 앱 빌드 ]에서 [ 새 버전 만들기 ] 버튼을 클릭하여 빌드 {#prerequisite-step-9}

![nachocode_build_android_new_version](/img/docs/android/nachocode_build_android_new_version.png)

:::warning
구글 관련 네이티브 기능은 새로 빌드 된 버전의 앱부터 적용됩니다.
:::

<br/>

### 10. 빌드된 aab 파일을 [Google Play Console](https://play.google.com/console)에 업로드 후 [ 테스트 및 출시 > 설정 > 앱 서명 ]에서 앱 서명키 인증서의 [ SHA-1 인증서 지문 ]을 확인 {#prerequisite-step-10}

![google_console_fingerprint](/img/docs/google/google_console_fingerprint.png)
:::warning
운영환경에서 구글 로그인을 사용하기 위한 필수 작업이므로 안드로이드 앱 출시 전 확인해주세요.
:::

<br/>

### 11. [ Google Play Console ]에서 복사한 [ SHA-1 디지털 지문 ]을 입력 후 저장 {#prerequisite-step-11}

![firebase_android_save_fingerprint](/img/docs/google/firebase_android_save_fingerprint.png)

<br/>

---

:::tip **지원팀 연락처**
설정 과정에서 문제가 발생하거나 질문이 있으시면 언제든지 연락주세요.

**이메일**: [support@nachocode.io](mailto:support@nachocode.io)  
**응답 시간**: 영업일 기준 1~2일 이내
:::

---
