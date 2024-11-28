---
sidebar_position: 2
---

# 인증 (`authentication`)

> 🔔 **최신화 일자:** 2024-11-27

사용자 인증과 관련된 기능을 제공합니다.

---

## 타입 정의

### AuthenticationResult

인증 결과를 나타내는 타입입니다.

- `authenticated: boolean`: 인증 성공 여부입니다.
- `error?: { code: string, message: string }`: (_optional_) 실패 시 실패 코드와 사유를 저장하여 전달되는 객체입니다.

---

## 주요 메서드

### `canUseBiometrics(callback: (available: boolean, error?: { code: string, message: string }) => any): void`

현재 디바이스에서 생체 인증 기능을 사용할 수 있는지 여부를 반환합니다.

- 특정 디바이스에서는 생체인증이 불가능할 수 있습니다.
- 앱 사용자의 선택에 따라 생체인증을 사용하지 않을 수 있습니다.

```javascript
// ex. 디바이스의 생체 인증 사용 가능 여부를 확인합니다.
Nachocode.authentication.canUseBiometrics((available, error) => {
  const message =
    // 디바이스의 생체 인증 사용 가능 여부가 매개 변수 available에 전달 됩니다.
    `사용 가능 여부 : ${available ? '가능' : '불가능'}` +
    // 사용이 불가할 경우, 사유가 error.message에 담겨 전달됩니다.
    `${error ? `\n코드 : ${error.code}\n사유 : ${error.message}` : ''}`;

  alert(message);
});
```

---

### `useBiometrics(callback: (result: AuthenticationResult) => any): void`

생체 인증 기능을 호출합니다.

사용자가 인증에 실패하거나, 인증을 중단하면 `AuthenticationResult`에서 `authenticated`가 `false`로 반환되며, `error` 객체에 실패 원인이 전달됩니다.

```javascript
// 네이티브 생체 인증 기능을 호출 합니다.
Nachocode.authentication.useBiometrics(result => {
  const message =
    `인증 여부 : ${result?.authenticated ? '인증됨' : '인증안됨'}\n` +
    `상태 코드 : ${result?.error?.code ?? '없음'}\n` +
    `에러 메시지 : ${result?.error?.message ?? '없음'}`;

  alert(message);
});
```

---
