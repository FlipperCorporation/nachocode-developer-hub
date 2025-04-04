---
sidebar_position: 1
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
---

# 애플리케이션 (`app`)

> 🔔 **최신화 일자:** 2025-02-20

## 개요

`app` 네임스페이스는 앱의 **이름, 버전, 패키지명** 등 주요 정보를 조회하거나, **앱의 최초 실행 여부를 확인**하는 기능들을 제공합니다.

---

## 메서드 목록

| 메서드                                                                                    | 설명                                                   | 추가된 버전 |
| ----------------------------------------------------------------------------------------- | ------------------------------------------------------ | ----------- |
| [`checkFirstLaunch(callback)`](#checkfirstlaunchcallback-isfirstlaunch-boolean--any-void) | 앱이 최초 실행인지 여부를 확인합니다.                  | ver.1.4.0   |
| [`getAppName()`](#getappname-string)                                                      | 앱의 이름을 가져옵니다.                                | ver.1.0.0   |
| [`getAppKey()`](#getappkey-string)                                                        | nachocode 플랫폼에서 발급한 앱의 고유 키를 반환합니다. | ver.1.0.0   |
| [`getCurrentAppVersion()`](#getcurrentappversion-string)                                  | 현재 설치된 앱 버전을 반환합니다.                      | ver.1.0.0   |
| [`getPackageName()`](#getpackagename-string)                                              | 앱의 패키지명을 가져옵니다.                            | ver.1.0.0   |

---

## 메서드 상세

### **`checkFirstLaunch(callback: (isFirstLaunch: boolean) => any): void`**

- _since ver.1.4.0_

#### 설명 (`checkFirstLaunch`)

앱이 **최초 실행인지 여부**를 확인합니다.
이를 통해 **온보딩 화면을 최초 실행 시에만 표시**하거나, **특정 설정을 처음 실행 시에만 적용**하는 등의 로직을 구현할 수 있습니다.

#### 매개변수 (`checkFirstLaunch`)

| 이름       | 타입                              | 필수 여부 | 설명                                                            |
| ---------- | --------------------------------- | --------- | --------------------------------------------------------------- |
| `callback` | `(isFirstLaunch: boolean) => any` | ✅        | `true`(최초 실행) 또는 `false`(기존 실행)를 전달 받는 콜백 함수 |

#### 반환 값 (`checkFirstLaunch`)

해당 메서드는 반환 값을 가지지 않으며, 결과는 `callback`을 통해 비동기적으로 제공됩니다.

#### 사용 예제 (`checkFirstLaunch`)

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

### **`getAppName(): string`**

- _since ver.1.0.0_

#### 설명 (`getAppName`)

현재 앱의 **이름**을 반환합니다.  
이 값은 nachocode 대시보드에서 설정한 앱 이름과 동일합니다.

#### 반환 값 (`getAppName`)

| 타입     | 설명                    |
| -------- | ----------------------- |
| `string` | 앱의 이름을 반환합니다. |

#### 사용 예제 (`getAppName`)

```javascript
const appName = Nachocode.app.getAppName();
console.log(`앱 이름: ${appName}`);
```

---

### **`getAppKey(): string`**

- _since ver.1.0.0_

#### 설명 (`getAppKey`)

**앱 프로젝트를 식별하는 고유 키**를 반환합니다.  
이 키는 nachocode 서비스에서 앱을 구별하는 데 사용됩니다.

#### 반환 값 (`getAppKey`)

| 타입     | 설명                                          |
| -------- | --------------------------------------------- |
| `string` | nachocode에서 발급한 앱의 고유 식별 키입니다. |

#### 사용 예제 (`getAppKey`)

```javascript
const appKey = Nachocode.app.getAppKey();
console.log(`앱 키: ${appKey}`); // ex. 'APP-XXXXXXX'
```

---

### **`getCurrentAppVersion(): string`**

#### 설명 (`getCurrentAppVersion`)

사용자의 현재 디바이스에 **설치된 앱의 버전**을 반환합니다.  
이 값은 사용자의 앱 업데이트 상태를 확인하는 용도로 사용할 수 있습니다.

#### 반환 값 (`getCurrentAppVersion`)

| 타입     | 설명                             |
| -------- | -------------------------------- |
| `string` | 설치된 앱의 버전 (예: `"1.0.0"`) |

#### 사용 예제 (`getCurrentAppVersion`)

```javascript
const appVersion = Nachocode.app.getCurrentAppVersion();
console.log(`현재 앱 버전: ${appVersion}`); // ex. "1.0.0"
```

---

### **`getPackageName(): string`**

#### 설명 (`getPackageName`)

현재 실행 중인 앱의 **패키지명**을 반환합니다.  
패키지명은 앱의 고유 식별자로, 일반적으로 `com.nachocode.example` 형식으로 제공됩니다.

#### 반환 값 (`getPackageName`)

| 타입     | 설명                                                    |
| -------- | ------------------------------------------------------- |
| `string` | 애플리케이션의 패키지명 (예: `"com.nachocode.example"`) |

#### 사용 예제 (`getPackageName`)

```javascript
const packageName = Nachocode.app.getPackageName();
console.log(`패키지명: ${packageName}`); // ex. "com.nachocode.example"
```

---
