---
sidebar_position: 8
description: nachocode SDK의 `env` 네임스페이스는 SDK의 버전 정보, 실행 환경(Web/App), 샌드박스 모드 여부 등을 조회할 수 있는 기능을 제공합니다.
---

# 환경 (`env`)

> 🔔 **최신화 일자:** 2025-02-20

## **개요**

`env` 네임스페이스는 **nachocode SDK의 현재 실행 환경을 관리하는 기능**을 제공합니다.  
현재 SDK 버전, **애플리케이션 실행 환경**(Web/App), **샌드박스 모드 여부** 등을 확인할 수 있으며, SDK 초기화 여부도 확인할 수 있습니다.

---

## **타입 정의**

### **`RunningEnvironment`**

애플리케이션 실행 환경을 나타내는 열거형(enum)입니다.

| 값    | 설명                                                    |
| ----- | ------------------------------------------------------- |
| `web` | 웹 애플리케이션에서 실행됨 (`browser`)                  |
| `app` | 네이티브 애플리케이션에서 실행됨 (`Android` 또는 `iOS`) |

---

### **`CurrentEnvironment`**

현재 애플리케이션 환경을 나타내는 타입입니다.

| 필드         | 타입                          | 설명                                       |
| ------------ | ----------------------------- | ------------------------------------------ |
| `deviceType` | `Nachocode.device.DeviceType` | 현재 디바이스 유형                         |
| `logger`     | `boolean`                     | 로거 사용 여부 (`true` / `false`)          |
| `runningEnv` | `RunningEnvironment`          | 현재 실행 환경 (`web` / `app`)             |
| `sandbox`    | `boolean`                     | 샌드박스 서버 사용 여부 (`true` / `false`) |
| `sdkVersion` | `string`                      | 현재 SDK 버전                              |
| `srcVersion` | `string`                      | 현재 앱 소스 버전                          |

---

### **`EnvironmentOptions`**

애플리케이션 환경 옵션을 나타내는 타입입니다.

| 필드      | 타입      | 설명                    |
| --------- | --------- | ----------------------- |
| `sandbox` | `boolean` | 샌드박스 서버 사용 여부 |
| `logger`  | `boolean` | 로거 사용 여부          |

---

## **메서드 목록**

| 메서드                                                 | 설명                                                   | 추가된 버전 |
| ------------------------------------------------------ | ------------------------------------------------------ | ----------- |
| [`getAppSourceVersion()`](#getappsourceversion-string) | 현재 애플리케이션 소스 버전을 반환합니다.              | ver.1.2.0   |
| [`getCurrentEnv()`](#getcurrentenv-currentenvironment) | 현재 애플리케이션 환경을 반환합니다.                   | ver.1.0.0   |
| [`getRunningEnv()`](#getrunningenv-runningenvironment) | 현재 실행 환경을 반환합니다.                           | ver.1.0.0   |
| [`getSDKVersion()`](#getsdkversion-string)             | 현재 SDK 버전을 반환합니다.                            | ver.1.0.0   |
| [`isApp()`](#isapp-boolean)                            | 애플리케이션이 네이티브 앱에서 실행 중인지 확인합니다. | ver.1.0.0   |
| [`isInitialized()`](#isinitialized-boolean)            | SDK가 초기화되었는지 여부를 확인합니다.                | ver.1.0.0   |
| [`isUsingSandbox()`](#isusingsandbox-boolean)          | 현재 샌드박스 서버를 사용 중인지 확인합니다.           | ver.1.0.0   |
| [`isWeb()`](#isweb-boolean)                            | 애플리케이션이 웹 환경에서 실행 중인지 확인합니다.     | ver.1.0.0   |

---

## **메서드 상세**

### **`getAppSourceVersion(): string`**

- _since ver.1.2.0_

#### 설명 (`getAppSourceVersion`)

현재 실행 중인 앱의 **소스 코드 버전**을 반환합니다.  
nachocode에서 제공하는 앱 소스 코드의 버전을 의미하며, SDK 버전과 다를 수 있습니다.

> ⚠️ 참고: SDK 버젼보다 앱 소스 버젼이 낮을 경우 SDK 일부 기능 사용이 제한됩니다.

#### 반환 값 (`getAppSourceVersion`)

| 타입     | 설명                   |
| -------- | ---------------------- |
| `string` | nachocode 앱 소스 버전 |

#### 사용 예제 (`getAppSourceVersion`)

```javascript
const currentVersion = Nachocode.env.getAppSourceVersion();

console.log(`앱 소스 버전: ${appSourceVersion}`); // ex. "1.4.0"
```

---

### **`getCurrentEnv(): CurrentEnvironment`**

- _since ver.1.0.0_

#### 설명 (`getCurrentEnv`)

현재 애플리케이션의 **환경 정보(디바이스 타입, 실행 환경, SDK 버전 등)를 반환**합니다.

#### 반환 값 (`getCurrentEnv`)

| 타입                 | 설명                        |
| -------------------- | --------------------------- |
| `CurrentEnvironment` | 현재 애플리케이션 환경 객체 |

#### 사용 예제 (`getCurrentEnv`)

```javascript
const currentEnv = Nachocode.env.getCurrentEnv();

console.log(currentEnv); // ex. { deviceType: 'iOS', logger: false, runningEnv: 'app', sandbox: false, sdkVersion: "1.4.0", srcVersion: "1.4.0" }
```

---

### **`getRunningEnv(): RunningEnvironment`**

- _since ver.1.0.0_

#### 설명 (`getRunningEnv`)

현재 앱이 실행 중인 환경이 **웹(`web`) 환경인지, 네이티브 앱(`app`) 환경인지 확인**할 수 있습니다.

#### 반환 값 (`getRunningEnv`)

| 타입                 | 설명                           |
| -------------------- | ------------------------------ |
| `RunningEnvironment` | 현재 실행 환경 (`web` / `app`) |

#### 사용 예제 (`getRunningEnv`)

```javascript
const runningEnv = Nachocode.env.getRunningEnv(); // 'web' | 'app'
console.log(`현재 실행 환경: ${runningEnv}`); // "app" 또는 "web"
```

---

### **`getSDKVersion(): string`**

- _since ver.1.0.0_

#### 설명 (`getSDKVersion`)

현재 nachocode SDK의 **버전 정보를 반환**합니다.

#### 반환 값 (`getSDKVersion`)

| 타입     | 설명          |
| -------- | ------------- |
| `string` | SDK 버전 정보 |

#### 사용 예제 (`getSDKVersion`)

```javascript
const sdkVersion = Nachocode.env.getSDKVersion();
console.log(`nachocode SDK 버전: ${sdkVersion}`); // ex. "1.4.0"
```

---

### **`isApp(): boolean`**

- _since ver.1.0.0_

#### 설명 (`isApp`)

애플리케이션이 **네이티브 앱 환경(Android/iOS)에서 실행 중인지 확인**하여 여부를 반환합니다.

#### 반환 값 (`isApp`)

| 타입      | 설명                                          |
| --------- | --------------------------------------------- |
| `boolean` | 네이티브 앱 실행 여부 반환 (`true` / `false`) |

#### 사용 예제 (`isApp`)

```javascript
if (Nachocode.env.isApp()) {
  console.log('현재 네이티브 앱에서 실행 중입니다.');
  // 앱 환경에서만 동작할 로직을 작성합니다.
}
```

---

### **`isInitialized(): boolean`**

- _since ver.1.0.0_

#### 설명 (`isInitialized`)

**nachocode SDK**가 정상적으로 초기화되었는지 여부를 반환합니다.

#### 반환 값 (`isInitialized`)

| 타입      | 설명                               |
| --------- | ---------------------------------- |
| `boolean` | SDK 초기화 여부 (`true` / `false`) |

#### 사용 예제 (`isInitialized`)

```javascript
if (Nachocode.env.isInitialized()) {
  // nachocode SDK가 초기화 되었을 때만 실행 할 로직을 작성합니다.
} else {
  // SDK가 초기화 되지 않았다면 초기화를 시도합니다.
  Nachocode.init('your_api_key_here');
}
```

---

### **`isUsingSandbox(): boolean`**

- _since ver.1.0.0_

#### 설명 (`isUsingSandbox`)

현재 애플리케이션이 **샌드박스 환경에서 실행 중인지 여부를 반환**합니다.

#### 반환 값 (`isUsingSandbox`)

| 타입      | 설명                             |
| --------- | -------------------------------- |
| `boolean` | 샌드박스 여부 (`true` / `false`) |

#### 사용 예제 (`isUsingSandbox`)

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

### **`isWeb(): boolean`**

- _since ver.1.0.0_

#### 설명 (`isWeb`)

현재 애플리케이션 실행 환경이 **웹 환경인지 여부를 반환**합니다.

#### 반환 값 (`isWeb`)

| 타입      | 설명                            |
| --------- | ------------------------------- |
| `boolean` | 웹 실행 여부 (`true` / `false`) |

#### 사용 예제 (`isWeb`)

```javascript
if (Nachocode.env.isWeb()) {
  console.log('현재 웹 애플리케이션에서 실행 중입니다.');
  // 웹 환경에서만 동작할 로직을 작성합니다.
}
```

---
