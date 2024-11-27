---
id: overview
sidebar_label: API 개요
---

# Push Notification API

> 🔔 **최신화 일자:** 2024-11-27

Nachocode Push Notification API는 푸시 알림을 관리하고 전송하기 위한 강력한 기능을 제공합니다. 이 문서에서는 API 사용법, 요청/응답 형식, 에러 처리 등을 다룹니다.

---

## 주요 정보

💡 **[Domain]**

- 도메인명: `https://app.nachocode.io`
- API 요청 주소의 형식: `https://app.nachocode.io/{path명}`

💡 **[Push Token]**

- 유저 당 여러 개의 푸시 토큰을 가질 수 있습니다.

💡 **[API Call]**

- 서버 대 서버 요청만 허용됩니다.
- 요청 헤더에 반드시 다음 정보를 포함해야 합니다:
  - `x-api-key`: 대시보드에서 발급된 API 키
  - `x-secret-key`: 대시보드에서 발급된 Secret 키

---

## 에러 처리

| **Error Code**  | **Status** | **Message**             | **Description**        |
| --------------- | ---------- | ----------------------- | ---------------------- |
| `ERR-AB-AGK-11` | `400`      | `Api key not found.`    | API 키 누락            |
| `ERR-AB-AGK-12` | `400`      | `Invalid api key type.` | API 키가 문자열이 아님 |
| `ERR-AB-SGK-11` | `400`      | `Secret key not found.` | Secret 키 누락         |
| `ERR-AB-SGK-13` | `401`      | `Incorrect secret key.` | 잘못된 Secret 키       |

---

## 추가 정보

문의 사항은 [support@nachocode.io](mailto:support@nachocode.io)로 연락주세요.

---
