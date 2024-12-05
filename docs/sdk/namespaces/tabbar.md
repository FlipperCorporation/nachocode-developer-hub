---
sidebar_position: 13
---

# 탭바 (`tabbar`)

> 🔔 **최신화 일자:** 2024-11-27

앱 내 탭바 관련 기능을 제공하는 네임스페이스입니다.
탭바의 표시 여부와 특정 탭으로의 전환 등을 제어합니다.

---

## 주요 메서드

### `moveTo(index: number): void`

특정 index의 탭으로 전환합니다. nachocode 대시보드에서 탭바를 먼저 등록 후 빌드해야합니다.

```javascript
// 제일 첫번째 탭으로 탭을 전환합니다.
Nachocode.tabbar.moveTo(0);
// 두번째 탭으로 탭을 전환합니다.
Nachocode.tabbar.moveTo(1);
```

---

### `show(): void`

탭바를 화면에서 다시 보이게 합니다. nachocode 대시보드에서 탭바를 먼저 등록 후 빌드해야합니다.

```javascript
// 숨겨진 탭바를 다시 보이게 합니다.
Nachocode.tabbar.show();
```

---

### `hide(): void`

탭바를 화면에서 숨깁니다. nachocode 대시보드에서 탭바를 먼저 등록 후 빌드해야합니다.

```javascript
// 탭바를 화면에서 숨깁니다.
Nachocode.tabbar.hide();
```

---
