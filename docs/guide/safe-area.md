---
sidebar_label: 안전 영역
pagination_label: 안전 영역 (Safe Area)
description: nachocode 안전 영역 (Safe Area) 가이드는 iOS와 Android에서 디바이스 안전 영역을 처리하는 방법을 제공합니다. SDK 메서드와 CSS 변수를 활용한 구현 방법을 안내합니다.
keywords:
  [
    Safe Area,
    안전 영역,
    SafeAreaInsets,
    WindowInsets,
    노치,
    시스템 바,
    풀스크린,
    전체화면,
    iOS Safe Area,
    Android Safe Area,
    nachocode Safe Area,
  ]
image: /img/docs/thumbnails/GUIDE/safe-area.png
---

# 안전 영역 (Safe Area)

import { BadgeWithVersion } from '@site/src/components/svg/badge-with-version';
import { ThumbnailImage } from '@site/src/components/common/image/thumbnail-image';

<ThumbnailImage src='/img/docs/thumbnails/GUIDE/safe-area.png'/>

> 🔔 **최신화 일자:** 2026-07-01

## 안전 영역 (Safe Area) 이해하기 {#understand}

**안전 영역** (**Safe Area**)은 **디바이스의 노치, 홈 인디케이터, 시스템 바 등 시스템 UI로 가려지지 않는 안전한 화면 영역**을 의미합니다.

최근 출시되는 스마트폰은 노치, 펀치홀, 다이나믹 아일랜드 등 다양한 형태의 디스플레이를 채택하고 있으며, 화면 상단과 하단에 시스템 UI 요소가 배치됩니다. 이러한 요소들로 인해 **앱의 중요한 콘텐츠나 UI가 가려질 수 있어**, 안전 영역을 고려한 레이아웃 설계가 필수적입니다.

:::tip 예시
예를 들어, iPhone X 이상 기기에서는 상단의 노치와 하단의 홈 인디케이터가 존재합니다.  
앱을 풀스크린으로 사용할 경우 **안전 영역을 고려하지 않으면 중요한 버튼이나 텍스트가 노치나 홈 인디케이터에 가려져 사용자 경험이 저해**될 수 있습니다.
:::

안전 영역을 올바르게 처리하면 **모든 디바이스에서 일관되고 최적화된 사용자 경험**을 제공할 수 있으며, 앱의 UI가 시스템 요소에 의해 가려지지 않도록 보장할 수 있습니다.

---

## 플랫폼별 Safe Area 개념 {#platform-concepts}

### iOS의 Safe Area Insets {#ios-safe-area}

iOS에서 Safe Area는 **UIView의 safeAreaInsets 프로퍼티**를 통해 제공됩니다.

#### Safe Area가 필요한 주요 iOS 디바이스 요소

- **노치 (Notch)** : iPhone X 이상 기기의 상단 카메라 및 센서 영역
- **다이나믹 아일랜드 (Dynamic Island)** : iPhone 14 Pro 이상 기기의 상단 인터랙티브 영역
- **홈 인디케이터 (Home Indicator)** : iPhone X 이상 기기의 하단 제스처 바

Apple은 개발자가 안전 영역을 벗어나지 않도록 레이아웃을 구성할 것을 강력히 권장합니다.

:::info iOS Safe Area 공식 문서
➡️ [**Apple Developer - Positioning content relative to the safe area**](https://developer.apple.com/documentation/uikit/positioning-content-relative-to-the-safe-area)
:::

---

### Android의 Window Insets {#android-window-insets}

Android에서는 **WindowInsets**를 통해 시스템 바와 디스플레이 컷아웃(노치, 펀치홀) 정보를 제공합니다.

#### Safe Area가 필요한 주요 Android 디바이스 요소

- **상태 바 (Status Bar)** : 화면 상단의 시간, 배터리, 네트워크 정보 표시 영역
- **네비게이션 바 (Navigation Bar)** : 화면 하단의 뒤로 가기, 홈, 최근 앱 버튼 영역
- **디스플레이 컷아웃 (Display Cutout)** : 노치, 펀치홀 등 카메라 및 센서 영역

Android는 **Edge-to-Edge 디스플레이**를 지원하며, 개발자는 [WindowInsets](https://developer.android.com/develop/ui/compose/system/insets?hl=ko)를 활용하여 시스템 UI와 겹치지 않도록 레이아웃을 조정해야 합니다.

:::info Android Window Insets 공식 문서
➡️ [**Android Developers - WindowInsets**](https://developer.android.com/develop/ui/compose/system/insets?hl=ko)
:::

---

## nachocode 앱의 시스템 바와 Safe Area {#nachocode-system-bar}

nachocode로 생성한 앱은 기본적으로 **시스템 바** (상단 네비게이션 바)를 제공합니다.
이 시스템 바는 자동으로 안전 영역을 고려하여 배치되므로, **기본 설정에서는 별도의 Safe Area 처리가 필요하지 않습니다.**

:::info 시스템 바 설정
nachocode 시스템 바에 대한 자세한 내용은 다음 링크에서 확인하세요.  
➡️ [**나쵸코드 사용자 가이드 - 시스템 바**](https://docs.nachocode.io/ko/articles/%EC%8B%9C%EC%8A%A4%ED%85%9C-%EB%B0%94-02dc2739)
:::

하지만 **풀스크린 앱**을 만들고자 할 때는 시스템 바를 비활성화할 수 있습니다.

### 시스템 바 비활성화 방법

1. [**나쵸코드 대시보드**](https://nachocode.io) 접속
2. **앱 디자인** > **시스템 바** 메뉴로 이동
3. 시스템 바를 "**미사용**"으로 체크
4. 앱 빌드 및 배포

:::warning 풀스크린 모드 사용 시 주의사항
시스템 바를 비활성화하고 풀스크린 모드로 앱을 사용할 경우, **반드시 Safe Area Insets를 확인하여 UI 레이아웃을 조정**해야 합니다.  
그렇지 않으면 중요한 콘텐츠가 노치, 홈 인디케이터, 시스템 바 등에 가려질 수 있습니다.
:::

---

## nachocode에서 Safe Area 처리하기 {#implementation}

nachocode는 **iOS와 Android 모두에서** 안전 영역을 쉽게 처리할 수 있도록 **두 가지 방식**을 제공합니다.

### 1. SDK 메서드를 통한 동적 할당 {#sdk-method}

nachocode SDK의 [`Nachocode.device.getSafeAreaInsets()`](/docs/sdk/namespaces/device#get-safe-area-insets) 메서드를 호출하여 **JavaScript로 Safe Area Insets 값을 동적으로 조회**하고 활용할 수 있습니다.

- _since :_ <BadgeWithVersion type="SDK" version="v1.8.0" link="/docs/releases/v1/sdk/release-v-1-8-0" />
- _lastupdated :_ <BadgeWithVersion type="SDK" version="v1.10.5" link="/docs/releases/v1/sdk/release-v-1-10-5" />

#### 지원 플랫폼 {#sdk-supported-platform}

| 플랫폼                                                             | 지원 여부        |
| ------------------------------------------------------------------ | ---------------- |
| ![Android](https://img.shields.io/badge/Android-gray?logo=android) | ✅ 정상 동작     |
| ![iOS](https://img.shields.io/badge/iOS-gray?logo=apple)           | ✅ 정상 동작     |
| ![Web](/img/docs/chrome-badge.svg)                                 | ❌ 지원하지 않음 |

#### 사용 방법 {#sdk-how-to-use}

```javascript
// Safe Area Insets 조회
const safeAreaInsets = await Nachocode.device.getSafeAreaInsets();

if (!safeAreaInsets.isError) {
  console.log(`Top: ${safeAreaInsets.top}pt`);
  console.log(`Bottom: ${safeAreaInsets.bottom}pt`);
  console.log(`Left: ${safeAreaInsets.left}pt`);
  console.log(`Right: ${safeAreaInsets.right}pt`);
} else {
  console.error(`Safe Area Insets 조회 실패: ${safeAreaInsets.errorMessage}`);
}
```

#### CSS 변수로 설정하여 활용

```javascript
// Safe Area Insets 정보를 CSS 변수로 설정하여 레이아웃에 활용
async function applySafeAreaInsets() {
  const safeAreaInsets = await Nachocode.device.getSafeAreaInsets();

  if (!safeAreaInsets.isError) {
    const root = document.documentElement;
    root.style.setProperty('--safe-area-inset-top', `${safeAreaInsets.top}pt`);
    root.style.setProperty(
      '--safe-area-inset-bottom',
      `${safeAreaInsets.bottom}pt`
    );
    root.style.setProperty(
      '--safe-area-inset-left',
      `${safeAreaInsets.left}pt`
    );
    root.style.setProperty(
      '--safe-area-inset-right',
      `${safeAreaInsets.right}pt`
    );
  }
}

// 앱 시작 시 호출
applySafeAreaInsets();
```

```css
/* CSS에서 사용 */
.header {
  padding-top: var(--safe-area-inset-top);
}

.footer {
  padding-bottom: var(--safe-area-inset-bottom);
}

.content {
  padding-left: var(--safe-area-inset-left);
  padding-right: var(--safe-area-inset-right);
}
```

:::tip SDK 메서드 상세 정보
`getSafeAreaInsets()` 메서드에 대한 자세한 API 문서는 다음 링크에서 확인하세요.  
➡️ [**SDK 문서 - getSafeAreaInsets()**](/docs/sdk/namespaces/device#get-safe-area-insets)
:::

---

### 2. Native Layer에서 자동 주입되는 CSS 변수 {#css-variables}

nachocode 앱은 **Native Layer에서 Safe Area Insets 값을 자동으로 CSS 변수로 주입**합니다.  
별도의 SDK 호출 없이 **CSS에서 바로 활용**할 수 있어 간편하게 활용할 수 있습니다.

- _since :_ <BadgeWithVersion type="Android" version="v1.10.12" link="/docs/releases/v1/app-source/android/release-v-1-10-12" /> <BadgeWithVersion type="iOS" version="v1.10.12" link="/docs/releases/v1/app-source/ios/release-v-1-10-12" />

#### 제공되는 CSS 변수

nachocode 앱은 네이티브 레이어에서 다음 CSS 변수를 자동으로 주입합니다.

- `--safe-area-top` : 상단 Safe Area (pt)
- `--safe-area-right` : 우측 Safe Area (pt)
- `--safe-area-bottom` : 하단 Safe Area (pt)
- `--safe-area-left` : 좌측 Safe Area (pt)

#### 지원 플랫폼 {#css-supported-platform}

| 플랫폼                                                             | 지원 여부        |
| ------------------------------------------------------------------ | ---------------- |
| ![Android](https://img.shields.io/badge/Android-gray?logo=android) | ✅ 정상 동작     |
| ![iOS](https://img.shields.io/badge/iOS-gray?logo=apple)           | ✅ 정상 동작     |
| ![Web](/img/docs/chrome-badge.svg)                                 | ❌ 지원하지 않음 |

#### 사용 방법 {#css-how-to-use}

CSS에서 바로 변수를 활용할 수 있습니다.

```css
/* 헤더에 상단 Safe Area 적용 */
.header {
  padding-top: var(--safe-area-top);
  background-color: #fff;
}

/* 하단 네비게이션에 하단 Safe Area 적용 */
.bottom-nav {
  padding-bottom: var(--safe-area-bottom);
  background-color: #f0f0f0;
}

/* 전체 컨테이너에 좌우 Safe Area 적용 */
.container {
  padding-left: var(--safe-area-left);
  padding-right: var(--safe-area-right);
}

/* 모든 안전 영역을 한번에 적용 */
.fullscreen-content {
  padding: var(--safe-area-top) var(--safe-area-right) var(--safe-area-bottom)
    var(--safe-area-left);
}
```

:::tip 권장 사항
CSS 변수 방식은 **별도의 JavaScript 코드 없이 CSS만으로 안전 영역을 처리**할 수 있어 가장 간편합니다.  
풀스크린 앱을 개발할 때는 이 방식을 우선적으로 사용하는 것을 권장합니다.
:::

---

## 실전 활용 예제 {#examples}

### 예제 1: 풀스크린 비디오 플레이어 {#example-video}

풀스크린 비디오 플레이어를 구현할 때 컨트롤 버튼이 노치나 홈 인디케이터에 가려지지 않도록 처리

```css
.video-container {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: black;
}

.video-controls {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  /* 하단 Safe Area만큼 여백 추가 */
  padding-bottom: var(--safe-area-bottom);
  background: rgba(0, 0, 0, 0.5);
}
```

---

### 예제 2: 하단 고정 버튼 {#example-fixed-button}

화면 하단에 고정된 액션 버튼이 홈 인디케이터에 가려지지 않도록 처리

```css
.fixed-button {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  /* 기본 여백 + Safe Area 여백 */
  padding: 16px;
  padding-bottom: calc(16px + var(--safe-area-bottom));
  background: #007aff;
  color: white;
}
```

---

### 예제 3: React에서 동적으로 Safe Area 적용 {#example-react}

React 환경에서 SDK를 활용하여 안전 영역을 동적으로 적용

```javascript
import { useEffect, useState } from 'react';

function App() {
  const [safeArea, setSafeArea] = useState({
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
  });

  useEffect(() => {
    async function loadSafeArea() {
      if (window.Nachocode && window.Nachocode.env.isApp()) {
        const result = await window.Nachocode.device.getSafeAreaInsets();
        if (!result.isError) {
          setSafeArea(result);
        }
      }
    }
    loadSafeArea();
  }, []);

  return (
    <div
      style={{
        paddingTop: `${safeArea.top}pt`,
        paddingBottom: `${safeArea.bottom}pt`,
        paddingLeft: `${safeArea.left}pt`,
        paddingRight: `${safeArea.right}pt`,
      }}
    >
      <h1>풀스크린 앱</h1>
      <p>Safe Area가 적용된 콘텐츠입니다.</p>
    </div>
  );
}
```

---

### 예제 4: CSS 변수를 활용한 전체 레이아웃 {#example-layout}

네이티브에서 자동 주입되는 CSS 변수를 활용한 전체 레이아웃 구성

```html
<!DOCTYPE html>
<html>
  <head>
    <style>
      * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
      }

      body {
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
      }

      .app-container {
        display: flex;
        flex-direction: column;
        min-height: 100vh;
      }

      /* 헤더 - 상단 Safe Area 적용 */
      .header {
        padding-top: var(--safe-area-top);
        padding-left: var(--safe-area-left);
        padding-right: var(--safe-area-right);
        background: #007aff;
        color: white;
        padding-bottom: 16px;
      }

      .header h1 {
        padding: 16px;
        padding-top: 8px;
      }

      /* 메인 콘텐츠 - 좌우 Safe Area 적용 */
      .main-content {
        flex: 1;
        padding-left: calc(16px + var(--safe-area-left));
        padding-right: calc(16px + var(--safe-area-right));
        padding-top: 16px;
        padding-bottom: 16px;
      }

      /* 하단 네비게이션 - 하단 Safe Area 적용 */
      .bottom-nav {
        display: flex;
        justify-content: space-around;
        padding: 12px;
        padding-bottom: calc(12px + var(--safe-area-bottom));
        padding-left: calc(12px + var(--safe-area-left));
        padding-right: calc(12px + var(--safe-area-right));
        background: #f0f0f0;
        border-top: 1px solid #ddd;
      }

      .nav-item {
        padding: 8px 16px;
        cursor: pointer;
      }
    </style>
  </head>
  <body>
    <div class="app-container">
      <header class="header">
        <h1>nachocode 앱</h1>
      </header>

      <main class="main-content">
        <h2>Safe Area가 적용된 풀스크린 앱</h2>
        <p>모든 디바이스에서 최적화된 레이아웃을 제공합니다.</p>
      </main>

      <nav class="bottom-nav">
        <div class="nav-item">홈</div>
        <div class="nav-item">검색</div>
        <div class="nav-item">설정</div>
      </nav>
    </div>
  </body>
</html>
```

---

## 주의사항 {#cautions}

### 1. 웹 환경에서는 지원되지 않음

Safe Area 기능은 **네이티브 앱 환경 (Android, iOS)에서만** 동작합니다.  
웹 브라우저에서는 Safe Area 값을 조회할 수 없으므로, 환경 체크를 통해 네이티브 앱에서만 적용하도록 구현하세요.

```javascript
// 네이티브 앱 환경에서만 Safe Area 적용
if (Nachocode.env.isApp()) {
  const safeArea = await Nachocode.device.getSafeAreaInsets();
  // Safe Area 처리
}
```

---

### 2. 단위는 포인트(pt)

Safe Area Insets 값은 **포인트(pt) 단위**로 제공됩니다.  
CSS에 적용 시 별도의 변환 없이 `pt` 단위 그대로 사용하면 됩니다.

```css
/* 올바른 사용법 */
.header {
  padding-top: var(--safe-area-top); /* pt 단위 그대로 사용 */
}
```

---

### 3. 시스템 바 활성화 시에는 불필요

nachocode 시스템 바를 사용하는 경우, **이미 Safe Area가 자동으로 처리**되므로 별도의 Safe Area 처리가 필요하지 않습니다.  
시스템 바를 비활성화하고 풀스크린 모드로 앱을 사용할 때만 Safe Area 처리가 필요합니다.

---

### 4. 디바이스별 테스트 필수

Safe Area는 디바이스마다 다를 수 있으므로, **다양한 디바이스에서 테스트**하는 것이 중요합니다.

#### 테스트 권장 디바이스

- **iOS**: iPhone X 이상 (노치 있는 기기), iPhone 14 Pro 이상 (다이나믹 아일랜드)
- **Android**: 노치/펀치홀이 있는 기기, 네비게이션 바가 있는 기기

---

## 릴리즈 정보 {#releases}

Safe Area 기능은 다음 버전부터 지원됩니다.

### SDK

- **iOS 지원**: <BadgeWithVersion type="SDK" version="v1.8.0" link="/docs/releases/v1/sdk/release-v-1-8-0" />
- **Android 지원 추가**: <BadgeWithVersion type="SDK" version="v1.10.5" link="/docs/releases/v1/sdk/release-v-1-10-5" />

### App Source

- **CSS 변수 자동 주입**: <BadgeWithVersion type="Android" version="v1.10.12" link="/docs/releases/v1/app-source/android/release-v-1-10-12" /> <BadgeWithVersion type="iOS" version="v1.10.12" link="/docs/releases/v1/app-source/ios/release-v-1-10-12" />

---

:::tip 기술 지원
nachocode 팀은 여러분의 성공적인 프로젝트 구현을 위해 항상 도움을 준비하고 있습니다.  
Safe Area 처리와 관련된 기술적인 질문이나 피드백이 있다면 언제든지 [**support@nachocode.io**](mailto:support@nachocode.io)에 **이메일**을 보내주세요.
:::
