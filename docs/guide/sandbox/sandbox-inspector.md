---
sidebar_label: '웹 인스펙터 설정하기'
pagination_label: 웹 인스펙터 설정하기
description: Android, iOS 웹 인스펙터를 활용해 실기기에서 웹뷰(WebView)의 웹 클라이언트 디버깅을 할 수 있는 방법을 안내합니다. 웹뷰(WebView) 앱을 개발하다 보면 실제 모바일 디바이스에서의 동작을 확인하고 디버깅해야 할 때가 많습니다. 웹 인스펙터는 Android/iOS 디바이스와의 연결을 통해 이러한 작업을 가능하게 합니다.
keywords:
  [
    웹 인스펙터,
    WebView 디버깅,
    WebView 앱 디버깅,
    WebView 웹 디버깅,
    웹뷰 웹 디버깅,
    웹뷰 앱 디버깅,
    모바일 브라우저 디버깅,
    Chrome 개발자 도구,
    Safari 웹 인스펙터,
    Web Inspector,
    Chrome DevTools,
    Safari Web Inspector,
    Debug WebView App,
    Debug WebView Web,
    Debug Mobile Browser,
    Web 개발자 도구,
    웹 개발자 도구,
    Web Dev Tools,
  ]
image: /img/docs/sandbox/sandbox_inspector_thumbnail.png
---

# 웹 인스펙터 설정하기

![sandbox_inspector_thumbnail](/img/docs/sandbox/sandbox_inspector_thumbnail.png)

> 🔔 **최신화 일자:** 2025-11-04

## 웹 인스펙터 이해하기

웹뷰(WebView) 앱을 개발하다 보면 실제 모바일 디바이스에서의 동작을 확인하고 디버깅해야 할 때가 많습니다. 웹 인스펙터는 Android/iOS 디바이스와의 연결을 통해 이러한 작업을 가능하게 합니다.

:::tip 웹 인스펙터란?
<strong>웹 인스펙터(Web Inspector)</strong>는 웹 개발자 도구로, HTML/CSS/JavaScript 코드를 실시간으로 검사하고 수정할 수 있는 디버깅 도구입니다. Chrome DevTools(Android)와 Safari Web Inspector(iOS)를 통해 앱 내 웹뷰에서 발생하는 문제를 브라우저에서와 동일하게 디버깅할 수 있습니다.
:::

Android, iOS 웹 인스펙터를 활용해 실기기에서 웹뷰(WebView)의 웹 클라이언트를 디버깅하여 브라우저에서는 정상 동작하지만 앱에서만 발생하는 문제들을 실시간으로 추적하고 해결할 수 있습니다.

1. [**Android에서 웹 인스펙터 사용하기**](#configure-inspector-android)
2. [**iOS에서 웹 인스펙터 사용하기**](#configure-inspector-ios)

---

## Android에서 웹 인스펙터 사용하기 {#configure-inspector-android}

### 1단계: Android 디바이스 설정

#### 개발자 옵션 활성화

1. **설정** > **휴대전화 정보** 이동

   ![android_inspect_1](/img/docs/sandbox/android_inspect_1.png)

2. **소프트웨어 정보**로 이동

   ![android_inspect_2](/img/docs/sandbox/android_inspect_2.png)

3. **빌드번호**를 **7번 연속 탭**

   ![android_inspect_3](/img/docs/sandbox/android_inspect_3.png)

4. **"개발자 모드를 켰습니다."** 메시지 확인

   ![android_inspect_4](/img/docs/sandbox/android_inspect_4.png)

---

#### USB 디버깅 활성화

1. **설정** > **개발자 옵션** 이동

   ![android_inspect_5](/img/docs/sandbox/android_inspect_5.png)

2. **USB 디버깅** 토글을 **ON**으로 설정 후 권한 허용 팝업에서 **확인** 선택

   ![android_inspect_6](/img/docs/sandbox/android_inspect_6.png)

---

### 2단계: PC 설정 및 연결

#### 준비 사항

- Windows/Mac/Linux PC
- USB 케이블 (디바이스와 PC 연결용)
- Chrome 브라우저 (최신 버전 권장)

---

#### 연결 과정

1. USB 케이블로 Android 디바이스와 PC를 연결
2. 디바이스에서 "USB 디버깅 허용" 팝업이 나타나면 **확인** 선택
3. PC에서 Chrome 브라우저를 실행
4. 주소창에 `chrome://inspect` 입력하여 접속

   ![chrome_inspect_1](/img/docs/sandbox/chrome_inspect_1.png)

---

### 3단계: 웹 클라이언트 디버깅 {#configure-inspector-android-debugging}

#### **디버깅 시작**

1. Android 디바이스에서 **샌드박스 앱을 실행**
2. Chrome의 `chrome://inspect` 페이지에서 **디바이스 목록을 확인**
3. 앱 이름 옆의 **"inspect"** 버튼을 클릭

   ![chrome_inspect_1-1](/img/docs/sandbox/chrome_inspect_1-1.png)

4. **Chrome DevTools 창**이 열리면 디버깅 준비 완료

   ![chrome_inspect_2](/img/docs/sandbox/chrome_inspect_2.png)

---

#### **디버깅 기능 활용**

- **Console**: JavaScript 오류, 로그 메시지 실시간 확인
- **Elements**: HTML/CSS 실시간 수정 및 테스트
- **Network**: API 요청/응답, 로딩 시간 모니터링
- **Sources**: JavaScript 코드 디버깅, 브레이크포인트 설정

---

## iOS에서 웹 인스펙터 사용하기 {#configure-inspector-ios}

### 1단계: iOS 디바이스 설정

#### 웹 인스펙터 활성화

1. iOS 디바이스에서 **설정** 앱을 실행

   ![ios_inspect_1](/img/docs/sandbox/ios_inspect_1.png)

2. 검색창에 **Safari** 입력 후 앱 선택

   ![ios_inspect_2](/img/docs/sandbox/ios_inspect_2.png)

3. **고급**을 선택

   ![ios_inspect_3](/img/docs/sandbox/ios_inspect_3.png)

4. **웹 인스펙터** 토글을 **ON**으로 설정

   ![ios_inspect_4](/img/docs/sandbox/ios_inspect_4.png)

---

### 2단계: Mac 설정 및 연결

#### 준비 사항 {#configure-inspector-prerequisite}

- Mac 컴퓨터 (Windows/Linux는 지원하지 않음)
- Lightning 또는 USB-C 케이블
- Safari 브라우저

---

#### 설정 과정

1. Mac에서 **Safari**를 실행

2. **Safari** > **설정** 선택 (또는 `Cmd + ,`)

   ![safari_configuration_1](/img/docs/sandbox/safari_configuration_1.png)

3. **고급** 탭 선택

   ![safari_configuration_2](/img/docs/sandbox/safari_configuration_2.png)

4. **웹 개발자를 위한 기능 보기** 체크

   ![safari_configuration_2-1](/img/docs/sandbox/safari_configuration_2-1.png)

---

### 3단계: 웹 클라이언트 디버깅

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

---

#### 디버깅 기능 활용

Safari Web Inspector에서 다음 기능들을 사용할 수 있습니다.

- **Console**: JavaScript 실행, 로그 확인
- **Elements**: DOM 구조 확인 및 CSS 수정
- **Network**: 네트워크 요청 모니터링
- **Debugger**: JavaScript 디버깅
- **Storage**: 로컬 스토리지, 세션 스토리지 확인

---
