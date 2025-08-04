---
sidebar_label: 인텐트 스킴
pagination_label: 인텐트 스킴 (Intent Scheme)
description: nachocode에서의 인텐트 Scheme 활용법
keywords: [딥링크, Intent 스킴, Deep Link, Intent Scheme]
---

# 인텐트 스킴 (Intent Scheme)

import { BadgeWithVersion } from '@site/src/components/svg/badge-with-version';

> 🚀 **추가된 버전:** <BadgeWithVersion type="Android" version="v1.2.0" link="/docs/releases/v1/app-source/android/release-v-1-2-0" />  
> 🔔 **최신화 일자:** 2025-08-01

![Android Only](https://img.shields.io/badge/Android-Only-gray?logo=android)

## 인텐트 스킴 이해하기 {#understand}

**인텐트 스킴 딥링크**는 Android 플랫폼에서 제공하는 **특수한 URL 형식**으로, **Chrome 브라우저를 비롯한 Android 웹뷰** 등에서 사용자가 클릭한 링크를 **앱의 인텐트**(**Intent**)로 연결해주는 방식입니다. 일반적인 URI 스킴과 유사하지만, **Android만의 고유 문법**을 사용하여 앱 미설치 상황에서의 처리 방법까지 URL에 포함할 수 있다는 장점이 있습니다.

- **형식 및 구조:** 인텐트 스킴 URL의 기본 구조는 다음과 같습니다:

  ```text
  intent://<호스트>/<경로>#Intent;scheme=<스킴>;package=<패키지명>;[옵션];end;
  ```

  예시:

  ```text
  intent://product/123#Intent;scheme=myapp;package=com.example.myapp;
         S.browser_fallback_url=https%3A%2F%2Fwww.example.com%2Fproduct%2F123;end;
  ```

  위 링크를 풀어보면:
  - `intent://product/123` – 호출하려는 대상의 경로(`/product/123`).
  - `#Intent;` – 인텐트 스킴의 시작을 알리는 구분자.
  - `scheme=myapp;` – 호출에 사용할 URI 스킴 이름 (앱이 지원하는 커스텀 스킴, 예: `myapp://`).
  - `package=com.example.myapp;` – 열고자 하는 대상 앱의 **패키지 이름**(Application ID)을 명시. 이 패키지의 앱이 설치되어 있을 경우에만 인텐트를 처리합니다.
  - `S.browser_fallback_url=...;` – (선택사항) 만약 대상 앱이 설치되지 않았을 때 **대신 열 웹 URL**을 지정합니다. `S.`로 시작하는 것은 인텐트에 **Extra** 데이터를 넣는 문법이며, `browser_fallback_url` 값으로 웹페이지 URL을 지정하면 앱 미설치 시 자동으로 해당 URL을 브라우저에서 열어줍니다.
  - `end;` – 인텐트 스킴 표현의 끝을 알립니다.

- **동작 흐름:** 사용자가 인텐트 스킴 링크 (예: `intent://...`)를 클릭하면, **Chrome 브라우저**가 이를 해석하여 해당 인텐트를 처리할 앱을 찾습니다.
  - 지정된 `package` 이름의 앱이 기기에 설치되어 있다면, Android는 그 앱을 바로 실행하고 `scheme`에 명시된 URI 데이터를 전달합니다. 결과적으로 대상 앱의 특정 화면이 열리게 됩니다.
  - 앱이 설치되지 않은 경우, 인텐트 URL 내에 `browser_fallback_url`이 포함되어 있다면 Chrome은 자동으로 그 웹 주소로 이동합니다. (만약 fallback URL이 없으면 링크가 동작하지 않고 오류 화면이 나타날 수 있습니다.)

- **특징:** 인텐트 스킴 딥링크는 **Android에서만 동작**하며, 특히 Chrome 등의 브라우저에서 **모바일 웹 -> 앱 전환** 용도로 유용합니다. 하나의 링크로 **앱 실행과 웹 fallback**을 모두 처리할 수 있어 편리하지만, 표준 URL 형태가 아니기 때문에 iOS나 다른 환경에서는 인식되지 않습니다. 또한, `intent://` 링크는 \*\*사용자의 직접 액션(클릭)\*\*으로만 동작하며, 보안상 자동 리디렉션이나 임베디드 스크립트로 열릴 경우 차단되는 점을 유의해야 합니다.

## 설정하기

nachocode 앱에서 **인텐트 스킴 딥링크**를 활용하려면, 우선 **URI 스킴 딥링크 설정**이 선행되어야 합니다. (인텐트 스킴은 결국 특정 URI 스킴을 호출하는 형식이므로, 대상이 되는 앱에서 해당 스킴을 받아줄 수 있어야 합니다.) 위의 "URI 스킴 딥링크" 가이드를 참고하여 커스텀 스킴과 패키지 이름을 설정했다면, 이제 인텐트 링크를 만들어 사용할 수 있습니다:

1. **패키지 이름 확인:** nachocode 대시보드 **고급 앱 설정**에서 해당 앱의 **패키지 이름**(Android Application ID)을 확인합니다. 인텐트 링크의 `package=` 부분에 이 값을 정확히 넣어야 합니다. _(예: `com.nachocode.myapp`)_

2. **인텐트 링크 구성:** 앱에서 열고자 하는 페이지 경로와 쿼리 정보를 포함해 인텐트 URL을 만듭니다. `scheme=`에는 앞서 설정한 URI 스킴 이름을, `package=`에는 앱 패키지명을 넣습니다. 또한 **fallback URL**로 사용할 웹 페이지 URL을 `S.browser_fallback_url`에 인코딩하여 추가합니다. 예:

   ```html
   <a
     href="intent://promo/event99#Intent;scheme=myapp;package=com.nachocode.myapp;
            S.browser_fallback_url=https%3A%2F%2Fm.website.com%2Fpromo%2Fevent99;end;"
   >
     앱에서 이벤트 보기
   </a>
   ```

   위 예시는 `myapp://promo/event99` 딥링크를 호출하며, 대상 앱(`com.nachocode.myapp`)이 없으면 대신 `https://m.website.com/promo/event99` 페이지를 브라우저에 열게 됩니다. 이렇게 하면 **Android 사용자가 웹 페이지에서 해당 링크를 클릭했을 때** 앱이 설치되어 있으면 바로 이벤트 화면을 앱으로 보고, 없으면 모바일 웹으로 열람할 수 있습니다.

3. **웹 페이지에 적용:** 생성한 인텐트 링크를 여러분의 **모바일 웹 페이지, 이메일, SMS 등**에 삽입합니다. Android 기기에서 Chrome이나 대부분의 웹뷰 환경에서 이 링크를 클릭하면 자동으로 위에서 구성한 흐름에 따라 동작합니다. 특히 **PWA나 모바일 웹과 네이티브 앱을 병행**하는 경우, 웹에 이런 링크를 심어 앱 전환을 유도할 수 있습니다.

4. **테스트:** 실제 기기에서 Android Chrome으로 해당 페이지를 열고 링크를 눌러 앱이 정상적으로 실행되는지, 미설치 시 fallback으로 웹페이지가 열리는지 테스트합니다. Chrome 외 다른 브라우저(삼성 인터넷 등)에서도 동작을 검증하는 것이 좋습니다. 인텐트 링크는 주로 Chrome에서 표준 지원되지만, 브라우저별로 동작이 다를 수 있습니다.

---

- **인텐트 스킴 사용 (Android):** Android의 경우 인텐트 URI를 사용해 `intent://`로 시작하는 링크를 열면, 해당 앱이 설치되어 있지 않을 때 Play 스토어를 통해 설치를 유도할 수 있습니다. 예를 들어 Google 지도 앱의 위치 검색을 여는 인텐트 URI는 `intent://maps.google.com/maps?q=서울#Intent;package=com.google.android.apps.maps;end;` 와 같은 형식입니다.
