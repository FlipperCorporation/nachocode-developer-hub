---
sidebar_position: 1
sidebar_label: 개요
pagination_label: 웹훅 (Webhook) 개요
description: nachocode 웹훅 가이드는 웹훅 이벤트 타입, 요청 방식, 테스트 방법 등 nachocode 플랫폼에서 발생한 이벤트를 서버로 전달하는 웹훅 정책을 설명합니다.
keywords:
  [
    인앱 결제,
    Android 결제,
    iOS 결제,
    구글 플레이 스토어,
    애플 앱스토어,
    일회성 구매,
    Google 플레이 스토어,
    Apple 앱스토어,
    인앱 결제 검증,
    푸시 웹훅,
    개인화 푸시 웹훅,
  ]
image: /img/docs/thumbnails/GUIDE/webhook.png
---

# 웹훅 개요

import { ThumbnailImage } from '@site/src/components/common/image/thumbnail-image';

<ThumbnailImage src='/img/docs/thumbnails/GUIDE/webhook.png'/>

> 🔔 **최신화 일자:** 2025-10-15

<!-- 2025-10-13 개인화푸시 unavailable users 웹훅 추가에 따른 내용 신규 생성 -->

이 문서는 **웹훅**이 필요한 nachocode 기능을 사용할 때 참고해야 하는 **웹훅 이벤트 타입** 및 **등록 방법**, **요청 방식**, **테스트 방법** 등 **웹훅 정책** 에 대해 안내합니다.

---

:::tip 웹훅이란?

웹훅(Webhook)은 이벤트 발생 시 사전에 지정된 엔드포인트로 HTTP 요청을 전송하는 콜백 메커니즘입니다.  
등록된 웹훅은 주기적 폴링 없이도 실시간 데이터 수신을 가능하게 하며, 이를 활용해 다양한 자동화 처리를 구현할 수 있습니다.
:::

---

## 웹훅 타입

**nachocode**에서 제공하는 웹훅 이벤트의 종류는 다음과 같습니다.

### 기능별 이벤트

| **기능**    | **이벤트 타입(명)**     | **설명**                                         |
| ----------- | ----------------------- | ------------------------------------------------ |
| 인앱결제    | **`purchase`**          | 구매 성공 이벤트입니다.                          |
| 인앱결제    | **`refund`**            | 환불 감지 이벤트입니다.                          |
| 개인화 푸시 | **`unavailable_users`** | 전송 불가한 유저의 목록을 반환하는 이벤트입니다. |

## 기본 사항

**nachocode 웹훅**은 특정 이벤트 발생 시 설정된 엔드포인트로 HTTP 요청을 전송합니다. 모든 웹훅 요청은 공통적인 설정 값을 따르며, 안정적인 연동을 위해 아래 내용을 참고해주세요.

### 웹훅 등록 방법

웹훅은 nachocode 대시보드를 통해 등록이 가능합니다.

:::info 웹훅 등록 사용자 가이드
➡️ [인앱결제 웹훅 등록 사용자 가이드](https://docs.nachocode.io/ko/articles/inapp-webhook-c2ff4900)  
➡️ [푸시 웹훅 등록 사용자 가이드](https://docs.nachocode.io/ko/articles/4-%EC%9B%B9%ED%9B%85-%EC%84%A4%EC%A0%95-4ab8a296)
:::

### 웹훅 요청 방식

**nachocode 웹훅**은 아래와 같은 형식을 통해 이벤트 데이터를 전달합니다.

| **항목**                | **설명**                                 |
| ----------------------- | ---------------------------------------- |
| **요청 방식**           | `POST`                                   |
| **컨텐츠 타입**         | `application/json`                       |
| **응답 상태 코드 처리** | `2xx` 응답 시 웹훅 전송 성공으로 간주    |
| **요청 제한 시간**      | `10초` (응답 지연 시 요청이 실패로 처리) |
| **재시도 정책**         | ❌ (대시보드에서 재전송 가능)            |

### 요청 정보

**요청 본문**은 웹훅 카테고리 하위에 위치한 각 기능 페이지 또는 아래 링크를 통해 확인하실 수 있습니다.
:::info 웹훅 등록 요청 본문

- 인앱 결제  
  ➡️ [인앱 결제 구매 웹훅](./iap/purchase)  
  ➡️ [인앱 결제 환불 웹훅](./iap/refund)

- 푸시 알림  
  ➡️ [개인화 푸시 전송불가 유저 웹훅](./personal-push/unavailable-users)
  :::

---

#### 요청 헤더

웹훅 요청은 다음과 같은 HTTP 헤더를 포함합니다. **Bearer Token**은 대시보드에서 설정한 **웹훅 키**가 존재할 경우에만 설정됩니다.

| **헤더**        | **설명**                    |
| --------------- | --------------------------- |
| `Content-Type`  | `application/json`          |
| `Authorization` | `Bearer {your-webhook-key}` |

### 테스트 방법

웹훅 **수신 테스트**를 위해서는 다음과 같은 방법을 사용할 수 있습니다.

#### 1. webhook.site 활용

[webhook.site](https://webhook.site/)는 웹훅 요청을 테스트할 수 있는 무료 도구로, nachocode 웹훅의 요청 데이터를 실시간으로 확인할 수 있습니다.

##### 사용 방법

1. [webhook.site](https://webhook.site/)에 접속합니다.
2. 페이지를 열면 자동으로 고유한 웹훅 엔드포인트 URL이 생성됩니다.
3. nachocode 대시보드에서 웹훅 엔드포인트를 **webhook.site에서 생성된 URL**로 설정합니다.
4. 나쵸코드 대시보드에서 테스트할 웹훅 이벤트를 발생시킵니다. (예: 결제 테스트)
5. webhook.site 페이지에서 nachocode가 전송한 요청 데이터를 확인합니다.

## 추가 정보

로컬 개발 환경에서 웹훅을 수신받아 테스트할 수 있는 방법을 제공할 예정입니다.
웹훅과 관련하여 궁금한 점이 있다면 [support@nachocode.io](mailto:support@nachocode.io)로 문의해주세요.
