---
sidebar_label: 앱 링크
pagination_label: 앱 링크 (App Link)
description: nachocode에서의 Google Android의 표준 딥링크 방식인 앱 링크 (App Link)를 설정하는 방법과 활용법을 안내합니다.
keywords:
  [
    딥링크,
    딥 링크,
    딥 링크 구현하기,
    앱 링크,
    앱링크,
    앱 링크 설정하기,
    앱 링크 구현하기,
    Deep Link,
    Deep-Link,
    App-Links,
    App-Link,
    App Links,
    App Link,
    안드로이드,
    Android,
  ]
---

# 앱 링크 (App Link) {#app-link}

import { BadgeWithVersion } from '@site/src/components/svg/badge-with-version';

> 🚀 **추가된 버전:** <BadgeWithVersion type="Android" version="v1.6.1" link="/docs/releases/v1/app-source/android/release-v-1-6-1" />  
> 🔔 **최신화 일자:** 2025-08-07

![Android Only](https://img.shields.io/badge/Android-Only-gray?logo=android)

## 앱 링크 이해하기 {#understand-app-link}

**앱 링크**(**App Link**)는 Android 6.0 (Marshmallow, API 23)부터 도입된 **Android 공식 표준 딥링크 방식**으로, **HTTPS 도메인을 통해 앱을 실행**할 수 있는 기능입니다. 일반적인 웹 URL과 앱을 연결하여, 사용자가 특정 도메인의 링크를 클릭하면 웹 대신 **해당 앱이 실행**되도록 할 수 있어 사용성, 보안성 면에서 우수합니다.

**웹 URL과 앱을 연계**한다는 점에서 iOS의 [**유니버셜 링크** (Universal Link)](./universal-link)와 유사하며, 사용자가 특정 도메인의 HTTPS 링크를 열었을 때 **브라우저 대신 자동으로 대응되는 앱이 실행**됩니다. 예를 들어 [**nachocode developer**](https://play.google.com/store/apps/details?id=com.nachocode.developer) 앱과 [**https://nachocode.link**](https://nachocode.link) URL을 앱 링크로 연동해두면, 해당 링크를 클릭했을 때 **동일 도메인을 지원하는 앱**([**nachocode developer**](https://play.google.com/store/apps/details?id=com.nachocode.developer))이 **설치되어 있으면 앱이 곧바로 실행되고 해당 URL을 앱 내에서 처리**합니다. 설치되지 않은 경우에는 **동일한 URL의 웹페이지**([**https://nachocode.link**](https://nachocode.link))**를 그대로 브라우저에서 열어 웹 콘텐츠를 표시**하는 형태입니다.

앱 링크는 **Chrome, 삼성 인터넷 등 주요 Android 브라우저와 앱 내 WebView**에서 지원되며, 하나의 URL로 앱과 웹을 모두 연결할 수 있기 때문에 **마케팅 및 운영 측면에서 링크 관리가 단순화**되는 장점이 있습니다. 특히 **검색 엔진 최적화**(SEO)와 연계하여, 사용자가 웹 검색을 통해 앱 콘텐츠를 발견했을 때 **곧바로 앱으로 유도**하는 데에 쓰일 수 있습니다. 또한 SNS 같은 타사 매체에 우리 서비스 링크를 공유할 때도, Android 사용자가 그 링크를 클릭하면 웹 대신 앱으로 바로 연결되므로 **일관된 사용자 경험**을 제공할 수 있습니다. 기존의 URI 스킴과 달리 **도메인 소유권을 인증**해야 하기 때문에, 다른 앱에서 동일한 URL을 가로채는 것을 방지할 수 있어 보안성이 뛰어납니다.

:::info
nachocode 앱소스 <BadgeWithVersion type="Android" version="v1.6.1" link="/docs/releases/v1/app-source/android/release-v-1-6-1" />부터 Android 앱 링크 (App Link)를 지원합니다.
:::

---

### 앱 링크와 URI 스킴, 인텐트 스킴의 차이 {#deference-from-scheme}

| 구분                  | URI 스킴                                                                                                                    | 인텐트 스킴                                                                  | 앱 링크 (App Link)                                                           |
| --------------------- | --------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| **URL 형태**          | `{scheme}://{path}`                                                                                                         | `intent://{path}`                                                            | `https://{host}/{path}`                                                      |
| **지원 플랫폼**       | ![Android](https://img.shields.io/badge/Android-gray?logo=android) ![iOS](https://img.shields.io/badge/iOS-gray?logo=apple) | ![Android Only](https://img.shields.io/badge/Android-Only-gray?logo=android) | ![Android Only](https://img.shields.io/badge/Android-Only-gray?logo=android) |
| **안정성**            | 낮음 (고유성 보장 X)                                                                                                        | 낮음                                                                         | 높음 (도메인 인증 필요)                                                      |
| **앱 미설치 시 처리** | 아무 동작 없음                                                                                                              | 브라우저에서 fallback URL 열림                                               | 브라우저에서 웹으로 열림                                                     |
| **특징**              | 널리 사용되지만 다른 앱에서 같은 스킴을 사용할 수 있음                                                                      | 스킴, 패키지, 대체 URL 등 많은 정보를 담을 수 있음                           | Google에서 출시한 Android 표준 딥링크                                        |

---

### 앱 링크 동작 흐름 {#how-app-link-works}

앱 링크는 다음과 같은 과정을 거쳐 동작합니다.

1. 앱이 AndroidManifest에 **디지털 자산 연결(Digital Asset Links)** 정보를 선언합니다.
2. 웹 서버에 `assetlinks.json` 파일을 배포하여, 해당 도메인과 앱이 상호 인증되었음을 Android에 증명합니다.
3. 사용자가 Android에서 해당 도메인의 HTTPS URL을 클릭하면, Android는 `assetlinks.json`을 확인해 앱과의 연결을 검증합니다.
4. 검증이 완료되면 앱이 곧바로 실행되며, 설치되어 있지 않다면 브라우저로 이동합니다.

이 과정은 Android OS 수준에서 처리되므로, 앱 링크가 한 번 인증되면 별도의 팝업 없이 앱이 직접 실행되는 매끄러운 사용자 경험을 제공합니다.

---

### 앱 링크 구현 요건 {#app-link-requirements}

Android 앱 링크 (App Link)도 iOS의 [**유니버셜 링크** (Universal Link)](./universal-link)와 마찬가지로 **도메인 소유 인증**과 **앱 설정**이 필요합니다.

1. **웹 서버에 자격 증명 파일 등록**
   - 본인 소유의 자체 도메인이 있어야합니다. 이 도메인에서 SSL이 활성화된 https 프로토콜로 서비스를 제공해야합니다.
   - 해당 도메인의 `/.well-known/assetlinks.json` 경로에 **디지털 에셋 링크(Digital Asset Links)** JSON 파일을 호스팅해야 합니다.
   - 이 파일에는 신뢰할 앱의 패키지명과 서명 인증서 정보(SHA256 지문)가 들어 있으며, Android 시스템은 이를 통해 **해당 앱이 그 도메인을 열도록 승인되었는지** 확인합니다.
2. **앱에 Intent 필터 설정**
   - 앱의 `AndroidManifest.xml`에 **`android.intent.action.VIEW` 필터**와 함께 `<data android:scheme="https" android:host="...">` 등을 명시하여 **해당 도메인의 특정 URL 패턴을 수신**하도록 합니다.
   - 이때 `android:autoVerify="true"` 속성을 추가하면, 앱 설치 시 시스템이 자동으로 해당 도메인의 `assetlinks.json`을 내려받아 인증을 수행합니다. 인증이 성공하면 사용자가 그 도메인의 링크를 클릭할 때 **바로 해당 앱으로 연결**됩니다.
   - nachocode 플랫폼에서는 **해당 앱 설정을 시스템 상에서 자동으로 앱에 적용**합니다.

---

### 앱 링크 특징 {#app-link-features}

앱 링크 (App Link)는 Android 6.0 (Marshmallow, API 23) 이상에서 지원되며, 한 번 자동으로 인증이 성공하여 승인되거나 사용자가 직접 승인한 이후에는 **링크 클릭 시 바로 앱이 실행**됩니다. 만약 기기에 여러 앱이 동일 도메인에 대한 App Link를 선언했거나 인증이 안 된 경우, 사용자에게 어떤 앱으로 열지 물어볼 수 있습니다. **사용자가 "항상 이 앱으로 열기"를 선택**하면 이후로는 해당 도메인의 링크는 곧바로 그 앱으로 연결됩니다.

Android에서 제공하는 표준 방식이므로 보안과 사용자 경험이 뛰어나고 아래와 같은 장점을 가집니다.

1. **원활한 UX**
   - 웹 링크를 통한 앱 열기가 자연스럽게 이뤄져 **중간 선택창 없이 곧바로 연결**됩니다.
   - 이는 Android 시스템이 도메인 신뢰를 바탕으로 동작하기에 가능하며, 사용자는 **앱 설치 유무에 상관없이 같은 URL을 사용**할 수 있어 편리합니다.
2. **보안 및 독점성**
   - 인증된 도메인만 허용되므로 **다른 앱이 임의로 가로채는 것을 방지**합니다.
   - 예를 들어 우리 앱이 `example.com`에 대한 인증을 받아두면, 다른 앱이 `example.com` 링크를 여는 인텐트를 가져도 시스템에서 허용하지 않습니다.
   - 즉, **허가된 앱만 해당 도메인 링크를 열 수 있고**, 그렇지 않은 앱은 열 수 없습니다.
3. **원활한 fallback**
   - 만약 사용자가 앱을 설치하지 않았다면, 해당 **웹사이트가 자동으로 열리기 때문에** 자연스러운 사용자 경험을 이어갈 수 있습니다.
   - 사용자는 웹에서 계속 내용을 확인하거나, 필요한 경우 그 웹페이지에서 다운로드 유도를 할 수 있습니다.
4. **앱 설치 유도**
   - App Link 그 자체로는 스토어 이동을 포함하지 않지만, **Google 검색 결과나 일부 상황에서 앱 미설치 시 Play스토어로 유도되는 기능**이 Play 서비스와 통합되어 있습니다.
   - ex. 검색 결과 클릭 시 "앱 열기 / 설치" 배너 제공 등

앱 링크 (App Link)는 제대로 동작시키려면 서버와 앱 모두 설정이 필요하므로 **구현 과정이 다소 복잡**합니다. **인증서 SHA 값 추출, 파일 호스팅, 매니페스트 수정, 앱 배포** 등을 거쳐야 합니다.
Android OS 버전 6.0 (Marshmallow, API 23)부터 사용이 가능하고, 그 이하 버전에서는 동작하지 않습니다. 또한 Android 12부터는 **일반 http 인텐트도 인증된 앱만 열리도록 보안이 강화** 되었습니다. 구버전 호환을 위해서는 URI 스킴 등의 병행 지원이 필요할 수 있습니다.

:::warning 유의사항
[**유니버셜 링크** (Universal Link)](./universal-link)와 마찬가지로, 앱이 없으면 웹으로 이동하므로 **동일한 콘텐츠를 제공하는 모바일 웹페이지**가 있는 것이 이상적입니다. 없는 경우 사용자가 빈 페이지를 보게 되므로, 차라리 대신 스토어로 보내는 방식을 고려해야 합니다.
:::

---

## 앱 링크 설정하기 {#set-up-app-link}

nachocode를 통해 빌드한 Android 앱에서 앱 링크 (App Link)를 사용하려면, **웹 도메인 소유자**로서 몇 가지 설정을 직접 해주어야 합니다. nachocode 플랫폼은 앱 링크 (App Link) 동작을 위한 **앱 측 설정을 지원**하지만, **웹사이트 측 설정은 사용자가 직접 관리**해야 합니다.

아래 단계를 순서대로 진행해주세요.

### 1. 도메인 준비 및 인증 {#domain-preparation}

Android의 앱 링크 (App Link)에 사용할 HTTPS를 지원하는 본인 소유의 도메인이 필요합니다.  
이 도메인에 대한 소유권을 Android에 증명하기 위해 `assetlinks.json` 파일을 배포할 수 있어야 합니다.

:::warning 중요 사항
해당 도메인에 연결된 자신의 웹사이트 서버에 `.well-known` 경로를 생성하여 파일 업로드가 가능해야하며, `/assetlinks.json` 경로로 해당 파일을 서빙할 수 있어야합니다.
:::

---

### 2. 앱 서명 키 확인 {#check-sha256-fingerprints}

#### 1. [nachocode 대시보드](https://nachocode.io/?utm_source=docs&utm_medium=documentation&utm_campaign=devguide)의 [ **앱 설정** > **개발자 설정** > **안드로이드 네이티브 설정** ]에서 [SHA-256 디지털 지문](https://developers.google.com/android/guides/client-auth?hl=ko) 확인 {#check-sha256-fingerprints-step-1}

![nachocode_developer_android_sha](/img/docs/android/nachcoode_developer_android_sha.png)
:::info
지문키를 확인하기 위해서는 안드로이드 빌드가 선행되어야 합니다.
:::

#### 2. 빌드된 aab 파일을 [Google Play Console](https://play.google.com/console)에 업로드 후 [ 테스트 및 출시 > 설정 > 앱 서명 ]에서 앱 서명키 인증서의 [ SHA-256 인증서 지문 ]을 확인 {#check-sha256-fingerprints-step-2}

![google_console_fingerprint](/img/docs/google/google_console_fingerprint.png)

nachocode에서는 앱 출시에 **Google Play에서 생성한 앱 서명 키를 사용**합니다.

앱에 [**Play 앱 서명**](https://support.google.com/googleplay/android-developer/answer/9842756)을 사용 중인 경우 로컬에서 생성된 인증서 지문은 일반적으로 사용자 기기의 인증서 지문과 일치하지 않습니다.  
[**Play Console**](https://play.google.com/console) 개발자 계정의 아래 탭에서 앱에 Play 앱 서명을 사용하고 있는지 확인할 수 있습니다.

**[ 테스트 및 출시 (Release) > 설정 (Setup) > 앱 서명 (App signing) ]**

사용하고 있다면 같은 페이지에서 앱에 적합한 디지털 애셋 링크 JSON 스니펫도 확인할 수 있습니다.

:::warning 주의
운영 환경에서 앱 링크를 사용하기 위한 필수 작업이므로 `assetlinks.json` 배포 전 꼭 확인해주세요.
:::

---

### 3. 웹 서버에 Asset Links 파일 배포 {#publish-asset-links}

Android의 앱 링크 (App Link)를 구현하려면, 자신의 웹사이트 서버에서 **Asset Links** 파일을 제공해야 합니다. 이 파일의 이름은 **assetlinks.json**이고, `.well-known/assetlinks.json` **경로에 HTTPS로 호스팅되어 제공**되어야 합니다. **Asset Links** 파일은 **도메인 소유 권한**과 **해당 도메인과 앱이 상호 인증되었음**을 Android에 증명합니다.

`assetlinks.json` 파일에는 웹 도메인과 연결할 Android 앱의 정보가 담기며 파일의 형식은 JSON 배열입니다. 연결하려는 Android 앱의 **패키지명**과 **서명 인증서 SHA256 지문**을 파일에 정확히 포함시켜야 합니다.

nachocode에서 만들어진 앱의 패키지명은 일반적으로 `com.nachocode.서비스명`이며 앱을 서명하는 키의 지문은 [nachocode 대시보드](https://nachocode.io/?utm_source=docs&utm_medium=documentation&utm_campaign=devguide)에서 제공되고 있습니다.

:::info 참고
만약 사용자의 자체 서명으로 앱을 출시한 경우, Play 스토어 콘솔이나 `keytool`을 통해 서명을 추출해야 합니다.
:::

#### assetlinks.json 파일 예시 {#asset-links-example}

`assetlinks.json`은 아래와 같이 구성됩니다.

```json
[
  {
    "relation": ["delegate_permission/common.handle_all_urls"],
    "target": {
      "namespace": "android_app",
      "package_name": "com.nachocode.example",
      "sha256_cert_fingerprints": [
        "AB:CD:EF:12:34:56:78:90:AB:CD:EF:12:34:56:78:90:AB:CD:EF:12:34:56:78:90:AB:CD:EF:12:34:56:78:90"
      ]
    }
  }
]
```

- `relation`
  - 앱과 도메인의 관계를 지정합니다.
  - 보통 `common.handle_all_urls`를 사용합니다.
- `package_name`
  - 앱의 Android 패키지 이름입니다.
- `sha256_cert_fingerprints`
  - 앱의 서명 키에 대한 SHA-256 해시 값입니다.
  - 앱 서명 인증서 지문은 `keytool` 등의 도구로 추출할 수 있습니다.
  - nachocode 빌드 후 제공되는 인증서 지문을 사용하면 됩니다.

:::warning 주의
`assetlinks.json` 파일은 반드시 **HTTPS로 제공**되어야 하며, **Content-Type: application/json** 헤더와 함께 제공되는지 확인해야 합니다. 파일을 업로드한 후, `https://<내도메인>/.well-known/assetlinks.json` 주소로 접근하여 내용이 노출되는지 테스트해야합니다.
:::

#### assetlinks.json 포맷 예시 {#asset-links-format}

- **단일 앱 연결:** 한 도메인을 하나의 Android 앱에 연결하는 기본 예시는 위 JSON과 같습니다.
- **다중 앱 연결:** 하나의 도메인을 여러 앱과 연결해야 하는 경우 assetlinks.json 배열에 여러 객체를 넣으면 됩니다. 각 객체마다 다른 앱의 `package_name`과 `sha256_cert_fingerprints`를 나열하면 됩니다.

`assetlinks.json`의 양식은 구글 플레이 콘솔에서 확인 가능합니다.

![google-play-console-digital-asset-link](/img/docs/deep-link/google_play_console_digital_asset_link_json.webp)

:::info 구글 공식 문서
➡️ [Google Digital Asset Links](https://developers.google.com/digital-asset-links/v1/getting-started)
:::

---

### 4. nachocode 대시보드 설정 {#set-nachocode-dashboard}

:::warning 공지
앱 링크 설정 기능은 아직 대시보드에서 제공되고 있지 않습니다.  
현재는 수동 설정이 필요하오니 지금 사용을 희망하신다면 **nachocode 지원팀** [**support@nachocode.io**](mailto:support@nachocode.io)으로 요청 바랍니다.  
:::

`.well-known/assetlinks.json` 파일이 준비가 되었다면 Android 앱이 해당 도메인에 대한 앱 링크를 인식하도록 **앱 설정에도 도메인 정보를 추가**해야 합니다.

nachocode로 빌드된 Android 앱의 경우, nachocode 측에서 `AndroidManifest.xml` 설정에 도메인의 특정 URL 패턴을 비롯한 설정을 포함시켜주어야 유효한 앱 링크가 완성됩니다. 그러므로 `assetlinks.json` 파일을 준비한 후 [nachocode 지원팀](mailto:support@nachocode.io)에 **해당 도메인과 앱 정보를 전달**하여 앱에 알맞은 설정을 할 수 있도록 요청 바랍니다.

도메인 추가 및 최초 설정이 완료된 후, 앱을 다시 빌드 시 `AndroidManifest.xml`에 **앱 링크 관련 설정을 자동 반영**합니다.

---

### 5. 앱 링크 적용 확인 {#check-app-link-works}

설정을 완료했다면 아래 순서로 테스트하세요.

1. Android 기기에 앱을 설치합니다.
2. Chrome 브라우저에서 `https://<도메인>/<경로>`를 클릭합니다.
3. 앱이 설치되어 있다면 바로 앱이 실행되고, 앱이 없다면 브라우저에서 웹이 열리는지 확인합니다.
4. 삼성 인터넷, 네이버 앱 등 다른 브라우저에서도 테스트해봅니다.

---

## 앱 링크 활용하기 {#app-link-usage}

### 앱 링크 사용 예시 {#app-link-usage-example}

웹 서버와 앱에 모든 설정이 완료되면, **사용자는 해당 도메인의 URL을 클릭하는 것만으로 앱을 바로 열 수 있게** 됩니다.

예를 들어 내 도메인이 `nachocode.link`이고 앱 링크가 설정되어 있다면, Android 기기에서 [**https://nachocode.link**](https://nachocode.link) 링크를 클릭할 때 곧바로 내 앱이 실행하게 됩니다.

최초 실행 시에는 Android 시스템이 "이 링크를 열 때 사용할 앱"을 묻는 대화창을 표시할 수 있으며, 사용자는 설치된 앱이나 브라우저 중 선택할 수 있습니다.

만약 사용자의 기기에 앱이 설치되어 있지 않다면, 링크는 **일반 웹 페이지로서 동작**하게 됩니다. 즉 `nachocode.link`의 해당 경로에 대한 웹 콘텐츠가 있다면 fallback으로 그것이 표시됩니다. 이런 경우 웹 페이지에서 앱 설치를 유도하는 배너를 띄우거나 스토어로 이동시키는 안내를 제공하면 좋습니다.

---

### 앱 링크로 내 앱 열기 (딥링크 실행) {#open-my-app}

```html
<a href="https://{host}/{path}">앱에서 보기</a>
```

:::info 링크를 클릭하면

- 앱이 설치된 경우 → 앱이 실행되고 해당 경로를 앱에서 처리합니다.
- 앱이 미설치된 경우 → 웹페이지를 브라우저에서 엽니다.

:::

앱 링크를 이용하면 하나의 HTTPS URL로 앱과 웹을 모두 지원할 수 있습니다.  
앱 내에서 특정 화면으로 직접 이동시키고자 한다면, nachocode 딥링크와 함께 `targeturl` 파라미터를 사용할 수 있습니다.

---

### 앱 링크로 특정 페이지 열기 {#open-my-app-specific}

```html
<a href="https://{host}/{path}?targeturl={인코딩된 URL}"> 앱에서 보기 </a>
```

:::info 링크를 클릭하면

1. 앱이 설치된 경우 → 앱 실행 후 `targeturl` 페이지 열기
2. 앱이 미설치된 경우 → 브라우저에서 해당 주소의 웹페이지 열기

:::

nachocode 딥링크에서는 `targeturl` 쿼리 파라미터를 활용하여 앱을 열 때 곧바로 특정 페이지를 로드하도록 지정 할 수 있습니다.  
앱 링크가 적용된 도메인 혹은 경로가 실제로 앱에서 열어야 할 url과 다르다면 `targeturl`을 사용해주세요.

:::warning **주의**
`targeturl`에 사용하는 URL 값은 반드시 **URI 인코딩**된 형태로 넣어야 합니다.

예를 들어 `https://developer.nachocode.io/docs/guide/deep-link/app-link`를 타겟 URL로 지정하려면 `https%3A%2F%2Fdeveloper.nachocode.io%2Fdocs%2Fguide%2Fdeep-link%2Fapp-link` 처럼 인코딩해야 합니다.
:::

---

### 앱 미설치 시 스토어로 유도하기 {#uninstalled-ux}

앱 링크 (App Link)의 장점은 **같은 URL로 앱과 웹을 모두 제공**할 수 있다는 점이지만, 상황에 따라 앱 미설치 사용자를 바로 **앱 설치 페이지**로 보내고 싶을 수도 있습니다. 기본적으로 앱 링크는 앱 미설치 시 웹사이트가 열린 뒤 별도 동작은 하지 않으므로, 이를 보완하려면 웹 페이지 단에서 처리해야 합니다. 방법은 두 가지 정도가 있습니다.

1. **웹 페이지 리디렉션**  
   해당 도메인의 웹 서버에서 사용자 Agent 등을 감지해 **모바일 브라우저로 접근한 경우 앱 설치 페이지로 리디렉션**하도록 구성할 수 있습니다. 예를 들어 `https://nachocode.link`에 접속했는데 앱 미설치 상태로 웹이 열렸다면, 페이지 로드 시 `window.location`을 앱스토어 또는 플레이스토어 URL로 변경하는 스크립트를 넣을 수 있습니다. 단, 이렇게 하면 웹 콘텐츠를 볼 수 없으므로 사용자 경험을 고려해야 합니다.

2. **배너/안내 표시**  
   웹 페이지에 **"앱에서 더 좋은 경험 보기 - 설치하기"** 등의 배너나 팝업을 띄워 사용자가 설치를 선택하도록 유도할 수 있습니다. 사용자가 수동으로 설치하도록 유도하고, 설치 후 다시 링크를 누르면 자연스럽게 앱으로 연결됩니다.

두 방법 모두 **웹 개발 측면의 구현**이 필요합니다. nachocode 플랫폼에서 자동으로 미설치 유저를 스토어로 보내주지는 않으므로, 앱 링크용 웹 페이지를 제작할 때 설치 유도 전략을 함께 고려해보시면 좋을 것 같습니다.

---

:::tip 기술 지원
nachocode 팀은 여러분의 성공적인 프로젝트 구현을 위해 항상 도움을 준비하고 있습니다. **앱 링크 설정에 어려움**이 있거나 **추가적인 기술적인 질문이나 피드백**이 있다면 언제든지 [**support@nachocode.io**](mailto:support@nachocode.io)에 **이메일**을 보내주세요.
:::
