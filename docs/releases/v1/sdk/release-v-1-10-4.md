---
sidebar_label: 'ver.1.10.4 (26.06.17)'
description: nachocode Client SDK ver.1.10.4의 릴리즈노트입니다.
image: /img/docs/releases/release_note_sdk_detail.png
---

# Release: ver.1.10.4 (2026-06-17)

import { ThumbnailImage } from '@site/src/components/common/image/thumbnail-image';

<ThumbnailImage src='/img/docs/releases/release_note_sdk_detail.png'/>

> 🔔 **배포 일자:** 2026-06-17

이번 업데이트 **v1.10.4**에서는 **사용자 탈퇴 기능**이 추가되었습니다.

새로운 [`withdrawUser()`](/docs/sdk/namespaces/user#withdraw-user) 메서드를 통해
**nachocode 서버 및 네이티브 레이어에 저장된 사용자 관련 데이터를 완전히 삭제**할 수 있어, GDPR 및 개인정보 보호 정책을 준수하는 사용자 탈퇴 기능을 손쉽게 구현할 수 있습니다.

## 주요 변경 사항 (ver.1.10.4)

### 새로운 기능 {#new-features}

#### `user` 네임스페이스 - 사용자 탈퇴 기능

사용자 탈퇴 시 **nachocode 서버 및 네이티브 레이어**에 저장된 모든 사용자 관련 데이터를 삭제할 수 있는 새로운 메서드가 추가되었습니다.

- **추가된 메서드**

  | 메서드                                                      | 설명                                                                        |
  | ----------------------------------------------------------- | --------------------------------------------------------------------------- |
  | [`withdrawUser()`](/docs/sdk/namespaces/user#withdraw-user) | nachocode 서버 및 네이티브 레이어에 저장된 사용자 관련 데이터를 완전히 삭제 |

- **타입 정의**

  ```typescript
  /**
   * Function to withdraw current user in the native layer, deletes all data related to the user.
   * @since 1.10.4
   */
  function withdrawUser(): Promise<UserOperationResult>;
  ```

- **사용 예제**

  ```javascript
  // 사용자 탈퇴 처리
  const result = await Nachocode.user.withdrawUser();

  if (result.status === 'success') {
    console.log('사용자 탈퇴가 완료되었습니다.');
    // 탈퇴 완료 후 처리 (ex. 로그인 페이지로 이동)
  } else {
    console.error('사용자 탈퇴 실패: ', result.message);
  }
  ```

  ```javascript
  // 탈퇴 확인 후 처리하는 예제
  async function handleUserWithdraw() {
    const confirmWithdraw = confirm(
      '정말로 탈퇴하시겠습니까? 모든 데이터가 삭제됩니다.'
    );

    if (confirmWithdraw) {
      const result = await Nachocode.user.withdrawUser();

      if (result.status === 'success') {
        alert('탈퇴가 완료되었습니다.');
        // 로그인 페이지로 이동
        window.location.href = '/login';
      } else {
        alert('탈퇴 처리 중 오류가 발생했습니다: ' + result.message);
      }
    }
  }
  ```

:::info 사용자 데이터 삭제 범위

`withdrawUser()` 메서드는 **nachocode 서버 및 네이티브 레이어**에 저장된 데이터를 모두 삭제합니다.

#### **nachocode 서버 측 데이터 삭제**

- 해당 `userId`와 연결된 **모든 디바이스의 푸시 토큰 등록 해제**
- 해당 `userId`의 **마케팅 동의 정보 완전 삭제** (게스트, 유저 모두)
- 해당 `userId`의 **모든 사용자 설정 및 데이터 삭제**

#### **현재 디바이스 (네이티브 레이어) 데이터 초기화**

- 사용자 ID
- 마케팅 수신 동의 정보 (게스트 및 유저)
- 야간 푸시 수신 동의 정보 (게스트 및 유저)
- 기타 사용자 관련 모든 설정 및 데이터

:::

:::warning 주의사항

- `withdrawUser()`는 **복구할 수 없는 작업**이므로 실행 전에 사용자에게 명확한 확인 절차를 제공하는 것을 권장합니다.
- **nachocode 서버 측에서 해당 userId와 매핑되어 저장된** 모든 디바이스의 사용자 데이터가 삭제됩니다.
- 탈퇴 후 재가입 시 모든 동의를 다시 받아야 합니다.

:::

---

### 업데이트 방법

nachocode JavaScript Client SDK **ver.1.10.4**를 사용하려면 아래의 스크립트를 업데이트하십시오.

#### SDK CDN 주소

```html
<script src="https://cdn.nachocode.io/nachocode/client-sdk/@1.10.4/client-sdk.min.js"></script>
```

:::tip 문의하기
nachocode는 지속적으로 사용자의 개발 경험 향상을 위해 최선을 다하겠습니다.  
추가적인 요청이나 문의사항은 언제든지 지원팀에게 [이메일](mailto:support@nachocode.io)을 보내주세요.
감사합니다.
:::
