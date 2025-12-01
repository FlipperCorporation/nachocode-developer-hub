---
sidebar_position: 1
sidebar_label: 개요
pagination_label: nachocode 클라이언트 SDK 개요
description: nachocode 클라이언트 SDK는 웹 개발자를 위한 강력한 개발 도구로, 다양한 네이티브 기능 (푸시 알림, 인증, 디바이스 제어, QR 스캐너 등)을 손쉽게 웹에 통합할 수 있도록 지원합니다. SDK를 활용하여 혁신적으로 네이티브 앱을 개발하세요.
keywords:
  [
    앱 빌더,
    웹뷰 앱,
    하이브리드 앱,
    네이티브 앱,
    푸시 알림,
    인앱 결제,
    안드로이드,
    Android,
    iOS,
    WebView,
    WKWebView,
    나쵸코드,
    nachocode,
  ]
image: /img/docs/thumbnails/SDK/intro.svg
---

# nachocode Client SDK 개요

import { ThumbnailImage } from '@site/src/components/common/image/thumbnail-image';

<ThumbnailImage src='/img/docs/thumbnails/SDK/intro.svg'/>

> 🔔 **최신화 일자:** 2025-10-22

**nachocode Client SDK**는 웹 클라이언트 개발자가 **모바일 네이티브 앱의 고유 기능**을 손쉽게 활용할 수 있도록 돕는 JavaScript SDK입니다. 웹 애플리케이션에 nachocode Client SDK를 연동하면 코드 몇 줄만으로도 간단하게 디바이스의 다양한 기능을 활용하여 **하이브리드 앱**을 개발할 수 있습니다. 웹 기술만으로도 모바일 기기의 네이티브 API를 호출하고 제어할 수 있으므로, **별도 네이티브**(**Android/iOS**) **개발** 없이도 앱 기능을 구현할 수 있습니다.

이 문서는 **SDK의 설치, 초기화, 주요 기능 및 사용 방법** 등을 안내합니다.

---

## 문서 구조

nachocode Client SDK 문서는 아래와 같은 구조로 구성되어 있습니다:

1. **시작하기**  
   nachocode Client SDK를 웹 클라이언트에 설치하고 설정하는 방법을 안내합니다.  
   :::info SDK 시작하기
   ➡️ [nachocode 클라이언트 SDK 시작하기](./getting-started)
   :::

2. **TypeScript 지원**  
   nachocode Client SDK를 타입스크립트 프로젝트에 설치하고 사용하는 방법을 안내합니다.  
   :::info 타입스크립트
   ➡️ [TypeScript 가이드](./typescript-support)
   :::

3. **React 지원**  
   nachocode Client SDK를 리액트 프로젝트에 설치하고 사용하는 방법을 안내합니다.  
   :::info 리액트
   ➡️ [React 가이드](./react-support)
   :::

4. **네임스페이스별 문서**  
   nachocode Client SDK의 각 네임스페이스(`authentication`, `device`, `push` 등)에 대한 상세한 문서와 사용법을 제공합니다.  
   :::info 네임스페이스
   ➡️ [네임스페이스 목록](/docs/sdk/namespaces)
   :::

5. **네임스페이스(외부연동)별 문서**  
   nachocode에서 외부 솔루션과 연동하는 방법과 SDK의 각 네임스페이스(`appsflyer`, `google`, `kakao` 등)에 대한 상세한 문서와 사용법을 제공합니다.  
   :::info 네임스페이스(외부연동)
   ➡️ [네임스페이스(외부연동) 목록](/docs/sdk/integrations)
   :::

6. **릴리즈 노트**  
   nachocode Client SDK의 각 버전별 릴리즈에 대한 노트를 제공합니다.  
   :::info 릴리즈 노트
   ➡️ [SDK 릴리즈 노트](/docs/releases/v1/sdk/intro)
   :::

---

## nachocode 앱 구조

![nachocode_application](/img/docs/nachocode_app.webp)

nachocode에서 빌드한 앱들은 위 구조를 통해 앱 사용자들에게 다양한 기능을 제공할 수 있게 설계돼있습니다.

nachocode를 활용하여 만들어진 네이티브 앱들은 nachocode Client SDK를 통해 웹 클라이언트에서 **Nacho Native APIs**에 접근할 수 있습니다.

**nachocode Client SDK**를 이용해 앱 사용자들에게 네이티브 앱 경험을 제공하세요!

:::info 나쵸코드 앱 자세히 살펴보기
➡️ [nachocode 앱소스 가이드](/docs/guide/app-source)를 통해 나쵸코드 앱을 자세히 살펴보세요.
:::

---

## 시작하기

nachocode Client SDK를 처음 사용하시나요?

:::info SDK 시작하기
➡️ [nachocode 클라이언트 SDK 시작하기](./getting-started)를 확인하여 SDK 설치 및 초기화를 진행하세요.
:::

---

## 지원 플랫폼

nachocode에서는 하기 플랫폼의 네이티브 모바일 앱 빌드를 지원합니다.

- Android
- iOS

---

## 주요 기능

nachocode Client SDK는 다음과 같은 기능을 제공합니다.

### 1. **앱 정보 관리 (`app`)**

애플리케이션 이름, 버전, 패키지 이름 등의 정보를 제공합니다.  
:::info app
➡️ [앱 네임스페이스 문서 바로가기](./namespaces/app)
:::

### 2. **사용자 인증 (`authentication`)**

생체 인증(Fingerprint/Face ID) 등 다양한 인증 수단을 제공합니다.  
:::info authentication
➡️ [인증 네임스페이스 문서 바로가기](./namespaces/authentication)
:::

- **사용자 인증**: 생체 인증 및 권한 확인 기능을 제공합니다.

### 3. **네이티브 백 키 제어 (`backkey`)**

Android 디바이스의 네이티브 백 키 이벤트를 제어할 수 있습니다.  
:::info backkey
➡️ [백 키 네임스페이스 문서 바로가기](./namespaces/backkey)
:::

### 4. **브라우저 기능 (`browser`)**

외부 브라우저 또는 내부 브라우저로 URL을 열 수 있는 기능을 제공합니다.  
:::info browser
➡️ [브라우저 네임스페이스 문서 바로가기](./namespaces/browser)
:::

### 5. **클립보드 관리 (`clipboard`)**

텍스트를 클립보드에 복사하거나 읽을 수 있습니다.  
:::info clipboard
➡️ [클립보드 네임스페이스 문서 바로가기](./namespaces/clipboard)
:::

### 6. **디바이스 정보 및 상태 확인 (`device`)**

디바이스 모델, OS 버전, 배터리 상태, 네트워크 상태, 언어 코드 등을 확인할 수 있습니다.  
:::info device
➡️ [디바이스 네임스페이스 문서 바로가기](./namespaces/device)
:::

### 7. **환경 설정 및 실행 상태 관리 (`env`)**

SDK 초기화 상태, 실행 환경(웹/앱) 등을 확인할 수 있습니다.  
:::info env
➡️ [환경 네임스페이스 문서 바로가기](./namespaces/env)
:::

### 8. **이벤트 관리 (`event`)**

초기화, 포그라운드/백그라운드 전환, 네트워크 상태 변경 등의 이벤트를 처리합니다.  
:::info event
➡️ [이벤트 네임스페이스 문서 바로가기](./namespaces/event)
:::

### 9. **인앱결제 기능 (`iap`)**

Android 및 iOS 환경에서 네이티브 인앱결제를 손쉽게 처리할 수 있습니다.  
:::info iap
➡️ [인앱결제 네임스페이스 문서 바로가기](./namespaces/iap)
:::

### 10. **로딩 제어 (`loading`)**

네이티브 로딩 인디케이터를 제어하여 커스텀 로딩 경험을 제공합니다.
:::info loading
➡️ [로딩 네임스페이스 문서 바로가기](./namespaces/loading)
:::

### 11. **위치 기능 (`location`)**

현재 위치 정보를 가져오는 기능을 제공합니다.
:::info location
➡️ [위치 네임스페이스 문서 바로가기](./namespaces/location)
:::

### 12. **네비게이션 제어 (`navigation`)**

앱의 네비게이션 스택을 제어하고 스와이프 제스처를 설정할 수 있습니다.
:::info navigation
➡️ [네비게이션 네임스페이스 문서 바로가기](./namespaces/navigation)
:::

### 13. **디바이스 권한 제어 (`permission`)**

카메라, 위치, 푸시 알림 등 디바이스 권한을 요청하고 상태를 확인할 수 있습니다.  
:::info permission
➡️ [권한 네임스페이스 문서 바로가기](./namespaces/permission)
:::

### 14. **내부 저장소 데이터 관리 (`preference`)**

애플리케이션 내부 저장소를 통해 데이터를 저장 및 관리합니다.
:::info preference
➡️ [내부 저장소 네임스페이스 문서 바로가기](./namespaces/preference)
:::

### 15. **푸시 알림 (`push`)**

토큰을 등록하거나 토픽을 구독, 로컬 푸시를 예약하는 등 강력한 푸시 알림 기능을 활용할 수 있습니다.
:::info push
➡️ [푸시 네임스페이스 문서 바로가기](./namespaces/push)
:::

### 16. **스캔 기능 (`scanner`)**

QR 코드 스캔 및 기타 스캔 기능을 제어할 수 있습니다.
:::info scanner
➡️ [스캐너 네임스페이스 문서 바로가기](./namespaces/scanner)
:::

### 17. **설정 (`setting`)**

'Pull to Refresh'와 같은 새로고침 동작과 화면 확대 기능 등 앱의 다양한 설정을 제어할 수 있습니다.
:::info setting
➡️ [설정 네임스페이스 문서 바로가기](./namespaces/setting)
:::

### 18. **네이티브 공유 기능 (`share`)**

네이티브 공유 UI를 통해 콘텐츠를 공유할 수 있습니다.
:::info share
➡️ [공유 네임스페이스 문서 바로가기](./namespaces/share)
:::

### 19. **스토어 기능 (`store`)**

앱스토어 및 플레이스토어 상호작용 기능을 제공합니다.
:::info store
➡️ [스토어 네임스페이스 문서 바로가기](./namespaces/store)
:::

### 20. **탭바 제어 (`tabbar`)**

앱 내부 탭바의 표시 여부 및 이동을 제어할 수 있습니다.
:::info tabbar
➡️ [탭바 네임스페이스 문서 바로가기](./namespaces/tabbar)
:::

### 21. **진동 및 햅틱 피드백 (`vibration`)**

디바이스의 진동 및 햅틱 피드백을 트리거할 수 있습니다.
:::info vibration
➡️ [진동 네임스페이스 문서 바로가기](./namespaces/vibration)
:::

---

## 외부 연동

### 1. **애플 소셜 기능 (`apple`)**

Apple 계정을 통한 소셜 로그인 기능을 네이티브로 제공합니다.  
:::info apple
➡️ [Apple 네임스페이스 문서 바로가기](./integrations/apple/integrate)
:::

### 2. **앱스플라이어 기능 (`appsflyer`)**

AppsFlyer 마케팅 어트리뷰션 및 사용자 트래킹 기능을 제공합니다.  
:::info appsflyer
➡️ [Appsflyer 네임스페이스 문서 바로가기](./integrations/appsflyer/integrate)
:::

### 3. **페이스북 소셜 기능 (`facebook`)**

Facebook 계정을 통한 소셜 로그인 기능을 제공합니다.  
:::info facebook
➡️ [Facebook 네임스페이스 문서 바로가기](./integrations/facebook/reference)
:::

### 4. **구글 소셜 기능 (`google`)**

Google 계정을 통한 소셜 로그인 기능을 제공합니다.  
:::info google
➡️ [Google 네임스페이스 문서 바로가기](./integrations/google/reference)
:::

### 5. **카카오 소셜 기능 (`kakao`)**

Kakao 계정을 통한 소셜 로그인 기능을 제공합니다.  
:::info kakao
➡️ [Kakao 네임스페이스 문서 바로가기](./integrations/kakao/reference)
:::

---

## **마무리**

nachocode Client SDK는 **웹 애플리케이션에서 네이티브 기능을 손쉽게 통합**할 수 있도록 설계되었습니다.  
지속적인 업데이트를 통해 **더 많은 기능과 향상된 개발 경험**을 제공할 예정입니다.

nachocode Client SDK와 함께 **웹과 네이티브의 경계를 허물고** 더욱 혁신적인 애플리케이션을 개발해보세요! 🚀

:::tip 지원팀 문의하기
nachocode 팀은 여러분의 성공적인 프로젝트 구현을 위해 항상 도움을 준비하고 있습니다.  
기술적인 질문이나 피드백이 있다면 언제든지 지원팀 이메일 [support@nachocode.io](mailto:support@nachocode.io)로 문의를 보내주세요.
:::

---
