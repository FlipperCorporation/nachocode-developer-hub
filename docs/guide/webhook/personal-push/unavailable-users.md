---
sidebar_position: 1
sidebar_label: 전송불가 유저 (unavailable_users)
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

# 개인화 푸시 전송불가 유저 웹훅

> 🔔 **최신화 일자:** 2025-10-15

<!-- 2025-10-13 개인화푸시 unavailable users 웹훅 내용 신규 생성 -->

:::tip

- nachocode에서는 만료, 앱 삭제 등의 이유로 사용 불가한 토큰 정보를 nachocode 저장소에서 제거합니다.  
  차감 수 관리 및 네트워크 효율을 위해 웹훅을 통한 푸시 알림이 **전송 불가한 앱 유저에 대한 관리가 권장**됩니다.

:::

:::note

- [**전송불가 유저 웹훅 등록**](https://docs.nachocode.io/ko/articles/4-%EC%9B%B9%ED%9B%85-%EC%84%A4%EC%A0%95-4ab8a296) 후, **v2 버전 이상의 개인화 푸시 알림** 전송 시 웹훅이 발송됩니다.  
  ([`[POST]/api/push/v2/messages`](../../../api/push/v2/endpoints.md#post-v2-messages),[`[POST]/api/push/v2/users`](../../../api/push/v2/endpoints.md#post-v2-users))

- 모든 유저에게 정상적으로 푸시가 발송되었을 경우에는 웹훅이 발송되지 않습니다.

:::

## **전송불가 유저 이벤트 타입 정의**

### **`UnavailableUsersEvent`**

```typescript
declare interface UnavailableUsersEvent {
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
  "tokenNotFoundUserIds": ["userId1", "userId2", ...], // 토큰을 보유하지 않은 유저가 없을 경우 빈 배열
  "tokenInvalidUserIds": ["userId3", "userId4", ...], // 유효하지 않은 토큰을 보유한 유저가 없을 경우 빈 배열
}
```
