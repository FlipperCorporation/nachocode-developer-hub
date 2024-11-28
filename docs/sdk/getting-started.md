---
sidebar_position: 2
---

# 시작하기

> 🔔 **최신화 일자:** 2024-11-27

Nachocode JavaScript Client SDK를 프로젝트에 통합하고 기본적으로 사용할 수 있도록 설정하는 방법을 안내합니다.

---

## 1. SDK 스크립트 추가

- 웹 페이지의 `<body>` 태그 안에 다음과 같은 스크립트 태그를 추가합니다. 이 스크립트는 **Nachocode SDK**를 웹 페이지에 로드합니다.

- 항상 가장 최신 버전 불러오기

```html
<script src="https://cdn.nachocode.io/nachocode/client-sdk/@latest/client-sdk.min.js"></script>
```

- 현재 최신 버전 v1.3.0

```html
<script src="https://cdn.nachocode.io/nachocode/client-sdk/@1.3.0/client-sdk.min.js"></script>
```

---

## 2. SDK 초기화

- 웹 페이지 로딩이 완료되면, SDK를 초기화해야 합니다.
- 다음 예제 코드는 SDK를 초기화하는 방법을 보여줍니다.
- 이 코드는 보통 `<script>` 태그 안에 넣거나, 별도의 JavaScript 파일에 작성할 수 있습니다.

```html
<script>
  // SDK가 로드되었는지 확인한 후 초기화를 시도합니다.
  if (window.Nachocode) {
    // Nachocode SDK를 초기화 합니다.
    Nachocode.init('your_api_key_here', { logger: true });
  } else {
    console.error('Nachocode SDK is not loaded.');
  }
</script>
```

- `your_api_key_here`: Nachocode 서비스 접근을 위한 API 키입니다.
- `logger`: 개발 중 디버깅을 돕기 위해 로깅 기능을 활성화하려면 `true`로 설정하세요.

---

## 3. 주요 기능 사용

- SDK가 초기화되면, `Nachocode` 네임스페이스 아래에 정의된 다양한 기능을 사용할 수 있습니다.

- 예를 들어, 앱 이름을 가져오는 코드는 다음과 같습니다:

```javascript
const appName = Nachocode.app.getAppName();
console.log(appName); // 앱 이름
```

- 대부분의 기능은 웹 실행환경에선 무시되고, 앱 실행환경에서 정상 작동합니다.
