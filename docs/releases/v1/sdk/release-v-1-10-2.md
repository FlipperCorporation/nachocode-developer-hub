---
sidebar_label: 'ver.1.10.2 (26.03.27)'
description: nachocode Client SDK ver.1.10.2의 릴리즈노트입니다.
image: /img/docs/releases/release_note_sdk_detail.png
---

# Release: ver.1.10.2 (2026-03-27)

import { ThumbnailImage } from '@site/src/components/common/image/thumbnail-image';

<ThumbnailImage src='/img/docs/releases/release_note_sdk_detail.png'/>

> 🔔 **배포 일자:** 2026-03-27

이번 업데이트 **v1.10.2**에서는 **마케팅 수신 동의 일괄 관리 기능**이 추가되었습니다.

새로운 [`setMarketingPreference()`](/docs/sdk/namespaces/push#set-marketing-preference) 및 [`getMarketingPreference()`](/docs/sdk/namespaces/push#get-marketing-preference) 메서드를 통해  
**마케팅 푸시 동의**와 **야간 마케팅 푸시 동의**를 한 번의 호출로 설정하고 조회할 수 있어, 사용자 경험과 개발 편의성이 향상되었습니다.

:::warning Breaking Change

[`getNightAllowed()`](/docs/sdk/namespaces/push#get-night-allowed) 메서드의 반환 타입이 변경되었습니다.

- **기존 코드**

  ```javascript
  // v1.10.1 - boolean | null 반환
  const nightAllowed = await Nachocode.push.getNightAllowed();
  if (nightAllowed === true) {
    // ...
  }
  ```

- **새로운 코드**

  ```javascript
  // v1.10.2 - 객체 형태로 반환
  const nightAllowed = await Nachocode.push.getNightAllowed();
  if (nightAllowed.user === true) {
    // user 또는 guest 속성 사용
  }
  ```

> 📢 기존 [`getNightAllowed()`](/docs/sdk/namespaces/push#get-night-allowed)를 사용하던 코드는 반환 형식 변경에 따라 **수정이 필요**합니다.

:::

## 주요 변경 사항 (ver.1.10.2)

### 새로운 기능 {#new-features}

#### `push` 네임스페이스 - 마케팅 수신 동의 일괄 관리

마케팅 푸시 동의와 야간 마케팅 푸시 동의를 한 번에 설정하고 조회할 수 있는 새로운 메서드가 추가되었습니다.

- **추가된 메서드**

  | 메서드                                                                           | 설명                       |
  | -------------------------------------------------------------------------------- | -------------------------- |
  | [`setMarketingPreference()`](/docs/sdk/namespaces/push#set-marketing-preference) | 마케팅 수신 동의 일괄 설정 |
  | [`getMarketingPreference()`](/docs/sdk/namespaces/push#get-marketing-preference) | 마케팅 수신 동의 일괄 조회 |

- **새로운 타입 정의**

  ```typescript
  export declare type GetMarketingPreferenceResult = {
    guest: {
      marketingAllowed: boolean | null;
      nightAllowed: boolean | null;
    };
    user: {
      marketingAllowed: boolean | null;
      nightAllowed: boolean | null;
    };
  };
  ```

- **사용 예제**

  ```javascript
  // setMarketingPreference - 마케팅 수신 동의 한 번에 설정
  const result = await Nachocode.push.setMarketingPreference({
    marketingAllowed: true,
    nightAllowed: false,
  });

  if (result.status === 'success') {
    console.log('마케팅 수신 동의가 성공적으로 설정되었습니다.');
  } else {
    console.error('마케팅 수신 동의 설정 실패: ', result.message);
  }
  ```

  ```javascript
  // getMarketingPreference - 마케팅 수신 동의 한 번에 조회
  const preference = await Nachocode.push.getMarketingPreference();

  console.log('게스트 마케팅 동의:', preference.guest.marketingAllowed);
  console.log('게스트 야간 동의:', preference.guest.nightAllowed);
  console.log('회원 마케팅 동의:', preference.user.marketingAllowed);
  console.log('회원 야간 동의:', preference.user.nightAllowed);

  // 동의 상태에 따른 로직 작성
  if (preference.user.marketingAllowed === true) {
    if (preference.user.nightAllowed === true) {
      console.log('마케팅 푸시 수신 동의 (야간 포함)');
    } else {
      console.log('마케팅 푸시 수신 동의 (야간 제외)');
    }
  } else if (preference.user.marketingAllowed === false) {
    console.log('마케팅 푸시 수신 거부');
  } else {
    console.log('아직 선택하지 않음');
  }
  ```

---

### 개선 사항 {#improvements}

[`getNightAllowed()`](/docs/sdk/namespaces/push#get-night-allowed) 메서드의 반환 타입이 [`getMarketingAllowed()`](/docs/sdk/namespaces/push#get-marketing-allowed)와 동일한 형식으로 변경되어 일관성이 개선되었습니다.  
**게스트 사용자와 로그인 사용자의 동의를 명확히 구분**하여 향후 확장성 및 유지보수성을 개선하였습니다.

- **개선된 메서드**

  | 메서드                                                             | 개선 내용                                                                  |
  | ------------------------------------------------------------------ | -------------------------------------------------------------------------- |
  | [`getNightAllowed()`](/docs/sdk/namespaces/push#get-night-allowed) | 반환 타입 `Promise<GetMarketingAllowedResult>`로 변경하여 타입 일관성 개선 |

- **변경 전 (v1.10.1)**

  ```typescript
  // 이전 버전: boolean | null만 반환
  function getNightAllowed(): Promise<boolean | null>;
  ```

- **변경 후 (v1.10.2)**

  ```typescript
  // 새 버전: 게스트/유저 구분하여 반환
  function getNightAllowed(): Promise<GetMarketingAllowedResult>;
  // 반환 형식: { guest: boolean | null, user: boolean | null }
  ```

---

### 업데이트 방법

nachocode JavaScript Client SDK **ver.1.10.2**를 사용하려면 아래의 스크립트를 업데이트하십시오.

#### SDK CDN 주소

```html
<script src="https://cdn.nachocode.io/nachocode/client-sdk/@1.10.2/client-sdk.min.js"></script>
```

:::tip 문의하기
nachocode는 지속적으로 사용자의 개발 경험 향상을 위해 최선을 다하겠습니다.  
추가적인 요청이나 문의사항은 언제든지 지원팀에게 [이메일](mailto:support@nachocode.io)을 보내주세요.
감사합니다.
:::
