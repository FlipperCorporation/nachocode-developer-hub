---
description: nachocode SDK의 `app` 네임스페이스는 앱의 이름, 버전, 패키지명 등 앱 정보를 조회하거나 앱의 최초 실행 여부를 확인하는 기능을 제공합니다.
keywords:
  [
    앱 정보 관리,
    앱 버전 관리,
    웹뷰 앱,
    하이브리드 앱,
    네이티브 앱,
    webview app,
    hybrid app,
    native app,
  ]
image: /img/docs/thumbnails/SDK/app.svg
---

# 애플리케이션 (`app`)

![thumbnails](/img/docs/thumbnails/SDK/app.svg)

import { BadgeWithVersion } from '@site/src/components/svg/badge-with-version';

> 🚀 **추가된 버전 :** <BadgeWithVersion type="SDK" version="v1.0.0" link="/docs/releases/v1/sdk/release-v-1-0-0" /> <BadgeWithVersion type="Android" version="v1.0.0" link="/docs/releases/v1/app-source/android/release-v-1-0-0" /> <BadgeWithVersion type="iOS" version="v1.0.0" link="/docs/releases/v1/app-source/ios/release-v-1-0-0" />  
> 🔔 **최신화 일자:** 2025-10-22

## **개요** {#overview}

`app` 네임스페이스는 앱의 **이름, 버전, 패키지명** 등 주요 정보를 조회하거나, **앱의 최초 실행 여부를 확인**하는 기능들을 제공합니다.

---

## **메서드 목록** {#method-list}

| 메서드                                               | 설명                                                   | 추가된 버전                                                                                   |
| ---------------------------------------------------- | ------------------------------------------------------ | --------------------------------------------------------------------------------------------- |
| [`checkFirstLaunch(callback)`](#check-first-launch)  | 앱이 최초 실행인지 여부를 확인합니다.                  | <BadgeWithVersion type="SDK" version="v1.4.0" link="/docs/releases/v1/sdk/release-v-1-4-0" /> |
| [`getAppName()`](#get-app-name)                      | 앱의 이름을 가져옵니다.                                | <BadgeWithVersion type="SDK" version="v1.0.0" link="/docs/releases/v1/sdk/release-v-1-0-0" /> |
| [`getAppKey()`](#get-app-key)                        | nachocode 플랫폼에서 발급한 앱의 고유 키를 반환합니다. | <BadgeWithVersion type="SDK" version="v1.0.0" link="/docs/releases/v1/sdk/release-v-1-0-0" /> |
| [`getCurrentAppVersion()`](#get-current-app-version) | 현재 설치된 앱 버전을 반환합니다.                      | <BadgeWithVersion type="SDK" version="v1.0.0" link="/docs/releases/v1/sdk/release-v-1-0-0" /> |
| [`getPackageName()`](#get-package-name)              | 앱의 패키지명을 가져옵니다.                            | <BadgeWithVersion type="SDK" version="v1.0.0" link="/docs/releases/v1/sdk/release-v-1-0-0" /> |
| [`exitApp()`](#exit-app)                             | 앱을 종료합니다.                                       | <BadgeWithVersion type="SDK" version="v1.8.0" link="/docs/releases/v1/sdk/release-v-1-8-0" /> |

---

## **메서드 상세** {#method-details}

### **`checkFirstLaunch(callback: (isFirstLaunch: boolean) => void): void`** {#check-first-launch}

- _since :_ <BadgeWithVersion type="SDK" version="v1.4.0" link="/docs/releases/v1/sdk/release-v-1-4-0" />

#### 설명 {#check-first-launch-summary}

앱이 **최초 실행인지 여부**를 확인합니다.
이를 통해 **온보딩 화면을 최초 실행 시에만 표시**하거나, **특정 설정을 처음 실행 시에만 적용**하는 등의 로직을 구현할 수 있습니다.

#### 매개변수 {#check-first-launch-parameters}

| 이름       | 타입                               | 필수 여부 | 설명                                                            |
| ---------- | ---------------------------------- | --------- | --------------------------------------------------------------- |
| `callback` | `(isFirstLaunch: boolean) => void` | ✅        | `true`(최초 실행) 또는 `false`(기존 실행)를 전달 받는 콜백 함수 |

#### 반환 값 {#check-first-launch-returns}

해당 메서드는 반환 값을 가지지 않으며, 결과는 `callback`을 통해 비동기적으로 제공됩니다.

#### 사용 예제 {#check-first-launch-examples}

```javascript
Nachocode.app.checkFirstLaunch(isFirstLaunch => {
  if (isFirstLaunch) {
    console.log('앱이 최초로 실행되었습니다.');
    // 온보딩 화면 또는 초기 설정 적용
  } else {
    console.log('앱이 이미 실행된 적이 있습니다.');
  }
});
```

---

### **`getAppName(): string`** {#get-app-name}

- _since :_ <BadgeWithVersion type="SDK" version="v1.0.0" link="/docs/releases/v1/sdk/release-v-1-0-0" />

#### 설명 {#get-app-name-summary}

현재 앱의 **이름**을 반환합니다.  
이 값은 nachocode 대시보드에서 설정한 앱 이름과 동일합니다.

#### 반환 값 {#get-app-name-returns}

| 타입     | 설명                    |
| -------- | ----------------------- |
| `string` | 앱의 이름을 반환합니다. |

#### 사용 예제 {#get-app-name-examples}

```javascript
const appName = Nachocode.app.getAppName();
console.log(`앱 이름: ${appName}`);
```

---

### **`getAppKey(): string`** {#get-app-key}

- _since :_ <BadgeWithVersion type="SDK" version="v1.0.0" link="/docs/releases/v1/sdk/release-v-1-0-0" />

#### 설명 {#get-app-key-summary}

**앱 프로젝트를 식별하는 고유 키**를 반환합니다.  
이 키는 nachocode 서비스에서 앱을 구별하는 데 사용됩니다.

#### 반환 값 {#get-app-key-returns}

| 타입     | 설명                                          |
| -------- | --------------------------------------------- |
| `string` | nachocode에서 발급한 앱의 고유 식별 키입니다. |

#### 사용 예제 {#get-app-key-examples}

```javascript
const appKey = Nachocode.app.getAppKey();
console.log(`앱 키: ${appKey}`); // ex. 'APP-XXXXXXX'
```

---

### **`getCurrentAppVersion(): string`** {#get-current-app-version}

- _since :_ <BadgeWithVersion type="SDK" version="v1.0.0" link="/docs/releases/v1/sdk/release-v-1-0-0" />

#### 설명 {#get-current-app-version-summary}

사용자의 현재 디바이스에 **설치된 앱의 버전**을 반환합니다.  
이 값은 사용자의 앱 업데이트 상태를 확인하는 용도로 사용할 수 있습니다.

#### 반환 값 {#get-current-app-version-returns}

| 타입     | 설명                             |
| -------- | -------------------------------- |
| `string` | 설치된 앱의 버전 (예: `"1.0.0"`) |

#### 사용 예제 {#get-current-app-version-examples}

```javascript
const appVersion = Nachocode.app.getCurrentAppVersion();
console.log(`현재 앱 버전: ${appVersion}`); // ex. "1.0.0"
```

---

### **`getPackageName(): string`** {#get-package-name}

- _since :_ <BadgeWithVersion type="SDK" version="v1.0.0" link="/docs/releases/v1/sdk/release-v-1-0-0" />

#### 설명 {#get-package-name-summary}

현재 실행 중인 앱의 **패키지명**을 반환합니다.  
패키지명은 앱의 고유 식별자로, 일반적으로 `com.nachocode.example` 형식으로 제공됩니다.

#### 반환 값 {#get-package-name-returns}

| 타입     | 설명                                                    |
| -------- | ------------------------------------------------------- |
| `string` | 애플리케이션의 패키지명 (예: `"com.nachocode.example"`) |

#### 사용 예제 {#get-package-name-examples}

```javascript
const packageName = Nachocode.app.getPackageName();
console.log(`패키지명: ${packageName}`); // ex. "com.nachocode.example"
```

---

### **`exitApp(): void`** {#exit-app}

- _since :_ <BadgeWithVersion type="SDK" version="v1.8.0" link="/docs/releases/v1/sdk/release-v-1-8-0" />

#### 설명 {#exit-app-summary}

앱을 **프로그래밍 방식으로 종료**합니다. **사용자가 명시적으로 종료를 선택**했거나 서비스에 필수적인 권한이 허용되지 않은 경우 등 **더 이상 앱을 지속할 수 없는 특정 상황**에서만 신중하게 사용하세요.

:::info 기본 종료 흐름
나쵸코드 Android 앱소스에서는 **루트 화면에서 뒤로가기를 누르면 “ '뒤로' 버튼을 한 번 더 누르면 종료됩니다. ” 안내 → 두 번째 뒤로가기 시 종료**되는 패턴이 **기본 제공**됩니다. 이 기본 동작을 대체하기 위해 `exitApp()`을 사용할 필요는 없습니다.
:::

:::warning 주의사항
이 메서드는 앱을 즉시 종료하므로 사용에 주의가 필요합니다.  
앱 스토어 가이드라인에 따르면 사용자의 명시적인 동의 없이 앱을 종료하는 것은 권장되지 않습니다.

- **Android**: `exitApp()`은 현재 태스크를 최근 앱 목록에서 제거하며 종료합니다.
- **iOS**: 시스템 정책상 정상적인 프로그램적 종료 방식이 없어, **의도적으로 크래시를 발생시켜 종료**합니다. 이 종료는 **크래시 리포트**(App Store Connect/Xcode Organizer, Crashlytics 등)에 집계됩니다. 추가적으로 의도적 크래시는 **크래시율 악화** 및 **심사 반려 리스크**가 있습니다. 상용(스토어) 배포에서는 사용을 지양하세요.

:::

#### 지원 플랫폼 {#exit-app-supported-platforms}

| 플랫폼                                                             | 지원 여부 |
| ------------------------------------------------------------------ | --------- |
| ![Android](https://img.shields.io/badge/Android-gray?logo=android) | ✅        |
| ![iOS](https://img.shields.io/badge/iOS-gray?logo=apple)           | ✅        |
| ![Web](/img/docs/chrome-badge.svg)                                 | ❌        |

#### 반환 값 {#exit-app-returns}

해당 메서드는 반환 값을 가지지 않습니다.

#### 사용 예제 {#exit-app-examples}

```javascript
// 1) 사용자가 '로그아웃 후 닫기'를 명시적으로 선택하는 경우
function handleLogout() {
  // 로그아웃 로직 수행
  clearUserData();

  // 사용자에게 확인 요청
  if (confirm('앱을 종료하시겠습니까?')) {
    Nachocode.app.exitApp();
  }
}
```

```javascript
// 2) 필수 권한 미허용 등 예외 상태: 사유 안내 후 사용자가 종료를 선택
async function cannotProceed(reason) {
  const ok = confirm(
    `${reason}\n\n사유로 앱을 계속 사용할 수 없습니다.\n앱을 종료하시겠습니까?`
  );
  if (ok) {
    Nachocode.app.exitApp();
  }
}
```

---
