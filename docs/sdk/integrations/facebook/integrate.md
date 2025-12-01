---
sidebar_label: 연동하기
pagination_label: 연동하기 (Integrate)
description: nachocode SDK의 `facebook` 네임스페이스를 사용하기 위한 필수 사전 준비 절차를 설명합니다. 페이스북 개발자 센터와 nachocode 대시보드에서의 네이티브 로그인 연동 설정하는 상세한 방법을 제공합니다.
keywords:
  [
    페이스북 소셜 로그인,
    페이스북 네이티브 로그인,
    페이스북 웹뷰 로그인,
    facebook 소셜 로그인,
    facebook 네이티브 로그인,
    facebook 웹뷰 로그인,
    facebook social login,
    facebook native login,
    facebook webview login,
  ]
image: /img/docs/thumbnails/SDK/facebook.svg
---

# 페이스북 (`facebook`) - 연동하기

import { BadgeWithVersion } from '@site/src/components/svg/badge-with-version';
import { ThumbnailImage } from '@site/src/components/common/image/thumbnail-image';

<ThumbnailImage src='/img/docs/thumbnails/SDK/facebook.svg'/>

> 🚀 **추가된 버전 :** <BadgeWithVersion type="SDK" version="v1.4.0" link="/docs/releases/v1/sdk/release-v-1-4-0" /> <BadgeWithVersion type="Android" version="v1.4.0" link="/docs/releases/v1/app-source/android/release-v-1-4-0" /> <BadgeWithVersion type="iOS" version="v1.4.0" link="/docs/releases/v1/app-source/ios/release-v-1-4-0" />  
> 🔔 **최신화 일자:** 2025-11-14

## **필수 선행 작업** {#prerequisite}

nachocode SDK로 **페이스북 네이티브 기능**을 사용하기 위해서는 아래 사항이 먼저 완료되어야 합니다.

### 안드로이드 설정 {#prerequisite-android}

#### 1. [nachocode 대시보드](https://nachocode.io/?utm_source=docs&utm_medium=documentation&utm_campaign=devguide)의 [ 앱 설정 > 개발자 설정 > 안드로이드 네이티브 설정 ]에서 [해시키](https://developers.google.com/android/guides/client-auth?hl=ko) 확인{#prerequisite-android-step-1}

![nachocode_developer_android_hash_key](/img/docs/android/nachcodoe_developer_android_hash_key.png)

<br/>

#### 2. [nachocode 대시보드](https://nachocode.io/?utm_source=docs&utm_medium=documentation&utm_campaign=devguide)의 [ 앱 설정 > 고급 설정 > 패키지 이름 ]에서 패키지 이름 확인{#prerequisite-android-step-2}

![nachocode_developer_android_hash_key](/img/docs/facebook/nachocode_advanced_package_name.png)

<br/>

#### 3. [Facebook Developer](https://developer.facebook.com)의 [ 앱 설정 > 기본 설정 ]에서 앱을 등록하고 정보 입력 {#prerequisite-android-step-3}

- **`앱 ID`는 [nachocode 대시보드 설정](#prerequisite-android-step-6) 시 필요합니다.**

![developer_facebook_create_app](/img/docs/facebook/developer_facebook_create_app.png)

<br/>

#### 4. [1. 해시키 확인](#prerequisite-android-step-1)에서 복사한 **해시키** 와 [2. 패키지 이름 확인](#prerequisite-android-step-2)에서 복사한 **패키지 이름** 등록 {#prerequisite-android-step-4}

![developer_facebook_android](/img/docs/facebook/developer_facebook_android.png)
<br/>

#### 5. [Facebook Developer](https://developer.facebook.com)의 [ **앱 설정** > **고급 설정** ] 에서 클라이언트 토큰 확인 {#prerequisite-android-step-5}

- **`클라이언트 토큰`은 [nachocode 대시보드 설정](#prerequisite-android-step-6) 시 필요합니다.**

![developer_facebook_client_token](/img/docs/facebook/developer_facebook_client_token.png)

<br/>

#### 6. [nachocode 대시보드](https://nachocode.io/?utm_source=docs&utm_medium=documentation&utm_campaign=devguide)에서 토글 활성화 {#prerequisite-android-step-6}

- **[ 앱 설정 > 연동 > Facebook ] 에서 [ 페이스북 네이티브 활성화 ] 토글 활성화, appId 및 clientToken 입력 후 저장**

![nachocode_developer_facebook](/img/docs/facebook/nachocode_developer_facebook.png)

<br/>

#### 7. [nachocode 대시보드](https://nachocode.io/?utm_source=docs&utm_medium=documentation&utm_campaign=devguide)에서 재빌드 {#prerequisite-android-step-7}

- **[ 앱 빌드 > 안드로이드 빌드 ]에서 [ 새 버전 만들기 ] 버튼을 클릭하여 빌드**

![nachocode_build_android_new_version](/img/docs/android/nachocode_build_android_new_version.png)

- **페이스북 관련 네이티브 기능은 새로 빌드 된 버전의 앱부터 적용됩니다.**

---

### iOS 설정 {#prerequisite-ios}

#### 1. [nachocode 대시보드](https://nachocode.io/?utm_source=docs&utm_medium=documentation&utm_campaign=devguide)의 [ 앱 설정 > 고급 설정 > 패키지 이름 ]에서 패키지 이름 확인 {#prerequisite-ios-step-1}

![nachocode_developer_android_hash_key](/img/docs/facebook/nachocode_advanced_package_name.png)

<br/>

#### 2. [Facebook Developer](https://developer.facebook.com)의 [ 앱 설정 > 기본 설정 ]에서 앱을 등록하고 정보 입력 {#prerequisite-ios-step-2}

![developer_facebook_create_app](/img/docs/facebook/developer_facebook_create_app.png)

<br/>

#### 3. iOS 설정에서 nachocode 대시보드에서 확인한 패키지 이름 입력 {#prerequisite-ios-step-3}

![developer_facebook_ios](/img/docs/facebook/developer_facebook_ios.png)

<br/>

#### 4. [Facebook Developer](https://developer.facebook.com)의 [ 앱 설정 > 고급 설정 ] 에서 클라이언트 토큰 확인 {#prerequisite-ios-step-4}

- **클라이언트 토큰**은 [nachocode 대시보드 설정](#prerequisite-ios-step-5) 시 필요합니다.

![developer_facebook_client_token](/img/docs/facebook/developer_facebook_client_token.png)

<br/>

#### 5. [nachocode 대시보드](https://nachocode.io/?utm_source=docs&utm_medium=documentation&utm_campaign=devguide)에서 토글 활성화 {#prerequisite-ios-step-5}

- **[ 앱 설정 > 연동 > Facebook ] 에서 [ 페이스북 네이티브 활성화 ] 토글 활성화, appId 및 clientToken 입력 후 저장**

![nachocode_developer_facebook](/img/docs/facebook/nachocode_developer_facebook.png)

<br/>

#### 6. [nachocode 대시보드](https://nachocode.io/?utm_source=docs&utm_medium=documentation&utm_campaign=devguide)에서 재빌드 {#prerequisite-ios-step-6}

- **[ 앱 빌드 > iOS 앱 빌드 ]에서 [ 새 버전 만들기 ] 버튼을 클릭하여 빌드**

![nachocode_google_login_toggle](/img/docs/apple/nachocode_build_ios_new_version.png)

- 페이스북 관련 네이티브 기능은 새로 빌드 된 버전의 앱부터 적용됩니다.

---

:::tip **지원팀 연락처**
설정 과정에서 문제가 발생하거나 질문이 있으시면 언제든지 연락주세요.

**이메일**: [support@nachocode.io](mailto:support@nachocode.io)  
**응답 시간**: 영업일 기준 1~2일 이내
:::

---
