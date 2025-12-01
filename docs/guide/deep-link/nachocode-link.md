---
sidebar_label: 나쵸 링크 (nachocode.link)
pagination_label: 나쵸 링크 (nachocode.link)
description: nachocode에서 제공하는 적응형 통합 딥링크 서비스, 나쵸 링크 (nachocode.link)의 개념과 설정하는 방법, 사용 방법 등을 안내합니다. 나쵸 링크로 특정 페이지를 여는 방법과 실제 고객 활용 사례도 함께 소개합니다.
keywords:
  [
    딥링크,
    딥 링크,
    딥 링크 구현,
    원링크,
    원 링크,
    동적 링크,
    동적 링크 중단,
    Firebase Dynamic Link 대체,
    유니버셜 링크,
    앱 설치 유도,
    앱 링크,
    앱 스킴,
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
image: /img/docs/deep-link/deep-link_thumbnail.png
---

# 나쵸 링크 (nachocode.link) {#nachocode-link}

import { BadgeWithVersion } from '@site/src/components/svg/badge-with-version';
import { ThumbnailImage } from '@site/src/components/common/image/thumbnail-image';

<ThumbnailImage src='/img/docs/deep-link/deep-link_thumbnail.png'/>

> 🚀 **추가된 버전:** <BadgeWithVersion type="Android" version="v1.6.2" link="/docs/releases/v1/app-source/android/release-v-1-6-2" /> <BadgeWithVersion type="iOS" version="v1.6.2" link="/docs/releases/v1/app-source/ios/release-v-1-6-2" />  
> 🔔 **최신화 일자:** 2025-08-08

![Android](https://img.shields.io/badge/Android-gray?logo=android)
![iOS](https://img.shields.io/badge/iOS-gray?logo=apple)
![Web](/img/docs/chrome-badge.svg)

## 나쵸 링크 이해하기 {#understand-nachocode-link}

**나쵸 링크** (**nachocode.link**)는 [**nachocode 플랫폼**](https://nachocode.io/?utm_source=docs&utm_medium=documentation&utm_campaign=devguide)에서 [**비즈니스 플랜 이상의 고객사**](https://nachocode.io/pricing/?utm_source=docs&utm_medium=documentation&utm_campaign=devguide)에게 우선 제공되는 **통합 딥링크 서비스**입니다.

나쵸 링크 서비스를 사용하면 전용 딥링크 도메인인 [**nachocode.link**](https://nachocode.link)를 활용하여 **딥링크를 더욱 쉽게 관리**할 수 있습니다. **별도의 도메인 구축이나 복잡한 설정 없이도, 하나의 URL로 Android, iOS PC 모든 플랫폼에서 앱 실행, 스토어 이동, 웹 열람 등을 한 번에 처리할 수 있습니다.**

나쵸 링크는 자체적으로 **접속한 사용자의 기기의 플랫폼을 판별**하고 각 플랫폼에 어울리는 적응형 페이지를 제공합니다. 개발자는 추가적인 개발이나 관리할 필요 없이 **단일 링크**로 **편리하게 크로스 플랫폼 딥링크를 운영**할 수 있습니다.

:::tip
나쵸 링크는 2025년 6월 말 업데이트된 nachocode 앱소스 v1.6.2에서 [**앱 링크** (**App Link**)](./app-link), [**유니버설 링크** (**Universal Link**)](./universal-link) 동작 방식 개선과 함께 최초 구현되었습니다. 2025년 8월 25일 [**Firebase Dynamic Link가 종료됨**](https://firebase.google.com/support/dynamic-links-faq)에 대비하여 nachocode 팀이 직접 개발한 솔루션입니다.
:::

---

### nachocode.link란? {#what-is-nachocode-link}

**nachocode.link**는 nachocode가 제공하는 공식 딥링크 도메인으로, **각 앱별로 고유한 서브도메인**을 통해 동작합니다.

```scheme
https://{서비스명}.nachocode.link
```

나쵸 링크 도메인은 위와 같은 형식을 가집니다. 이 도메인으로 시작하는 링크는 nachocode가 관리하는 서버와 페이지를 거쳐 **사용자를 접속한 기기에 대응되는 올바른 경로로 안내**합니다.

:::warning 유의 사항
`nachocode.link` 도메인은 nachocode에서 관리하는 공용 도메인이므로 **해당 도메인의 SSL인증서나 DNS 설정 등을 변경할 수 없으며**, 독자 도메인을 쓰고 싶을 경우에는 추후 제공될 커스텀 도메인 기능을 기다리거나 직접 딥링크를 구현하셔야합니다. **현 시점에선 제공되는 서브도메인을 사용하는 것이 가장 쉽고 빠른 방법**입니다.
:::

---

### 나쵸 링크의 주요 특징 {#nachocode-link-features}

```scheme
https://{서비스명}.nachocode.link
```

나쵸 링크 (nachocode.link)는 **모든 플랫폼에서 호환되는 크로스플랫폼 딥링크입니다**.

각 플랫폼의 설정은 nachocode 앱 빌더의 시스템에서 미리 구성되고 **원하는 특정 페이지를 원하는 파라미터와 함께 여는** 딥링크 기능을 기본적으로 제공합니다. 그 외에도, **Android, iOS, PC 모든 플랫폼에서 공통적으로 사용할 수 있는 기능**과 **각각의 플랫폼 환경에 맞춘 전용 화면과 기능**을 적응형으로 제공합니다.

---

<hr style={{borderBottom:"1px solid #dbdbdb"}} />

#### **PC** {#nachocode-link-feature-pc}

<div style={{"textAlign":"center"}}>
  <img alt="nachocode-link-PC" src="/img/docs/deep-link/nachocode-link_PC.png" style={{maxHeight:"600px", border:"1px solid #dbdbdb"}} />
</div>

---

- **PC 전용 랜딩 페이지** 제공
- 모바일에서 편하게 열 수 있도록 **QR 코드** 제공
- **앱에 대한 간략한 소개** (이름, 아이콘, 설명 등)도 포함되어 있어 앱 홍보 페이지로 활용 가능
- 해당 앱의 **Play Store / App Store 다운로드 버튼**도 함께 제공
- `targeturl`로 지정된 **웹 페이지의 미리보기** 제공

---

<hr style={{borderBottom:"1px solid #dbdbdb"}} />

#### **Android** {#nachocode-link-feature-android}

<div style={{"textAlign":"center"}}>
  <img alt="nachocode-link-Android" src="/img/docs/deep-link/nachocode-link_Android.png" style={{maxHeight:"600px", border:"1px solid #dbdbdb"}} />
</div>

---

- 나쵸 링크 도메인을 통해 [**앱 링크** (**App Link**)](./app-link)가 동작하도록 구현
- **`/.well-known/assetlinks.json`** 경로에 **디지털 에셋 링크** JSON 파일 호스팅
- 앱 링크가 지원되는 디바이스에서는 앱이 설치되어 있을 경우 **브라우저를 경유하지 않고 바로 앱을 실행**
- 페이지 내부에서는 [**인텐트 스킴** (**Intent Scheme**)](./intent-scheme)을 활용하여 앱을 열거나 스토어 상세페이지를 여는 스크립트 실행
- **Android 사용자**가 앱 미설치 상태로 링크를 누르면 **Google Play 스토어**의 해당 앱 상세 페이지로 이동

---

<hr style={{borderBottom:"1px solid #dbdbdb"}} />

#### **iOS** {#nachocode-link-feature-ios}

<div style={{"textAlign":"center"}}>
  <img alt="nachocode-link-iOS" src="/img/docs/deep-link/nachocode-link_iOS.png" style={{maxHeight:"600px", border:"1px solid #dbdbdb"}} />
</div>

---

- iOS 기기에서는 [**유니버설 링크** (**Universal Link**)](./universal-link)로 동작하여 앱을 열도록 구현
- **`.well-known/apple-app-site-association`** 경로에 Apple 앱 사이트 연관 파일 호스팅
- 유니버셜 링크가 지원되는 디바이스에서는 앱이 설치되어 있을 경우 **브라우저를 경유하지 않고 바로 앱을 실행**
- 유니버셜 링크가 동작할 수 없는 상황을 대비하여 [**루트 경로와 오픈 경로**](#root-open-difference)에서의 동작 차이 구현
- 내부 페이지에서는 [**앱 URI 스킴** (**URI Scheme**)](./uri-scheme)을 활용하여 앱을 여는 스크립트 실행
- **iOS 사용자**는 앱 미설치 상태로 링크를 누르면 **Apple 앱 스토어**의 앱 상세 페이지로 이동

---

#### 루트 경로와 오픈 경로 {#root-open-difference}

:::warning 루트 경로와 오픈 경로
만약 사용자가 **Safari 주소창에 직접 해당 URL을 입력**하거나 할 경우, 유니버셜 링크는 바로 동작하지 않을 수 있습니다. iOS 정책상 **같은 도메인 내에서 리디렉션되는 링크**는 웹으로 열리도록 할 때도 있기 때문입니다. 이런 상황을 대비해 nachocode.link는 두 가지 전용 경로를 제공합니다.

- **루트 경로(`/`) - 직접 다운로드 경로**

  - 이 경로로 접속하면 **항상 앱 스토어(App Store)의 해당 앱 설치 페이지로 바로 이동**합니다.
  - 즉, 기기에 앱이 이미 설치되어 있더라도 무조건 스토어를 여는 동작입니다.
  - 이 모드는 **마케팅 캠페인 등에서 설치 유도를 최우선**으로 할 때 유용합니다.

- **오픈 경로(`/open`) - 앱 열기 시도 경로**
  - 해당 도메인에 단순 접속하면, nachocode 서버가 **앱 설치 여부를 체크**하여 설치된 경우 **앱의 URI 스킴으로 열기**를 시도합니다.
  - 앱이 설치되지 않은 경우에는 iOS에서 "유효하지 않은 URL입니다"라는 팝업이 뜨지만, 나쵸 링크에서 곧바로 **App Store로 이동할 수 있는 버튼이 포함된 안내 페이지**를 표시합니다.
  - 사용자는 팝업을 닫은 뒤 스토어 앱 상세 페이지에서 다운로드를 진행할 수 있습니다.
  - 이미 앱을 설치한 기존 사용자에게 발송하는 메시지에서 유용합니다.

:::

---

#### 나쵸 링크의 장점 {#nachocode-link-advantages}

나쵸 링크 (nachocode.link) 서비스를 이용하면 **개발 및 설정 부담을 크게 줄일 수 있습니다.**

- **범용성**
  - 하나의 링크를 모든 채널(SMS, 이메일, 웹 배너, SNS 등)에 공유해도, 사용자의 디바이스에 맞춰 동작하므로 일일이 플랫폼별 링크를 나눌 필요가 없습니다.
- **미설치 대응**
  - 앱이 없는 사용자도 자동으로 웹 콘텐츠로 안내되므로 이탈을 최소화하고, 필요하면 그 페이지에서 앱 설치를 유도할 수 있습니다. (ex. 상단 배너 등)
- **도메인/인증 불필요**
  - 개발자가 직접 Apple Associated Domain이나 Android Asset Links 설정을 하지 않아도, `nachocode.link` 도메인으로 이러한 딥링크를 구현해줍니다. 즉 **노코드에 가깝게** 강력한 딥링크 기능을 활용할 수 있습니다.

---

## 나쵸 링크 설정하기 {#set-up-nachocode-link}

:::info 공지
현재 나쵸 링크는 [**비즈니스 플랜 이상의 고객사**](https://nachocode.io/pricing/?utm_source=docs&utm_medium=documentation&utm_campaign=devguide)에게 우선 제공되고 있습니다.
:::

### 필수 제공 정보 준비 {#set-requirements-ready}

나쵸 링크 (nachocode.link)를 사용하려면 아래 정보들을 미리 준비해두어야 합니다.

1. **앱 소개 페이지에 노출될 앱 이름과 설명**

   - **앱 이름**

   :::note 예시
   케이타운포유 - Ktown4u
   :::

   - **앱 설명**

   :::note 예시
   전 세계 K-POP 팬들을 위한 최강 덕질 성지! 찾고 싶은 모든 K-POP 상품을 한 번에 GET!
   :::

2. **메타데이터에 쓰일 `title`, `description`**

   - **title**

   :::note 예시
   케이타운포유 - Ktown4u 앱 설치하기
   :::

   - **description**

   :::note 예시
   Ktown4u, K-POP 글로벌 이커머스 플랫폼. 전 세계 243개국 K-POP 팬들을 위한 최강 덕질 성지! K-POP 음반, 굿즈, 화장품, 패션, MD, 응원봉, 잡지까지 찾고 싶은 모든 K-POP 상품을 한 번에 GET!
   :::

3. **favicon.ico 파일**

   :::note 예시
   <img
   alt="favicon.ico"
   src="/img/docs/deep-link/client-ktown4u/ktown4u_favicon.ico"
   style={{width: '64px'}}/>
   :::

4. **Open Graph에 사용될 이미지 (w: 1200px, h: 630px 권장)**

   :::note 예시
   ![Graphic Image](/img/docs/deep-link/client-ktown4u/ktown4u_graphic_image.png)
   :::

5. **앱 스토어 다운로드 링크 (Android, iOS)**

   - **Android**

   :::note 예시
   [https://play.google.com/store/apps/details?id=com.nachocode.developer](https://play.google.com/store/apps/details?id=com.nachocode.developer)
   :::

   - **iOS**

   :::note 예시
   [https://apps.apple.com/us/app/nachocode-developer/id6514317160](https://apps.apple.com/us/app/nachocode-developer/id6514317160)
   :::

6. **앱에 사용할 서브도메인 작성 (`https://{서비스명}.nachocode.link`)**

   - **서비스명**

   :::note 예시
   ktown4u → [https://ktown4u.nachocode.link](https://ktown4u.nachocode.link)
   :::

---

### nachocode 대시보드 설정 {#set-nachocode-dashboard}

:::warning 공지
나쵸 링크 설정 기능은 아직 대시보드에서 제공되고 있지 않습니다.  
현재는 [**nachocode 지원팀**](mailto:support@nachocode.io)이 아래의 설정들을 대행하여 세팅해드리고 있습니다.
:::

- **나쵸 링크 서브도메인 발급**
  - 각 앱 프로젝트에서 고유한 서브도메인을 지정합니다.
  - 서브도메인은 보통 **앱 이름**이나 **프로젝트 ID** 등을 기반으로 설정합니다.
- **스토어 ID 등록**
  - 해당 도메인과 연결된 앱의 **Play 스토어 패키지명**과 **App Store ID**를 등록합니다.
  - 앱 미설치 시 사용자를 스토어로 보낼 때 활용됩니다.
- **iOS 연관 도메인 설정**
  - nachocode가 제공하는 `nachocode.link` 도메인은 첫 세팅 후, **자동으로 Apple 연관도메인**(Associated Domain)에 포함되도록 앱이 빌드됩니다.
  - nachocode가 AASA 파일도 관리하므로 신경쓰지 않아도 되며,개발자는 별도 세팅 없이 [**유니버셜 링크** (**Universal Link**)](./universal-link) 기능을 사용할 수 있습니다.
- **Android 도메인 인증**
  - 마찬가지로 `nachocode.link`에 대한 `assetlinks.json`도 nachocode가 제공하므로, 개발자는 별도 세팅 없이 [**앱링크** (**App Links**)](./app-link) 기능을 사용할 수 있습니다.

설정을 마친 후, 나쵸 링크 배포가 완료되면, **나쵸 링크 URL을 홍보나 링크 공유 시 그대로 사용**하면 됩니다. 링크 하나만 전달하면, **설치 여부와 관계없이** Android 사용자는 앱 또는 플레이스토어로, iOS 사용자는 앱 또는 앱스토어로 적절히 이동하게 됩니다.

---

## 나쵸 링크 활용하기 {#nachocode-link-usage}

### 나쵸 링크로 특정 페이지 열기 {#open-app-specific-page}

나쵸 링크 (nachocode.link)에서는 `targeturl` 쿼리 파라미터를 활용하여 앱을 열 때 곧바로 특정 페이지를 로드하도록 지정 할 수 있습니다.

```html
<a
  href="https://nachocode.link?targeturl=https%3A%2F%2Fdeveloper.nachocode.io%2Fdocs%2Fguide%2Fdeep-link%2Fnachocode-link"
>
  앱에서 보기
</a>
```

:::info 링크를 클릭하면

1. 앱이 설치된 경우 → 앱 실행 후 `targeturl` 페이지 열기
2. 앱이 미설치된 경우 → 스토어의 앱 상세 페이지 열기

:::

나쵸 링크 클릭 시 앱이 설치되어 있다면 브라우저를 거치지 않고 앱이 즉시 실행되며, `targeturl`에 지정된 URL을 로드합니다.

:::warning **주의**
`targeturl`에 사용하는 URL 값은 반드시 **URI 인코딩**된 형태로 넣어야 합니다.

예를 들어 `https://developer.nachocode.io/docs/guide/deep-link/nachocode-link`를 타겟 URL로 지정하려면 `https%3A%2F%2Fdeveloper.nachocode.io%2Fdocs%2Fguide%2Fdeep-link%2Fnachocode-link` 처럼 인코딩해야 합니다.
:::

---

### 나쵸 링크 고객 활용 사례 (Ktown4u) {#nachocode-link-client-ktown4u}

나쵸 링크 (nachocode.link)의 실제 활용 예로, **Ktown4u** 앱 사례를 들 수 있습니다.

![Ktown4u Case](/img/docs/deep-link/client-ktown4u/ktown4u_case.png)

**Ktown4u는 nachocode로 개발된 앱 서비스**로, 자사의 앱 전환 링크로 [**https://ktown4u.nachocode.link**](https://ktown4u.nachocode.link)를 사용했습니다.

---

<div class="underlined-subtitle">“하나의 URL로 관리할 수 있어 아주 편리합니다.”</div>

기존에는 Android와 iOS 안내를 별도로 만들어 **“플레이스토어에서 설치하기 / 앱스토어에서 설치하기”** 식으로 나눴다면, 나쵸링크 도입 후에는 **단 하나의 URL**만으로 모든 사용자에게 안내가 가능해졌습니다.

그 결과 **마케팅 캠페인**에서 링크 관리가 단순해지고, 클릭한 사용자도 **기기 구분 없이 동일한 URL**로 앱을 설치하거나 열 수 있어 편의성이 향상되었습니다.

---

<div class="underlined-subtitle">“유니버셜 링크를 아주 쉽게 구현할 수 있었어요!”</div>

또 다른 이점으로, ktown4u 팀은 나쵸링크를 쓰면서 **딥링크 관련 구현 부담을 줄일 수 있었다**고 합니다.

개발자가 직접 `apple-app-site-association`이나 `assetlinks.json` 파일을 호스팅하고 관리할 필요가 없고, nachocode가 제공하는 기본 도메인을 활용하므로 **별도 도메인 비용이나 HTTPS 인증서 관리 부담도 없습니다.** 딥링크의 복잡한 부분을 nachocode가 대신 처리해주므로, 개발팀은 **서비스 로직 구현과 콘텐츠 준비에 집중**할 수 있었습니다.

---

<details>
  <summary>

## 자주 묻는 질문 (FAQ) {#faq}

  </summary>

**Q1. Firebase Dynamic Link를 대체할 수 있나요?**

- 네. 나쵸 링크는 **Firebase Dynamic Link의 종료를 대비해 설계**되었으며, 동일한 기능을 제공하면서도 Android [**앱 링크** (**App Link**)](./app-link)와 iOS [**유니버셜 링크** (**Universal Link**)](./universal-link)를 표준 방식으로 지원합니다.

**Q2. `targeturl` 없이 사용할 수도 있나요?**

- 네. `targeturl`이 없으면 앱 링크는 단순히 앱을 실행하거나 앱 설치 안내 페이지를 표시하는 용도로 동작합니다.

**Q3. 도메인을 직접 소유해야 하나요?**

- 아닙니다. 나쵸 링크는 `nachocode.link` 하위 서브도메인으로 제공되므로 별도의 도메인 관리가 필요 없습니다.

</details>

---

:::tip 기술 지원
nachocode 팀은 여러분의 성공적인 프로젝트 구현을 위해 항상 도움을 준비하고 있습니다. **나쵸 링크 설정 요청이나 추가적인 기술적인 질문이나 피드백**이 있다면 언제든지 [**nachocode 지원팀**](mailto:support@nachocode.io)에 문의 해주세요.
:::
