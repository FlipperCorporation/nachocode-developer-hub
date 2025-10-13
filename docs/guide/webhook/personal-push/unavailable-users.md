---
sidebar_position: 1
sidebar_label: 전송불가 유저 (unavailableUsers)
description: nachocode 개인화 푸시 전송 후 전송 불가한 유저의 목록을 전달받는 이벤트의 요청 본문 예시와 데이터 구조를 설명합니다. 웹훅을 통해 전달받은 유저의 목록을 다음번 전송 시에 제외시켜 최적화에 사용할 수 있습니다.
keywords:
  [
    토픽 푸시,
    그룹 푸시,
    푸시 알림,
    개인화 푸시,
    타겟 푸시,
    타겟 알림,
    마케팅 푸시,
    고객 마케팅,
    개인화 메시지,
    사용자 맞춤 메시지,
    나쵸코드 푸시,
    nachocode 푸시,
    푸시 API,
  ]
---

# 전송불가 유저 이벤트 {#event}

> 🔔 **최신화 일자:** 2025-10-13

<!-- 2025-10-13 개인화푸시 unavailable users 웹훅 내용 신규 생성 -->

:::tip

- nachocode에서는 만료, 앱 삭제 등의 이유로 사용 불가한 토큰 정보를 저장소에서 제거합니다.  
  차감 수 관리 및 네트워크 효율성 향상을 위해 웹훅 사용을 통한 전송 불가 유저 관리가 권장됩니다.

:::

:::note

- **v2 버전 이상의 개인화 푸시**전송 시 웹훅이 발송됩니다.  
  ( [`[POST]/api/push/v2/messages`](../../../api/push/v2/endpoints.md#post-v2-messages), [`[POST]/api/push/v2/users`](../../../api/push/v2/endpoints.md#post-v2-users) )

- 모든 유저에게 정상적으로 푸시가 발송되었을 경우에는 웹훅이 발송되지 않습니다.

:::

## **전송불가 유저 이벤트 타입 정의**

### **`UnavailableUsers`**

```typescript
declare interface UnavailableUsers {
  tokenNotFoundUserIds: string[];
  tokenInvalidUserIds: string[];
}
```

| **속성명**             | **타입**   | **필수 여부** | **설명**                                                        |
| ---------------------- | ---------- | ------------- | --------------------------------------------------------------- |
| `tokenNotFoundUserIds` | `string[]` | ✅            | 등록된 토큰이 없는 유저ID 목록                                  |
| `tokenInvalidUserIds`  | `string[]` | ✅            | 만료, 앱 삭제 등의 이유로 사용 불가한 토큰을 보유한 유저ID 목록 |

---

## 요청 본문 예시

```json
{
  tokenNotFoundUserIds: ["noTokenUser1", "noTokenUser2", ...];
  tokenInvalidUserIds: ["invalidTokenUser1", "invalidTokenUser2", ...];
}
```
