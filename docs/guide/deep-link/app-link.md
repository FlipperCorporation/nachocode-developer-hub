---
sidebar_label: 앱 링크
pagination_label: 앱 링크 (App Link)
description: nachocode에서의 Android App Link 활용법
keywords: [딥링크, 앱 링크, 안드로이드, Deep Link, App Link, Android]
---

# 앱 링크 (App Link)

import { BadgeWithVersion } from '@site/src/components/svg/badge-with-version';

> 🚀 **추가된 버전:** <BadgeWithVersion type="Android" version="v1.6.1" link="/docs/releases/v1/app-source/android/release-v-1-6-1" />  
> 🔔 **최신화 일자:** 2025-08-04

![Android Only](https://img.shields.io/badge/Android-Only-gray?logo=android)

## 앱 링크 (App Link) 이해하기 {#understand}

**앱 링크**(**App Link**)는 Android에서 제공하는 딥링크 방식으로, **도메인(URL)을 이용해 앱을 실행**하는 방법입니다. 일반적인 웹 URL과 앱을 연결하여, 사용자가 특정 도메인의 링크를 클릭하면 웹 대신 **해당 앱이 실행**되도록 해줍니다. nachocode 앱소스 v1.6.1부터 Android 앱 링크를 지원하며, 이를 사용하려면 다음 설정이 필요합니다:

### 웹 서버에 assetlinks 파일 추가하기

앱 링크를 구현하려면 우선 **도메인 소유 증명**을 해야 합니다. 이를 위해 **웹 서버의 `.well-known/assetlinks.json` 경로에 파일을 호스팅**해야 합니다. 이 파일에는 내 웹 도메인과 연결할 Android 앱의 정보(패키지 이름과 인증서 SHA256 지문)가 들어있습니다. 파일의 형식은 JSON 배열이며, 예시는 다음과 같습니다:

```json
[
  {
    "relation": ["delegate_permission/common.handle_all_urls"],
    "target": {
      "namespace": "android_app",
      "package_name": "com.nachocode.example",
      "sha256_cert_fingerprints": [
        "12:34:56:...:AB:CD:EF" // 앱 서명 인증서의 SHA-256 지문 값
      ]
    }
  }
]
```

위 예시에서 `package_name`은 앱의 패키지명과 동일해야 하고, `sha256_cert_fingerprints`는 앱의 서명 키에 대한 SHA-256 해시 값입니다. 인증서 지문은 `keytool` 등의 도구로 추출할 수 있습니다. nachocode로 빌드한 앱의 서명 키 지문이 필요하다면 nachocode 문서를 참고하거나 지원팀에 문의하여 값을 얻습니다.

assetlinks.json 파일은 **HTTPS로 제공**되어야 하며, **Content-Type: application/json** 헤더와 함께 제공되는지 확인해야 합니다. 파일을 업로드한 후, `https://<내도메인>/.well-known/assetlinks.json` 주소로 접근하여 내용이 노출되는지 테스트합니다.

또한 nachocode 앱이 해당 도메인에 대한 앱 링크를 인식하도록 **앱 설정에도 도메인 정보를 추가**해야 합니다. (nachocode 대시보드에서 관련 설정을 제공하거나, 필요 시 개발팀에 문의하여 앱 링크용 도메인을 등록하십시오.)

#### assetlinks.json 포맷 예시

- **단일 앱 연결:** 한 도메인을 하나의 Android 앱에 연결하는 기본 예시는 위 JSON과 같습니다.
- **다중 앱 연결:** 하나의 도메인을 여러 앱과 연결해야 하는 경우 assetlinks.json 배열에 여러 객체를 넣으면 됩니다. 각 객체마다 다른 앱의 package_name과 fingerprint를 나열하면 됩니다.

### 앱 링크 사용 예시

웹 서버와 앱에 위 설정이 완료되면, **사용자는 해당 도메인의 URL을 클릭하는 것만으로 앱을 바로 열 수 있게** 됩니다. 예를 들어 내 도메인이 `myapp.com`이고 앱 링크가 설정되어 있다면, Android 기기에서 `https://myapp.com/some/page` 링크를 클릭할 때 곧바로 내 앱이 실행되어 `/some/page`에 대응되는 화면을 보여줍니다. (최초 실행 시에는 Android 시스템이 "이 링크를 열 때 사용할 앱"을 묻는 대화창을 표시할 수 있으며, 사용자는 설치된 앱이나 브라우저 중 선택할 수 있습니다.)

만약 사용자의 기기에 앱이 설치되어 있지 않다면, 링크는 **일반 웹 페이지로서 동작**하게 됩니다. 즉 `myapp.com`의 해당 경로에 대한 웹 콘텐츠가 있다면 그것이 표시됩니다 (웹 **폴백(fallback)** 동작). 이런 경우 웹 페이지에서 앱 설치를 유도하는 배너를 띄우거나 스토어로 이동시키는 안내를 제공하면 좋습니다.

### 앱 미설치 시 스토어로 유도하기

앱 링크의 장점은 **같은 URL로 앱과 웹을 모두 제공**할 수 있다는 점이지만, 상황에 따라 앱 미설치 사용자를 바로 **앱 설치 페이지**로 보내고 싶을 수도 있습니다. 기본적으로 앱 링크는 앱 미설치 시 웹사이트가 열린 뒤 별도 동작은 하지 않으므로, 이를 보완하려면 웹 페이지 단에서 처리해야 합니다. 방법은 두 가지 정도가 있습니다:

- **웹 페이지 리디렉션:** 해당 도메인의 웹 서버에서 사용자 Agent 등을 감지해 **모바일 브라우저로 접근한 경우 앱 설치 페이지로 리디렉션**하도록 구성할 수 있습니다. 예를 들어 `https://myapp.com/some/page`에 접속했는데 앱 미설치 상태로 웹이 열렸다면, 페이지 로드 시 `window.location`을 앱스토어 또는 플레이스토어 URL로 변경하는 스크립트를 넣을 수 있습니다. 단, 이렇게 하면 웹 콘텐츠를 볼 수 없으므로 사용자 경험을 고려해야 합니다.

- **배너/안내 표시:** 웹 페이지에 **"앱에서 더 좋은 경험 보기 - 설치하기"** 등의 배너나 팝업을 띄워 사용자가 설치를 선택하도록 유도할 수 있습니다. 사용자가 수동으로 설치하도록 유도하고, 설치 후 다시 링크를 누르면 자연스럽게 앱으로 연결됩니다.

두 방법 모두 **웹 개발 측면의 구현**이 필요합니다. nachocode 플랫폼에서 자동으로 미설치 유저를 스토어로 보내주지는 않으므로, 앱 링크용 웹 페이지를 제작할 때 설치 유도 전략을 함께 고려하세요.
