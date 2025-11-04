---
sidebar_label: '디버깅하기'
pagination_label: 샌드박스 앱 디버깅하기
description: nachocode 샌드박스 앱에서 Android/iOS 웹 인스펙터를 활용해 실기기에서 웹 디버깅을 할 수 있는 방법을 안내합니다.
keywords:
  [
    샌드박스 앱,
    샌드박스 빌드,
    나쵸코드 샌드박스,
    웹뷰 디버그,
    Debug WebView,
    WebView Local 테스트,
    Web Dev Tools,
  ]
image: /img/docs/sandbox/sandbox_thumbnail.png
---

# 샌드박스 앱 디버깅하기

![sandbox_thumbnail](/img/docs/sandbox/sandbox_thumbnail.png)

> 🔔 **최신화 일자:** 2025-11-04

## 개요

샌드박스 앱의 가장 강력한 기능은 **실제 앱 환경에서 웹 인스펙터를 통한 디버깅**입니다. 브라우저에서는 정상 동작하지만 앱에서만 발생하는 문제들을 실시간으로 추적하고 해결할 수 있습니다.

:::tip 웹 인스펙터란?
<strong>웹 인스펙터(Web Inspector)</strong>는 웹 개발자 도구로, HTML/CSS/JavaScript 코드를 실시간으로 검사하고 수정할 수 있는 디버깅 도구입니다. Chrome DevTools(안드로이드)와 Safari Web Inspector(iOS)를 통해 앱 내 웹뷰에서 발생하는 문제를 브라우저에서와 동일하게 디버깅할 수 있습니다.
:::

샌드박스 앱에서 디버깅하기 위해 인스펙터 설정 후 SDK 로거를 활용해보세요.

1. [**안드로이드, iOS 웹 인스펙터 설정하기**](./sandbox-inspector)

2. [**SDK 로거 활용하기(선택)**](#use-sdk-logger)

3. [**로컬 서버 테스트**](#local-server-test)

---

## SDK 로거 활용하기 {#use-sdk-logger}

샌드박스 앱에서 `Nachocode.init({ logger: true })` 설정을 사용하면 SDK API 호출과 결과를 콘솔에서 확인할 수 있습니다.

### 예시 코드 {#use-sdk-logger-example}

```javascript
(async () => {
  if (window.Nachocode) {
    try {
      await Nachocode.initAsync('your_api_key_here', { logger: true });

      if (Nachocode.env.isApp()) {
        // 앱 환경에서만 동작할 로직을 작성합니다.
      }

      // 디바이스 정보 확인
      console.log('디바이스 OS:', Nachocode.device.getDeviceOS());
      console.log('앱 버전:', Nachocode.app.getCurrentAppVersion());

      // 푸시 알림 권한 상태 확인
      Nachocode.permission.checkPermission(
        { type: 'push', ask: false },
        granted => {
          // 앱 유저의 권한 허용 여부가 매개 변수 granted에 전달 됩니다.
          if (granted) {
            console.log('푸시 권한 허용됨.');
          } else {
            console.log('푸시 권한 거부됨.');
          }
        }
      );
    } catch (error) {
      console.error('nachocode Client SDK 초기화 실패:', error);
    }
  } else {
    console.error('nachocode Client SDK가 로드되지 않았습니다.');
  }
})();
```

---

## 로컬 서버 테스트 {#local-server-test}

선행작업(인스펙터 설정, 로거 설정)을 모두 완료하셨다면 로컬 서버에서 샌드박스 앱을 테스트하실 수 있습니다.

### 네트워크 환경 설정

로컬 서버 테스트를 위해서는 다음 조건이 필요합니다.

1. **동일 네트워크**: PC와 모바일 디바이스를 같은 Wi-Fi에 연결(IP주소로 접속할 경우)
2. **방화벽 설정**: 개발 서버가 외부 접근을 허용하도록 설정
3. **포트 개방**: 사용하는 포트가 방화벽에서 허용되어야 함

### 개발 서버 접속 테스트

샌드박스 앱에서 로컬 서버의 URL을 통해 접속할 수 있습니다.

#### URL 예시

```plain
✅ http://192.168.0.105:3000
✅ http://192.168.1.100:8080
✅ http://10.0.0.20:4000
✅ https://example.com
```

### 테스트 방법

1. 샌드박스 앱을 실행
2. 메인 화면에서 테스트 URL 입력

   ![sandbox_test_1](/img/docs/sandbox/sandbox_test_1.png)

3. **연결하기** 버튼을 클릭

   ![sandbox_test_2](/img/docs/sandbox/sandbox_test_2.png)

4. 웹 인스펙터를 연결하여 실시간 디버깅

---

<details>
  <summary>
## 자주 묻는 질문 (FAQ) {#faq}

  </summary>

**Q1. Safari에서는 Chrome처럼 디바이스 미러링이 안되나요?**

- 네. Safari에서는 디바이스 미러링 기능을 지원하지 않습니다. 실제 디바이스를 통해 실행되고 있는 화면을 확인할 수 있습니다.

</details>

---
