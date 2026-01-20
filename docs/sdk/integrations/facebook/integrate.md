---
sidebar_label: 연동하기
pagination_label: 연동하기 (Integrate)
description: nachocode SDK의 `facebook` 네임스페이스를 사용하기 위한 필수 사전 준비 절차를 설명합니다. 페이스북 개발자 센터와 nachocode 대시보드에서의 네이티브 로그인 연동 설정하는 상세한 방법을 제공합니다.
keywords:
  [
    페이스북 소셜 로그인,
    페이스북 네이티브 로그인,
    페이스북 웹뷰 네이티브 로그인,
    페이스북 앱 이벤트,
    facebook 소셜 로그인,
    facebook 네이티브 로그인,
    facebook 웹뷰 로그인,
    facebook social login,
    facebook native login,
    facebook webview login,
  ]
image: /img/docs/thumbnails/SDK/facebook.png
---

# 페이스북 (`facebook`) - 연동하기

import { BadgeWithVersion } from '@site/src/components/svg/badge-with-version';
import { ThumbnailImage } from '@site/src/components/common/image/thumbnail-image';

<ThumbnailImage src='/img/docs/thumbnails/SDK/facebook.png'/>

> 🚀 **추가된 버전 :** <BadgeWithVersion type="SDK" version="v1.4.0" link="/docs/releases/v1/sdk/release-v-1-4-0" /> <BadgeWithVersion type="Android" version="v1.4.0" link="/docs/releases/v1/app-source/android/release-v-1-4-0" /> <BadgeWithVersion type="iOS" version="v1.4.0" link="/docs/releases/v1/app-source/ios/release-v-1-4-0" />  
> 🔔 **최신화 일자:** 2026-01-20

## **필수 선행 작업** {#prerequisite}

nachocode SDK로 **페이스북 네이티브 기능**을 사용하기 위해서는 아래 사항이 먼저 완료되어야 합니다.

### 시작하기 전 {#prerequisite-getting-started}

페이스북과 연동하려면 [**Facebook 개발자 계정**](https://developers.facebook.com/apps)이 필요합니다.

---

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

:::info
**페이스북 관련 네이티브 기능은 새로 빌드 된 버전의 앱부터 적용됩니다.**
:::

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

![nachocode_build_ios_new_version](/img/docs/apple/nachocode_build_ios_new_version.png)

:::info
**페이스북 관련 네이티브 기능은 새로 빌드 된 버전의 앱부터 적용됩니다.**
:::

---

## **Meta 앱 이벤트** {#meta-app-events}

앱 이벤트는 타게팅, 성과 측정, 최적화 등 모든 사용 사례와 밀접하게 관련되어 있습니다.  
앱 이벤트를 사용하면 모바일 앱에서 발생하는 행동을 추적할 수 있습니다.

### 시작하기 전 {#meta-app-events-getting-started}

다음과 같은 항목이 필요합니다.

- [Facebook 개발자 계정](https://developers.facebook.com/apps)
- [Facebook 광고 계정](https://admanager.facebook.com)
- [Facebook 비즈니스 포트폴리오](https://business.facebook.com)
- [Facebook 앱](https://developers.facebook.com/apps)

---

### 앱 이벤트 자동 로깅 {#meta-app-events-auto-logging}

페이스북 연동 및 자동 로깅 설정을 하고나면 특정 앱 이벤트가 자동으로 수집되고 기록됩니다.

자동 앱 이벤트 로깅의 일환으로 3가지 주요 이벤트인 **앱 설치**, **앱 실행**과 **구매** 이벤트가 수집됩니다.

| 이벤트         | 상세 정보                                                                                                                                                                                                                       |
| -------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **앱 설치**    | 새로운 사용자가 앱을 처음으로 활성화하거나 앱이 특정 기기에서 처음으로 시작된 경우.                                                                                                                                             |
| **앱 실행**    | 사용자가 앱을 실행하면 Facebook SDK가 초기화되고 이벤트가 로깅됩니다. <br/>첫 번째 앱 실행 이벤트 이후 60초 이내에 두 번째 앱 실행 이벤트가 발생한다면 두 번째 이벤트는 로깅되지 않습니다.                                      |
| **앱 내 구매** | 인앱 구매가 완료되면 자동으로 로깅합니다. 앱 내 구매를 사용하여 다이내믹 광고 전환을 측정하고자 하는 경우 <br/>Apple App Store 또는 Google Play 스토어의 제품 ID를 관련 다이내믹 광고에서 사용된 제품 ID와 동일하게 설정하세요. |

:::info
특정 맞춤 이벤트를 추가로 로깅하고 싶다면 [`Nachocode.facebook.logEvent`](./reference#log-event) 메서드를 통해 수동으로 구현할 수 있습니다.
:::

---

### 앱 이벤트 설정하기 {#meta-app-events-set-ups}

[필수 선행 작업](/docs/sdk/integrations/facebook/integrate#prerequisite)을 통해 Facebook 앱 구성을 완료한 후 아래 단계를 진행하세요.

#### 1. Facebook 광고와 비즈니스 포트폴리오 연결 {#meta-app-events-set-up-step-1}

광고를 게재하고 [광고 관리자](https://www.facebook.com/ads/manager)에서 설치를 측정하려면 하나 이상의 [광고 계정](https://www.facebook.com/ads/manager/accounts)과 하나의 [비즈니스 포트폴리오](https://business.facebook.com)를 앱과 연결해야합니다.

1. [Facebook 앱 대시보드](https://developers.facebook.com/apps)에서 [**설정 > 고급**]을 클릭합니다.
2. **승인된 광고 계정 ID**에 광고 계정 ID를 추가합니다. (광고 계정 ID는 [**Facebook 광고 관리자**](https://admanager.facebook.com)에서 가져올 수 있습니다.)
3. **광고 계정** 패널에서 **시작하기**를 클릭하고 지침에 따라 앱과 비즈니스를 연결합니다.

---

#### 2. (선택사항) [nachocode 대시보드](https://nachocode.io/?utm_source=docs&utm_medium=documentation&utm_campaign=devguide)에서 토글 활성화 {#meta-app-events-set-up-step-2}

앱 이벤트 자동 로깅을 하기 위해서는 **광고 추적 권한 활성화**가 필요합니다.

- **[ 앱 설정 > 개발자 설정 ]** 에서 **[ 광고 추적 권한 활성화 ]** 토글 활성화 후 저장

![nachocode_dashboard_settings_ad_id](/img/docs/settings/nachocode_dashboard_settings_ad_id.png)

<br/>

#### 3. [nachocode 대시보드](https://nachocode.io/?utm_source=docs&utm_medium=documentation&utm_campaign=devguide)에서 재빌드 {#meta-app-events-set-up-step-3}

광고 추적 권한을 활성화하였다면 새 버전을 빌드하여 적용이 가능합니다.

- **[ 앱 빌드 > 안드로이드/iOS > 빌드 ]에서 [ 새 버전 만들기 ] 버튼을 클릭하여 빌드**

![nachocode_build_android_new_version](/img/docs/android/nachocode_build_android_new_version.png)

:::info
**이벤트 자동 로깅 기능은 새로 빌드 된 버전의 앱부터 적용됩니다.**
:::

---

### 앱 이벤트 테스트 {#meta-app-events-test}

[앱 광고 지원 도구](https://developers.facebook.com/tools/app-ads-helper)를 사용하면 앱이 Facebook에 이벤트를 보내도록 앱 이벤트를 테스트 할 수 있습니다.

1. [앱 광고 지원 도구](https://developers.facebook.com/tools/app-ads-helper)를 엽니다.
2. **앱 선택**에서 앱을 선택한 후 **제출**을 선택합니다.
3. 하단으로 스크롤하여 **이벤트 테스트**를 선택합니다.
4. 앱을 시작한 후 이벤트를 보내면 앱 이벤트가 페이지에 표시됩니다.

---

### 앱 이벤트 FAQ {#meta-app-events-faq}

:::info Meta 앱 이벤트 공식 FAQ 보러가기
➡️[https://developers.facebook.com/docs/app-events/faq](https://developers.facebook.com/docs/app-events/faq)
:::

---

:::tip **지원팀 연락처**
설정 과정에서 문제가 발생하거나 질문이 있으시면 언제든지 연락주세요.

**이메일**: [support@nachocode.io](mailto:support@nachocode.io)  
**응답 시간**: 영업일 기준 1~2일 이내
:::

---
