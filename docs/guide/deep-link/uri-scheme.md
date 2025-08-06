---
sidebar_label: URI 스킴
pagination_label: URI 스킴 (URI Scheme)
description: nachocode 대시보드에서 앱 URI 스킴 형태의 딥링크를 설정하는 방법과 앱 URI 스킴 활용법을 안내합니다.
keywords:
  [
    딥링크,
    딥 링크,
    딥 링크 구현하기,
    URI 스킴,
    URI 스킴 연동하기,
    URL 스킴,
    URL 스킴 연동하기,
    앱스킴,
    앱 스킴,
    Scheme 링크,
    Deep-Link,
    Deep Link,
    URI Scheme,
    App Scheme,
  ]
---

# URI 스킴 (URI Scheme) {#uri-scheme}

import { BadgeWithVersion } from '@site/src/components/svg/badge-with-version';

> 🚀 **추가된 버전:** <BadgeWithVersion type="Android" version="v1.2.0" link="/docs/releases/v1/app-source/android/release-v-1-2-0" /> <BadgeWithVersion type="iOS" version="v1.2.0" link="/docs/releases/v1/app-source/ios/release-v-1-2-0" />  
> 🛠️ **개선된 버전:** <BadgeWithVersion type="Android" version="v1.5.1" link="/docs/releases/v1/app-source/android/release-v-1-5-1" /> <BadgeWithVersion type="iOS" version="v1.5.1" link="/docs/releases/v1/app-source/ios/release-v-1-5-1" /> - `targeturl` 파라미터 추가  
> 🔔 **최신화 일자:** 2025-08-06

![Android](https://img.shields.io/badge/Android-gray?logo=android)
![iOS](https://img.shields.io/badge/iOS-gray?logo=apple)

## URI 스킴 이해하기 {#understand}

**URI 스킴 딥링크**는 모바일 앱 딥링크의 가장 기본적인 형태로, **앱별로 스킴(Scheme)을 미리 정의하여 앱을 실행할 수 있는 딥링크**입니다. 해당 스킴으로 시작하는 URL을 클릭하면 **OS가 해당 앱을 실행**하며 **iOS와 Android 모두에서 지원**됩니다.

### URI 스킴 기본 구조 {#basic}

```scheme
{scheme}://{path}?{query}
```

| 구성 요소 | 설명                                                                                                                                   | 필수 여부 |
| --------- | -------------------------------------------------------------------------------------------------------------------------------------- | --------- |
| `scheme`  | 앱에서 정의한 스킴 이름 ( ex. `nachocode`, `developer`)                                                                                | ✅        |
| `path`    | 앱 내에서 열고자 하는 특정 화면이나 리소스를 지정하는 경로. (ex. `/open`)                                                              | ✅        |
| `query`   | 선택적으로 전달할 파라미터. <br/> `?` 뒤에 `key=value` 형식으로 작성하며 여러 개일 경우 `&`로 연결. <br/> (ex. `?id=123&ref=campaign`) | ❌        |

URI 스킴 딥링크는 웹의 URL과 유사한 형식으로, **스킴 이름을 앱에 할당하고 경로 및 쿼리로 세부 화면을 지정**합니다. 구현이 간단하고 커스텀 스킴 정의를 자유롭게 할 수 있습니다. 오프라인 환경에서도 동작하므로 QR코드나 문자메시지에 **앱 스킴 링크를 넣으면 스캔 및 클릭 시 바로 앱을 실행** 시킬 수도 있습니다.

### URI 스킴의 제약과 단점 {#limitations}

:::warning 주의
URI 스킴 방식에는 몇 가지 **제약과 단점**이 있어 호환성과 안정성 면에서 다른 딥링크 방식들보다 더 주의가 필요합니다.

1. **앱이 설치된 경우에만 링크가 동작**하기때문에 **앱이 설치되어 있지 않으면 해당 URI를 처리할 앱이 없어 아무 동작도 발생하지 않거나 오류가 발생합니다.** fallback 처리가 기본적으로 없어 **별도의 fallback 처리나 사용자 안내가 필요**합니다.
2. 앱 스킴 이름은 개발자가 임의로 정하기 때문에 **고유한 값을 보장하지 않습니다**. **동일 스킴을 여러 앱이 사용할 경우**, Android에서는 어떤 앱으로 열지 선택 팝업 UI가 뜨고, iOS에서는 **마지막 설치된 앱을 우선 실행**되는 예측 불가능한 상황이 생깁니다. 악의적인 경우, 다른 유명 앱의 스킴과 동일하게 만들어 사용자를 가로채는 **보안 이슈**도 있습니다.
3. URI 스킴은 표준 웹 URL이 아니다보니, 도메인 기반 검증이 부재하여 **운영체제가 해당 링크의 신뢰성을 확인할 방법이 없습니다**. 그로 인해 iOS 9 이상에서는 앱 간 보안 이유로 **Safari 등에서 자바스크립트로 임의로 URI 스킴을 열 경우 제한**이 있고, 링크를 수동으로 입력하면 **"유효하지 않은 URL" 경고가 표시**되기도 합니다. Android도 Chrome 브라우저에서 사용자 제스처 없이 스킴을 여는 것을 막는 등 제약이 존재합니다.

:::

:::tip
URI 스킴의 한계 때문에, **Apple과 Google은 각각 더 안전한 딥링크 표준**을 도입했습니다. [**iOS는 유니버설 링크**](./universal-link), [**Android는 앱 링크**](./app-link)를 통해 **HTTPS 웹 URL 기반으로 앱을 열고 미설치 시 웹으로 처리될 수 있는** 딥링크 방식을 제공합니다. nachocode 플랫폼 역시 이러한 방법들을 지원합니다.
:::

---

## URI 스킴 설정하기 {#set-up}

일반적으로 URI 스킴을 사용하기 위해서는 사용 전에 Android, iOS 각각 **앱이 해당 스킴을 처리하도록 등록**해야 합니다. Android에서는 앱의 `AndroidManifest.xml`에 스킴을 선언하고 iOS에서는 `Info.plist`에 스킴을 등록해야합니다.

### nachocode에서 URI 스킴 설정하기 {#set-up-nachocode-uri-scheme}

**nachocode에서 빌드된 앱은 기본적으로 커스텀 앱 URI 스킴 지원이 활성화**되어 있으며, 앱 패키지명 마지막 문자열을 사용하여 각 OS 설정 파일에 자동 지정됩니다. **[대시보드](https://nachocode.io/?utm_source=docs&utm_medium=documentation&utm_campaign=devguide)의 앱 설정 내 개발자 설정 메뉴에서 앱 URI 스킴 이름을 직접 확인하거나 변경 가능**합니다. 이를 활용해 외부에서 앱을 실행하거나, 추가적인 설정 후, 앱 내에서 다른 앱을 호출할 수 있습니다.

![nachocode-app-scheme](/img/docs/deep-link/nachocode_dashboard_developer_settings_app_scheme.png)

:::info 앱 스킴 적용하기
변경된 앱 스킴을 적용하기 위해서는 기존 앱을 **다시 빌드**하여 적용해야 합니다.

1. [**나쵸코드 대시보드**](https://nachocode.io/?utm_source=docs&utm_medium=documentation&utm_campaign=devguide) > **앱 설정** > **개발자 설정** > **앱 스킴 설정**
2. [**나쵸코드 대시보드**](https://nachocode.io/?utm_source=docs&utm_medium=documentation&utm_campaign=devguide) > **앱 빌드** > **안드로이드/iOS 앱 빌드** > **새 버전 만들기**

:::

1. **커스텀 스킴 이름 결정**
   - 앱에서 사용할 고유 스킴 이름을 정합니다.
   - 보통 서비스나 앱의 영문명으로 작성하며, 공백이나 특수문자 없이 짧고 명확하게 정합니다.

2. **대시보드에서 스킴 등록**
   - nachocode 대시보드의 앱 설정 메뉴에서 **개발자 설정**의 **앱 스킴 설정** 섹션을 찾습니다.
   - 여기에서 "딥링크 앱 스킴명" 항목에 앞서 결정한 스킴 이름을 입력합니다.
   - 예를 들어 스킴 이름을 `myapp`으로 입력했다면, 해당 앱은 `myapp://`으로 시작하는 딥링크를 처리할 수 있게 됩니다.
   - 이 설정은 Android의 **Manifest**(인텐트 필터)와 iOS의 **Info.plist**(URL Types)에 자동으로 반영되어 앱이 해당 스킴을 인식하도록 합니다.

3. **앱 빌드 및 배포**
   - 스킴 설정을 저장한 후 **앱을 다시 빌드**해야 변경 사항이 적용됩니다.
   - nachocode 대시보드의 **앱 빌드** 메뉴에서 새로운 버전을 빌드하세요.
   - 빌드된 앱을 기기에 설치하거나 스토어에 업데이트하면, 이제 해당 스킴의 딥링크를 사용할 준비가 됩니다.

4. **딥링크 URL 사용**
   - 설정 완료 후에는 `myapp://open` 형태의 URL을 다양한 곳에서 활용할 수 있습니다.
   - **웹페이지 또는 이메일에 연결** - `<a href="myapp://open">앱에서 보기</a>` 와 같이 링크를 작성하면, 사용자가 웹에서 클릭 시 앱이 열립니다.

---

### nachocode 앱 URI 스킴 구조 {#nachocode-uri-scheme}

nachocode로 생성된 **앱의 기본 URI 스킴** 구조는 다음과 같습니다.

```scheme
{my_app_scheme}://open?targeturl={TARGET_URL}
```

- **my_app_scheme**
  - 내 앱을 식별하는 고유 이름입니다.
  - nachocode에서 빌드한 앱은 기본적으로 **앱의 패키지명의 마지막 부분이 scheme으로 지정**됩니다.
  - 만약 스킴 이름을 변경하고 싶다면 [nachocode 대시보드](https://nachocode.io/?utm_source=docs&utm_medium=documentation&utm_campaign=devguide)에서 직접 변경할 수 있습니다.
- **open**
  - `/open` 으로 고정된 경로를 사용합니다.
  - nachocode 딥링크에서는 `{scheme}://open` 형식으로 앱 실행을 처리합니다.
- **targeturl**
  - _since:_ <BadgeWithVersion type="Android" version="v1.5.1" link="/docs/releases/v1/app-source/android/release-v-1-5-1" /> <BadgeWithVersion type="iOS" version="v1.5.1" link="/docs/releases/v1/app-source/ios/release-v-1-5-1" />
  - 딥링크 URL에 추가적인 **쿼리 파라미터**를 붙여 앱에서 특정 페이지를 열도록 전달할 수 있습니다.
  - nachocode 딥링크에서는 `targeturl` 파라미터를 활용하여 앱을 열 때 곧바로 특정 페이지를 로드하도록 지정합니다.

:::warning **주의**
`targeturl`에 사용하는 URL 값은 반드시 **URI 인코딩**된 형태로 넣어야 합니다. 예를 들어 `https://developer.nachocode.io/docs/guide/deep-link/uri-scheme`를 타겟 URL로 지정하려면 `https%3A%2F%2Fdeveloper.nachocode.io%2Fdocs%2Fguide%2Fdeep-link%2Furi-scheme` 처럼 인코딩해야 합니다.
:::

---

## URI 스킴 활용하기 {#usage}

### 웹에서 내 앱 열기 (딥링크 실행) {#open-my-app}

웹페이지나 모바일 브라우저에서 **커스텀 URI 스킴 딥링크를 통해 내 앱을 여는 방법**은 두 가지 방식이 있습니다.

**기본 방법**은 단순히 딥링크 URL을 HTML에서 `a` 태그나 `button` 태그를 활용하여 스킴을 호출하는 것입니다.

```html
<a href="my_app_scheme://open?...">앱 열기</a>
```

```html
<button
  type="button"
  onclick="window.location.href = 'my_app_scheme://open?...';"
>
  앱 열기
</button>
```

이 방식은 사용자가 해당 링크를 클릭하면 바로 딥링크를 실행합니다. **단, 앱이 설치되어 있지 않을 경우 아무 반응이 없거나 에러가 발생**할 수 있으므로 권장되는 방식은 아닙니다.

**앱 미설치를 대비**하고 싶을 경우, 사용자가 앱이 없을 경우 **스토어로 이동 처리**를 해주는 로직을 추가해야 합니다. 일반적으로는 자바스크립트에서 딥링크 호출 후 약간의 지연을 두고 **스토어 링크로 리디렉션**하는 방식이 널리 쓰입니다.

---

#### URI 스킴 딥링크 스크립트 구현 예시 {#uri-scheme-example}

예를 들어 내 앱의 패키지명이 `com.nachocode.developer`이면 기본 스킴은 `developer://` 형태입니다. 특정 페이지(`https://developer.nachocode.io/docs/guide/deep-link/uri-scheme`)를 열도록 하는 **URI 스킴 딥링크**는 아래 예시와 같습니다.

```scheme
developer://open?targeturl=https%3A%2F%2Fdeveloper.nachocode.io%2Fdocs%2Fguide%2Fdeep-link%2Furi-scheme
```

위 링크를 모바일 기기에서 열면, nachocode로 만든 해당 앱이 설치되어 있을 경우 곧바로 앱이 실행되어 `https://developer.nachocode.io/docs/guide/deep-link/uri-scheme` 페이지를 로드합니다. 앱이 설치되어 있지 않다면 아래 예시 코드처럼 **스토어로 자동 이동**시켜 설치를 유도할 수 있습니다.

```html
<script>
  function openMyApp() {
    // 앱 스킴 URL 정보
    const androidPackageName = 'com.nachocode.developer'; // 안드로이드 앱 ID
    const appleAppStoreId = '6514317160'; // App Store 앱 ID
    const scheme = 'developer'; // 커스텀 앱 URI 스킴
    const targetUrl = encodeURI(
      'https://developer.nachocode.io/docs/guide/deep-link/uri-scheme'
    );
    const schemeUrl = `${scheme}://open?targeturl=${targetUrl}`;

    // fallback 스토어 URL 지정
    let storeUrl = `https://apps.apple.com/app/id${appleAppStoreId}`;

    // 기기 OS 구분
    const userAgent =
      window.navigator.userAgent || window.navigator.vendor || window.opera;
    if (/android/i.test(userAgent)) {
      storeUrl = `https://play.google.com/store/apps/details?id=${androidPackageName}`;
    }

    // 커스텀 앱 스킴 호출 (앱 열기)
    window.location = schemeUrl;

    const timeout = 1500; // 약 1.5초
    // 앱이 설치되어 있지 않을 경우, 일정 시간 후에 마켓으로 이동
    const timerRef = setTimeout(() => {
      // 스토어 주소로 이동
      window.location.href = storeUrl;
    }, timeout);

    // window의 `visibilitychange` 이벤트가 발생하면 앱이 실행됐다고 가정한다.
    window.addEventListener('visibilitychange', () => {
      clearTimeout(timerRef);
    });
  }
</script>
```

위 스크립트는 사용자의 기기에 앱이 설치되어 있으면 딥링크가 우선 실행되고, 설치되어 있지 않을 경우 약 1.5초 뒤에 스토어 페이지로 이동시킵니다. Android에서는 **Play 스토어의 앱 상세 페이지**, iOS에서는 **App Store의 앱 상세 페이지**로 유도하게 됩니다. 이 시간을 조절하여 사용자의 네트워크나 기기 성능에 따라 적절히 조정할 수 있습니다. 또 다른 방법으로 Android Chrome 브라우저에서는 [**인텐트 스킴**](./intent-scheme)을 활용하면 앱 미설치 시 자동으로 Play 스토어로 연결할 수도 있습니다.

<details>
  <summary>⚠️ iOS Safari에서 URI 스킴 딥링크 사용 시 일반적인 문제</summary>
  :::warning 주의
  Safari는 웹 링크(http, https ) 형태가 아닌 URI 스킴 링크(developer://open)를 유효하지 않은 링크로 판단합니다.
  :::

1. **앱이 설치되어 있는 경우**
   - 앱은 정상적으로 열림
   - 하지만 백그라운드에서는 여전히 JavaScript를 중단하지 않고 백그라운드에서 계속 실행
   - `setTimeout`을 이용한 앱스토어 이동용 스크립트가 실행됨
   - 결과적으로 앱이 열린 후 몇 초 뒤에 **앱스토어로 강제로 리다이렉션**되는 현상 발생

2. **앱이 설치되어 있지 않은 경우**
   - "**주소가 유효하지 않기 때문에 Safari가 해당 페이지를 열 수 없습니다**" 라는 팝업이 표시된 후에 앱스토어로 이동

:::note 참고
해당 이슈는 Safari에서 URI Scheme을 사용할 때 발생하는 문제로 유명하며,  
iOS에서는 [유니버셜 링크 (Universal Link)](./universal-link)를 사용하여 딥링크를 구현하는 것을 권장합니다.
:::

</details>

---

#### nachocode SDK를 활용한 구현 예시 {#uri-scheme-sdk-example}

[nachocode SDK](/docs/sdk/intro)를 사용하면 이러한 로직을 조금 더 간단히 처리할 수 있습니다. SDK의 [`store.openStore`](/docs/sdk/namespaces/store#open-store) 메서드를 사용하면 현재 플랫폼을 자동으로 구분하여 올바른 스토어 상세 페이지로 이동 시킬 수 있습니다.

```html
<script src="https://cdn.nachocode.io/nachocode/client-sdk/@latest/client-sdk.min.js"></script>
<script>
  async function openMyApp() {
    // 앱 스킴 URL 정보
    const androidPackageName = 'com.nachocode.developer'; // 안드로이드 앱 ID
    const appleAppStoreId = '6514317160'; // App Store 앱 ID
    const scheme = 'developer'; // 커스텀 앱 URI 스킴
    const targetUrl = encodeURI(
      'https://developer.nachocode.io/docs/guide/deep-link/uri-scheme'
    );
    const schemeUrl = `${scheme}://open?targeturl=${targetUrl}`;

    // SDK 초기화
    await Nachocode.initAsync('your_api_key_here');

    // 앱 실행 환경이 아닐 경우
    if (!Nachocode.env.isApp()) {
      // 커스텀 앱 스킴 호출 (앱 열기)
      window.location = schemeUrl;

      const timeout = 1500; // 약 1.5초
      // 앱이 설치되어 있지 않을 경우, 일정 시간 후에 마켓으로 이동
      const timerRef = setTimeout(() => {
        Nachocode.store.openStore({
          androidAppId: androidPackageName, // Android 앱 패키지명
          iOSAppId: appleAppStoreId, // iOS Apple 앱 ID
        });
      }, timeout);

      // window의 `visibilitychange` 이벤트가 발생하면 앱이 실행됐다고 가정한다.
      window.addEventListener('visibilitychange', () => {
        clearTimeout(timerRef);
      });
    }
  }
</script>
```

---

### 내 앱에서 다른 앱 열기 (외부 앱 호출) {#open-external-app}

**앱에서 다른 앱을 열고 싶을 때 해당 앱의 패키지명을 미리 앱 내 등록**해야하며, **등록된 패키지명만 앱에서 스킴으로 호출이 가능**합니다.

![nachocode-app-scheme](/img/docs/deep-link/nachocode_dashboard_developer_settings_external_app_scheme.png)

:::info 외부 앱 스킴 등록하기
[**나쵸코드 대시보드**](https://nachocode.io/?utm_source=docs&utm_medium=documentation&utm_campaign=devguide) > **앱 설정** > **개발자 설정** > **외부 앱 호출용 앱 스킴**
:::

앱 내에서 **다른 앱을 실행**하는 방법은 간단합니다. 외부 앱이 고유 스킴을 가지고 있다면 **`다른앱스킴://경로`** 형태로 URI 스킴을 호출하면 됩니다.

```javascript
window.location.href = `${scheme}://${path}`;
```

예를 들어 카카오톡 앱을 열려면 `kakaotalk://launch`, nachocode developer 앱을 열려면 `developer://open`와 같이 그 앱의 스킴을 알맞게 호출하면 됩니다. 구현 방법은 웹에서 딥링크를 여는 것과 유사하게 **`window.location` 변경 또는 `<a>` 태그**를 사용하면 됩니다.

:::warning 참고
기본적으로 다른 앱의 스킴은 공개된 값이 아닙니다. 외부 앱의 스킴 및 지원 여부는 **각 앱 개발사의 문서를 참고**해야 합니다.
:::

```html
<a
  href="developer://open?targeturl=https%3A%2F%2Fdeveloper.nachocode.io%2Fdocs%2Fguide%2Fdeep-link%2Furi-scheme&iOS_id=id6514317160&AOS_id=com.nachocode.developer"
>
  nachocode developer URI 스킴
</a>
```

```html
<button
  type="button"
  onclick="location.href ='developer://open?targeturl=https%3A%2F%2Fdeveloper.nachocode.io%2Fdocs%2Fguide%2Fdeep-link%2Furi-scheme&iOS_id=id6514317160&AOS_id=com.nachocode.developer'"
>
  nachocode developer URI 스킴
</button>
```

nachocode 앱에서 외부 앱을 호출할 때의 fallback 처리는 좀 더 쉽게 구현이 가능합니다. 스킴 주소를 직접 지정하고 `AOS_id`와 `iOS_id`를 쿼리 파라미터로 전달해 앱이 설치되지 않은 경우 스토어로 이동할 수 있도록 처리할 수 있습니다. `AOS_id`는 **구글 플레이스토어로 이동할 때 필요한 앱의 패키지명**이고, `iOS_id`는 **앱스토어 이동에 필요한 앱의 아이디**입니다.

---

:::info 스토어 ID 확인법
구글 플레이스토어와 앱스토어에서의 앱 ID를 확인하기 어렵다면 아래 문서를 참고해보세요.

➡️ [**스토어 ID 확인하기**](./check-store-id)
:::

:::tip 기술 지원
nachocode 팀은 여러분의 성공적인 프로젝트 구현을 위해 항상 도움을 준비하고 있습니다.  
기술적인 질문이나 피드백이 있다면 언제든지 [**support@nachocode.io**](mailto:support@nachocode.io)에 **이메일**을 보내주세요.
:::
