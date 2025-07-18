---
description: nachocode SDK의 tabbar 네임스페이스를 통해 앱 내 탭바의 표시 여부를 동적으로 관리하거나, 특정 탭으로 이동하는 사용자 인터페이스를 효과적으로 제어할 수 있습니다.
keywords:
  [
    탭바,
    탭 바,
    네비게이션 바,
    웹뷰 탭바,
    네이티브 탭바,
    tabbar,
    tab bar,
    navigation bar,
    WebView tabbar,
    native tab bar,
    native navigation bar,
  ]
---

# 탭바 (`tabbar`)

import { BadgeWithVersion } from '@site/src/components/svg/badge-with-version';

> 🚀 **추가된 버전 :** <BadgeWithVersion type="SDK" version="v1.1.0" link="/docs/releases/v1/sdk/release-v-1-1-0" /> <BadgeWithVersion type="Android" version="v1.1.0" link="/docs/releases/v1/app-source/android/release-v-1-1-0" /> <BadgeWithVersion type="iOS" version="v1.1.0" link="/docs/releases/v1/app-source/ios/release-v-1-1-0" />  
> 🔔 **최신화 일자:** 2025-07-18

## **개요** {#overview}

`tabbar` 네임스페이스는 **앱 내 탭바(Tab Bar)의 표시 여부와 특정 탭으로의 전환** 등을 제어하는 기능을 제공합니다.  
이를 통해 **사용자 인터페이스를 동적으로 관리**할 수 있습니다.

---

### **필수 선행 작업** {#prerequisite}

nachocode SDK로 **탭바 기능**을 사용하기 위해서는 nachocode 대시보드에서 **탭바가 먼저 등록된 후 빌드된 경우에만** 작동합니다.

:::info 탭바 유저 가이드
➡️ [탭바 유저 가이드 보러가기](https://docs.nachocode.io/ko/articles/%ED%83%AD-%EB%B0%94-51f41519)
:::

---

## **메서드 목록** {#method-list}

| 메서드                      | 설명                             | 추가된 버전                                                                                   |
| --------------------------- | -------------------------------- | --------------------------------------------------------------------------------------------- |
| [`moveTo(index)`](#move-to) | 특정 인덱스의 탭으로 전환합니다. | <BadgeWithVersion type="SDK" version="v1.1.0" link="/docs/releases/v1/sdk/release-v-1-1-0" /> |
| [`show()`](#show)           | 탭바를 화면에 다시 표시합니다.   | <BadgeWithVersion type="SDK" version="v1.1.0" link="/docs/releases/v1/sdk/release-v-1-1-0" /> |
| [`hide()`](#hide)           | 탭바를 화면에서 숨깁니다.        | <BadgeWithVersion type="SDK" version="v1.1.0" link="/docs/releases/v1/sdk/release-v-1-1-0" /> |

---

## **메서드 상세** {#method-details}

### **`moveTo(index: number): void`** {#move-to}

- _since :_ <BadgeWithVersion type="SDK" version="v1.1.0" link="/docs/releases/v1/sdk/release-v-1-1-0" />

:::warning 주의
_[필수 선행 작업](#prerequisite)이 완료되어야 사용할 수 있습니다._
:::

#### 설명 {#move-to-summary}

`index`에 해당하는 탭으로 전환합니다.  
해당 탭에 등록된 주소로 페이지를 이동합니다.

#### 매개변수 {#move-to-parameters}

| 이름    | 타입     | 필수 여부 | 설명               |
| ------- | -------- | --------- | ------------------ |
| `index` | `number` | ✅        | 전환할 탭의 인덱스 |

#### 반환 값 {#move-to-returns}

해당 메서드는 반환 값을 가지지 않습니다.

#### 사용 예제 {#move-to-examples}

```javascript
// 첫 번째 탭으로 탭을 전환합니다.
Nachocode.tabbar.moveTo(0);

// 두 번째 탭으로 탭을 전환합니다.
Nachocode.tabbar.moveTo(1);
```

---

### **`show(): void`** {#show}

- _since :_ <BadgeWithVersion type="SDK" version="v1.1.0" link="/docs/releases/v1/sdk/release-v-1-1-0" />

:::warning 주의
_[필수 선행 작업](#prerequisite)이 완료되어야 사용할 수 있습니다._
:::

#### 설명 {#show-summary}

현재 숨겨진 탭바를 다시 화면에 표시합니다.

#### 반환 값 {#show-returns}

해당 메서드는 반환 값을 가지지 않습니다.

#### 사용 예제 {#show-examples}

```javascript
// 숨겨진 탭바를 다시 보이게 합니다.
Nachocode.tabbar.show();
```

---

### **`hide(): void`** {#hide}

- _since :_ <BadgeWithVersion type="SDK" version="v1.1.0" link="/docs/releases/v1/sdk/release-v-1-1-0" />

:::warning 주의
_[필수 선행 작업](#prerequisite)이 완료되어야 사용할 수 있습니다._
:::

#### 설명 {#hide-summary}

현재 화면에 표시된 탭바를 숨깁니다.

#### 반환 값 {#hide-returns}

해당 메서드는 반환 값을 가지지 않습니다.

#### 사용 예제 {#hide-examples}

```javascript
// 탭바를 화면에서 숨깁니다.
Nachocode.tabbar.hide();
```

---

## **추가 정보** {#tabbar-additional-info}

- 탭바 기능을 사용하려면 **nachocode 대시보드에서 탭바 설정을 완료한 후 빌드**해야 합니다.
- `moveTo` 메서드의 `index` 값은 **등록된 탭의 순서**와 일치해야 합니다. 잘못된 인덱스 값은 무시될 수 있습니다.

---
