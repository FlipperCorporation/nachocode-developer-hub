---
sidebar_label: 'ver.1.1.0 (24.08.20)'
---

# Release: ver.1.1.0 (2024-08-20)

> 🔔 **배포 일자:** 2024-08-20

이번 업데이트에서는 **공유하기**, **브라우저 열기**, **진동 및 햅틱 피드백** 기능이 추가되었습니다.

## 주요 변경 사항 (ver.1.1.0)

### 추가된 기능 목록

- [공유하기 기능 추가](#1-공유하기-기능-추가-share-네임스페이스) ([`share`](../../namespaces/share))
- [진동 및 햅틱 피드백 기능 추가](#2-진동-및-햅틱-피드백-기능-추가-vibration-네임스페이스) ([`vibration`](../../namespaces/vibration))

---

### 1. 공유하기 기능 추가 (`share` 네임스페이스)

- 네이티브 공유 창을 이용하여 URL을 공유할 수 있습니다.
- ➡️ [`share` 네임스페이스 문서](../../namespaces/share)에서 상세 정보를 확인할 수 있습니다.

#### 추가된 메서드 (`share`)

| 메서드             | 설명                             |
| ------------------ | -------------------------------- |
| `openSharing(url)` | 지정된 URL을 공유 창으로 엽니다. |

#### 사용 예제 (공유하기)

```javascript
// 지정한 URL 공유하기
Nachocode.share.openSharing('https://nachocode.io');
```

---

### 2. 진동 및 햅틱 피드백 기능 추가 (`vibration` 네임스페이스)

- 앱 내에서 진동과 햅틱 피드백을 제어할 수 있는 기능이 추가되었습니다.
- ➡️ [`vibration` 네임스페이스 문서](../../namespaces/vibration)에서 상세 정보를 확인할 수 있습니다.

#### 추가된 메서드 (`vibration`)

| 메서드                   | 설명                                         |
| ------------------------ | -------------------------------------------- |
| `setHaptics(enable)`     | 햅틱 피드백 사용 여부를 설정합니다.          |
| `setVibration(enable)`   | 진동 사용 여부를 설정합니다.                 |
| `getHaptics(callback)`   | 햅틱 피드백 사용 여부를 확인합니다.          |
| `getVibration(callback)` | 진동 사용 여부를 확인합니다.                 |
| `haptics(type)`          | 지정된 타입의 햅틱 피드백을 즉시 실행합니다. |

#### 사용 예제 (진동 및 햅틱 피드백)

- 진동 및 햅틱 설정

```javascript
// 햅틱 피드백 활성화
Nachocode.vibration.setHaptics(true);

// 진동 비활성화
Nachocode.vibration.setVibration(false);
```

- 즉시 햅틱 피드백 실행

```javascript
// 성공 타입(SUCCESS)의 햅틱 피드백 실행
Nachocode.vibration.haptics(0); // 0: SUCCESS 타입
```

---

### 업데이트 방법

nachocode JavaScript Client SDK **ver.1.1.0**를 사용하려면 아래의 스크립트를 업데이트하십시오.

#### SDK CDN 주소

```html
<script src="https://cdn.nachocode.io/nachocode/client-sdk/@1.1.0/client-sdk.min.js"></script>
```
