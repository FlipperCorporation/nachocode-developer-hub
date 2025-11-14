---
sidebar_label: 연동하기
pagination_label: 연동하기 (Integrate)
description: nachocode SDK의 `apple` 네임스페이스를 사용하기 위한 필수 사전 준비 절차를 설명합니다. Developer Apple 대시보드, nachocode 대시보드에서 Apple 네이티브 기능을 쉽게 연동하는 방법을 제공합니다.
keywords:
  [
    애플 소셜 로그인,
    애플 네이티브 로그인,
    애플 웹뷰 로그인,
    apple 소셜 로그인,
    apple 네이티브 로그인,
    apple 웹뷰 로그인,
    apple social login,
    apple native login,
    apple webview login,
  ]
---

# 애플 (`apple`) - 연동하기

import { BadgeWithVersion } from '@site/src/components/svg/badge-with-version';

> 🚀 **추가된 버전 :** <BadgeWithVersion type="SDK" version="v1.4.0" link="/docs/releases/v1/sdk/release-v-1-4-0" /> <BadgeWithVersion type="iOS" version="v1.4.0" link="/docs/releases/v1/app-source/ios/release-v-1-4-0" />  
> 🔔 **최신화 일자:** 2025-11-14

![iOS-Only](https://img.shields.io/badge/iOS_only-gray?logo=apple)

:::info 참고
**이 네임스페이스는 현재 iOS에서만 지원됩니다.**
:::

---

## **필수 선행 작업** {#prerequisite}

nachocode SDK로 **애플 네이티브 기능**을 사용하기 위해서는 아래 사항이 먼저 완료되어야 합니다.

### 1. [Apple Developer](https://developer.apple.com/account/resources/identifiers/list)에서 Identifier 설정 {#prerequisite-step-1}

- **Identifier에 Capabilities 중 [ Sign In with Apple ] 추가**

![developer_apple_capabilities_sign_in_with_apple](/img/docs/apple/developer_apple_capabilities_sign_in_with_apple.png)

<br/>

### 2. [nachocode 대시보드](https://nachocode.io/?utm_source=docs&utm_medium=documentation&utm_campaign=devguide)에서 토글 활성화 {#prerequisite-step-2}

- **[ 앱 설정 > 연동 > Apple ]에서 [ 애플 로그인 사용 ] 토글을 활성화하여 앱 설정 완료**

![nachocode_developer_apple_login](/img/docs/apple/nachocode_developer_apple_login.png)

<br/>

### 3. [nachocode 대시보드](https://nachocode.io/?utm_source=docs&utm_medium=documentation&utm_campaign=devguide)에서 재빌드 수행 {#prerequisite-step-3}

- **[ 앱 빌드 > iOS 앱 빌드 ]에서 [ 새 버전 만들기 ] 버튼을 클릭하여 빌드**

![nachocode_google_login_toggle](/img/docs/apple/nachocode_build_ios_new_version.png)

- **애플 관련 네이티브 기능은 새로 빌드 된 버전의 앱부터 적용됩니다.**

---

:::tip **지원팀 연락처**
설정 과정에서 문제가 발생하거나 질문이 있으시면 언제든지 연락주세요.

**이메일**: [support@nachocode.io](mailto:support@nachocode.io)  
**응답 시간**: 영업일 기준 1~2일 이내
:::

---
