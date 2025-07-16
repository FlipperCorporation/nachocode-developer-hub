---
description: nachocode SDK의 `browser` 네임스페이스는 앱 내에서 URL을 열 때 외부 또는 내부 브라우저를 선택하여 열 수 있는 기능을 제공합니다.
keywords:
  [
    외부 브라우저,
    내부 브라우저,
    앱 내 브라우저,
    웹뷰,
    internal browser,
    external browser,
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
> 🔔 **최신화 일자:** 2025-07-16

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

브라우저 열기 옵션을 나타내는 타입입니다.

| 옵션       | 설명                                                   |
| ---------- | ------------------------------------------------------ |
| `external` | 외부 브라우저를 의미합니다. (safari, chrome, naver 등) |
| `internal` | 앱 내부 브라우저를 의미합니다.                         |

---

## **메서드 목록** {#method-list}

| 메서드                                 | 설명                                             | 추가된 버전                                                                                   |
| -------------------------------------- | ------------------------------------------------ | --------------------------------------------------------------------------------------------- |
| [`openLink(url, option?)`](#open-link) | 지정한 URL을 내부 또는 외부 브라우저에서 엽니다. | <BadgeWithVersion type="SDK" version="v1.0.3" link="/docs/releases/v1/sdk/release-v-1-0-3" /> |

---

## **메서드 상세** {#method-details}

### **`openLink(url: string, option?: OpenURLOption): void`** {#open-link}

- _since :_ <BadgeWithVersion type="SDK" version="v1.0.3" link="/docs/releases/v1/sdk/release-v-1-0-3" />

#### 설명 {#open-link-summary}

주어진 URL을 **외부 브라우저 또는 내부 브라우저**에서 엽니다.  
기본적으로 `external` 모드(외부 브라우저)가 사용됩니다.

#### 매개변수 {#open-link-parameters}

| 이름     | 타입                                             | 필수 여부 | 설명                                             |
| -------- | ------------------------------------------------ | --------- | ------------------------------------------------ |
| `url`    | `string`                                         | ✅        | 열고자 하는 웹 페이지 URL                        |
| `option` | [`OpenURLOption`](#open-url-option) (_optional_) | ❌        | `'external'`(기본값) 또는 `'internal'` 선택 가능 |

#### 반환 값 {#open-link-returns}

해당 메서드는 반환 값을 가지지 않습니다.

#### 사용 예제 {#open-link-examples}

```javascript
// 기본 옵션: 외부 브라우저에서 URL 열기 (Chrome, Safari 등)
Nachocode.browser.openLink('https://nachocode.io');
```

```javascript
// 명시적으로 외부 브라우저에서 URL 열기
Nachocode.browser.openLink('https://nachocode.io', 'external');
```

```javascript
// 내부 브라우저에서 URL 열기
Nachocode.browser.openLink('https://nachocode.io', 'internal');
```
