---
sidebar_position: 3
description: nachocode SDK의 `authentication` 네임스페이스는 생체 인증(Biometrics)을 지원하여 앱 내에서 사용자 인증을 안전하고 간편하게 처리할 수 있도록 합니다.
keywords:
  [
    생체 인증,
    바이오 인증,
    안드로이드 지문 인증,
    Android Biometrics,
    Facial Authentication,
    iOS Face ID,
    iOS Touch ID,
    Apple Face ID,
    Apple Touch ID,
    biometric,
    biometrics authentication,
    biometrics login,
  ]
---

# 인증 (`authentication`)

> 🔔 **최신화 일자:** 2025-02-06

## **개요**

`authentication` 네임스페이스는 앱 내 **사용자 인증**과 관련된 기능을 제공합니다.  
이 네임스페이스를 활용하여 **생체 인증(Biometrics) 기능을 사용할 수 있는지 확인**하거나, **생체 인증을 직접 수행**할 수 있습니다.

---

## **타입 정의**

### **`AuthenticationResult`**

인증 결과를 나타내는 타입입니다.

| 필드                 | 타입                                | 설명                                                |
| -------------------- | ----------------------------------- | --------------------------------------------------- |
| `authenticated`      | `boolean`                           | 인증 성공 여부 (`true`: 인증됨, `false`: 인증 실패) |
| `error` (_optional_) | `{ code: string, message: string }` | 인증 실패 시 발생한 오류 코드 및 메시지             |

---

## **메서드 목록**

| 메서드                                                                                                                   | 설명                                                       | 추가된 버전 |
| ------------------------------------------------------------------------------------------------------------------------ | ---------------------------------------------------------- | ----------- |
| [`canUseBiometrics(callback)`](#canusebiometricscallback-available-boolean-error--code-string-message-string---any-void) | 디바이스에서 생체 인증 기능을 사용할 수 있는지 확인합니다. | ver.1.3.0   |
| [`useBiometrics(callback)`](#usebiometricscallback-result-authenticationresult--any-void)                                | 생체 인증 기능을 호출합니다.                               | ver.1.3.0   |

---

## 메서드 상세

### **`canUseBiometrics(callback: (available: boolean, error?: { code: string, message: string }) => any): void`**

- _since ver.1.3.0_

#### 설명 (`canUseBiometrics`)

현재 디바이스에서 **생체 인증(Biometrics) 기능을 사용할 수 있는지 여부**를 반환합니다.  
일부 디바이스에서는 생체 인증 기능이 제공되지 않을 수 있으며, **사용자가 설정에서 해당 기능을 비활성화했을 경우에도 사용이 제한**될 수 있습니다.

#### 매개변수 (`canUseBiometrics`)

| 이름       | 타입                                                                     | 필수 여부 | 설명                                                            |
| ---------- | ------------------------------------------------------------------------ | --------- | --------------------------------------------------------------- |
| `callback` | `(available: boolean, error?: { code: string, message: string }) => any` | ✅        | `true`(사용 가능) 또는 `false`(사용 불가)를 전달 받는 콜백 함수 |

#### 반환 값 (`canUseBiometrics`)

해당 메서드는 반환 값을 가지지 않으며, 결과는 `callback`을 통해 비동기적으로 제공됩니다.

#### 사용 예제 (`canUseBiometrics`)

```javascript
// ex. 디바이스의 생체 인증 사용 가능 여부를 확인합니다.
Nachocode.authentication.canUseBiometrics((available, error) => {
  // 디바이스의 생체 인증 사용 가능 여부가 매개 변수 available에 전달 됩니다.
  if (available) {
    console.log('생체 인증 사용 가능');
  } else {
    // 사용이 불가할 경우, 사유가 error.message에 담겨 전달됩니다.
    console.log(`생체 인증 사용 불가: ${error?.message || '알 수 없는 오류'}`);
  }
});
```

---

### **`useBiometrics(callback: (result: AuthenticationResult) => any): void`**

- _since ver.1.3.0_

#### 설명 (`useBiometrics`)

디바이스의 **생체 인증(Biometrics) 기능을 실행**합니다.  
사용자가 인증을 성공하면 `authenticated: true` 값을 반환하며, **인증이 실패하거나 중단될 경우 `error` 객체를 포함하여 실패 원인을 제공합니다.**

#### 매개변수 (`useBiometrics`)

| 이름       | 타입                                    | 필수 여부 | 설명                            |
| ---------- | --------------------------------------- | --------- | ------------------------------- |
| `callback` | `(result: AuthenticationResult) => any` | ✅        | 인증 결과를 전달 받는 콜백 함수 |

#### 반환 값 (`useBiometrics`)

해당 메서드는 반환 값을 가지지 않으며, 결과는 `callback`을 통해 비동기적으로 제공됩니다.

#### 사용 예제 (`useBiometrics`)

```javascript
// 네이티브 생체 인증 기능을 호출 합니다.
Nachocode.authentication.useBiometrics(result => {
  const message =
    `인증 여부 : ${result.authenticated ? '인증됨' : '인증안됨'}\n` +
    `상태 코드 : ${result.error?.code ?? '없음'}\n` +
    `에러 메시지 : ${result.error?.message ?? '없음'}`;

  alert(message);
});
```

---
