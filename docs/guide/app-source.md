---
sidebar_label: '앱소스(App Source)'
description: nachocode의 앱소스(App Source)는 나쵸코드가 웹사이트를 네이티브 앱으로 만들어줄 때 사용되는 앱의 기반 소스 코드입니다. 나쵸코드에서 새로운 기능이 나오면 버전이 올라갑니다.
image: /img/docs/releases/release_note_app_source.png
---

# 앱소스(App Source) {#app-source}

![app-source](/img/docs/releases/release_note_app_source.png)

> 🔔 **최신화 일자:** 2025-07-04

## 앱소스 이해하기 {#app-source-summary}

nachocode의 **앱소스**(**App Source**)는 웹사이트를 네이티브 앱으로 만들어줄 때 사용되는 **앱의 기반 소스 코드**입니다. 앱의 실행 속도 및 안정성은 앱소스의 구현에 의해 보통 결정됩니다. nachocode의 앱소스에는 하이브리드 언어가 아닌 **Android에서는 Java, iOS에서는 Swift**가 사용되어 각 OS 네이티브로 별도 구현되었습니다.

:::tip 비유하자면?
웹사이트는 **영화 스크립트**, 앱소스는 **스크립트를 상영하는 극장 장비**입니다.  
같은 스크립트라도 장비가 좋아지면 훨씬 더 선명하고 몰입감 있는 상영이 가능해집니다.
:::

nachocode에서는 **Android 및 iOS의 최신 OS 업데이트 및 정책 변경에 신속히 대응**할 수 있도록 앱소스를 지속적으로 관리하고 있습니다.
예를 들어, Google Play나 App Store의 정책 변경(예: Target API 버전 상향, 권한 처리 방식 변경 등)이나 새로운 OS 기능 도입, 비호환성 문제 해결 등을 반영하여 앱소스를 개선하고 있습니다.

nachocode의 앱소스를 사용하는 고객은 앱이 항상 **최신 플랫폼 요구사항을 충족**하도록 유지할 수 있으며, 별도의 추가 개발 없이도 **정책 위반이나 호환성 문제로 인한 출시 거부를 방지**할 수 있습니다.

---

## 앱소스 구조와 기능 {#app-source-architecture}

![nachocode_application](/img/docs/nachocode_app.webp)

**앱소스**(**App Source**)에는 웹뷰 화면을 포함해 다양한 네이티브 기능이 들어 있습니다. 새로 추가되는 네이티브 기능들 또한 앱소스를 통해 구현됩니다. 앱소스 안에는 다음과 같은 기능들이 포함되어 있습니다.

- **웹뷰 화면 구성**
- **푸시 알림 수신**
- **카메라 및 파일 접근**
- **외부 앱 열기**
- **시스템 권한 요청**
- **딥링크 처리** 등

[nachocode](https://nachocode.io/?utm_source=docs&utm_medium=documentation&utm_campaign=devguide)를 활용하여 만들어진 네이티브 앱들은 [nachocode Client SDK](/docs/sdk/intro)를 통해 웹 클라이언트에서 **Nacho Native APIs**에 접근할 수 있습니다. **nachocode Client SDK**를 이용해 앱 사용자들에게 더 나은 네이티브 앱 경험을 제공할 수 있습니다.

---

## 버전관리 {#app-source-versions}

nachocode에서는 **앱소스**(**App Source**)를 **버전별로 체계적으로 관리**하고 있어, **기능이 개선**되거나 **새로운 기능이 추가**되었을 때, **버그가 수정**되었을 때 버전이 올라가게 됩니다. 앱소스에 새로이 추가되거나 개선된 기능을 사용하고 싶다면 기존 앱을 **다시 빌드**하여 적용해야 합니다.

:::info 업데이트 적용
[**나쵸코드 대시보드**](https://nachocode.io/?utm_source=docs&utm_medium=documentation&utm_campaign=devguide) > **앱 빌드** > **안드로이드/iOS 앱 빌드** > **새 버전 만들기**
:::

:::note 참고
**nachocode에서 빌드 시 앱소스의 최신 버전이 자동 적용됩니다.  
최신 앱소스를 사용하면 사용자에게 더 빠르고 안정적인 앱 경험을 제공할 수 있습니다.**
:::

---

### 플랫폼 별 독립 버전관리 {#app-source-versions-os}

- **Android**와 **iOS**는 각기 다른 운영체제 및 정책을 가지므로, nachocode는 두 플랫폼의 앱소스를 **독립적으로 관리**합니다.
- 특정 기능이나 수정사항은 플랫폼에 따라 버전별로 다르게 적용될 수 있습니다.
- 예를 들어 Android에서는 Google 정책에 맞춘 **Target API** 조정, iOS에서는 새로운 **권한 정책 반영** 등의 변경이 발생할 수 있습니다.

---

### 릴리즈 노트에서 버전별 변경 사항 확인 {#app-source-versions-releases}

각 버전의 앱소스에는 어떤 기능이 추가되었고, 어떤 버그가 수정되었는지 **릴리즈 노트**를 통해 상세히 확인하실 수 있습니다.
릴리즈 노트는 플랫폼 별로 나누어져 있으며, 아래 링크를 통해 확인 가능합니다.

- [Android 릴리즈 목록 보기](/docs/releases/v1/app-source/android/intro)
- [iOS 릴리즈 목록 보기](/docs/releases/v1/app-source/ios/intro)
