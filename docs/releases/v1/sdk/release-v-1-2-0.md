---
sidebar_label: 'ver.1.2.0 (24.10.02)'
description: nachocode Client SDK ver.1.2.0의 릴리즈노트입니다.
image: /img/docs/releases/release_note_sdk_detail.png
---

# Release: ver.1.2.0 (2024-10-02)

import { ThumbnailImage } from '@site/src/components/common/image/thumbnail-image';

<ThumbnailImage src='/img/docs/releases/release_note_sdk_detail.png'/>

> 🔔 **배포 일자:** 2024-10-02

이번 업데이트에서는 **백 키 제어**, **앱 내부 저장소**, **권한 제어**, **앱 라이프 사이클 이벤트**, **앱 소스 버전 확인** 등의 기능이 추가되었습니다.

## 주요 변경 사항 (ver.1.2.0)

### 추가된 기능 목록

- [백 키 제어 기능](#1-백-키-제어-기능-추가-backkey-네임스페이스-android-전용) ([`backkey`](/docs/sdk/namespaces/backkey))
- [앱 내부 저장소 기능](#2-앱-내부-저장소-기능-추가-preference-네임스페이스) ([`preference`](/docs/sdk/namespaces/preference))
- [권한 제어 기능](#3-권한-제어-기능-추가-permission-네임스페이스) ([`permission`](/docs/sdk/namespaces/permission))
- [앱 라이프 사이클 이벤트](#4-앱-라이프-사이클-이벤트-추가-event-네임스페이스) ([`event`](/docs/sdk/namespaces/event))
- [앱 소스 버전 확인](#5-앱-소스-버전-확인-기능-추가-env-네임스페이스) ([`env`](/docs/sdk/namespaces/env))

---

### 1. 백 키 제어 기능 추가 (`backkey` 네임스페이스, Android 전용)

- ![Android Only](https://img.shields.io/badge/Android_only-green?logo=android) **Android만 지원**.
- 안드로이드 기기의 네이티브 **백 키 이벤트**를 제어할 수 있습니다.
- `addEvent`, `removeEvent`, `clearEvent` 메서드를 통해 뒤로 가기 키 눌림 시 실행될 커스텀 이벤트를 등록하거나 제거할 수 있습니다.
- ➡️ [`backkey` 네임스페이스 문서](/docs/sdk/namespaces/backkey)에서 상세 정보를 확인할 수 있습니다.

#### 추가된 메서드 (`backkey`)

| 메서드                      | 설명                                    |
| --------------------------- | --------------------------------------- |
| `addEvent(event, eventId?)` | 백 키 이벤트 리스너를 추가합니다.       |
| `clearEvent()`              | 모든 백 키 이벤트 리스너를 제거합니다.  |
| `getLastEvent()`            | 마지막 등록된 이벤트의 ID를 반환합니다. |
| `removeEvent(eventId?)`     | 특정 백 키 이벤트 리스너를 제거합니다.  |

#### 사용 예제 (백 키 제어)

- `addEvent`

```javascript
// 이벤트 ID를 따로 제공하지 않을 경우 1부터 순서대로 아이디를 부여합니다.
Nachocode.backkey.addEvent(eventId => {
  console.log('Back key pressed.');
  console.log(eventId); // 1
});
```

- `removeEvent`

```javascript
// 마지막으로 등록된 이벤트를 제거합니다.
Nachocode.backkey.removeEvent();
```

---

### 2. 앱 내부 저장소 기능 추가 (`preference` 네임스페이스)

- 앱 내부에 데이터를 저장하고 조회할 수 있습니다.
- `setData` 메서드로 데이터를 저장하고 `getData` 메서드로 저장된 데이터를 조회할 수 있습니다.
- ➡️ [`preference` 네임스페이스 문서](/docs/sdk/namespaces/preference)에서 상세 정보를 확인할 수 있습니다.

#### 추가된 메서드 (`preference`)

| 메서드                   | 설명                                    |
| ------------------------ | --------------------------------------- |
| `setData(key, data)`     | 데이터를 앱 내부 저장소에 저장합니다.   |
| `getData(key, callback)` | 앱 내부 저장소에서 데이터를 불러옵니다. |

#### 사용 예제 (앱 내부 저장소)

```javascript
// 데이터 저장
Nachocode.preference.setData('user_name', 'nacho');

// 데이터 조회
Nachocode.preference.getData('user_name', data => {
  console.log(`조회된 데이터: ${data}`); // nacho
});
```

---

### 3. 권한 제어 기능 추가 (`permission` 네임스페이스)

- 앱 권한 허용 여부를 **확인**하거나 **요청**할 수 있습니다.
- `checkPermission` 메서드를 통해 특정 권한의 허용 상태를 체크하고, 필요 시 네이티브 권한 요청을 수행합니다.
- ➡️ [`permission` 네임스페이스 문서](/docs/sdk/namespaces/permission)에서 상세 정보를 확인할 수 있습니다.

#### 추가된 메서드 (`permission`)

| 메서드                                   | 설명                                             |
| ---------------------------------------- | ------------------------------------------------ |
| `checkPermission({type, ask}, callback)` | 앱 권한 허용 여부를 확인하고 필요 시 요청합니다. |

#### 사용 예제 (권한 제어)

```javascript
// ex. 푸시 알림 권한 허용 여부를 확인합니다.
// 권한을 허용하지 않았을 경우 OS 팝업을 통해 권한을 요청합니다.
Nachocode.permission.checkPermission({ type: 'push', ask: true }, granted => {
  // 앱 유저가 권한을 허용여부가 매개 변수 `granted`에 전달 됩니다.
  if (granted) {
    alert('푸시 권한 허용됨.');
  } else {
    alert('푸시 권한 거부됨.');
  }
});
```

---

### 4. 앱 라이프 사이클 이벤트 추가 (`event` 네임스페이스)

- 앱이 백그라운드 ↔ 포그라운드 전환 시 이벤트를 감지할 수 있습니다.
- ➡️ [`event` 네임스페이스 문서](/docs/sdk/namespaces/event)에서 상세 정보를 확인할 수 있습니다.

#### 추가된 이벤트 (`event`)

| 이벤트       | 설명                                         |
| ------------ | -------------------------------------------- |
| `background` | 앱이 백그라운드 상태로 전환될 때 호출됩니다. |
| `foreground` | 앱이 포그라운드 상태로 전환될 때 호출됩니다. |

#### 사용 예제 (앱 라이프 사이클)

```javascript
// 앱이 백그라운드로 전환될 때 동작할 이벤트를 등록합니다.
Nachocode.event.on('background', () => {
  // 앱이 백그라운드로 전환될 때 동작할 로직을 작성합니다.
  console.log('앱이 백그라운드로 전환되었습니다.');
});

// 앱이 백그라운드에서 다시 포그라운드로 전환될 때 동작할 이벤트를 등록합니다.
Nachocode.event.on('foreground', () => {
  // 앱이 포그라운드로 전환될 때 동작할 로직을 작성합니다.
  // ex. 페이지 새로고침, 데이터 불러오기 등
  console.log('앱이 포그라운드로 돌아왔습니다.');
});
```

---

### 5. 앱 소스 버전 확인 기능 추가 (`env` 네임스페이스)

- 현재 앱 소스 버전을 확인할 수 있는 `getAppSourceVersion` 메서드가 추가되었습니다.
- 앱 소스 버전이란 nachocode에서 제공하는 기본 앱 소스코드의 버전을 의미합니다.
- SDK 버전보다 앱 소스 버전이 낮을 경우 SDK 일부 기능 사용이 제한됩니다.
- ➡️ [`env` 네임스페이스 문서](/docs/sdk/namespaces/env)에서 상세 정보를 확인할 수 있습니다.

#### 추가된 메서드 (`env`)

| 메서드                  | 설명                            |
| ----------------------- | ------------------------------- |
| `getAppSourceVersion()` | 현재 앱 소스 버전을 반환합니다. |

#### 사용 예제 (소스 버전 확인)

```javascript
const appSourceVersion = Nachocode.env.getAppSourceVersion();
console.log(`현재 앱 소스 버전: ${appSourceVersion}`); // ex. 1.2.0
```

---

### 업데이트 방법

nachocode JavaScript Client SDK **ver.1.2.0**를 사용하려면 아래의 스크립트를 업데이트하십시오.

#### SDK CDN 주소

```html
<script src="https://cdn.nachocode.io/nachocode/client-sdk/@1.2.0/client-sdk.min.js"></script>
```
