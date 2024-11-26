---
sidebar_position: 6
---

# 환경 (`env`)

> SDK의 현재 환경 및 설정을 관리하는 네임스페이스입니다.
> SDK 버전, 실행 환경 (Web/APP), 샌드박스 모드 여부 등을 확인할 수 있습니다.

---

## 타입 정의

### RunningEnvironment

애플리케이션 실행 환경을 나타내는 열거형입니다.

- `web`: 웹 애플리케이션에서 실행 중임을 나타냅니다.
- `app`: 네이티브 애플리케이션에서 실행 중임을 나타냅니다.

---

### CurrentEnvironment

현재 애플리케이션 환경을 나타내는 타입입니다.

- `deviceType: Nachocode.device.DeviceType`: 현재 디바이스 유형입니다.
- `logger: boolean`: 로거 사용 여부입니다.
- `runningEnv: RunningEnvironment`: 현재 실행 환경입니다.
- `sandbox: boolean`: 샌드박스 서버 사용 여부입니다.

---

### EnvironmentOptions

애플리케이션 환경 옵션을 나타내는 타입입니다.

- `sandbox: boolean`: 샌드박스 서버 사용 여부입니다.
- `logger: boolean`: 로거 사용 여부입니다.

---

## 주요 메서드

### `getAppSourceVersion(): string`

현재 앱 소스 버전을 반환합니다.

- 앱 소스 버전이란 Nachocode에서 제공하는 기본 앱 소스코드의 버전을 의미합니다.
- SDK 버젼보다 앱 소스 버젼이 낮을 경우 SDK 일부 기능 사용이 제한됩니다.

```javascript
const currentVersion = Nachocode.env.getAppSourceVersion();

console.log(currentVersion); // ex. 1.3.0
```

---

### `getCurrentEnv(): CurrentEnvironment`

현재 애플리케이션 환경을 반환합니다.

```javascript
const currentEnv = Nachocode.env.getCurrentEnv();

console.log(currentEnv); // ex. { deviceType: 'iOS', logger: false, runningEnv: 'app', sandbox: false }
```

---

### `getRunningEnv(): RunningEnvironment`

현재 실행 중인 환경 (웹 또는 앱)을 반환합니다.

```javascript
const runningEnv = Nachocode.env.getRunningEnv(); // 'web' | 'app'
```

---

### `getSDKVersion(): string`

현재 SDK 버전을 반환합니다.

```javascript
const sdkVersion = Nachocode.env.getSDKVersion(); // ex. '1.3.0'
```

---

### `isApp(): boolean`

애플리케이션이 네이티브 앱에서 실행 중인지 여부를 반환합니다.

```javascript
if (Nachocode.env.isApp()) {
  // 앱 환경에서만 동작할 로직을 작성합니다.
}
```

---

### `isInitialized(): boolean`

**Nachocode SDK**가 초기화되었는지 여부를 반환합니다.

```javascript
if (Nachocode.env.isInitialized()) {
  // Nachocode SDK가 초기화 되었을 때만 실행 할 로직을 작성합니다.
}
```

```javascript
// SDK가 초기화 되지 않았다면 초기화를 시도합니다.
if (!Nachocode.env.isInitialized()) {
  Nachocode.init('your_api_key_here');
}
```

---

### `isUsingSandbox(): boolean`

현재 샌드박스 서버를 사용 중인지 여부를 반환합니다.

```javascript
console.log(Nachocode.env.isUsingSandbox()); // true | false
```

```javascript
if (Nachocode.env.isUsingSandbox()) {
  // Sandbox 서버를 사용 중일 때만 실행할 로직을 작성합니다.
}
```

---

### `isWeb(): boolean`

애플리케이션이 웹 애플리케이션에서 실행 중인지 여부를 반환합니다.

```javascript
if (Nachocode.env.isWeb()) {
  // 웹 환경에서만 동작할 로직을 작성합니다.
}
```

---
