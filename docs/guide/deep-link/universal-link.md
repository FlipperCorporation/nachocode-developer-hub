---
sidebar_label: 유니버셜 링크
pagination_label: 유니버셜 링크 (Universal Link)
description: nachocode에서의 iOS Universal Link 활용법
keywords: [딥링크, 유니버셜 링크, Deep Link, Universal Link, App Links, iOS]
---

# 유니버셜 링크 (Universal Link) {#universal-link}

import { BadgeWithVersion } from '@site/src/components/svg/badge-with-version';

> 🚀 **추가된 버전:** <BadgeWithVersion type="iOS" version="v1.5.1" link="/docs/releases/v1/app-source/ios/release-v-1-5-1" />  
> 🔔 **최신화 일자:** 2025-08-04

![iOS Only](https://img.shields.io/badge/iOS-Only-gray?logo=apple)

## 유니버설 링크 (Universal Link) 이해하기 {#understand}

**유니버설 링크**(**Universal Link**)는 iOS에서 제공하는 딥링크 방식으로, 마찬가지로 **웹 URL을 통해 앱을 실행**할 수 있게 해줍니다. Apple에서 도입한 방식으로, 사용자가 특정 도메인의 HTTPS 링크를 열었을 때 해당 도메인이 **사전에 연동된 iOS 앱**이 있으면 사파리 대신 앱이 실행됩니다. nachocode 앱소스 `v1.5.1`부터 iOS 유니버설 링크를 지원합니다. 설정 방법은 다음과 같습니다:

### 웹 서버에 AASA 파일 추가하기

iOS 유니버설 링크를 쓰려면, 웹 서버에 **애플 앱 사이트 연관 파일**을 제공해야 합니다. 이 파일의 이름은 보통 **apple-app-site-association** (**AASA**)이고, `.well-known/apple-app-site-association` 경로로 HTTPS 제공됩니다. **확장자가 없고(JSON 포맷이지만)** Content-Type은 `application/json`으로 보내야 합니다. AASA 파일에는 연결할 iOS 앱의 정보(앱 ID와 경로 규칙)가 담깁니다. 예시 구조는 다음과 같습니다:

```json
{
  "applinks": {
    "apps": [],
    "details": [
      {
        "appID": "ABCDE12345.com.example.myapp",
        "paths": ["/path1/*", "/path2/detail/*"]
      }
    ]
  }
}
```

- `appID`: **개발자 팀 ID + 번들ID** 조합으로, Apple에서 앱을 식별하는 문자열입니다. (`ABCDE12345`는 Apple 개발자 계정의 팀 ID 예시이고, `com.example.myapp`은 앱의 Bundle ID입니다.)
- `paths`: 유니버설 링크로 연결할 경로 패턴 목록입니다. 위 예시는 `/path1/` 이하 모든 경로와 `/path2/detail/` 이하 모든 경로를 유니버설 링크로 허용한다는 뜻입니다. `"*"` 와 `"?*"` 와일드카드로 세부 조정도 가능합니다. 지정한 경로만 앱으로 열리고, 그 외 경로는 앱으로 열리지 않습니다.

AASA 파일 역시 **HTTPS로 호스팅**되어야 하며, `https://<내도메인>/.well-known/apple-app-site-association`으로 접근 가능해야 합니다. 파일이 정상적으로 제공되는지 확인한 후, Apple 개발자 계정의 **앱 설정**(**Associated Domains**)에 해당 도메인을 추가해야 합니다. nachocode로 빌드된 iOS 앱의 경우, nachocode 측에서 **앱 서명 시 연관 도메인(Associated Domains)** 설정에 도메인을 포함해야 유효한 유니버설 링크가 완성됩니다. 그러므로 AASA 파일을 준비한 후 nachocode 지원팀에 **해당 도메인과 앱 정보를 전달**하여 앱에 연관도메인 설정을 해달라고 요청해야 할 수 있습니다.

#### AASA 파일 작성 팁

- `apps` 배열은 일반적으로 비워둡니다 (과거 iOS12 이하 호환을 위해 빈 배열 유지).
- `details` 내부에 여러 개의 object를 넣어 **여러 앱의 appID**를 나열할 수도 있습니다. (한 도메인을 여러 iOS 앱과 연결 가능)
- paths에 `*`를 넣으면 모든 경로를 의미하며, `"/*"`는 루트 포함 모든 경로, `"/path*"`는 path로 시작하는 모든 경로 등을 표현합니다. `exclude`: true 옵션을 주어 특정 패턴을 제외할 수도 있습니다 (고급 설정으로, 필요 시 Apple 문서 참고).

### 유니버설 링크 사용 예시

유니버설 링크 설정이 완료되면, 사용자가 **사파리나 iMessage 등에서 해당 도메인의 링크를 클릭할 때 자동으로 앱이 실행**됩니다. 예를 들어 `https://myapp.com/path1/home`이라는 링크를 메시지로 받았을 때, iPhone에 해당 앱이 설치되어 있고 AASA 설정이 올바르면 사파리가 열리지 않고 **곧장 내 앱이 실행**되어 `/path1/home`에 해당하는 화면이 보여집니다. iOS에서는 한 번 유니버설 링크가 앱으로 연결되면 **추후에도 계속 앱으로 열리는 기본 동작**이므로, 사용자가 특별히 링크를 길게 눌러 "웹으로 열기"를 선택하지 않는 한 편리하게 앱으로 연결됩니다.

유니버설 링크는 Android의 앱 링크와 달리 **사용자에게 “앱으로 열까요?” 같은 확인 팝업을 표시하지 않고** 곧바로 앱을 여는 것이 특징입니다. (사용자가 이전에 해당 도메인을 웹으로 열도록 설정했다면 예외적으로 웹이 열릴 수 있습니다.)

### 앱 미설치 시 처리

유니버설 링크도 앱 링크와 마찬가지로, **앱이 설치되어 있지 않으면 해당 URL의 웹 사이트가 열리게 됩니다.** 따라서 해당 도메인의 웹 페이지를 제공하고, 앱이 없는 사용자에게 **회원가입 유도 또는 앱 설치 안내**를 하는 것이 일반적입니다. iOS에서는 별도의 앱 미설치 감지 스크립트를 제공하지 않으므로, **웹 컨텐츠 자체를 적절히 구성**하는 것으로 대응합니다.

앱 마케팅 측면에서, 유니버설 링크를 사용할 때 **웹 페이지를 앱 설치 페이지로 리디렉션**하도록 설정하는 것은 지양하는 편입니다. 왜냐하면 사용자가 앱이 없더라도 웹에서 콘텐츠를 볼 수 있게 한 것이 유니버설 링크의 이점인데, 이를 무시하고 곧바로 스토어로 보내면 오히려 사용자 경험이 떨어질 수 있기 때문입니다. 대신 **상황에 맞춰**:

- 웹상에서 **“더 나은 경험을 위해 앱을 설치하세요”**라는 메시지와 함께 설치 링크를 제공하거나,
- 중요한 이벤트의 경우 이메일이나 푸시로 **앱 설치를 유도**하는 방식을 고려합니다.

## 스토어 앱 ID 확인 방법

딥링크 URL에서 `AOS_id`와 `iOS_id` 파라미터로 **앱의 스토어 ID**를 사용한다고 언급했습니다. 이 항목에서는 Android와 iOS에서 **자신의 앱 스토어 ID를 찾는 방법**을 안내합니다.

### Android – 플레이스토어 앱 ID

**Android 플레이 스토어의 앱 ID**는 곧 **앱의 패키지명**과 동일합니다. 일반적으로 nachocode로 앱을 생성하면 패키지명이 정해지며, 대시보드 **앱 설정 화면**에서 패키지명을 확인할 수 있습니다 (예: `com.company.appname`).

플레이스토어에 앱을 출시한 경우, 앱의 플레이스토어 URL을 보면 `...?id=com.company.appname` 형태로 **`id=` 뒤에 패키지명이 표기**됩니다. 이 부분이 곧 앱 ID이며, 딥링크의 `AOS_id`에 그대로 넣으면 됩니다. 예를 들어 플레이스토어 URL이 `https://play.google.com/store/apps/details?id=com.project.nachocode` 라면 `AOS_id=com.project.nachocode` 로 지정합니다.

### iOS – 앱스토어 앱 ID

**iOS 앱스토어의 앱 ID**는 Apple에서 발급하는 **고유한 숫자 ID**입니다. 앱스토어 URL에서 확인할 수 있는데, 보통 `apps.apple.com` 주소 중에 `/id<숫자>` 형태로 포함되어 있습니다. 예를 들어 앱스토어 URL이 `https://apps.apple.com/kr/app/앱이름/id123456789` 인 경우 `id123456789`가 해당 앱의 ID입니다. 딥링크의 `iOS_id` 파라미터에는 이 **"id"를 포함한 문자열** 전체를 넣어야 합니다 (`iOS_id=id123456789`). nachocode 대시보드의 iOS 앱 정보나 App Store Connect의 앱 정보 화면에서도 **Apple ID** 항목으로 이 값을 확인할 수 있습니다.

> **Note:** iOS의 App Store ID는 앱 생성 시 자동 부여되며, 개발 단계에서는 아직 없을 수 있습니다. 만약 앱스토어에 출시 전이라면 `iOS_id`를 딥링크에 넣어도 소용없으므로, 우선은 Android에 한해 딥링크-스토어 연결을 사용하거나 출시 후 해당 값을 업데이트하세요.
