---
sidebar_label: 'ver.1.11.2 (26.08.06)'
description: nachocode Client SDK ver.1.11.2의 릴리즈노트입니다.
image: /img/docs/releases/release_note_sdk_detail.png
---

# Release: ver.1.11.2 (2026-08-06)

import { ThumbnailImage } from '@site/src/components/common/image/thumbnail-image';

<ThumbnailImage src='/img/docs/releases/release_note_sdk_detail.png'/>

> 🔔 **배포 일자:** 2026-08-06

이번 업데이트 **v1.11.2**에서는 **`setting` 네임스페이스에 신규 메서드가 추가**되고, **`user` 네임스페이스의 `setUserId` 동작이 개선**되었습니다.

## 주요 변경 사항 (ver.1.11.2)

### 새로운 기능 {#new-features}

- **`setting` 네임스페이스**: `openAppSettingView()` 메서드 추가

  - 앱이 자체적으로 제공하는 **네이티브 설정 화면으로 이동**할 수 있습니다.
  - ➡️ [**`setting` 네임스페이스 문서 바로가기**](/docs/sdk/namespaces/setting#open-app-setting-view)

### 개선 사항 {#improvements}

- **`user` 네임스페이스**: `setUserId()` 동작 개선

  - `setUserId()` 호출 시 [`registerPushToken()`](/docs/sdk/namespaces/push#register-push-token)에서 수행하던 **푸시 토큰 등록을 내부적으로 처리**하도록 개선되었습니다.
  - 이를 통해 사용자 ID와 푸시 토큰이 앱 서버에 함께 등록되는 것이 보장됩니다.
  - ➡️ [**`user` 네임스페이스 문서 바로가기**](/docs/sdk/namespaces/user#set-user-id)

---

### 네이티브 설정 화면 이동 기능 (`setting` 네임스페이스)

앱이 자체적으로 제공하는 네이티브 설정 화면으로 이동하는 기능이 추가되었습니다.

#### 추가된 메서드 (`setting`)

| 메서드                 | 설명                              |
| ---------------------- | --------------------------------- |
| `openAppSettingView()` | 앱 내 네이티브 설정 화면으로 이동 |

<div>
  <img alt="nachocode-app-native-setting-view" src="/img/docs/settings/nachocode_app_native_setting_view.png" style={{maxHeight:"600px", border:"1px solid #dbdbdb", marginBottom: "1.5rem"}} />
</div>

네이티브 앱 설정 화면에서는 다음과 같은 기능을 제공합니다.

- 기기 알림 권한 설정
- 마케팅 푸시 알림 동의 설정
- 야간 푸시 알림 동의 설정
- 앱 버전 정보 확인
- 캐시 데이터 삭제

:::info `openSetting()`과의 차이

- `openSetting()` : **OS(운영체제) 설정 화면**으로 이동합니다.
- `openAppSettingView()` : **앱이 자체적으로 제공하는 네이티브 설정 화면**으로 이동합니다.

:::

#### 사용 예제 {#setting-examples}

```javascript
// 앱 내 네이티브 설정 화면 열기
Nachocode.setting.openAppSettingView();
```

---

### 사용자 ID 설정 개선 (`user` 네임스페이스)

`setUserId()` 메서드가 사용자 ID를 설정할 때, 내부적으로 푸시 토큰 등록을 함께 수행하도록 개선되었습니다.

:::tip 푸시 토큰 관련
`setUserId()`를 호출하는 방식으로 로직 작성 시, [`registerPushToken()`](/docs/sdk/namespaces/push#register-push-token)을 중복해서 호출하지 않는 것을 권장합니다. `setUserId()` 메서드는 기존 `registerPushToken()`이 수행하던 모든 작업을 수행하며, 추가로 유저 정보 동기화도 수행합니다.
:::

#### 사용 예제 {#user-examples}

```javascript
// 사용자 로그인 시 사용자 ID 설정 (푸시 토큰 등록 포함)
const result = await Nachocode.user.setUserId('user_12345');

if (result.status === 'success') {
  console.log('사용자 ID 및 푸시 토큰이 성공적으로 등록되었습니다.');
} else {
  console.error('사용자 ID 설정 실패:', result.message);
}
```

---

### 기타 개선 사항 {#etc-improvements}

- **TypeScript 정의**(`Nachocode.d.ts`) **업데이트**
  - v.1.11.2 변경 사항을 반영하여 타입 정의가 업데이트되었습니다.
  - `setting` 네임스페이스에 `openAppSettingView()` 메서드가 추가되었습니다.
  - `user` 네임스페이스의 `setUserId()` 동작 개선 사항이 반영되었습니다.

:::info
➡️ [`Nachocode.d.ts`](https://github.com/FlipperCorporation/nachocode-client-sdk-js/blob/main/releases/Nachocode.d.ts)에서 최신 정의를 확인하세요.
:::

---

### 업데이트 방법

nachocode JavaScript Client SDK **ver.1.11.2**를 사용하려면 아래의 스크립트를 업데이트하십시오.

#### SDK CDN 주소

```html
<script src="https://cdn.nachocode.io/nachocode/client-sdk/@1.11.2/client-sdk.min.js"></script>
```

---

:::tip 문의하기

nachocode는 지속적으로 사용자의 개발 경험
향상을 위해 최선을 다하겠습니다.  
추가적인 요청이나 문의사항은 언제든지
지원팀에게 [이메일](mailto:support@nachocode.io)을 보내주세요. 감사합니다.

:::
