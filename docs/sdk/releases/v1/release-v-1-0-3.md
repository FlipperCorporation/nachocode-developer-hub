---
sidebar_label: 'ver.1.0.3 (24.06.19)'
---

# Release: ver.1.0.3 (2024-06-19)

> 🔔 **배포 일자:** 2024-06-19

nachocode Client SDK **v1.0.3**에서는 **탭바 제어 기능**과 **브라우저 열기 기능**이 추가되었습니다.

## 주요 변경 사항 (ver.1.0.3)

### 추가된 기능 목록

- [탭바 제어 기능 추가](#1-탭바-제어-기능-추가-tabbar-네임스페이스)
- [브라우저 열기 기능 추가](#2-브라우저-열기-기능-추가-browser-네임스페이스)

---

### 1. 탭바 제어 기능 추가 (`tabbar` 네임스페이스)

- 앱 하단의 탭바를 이동하거나 숨기고, 다시 보이게 할 수 있는 기능이 추가되었습니다.
- `moveTo`, `show`, `hide` 메서드를 통해 제어할 수 있습니다.

➡️ [`tabbar` 네임스페이스 문서 확인하기](../../namespaces/tabbar)

#### 추가된 메서드 (`tabbar`)

| 메서드          | 설명                         |
| --------------- | ---------------------------- |
| `moveTo(index)` | 특정 탭 인덱스로 이동합니다. |
| `show()`        | 탭바를 표시합니다.           |
| `hide()`        | 탭바를 숨깁니다.             |

#### 사용 예제 (`tabbar`)

```javascript
// 두 번째 탭으로 이동
Nachocode.tabbar.moveTo(1);

// 탭바 숨기기
Nachocode.tabbar.hide();

// 탭바 다시 보이기
Nachocode.tabbar.show();
```

---

### 2. 브라우저 열기 기능 추가 (`browser` 네임스페이스)

- URL을 외부 또는 내부 브라우저로 열 수 있는 기능이 추가되었습니다.
- `openLink(url, option?)` 메서드를 통해 열 수 있으며, 기본은 외부 브라우저(`external`)입니다.

➡️ [`browser` 네임스페이스 문서](../../namespaces/browser)에서 상세 정보를 확인할 수 있습니다.

#### 추가된 메서드 (`browser`)

| 메서드                   | 설명                                    |
| ------------------------ | --------------------------------------- |
| `openLink(url, option?)` | URL을 외부 또는 내부 브라우저로 엽니다. |

- `option` 기본값은 `'external'`이며, `'internal'`로 앱 내 브라우저를 열 수도 있습니다.

#### 사용 예제 (`browser`)

- `external`: 외부 브라우저 의미합니다. (safari, chrome, naver 등)

```javascript
// 외부 브라우저로 URL 열기
Nachocode.browser.openLink('https://nachocode.io', 'external');
```

- `internal`: 앱 내부 브라우저를 의미합니다.

```javascript
// 앱 내 브라우저로 URL 열기
Nachocode.browser.openLink('https://nachocode.io', 'internal');
```

---

### 업데이트 방법

nachocode JavaScript Client SDK **ver.1.0.3**를 사용하려면 아래의 스크립트를 업데이트하십시오.

#### SDK CDN 주소

```html
<script src="https://cdn.nachocode.io/nachocode/client-sdk/@1.0.3/client-sdk.min.js"></script>
```
