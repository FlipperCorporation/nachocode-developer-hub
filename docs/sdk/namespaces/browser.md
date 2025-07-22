---
description: nachocode SDK의 `browser` 네임스페이스는 앱 내에서 URL을 열 때 외부 또는 내부 브라우저를 선택하여 열 수 있는 기능을 제공합니다.
keywords:
  [
    인앱 브라우저,
    인앱 Safari,
    인앱 Chrome,
    앱 내 브라우저,
    외부 브라우저,
    내부 브라우저,
    웹뷰,
    internal browser,
    external browser,
    in-app browser,
    in app browser,
    mobile browser,
    WebView,
    WKWebView,
    Safari,
    Chrome,
  ]
---

# 브라우저 (`browser`)

import { BadgeWithVersion } from '@site/src/components/svg/badge-with-version';

> 🚀 **추가된 버전 :** <BadgeWithVersion type="SDK" version="v1.0.3" link="/docs/releases/v1/sdk/release-v-1-0-3" /> <BadgeWithVersion type="Android" version="v1.1.0" link="/docs/releases/v1/app-source/android/release-v-1-1-0" /> <BadgeWithVersion type="iOS" version="v1.1.0" link="/docs/releases/v1/app-source/ios/release-v-1-1-0" />  
> 🔔 **최신화 일자:** 2025-07-22

## **개요** {#overview}

`browser` 네임스페이스는 **앱 내에서 링크를 열기 위한 브라우저 기능**을 제공합니다.

URL을 열 때 **외부 브라우저(Chrome, Safari 등) 또는 앱 내부 브라우저를 선택하여 사용할 수 있습니다.**

:::warning 내부 브라우저 유의사항

- SDK를 통해 연 내부 브라우저에서는 웹뷰의 **부모-자식** 관계가 없는 대신 내부 브라우저에서 SDK 기능이 사용 가능하도록 구현하였습니다.
- `anchor` 혹은 `window.open`을 통해 열린 내부 브라우저의 경우 웹뷰의 **부모-자식** 관계가 성립되지만 내부 브라우저에서 SDK 사용이 불가하도록 처리하였습니다.
- 참고 : [➡️ iOS App Source Release v.1.6.5](/docs/releases/v1/app-source/ios/release-v-1-6-5)

:::

---

## **타입 정의** {#types}

### **`OpenURLOption`** {#open-url-option}

- _since :_ <BadgeWithVersion type="SDK" version="v1.0.3" link="/docs/releases/v1/sdk/release-v-1-0-3" />
- _lastupdated :_ <BadgeWithVersion type="SDK" version="v1.6.3" link="/docs/releases/v1/sdk/release-v-1-6-3" />

링크를 여는 브라우저 옵션을 나타내는 타입입니다.

```typescript
export declare type OpenURLOption =
  | 'external'
  | 'internal'
  | 'internal_default';
```

| 옵션                 | 설명                    | 추가된 버전                                                                                                                                                                                                                                                                                                                          |
| -------------------- | ----------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `'external'`         | 앱 외부 기본 브라우저   | <BadgeWithVersion type="SDK" version="v1.0.3" link="/docs/releases/v1/sdk/release-v-1-0-3" /> <br/><BadgeWithVersion type="Android" version="v1.1.0" link="/docs/releases/v1/app-source/android/release-v-1-1-0" /> <br/><BadgeWithVersion type="iOS" version="v1.1.0" link="/docs/releases/v1/app-source/ios/release-v-1-1-0" />    |
| `'internal'`         | 인앱 브라우저 (WebView) | <BadgeWithVersion type="SDK" version="v1.0.3" link="/docs/releases/v1/sdk/release-v-1-0-3" /> <br/><BadgeWithVersion type="Android" version="v1.1.0" link="/docs/releases/v1/app-source/android/release-v-1-1-0" /> <br/><BadgeWithVersion type="iOS" version="v1.1.0" link="/docs/releases/v1/app-source/ios/release-v-1-1-0" />    |
| `'internal_default'` | 앱 내부 기본 브라우저   | <BadgeWithVersion type="SDK" version="v1.6.3" link="/docs/releases/v1/sdk/release-v-1-6-3" /> <br/> <BadgeWithVersion type="Android" version="v1.6.9" link="/docs/releases/v1/app-source/android/release-v-1-6-8" /> <br/> <BadgeWithVersion type="iOS" version="v1.6.10" link="/docs/releases/v1/app-source/ios/release-v-1-6-9" /> |

- `'external'`

  - 링크를 사용자 설정에 따른 **앱 외부의 기본 브라우저**(Chrome, Safari 등)에서 여는 방식입니다.
  - 타 앱을 열거나, 앱과 다른 도메인의 페이지를 보여주어야 할 때 유용
  - 앱과의 **세션이 분리되어 쿠키 등이 공유되지 않음**

- `'internal'`

  - 링크를 **앱 내 WebView**에서 인앱 브라우저로 여는 방식입니다.
  - 메인 WebView와의 **세션이 유지됨**
  - 메인 WebView와 **쿠키 공유 가능**

- `'internal_default'`

  - 링크를 **앱 내부에서 기본 브라우저 엔진**(SafariViewController, Chrome Custom Tabs 등)으로 여는 방식입니다.
  - 모든 동작이 **외부 브라우저와 동일하게 동작**
  - 메인 WebView와의 **세션이 분리되어 쿠키 등이 공유되지 않음**
  - **Native SDK 기능 이용 불가**

---

## **메서드 목록** {#method-list}

| 메서드                                 | 설명                                             | 추가된 버전                                                                                   | 업데이트된 버전                                                                               |
| -------------------------------------- | ------------------------------------------------ | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| [`openLink(url, option?)`](#open-link) | 지정한 URL을 내부 또는 외부 브라우저에서 엽니다. | <BadgeWithVersion type="SDK" version="v1.0.3" link="/docs/releases/v1/sdk/release-v-1-0-3" /> | <BadgeWithVersion type="SDK" version="v1.6.3" link="/docs/releases/v1/sdk/release-v-1-6-3" /> |

---

## **메서드 상세** {#method-details}

### **`openLink(url: string, option?: OpenURLOption): void`** {#open-link}

- _since :_ <BadgeWithVersion type="SDK" version="v1.0.3" link="/docs/releases/v1/sdk/release-v-1-0-3" />
- _lastupdated :_ <BadgeWithVersion type="SDK" version="v1.6.3" link="/docs/releases/v1/sdk/release-v-1-6-3" />

#### 설명 {#open-link-summary}

주어진 URL을 **외부 브라우저 또는 내부 브라우저**에서 엽니다.  
기본적으로 `external` 모드(외부 브라우저)가 사용됩니다.

브라우저 열기 기능은 [**SDK ver.1.6.3**](/docs/releases/v1/sdk/release-v-1-6-3)부터 **웹, Android, iOS 플랫폼 모두에서 사용 가능**합니다.

#### 지원 플랫폼 {#open-link-supported-platforms}

`openLink` 메서드는 **App과 Web 모든 환경을 지원**합니다.

| 플랫폼                                                             | 지원 여부 | 비고                         |
| ------------------------------------------------------------------ | --------- | ---------------------------- |
| ![Android](https://img.shields.io/badge/Android-gray?logo=android) | ✅        | 내부 혹은 외부 브라우저 오픈 |
| ![iOS](https://img.shields.io/badge/iOS-gray?logo=apple)           | ✅        | 내부 혹은 외부 브라우저 오픈 |
| ![Web](/img/docs/chrome-badge.svg)                                 | ✅        | 팝업 혹은 새 창 오픈         |

#### 매개변수 {#open-link-parameters}

| 이름     | 타입                                             | 필수 여부 | 설명                                                          |
| -------- | ------------------------------------------------ | --------- | ------------------------------------------------------------- |
| `url`    | `string`                                         | ✅        | 열고자 하는 웹 페이지 URL                                     |
| `option` | [`OpenURLOption`](#open-url-option) (_optional_) | ❌        | `'external'`, `'internal'`, `'internal_default'` 중 선택 가능 |

#### 반환 값 {#open-link-returns}

해당 메서드는 반환 값을 가지지 않습니다.

#### 사용 예제 {#open-link-examples}

##### 앱 외부 브라우저에서 열기 {#open-link-example-external}

- ✅ 앱 외부의 Safari, Chrome 등 유저가 선택한 기본 브라우저를 활용
- ✅ 타 앱을 열거나, 앱과 다른 도메인의 페이지를 보여주어야 할 때 유용
- ❌ 앱과의 세션이 분리되어 쿠키 등이 공유되지 않음

```javascript
// 외부 브라우저에서 URL 열기 (기본 동작)
Nachocode.browser.openLink('https://nachocode.io');
```

```javascript
// 명시적으로 외부 브라우저에서 URL 열기 (Chrome, Safari 등)
Nachocode.browser.openLink('https://nachocode.io', 'external');
```

##### 앱 내부 브라우저(WebView)에서 열기 {#open-link-example-internal}

- ✅ 메인 WebView와의 세션이 유지됨
- ✅ 메인 WebView와 쿠키 공유 가능
- ❌ 모바일 브라우저에서 동작하던 일부 기능이 동작하지 않을 수 있음

```javascript
// 앱 내부 브라우저에서 URL 열기
Nachocode.browser.openLink('https://nachocode.io', 'internal');
```

##### 기본 브라우저 엔진으로 열기 {#open-link-example-internal-default}

- ✅ Safari, Chrome 등 유저가 선택한 기본 브라우저를 활용
- ✅ 모든 동작이 외부 브라우저와 동일하게 동작
- ❌ 메인 WebView와의 세션이 분리되어 쿠키 등이 공유되지 않음
- ❌ Native SDK 기능 이용 불가

```javascript
// 앱 내부에서 기본 브라우저 엔진으로 URL 열기
Nachocode.browser.openLink('https://nachocode.io', 'internal_default');
```
