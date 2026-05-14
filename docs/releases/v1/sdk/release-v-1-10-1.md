---
sidebar_label: 'ver.1.10.1 (26.03.24)'
description: nachocode Client SDK ver.1.10.1의 릴리즈노트입니다.
image: /img/docs/releases/release_note_sdk_detail.png
---

# Release: ver.1.10.1 (2026-03-24)

import { ThumbnailImage } from '@site/src/components/common/image/thumbnail-image';

<ThumbnailImage src='/img/docs/releases/release_note_sdk_detail.png'/>

> 🔔 **배포 일자:** 2026-03-24

이번 업데이트 **v1.10.1**에서는 **반환 타입 개선**을 통해 개발자 경험을 향상시켰습니다.

`user` 및 `push` 네임스페이스의 주요 메서드에 **명확한 반환 타입**을 추가하여 에러 처리와 결과 확인이 더욱 용이해졌습니다.

## 주요 변경 사항 (ver.1.10.1)

### 개선 사항 {#improvements}

#### 타입 정의 명확화

기존 타입명이 더욱 명확하게 변경되었습니다.

- **변경된 타입**

  | 기존 (v1.10.0)           | 변경 (v1.10.1)              | 설명                            |
  | ------------------------ | --------------------------- | ------------------------------- |
  | `MarketingAllowedResult` | `GetMarketingAllowedResult` | 마케팅 동의 상태 조회 결과 타입 |

  ```typescript
  /**
   * Marketing allowed result from native layer
   * @since 1.10.0
   * @updated 1.10.1 - renamed from MarketingAllowedResult to GetMarketingAllowedResult
   */
  export declare type GetMarketingAllowedResult = {
    guest: boolean | null;
    user: boolean | null;
  };
  ```

---

#### `user` 네임스페이스 - 반환 타입 개선

사용자 ID 관리 메서드의 반환 타입이 개선되어 성공/실패 상태를 명확하게 확인할 수 있습니다.

- **개선된 메서드**

  | 메서드           | 개선 내용                                                  |
  | ---------------- | ---------------------------------------------------------- |
  | `setUserId()`    | `void` → `Promise<UserOperationResult>` 반환 타입으로 변경 |
  | `deleteUserId()` | `void` → `Promise<UserOperationResult>` 반환 타입으로 변경 |

- **새로운 타입 정의**

  ```typescript
  /**
   * User operation result from native layer
   * @since 1.10.1
   */
  export declare type UserOperationResult = {
    status: 'success' | 'error';
    statusCode: number;
    message?: string;
  };
  ```

- **사용 예제**

  ```javascript
  // setUserId - 이전 (v1.10.0)
  Nachocode.user.setUserId('user_12345');

  // setUserId - 개선 (v1.10.1)
  const result = await Nachocode.user.setUserId('user_12345');
  if (result.status === 'success') {
    console.log('사용자 ID가 성공적으로 설정되었습니다.');
  } else {
    console.error('사용자 ID 설정 실패: ', result.message);
  }
  ```

  ```javascript
  // deleteUserId - 이전 (v1.10.0)
  Nachocode.user.deleteUserId();

  // deleteUserId - 개선 (v1.10.1)
  const result = await Nachocode.user.deleteUserId();
  if (result.status === 'success') {
    console.log('사용자 ID가 성공적으로 삭제되었습니다.');
  } else {
    console.error('사용자 ID 삭제 실패: ', result.message);
  }
  ```

---

#### `push` 네임스페이스 - 반환 타입 개선

마케팅 및 야간 푸시 동의 설정 메서드의 반환 타입이 개선되어 성공/실패 상태를 명확하게 확인할 수 있습니다.

- **개선된 메서드**

  | 메서드                  | 개선 내용                                                                 |
  | ----------------------- | ------------------------------------------------------------------------- |
  | `setMarketingAllowed()` | `Promise<void>` → `Promise<SetMarketingAllowedResult>` 반환 타입으로 변경 |
  | `setNightAllowed()`     | `Promise<void>` → `Promise<SetMarketingAllowedResult>` 반환 타입으로 변경 |

- **새로운 타입 정의**

  ```typescript
  /**
   * Set marketing allowed result from native layer
   * @since 1.10.1
   */
  export declare type SetMarketingAllowedResult = {
    status: 'success' | 'error';
    statusCode: number;
    message?: string;
  };
  ```

- **사용 예제**

  ```javascript
  // setMarketingAllowed - 이전 (v1.10.0)
  await Nachocode.push.setMarketingAllowed(true);

  // setMarketingAllowed - 개선 (v1.10.1)
  const result = await Nachocode.push.setMarketingAllowed(true);
  if (result.status === 'success') {
    console.log('마케팅 푸시 동의가 성공적으로 설정되었습니다.');
  } else {
    console.error('마케팅 푸시 동의 설정 실패: ', result.message);
  }
  ```

  ```javascript
  // setNightAllowed - 이전 (v1.10.0)
  await Nachocode.push.setNightAllowed(true);

  // setNightAllowed - 개선 (v1.10.1)
  const result = await Nachocode.push.setNightAllowed(true);
  if (result.status === 'success') {
    console.log('야간 푸시 동의가 성공적으로 설정되었습니다.');
  } else {
    console.error('야간 푸시 동의 설정 실패: ', result.message);
  }
  ```

---

### 업데이트 방법

nachocode JavaScript Client SDK **ver.1.10.1**을 사용하려면 아래의 스크립트를 업데이트하십시오.

#### SDK CDN 주소

```html
<script src="https://cdn.nachocode.io/nachocode/client-sdk/@1.10.1/client-sdk.min.js"></script>
```

:::tip 문의하기
nachocode는 지속적으로 사용자의 개발 경험 향상을 위해 최선을 다하겠습니다.  
추가적인 요청이나 문의사항은 언제든지 지원팀에게 [이메일](mailto:support@nachocode.io)을 보내주세요.
감사합니다.
:::
