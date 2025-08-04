---
sidebar_position: 1
sidebar_label: 개요
pagination_label: 딥링크 (Deep Link) 개요
description: nachocode 딥링크 가이드는 다양한 딥링크 유형의 개념, 설정, 활용법까지 포괄적으로 안내합니다.
keywords:
  [
    딥링크,
    원링크,
    유니버셜 링크,
    앱링크,
    앱스킴,
    URI 스킴,
    Deep Link,
    One Link,
    Universal Link,
    App Links,
    App Scheme,
    URI Scheme,
    나쵸링크,
    nacho Link,
  ]
---

# 딥링크 개요 {#intro}

import { BadgeWithVersion } from '@site/src/components/svg/badge-with-version';

> 🔔 **최신화 일자:** 2025-08-04

## 딥링크 이해하기 {#understand}

**딥링크** (**Deep Link**)는 **사용자를 특정 모바일 앱의 원하는 화면 혹은 콘텐츠로 직접 연결**해주는 링크입니다.  
일반적인 웹 링크가 특정 웹페이지로 이동시키듯이 딥링크는 **특정 URL을 통해 곧바로 앱을 실행하고 앱 내 지정된 화면으로 바로 이동**합니다.

:::tip 예시
예를 들어, 전자상거래 앱에서 특정 상품 페이지 링크를 딥링크로 보내면, **사용자가 클릭하자마자 앱이 곧바로 열리며 해당 제품 상세 화면으로 이동**하도록 할 수 있습니다.  
:::

딥링크를 도입하면 앱 사용자는 필요한 정보를 **더 빠르고 적은 단계로 접근**할 수 있어 편리하고, 개발자나 마케터는 **앱 사용률과 전환율을 높일 수** 있습니다.

이 가이드에서는 nachocode 앱에서 지원하는 다양한 딥링크 방식들과 설정 방법 (URI 스킴, Android App Link, iOS Universal Link 등), 스토어 앱 ID 확인 방법, 그리고 nachocode에서 새로이 제공하는 **하나의 링크로 모든 딥링크를 관리하는 서비스인 나쵸 링크** (**nachocode.link**)의 활용법을 소개합니다.

nachocode 플랫폼에서 딥링크를 활용하여 **웹에서 앱을 곧바로 실행**하거나, 필요에 따라 **앱 미설치 시 스토어로 연결**하는 등 다양한 사용자 경험 시나리오를 구현하고 **웹-앱 간 시너지**를 높여보세요.

---

## 딥링크 유형별 특징 {#types}

딥링크는 구현 방식에 따라 다양한 종류로 나뉘며, nachocode 플랫폼에서는 다음의 딥링크 방식을 모두 지원합니다.

- **URI 스킴 딥링크** – 커스텀 URI 스킴을 등록하여 사용하는 전통적인 딥링크 방식입니다. (Android, iOS 모두 지원)
- **인텐트 스킴 딥링크** – **Android 전용** 딥링크 URL 형식으로, **크롬 브라우저에서 주로 사용**되는 특별한 URL 스킴입니다.
- **유니버셜 링크** – **iOS 전용** 딥링크 방식으로, **https 도메인**을 통해 앱과 웹을 연동합니다.
- **앱 링크** – **Android 전용** 딥링크 방식으로, **https 도메인**을 통해 앱과 웹을 연동합니다.
- **나쵸 링크** – nachocode가 제공하는 **통합 딥링크 서비스**로, **하나의 URL**로 iOS와 Android에서 바로 앱을 열거나 미설치 시 스토어로 분기할 수 있습니다.

아래 표는 각 딥링크 유형별 특징을 비교한 것입니다.

| 딥링크 방식       | 대상 플랫폼                                                                                                                                                                | 앱 미설치 시 동작                            | 주요 특징 및 필요 조건                                                                                  |
| ----------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------- | ------------------------------------------------------------------------------------------------------- |
| **URI 스킴**      | ![Android](https://img.shields.io/badge/Android-gray?logo=android) <br/> ![iOS](https://img.shields.io/badge/iOS-gray?logo=apple)                                          | 링크 동작 안 함 _(대비 필요)_                | 별도 도메인 필요 없음, 간단하게 설정                                                                    |
| **인텐트 스킴**   | ![Android](https://img.shields.io/badge/Android-gray?logo=android)                                                                                                         | Play 스토어 등 이동 가능 _(설정 시)_         | 웹에서 Android 앱 직접 호출, fallback URL 옵션 제공                                                     |
| **유니버셜 링크** | ![iOS](https://img.shields.io/badge/iOS-gray?logo=apple)                                                                                                                   | 대상 URL을 **웹**으로 오픈                   | iOS 9 이상에서 동작, 도메인 연동(Associated Domains) 필요, 앱 자동 실행 (OS 버전, 브라우저에 따라 다름) |
| **앱 링크**       | ![Android](https://img.shields.io/badge/Android-gray?logo=android)                                                                                                         | 대상 URL을 **웹**으로 오픈                   | Android 6 이상에서 동작, 도메인 소유권 인증 필요, 앱 자동 실행 (OS 버전, 브라우저에 따라 다름)          |
| **나쵸 링크**     | ![Android](https://img.shields.io/badge/Android-gray?logo=android) <br/> ![iOS](https://img.shields.io/badge/iOS-gray?logo=apple) <br/> ![Web](/img/docs/chrome-badge.svg) | **플랫폼을 자동으로 감지하여 스토어로 이동** | nachocode 제공 통합 링크, 플랫폼별 자동 분기 및 `targetUrl`로 특정 화면 지정하여 자동 실행              |

---

## nachocode 딥 링크 지원 현황 {#supported-deeplink}

현재 nachocode 앱소스 (App Source)에서 지원하는 딥링크 방식은 아래와 같습니다.

:::info 앱소스란?
➡️ [앱소스 (App Source) 가이드 바로가기](/docs/guide/app-source#app-source-summary)
:::

> **※ _25.08.04 기준_**

| 딥링크 방식                           | 대상 플랫폼                                                                                                                                                                | 링크 형식                           | 앱소스에 추가된 버전                                                                                                                                                                                                            |
| ------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **URI 스킴** (URI Scheme)             | ![Android](https://img.shields.io/badge/Android-gray?logo=android) <br/> ![iOS](https://img.shields.io/badge/iOS-gray?logo=apple)                                          | `{scheme}://{path}`                 | <BadgeWithVersion type="Android" version="v1.2.0" link="/docs/releases/v1/app-source/android/release-v-1-2-0" /> <br/> <BadgeWithVersion type="iOS" version="v1.2.0" link="/docs/releases/v1/app-source/ios/release-v-1-2-0" /> |
| **인텐트 스킴** (Intent Scheme)       | ![Android](https://img.shields.io/badge/Android-gray?logo=android)                                                                                                         | `intent://{host}/{path}#Intent;...` | <BadgeWithVersion type="Android" version="v1.2.0" link="/docs/releases/v1/app-source/android/release-v-1-2-0" />                                                                                                                |
| **유니버설 링크** (Universal Link)    | ![iOS](https://img.shields.io/badge/iOS-gray?logo=apple)                                                                                                                   | `https://{domain}/{path}`           | <BadgeWithVersion type="iOS" version="v1.5.1" link="/docs/releases/v1/app-source/ios/release-v-1-5-1" />                                                                                                                        |
| **앱 링크** (App Link)                | ![Android](https://img.shields.io/badge/Android-gray?logo=android)                                                                                                         | `https://{domain}/{path}`           | <BadgeWithVersion type="Android" version="v1.6.1" link="/docs/releases/v1/app-source/android/release-v-1-6-1" />                                                                                                                |
| **나쵸 링크** (nachocode Link)        | ![Android](https://img.shields.io/badge/Android-gray?logo=android) <br/> ![iOS](https://img.shields.io/badge/iOS-gray?logo=apple) <br/> ![Web](/img/docs/chrome-badge.svg) | `https://{service}.nachocode.link`  | <BadgeWithVersion type="Android" version="v1.6.4" link="/docs/releases/v1/app-source/android/release-v-1-6-4" /> <br/> <BadgeWithVersion type="iOS" version="v1.6.4" link="/docs/releases/v1/app-source/ios/release-v-1-6-4" /> |
| **디퍼드 딥링크** (Deferred Deeplink) | ![Android](https://img.shields.io/badge/Android-gray?logo=android) <br/> ![iOS](https://img.shields.io/badge/iOS-gray?logo=apple)                                          | 스토어 설치 후 앱 실행              | **미지원** X (25년 8월 기준)                                                                                                                                                                                                    |

:::tip **기본 딥링크 vs 디퍼드 딥링크**
기본 딥링크는 앱이 이미 **설치되어 있을 때만** 목적지 화면으로 이동하며, 미설치 시에는 딥링킹이 원활하게 동작하지 않습니다. 별도의 로직 구현을 통해 스토어로 보내줄 수는 있지만 설치 후 즉시 원하는 목적지로 보낼 수는 없습니다.
반면, **디퍼드 딥링크** (**Deferred Deep Link**)는 앱이 설치되지 않은 경우에도 딥링크 정보를 활용하는 기술입니다. 사용자가 딥링크를 클릭하면 **앱 미설치 시 앱 스토어로 안내**하고, 앱 설치 후 **최초 실행할 때 다시 원래 의도했던 특정 화면으로 이동**시키는 딥링크입니다.  
:::

nachocode플랫폼에서는 **대부분의 딥링크 방식을 지원**하며, OS별로 권장되는 최신 딥링크 기법(iOS의 Universal Link, Android의 App Link)도 제공하고 있습니다. nachocode에서 아직은 디퍼드 딥링크를 **지원하지 않지만** 빠른 시일 내에 지원하기 위해 현재 개발 중입니다.

---

## 딥링크 활용 시 주의점

소유권이 보장된 딥링크라 하더라도, 앱 마케터가 기대하는 완벽한 형태로 작동하는 것은 아닙니다. 앱 마케팅에서 딥링크를 제대로 활용하기 위해서는 **URI Scheme**, **Universal Links**, **App Links**를 앱과 브라우저 환경에 맞게 별도로 설정해야 합니다.

Universal Links와 App Links는 각 운영체제에서 기본적으로 제공하는 방식이므로, **iOS의 Safari**와 **Android의 Chrome**에서는 안정적으로 동작하도록 지원됩니다. 다만, Safari의 경우에는 **URI Scheme 실행이 제한**되는 부분이 있습니다.

반면에, 다른 앱이나 브라우저는 **URI Scheme만 동작**하는 경우나 Universal Links나 App Links가 작동하더라도 **제한적인 동작**을 보이는 경우가 발생할 수 있습니다.

이러한 차이는 각 앱 및 브라우저 개발자가 **운영체제에서 제공하는 API를 얼마나 충실히 구현했는가**에 따라 달라집니다.  
아래 표는 국내에서 자주 사용하는 앱과 브라우저에서 딥링크 유형별 동작을 정리한 내용입니다.

| 앱 혹은 브라우저 | Android                                              | iOS                                                                  |
| ---------------- | ---------------------------------------------------- | -------------------------------------------------------------------- |
| Safari           | X                                                    | **유니버셜 링크**: 앱 실행 <br/> **URI 스킴**: Alert 팝업 후 앱 실행 |
| iMessage         | X                                                    | **유니버셜 링크**: 앱 실행 <br/> **URI 스킴**: 작동하지 않음         |
| Samsung Internet | **앱 링크**: 웹으로 랜딩 <br/> **URI 스킴**: 앱 실행 | X                                                                    |
| Chrome           | **앱 링크**: 앱 실행 <br/> **URI 스킴**: 앱 실행     | **유니버셜 링크**: 앱 실행 <br/> **URI 스킴**: 앱 실행               |
| 인스타그램       | **앱 링크**: 웹으로 랜딩 <br/> **URI 스킴**: 앱 실행 | **유니버셜 링크**: 웹으로 랜딩 <br/> **URI 스킴**: 앱 실행           |
| 카카오톡         | **앱 링크**: 웹으로 랜딩 <br/> **URI 스킴**: 앱 실행 | **유니버셜 링크**: 웹으로 랜딩 <br/> **URI 스킴**: 앱 실행           |
| 네이버           | **앱 링크**: 앱 실행 <br/> **URI 스킴**: 앱 실행     | **유니버셜 링크**: 앱 실행 <br/> **URI 스킴**: 앱 실행               |

:::info 참고
Universal Links 또는 App Links를 사용함에도 웹으로 랜딩 되는 경우는 **딥링크가 제대로 작동하지 않았음을 의미**합니다.
:::

---

## nachocode 플랫폼에서의 딥링크 설정 {#setting-deeplink}

nachocode로 생성한 앱은 다양한 딥링크 방식을 지원하도록 설정할 수 있습니다.  
각 딥링크 방식마다 설정 방법이나 요구 조건이 다르므로, 아래 가이드를 참고하여 필요한 방식을 적용하세요.

### URI 스킴 (URI Scheme) {#setting-uri-scheme}

nachocode **URI 스킴 딥링크 가이드**에서는 커스텀 URI 스킴을 이용한 딥링크의 개념과 형식, 그리고 nachocode 대시보드에서 앱에 URI 스킴을 등록하고 사용하는 방법을 안내합니다.

:::info URI 스킴 딥링크
➡️ [nachocode **URI 스킴 딥링크 가이드 바로가기**](./uri-scheme)
:::

### 인텐트 스킴 (Intent Scheme) {#setting-intent-scheme}

nachocode **인텐트 스킴 딥링크 가이드**에서는 Android의 인텐트(URL) 스킴을 활용하여 앱을 여는 방법, 웹 페이지에서 인텐트 링크를 구현하는 방법, 그리고 nachocode 앱에서 인텐트 스킴을 지원하는 설정 방법을 다룹니다.

:::info 인텐트 스킴 딥링크
➡️ [nachocode **인텐트 스킴 딥링크 가이드 바로가기**](./intent-scheme)
:::

### 유니버셜 링크 (Universal Link) {#setting-universal-link}

nachocode **유니버셜 링크 가이드**에서는 iOS의 Universal Link 개념과 동작 원리를 설명하며, 연관 도메인(Associated Domains) 설정 등 **필수 조건**과 nachocode 플랫폼에서 Universal Link를 적용하는 방법을 소개합니다.

:::info 유니버셜 링크
➡️ [nachocode **유니버셜 링크 가이드 바로가기**](./universal-link)
:::

### 앱 링크 (App Link) {#setting-app-link}

➡️ **앱 링크:** nachocode **앱 링크 가이드**에서는 Android의 App Links 개념과 적용 조건(도메인 인증 방식)을 설명하고, nachocode 앱에서 App Link를 설정하는 절차를 안내합니다.

:::info 앱 링크
➡️ [nachocode **앱 링크 가이드 바로가기**](./app-link)
:::

### 나쵸 링크 (nachocode.link) {#setting-nachocode-link}

nachocode **나쵸 링크 (nachocode.link) 가이드**에서는 nachocode에서 제공하는 나쵸 링크 서비스의 동작 방식과 특징을 소개합니다. 하나의 짧은 URL로 iOS/Android 앱 실행 및 미설치 시 스토어 열기를 구현하는 방법, `targetUrl` 파라미터를 통한 특정 화면 지정, 그리고 **나쵸코드 실제 고객 사례**를 함께 살펴봅니다.

:::info 나쵸 링크
➡️ [nachocode **나쵸 링크 가이드 바로가기**](./nachocode-link)
:::

---
