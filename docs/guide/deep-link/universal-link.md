---
sidebar_label: 유니버셜 링크
pagination_label: 유니버셜 링크 (Universal Link)
description: nachocode에서의 Apple iOS의 표준 딥링크 방식인 유니버셜 링크 (Universal Link)를 설정하는 방법과 활용법을 안내합니다.
keywords:
  [
    딥링크,
    딥 링크,
    딥 링크 구현하기,
    유니버셜 링크,
    유니버셜링크,
    유니버셜 링크 설정하기,
    유니버셜 링크 구현하기,
    Deep Link,
    Deep-Link,
    Universal Link,
    UniversalLink,
    Universal-Link,
    App Links,
    iOS,
  ]
---

# 유니버셜 링크 (Universal Link) {#universal-link}

import { BadgeWithVersion } from '@site/src/components/svg/badge-with-version';

> 🚀 **추가된 버전:** <BadgeWithVersion type="iOS" version="v1.5.1" link="/docs/releases/v1/app-source/ios/release-v-1-5-1" />  
> 🔔 **최신화 일자:** 2025-08-06

![iOS Only](https://img.shields.io/badge/iOS-Only-gray?logo=apple)

## 유니버설 링크 이해하기 {#understand-universal-link}

**유니버설 링크** (**Universal Link**)는 Apple에서 도입한 **표준 딥링크 방식**으로, **iOS에서 정규 웹 URL을 이용해 앱을 여는 기술**입니다. **하나의 HTTPS 링크로 앱과 웹을 모두 연결**할 수 있어 사용성, 보안성 면에서 우수합니다.

겉보기에는 평범한 웹 URL이지만, 조건을 만족한다면 사용자가 특정 도메인의 HTTPS 링크를 열었을 때 **iPhone, iPad에서 Safari 브라우저 대신 자동으로 대응되는 앱이 실행**됩니다. 예를 들어 [**nachocode developer**](https://apps.apple.com/us/app/nachocode-developer/id6514317160) 앱과 [**https://nachocode.link**](https://nachocode.link) URL을 유니버셜 링크로 연동해두면, iPhone의 Safari 등에서 해당 링크를 클릭했을 때 **동일 도메인을 지원하는 앱**([**nachocode developer**](https://apps.apple.com/us/app/nachocode-developer/id6514317160))이 **설치되어 있으면 앱이 곧바로 실행되고 해당 URL을 앱 내에서 처리**합니다. 설치되지 않은 경우에는 **동일한 URL의 웹페이지**([**https://nachocode.link**](https://nachocode.link))**를 그대로 브라우저에서 열어 웹 콘텐츠를 표시**하는 형태입니다.

유니버셜 링크는 Android의 공식 딥링크 방식인 [**앱 링크** (App Link)](./app-link)와 유사하며, iOS의 표준 딥링크 방식인 만큼 **좋은 사용자 경험을 제공**합니다. 사용자는 별도의 스킴 링크를 인지하지 않아도 **익숙한 웹 URL을 클릭**하는 것만으로 앱을 열 수 있고, 앱이 설치되어 있지 않으면 **동일한 URL이 브라우저에서 열려 여전히 콘텐츠를 확인**할 수 있습니다. 또한 iOS에서 유니버셜 링크가 **한 번 승인**되면 이후로는 사용자의 추가 동의나 선택 창 없이 곧바로 앱이 열리기 때문에 매끄러운 사용자 경험을 제공합니다.

:::info
nachocode 앱소스 <BadgeWithVersion type="iOS" version="v1.5.1" link="/docs/releases/v1/app-source/ios/release-v-1-5-1" />부터 iOS 유니버설 링크를 지원합니다.
:::

---

### 유니버셜 링크 동작 흐름 {#how-universal-link-works}

유니버셜 링크 (Universal Link)는 **도메인 소유 증명**과 **OS 설정**을 통해 동작합니다. iOS에서는 **Associated Domains**(연관 도메인)라는 기능을 이용하여, "**특정 웹 도메인의 링크가 이 앱을 열 수 있다**"는 정보를 사전에 등록합니다.

1. 앱 개발자는 Apple 개발자 계정의 설정과 앱의 번들에 **연관 도메인 Entitlement**를 추가하여, 예를 들어 `applinks:example.com` 형태로 앱과 도메인을 연결합니다.
2. 또한 해당 웹사이트 (`example.com`)의 서버에는 **Apple 앱 사이트 연관 파일**(Apple App Site Association 파일)을 호스팅합니다. 이 JSON 파일에는 어떤 앱(들의 Bundle ID)이 이 도메인의 링크를 열 수 있는지가 명시됩니다. (보통 `.well-known/apple-app-site-association` 경로에 파일을 배포)
3. 사용자가 iOS에서 해당 도메인의 URL을 클릭하면, OS가 그 도메인에 대한 앱-사이트 연관 정보를 미리 캐시/조회하여, 연결된 앱이 있는지 확인합니다. 연관된 앱(Bundle ID)이 설치되어 있다면, **곧바로 그 앱을 실행**하고 URL 정보를 앱에 전달합니다. 설치되어 있지 않으면 원래대로 **Safari에서 웹페이지를 표시**합니다.

---

### 유니버셜 링크 구현 요건 {#requirements}

iOS 유니버셜 링크 (Universal Link)를 적용하려면 **도메인 소유권 인증**, **앱 설정** 그리고 **Apple 개발자 계정 설정** 세 가지가 필요합니다.

1. **웹 도메인에 연계 파일 제공**
   - 본인 소유의 **자체 도메인**이 있어야합니다. 이 도메인에서 SSL이 활성화된 **https 프로토콜**로 서비스를 제공해야합니다.
   - 해당 도메인 서버에 정확한 내용의 **`apple-app-site-association`** JSON 파일을 호스팅해야 합니다.
   - 이 파일에는 앱의 **Team ID와 App ID(Bundle ID)가 포함된 앱 식별자**와 **허용 경로 패턴 정보**가 포함됩니다.
   - iOS는 링크를 클릭할 때 이 파일을 HTTPS로 조회하여 **앱과 도메인이 서로 연동 허용된 관계**인지 검증합니다.
2. **앱에 Associated Domains 설정**
   - 앱의 코드 서명에 **Associated Domains** 권한(entitlement)을 추가하고, 거기에 `applinks:your.domain.com` 형식으로 해당 도메인을 명시해야 합니다.
   - iOS는 앱 설치 시 이 값을 확인하여, 추후 해당 도메인의 링크를 클릭하면 이 앱으로 열어줄 수 있게 연결짓습니다.
   - nachocode 플랫폼에서는 **해당 앱 설정을 시스템 상에서 자동으로 앱에 적용**합니다.
3. **Apple 개발자 계정 설정 및 프로비저닝**
   - Apple 개발자 계정에서 해당 앱의 App ID에 **Associated Domains** 기능이 활성화되어 있어야 합니다.
   - nachocode를 통해 빌드한 앱이라도, 사용자 측의 **Apple 개발자 계정 설정 및 프로비저닝**이 필요합니다.

---

### 유니버셜 링크 특징 {#universal-link-features}

유니버셜 링크 (Universal Link)는 **iOS 9 이상**에서 동작하며, iPhone/iPad의 Safari, Mail, Messages 등 **Apple 기본 앱 및 WebView 등**에서 동작합니다. 사용자가 링크를 클릭하면 **Safari를 거치지 않고 바로 앱이 실행**되기 때문에, 이전의 [**URI 스킴** (URI Scheme)](./uri-scheme) 방식처럼 별도 팝업이나 확인 없이도 자연스러운 전환이 가능합니다.

iOS에서는 한 번 유니버설 링크가 앱으로 연결되면 **추후에도 계속 앱으로 열리는 것이 기본 동작**이므로, 사용자가 특별히 링크를 길게 눌러 "**웹으로 열기**"를 선택하지 않는 한 **사용자에게 “앱으로 열까요?” 같은 확인 팝업을 표시하지 않고** 편리하게 앱으로 연결됩니다.
사용자가 이전에 해당 도메인을 웹으로 열도록 설정했을 때만 예외적으로 웹이 열릴 수 있습니다.

Apple이 제공하는 표준 방식이므로 **보안과 사용자 경험이 뛰어나고** 아래와 같은 장점을 가집니다.

1. **고유성과 안전성**
   - Universal Link는 소유한 도메인을 기반으로 하므로 **다른 앱이 가로챌 수 없습니다**.
   - 또한 도메인 소유자만 설정 파일을 제공할 수 있어 **앱-도메인 연결이 안전**합니다.
2. **원앱-원도메인 원칙**
   - 한 도메인을 여러 앱에 매핑하거나 한 앱에 여러 도메인을 연결하는 것도 가능하지만, 각 연결은 명시적으로 인증되어야 합니다.
   - 즉, **허가된 앱만 해당 도메인 링크를 열 수 있고**, 그렇지 않은 앱은 열 수 없습니다.
3. **원활한 fallback**
   - 만약 사용자가 앱을 설치하지 않았다면, 해당 **웹사이트가 자동으로 열리기 때문에** 자연스러운 사용자 경험을 이어갈 수 있습니다.
   - 사용자는 웹에서 계속 내용을 확인하거나, 필요한 경우 그 웹페이지에서 **다운로드 유도**를 할 수 있습니다.
4. **단일 링크 사용**
   - 하나의 URL로 웹과 앱을 모두 처리할 수 있어, 마케팅/운영 측면에서 **URL 관리가 단순**해집니다.

유니버셜 링크는 사용자가 **링크를 주소창에 직접 입력**하거나 JavaScript 등을 통해 **리다이렉트로 해당 링크를 열 경우**에는 동작하지 않습니다. **오직 사용자가 링크를 터치하여 이동**하는 시나리오에서만 연동됩니다. 만약 설정이 잘못되었거나 조건이 안 맞으면, 링크가 앱이 아닌 웹으로만 열리므로 설정을 꼼꼼히 검증해야 합니다.

:::warning 주의사항
유니버셜 링크를 적용할 때는 **HTTPS 보안**이 필수이므로 HTTP나 IP주소 링크 등은 동작하지 않습니다.  
또한 Apple 개발자 계정 팀 ID와 앱 ID 구성 등 정확한 설정이 필요합니다.

Universal Link가 동작하면 iOS에서는 **앱을 바로 실행**하기 때문에, 만약 웹 콘텐츠도 제공해야 하는 경우라면 **"이 페이지를 앱에서 여시겠습니까?" 같은 중간 안내**를 구현할 수 없으므로 사용자가 원래 웹페이지를 보려고 한 것인지, 앱으로 바로 이동해도 되는지에 대한 고려가 필요합니다.

다만 사용자가 한 번 Universal Link로 앱을 연 이후에는 **Safari의 주소창에 해당 도메인 이름 옆에 작은 앱 아이콘**이 표시되어, 이 도메인의 링크가 앱으로 연결된다는 것을 인지시켜줍니다.
:::

---

## 유니버셜 링크 설정하기 {#set-up-universal-link}

nachocode를 통해 빌드한 iOS 앱에서 유니버셜 링크 (Universal Link)를 사용하려면, **웹 도메인 소유자**로서 몇 가지 설정을 직접 해주어야 합니다. nachocode 플랫폼은 유니버셜 링크 동작을 위한 **앱 측 설정을 지원**하지만, **웹사이트 측 설정은 사용자가 직접 관리**해야 합니다.

### 1. 도메인 준비 및 인증 {#domain-preparation}

유니버셜 링크 (Universal Link)에 사용할 자신의 웹 도메인이 있어야 합니다. 해당 도메인에서 **SSL 인증서**가 설치되어 **https로 접근 가능**해야 하며, 도메인에 대한 관리 권한이 필요합니다.

:::warning 중요 사항
해당 도메인에 연결된 자신의 웹사이트 서버에 `.well-known` 경로를 생성하여 파일 업로드가 가능해야하며, `/apple-app-site-association` 경로로 해당 파일을 서빙할 수 있어야합니다.
:::

---

### 2. 웹 서버에 AASA 파일 배포 {#publish-aasa}

iOS의 유니버설 링크 (Universal Link)를 쓰려면, 자신의 웹사이트 서버에서 **Apple 앱 사이트 연관 파일**을 제공해야 합니다. 이 파일의 이름은 **apple-app-site-association** (**AASA**)이고, `.well-known/apple-app-site-association` 경로에 HTTPS로 호스팅되어 제공되어야 합니다. AASA 파일에는 앱 ID와 경로 규칙같은 연결할 iOS 앱의 정보가 담깁니다.

iOS 앱의 **앱 식별자**(Apple Team ID와 Bundle ID 조합)를 이 파일에 포함시켜야 합니다. nachocode에서 만들어진 앱의 번들 ID는 일반적으로 `com.nachocode.서비스명` 형식이며, Team ID는 사용자의 Apple 개발자 계정에 따라 다릅니다.

:::warning 주의사항
AASA 파일은 **JSON 포맷이지만 확장자가 없고** `Content-Type`은 반드시 `application/json`으로 보내야 합니다.  
이 파일은 반드시 **JSON 구조가 깨지지 않아야하고** **정확한 위치** (`./well-known/`)에 **호스팅** 되어야 합니다.
:::

:::tip AASA 공식 문서
➡️ [Apple Developer Documentation - **Supporting associated domains**](https://developer.apple.com/documentation/xcode/supporting-associated-domains)
:::

#### apple-app-site-association 파일 예시 {#aasa-example}

```json
{
  "applinks": {
    "apps": [],
    "details": [
      {
        "appID": "ABCDE12345.com.nachocode.myapp",
        "paths": ["/path1/*", "/path2/detail/*"]
      }
    ]
  }
}
```

- `apps`
  - 배열은 일반적으로 비워둡니다 (과거 iOS12 이하 호환을 위해 빈 배열 유지).
- `details`
  - 내부에 여러 개의 object를 넣어 **여러 앱의 appID**를 나열할 수도 있습니다.
  - 한 도메인을 여러 iOS 앱과 연결 가능합니다.
- `appID`
  - **개발자 팀 ID + 번들ID** 조합으로, Apple에서 앱을 식별하는 문자열입니다.
  - `ABCDE12345`는 Apple 개발자 계정의 팀 ID 예시이고, `com.nachocode.myapp`은 앱의 Bundle ID입니다.
  - **개발자 팀 ID**는 [**Apple Developer**](https://developer.apple.com/) - 멤버십 세부 사항에서 확인 가능합니다.
  - 앱의 **번들 ID**는 [**App Store Connect**](https://appstoreconnect.apple.com/) - 앱 정보에서 확인 가능합니다.
    ![appstore-connect-bundle-id](/img/docs/apple/appstore_connect_bundle_id.png)
- `paths`: 유니버설 링크로 연결할 경로 패턴 목록입니다.
  - 위 예시는 `/path1/` 이하 모든 경로와 `/path2/detail/` 이하 모든 경로를 유니버설 링크로 허용한다는 뜻입니다.
  - `"*"` 와 `"?*"` 와일드카드로 세부 조정도 가능합니다.
  - `paths`에 `*`를 넣으면 모든 경로를 의미하며, `"/*"`는 루트 포함 모든 경로, `"/path*"`는 path로 시작하는 모든 경로 등을 표현합니다.
  - 지정한 경로만 앱으로 열리고, 그 외 경로는 앱으로 열리지 않습니다.

---

### 3. Developer Apple Associated Domains 설정 {#set-associated-domains}

AASA 파일이 정상적으로 서빙되는지 확인이 되었다면 아래 설정을 진행해야 합니다.

![developer_apple_account_identifiers](/img/docs/apple/developer_apple_account_identifiers.png)

[**Apple Developer**](https://developer.apple.com/account/resources/identifiers/list)에서 기존 App **Identifier**의 Capabilities에 [ **Associated Domains** ]를 추가해야 합니다.

![developer_apple_identifiers_bundle_id_associated_domains](/img/docs/deep-link/developer_apple_identifiers_bundle_id_associated_domains.png)

---

### 4. nachocode 대시보드 설정 {#set-nachocode-dashboard}

:::warning 공지
유니버셜 링크 설정 기능은 아직 대시보드에서 제공되고 있지 않습니다.  
현재는 수동 설정이 필요하오니 지금 사용을 희망하신다면 **nachocode 지원팀** [**support@nachocode.io**](mailto:support@nachocode.io)으로 요청 바랍니다.  
:::

AASA 파일은 **HTTPS로 호스팅**되어야 하며, `https://<내도메인>/.well-known/apple-app-site-association`으로 반드시 접근 가능해야 합니다.

nachocode로 빌드된 iOS 앱의 경우, nachocode 측에서 **앱 서명 시 연관 도메인(Associated Domains)** 설정에 도메인을 포함해야 유효한 유니버설 링크가 완성됩니다. 그러므로 AASA 파일을 준비한 후 [nachocode 지원팀](mailto:support@nachocode.io)에 **해당 도메인과 앱 정보를 전달**하여 앱에 연관도메인 설정을 할 수 있도록 요청 바랍니다.

도메인 추가 및 설정이 완료된 후 **앱을 재빌드**해야 변경 사항이 적용됩니다. 빌드된 앱의 `.entitlements`에 해당 도메인이 포함되어 있게 됩니다.

---

### 5. associated 적용 확인 {#check-associated}

:::tip 참고
`/.well-known/apple-app-site-association` 설정 이후 즉각적으로 반영되지 않습니다.  
앱에서 캐싱되기 때문에 자동으로 업데이트 되지만, 시간이 다소 소요됩니다.

**_앱을 재 설치 하고 기다려주세요._**
:::

설정이 완료되면 Safari에서 접속했을 때, **앱 열기 배너가 자동으로 노출**되는 것을 확인할 수 있습니다. (해당 기능은 **Safari에서 지원**하는 기능입니다.)

![universal-link-associated-check](/img/docs/deep-link/universal_link_associated_check.png)

:::info 참고
유니버셜 링크를 제대로 설정했고 앱이 설치되어 있음에도 웹으로 이동한다면, 딥링크가 동작하지 않은 경우입니다.
:::

---

## 유니버셜 링크 활용하기 {#universal-link-usage}

### 유니버셜 링크로 내 앱 열기 (딥링크 실행) {#open-my-app}

```html
<button onclick="location.href ='https://{host}/{path}'">앱에서 보기</button>
```

:::info 버튼을 클릭하면

1. 앱이 설치된 경우 → 앱 실행 후 해당 주소의 페이지 열기
2. 앱이 미설치된 경우 → 브라우저에서 해당 주소의 웹페이지 열기

:::

쿼리파라미터에 `targeturl`이 없으면 앱을 열었을 때 진입한 유니버셜 링크의 주소를 열게됩니다.

예시로 `https://www.myapp.com/item1234` 로 유니버셜링크를 통해 앱을 열면 앱이 열린 후 앱 내에서 `https://www.myapp.com/item1234` 링크를 로드하게됩니다.

---

### 유니버셜 링크로 특정 페이지 열기 {#open-my-app-specific}

```html
<button
  onclick="location.href ='https://{host}/{path}?targeturl={인코딩된 URL}'"
>
  앱에서 보기
</button>
```

:::info 버튼을 클릭하면

1. 앱이 설치된 경우 → 앱 실행 후 `targeturl` 페이지 열기
2. 앱이 미설치된 경우 → 브라우저에서 해당 주소의 웹페이지 열기

:::

nachocode 딥링크에서는 `targeturl` 파라미터를 활용하여 앱을 열 때 곧바로 특정 페이지를 로드하도록 지정합니다. 쿼리 파라미터에 `targeturl`을 붙여주면 앱을 열었을 때 로드 할 페이지를 설정할 수 있습니다.
유니버셜 링크가 적용된 도메인 혹은 경로가 실제로 앱에서 열어야 할 url과 다르다면 `targeturl`을 사용해주세요.

:::warning **주의**
`targeturl`에 사용하는 URL 값은 반드시 **URI 인코딩**된 형태로 넣어야 합니다. 예를 들어 `https://developer.nachocode.io/docs/guide/deep-link/universal-link`를 타겟 URL로 지정하려면 `https%3A%2F%2Fdeveloper.nachocode.io%2Fdocs%2Fguide%2Fdeep-link%2Funiversal-link` 처럼 인코딩해야 합니다.
:::

---

### 앱 미설치 시 처리 {#uninstalled-ux}

유니버설 링크 (Universal Link)도 [Android의 앱 링크](./app-link)와 마찬가지로, **앱이 설치되어 있지 않으면 브라우저에서 해당 URL의 웹 사이트가 열리게 됩니다.** 따라서 해당 도메인의 웹 페이지를 제공하고, 앱이 없는 사용자에게 **회원가입 유도 또는 앱 설치 안내**를 하는 것이 일반적입니다. iOS에서는 별도의 앱 미설치 감지 스크립트를 제공하지 않으므로, **웹 컨텐츠 자체를 적절히 구성**하는 것으로 대응합니다.

앱 마케팅 측면에서, 유니버설 링크를 사용할 때 **웹 페이지를 앱 설치 페이지로 리디렉션**하도록 설정하지 않는 것이 좋습니다. 왜냐하면 사용자가 앱이 없더라도 웹에서 콘텐츠를 볼 수 있게 한 것이 유니버설 링크의 이점인데, 이를 무시하고 곧바로 스토어로 보내면 오히려 사용자 경험이 떨어질 수 있기 때문입니다.

대신 **상황에 맞춰** 웹상에서 "**더 나은 경험을 위해 앱을 설치하세요**"라는 메시지와 함께 설치 링크를 제공하거나, 중요한 이벤트의 경우 이메일이나 메시지로 **앱 설치를 유도**하는 방식을 고려하면 좋습니다.

---

:::tip 기술 지원
nachocode 팀은 여러분의 성공적인 프로젝트 구현을 위해 항상 도움을 준비하고 있습니다. **유니버셜 링크 설정에 어려움**이 있거나 **추가적인 기술적인 질문이나 피드백**이 있다면 언제든지 [**support@nachocode.io**](mailto:support@nachocode.io)에 **이메일**을 보내주세요.
:::
