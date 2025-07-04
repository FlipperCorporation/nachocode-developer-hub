---
sidebar_label: 'ver.1.4.2 (25.02.19)'
description: nachocode Client SDK ver.1.4.2의 릴리즈노트입니다.
---

# Release: ver.1.4.2 (2025-02-19)

![sdk_detail](/img/docs/releases/release_note_sdk_detail.png)

> 🔔 **배포 일자:** 2025-02-19

이번 업데이트에서는 **설정 페이지 열기**와 **네이티브 키보드 이벤트** 기능이 추가되었습니다.

## 주요 변경 사항 (ver.1.4.2)

### 1. 네이티브 설정 페이지 열기 기능 추가 (`setting` 네임스페이스)

- `openSetting` 메서드를 사용하여 사용자가 **OS 설정 페이지를 직접 열 수 있는 기능**이 추가되었습니다.
- ➡️ [`setting` 네임스페이스 문서](/docs/sdk/namespaces/setting)에서 상세 정보를 확인할 수 있습니다.

#### 추가된 메서드

| 메서드                            | 설명                          |
| --------------------------------- | ----------------------------- |
| `Nachocode.setting.openSetting()` | OS의 앱 설정 페이지를 엽니다. |

#### 사용 예제 (설정 페이지)

```javascript
// OS의 설정 페이지 열기
Nachocode.setting.openSetting();
```

---

### 2. 네이티브 키보드 이벤트 추가 (`event` 네임스페이스)

- 네이티브 키보드가 열리고 닫힐 때 감지할 수 있는 `keyboardshown`, `keyboardhidden` 이벤트가 추가되었습니다.
- 해당 이벤트를 구독하여 키보드 상태 변화를 처리할 수 있습니다.
- ➡️ [`event` 네임스페이스 문서](/docs/sdk/namespaces/event)에서 상세 정보를 확인할 수 있습니다.

#### 추가된 이벤트

| 이벤트           | 설명                                  |
| ---------------- | ------------------------------------- |
| `keyboardshown`  | 네이티브 키보드가 열릴 때 호출됩니다. |
| `keyboardhidden` | 네이티브 키보드가 닫힐 때 호출됩니다. |

#### 사용 예제 (키보드 이벤트)

```javascript
// 키보드가 열릴 때 이벤트 감지
Nachocode.event.on('keyboardshown', () => {
  console.log('키보드가 열렸습니다.');
});

// 키보드가 닫힐 때 이벤트 감지
Nachocode.event.on('keyboardhidden', () => {
  console.log('키보드가 닫혔습니다.');
});
```

---

### 업데이트 방법

nachocode JavaScript Client SDK **ver.1.4.2**를 사용하려면 아래의 스크립트를 업데이트하십시오.

#### SDK CDN 주소

```html
<script src="https://cdn.nachocode.io/nachocode/client-sdk/@1.4.2/client-sdk.min.js"></script>
```
