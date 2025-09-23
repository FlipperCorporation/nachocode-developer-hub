---
sidebar_label: 'ver.1.6.3 (25.07.28)'
description: nachocode Client SDK ver.1.6.3의 릴리즈노트입니다.
image: /img/docs/releases/release_note_sdk_detail.png
---

# Release: ver.1.6.3 (2025-07-28)

![sdk_detail](/img/docs/releases/release_note_sdk_detail.png)

> 🔔 **배포 일자:** 2025-07-28

이번 업데이트 **v1.6.3**에서는 새로운 기능 추가, 기존 기능 개선, 버그 수정 및 문서 업데이트를 포함하여 SDK의 안정성과 사용성을 향상시키는 데 중점을 두었습니다.

**앱 내부에서 기본 브라우저 엔진으로 링크 열기** 기능이 새롭게 추가되었고 **클립보드 기능이 웹 플랫폼도 지원**하도록 업데이트되었습니다.

## 주요 변경 사항 (ver.1.6.3)

### 새로운 기능 {#new-features}

- **`browser` 네임스페이스**: 앱 내부에서 기본 브라우저 엔진으로 링크 열기 옵션 추가
  - [`browser.openLink`](/docs/sdk/namespaces/browser#open-link) 메서드에 새로운 옵션인 `'internal_default'`가 추가되었습니다.
  - `'internal_default'` 옵션은 앱 내에서 OS의 기본 브라우저 엔진 ([`SFSafariViewController`](https://developer.apple.com/documentation/safariservices/sfsafariviewcontroller), [`Chrome Custom Tabs`](https://developer.chrome.com/docs/android/custom-tabs?hl=ko))을 사용하여 URL을 열도록 지원합니다.
  - `WebView` 환경과 달리 세션 및 상태 공유가 되지 않으나, 기본 모바일 브라우저의 모든 기능을 완벽히 지원합니다.
  - 사용 예시

    ```javascript
    // OS 기본 인앱 브라우저로 링크 열기 (Safari, Chrome 등)
    Nachocode.browser.openLink('https://nachocode.io', 'internal_default');
    ```

:::info
➡️ [`browser` 네임스페이스 문서](/docs/sdk/namespaces/browser)에서 상세 내용을 확인할 수 있습니다.
:::

---

### 개선 사항 {#improvements}

- **`clipboard` 네임스페이스**: 클립보드 기능 웹(Web) 플랫폼 지원 추가
  - [`clipboard.getText`](/docs/sdk/namespaces/clipboard#get-text)와 [`clipboard.setText`](/docs/sdk/namespaces/clipboard#set-text) 메서드가 이제 웹 환경을 공식적으로 지원합니다.
  - 웹과 네이티브(iOS, Android)에서 **하나의 인터페이스로 일관된 클립보드 제어 경험을 제공**합니다.
  - 사용 예시

  ```javascript
  // 웹 또는 네이티브 환경에서 클립보드로 텍스트 복사
  Nachocode.clipboard.setText('복사할 텍스트', (status, message) => {
    if (status === 'success') {
      console.log('클립보드에 성공적으로 복사되었습니다.');
    } else {
      console.error(`복사 실패: ${message}`);
    }
  });
  ```

:::info
➡️ [`clipboard` 네임스페이스 문서](/docs/sdk/namespaces/clipboard)에서 상세 내용을 확인할 수 있습니다.
:::

- **`push` 네임스페이스**: 푸시 토큰 관리 기능 강화
  - [`push.registerPushToken`](/docs/sdk/namespaces/push#register-push-token)과 [`push.deletePushToken`](/docs/sdk/namespaces/push#delete-push-token) 메서드의 로직과 반환 타입이 개선되었습니다.
  - 이제 두 메서드는 [`Promise<PushTokenResult>`](/docs/sdk/namespaces/push#push-token-result)를 반환하여, 서버와의 통신 결과를 더 명확하게 처리할 수 있습니다.
  - `deletePushToken` 메서드에서 `userId` 파라미터가 선택 사항으로 변경되었습니다. `userId`를 전달하지 않으면 현재 기기의 토큰을 삭제합니다.

  ```typescript
  // 개선된 푸시 토큰 등록 메서드 시그니처
  function registerPushToken(userId: string): Promise<PushTokenResult>;
  ```

  ```typescript
  // 개선된 푸시 토큰 삭제 메서드 시그니처 (userId는 선택 사항)
  function deletePushToken(userId?: string): Promise<PushTokenResult>;
  ```

  - 사용 예시

    ```javascript
    // 토큰 등록
    Nachocode.push.registerPushToken('user_id').then(result => {
      if (result.status === 'success') {
        console.log('토큰이 성공적으로 등록되었습니다.');
      } else {
        console.error(`등록 실패: ${result.message}`);
      }
    });
    ```

    ```javascript
    // 현재 디바이스 토큰 삭제 (userId 생략 가능)
    Nachocode.push.deletePushToken().then(result => {
      if (result.status === 'success') {
        console.log('현재 디바이스의 푸시 토큰이 삭제되었습니다.');
      } else {
        console.error(`삭제 실패: ${result.message}`);
      }
    });
    ```

- **웹 환경 안정성 및 성능 향상**
  - 웹 환경에서 불필요한 인증 및 네이티브 호출을 조기에 반환(early return)하도록 로직을 개선하여 전반적인 성능과 안정성을 높였습니다.

- **TypeScript 정의**(`Nachocode.d.ts`) **업데이트**
  - v.1.6.3 변경 사항을 반영하여 타입 선언 파일의 타입 정의, 주석, 버전 정보가 전반적으로 업데이트되었습니다.
  - 개발자 경험 향상을 위해 여러 메서드의 타입 정보와 설명, 버전 명세를 보완하였습니다.

:::info
➡️ [`Nachocode.d.ts`](https://github.com/FlipperCorporation/nachocode-client-sdk-js/blob/main/releases/Nachocode.d.ts)에서 최신 정의를 확인하세요.
:::

---

### 업데이트 방법

nachocode JavaScript Client SDK **ver.1.6.3**를 사용하려면 아래의 스크립트를 업데이트하십시오.

#### SDK CDN 주소

```html
<script src="https://cdn.nachocode.io/nachocode/client-sdk/@1.6.3/client-sdk.min.js"></script>
```

:::tip 문의하기
nachocode는 지속적으로 사용자의 개발 경험 향상을 위해 최선을 다하겠습니다.  
추가적인 요청이나 문의사항은 언제든지 지원팀에게 [이메일](mailto:support@nachocode.io)을 보내주세요.  
감사합니다.  
:::
