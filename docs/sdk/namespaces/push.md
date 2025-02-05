---
sidebar_position: 11
---

# 푸시 알림 (`push`)

> 🔔 **최신화 일자:** 2024-11-27

푸시 알림 관련 기능을 관리하는 네임스페이스입니다.
푸시 토큰을 nachocode 서버에 등록 및 삭제하는 등의 기능을 제공합니다.

---

## 주요 메서드

### `registerPushToken(userID: string): Promise<any>`

푸시 토큰을 nachocode 서버에 지정한 사용자 식별자로 등록합니다.

```javascript
// ex. 유저의 로그인 성공 시 호출되는 콜백함수
function onLoginSuccess(userID) {
  // ex. userID : "nacho123"
  // "nacho123" 사용자 식별자로 nachocode 서버에 등록합니다.
  Nachocode.push.registerPushToken(userID);
}
```

---

### `deletePushToken(userID: string): Promise<any>`

사용자 식별자로 푸시 토큰을 삭제합니다.

```javascript
// ex. 유저의 로그아웃 시 호출되는 콜백함수
function onLogout(userID) {
  // ex. userID : "nacho123"
  // "nacho123" 사용자 식별자에 해당하는 토큰을
  // nachocode 서버에서 삭제합니다.
  Nachocode.push.deletePushToken(userID);
}
```

---
