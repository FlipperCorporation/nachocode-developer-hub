---
sidebar_label: '디버깅하기'
pagination_label: 샌드박스 앱 디버깅하기
description: nachocode 샌드박스 앱에서 Android/iOS 웹 인스펙터를 활용해 실기기에서 웹 디버깅을 할 수 있는 방법을 안내합니다.
---

# 샌드박스 앱 디버깅하기

> 🔔 **최신화 일자:** 2025-11-03

## 개요

샌드박스 앱의 가장 강력한 기능은 **실제 앱 환경에서 웹 인스펙터를 통한 디버깅**입니다. 브라우저에서는 정상 동작하지만 앱에서만 발생하는 문제들을 실시간으로 추적하고 해결할 수 있습니다.

:::tip 웹 인스펙터란?
<strong>웹 인스펙터(Web Inspector)</strong>는 웹 개발자 도구로, HTML/CSS/JavaScript 코드를 실시간으로 검사하고 수정할 수 있는 디버깅 도구입니다. Chrome DevTools(안드로이드)와 Safari Web Inspector(iOS)를 통해 앱 내 웹뷰에서 발생하는 문제를 브라우저에서와 동일하게 디버깅할 수 있습니다.
:::

샌드박스 앱에서 디버깅하기 위해 인스펙터 설정 후 SDK 로거를 활용해보세요.

1. [**안드로이드, iOS 인스펙터 설정하기**](#configure-inspector)

2. [**SDK 로거 활용하기(선택)**](#use-sdk-logger)

3. [**로컬 서버 테스트**](#local-server-test)

---

## 인스펙터 설정하기 {#configure-inspector}

### Android에서 웹 인스펙터 사용하기

#### 1단계: Android 디바이스 설정

##### 개발자 옵션 활성화

1. **설정** > **휴대전화 정보** 이동

   ![android_inspect_1](/img/docs/sandbox/android_inspect_1.png)

2. **소프트웨어 정보**로 이동

   ![android_inspect_2](/img/docs/sandbox/android_inspect_2.png)

3. **빌드번호**를 **7번 연속 탭**

   ![android_inspect_3](/img/docs/sandbox/android_inspect_3.png)

4. **"개발자 모드를 켰습니다."** 메시지 확인

   ![android_inspect_4](/img/docs/sandbox/android_inspect_4.png)

##### USB 디버깅 활성화

1. **설정** > **개발자 옵션** 이동

   ![android_inspect_5](/img/docs/sandbox/android_inspect_5.png)

2. **USB 디버깅** 토글을 **ON**으로 설정 후 권한 허용 팝업에서 **확인** 선택

   ![android_inspect_6](/img/docs/sandbox/android_inspect_6.png)

#### 2단계: PC 설정 및 연결

##### 준비 사항

- Windows/Mac/Linux PC
- USB 케이블 (디바이스와 PC 연결용)
- Chrome 브라우저 (최신 버전 권장)

##### 연결 과정

1. USB 케이블로 Android 디바이스와 PC를 연결
2. 디바이스에서 "USB 디버깅 허용" 팝업이 나타나면 **확인** 선택
3. PC에서 Chrome 브라우저를 실행
4. 주소창에 `chrome://inspect` 입력하여 접속

   ![chrome_inspect_1](/img/docs/sandbox/chrome_inspect_1.png)

#### 3단계: 샌드박스 앱 디버깅

##### **디버깅 시작**

1. Android 디바이스에서 **샌드박스 앱을 실행**
2. Chrome의 `chrome://inspect` 페이지에서 **디바이스 목록을 확인**
3. 앱 이름 옆의 **"inspect"** 버튼을 클릭

   ![chrome_inspect_1-1](/img/docs/sandbox/chrome_inspect_1-1.png)

4. **Chrome DevTools 창**이 열리면 디버깅 준비 완료

   ![chrome_inspect_2](/img/docs/sandbox/chrome_inspect_2.png)

##### **디버깅 기능 활용**

- **Console**: JavaScript 오류, 로그 메시지 실시간 확인
- **Elements**: HTML/CSS 실시간 수정 및 테스트
- **Network**: API 요청/응답, 로딩 시간 모니터링
- **Sources**: JavaScript 코드 디버깅, 브레이크포인트 설정

### iOS에서 웹 인스펙터 사용하기

#### 1단계: iOS 디바이스 설정

##### 웹 인스펙터 활성화

1. iOS 디바이스에서 **설정** 앱을 실행

   ![ios_inspect_1](/img/docs/sandbox/ios_inspect_1.png)

2. 검색창에 **Safari** 입력 후 앱 선택

   ![ios_inspect_2](/img/docs/sandbox/ios_inspect_2.png)

3. **고급**을 선택

   ![ios_inspect_3](/img/docs/sandbox/ios_inspect_3.png)

4. **웹 인스펙터** 토글을 **ON**으로 설정

   ![ios_inspect_4](/img/docs/sandbox/ios_inspect_4.png)

#### 2단계: Mac 설정 및 연결

##### 준비 사항 {#configure-inspector-prerequisite}

- Mac 컴퓨터 (Windows/Linux는 지원하지 않음)
- Lightning 또는 USB-C 케이블
- Safari 브라우저

##### 설정 과정

1. Mac에서 **Safari**를 실행

2. **Safari** > **설정** 선택 (또는 `Cmd + ,`)

   ![safari_configuration_1](/img/docs/sandbox/safari_configuration_1.png)

3. **고급** 탭 선택

   ![safari_configuration_2](/img/docs/sandbox/safari_configuration_2.png)

4. **웹 개발자를 위한 기능 보기** 체크

   ![safari_configuration_2-1](/img/docs/sandbox/safari_configuration_2-1.png)

##### 디버깅 시작

1. iOS 디바이스와 Mac을 케이블로 연결
2. 디바이스에서 **신뢰 요청** 팝업이 나타나면 **신뢰** 선택

   ![ios_inspect_5](/img/docs/sandbox/ios_inspect_5.png)

3. 맥북에서 액세서리 **허용 요청** 팝업이 나타나면 **허용** 선택

   ![safari_inspect_1](/img/docs/sandbox/safari_inspect_1.png)

4. iOS 디바이스에서 **샌드박스 앱을 실행**

5. Mac Safari 실행 후 상단 탭에서 **개발자용** 메뉴 클릭

   ![safari_inspect_2](/img/docs/sandbox/safari_inspect_2.png)

6. 디바이스명 하위에 표시되는 **앱명**을 선택

   ![safari_inspect_4](/img/docs/sandbox/safari_inspect_4.png)

7. Safari 인스펙터 창이 열리면 디버깅 준비 완료

   | ![safari_inspect_5](/img/docs/sandbox/safari_inspect_5.png) | ![ios_inspect_6](/img/docs/sandbox/ios_inspect_6.png) |
   | ----------------------------------------------------------- | ----------------------------------------------------- |

##### 디버깅 기능 활용

Safari Web Inspector에서 다음 기능들을 사용할 수 있습니다.

- **Console**: JavaScript 실행, 로그 확인
- **Elements**: DOM 구조 확인 및 CSS 수정
- **Network**: 네트워크 요청 모니터링
- **Debugger**: JavaScript 디버깅
- **Storage**: 로컬 스토리지, 세션 스토리지 확인

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
