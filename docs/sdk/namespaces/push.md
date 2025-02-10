---
sidebar_position: 13
---

# 푸시 알림 (`push`)

> 🔔 **최신화 일자:** 2025-02-07

## **개요**

`push` 네임스페이스는 **푸시 알림 관련 기능을 제공**합니다.  
이를 통해 **푸시 토큰을 Nachocode 서버에 등록, 삭제** 등 여러 기능을 수행 할 수 있습니다.

---

## **메서드 목록**

| 메서드                                                                    | 설명                                       | 추가된 버전 |
| ------------------------------------------------------------------------- | ------------------------------------------ | ----------- |
| [`registerPushToken(userID)`](#registerpushtokenuserid-string-promiseany) | Nachocode 서버에 푸시 토큰을 등록합니다.   | ver.1.0.0   |
| [`deletePushToken(userID)`](#deletepushtokenuserid-string-promiseany)     | Nachocode 서버에서 푸시 토큰을 삭제합니다. | ver.1.0.0   |

---

## **메서드 상세**

### **`registerPushToken(userID: string): Promise<any>`**

- _since ver.1.0.0_

#### 설명 (`registerPushToken`)

Nachocode 서버에 **현재 디바이스의 푸시 토큰을 등록**합니다.  
이때, 특정 사용자(`userID`)를 식별자로 사용하여 **푸시 알림을 해당 사용자에게 전송할 수 있도록 설정**합니다.

#### 매개변수 (`registerPushToken`)

| 이름     | 타입     | 필수 여부 | 설명                         |
| -------- | -------- | --------- | ---------------------------- |
| `userID` | `string` | ✅        | 푸시 토큰을 연결할 사용자 ID |

#### 반환 값 (`registerPushToken`)

| 타입           | 설명                  |
| -------------- | --------------------- |
| `Promise<any>` | 등록 요청의 처리 결과 |

#### 사용 예제 (`registerPushToken`)

```javascript
// ex. 유저의 로그인 성공 시 호출되는 콜백함수
function onLoginSuccess(userID) {
  // ex. userID : "nacho123"
  // "nacho123" 사용자 식별자로 nachocode 서버에 등록합니다.
  Nachocode.push.registerPushToken(userID).then(() => {
    console.log('푸시 토큰이 성공적으로 등록되었습니다.');
  });
}
```

---

### **`deletePushToken(userID: string): Promise<any>`**

- _since ver.1.0.0_

#### 설명 (`deletePushToken`)

Nachocode 서버에서 **해당 사용자(`userID`)와 연결된 푸시 토큰을 삭제**합니다.  
사용자가 로그아웃하거나 푸시 알림을 더 이상 사용하지 않도록 설정할 경우 이 메서드를 호출해야 합니다.

#### 매개변수 (`deletePushToken`)

| 이름     | 타입     | 필수 여부 | 설명                                |
| -------- | -------- | --------- | ----------------------------------- |
| `userID` | `string` | ✅        | 삭제할 푸시 토큰이 연결된 사용자 ID |

#### 반환 값 (`deletePushToken`)

| 타입           | 설명                  |
| -------------- | --------------------- |
| `Promise<any>` | 삭제 요청의 처리 결과 |

#### 사용 예제 (`deletePushToken`)

```javascript
// ex. 유저의 로그아웃 시 호출되는 콜백함수
function onLogout(userID) {
  // ex. userID : "nacho123"
  // "nacho123" 사용자 식별자에 해당하는 푸시 토큰을 삭제합니다.
  Nachocode.push.deletePushToken(userID).then(() => {
    console.log('푸시 토큰이 성공적으로 삭제되었습니다.');
  });
}
```

---
