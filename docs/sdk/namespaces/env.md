---
description: nachocode SDK의 `env` 네임스페이스는 SDK의 버전 정보, 실행 환경(Web/App), 샌드박스 모드 여부 등을 조회할 수 있는 기능을 제공합니다.
keywords:
  [
    웹뷰 웹 구분,
    웹앱 UI 구분,
    앱 실행 환경,
    환경 구분,
    웹앱 UX 구분,
    nachocode 실행 환경,
  ]
image: /img/docs/thumbnails/SDK/environment.svg
---

# 환경 (`env`)

import { BadgeWithVersion } from '@site/src/components/svg/badge-with-version';
import { ThumbnailImage } from '@site/src/components/common/image/thumbnail-image';

<ThumbnailImage src='/img/docs/thumbnails/SDK/environment.svg'/>

> 🚀 **추가된 버전 :** <BadgeWithVersion type="SDK" version="v1.0.0" link="/docs/releases/v1/sdk/release-v-1-0-0" /> <BadgeWithVersion type="Android" version="v1.0.0" link="/docs/releases/v1/app-source/android/release-v-1-0-0" /> <BadgeWithVersion type="iOS" version="v1.0.0" link="/docs/releases/v1/app-source/ios/release-v-1-0-0" />  
> 🔔 **최신화 일자:** 2025-07-16

## **개요** {#overview}

`env` 네임스페이스는 **nachocode SDK의 현재 실행 환경을 관리하는 기능**을 제공합니다.

현재 SDK 버전, **애플리케이션 실행 환경**(Web/App), **샌드박스 모드 여부** 등을 확인할 수 있으며, SDK 초기화 여부도 확인할 수 있습니다.

---

## **타입 정의** {#types}

### **`VersionString`** {#version-string}

nachocode에서 표기하는 버전을 표현하는 문자열 형식의 타입입니다.

```typescript
export declare type VersionString = `${number}.${number}.${number}`;
```

### **`RunningEnvironment`** {#running-environment}

- _since :_ <BadgeWithVersion type="SDK" version="v1.0.0" link="/docs/releases/v1/sdk/release-v-1-0-0" />

애플리케이션 실행 환경을 나타내는 열거형(enum)입니다.

```typescript
const RUNNING_ENVIRONMENTS = {
  WEB: 'web',
  APP: 'app',
} as const;
```

```typescript
export declare type RunningEnvironment =
  (typeof RUNNING_ENVIRONMENTS)[keyof typeof RUNNING_ENVIRONMENTS];
```

| 값    | 설명                                                    |
| ----- | ------------------------------------------------------- |
| `web` | 웹 애플리케이션에서 실행됨 (`browser`)                  |
| `app` | 네이티브 애플리케이션에서 실행됨 (`Android` 또는 `iOS`) |

---

### **`CurrentEnvironment`** {#current-environment}

- _since :_ <BadgeWithVersion type="SDK" version="v1.0.0" link="/docs/releases/v1/sdk/release-v-1-0-0" />

현재 애플리케이션 환경을 나타내는 타입입니다.

```typescript
export declare type CurrentEnvironment = {
  deviceType: device.DeviceType;
  logger: boolean;
  runningEnv: RunningEnvironment;
  sandbox: boolean;
  sdkVersion: VersionString;
  srcVersion: VersionString;
};
```

| 필드         | 타입                                                  | 설명                                       |
| ------------ | ----------------------------------------------------- | ------------------------------------------ |
| `deviceType` | [`Nachocode.device.DeviceType`](./device#device-type) | 현재 디바이스 유형                         |
| `logger`     | `boolean`                                             | 로거 사용 여부 (`true` / `false`)          |
| `runningEnv` | [`RunningEnvironment`](#running-environment)          | 현재 실행 환경 (`web` / `app`)             |
| `sandbox`    | `boolean`                                             | 샌드박스 서버 사용 여부 (`true` / `false`) |
| `sdkVersion` | [`VersionString`](#version-string)                    | 현재 SDK 버전                              |
| `srcVersion` | [`VersionString`](#version-string)                    | 현재 앱 소스 버전                          |

---

### **`EnvironmentOptions`** {#environment-options}

- _since :_ <BadgeWithVersion type="SDK" version="v1.0.0" link="/docs/releases/v1/sdk/release-v-1-0-0" />

애플리케이션 환경 옵션을 나타내는 타입입니다.

```typescript
export declare type EnvironmentOptions = {
  sandbox?: boolean;
  logger?: boolean;
};
```

| 필드      | 타입      | 설명                    |
| --------- | --------- | ----------------------- |
| `sandbox` | `boolean` | 샌드박스 서버 사용 여부 |
| `logger`  | `boolean` | 로거 사용 여부          |

---

## **메서드 목록** {#method-list}

| 메서드                                             | 설명                                                   | 추가된 버전                                                                                   |
| -------------------------------------------------- | ------------------------------------------------------ | --------------------------------------------------------------------------------------------- |
| [`getAppSourceVersion()`](#get-app-source-version) | 현재 애플리케이션 소스 버전을 반환합니다.              | <BadgeWithVersion type="SDK" version="v1.2.0" link="/docs/releases/v1/sdk/release-v-1-2-0" /> |
| [`getCurrentEnv()`](#get-current-env)              | 현재 애플리케이션 환경을 반환합니다.                   | <BadgeWithVersion type="SDK" version="v1.0.0" link="/docs/releases/v1/sdk/release-v-1-0-0" /> |
| [`getRunningEnv()`](#get-running-env)              | 현재 실행 환경을 반환합니다.                           | <BadgeWithVersion type="SDK" version="v1.0.0" link="/docs/releases/v1/sdk/release-v-1-0-0" /> |
| [`getSDKVersion()`](#get-sdk-version)              | 현재 SDK 버전을 반환합니다.                            | <BadgeWithVersion type="SDK" version="v1.0.0" link="/docs/releases/v1/sdk/release-v-1-0-0" /> |
| [`isApp()`](#is-app)                               | 애플리케이션이 네이티브 앱에서 실행 중인지 확인합니다. | <BadgeWithVersion type="SDK" version="v1.0.0" link="/docs/releases/v1/sdk/release-v-1-0-0" /> |
| [`isInitialized()`](#is-initialized)               | SDK가 초기화되었는지 여부를 확인합니다.                | <BadgeWithVersion type="SDK" version="v1.0.0" link="/docs/releases/v1/sdk/release-v-1-0-0" /> |
| [`isUsingSandbox()`](#is-using-sandbox)            | 현재 샌드박스 서버를 사용 중인지 확인합니다.           | <BadgeWithVersion type="SDK" version="v1.0.0" link="/docs/releases/v1/sdk/release-v-1-0-0" /> |
| [`isWeb()`](#is-web)                               | 애플리케이션이 웹 환경에서 실행 중인지 확인합니다.     | <BadgeWithVersion type="SDK" version="v1.0.0" link="/docs/releases/v1/sdk/release-v-1-0-0" /> |

---

## **메서드 상세** {#method-details}

### **`getAppSourceVersion(): VersionString`** {#get-app-source-version}

- _since :_ <BadgeWithVersion type="SDK" version="v1.2.0" link="/docs/releases/v1/sdk/release-v-1-2-0" />

#### 설명 {#get-app-source-version-summary}

현재 실행 중인 앱의 **소스 코드 버전**을 반환합니다.  
nachocode에서 제공하는 앱 소스 코드의 버전을 의미하며, SDK 버전과 다를 수 있으며 플랫폼(Android, iOS) 별로 다를 수도 있습니다.

:::tip 앱소스란?
➡️ [**nachocode 앱소스 가이드** 보러가기](/docs/guide/app-source)
:::

:::warning 주의
**SDK 버전보다 앱 소스 버전이 낮을 경우 SDK 일부 기능 사용이 제한**됩니다.
:::

#### 반환 값 {#get-app-source-version-returns}

| 타입                               | 설명                   |
| ---------------------------------- | ---------------------- |
| [`VersionString`](#version-string) | nachocode 앱 소스 버전 |

#### 사용 예제 {#get-app-source-version-examples}

```javascript
const currentVersion = Nachocode.env.getAppSourceVersion();

console.log(`앱 소스 버전: ${appSourceVersion}`); // ex. "1.6.0"
```

---

### **`getCurrentEnv(): CurrentEnvironment`** {#get-current-env}

- _since :_ <BadgeWithVersion type="SDK" version="v1.0.0" link="/docs/releases/v1/sdk/release-v-1-0-0" />

#### 설명 {#get-current-env-summary}

현재 애플리케이션의 **환경 정보(디바이스 타입, 실행 환경, SDK 버전 등)를 반환**합니다.

#### 반환 값 {#get-current-env-returns}

| 타입                                         | 설명                        |
| -------------------------------------------- | --------------------------- |
| [`CurrentEnvironment`](#current-environment) | 현재 애플리케이션 환경 객체 |

#### 사용 예제 {#get-current-env-examples}

```javascript
const currentEnv = Nachocode.env.getCurrentEnv();

console.log(currentEnv); // ex. { deviceType: 'iOS', logger: false, runningEnv: 'app', sandbox: false, sdkVersion: "1.5.0", srcVersion: "1.5.0" }
```

---

### **`getRunningEnv(): RunningEnvironment`** {#get-running-env}

- _since :_ <BadgeWithVersion type="SDK" version="v1.0.0" link="/docs/releases/v1/sdk/release-v-1-0-0" />

#### 설명 {#get-running-env-summary}

현재 앱이 실행 중인 환경이 **웹(`web`) 환경인지, 네이티브 앱(`app`) 환경인지 확인**할 수 있습니다.

#### 반환 값 {#get-running-env-returns}

| 타입                                         | 설명                           |
| -------------------------------------------- | ------------------------------ |
| [`RunningEnvironment`](#running-environment) | 현재 실행 환경 (`web` / `app`) |

#### 사용 예제 {#get-running-env-examples}

```javascript
const runningEnv = Nachocode.env.getRunningEnv(); // 'web' | 'app'
console.log(`현재 실행 환경: ${runningEnv}`); // "app" 또는 "web"
```

---

### **`getSDKVersion(): VersionString`** {#get-sdk-version}

- _since :_ <BadgeWithVersion type="SDK" version="v1.0.0" link="/docs/releases/v1/sdk/release-v-1-0-0" />

#### 설명 {#get-sdk-version-summary}

현재 nachocode SDK의 **버전 정보를 반환**합니다.

#### 반환 값 {#get-sdk-version-returns}

| 타입                               | 설명          |
| ---------------------------------- | ------------- |
| [`VersionString`](#version-string) | SDK 버전 정보 |

#### 사용 예제 {#get-sdk-version-examples}

```javascript
const sdkVersion = Nachocode.env.getSDKVersion();
console.log(`nachocode SDK 버전: ${sdkVersion}`); // ex. "1.6.0"
```

---

### **`isApp(): boolean`** {#is-app}

- _since :_ <BadgeWithVersion type="SDK" version="v1.0.0" link="/docs/releases/v1/sdk/release-v-1-0-0" />

#### 설명 {#is-app-summary}

애플리케이션이 **네이티브 앱 환경(Android/iOS)에서 실행 중인지 확인**하여 여부를 반환합니다.  
웹과 앱에서의 **실행 환경을 구분하여 UI, UX에 차이**를 주도록 구현할 수 있습니다.

:::tip 활용 팁
앱 실행 환경일 경우, 일부 UI를 숨기거나 다른 UI를 보여주는식으로 활용하여 사용자에게 더 좋은 UX를 제공 할 수 있습니다.
:::

#### 반환 값 {#is-app-returns}

| 타입      | 설명                                          |
| --------- | --------------------------------------------- |
| `boolean` | 네이티브 앱 실행 여부 반환 (`true` / `false`) |

#### 사용 예제 {#is-app-examples}

```javascript
if (Nachocode.env.isApp()) {
  console.log('현재 네이티브 앱에서 실행 중입니다.');
  // 앱 환경에서만 동작할 로직을 작성합니다.
}
```

---

### **`isInitialized(): boolean`** {#is-initialized}

- _since :_ <BadgeWithVersion type="SDK" version="v1.0.0" link="/docs/releases/v1/sdk/release-v-1-0-0" />

#### 설명 {#is-initialized-summary}

**nachocode SDK**가 정상적으로 초기화되었는지 여부를 반환합니다.

#### 반환 값 {#is-initialized-returns}

| 타입      | 설명                               |
| --------- | ---------------------------------- |
| `boolean` | SDK 초기화 여부 (`true` / `false`) |

#### 사용 예제 {#is-initialized-examples}

```javascript
if (Nachocode.env.isInitialized()) {
  // nachocode SDK가 초기화 되었을 때만 실행 할 로직을 작성합니다.
} else {
  // SDK가 초기화 되지 않았다면 초기화를 시도합니다.
  Nachocode.initAsync('your_api_key_here');
}
```

---

### **`isUsingSandbox(): boolean`** {#is-using-sandbox}

- _since :_ <BadgeWithVersion type="SDK" version="v1.0.0" link="/docs/releases/v1/sdk/release-v-1-0-0" />

#### 설명 {#is-using-sandbox-summary}

현재 애플리케이션이 **샌드박스 환경에서 실행 중인지 여부를 반환**합니다.

#### 반환 값 {#is-using-sandbox-returns}

| 타입      | 설명                             |
| --------- | -------------------------------- |
| `boolean` | 샌드박스 여부 (`true` / `false`) |

#### 사용 예제 {#is-using-sandbox-examples}

```javascript
console.log(Nachocode.env.isUsingSandbox()); // true | false
```

```javascript
if (Nachocode.env.isUsingSandbox()) {
  // Sandbox 서버를 사용 중일 때만 실행할 로직을 작성합니다.
  console.log('현재 샌드박스 환경에서 실행 중입니다.');
}
```

---

### **`isWeb(): boolean`** {#is-web}

- _since :_ <BadgeWithVersion type="SDK" version="v1.0.0" link="/docs/releases/v1/sdk/release-v-1-0-0" />

#### 설명 {#is-web-summary}

현재 애플리케이션 실행 환경이 **웹 환경인지 여부를 반환**합니다.
웹과 앱에서의 실행 환경을 구분하여 UI, UX에 차이를 주도록 구현할 수 있습니다.

:::tip 활용 팁
웹 실행 환경일 경우, 앱 설치 유도 팝업을 노출하는 코드를 작성하여 사용자의 앱 참여율을 높일 수 있습니다.
:::

#### 반환 값 {#is-web-returns}

| 타입      | 설명                            |
| --------- | ------------------------------- |
| `boolean` | 웹 실행 여부 (`true` / `false`) |

#### 사용 예제 {#is-web-examples}

```javascript
if (Nachocode.env.isWeb()) {
  console.log('현재 웹 애플리케이션에서 실행 중입니다.');
  // 웹 환경에서만 동작할 로직을 작성합니다.
}
```

---
