---
sidebar_position: 11
---

# 새로고침 (`refresh`)

> 🔔 **최신화 일자:** 2024-11-27

새로고침 관련 기능을 제어하는 네임스페이스입니다.
사용자가 화면을 아래로 당겨 페이지를 새로고침할 수 있도록 설정을 제어할 수 있는 기능 등을 제공합니다.

---

## 주요 메서드

### `setPullToRefresh(enable: boolean): void`

사용자가 화면을 아래로 당겨 새로고침할 수 있도록 하는 `Pull to Refresh` 기능을 활성화하거나 비활성화합니다.

```javascript
// `Pull to Refresh` 기능을 활성화합니다.
Nachocode.refresh.setPullToRefresh(true);
```

```javascript
// `Pull to Refresh` 기능을 비활성화합니다.
Nachocode.refresh.setPullToRefresh(false);
```

---
