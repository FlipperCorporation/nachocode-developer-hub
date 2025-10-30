---
sidebar_label: '인스펙터 설정하기'
description: nachocode 샌드박스 앱에서 Android/iOS 웹 인스펙터를 활용해 실기기에서 웹 디버깅을 할 수 있는 방법을 안내합니다.
---

# 샌드박스 앱 인스펙터 설정하기

## 개요

샌드박스 앱의 가장 강력한 기능은 **실제 앱 환경에서 웹 인스펙터를 통한 디버깅**입니다. 브라우저에서는 정상 동작하지만 앱에서만 발생하는 문제들을 실시간으로 추적하고 해결할 수 있습니다.

### Android에서 웹 인스펙터 사용하기

#### 1단계: Android 디바이스 설정

**개발자 옵션 활성화**

1. **설정** > **휴대전화 정보** 이동

![android_inspect_1](/img/docs/sandbox/android_inspect_1.png)

2. **소프트웨어 정보**로 이동

![android_inspect_2](/img/docs/sandbox/android_inspect_2.png)

3. **빌드번호**를 **7번 연속 탭**

![android_inspect_3](/img/docs/sandbox/android_inspect_3.png)

4.  **"개발자 모드를 켰습니다."** 메시지 확인

![android_inspect_4](/img/docs/sandbox/android_inspect_4.png)

**USB 디버깅 활성화**

1. **설정** > **개발자 옵션** 이동

![android_inspect_5](/img/docs/sandbox/android_inspect_5.png)

2. **USB 디버깅** 토글을 **ON**으로 설정 후 권한 허용 팝업에서 **확인** 선택

![android_inspect_6](/img/docs/sandbox/android_inspect_6.png)

#### 2단계: PC 설정 및 연결

**실행 환경**

- Windows/Mac/Linux PC
- USB 케이블 (디바이스와 PC 연결용)
- Chrome 브라우저 (최신 버전 권장)

**연결 과정**

1. USB 케이블로 Android 디바이스와 PC를 연결
2. 디바이스에서 "USB 디버깅 허용" 팝업이 나타나면 **확인** 선택
3. PC에서 Chrome 브라우저를 실행
4. 주소창에 `chrome://inspect` 입력하여 접속
   ![chrome_inspect_1](/img/docs/sandbox/chrome_inspect_1.png)

#### 3단계: 샌드박스 앱 디버깅

**디버깅 시작**

1. Android 디바이스에서 **샌드박스 앱을 실행**
2. Chrome의 `chrome://inspect` 페이지에서 **디바이스 목록을 확인**
3. 앱 이름 옆의 **"inspect"** 버튼을 클릭
   ![android_inspect_7](/img/docs/sandbox/chrome_inspect_1.png)
4. **Chrome DevTools 창**이 새로 열리면 디버깅 시작
   ![android_inspect_8](/img/docs/sandbox/chrome_inspect_2.png)

**디버깅 기능 활용**

- **Console**: JavaScript 오류, 로그 메시지 실시간 확인
- **Elements**: HTML/CSS 실시간 수정 및 테스트
- **Network**: API 요청/응답, 로딩 시간 모니터링
- **Sources**: JavaScript 코드 디버깅, 브레이크포인트 설정

#### SDK 로거 활용하기

샌드박스 앱에서 `Nachocode.init({ logger: true })` 설정을 사용하면 모든 SDK API 호출과 결과를 콘솔에서 확인할 수 있습니다:

```javascript
// SDK 초기화 시 로거 활성화
Nachocode.init({
  logger: true,
  // 기타 설정...
});

// API 호출 시 상세한 로그가 콘솔에 출력됨
Nachocode.push.getToken().then(token => {
  console.log('푸시 토큰:', token);
});
```

**콘솔에서 확인 가능한 정보:**

- SDK 초기화 과정
- API 호출 파라미터 및 응답
- 에러 발생 시 상세한 스택 트레이스
- 네이티브 브릿지 통신 로그

### iOS에서 웹 인스펙터 사용하기

#### 1단계: iOS 디바이스 설정

**웹 인스펙터 활성화**

1. iOS 디바이스에서 **설정** 앱을 실행

   ![ios_inspect_1](/img/docs/sandbox/ios_inspect_1.png)

2. 검색창에 **Safari** 입력 후 앱 선택

   ![ios_inspect_2](/img/docs/sandbox/ios_inspect_2.png)

3. **고급**을 선택

   ![ios_inspect_3](/img/docs/sandbox/ios_inspect_3.png)

4. **웹 인스펙터** 토글을 **ON**으로 설정

   ![ios_inspect_4](/img/docs/sandbox/ios_inspect_4.png)

#### 2단계: Mac 설정 및 연결

**실행 환경**

- Mac 컴퓨터 (Windows/Linux는 지원하지 않음)
- Lightning 또는 USB-C 케이블
- Safari 브라우저

**선행작업 - Safari 개발자 메뉴 활성화**

1. Mac에서 **Safari**를 실행

2. **Safari** > **설정** 선택 (또는 `Cmd + ,`)

   ![safari_configuration_1](/img/docs/sandbox/safari_configuration_1.png)

3. **고급** 탭 선택

   ![safari_configuration_2](/img/docs/sandbox/safari_configuration_2.png)

4. **웹 개발자를 위한 기능 보기** 체크

   ![safari_configuration_2](/img/docs/sandbox/safari_configuration_2.png)

**디버깅 시작**

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

7. Safari 인스펙터 창이 열리면 디버깅 시작

   ![safari_inspect_5](/img/docs/sandbox/safari_inspect_5.png)
   ![ios_inspect_6](/img/docs/sandbox/ios_inspect_6.png)

**디버깅 기능 활용**

Safari Web Inspector에서 다음 기능들을 사용할 수 있습니다:

- **Console**: JavaScript 실행, 로그 확인
- **Elements**: DOM 구조 확인 및 CSS 수정
- **Network**: 네트워크 요청 모니터링
- **Debugger**: JavaScript 디버깅
- **Storage**: 로컬 스토리지, 세션 스토리지 확인

#### SDK 디버깅 예시

```javascript
// iOS 샌드박스 앱에서 SDK 디버깅
Nachocode.init({
  logger: true,
  // iOS 특화 설정
});

// 디바이스 정보 확인
console.log('플랫폼:', Nachocode.device.getPlatform());
console.log('앱 버전:', Nachocode.app.getVersion());

// 푸시 알림 권한 상태 확인
Nachocode.push.getPermissionStatus().then(status => {
  console.log('푸시 권한 상태:', status);
});
```

### 로컬 서버 테스트

#### 네트워크 환경 설정

로컬 서버 테스트를 위해서는 다음 조건이 필요합니다:

1. **동일 네트워크**: PC와 모바일 디바이스가 같은 Wi-Fi에 연결
2. **방화벽 설정**: 개발 서버가 외부 접근을 허용하도록 설정
3. **포트 개방**: 사용하는 포트가 방화벽에서 허용되어야 함

#### 인덱스 페이지 접속 테스트

샌드박스 앱에서 로컬 서버의 인덱스 페이지에 직접 접속할 수 있습니다:

**예시 URL (인덱스 페이지 포함):**

```
✅ http://192.168.0.105:3000/index.html
✅ http://192.168.1.100:8080/index.html
✅ http://10.0.0.20:4000/index.html
✅ https://example.com/index.html
```

**테스트 과정:**

1. 샌드박스 앱을 실행
2. 메인 화면에서 **"테스트하실 URL을 입력해주세요"** 필드를 찾기
3. 위 예시 중 하나의 URL을 입력 (본인의 네트워크 IP로 수정)
4. **이동** 버튼을 클릭
5. 웹 인스펙터를 연결하여 실시간 디버깅

#### HTTP 환경에서의 주의사항

안드로이드에서 HTTP 접속 시 일부 디바이스나 Android 버전에서 다음과 같은 경고 화면이 나타날 수 있습니다:

- "보안상 안전하지 않음" 경고
- "연결할 수 없음" 메시지
- 고장난 화면 아이콘 표시

이는 정상적인 현상이며, 실제로는 샌드박스 앱에서 HTTP 접속이 가능합니다. URL과 네트워크 연결 상태를 다시 한번 확인해보시기 바랍니다.

---
