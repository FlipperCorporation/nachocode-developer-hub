---
sidebar_position: 1
---

# 애플리케이션 (`app`)

> 🔔 **최신화 일자:** 2024-11-27

애플리케이션 정보와 관련된 데이터 및 메서드를 제공합니다. 앱 이름, 버전, 패키지 이름 등을 확인할 수 있습니다.

---

## 주요 메서드

### `getAppName(): string`

앱 이름을 반환합니다.

```javascript
const appName = Nachocode.app.getAppName();
console.log(appName); // 앱 이름
```

---

### `getAppKey(): string`

앱 키를 반환합니다.

- 앱 키는 나쵸코드 서비스에서 앱 프로젝트를 식별하는 고유한 키입니다.

```javascript
const appKey = Nachocode.app.getAppKey();
console.log(appKey); // ex. 'APP-XXXXXXX'
```

---

### `getCurrentAppVersion(): string`

사용자의 현재 디바이스에 설치된 앱 버전을 반환합니다.

```javascript
const appVersion = Nachocode.app.getCurrentAppVersion();
console.log(appVersion); // ex. '1.0.0'
```

---

### `getPackageName(): string`

앱 패키지 이름을 반환합니다.

```javascript
const packageName = Nachocode.app.getPackageName();
console.log(packageName); // ex. 'com.nachocode.xxx'
```

---
