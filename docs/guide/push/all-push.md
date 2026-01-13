---
sidebar_position: 3
sidebar_label: 전체 푸시
pagination_label: 전체 푸시 가이드
description: nachocode 전체 푸시 가이드는 API를 활용한 전체 푸시 알림 전송 방법을 안내합니다. 사전 작업 필요없이 유저의 모든 디바이스로 푸시 알림을 전송할 수 있습니다.
keywords:
  [
    전체 푸시,
    전체 알림,
    토픽 푸시,
    그룹 푸시,
    구독 알림,
    예약 푸시,
    스케줄 푸시,
    푸시 알림,
    타겟 푸시,
    타겟 알림,
    마케팅 푸시,
    고객 마케팅,
    나쵸코드 푸시,
    nachocode 푸시,
    푸시 API,
  ]
image: /img/docs/thumbnails/GUIDE/push.svg
---

# 전체 푸시

import { ThumbnailImage } from '@site/src/components/common/image/thumbnail-image';

<ThumbnailImage src='/img/docs/thumbnails/GUIDE/push.svg'/>

> 🔔 **최신화 일자:** 2026-01-13

<!-- 2025-06-04 최초 생성 -->

이 문서는 전체 푸시에 대한 **설명**과 전체 푸시 전송에 필요한 **프로세스**에 대해 안내합니다.

---

## **전체 푸시 전송 이해하기**

nachocode의 전체 푸시 기능은 회원 여부에 관계없이 **앱을 설치한 모든 디바이스**를 타겟으로 푸시 알림을 **일괄 발송**할 수 있는 강력한 기능입니다.

전체 푸시 기능은 nachocode에서 관리되는 **빌트인 기능**으로 별도의 작업 없이도 즉각적인 사용이 가능하고, 추가적인 전송 옵션을 통해 특정 시간에 푸시 알림이 발송되도록 **자동화**할 수 있습니다.

<br/><hr style={{ border: "0.2px solid grey", opacity: "0.1"}} /><br/>

### 전체 푸시 활용 방법

---

<div class="underlined-subtitle">사전 작업 없이 즉시 전송이 가능합니다</div>

사용자 편의성을 향상을 위해 nachocode에서 기본적으로 제공하는 빌트인 기능으로, 전송 대상 선별, 토픽 구독과 같은 **별도 작업이 필요하지 않습니다.**

푸시 알림 전송 시, **어떤 내용**으로 보낼지만 설정하여 [**nachocode 전체 푸시 API로 요청**](../../api/push/all-push.endpoints#post-v2-all)하면 푸시 전송이 완료됩니다.

---

<div class="underlined-subtitle">대시보드 기능을 인하우스 시스템으로!</div>

nachocode의 전체 푸시 전송 기능은 API뿐만 아니라 nachocode 대시보드에서도 동일하게 제공됩니다.  
또한, 전체 푸시 전송 API를 활용하면 nachocode 대시보드에서 제공하는 기능을 사내 **인하우스 시스템에 내재화**하여
푸시 알림 전송 및 운영 프로세스를 보다 효율적으로 구성할 수 있습니다.

---

<div class="underlined-subtitle">결과를 통한 전략을 수립하세요</div>

nachocode에서 제공되는 결과 데이터를 통해 유용한 정보를 도출해보세요.

- **"어떤 내용의 푸시에 사용자가 많이 반응했는지"**
- **"어떤 시간대의 푸시 알림의 효과가 높은지"**

이에 맞는 전략을 수립하여 사용자 **참여도**와 **몰입감**을 높여 **마케팅 효과를 극대화**시킬 수 있습니다

---

<br/><hr style={{ border: "0.2px solid grey", opacity: "0.1"}} /><br/>

### 전체 푸시 활용 예시

- **시스템, 공지 알림**
  - 시스템 안내, 대규모 공지, 업데이트 안내 등 모든 유저에게 일괄적으로 푸시 알림을 전송할 수 있습니다.
  - 회원가입, 로그인 여부에 관계없이 모든 유저에게 푸시 알림을 전송할 수 있습니다.

<br/>

- **예약 기능을 활용한 자동화 푸시**
  - 특정 시간에 맞춰 자동으로 유저들에게 푸시 알림을 전송할 수 있습니다.
  - 푸시 전송 예약을 통해 워킹 타임에 구애받지 않고, 최적의 타이밍에 메시지를 전달하여 운영 효율을 높임읕 물론, 사용자 경험과 전환율을 동시에 개선할 수 있습니다.

<br/><hr style={{ border: "1px solid black", opacity: "0.5"}} /><br/>

## **전체 푸시 전송 사용하기**

### 1. 선행 작업

nachocode 대시보드에서 **1)API Key, Secret Key 발급** 및 **2)Firebase 프로젝트 설정파일 등록**이 완료되어야 합니다.

- **API Key, Secret Key**는 안전하고 원활한 API 통신을 위해 필요한 정보로 nachocode 대시보드 **[앱 설정]** > **[개발자 설정]** 탭에서 발급 가능합니다.
- **Firebase 프로젝트 설정 파일 등록**에는 아래와 같은 파일이 요구되며, 자세한 과정과 내용은 [사용자 가이드](https://docs.nachocode.io/ko/articles/%ED%91%B8%EC%8B%9C-%EC%95%8C%EB%A6%BC%EA%B0%9C%EC%9D%B8%ED%99%94-0eb97bdb) 탭에서 확인 가능합니다.
  - Firebase 계정 비공개 키
  - Firebase 프로젝트 안드로이드 앱 생성 시 다운로드 받은 파일(`google-service.json`)
  - Firebase 프로젝트 iOS 앱 생성 시 다운로드 받은 파일(`GoogleService-info.plist`)

<br/>

### 2. 전체 푸시 전송 ([API](../../api/push/all-push.endpoints#post-v2-all))

<br/>

[`/all`](../../api/push/all-push.endpoints#post-v2-all) API Endpoint를 사용하여 **앱을 설치한 모든 디바이스**를 대상으로 푸시 알림을 전송합니다.

API 호출은 Server 대 Server 요청을 통해 이루어지므로, 푸시 전송 시점을 선정하여 개발자가 **Server Side 로직에 추가**하여야 합니다.  
**전송하고자 하는 내용**과 대시보드에서 발급받은 **API Key, Secret Key**로 요청 데이터를 구성하여 API Endpoint로 푸시 전송을 요청할 수 있습니다.

푸시 전송 요청이 nachocode server로 전달되면 FCM으로의 요청을 수행하고, 집계된 클릭 수 등의 히스토리를 관리합니다.

<br/>

### 3. 전송 결과 확인

각 푸시 요청의 **히스토리**와 **성공 및 실패** 여부 이 외에도 **클릭 수**와 같이 다양한 집계 데이터를 제공합니다.  
이를 통해, 각 푸시의 효과를 분석하여 전략 수립에 활용할 수 있습니다.

푸시 요청에 대한 상세 정보는 [nachocode](https://nachocode.io/?utm_source=docs&utm_medium=documentation&utm_campaign=devguide) 대시보드의 **[앱 기능]** > **[푸시 알림]** > **[전체 푸시]** 탭에서 확인할 수 있습니다.
