---
sidebar_label: 'ver.1.10.3 (26.04.29)'
description: nachocode Client SDK ver.1.10.3의 릴리즈노트입니다.
image: /img/docs/releases/release_note_sdk_detail.png
---

# Release: ver.1.10.3 (2026-04-29)

import { ThumbnailImage } from '@site/src/components/common/image/thumbnail-image';

<ThumbnailImage src='/img/docs/releases/release_note_sdk_detail.png'/>

> 🔔 **배포 일자:** 2026-04-29

이번 업데이트 **v1.10.3**에서는 **로컬 푸시 알림 그룹핑 기능**이 추가되고, **마케팅 푸시 관련 함수의 성능이 개선**되었습니다.

새로운 `groupId` 속성을 통해 로컬 푸시 알림을 그룹으로 묶어 관리할 수 있으며, 마케팅 푸시 함수들의 내부 로직 최적화로 더욱 빠르고 안정적인 동작이 가능해졌습니다.

## 주요 변경 사항 (ver.1.10.3)

### 새로운 기능 {#new-features}

#### `push` 네임스페이스 - 로컬 푸시 알림 그룹핑

로컬 푸시 알림에 `groupId`를 지정하여 여러 알림을 그룹으로 묶을 수 있는 기능이 추가되었습니다.

- **개선된 타입 정의**

  [`LocalPushPayload`](/docs/sdk/namespaces/push#local-push-payload)에 `groupId` 속성이 추가되었습니다.

  ```typescript
  export declare type LocalPushPayload = {
    /**
     * Push notification title
     */
    title: string;
    /**
     * Push notification contents
     */
    content?: string;
    /**
     * Opens up the provided url when clicked
     */
    link?: string;
    /**
     * Uses the app icon as a push icon as default.
     * If `false` provided, uses push icon instead.
     */
    usingAppIcon?: boolean;
    /**
     * Reserves time willing to send the local push notification.
     * If not provided, instantly sends the push notification.
     */
    scheduledTime?: Date;
    /**
     * If provided, sets provided `id` to the local push notification
     */
    id?: number;
    /**
     * @since 1.10.3
     * If provided, groups the local push notification with provided `groupId`
     */
    groupId?: string;
  };
  ```

- **사용 예제**

  ```javascript
  // groupId를 사용하여 로컬 푸시 알림 그룹핑
  Nachocode.push.sendLocalPush(
    {
      title: '주문 알림',
      content: '주문이 접수되었습니다.',
      groupId: 'order-notifications',
      scheduledTime: new Date(Date.now() + 60000), // 1분 후
    },
    result => {
      if (result.status === 'success') {
        console.log('로컬 푸시가 예약되었습니다. ID:', result.localPushId);
      } else {
        console.error('로컬 푸시 예약 실패:', result.message);
      }
    }
  );

  // 같은 그룹으로 여러 알림 예약
  Nachocode.push.sendLocalPush(
    {
      title: '배송 알림',
      content: '상품이 배송 중입니다.',
      groupId: 'order-notifications', // 동일한 그룹 ID
      scheduledTime: new Date(Date.now() + 3600000), // 1시간 후
    },
    result => {
      if (result.status === 'success') {
        console.log('배송 알림이 예약되었습니다.');
      }
    }
  );
  ```

---

### 개선 사항 {#improvements}

#### `push` 네임스페이스 - 마케팅 푸시 함수 성능 최적화

마케팅 푸시 관련 함수들의 내부 로직이 최적화되어 성능과 안정성이 향상되었습니다.

- **개선된 메서드**

  | 메서드                                                                           | 개선 내용                         |
  | -------------------------------------------------------------------------------- | --------------------------------- |
  | [`setMarketingAllowed()`](/docs/sdk/namespaces/push#set-marketing-allowed)       | 내부 로직 최적화로 응답 속도 개선 |
  | [`getMarketingAllowed()`](/docs/sdk/namespaces/push#get-marketing-allowed)       | 내부 로직 최적화로 응답 속도 개선 |
  | [`setNightAllowed()`](/docs/sdk/namespaces/push#set-night-allowed)               | 내부 로직 최적화로 응답 속도 개선 |
  | [`getNightAllowed()`](/docs/sdk/namespaces/push#get-night-allowed)               | 내부 로직 최적화로 응답 속도 개선 |
  | [`setMarketingPreference()`](/docs/sdk/namespaces/push#set-marketing-preference) | 내부 로직 최적화로 응답 속도 개선 |
  | [`getMarketingPreference()`](/docs/sdk/namespaces/push#get-marketing-preference) | 내부 로직 최적화로 응답 속도 개선 |

- **주요 개선 효과**

  - 마케팅 수신 동의 설정 및 조회 시 응답 속도 향상
  - 네이티브 레이어와의 통신 효율성 개선
  - 메모리 사용량 최적화로 안정성 강화

---

### 업데이트 방법

nachocode JavaScript Client SDK **ver.1.10.3**을 사용하려면 아래의 스크립트를 업데이트하십시오.

#### SDK CDN 주소

```html
<script src="https://cdn.nachocode.io/nachocode/client-sdk/@1.10.3/client-sdk.min.js"></script>
```

:::tip 문의하기
nachocode는 지속적으로 사용자의 개발 경험 향상을 위해 최선을 다하겠습니다.
추가적인 요청이나 문의사항은 언제든지 지원팀에게 [이메일](mailto:support@nachocode.io)을 보내주세요.
감사합니다.
:::
