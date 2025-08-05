---
sidebar_label: 나쵸 링크 (nachocode.link)
pagination_label: 나쵸 링크 (nachocode.link)
description: nachocode에서의 나쵸 링크 활용법
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

# 나쵸 링크 (nachocode.link)

> 🚀 **추가된 버전:** `App Source ver.1.6.2`  
> 🔔 **최신화 일자:** 2025-08-04

![Android](https://img.shields.io/badge/Android-gray?logo=android)
![iOS](https://img.shields.io/badge/iOS-gray?logo=apple)
![Web](/img/docs/chrome-badge.svg)

## 나쵸링크 (nachocode.link) 활용

nachocode에서는 **딥링크를 더욱 쉽게 관리**할 수 있도록 **나쵸링크(nachocode Link)** 기능을 제공합니다. 나쵸링크는 nachocode 전용 딥링크 도메인인 `nachocode.link`를 활용하여, **하나의 링크로 Android와 iOS 앱 실행을 동시에 지원하고 앱 미설치 시 적절한 대응**을 할 수 있게 하는 서비스입니다. 2025년 6월 말 업데이트된 nachocode 앱소스 v1.6.2에서 앱 링크/유니버설 링크 동작 방식이 개선되며 이 나쵸링크 기능이 도입되었습니다.

### nachocode.link란?

**nachocode.link**는 nachocode가 제공하는 공식 딥링크 도메인으로, **각 앱별 서브도메인**을 통해 동작합니다. 예를 들어 우리 앱의 나쵸링크 도메인을 `ktown4u.nachocode.link`로 할당받았다면, 이 도메인으로 시작하는 링크는 nachocode가 관리하는 페이지를 거쳐 **사용자를 올바른 경로로 안내**합니다.

나쵸링크의 주요 특징.

- **단일 링크로 플랫폼 자동 구분:** `https://내앱이름.nachocode.link/경로` 형식의 링크 하나만 만들면, Android 기기에서는 앱 링크로 동작하여 앱을 열고, iOS 기기에서는 유니버설 링크로 동작하여 앱을 엽니다. (각 플랫폼의 설정은 nachocode에서 미리 구성합니다.)
- **앱 미설치 시 자동 처리:** 사용자가 링크를 클릭했는데 해당 앱이 없으면, nachocode 나쵸링크가 **자동으로 스토어로 리디렉션**해줍니다. 예를 들어 Android 사용자가 앱 미설치 상태로 나쵸링크를 누르면 Google Play 스토어의 해당 앱 페이지로 이동하며, iOS 사용자는 App Store로 이동합니다.

### nacho 링크에서 Universal Link 사용

nachocode 플랫폼은 v1.5.1부터 iOS Universal Link를 지원합니다. nachocode로 만들어진 앱은 기본적으로 **`{앱이름}.nachocode.link`와 같은 전용 서브도메인**을 할당받아 Universal Link로 활용합니다. 예를 들어 우리 앱 이름이 "MyApp"이면 `myapp.nachocode.link` 도메인이 생성되고, 해당 도메인에 대한 Apple 연계파일(`apple-app-site-association`)이 nachocode 서버에 호스팅됩니다. 이 파일에는 앱의 Bundle ID와 허용 경로 등이 포함되어 있어 iOS가 신뢰할 수 있도록 합니다. 개발자는 Xcode에서 **Associated Domains** 설정에 이 도메인을 추가해야 합니다 (예: `applinks:myapp.nachocode.link`). Nachocode가 제공하는 기본 설정을 따르면 별도 서버 구축 없이 Universal Link를 활용할 수 있습니다.

- **기본 동작:** iOS 기기에서 `https://myapp.nachocode.link/anything` 형태의 링크를 클릭하면, MyApp이 설치되어 있을 경우 곧바로 앱이 실행되어 해당 경로에 맞는 화면을 엽니다. 설치되어 있지 않으면 nachocode가 제공하는 **웹 랜딩 페이지**가 열립니다. 이 랜딩 페이지는 보통 앱 다운로드 버튼과 해당 콘텐츠의 웹 미리보기 등으로 구성됩니다 (만약 웹 콘텐츠가 없을 경우 다운로드 안내만 표시).

- **브라우저 접근:** 만약 사용자가 **Safari 주소창에 직접 해당 URL을 입력**하거나 할 경우, Universal Link는 바로 동작하지 않을 수 있습니다. iOS 정책상 **같은 도메인 내에서 리디렉션되는 링크**는 웹으로 열리도록 할 때도 있기 때문입니다. 이런 상황을 대비해 nachocode.link는 두 가지 전용 경로를 제공합니다:
  - **루트 경로(`/`)** – 앱 설치 시도 경로: 해당 도메인에 단순 접속하면, nachocode 서버가 **앱 설치 여부를 체크**하여 설치된 경우 **앱의 URI 스킴으로 열기**를 시도합니다. 앱이 설치되지 않은 경우에는 iOS에서 "유효하지 않은 URL입니다"라는 팝업이 뜨지만, nachocode는 곧바로 **App Store로 이동할 수 있는 버튼이 포함된 안내 페이지**를 표시합니다. 사용자는 팝업을 닫은 뒤 그 페이지에서 다운로드를 진행할 수 있습니다.
  - **오픈 경로(`/open`)** – 직접 다운로드 경로: 이 경로로 접속하면 **항상 앱 스토어(App Store)의 해당 앱 설치 페이지로 바로 이동**합니다. 즉, 기기에 앱이 이미 설치되어 있더라도 무조건 스토어를 여는 동작입니다. 이 모드는 **마케팅 캠페인 등에서 설치 유도를 최우선**으로 할 때 유용합니다.

개발자는 상황에 따라 위 두 URL을 선택적으로 사용할 수 있습니다. 예를 들어 **이미 앱을 설치한 기존 사용자에게 발송하는 홍보 문자**에는 그냥 `https://myapp.nachocode.link/경로` 형식의 링크를 넣어서 누르면 바로 앱으로 열리게 하고, **앱 미설치자 대상 광고 배너**에는 `https://myapp.nachocode.link/open?targeturl=...` 형식으로 넣어 처음부터 앱 다운로드를 유도하는 식입니다.

### nachocode에서 App Link 사용

nachocode는 v1.6.1부터 Android App Links를 지원합니다. nachocode 앱을 생성할 때 기본 제공되는 `nachocode.link` 도메인을 통해 이 기능이 구현되어 있습니다. 각 앱별로 고유한 서브도메인 (예: `myapp.nachocode.link`)이 주어지고, 해당 도메인에 **assetlinks.json** 파일이 호스팅되어 있습니다. 이 파일에는 해당 앱의 패키지와 인증서 정보가 담겨 있어 Android가 자동 검증하게 됩니다. 또한 nachocode 플랫폼에서 빌드된 Android 앱은 Manifest에 이 도메인에 대한 intent-filter가 포함되어 있습니다. 개발자는 별도로 할 작업은 거의 없지만, **앱 출시 후 Google Play에 App Link 관련 변동사항**(있다면) 정도는 확인할 수 있습니다. 일반적으로 nachocode에서 생성한 앱은 바로 App Link가 동작하므로, **Android 기기에서 `https://myapp.nachocode.link/...` 링크를 클릭하면 앱이 켜지는지** 테스트해보면 됩니다.

### nachocode 나쵸링크 설정 및 사용

nachocode 나쵸링크를 사용하려면 **nachocode 대시보드에서 나쵸링크 설정**을 해야 합니다. 일반적으로는 다음과 같은 과정이 수반됩니다.

1. **나쵸링크 도메인 발급:** nachocode 측에서 각 앱에 고유한 서브도메인을 지정합니다. 서브도메인은 보통 **앱 이름**이나 **프로젝트 ID** 등을 기반으로 생성됩니다. (예: ktown4u 앱 → `ktown4u.nachocode.link`)
2. **스토어 ID 등록:** 해당 도메인과 연결된 앱의 **Play 스토어 패키지명**과 **App Store ID**를 대시보드에 등록합니다. 이를 통해 nachocode가 나쵸링크 클릭 시 어느 스토어로 연결해야 할지 인지합니다.
3. **연결 경로 및 파라미터 설정:** 나쵸링크로 앱 실행 시 전달할 initial URL(`targeturl`)을 설정할 수 있습니다. 예컨대 `ktown4u.nachocode.link`으로 접속하면 앱의 특정 화면으로 이동하도록 경로를 지정할 수 있습니다. 이 경로 정보는 nachocode 앱에서 딥링크 처리하여 `window.location` 등으로 전달됩니다.
4. **(iOS) 연관 도메인 설정:** nachocode가 제공하는 `nachocode.link` 도메인은 첫 세팅 후, **자동으로 Apple 연관도메인**(Associated Domain)에 포함되도록 앱이 빌드됩니다. 개발자는 별도로 팀ID 등을 신경쓰지 않아도 되며, nachocode가 AASA 파일도 관리합니다.
5. **(Android) 도메인 인증:** 마찬가지로 `nachocode.link`에 대한 assetlinks.json도 nachocode가 제공하므로, 개발자는 별도 세팅 없이 앱 링크 기능을 사용할 수 있습니다.

설정을 마친 후에는 **나쵸링크 URL을 홍보나 링크 공유 시 그대로 사용**하면 됩니다. 예를 들어 ktown4u 서비스의 고객에게 앱 설치를 유도하고 콘텐츠를 공유하려면 `https://ktown4u.nachocode.link` 같은 링크 하나만 전달하면, **설치 여부와 관계없이** Android 사용자는 앱 또는 플레이스토어로, iOS 사용자는 앱 또는 앱스토어로 적절히 이동하게 됩니다.

### 나쵸링크 활용 사례 (ktown4u)

나쵸링크의 실제 활용 예로, **ktown4u** 앱 사례를 들 수 있습니다. ktown4u는 nachocode로 개발된 앱 서비스로, 자사의 앱 전환 링크로 [https://ktown4u.nachocode.link/open](https://ktown4u.nachocode.link/open)을 사용했습니다. 기존에는 Android와 iOS 안내를 별도로 만들어 **“안드로이드 사용자 클릭 / 아이폰 사용자 클릭”** 식으로 나눴다면, 나쵸링크 도입 후에는 **단 하나의 URL**만으로 모든 사용자에게 안내가 가능해졌습니다. 그 결과 **마케팅 캠페인**에서 링크 관리가 단순해지고, 클릭한 사용자도 **기기 구분 없이 동일한 URL**로 앱을 설치하거나 열 수 있어 편의성이 향상되었습니다.

또 다른 이점으로, ktown4u 팀은 나쵸링크를 쓰면서 **딥링크 관련 구현 부담을 줄일 수 있었다**고 합니다. 개발자가 직접 assetlinks.json이나 AASA 파일을 호스팅하고 관리할 필요가 없고, nachocode가 제공하는 기본 도메인을 활용하므로 **별도 도메인 비용이나 HTTPS 인증서 관리 부담도 없습니다.** 딥링크의 복잡한 부분을 nachocode가 대신 처리해주므로, 개발팀은 **서비스 로직 구현과 콘텐츠 준비에 집중**할 수 있었습니다.

---
