---
sidebar_position: 4
---

# 브라우저 (`browser`)

> 🔔 **최신화 일자:** 2024-11-27

앱에서 링크를 열기 위한 브라우저 관련 기능을 제공하는 네임스페이스입니다.
외부 브라우저 또는 앱 내부 브라우저를 사용할 수 있습니다.

---

## 타입 정의

### OpenURLOption

브라우저 옵션을 나타내는 타입입니다.

- `external`: 외부 브라우저를 의미합니다. (safari, chrome, naver 등)
- `internal`: 앱 내부 브라우저를 의미합니다.

---

## 주요 메서드

### `openLink(url: string, option?: OpenURLOption): void`

제공된 URL을 브라우저 창에서 오픈 합니다.

```javascript
// 기본 옵션 : 'external'
Nachocode.browser.openLink('https://nachocode.io');
```

```javascript
// 외부 브라우저로 URL 오픈
Nachocode.browser.openLink('https://nachocode.io', 'external');
```

```javascript
// 내부 브라우저로 URL 오픈
Nachocode.browser.openLink('https://nachocode.io', 'internal');
```
