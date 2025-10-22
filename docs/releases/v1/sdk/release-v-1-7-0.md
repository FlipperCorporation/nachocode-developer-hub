---
sidebar_label: 'ver.1.7.0 (25.09.26)'
description: nachocode Client SDK ver.1.7.0의 릴리즈노트입니다.
image: /img/docs/releases/release_note_sdk_detail.png
---

# Release: ver.1.7.0 (2025-09-26)

![sdk_detail](/img/docs/releases/release_note_sdk_detail.png)

> 🔔 **배포 일자:** 2025-09-26

이번 업데이트 **v1.7.0**에서는 **AppsFlyer 마케팅 어트리뷰션 및 사용자 트래킹 기능**이 새롭게 추가되었습니다.

**AppsFlyer 연동**을 통해 마케팅 캠페인 성과 추적, 사용자 어트리뷰션 분석, 커스텀 이벤트 로깅 등의 고급 마케팅 분석 기능을 사용할 수 있습니다.

## 주요 변경 사항 (ver.1.7.0)

### 새로운 기능 {#new-features}

- **`appsflyer` 네임스페이스**: AppsFlyer 마케팅 어트리뷰션 및 사용자 트래킹 기능 추가
  - AppsFlyer를 통한 **마케팅 캠페인 성과 추적** 기능을 제공합니다.
  - **커스텀 유저 ID 관리**, **어트리뷰션 데이터 조회**, **커스텀 이벤트 로깅** 등의 기능을 지원합니다.
  - 모든 메서드는 **Promise 기반**으로 동작하여 `async/await` 패턴을 사용할 수 있습니다.

:::info
➡️ [`appsflyer` 네임스페이스 문서](/docs/sdk/integrations/appsflyer/reference)에서 상세 내용을 확인할 수 있습니다.
:::

---

### AppsFlyer 마케팅 어트리뷰션 기능 (`appsflyer` 네임스페이스)

AppsFlyer 연동을 통해 마케팅 캠페인의 성과를 정확히 추적하고 분석할 수 있는 기능이 추가되었습니다.

#### 추가된 메서드 (`appsflyer`)

| 메서드                                                                                        | 설명                        |
| --------------------------------------------------------------------------------------------- | --------------------------- |
| [`setCustomUserId(userId)`](/docs/sdk/integrations/appsflyer/reference#set-customer-user-id)  | 커스텀 유저 ID 설정         |
| [`getCustomUserId()`](/docs/sdk/integrations/appsflyer/reference#get-customer-user-id)        | 커스텀 유저 ID 조회         |
| [`deleteCustomUserId()`](/docs/sdk/integrations/appsflyer/reference#delete-customer-user-id)  | 커스텀 유저 ID 삭제         |
| [`getAttributionData()`](/docs/sdk/integrations/appsflyer/reference#get-attribution-data)     | 어트리뷰션 데이터 조회      |
| [`clearAttributionData()`](/docs/sdk/integrations/appsflyer/reference#clear-attribution-data) | 어트리뷰션 데이터 삭제      |
| [`getAttributionList()`](/docs/sdk/integrations/appsflyer/reference#get-attribution-list)     | 어트리뷰션 데이터 목록 조회 |
| [`clearAttributionList()`](/docs/sdk/integrations/appsflyer/reference#clear-attribution-list) | 어트리뷰션 데이터 목록 삭제 |
| [`logEvent(eventName, values)`](/docs/sdk/integrations/appsflyer/reference#log-event)         | 커스텀 이벤트 로깅          |

#### 사용 예제

##### **커스텀 유저 ID 설정**

```javascript
// 사용자 식별을 위한 커스텀 ID 설정
const result = await Nachocode.appsflyer.setCustomUserId('user123');
if (result.status === 'success') {
  console.log('커스텀 유저 ID 설정 성공:', result.message);
} else {
  console.error('커스텀 유저 ID 설정 실패:', result.errorCode, result.message);
}
```

##### **어트리뷰션 데이터 조회**

```javascript
// 마케팅 캠페인 어트리뷰션 정보 확인
const result = await Nachocode.appsflyer.getAttributionData();
if (result.status === 'success') {
  console.log('어트리뷰션 데이터:', result.data);

  // 데이터 타입에 따라 처리
  if (result.data.data_type === 'conversion_data') {
    console.log('설치 타입:', result.data.af_status); // 'Organic' 또는 'Non-organic'
    console.log('첫 실행 여부:', result.data.is_first_launch);
    console.log('설치 시간:', result.data.install_time);
  } else if (result.data.data_type === 'deeplink_data') {
    console.log('링크 타입:', result.data.link_type);
    console.log('딥링크 URL:', result.data.link);

    // 디퍼드 딥링크인지 확인
    if (result.data.is_deferred) {
      console.log('디퍼드 딥링크 - 매칭 방식:', result.data.match_type);
      console.log('미디어 소스:', result.data.media_source);
      console.log('클릭 시간:', result.data.click_time);
      console.log('설치 시간:', result.data.install_time);
      if (result.data.campaign) {
        console.log('캠페인:', result.data.campaign);
      }
    } else {
      console.log('일반 딥링크');
    }
  }
}
```

##### **커스텀 이벤트 로깅**

```javascript
// 마케팅 성과 측정을 위한 커스텀 이벤트 전송
const result = await Nachocode.appsflyer.logEvent('purchase', {
  product_id: 'item_001',
  price: 9.99,
  currency: 'USD',
  category: 'electronics',
});

if (result.status === 'success') {
  console.log('이벤트 로깅 성공:', result.message);
}
```

#### 지원하는 데이터 타입

**어트리뷰션 데이터** (`AttributionData`)

어트리뷰션 데이터는 두 가지 타입으로 나뉩니다.

**전환 데이터** (`ConversionData`)

- `timestamp`: 수신 시간
- `data_type`: 'conversion_data'
- `install_time`: 앱 설치 시간
- `is_first_launch`: 첫 번째 실행 여부
- `af_status`: 설치 어트리뷰션 타입 ('Organic' 또는 'Non-organic')
- `af_message`: AppsFlyer 메시지

**딥링크 데이터** (`DeepLinkData`)

- `timestamp`: 수신 시간
- `data_type`: 'deeplink_data'
- `link_type`: 링크 타입 ('app_link', 'universal_link', 'uri_scheme')
- `scheme`: 앱 스킴
- `host`: 호스트 이름
- `path`: URL 경로
- `link`: 전체 링크 URL
- `is_deferred`: 디퍼드 딥링크 여부 (false)
- 기타 커스텀 쿼리 파라미터들

**디퍼드 딥링크 데이터** (`DeferredDeepLinkData`)

- `timestamp`: 수신 시간
- `data_type`: 'deeplink_data'
- `link_type`: 'deferred_link'
- `is_deferred`: 디퍼드 딥링크 여부 (true)
- `match_type`: 어트리뷰션 매칭 방식 ('referrer', 'id_matching', 'probabilistic', 'srn')
- `media_source`: 미디어 소스 (광고 플랫폼)
- `campaign`: 캠페인 이름 (선택적)
- `campaign_id`: 캠페인 ID (선택적)
- 기타 커스텀 쿼리 파라미터들

---

### 개선 사항 {#improvements}

- **TypeScript 정의**(`Nachocode.d.ts`) **업데이트**
  - v.1.7.0 변경 사항을 반영하여 AppsFlyer 네임스페이스 관련 타입 정의가 추가되었습니다.
  - `AppsflyerResult`, `GetCustomUserIdResult`, `ConversionData`, `DeepLinkData`, `DeferredDeepLinkData`, `AttributionData` 등의 새로운 타입이 정의되었습니다.
  - **디퍼드 딥링크** (`DeferredDeepLinkData`) 타입이 새로 추가되어, 설치 후 첫 실행 시 어트리뷰션 정보를 더 상세하게 제공합니다.
  - `DeepLinkData`와 `DeferredDeepLinkData`를 구분하는 `is_deferred` 필드가 추가되었습니다.
  - 개발자 경험 향상을 위해 주석과 설명이 추가되었습니다.

:::info
➡️ [`Nachocode.d.ts`](https://github.com/FlipperCorporation/nachocode-client-sdk-js/blob/main/releases/Nachocode.d.ts)에서 최신 정의를 확인하세요.
:::

---

### 활용 사례 {#use-cases}

AppsFlyer 연동 기능을 통해 다음과 같은 마케팅 분석이 가능합니다.

1. **설치 경로 분석**: 사용자가 어떤 마케팅 채널을 통해 앱을 설치했는지 추적
2. **캠페인 성과 측정**: 특정 마케팅 캠페인의 전환율과 ROI 분석
3. **사용자 행동 추적**: 커스텀 이벤트를 통한 사용자의 앱 내 행동 패턴 분석
4. **유기적 vs 비유기적 설치**: 자연 설치와 마케팅 캠페인을 통한 설치 구분
5. **리타겟팅 최적화**: 사용자 세그먼트별 맞춤형 마케팅 전략 수립

---

### 업데이트 방법

nachocode JavaScript Client SDK **ver.1.7.0**를 사용하려면 아래의 스크립트를 업데이트하십시오.

#### SDK CDN 주소

```html
<script src="https://cdn.nachocode.io/nachocode/client-sdk/@1.7.0/client-sdk.min.js"></script>
```

:::tip 문의하기
nachocode는 지속적으로 사용자의 개발 경험 향상을 위해 최선을 다하겠습니다.  
추가적인 요청이나 문의사항은 언제든지 지원팀에게 [이메일](mailto:support@nachocode.io)을 보내주세요.  
감사합니다.  
:::
