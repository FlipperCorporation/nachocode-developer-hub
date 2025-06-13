---
id: overview
sidebar_label: API 개요
description: nachocode 개인화 푸시 API는 푸시 알림을 특정 유저 또는 다수의 유저에게 간편하게 전송할 수 있는 강력한 기능을 제공합니다.
keywords:
  [
    푸시 API,
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
  ]
---

# 개인화 푸시 API

> 🔔 **최신화 일자:** 2025-04-25

<!-- 2024-11-27 최초 생성 -->
<!-- 2025-03-27 Deprecated 안내 설명 추가, 에러코드 API Endpoint 페이지로 이동, 설명 일부 수정 (SDK를 통한 사전 토큰 등록 안내) -->

> **📢 공지:**
>
> V2버전이 Release됨에 따라 V1버전이 **Deprecated** 상태로 변경되었습니다.
>
> **V1버전 종료일**: 2025년 10월 18일 23:59
>
> **Obsolete** 예정 일 이 후, V1버전은 유지가 아닌 "**서비스 중지**"되는 점 양해 부탁드립니다.

<br/>

nachocode 개인화 푸시 API는 푸시 알림을 관리하고 특정 대상에게 특정 메세지를 전송하기 위한 강력한 기능을 제공합니다.

---

## 주요 정보

💡 **[Domain]**

- 도메인명: `https://app.nachocode.io`
- API 요청 주소의 형식: `https://app.nachocode.io/{path명}`

<br/>

💡 **[Push Token]**

- 유저 당 여러 개의 푸시 토큰을 가질 수 있습니다.
- [SDK](../../sdk/namespaces/push#registerpushtokenuserid-string-promiseany)를 통한 푸시 토큰 및 유저 ID 등록이 완료된 후 개인화 푸시 전송이 가능합니다.<br/> <span style={{ fontSize: "13px"}}>(등록되지 않은 유저 ID이더라도 전송 요청 시 차감 수에 포함됩니다.)</span>

<br/>

💡 **[API Call]**

- 서버 대 서버 요청만 허용됩니다.
- 요청 헤더에 반드시 `x-api-key`와 `x-secret-key`를 포함해야 합니다:
  - `x-api-key`: [nachocode](https://nachocode.io/?utm_source=docs&utm_medium=documentation&utm_campaign=devguide) 대시보드에서 발급된 API 키
  - `x-secret-key`: [nachocode](https://nachocode.io/?utm_source=docs&utm_medium=documentation&utm_campaign=devguide) 대시보드에서 발급된 Secret 키

---

## 추가 정보

문의 사항은 [support@nachocode.io](mailto:support@nachocode.io)로 연락주세요.

---
