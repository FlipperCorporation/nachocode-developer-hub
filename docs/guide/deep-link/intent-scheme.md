---
sidebar_label: 인텐트 스킴
pagination_label: 인텐트 스킴 (Intent Scheme)
description: Android 플랫폼에서 제공하는 인텐트 스킴 (Intent Scheme)의 개념과 nachocode에서의 인텐트 스킴 활용법을 안내합니다.
keywords:
  [
    딥링크,
    딥 링크,
    딥 링크 구현하기,
    Intent 스킴,
    URI 스킴,
    URI 스킴 연동하기,
    앱스킴,
    앱 스킴,
    Scheme 링크,
    Deep-Link,
    Deep Link,
    Intent Scheme,
    App Scheme,
  ]
image: /img/docs/thumbnails/GUIDE/deep-link.svg
---

# 인텐트 스킴 (Intent Scheme) {#intent-scheme}

import { BadgeWithVersion } from '@site/src/components/svg/badge-with-version';
import { ThumbnailImage } from '@site/src/components/common/image/thumbnail-image';

<ThumbnailImage src='/img/docs/thumbnails/GUIDE/deep-link.svg'/>

> 🚀 **추가된 버전:** <BadgeWithVersion type="Android" version="v1.2.0" link="/docs/releases/v1/app-source/android/release-v-1-2-0" />  
> 🔔 **최신화 일자:** 2025-08-07

![Android Only](https://img.shields.io/badge/Android-Only-gray?logo=android)

## 인텐트 스킴 이해하기 {#understand}

**인텐트 스킴 딥링크**는 Android 플랫폼에서 제공하는 **특수한 URI 스킴**으로, **사용자가 클릭한 링크를 앱의 인텐트**(**Intent**)**로 연결해주는 방식**입니다. 일반적인 [**URI 스킴**](./uri-scheme)과 유사하지만, **Android만의 고유 문법**을 사용하여 **앱 미설치 상황에서의 처리 방법까지 URL에 포함할 수 있다는 장점**이 있습니다. 인텐트 스킴 딥링크를 활용 할 경우, 앱이 설치되어 있는 경우 해당 앱을 실행하고, 설치되어 있지 않다면 지정된 URL을 통해 브라우저로 이동할 수 있습니다.

### 인텐트 스킴 기본 구조 {#intent-scheme-basic}

```scheme
intent://<경로>#Intent;
    scheme=<스킴>;
    package=<패키지명>;
    S.browser_fallback_url=<대체 URL>;
    end;
```

| 파라미터                 | 설명                                          | 필수 여부 |
| ------------------------ | --------------------------------------------- | --------- |
| `scheme`                 | 앱에서 정의한 스킴 이름 (ex. `developer`)     | ✅        |
| `package`                | 앱의 패키지명 (ex. `com.nachocode.developer`) | ✅        |
| `S.browser_fallback_url` | 앱이 설치되어 있지 않을 경우 이동할 URL       | ❌        |

:::warning 주의사항

- `intent:` 스킴은 **Android 전용**입니다. iOS에서는 동작하지 않습니다.
- `S.browser_fallback_url`을 반드시 지정하지 않으면 앱이 설치되어 있지 않은 경우 오류가 발생할 수 있습니다.
- 일부 브라우저(특히 Chrome)에서는 Intent Scheme를 지원하지만, 특정 웹뷰 환경에서는 동작하지 않을 수 있습니다.

:::

---

### 인텐트 스킴 링크 예시 {#intent-scheme-example}

```scheme
intent://open#Intent;
    scheme=developer;
    package=com.nachocode.developer;
    S.browser_fallback_url=https%3A%2F%2Fplay.google.com%2Fstore%2Fapps%2Fdetails%3Fid%3Dcom.nachocode.developer;
    end;
```

위 예시 링크를 풀어서 설명하겠습니다.

- `intent://open`
  - 호출하려는 대상의 경로입니다. (ex. `/open`)
- `#Intent;`
  - 인텐트 스킴의 시작을 알리는 구분자 입니다.
- `scheme=developer;`
  - 호출에 사용할 URI 스킴 이름
  - 앱이 지원하는 커스텀 스킴을 명시합니다. (ex. `developer://`)
- `package=com.nachocode.developer;`
  - 열고자 하는 대상 앱의 **패키지 이름**(Application ID)을 명시합니다.
  - 이 패키지의 앱이 설치되어 있을 경우에만 인텐트를 처리합니다.
- `S.browser_fallback_url=...;`
  - 대상 앱이 설치되지 않았을 때 **대신 열 웹 URL**을 지정합니다.
  - `S.`로 시작하는 것은 인텐트에 **Extra** 데이터를 넣는 문법입니다.
  - `browser_fallback_url` 값으로 웹페이지 URL을 지정하면 앱 미설치 시 자동으로 해당 URL이 브라우저를 통해 열립니다.
- `end;`
  - 인텐트 스킴 표현의 끝을 알립니다.

#### 웹에서의 사용 예제 {#intent-scheme-web-example}

웹 페이지에서 인텐트 스킴을 `<a>` 태그로 직접 호출할 수 있습니다.

```html
<a
  href="intent://open#Intent;
  scheme=developer;
  package=com.nachocode.developer;
  S.browser_fallback_url=https%3A%2F%2Fplay.google.com%2Fstore%2Fapps%2Fdetails%3Fid%3Dcom.nachocode.developer;
  end;"
>
  앱에서 열기
</a>
```

앱이 설치되어 있으면 앱 실행, 설치되어 있지 않으면 `https://play.google.com/store/apps/details?id=com.nachocode.developer`로 이동합니다.

---

### 인텐트 스킴 동작 흐름 {#intent-scheme-flow}

인텐트 스킴 딥링크는 Chrome 등의 브라우저에서 하나의 링크로 **앱 실행과 웹 fallback**을 모두 처리할 수 있어 **모바일 웹 -> 앱 전환** 용도로 유용합니다.

사용자가 인텐트 스킴 링크 (ex. `intent://...`)를 클릭하면, **Chrome 브라우저**가 이를 해석하여 해당 인텐트를 처리할 앱을 찾습니다.

1. 지정된 `package` 이름의 앱이 기기에 설치되어 있다면, Android는 그 앱을 바로 실행하고 `scheme`에 명시된 URI 데이터를 전달합니다. 결과적으로 대상 앱의 특정 화면이 열리게 됩니다.
2. 앱이 설치되지 않은 경우, 인텐트 URL 내에 `browser_fallback_url`이 포함되어 있다면 Chrome은 자동으로 그 웹 주소로 이동합니다. (만약 fallback URL이 없으면 링크가 동작하지 않고 오류 화면이 나타날 수 있습니다.)

:::warning 주의
인텐트 스킴 딥링크는 **Android에서만 동작**하며, **표준 URL 형태가 아니기 때문에 iOS나 다른 환경에서는 인식되지 않습니다.**  
또한, `intent://` 링크는 **사용자의 직접 액션**(클릭)으로만 동작하며, 보안상 자동 리디렉션이나 임베디드 스크립트로 열릴 경우 차단되는 점을 유의해야 합니다.
:::

---

## 인텐트 스킴 설정하기 {#set-up-intent-scheme}

nachocode 앱에서 **인텐트 스킴 딥링크**를 활용하려면, 우선 [**URI 스킴 딥링크 설정**](./uri-scheme#set-up-nachocode-uri-scheme)이 선행되어야 합니다. 인텐트 스킴은 결국 특정 URI 스킴을 호출하는 형식이므로, 대상이 되는 앱에서 해당 스킴을 받아줄 수 있어야 합니다. [**URI 스킴 딥링크 가이드**](./uri-scheme#set-up-nachocode-uri-scheme)를 참고하여 커스텀 스킴을 설정했다면, 이제 인텐트 링크를 만들어 사용할 수 있습니다.

:::info 커스텀 URI 스킴 설정
➡️ [nachocode **URI 스킴 딥링크 가이드 바로가기**](./uri-scheme)
:::

1. **패키지 이름 확인**

   - nachocode 대시보드 **고급 앱 설정**에서 해당 앱의 **패키지 이름**(Android Package Name)을 확인합니다.
   - 인텐트 링크의 `package=` 부분에 이 값을 정확히 넣어야 합니다. _(ex. `com.nachocode.developer`)_

   ![nachocode-package-name](/img/docs/settings/nachocode_dashboard_advanced_settings_pacakge_name.png)

2. **인텐트 링크 구성**

   - 앱에서 열고자 하는 페이지 경로와 쿼리 정보를 포함해 인텐트 URL을 만듭니다.
   - `scheme=`에는 앞서 설정한 URI 스킴 이름을, `package=`에는 앱 패키지명을 넣습니다.
   - 또한 **fallback URL**로 사용할 웹 페이지 URL을 `S.browser_fallback_url`에 인코딩하여 추가합니다.

   ```html
   <a
     href="intent://open#Intent;
     scheme=developer;
     package=com.nachocode.developer;
     S.browser_fallback_url=https%3A%2F%2Fplay.google.com%2Fstore%2Fapps%2Fdetails%3Fid%3Dcom.nachocode.developer;
     end;"
   >
     앱에서 열기
   </a>
   ```

   - 위 예시는 `developer://open` 딥링크를 호출하며, 대상 앱(`com.nachocode.developer`)이 없으면 대신 `https://play.google.com/store/apps/details?id=com.nachocode.developer` 페이지를 브라우저에 열게 됩니다.
   - 이렇게 하면 **Android 사용자가 웹 페이지에서 해당 링크를 클릭했을 때** 앱이 설치되어 있으면 바로 앱으로 보고, 없으면 스토어의 앱 상세페이를 열어 설치를 유도할 수 있습니다.

3. **웹 페이지에 적용**

   - 생성한 인텐트 링크를 여러분의 **모바일 웹 페이지, 이메일, SMS 등**에 삽입합니다.
   - Android 기기에서 Chrome이나 대부분의 웹뷰 환경에서 이 링크를 클릭하면 자동으로 위에서 구성한 흐름에 따라 동작합니다.
   - 특히 **PWA나 모바일 웹과 네이티브 앱을 병행**하는 경우, 웹에 이런 링크를 심어 앱 전환을 유도할 수 있습니다.

4. **테스트**
   - 실제 기기에서 Android Chrome으로 해당 페이지를 열고 링크를 눌러 앱이 정상적으로 실행되는지, 미설치 시 fallback으로 웹페이지가 열리는지 테스트합니다.
   - Chrome 외 다른 브라우저(삼성 인터넷 등)에서도 동작을 검증하는 것이 좋습니다.
   - 인텐트 링크는 주로 Chrome에서 표준 지원되지만, 브라우저별로 동작이 다를 수 있습니다.

---

:::warning 주의사항
인텐트 스킴을 사용할 때는 **사용자 동작**(ex. 클릭)으로 호출해야 하며, 브라우저 주소창에 직접 입력하거나 자동 리디렉션으로 열 경우 동작이 제한될 수 있습니다. 또한 제조사 브라우저나 구형 브라우저에서는 지원되지 않을 수 있으므로, 인텐트 URI가 실패할 경우 대비도 필요합니다.
:::

:::info 안드로이드 공식 문서
➡️ [Android Developer Docs – Intents and Intent Filters](https://developer.android.com/guide/components/intents-filters)
:::

:::tip 기술 지원
nachocode 팀은 여러분의 성공적인 프로젝트 구현을 위해 항상 도움을 준비하고 있습니다. **인텐트 스킴 설정에 어려움**이 있거나 **추가적인 기술적인 질문이나 피드백**이 있다면 언제든지 [**nachocode 지원팀**](mailto:support@nachocode.io)에 문의 해주세요.
:::
