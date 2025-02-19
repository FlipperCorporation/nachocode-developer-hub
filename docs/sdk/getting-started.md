---
sidebar_position: 2
---

# 시작하기

> 🔔 **최신화 일자:** 2025-02-12

Nachocode JavaScript Client SDK를 프로젝트에 통합하고 기본적으로 사용할 수 있도록 설정하는 방법을 안내합니다.

Nachocode SDK는 웹 클라이언트에서 **네이티브 앱의 기능**을 손쉽게 활용할 수 있도록 지원합니다.  
이 가이드는 SDK 설치부터 초기화, 주요 기능 사용까지 단계별로 설명합니다.

---

## 1. SDK 설치

- Nachocode SDK는 **CDN을 통해 간편하게 설치**할 수 있습니다.

- 웹 페이지의 `<body>` 태그 안에 다음과 같은 스크립트 태그를 추가합니다. 이 스크립트는 **Nachocode SDK**를 웹 페이지에 로드합니다.

  ### 최신 버전 불러오기

  - 현재 최신 버전 v1.4.0

  - 최신 버전의 SDK를 항상 유지하려면 아래 코드를 사용하세요

  ```html
  <script src="https://cdn.nachocode.io/nachocode/client-sdk/@latest/client-sdk.min.js"></script>
  ```

  ### 특정 버전 사용

  - 특정 버전으로 고정하려면 다음과 같이 사용합니다

  ```html
  <script src="https://cdn.nachocode.io/nachocode/client-sdk/@1.4.0/client-sdk.min.js"></script>
  ```

> 📢 **최신 버전을 사용하는 것이 권장되며, 특정 버전 고정은 호환성 유지가 필요한 경우에 사용하세요.**

---

## 2. SDK 초기화

### 개요

- 웹 페이지 로딩이 완료되면, **Nachocode SDK를 반드시 초기화**해야 합니다.
- 초기화는 **API 키**를 사용하며, 필요에 따라 디버깅 로깅 기능을 활성화할 수 있습니다.

### `init` 함수 정의

#### `InitializeOptions`

- `sandbox?: boolean`: 샌드박스 서버 사용 여부를 지정합니다.
- `logger?: boolean`: 로거 사용 여부를 지정합니다.

#### `init(apiKey: string, options?: InitializeOptions): void`

- **Nachocode SDK**를 초기화합니다. 애플리케이션이 시작할 때 호출해야 합니다.

#### **초기화 옵션 설명**

| 옵션     | 타입      | 설명                                                                                                          |
| -------- | --------- | ------------------------------------------------------------------------------------------------------------- |
| `apiKey` | `string`  | Nachocode SDK 서비스 접근을 위한 API 키. [Nachocode 대시보드](https://nachocode.io)에서 발급받을 수 있습니다. |
| `logger` | `boolean` | `true`로 설정하면 개발 중 디버깅을 위한 **로그 출력**이 활성화됩니다.                                         |

### 예제

- 다음 예제 코드는 SDK를 초기화하는 방법을 보여줍니다.
- 이 코드는 보통 `<script>` 태그 안에 넣거나, 별도의 JavaScript 파일에 작성할 수 있습니다.

```html
<script>
  // SDK가 로드되었는지 확인한 후 초기화를 시도합니다.
  if (window.Nachocode) {
    // SDK 초기화 후 동작할 이벤트를 등록 합니다.
    Nachocode.event.on('init', () => {
      if (Nachocode.env.isApp()) {
        // 앱 환경에서만 동작 할 로직을 작성합니다.
      }
    });

    // Nachocode SDK를 초기화 합니다.
    Nachocode.init('your_api_key_here', { logger: true });
  } else {
    console.error('Nachocode SDK가 로드되지 않았습니다.');
  }
</script>
```

```html
<script>
  if (window.Nachocode) {
    // InitializeOptions 없이도 초기화를 할 수 있습니다.
    // sandbox 와 logger는 false 값을 가지게 됩니다.
    Nachocode.init('your_api_key_here');
  }
</script>
```

---

## 3. 주요 기능 사용

- Nachocode SDK가 초기화가 완료되면, `Nachocode` 네임스페이스 아래에 정의된 다양한 네이티브 기능을 사용할 수 있습니다.

- 아래 예시는 SDK의 일부 기능을 사용하는 방법을 보여줍니다.

  - **앱 정보 가져오기**

  ```javascript
  const appName = Nachocode.app.getAppName();
  console.log(`앱 이름: ${appName}`); // ex. "Nachocode Developer"
  ```

  - **디바이스 정보 확인**

  ```javascript
  Nachocode.device.getDeviceModel(model => {
    console.log(`디바이스 모델: ${model}`);
  });
  ```

- 대부분의 기능은 웹 실행환경에선 무시되고, 앱 실행환경에서 정상 작동합니다.
