---
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

import { BadgeWithVersion } from '@site/src/components/svg/badge-with-version';

> 🚀 **추가된 버전 :** <BadgeWithVersion type="SDK" version="v1.3.0" link="/docs/releases/v1/sdk/release-v-1-3-0" /> <BadgeWithVersion type="Android" version="v1.3.0" link="/docs/releases/v1/app-source/android/release-v-1-3-0" /> <BadgeWithVersion type="iOS" version="v1.3.0" link="/docs/releases/v1/app-source/ios/release-v-1-3-0" />  
> 🔔 **최신화 일자:** 2025-11-14

## **개요** {#overview}

`authentication` 네임스페이스는 앱 내 **사용자 인증**과 관련된 기능을 제공합니다.

이 네임스페이스를 활용하여 **생체 인증(Biometrics) 기능을 사용할 수 있는지 확인**하거나, **생체 인증을 직접 수행**할 수 있습니다.

---

### **필수 선행 작업** {#prerequisite}

Android에서는 별도의 선행 작업 없이 **생체 인증 기능**을 사용할 수 있습니다.

iOS에서 nachocode SDK로 **생체 인증 기능**을 사용하기 위해서는 아래 사항이 먼저 완료되어야 합니다.

- **[nachocode 대시보드](https://nachocode.io/?utm_source=docs&utm_medium=documentation&utm_campaign=devguide)의 [ 앱 설정 > 연동 > Apple ]에서 [ 생체인증(FaceID) 사용 ] 토글을 활성화하여 앱 설정 완료**

![nachocode_developer_apple_biometrics](/img/docs/authentication/nachocode_developer_apple_biometrics.png)

---

## **타입 정의** {#types}

### **`AuthenticationResult`** {#authentication-result}

인증 결과를 나타내는 타입입니다.

| 필드                 | 타입                                | 설명                                                |
| -------------------- | ----------------------------------- | --------------------------------------------------- |
| `authenticated`      | `boolean`                           | 인증 성공 여부 (`true`: 인증됨, `false`: 인증 실패) |
| `error` (_optional_) | `{ code: string, message: string }` | 인증 실패 시 발생한 오류 코드 및 메시지             |

---

## **메서드 목록** {#method-list}

| 메서드                                              | 설명                                                       | 추가된 버전                                                                                   |
| --------------------------------------------------- | ---------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| [`canUseBiometrics(callback)`](#can-use-biometrics) | 디바이스에서 생체 인증 기능을 사용할 수 있는지 확인합니다. | <BadgeWithVersion type="SDK" version="v1.3.0" link="/docs/releases/v1/sdk/release-v-1-3-0" /> |
| [`useBiometrics(callback)`](#use-biometrics)        | 생체 인증 기능을 호출합니다.                               | <BadgeWithVersion type="SDK" version="v1.3.0" link="/docs/releases/v1/sdk/release-v-1-3-0" /> |

---

## **메서드 상세** {#method-details}

### **`canUseBiometrics(callback: (available: boolean, error?: { code: string, message: string }) => void): void`** {#can-use-biometrics}

- _since :_ <BadgeWithVersion type="SDK" version="v1.3.0" link="/docs/releases/v1/sdk/release-v-1-3-0" />

:::warning
_iOS는 [필수 선행 작업](#prerequisite)이 완료되어야 사용할 수 있습니다._
:::

#### 설명 {#can-use-biometrics-summary}

현재 디바이스에서 **생체 인증(Biometrics) 기능을 사용할 수 있는지 여부**를 반환합니다.  
일부 디바이스에서는 생체 인증 기능이 제공되지 않을 수 있으며, **사용자가 설정에서 해당 기능을 비활성화했을 경우에도 사용이 제한**될 수 있습니다.

#### 매개변수 {#can-use-biometrics-parameters}

| 이름       | 타입                                                                      | 필수 여부 | 설명                                                            |
| ---------- | ------------------------------------------------------------------------- | --------- | --------------------------------------------------------------- |
| `callback` | `(available: boolean, error?: { code: string, message: string }) => void` | ✅        | `true`(사용 가능) 또는 `false`(사용 불가)를 전달 받는 콜백 함수 |

#### 반환 값 {#can-use-biometrics-returns}

해당 메서드는 반환 값을 가지지 않으며, 결과는 `callback`을 통해 비동기적으로 제공됩니다.

#### 사용 예제 {#can-use-biometrics-examples}

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

### **`useBiometrics(callback: (result: AuthenticationResult) => void): void`** {#use-biometrics}

- _since :_ <BadgeWithVersion type="SDK" version="v1.3.0" link="/docs/releases/v1/sdk/release-v-1-3-0" />

:::warning
_iOS는 [필수 선행 작업](#prerequisite)이 완료되어야 사용할 수 있습니다._
:::

#### 설명 {#use-biometrics-summary}

디바이스의 **생체 인증(Biometrics) 기능을 실행**합니다.  
사용자가 인증을 성공하면 `authenticated: true` 값을 반환하며, **인증이 실패하거나 중단될 경우 `error` 객체를 포함하여 실패 원인을 제공합니다.**

#### 매개변수 {#use-biometrics-parameters}

| 이름       | 타입                                     | 필수 여부 | 설명                            |
| ---------- | ---------------------------------------- | --------- | ------------------------------- |
| `callback` | `(result: AuthenticationResult) => void` | ✅        | 인증 결과를 전달 받는 콜백 함수 |

#### 반환 값 {#use-biometrics-returns}

해당 메서드는 반환 값을 가지지 않으며, 결과는 `callback`을 통해 비동기적으로 제공됩니다.

#### 사용 예제 {#use-biometrics-examples}

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
