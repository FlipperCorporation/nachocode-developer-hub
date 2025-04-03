---
sidebar_position: 2
description: nachocode Javascript 클라이언트 SDK는 웹 개발자를 위한 강력한 개발 도구로, 다양한 네이티브 기능 (푸시 알림, 인증, 디바이스 제어 등)을 손쉽게 통합할 수 있도록 지원합니다. SDK를 활용하여 혁신적으로 네이티브 앱을 개발하세요.
---

# 시작하기

> 🔔 **최신화 일자:** 2025-04-03

nachocode JavaScript Client SDK를 프로젝트에 통합하고 기본적으로 사용할 수 있도록 설정하는 방법을 안내합니다.

nachocode SDK는 웹 클라이언트에서 **네이티브 앱의 기능**을 손쉽게 활용할 수 있도록 지원합니다.  
이 가이드는 SDK 설치부터 초기화, 주요 기능 사용까지 단계별로 설명합니다.

---

## 1. SDK 설치

- nachocode SDK는 **CDN을 통해 간편하게 설치**할 수 있습니다.

- 웹 페이지의 `<body>` 태그 안에 다음과 같은 스크립트 태그를 추가합니다. 이 스크립트는 **nachocode SDK**를 웹 페이지에 로드합니다.

  ### 최신 버전 불러오기

  - 현재 최신 버전 v1.4.2

  - 최신 버전의 SDK를 항상 유지하려면 아래 코드를 사용하세요

  ```html
  <script src="https://cdn.nachocode.io/nachocode/client-sdk/@latest/client-sdk.min.js"></script>
  ```

  ### 특정 버전 사용

  - 특정 버전으로 고정하려면 다음과 같이 사용합니다

  ```html
  <script src="https://cdn.nachocode.io/nachocode/client-sdk/@1.4.2/client-sdk.min.js"></script>
  ```

> 📢 **최신 버전을 사용하는 것이 권장되며, 특정 버전 고정은 호환성 유지가 필요한 경우에 사용하세요.**

---

## 2. SDK 초기화

### 개요

- 웹 페이지 로딩이 완료되면, **nachocode SDK를 반드시 초기화**해야 합니다.
- 초기화는 **API 키**를 사용하며, 필요에 따라 디버깅 로깅 기능을 활성화할 수 있습니다.

### 초기화 옵션 설명 (`InitializeOptions`)

| 옵션      | 타입      | 설명                                                                  |
| --------- | --------- | --------------------------------------------------------------------- |
| `sandbox` | `boolean` | 샌드박스 서버 사용 여부를 지정합니다.                                 |
| `logger`  | `boolean` | `true`로 설정하면 개발 중 디버깅을 위한 **로그 출력**이 활성화됩니다. |

---

### 초기화 함수 정의 및 예제

nachocode SDK 초기화는 두 가지 방식으로 가능합니다.

### 🔸 비동기 초기화 (`initAsync`) - 권장 ✅

- SDK가 준비될 때까지 `await`을 통해 기다릴 수 있어 더 안전하고 직관적입니다.

```html
<script>
  (async () => {
    if (window.Nachocode) {
      try {
        await Nachocode.initAsync('your_api_key_here', { logger: true });

        if (Nachocode.env.isApp()) {
          // 앱 환경에서만 동작할 로직을 작성합니다.
        }
      } catch (error) {
        console.error('nachocode SDK 초기화 실패:', error);
      }
    } else {
      console.error('nachocode SDK가 로드되지 않았습니다.');
    }
  })();
</script>
```

### 🔸 기존 초기화 방식 (`init`)

- SDK 초기화 완료 이벤트를 통해 SDK 준비 상태를 감지할 수 있습니다.

```html
<script>
  if (window.Nachocode) {
    Nachocode.event.on('init', () => {
      if (Nachocode.env.isApp()) {
        // 앱 환경에서만 동작할 로직을 작성합니다.
      }
    });

    Nachocode.init('your_api_key_here', { logger: true });
  } else {
    console.error('nachocode SDK가 로드되지 않았습니다.');
  }
</script>
```

- 옵션 없이 간단한 초기화도 가능합니다.

```html
<script>
  if (window.Nachocode) {
    Nachocode.init('your_api_key_here');
  }
</script>
```

---

## 3. 주요 기능 사용

- nachocode SDK가 초기화가 완료되면, `Nachocode` 네임스페이스 아래에 정의된 다양한 네이티브 기능을 사용할 수 있습니다.

- 아래 예시는 SDK의 일부 기능을 사용하는 방법을 보여줍니다.

  - **앱 정보 가져오기**

  ```javascript
  const appName = Nachocode.app.getAppName();
  console.log(`앱 이름: ${appName}`); // ex. "nachocode Developer"
  ```

  - **디바이스 정보 확인**

  ```javascript
  Nachocode.device.getDeviceModel(model => {
    console.log(`디바이스 모델: ${model}`);
  });
  ```

- 대부분의 기능은 웹 실행환경에선 무시되고, 앱 실행환경에서 정상 작동합니다.
