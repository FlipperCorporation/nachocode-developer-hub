---
sidebar_label: '자주 묻는 질문'
pagination_label: '자주 묻는 질문 (FAQ)'
description: nachocode 개발 시 자주 묻는 질문과 개발 팁을 확인할 수 있습니다. 환경 구분, 버전 관리, API 키 관리 등 실무에 필요한 핵심 내용을 담았습니다.
keywords:
  [
    FAQ,
    자주 묻는 질문,
    개발 팁,
    환경 구분,
    버전 관리,
    API Key,
    App Key,
    Secret Key,
    웹 앱 구분,
    nachocode 개발,
    User Agent,
    SDK 버전,
    앱소스 버전,
  ]
image: /img/docs/thumbnails/GUIDE/faq.svg
---

# 자주 묻는 질문 (FAQ)

import { ThumbnailImage } from '@site/src/components/common/image/thumbnail-image';

<ThumbnailImage src='/img/docs/thumbnails/GUIDE/intro.svg'/>

> 🔔 **최신화 일자:** 2026-04-03

nachocode 서비스를 이용한 앱 개발 과정에서 자주 묻는 질문과 유용한 개발 팁을 정리했습니다.  
실무에서 바로 활용할 수 있는 핵심 내용을 확인하세요.

---

## **환경 구분** {#app-web-env}

웹과 앱 환경을 구분하여 각기 다른 UI/UX를 제공하는 방법을 안내합니다.

<details>
<summary>
### 웹과 앱 환경을 어떻게 구분하나요?
</summary>

nachocode에서는 웹과 앱 환경을 구분하는 두 가지 방법을 제공합니다.

<h3>1. SDK 메서드를 통한 구분</h3>

:::warning 클라이언트 사이드에서만 활용 가능합니다.
:::

nachocode Client SDK의 `env` 네임스페이스를 활용하여 환경을 구분할 수 있습니다.

```javascript
// 앱 환경 확인
if (Nachocode.env.isApp()) {
  console.log('현재 네이티브 앱에서 실행 중입니다.');
  // 앱 환경에서만 동작할 로직 작성
}

// 웹 환경 확인
if (Nachocode.env.isWeb()) {
  console.log('현재 웹 브라우저에서 실행 중입니다.');
  // 웹 환경에서만 동작할 로직 작성
}

// 실행 환경 값 가져오기
const runningEnv = Nachocode.env.getRunningEnv(); // 'web' | 'app'
console.log(`현재 실행 환경: ${runningEnv}`);
```

<h3>2. User Agent를 통한 구분</h3>

:::tip 클라이언트 사이드, 서버 사이드 모두 활용 가능합니다.
:::

nachocode 대시보드에서 앱 User Agent를 설정한 후 빌드된 앱은 앱 환경에서 발생하는 Requests에 플랫폼에 따른 고정된 문자열을 User Agent에 삽입합니다.

- **Android 앱**: `nachocode_android`
- **iOS 앱**: `nachocode_ios`

```javascript
const userAgent = navigator.userAgent;

if (userAgent.includes('nachocode_android')) {
  console.log('Android 앱에서 실행 중입니다.');
} else if (userAgent.includes('nachocode_ios')) {
  console.log('iOS 앱에서 실행 중입니다.');
} else {
  console.log('웹 브라우저에서 실행 중입니다.');
}
```

:::tip 활용 팁

- **앱 환경**: 네이티브 기능을 활용한 UI 제공 (ex. 푸시 알림 마케팅 수신 동의 팝업 등)
- **웹 환경**: 앱 다운로드 유도 배너 표시

:::

:::note 관련 문서

- [환경 (`env`) 네임스페이스 문서](/docs/sdk/namespaces/env)
- [User Agent 이해하기](/docs/guide/user-agent/user-agent-definition)
- [User Agent 설정하기](/docs/guide/user-agent/user-agent-configuration)

:::

</details>

<details>
<summary>
### 특정 OS(Android/iOS)만 구분할 수 있나요?
</summary>

네, `device` 네임스페이스를 통해 디바이스 타입을 확인할 수 있습니다.

```javascript
const deviceType = Nachocode.device.getType(); // 'Android' | 'iOS' | 'Unknown'

if (deviceType === 'Android') {
  console.log('Android 환경입니다.');
} else if (deviceType === 'iOS') {
  console.log('iOS 환경입니다.');
} else {
  console.log('PC 환경입니다.');
}
```

:::note 관련 문서

- [디바이스 (`device`) 네임스페이스 문서](/docs/sdk/namespaces/device)

:::

</details>

---

## **버전 관리**

nachocode의 다양한 버전 정보와 활용 방법을 안내합니다.

<details>
<summary>
### SDK 버전, App Source 버전, 앱 버전의 차이는 무엇인가요?
</summary>

nachocode 환경에는 세 가지 주요 버전이 존재하며, 각각 다른 의미를 가집니다.

<h3>1. SDK 버전 (Client SDK Version)</h3>

- **의미**: 웹 클라이언트에서 사용하는 JavaScript SDK의 버전
- **관리 주체**: 웹 개발자가 직접 관리
- **업데이트 방법**: CDN 링크의 버전 번호 변경

```html
<!-- 최신 버전 사용 -->
<script src="https://cdn.nachocode.io/nachocode/client-sdk/@latest/client-sdk.min.js"></script>

<!-- 특정 버전 사용 -->
<script src="https://cdn.nachocode.io/nachocode/client-sdk/@1.10.2/client-sdk.min.js"></script>
```

```javascript
// SDK 버전 확인
const sdkVersion = Nachocode.env.getSDKVersion();
console.log(`SDK 버전: ${sdkVersion}`); // ex. "1.10.2"
```

:::warning 중요
SDK 버전이 앱소스 버전보다 높을 경우, 일부 SDK 기능이 제대로 작동하지 않을 수 있습니다.  
새로운 SDK 기능을 사용하려면 해당 기능을 지원하는 앱소스 버전으로 앱을 재빌드해야 합니다.
:::

<h3>2. App Source 버전 (앱소스 버전)</h3>

- **의미**: nachocode에서 제공하는 네이티브 앱의 기반 소스 코드 버전
- **관리 주체**: nachocode에서 관리 및 업데이트
- **업데이트 방법**: nachocode 대시보드에서 앱 재빌드

앱소스는 Android와 iOS 각각 독립적으로 버전이 관리됩니다.

```javascript
// App Source 버전 확인
const appSourceVersion = Nachocode.env.getAppSourceVersion();
console.log(`앱소스 버전: ${appSourceVersion}`); // ex. "1.10.3"
```

:::note 앱소스란?
앱소스는 웹뷰, 푸시 알림, 카메라 접근, 딥링크 처리 등 네이티브 기능을 구현한 앱의 기반 코드입니다.  
새로운 네이티브 기능이 추가되거나 OS 정책이 변경되면 앱소스 버전이 업데이트됩니다.

➡️ [앱소스 (App Source) 가이드](/docs/guide/app-source)
:::

<h3>3. 앱 버전 (App Version)</h3>

- **의미**: 현재 앱 프로젝트의 빌드 혹은 배포된 버전 (ex. v1.0.0, v1.0.1)
- **관리 주체**: 앱 운영자가 직접 관리
- **업데이트 방법**: nachocode 대시보드에서 빌드 시 자동 부여

```javascript
// 현재 앱 버전 확인
const appVersion = Nachocode.app.getCurrentAppVersion();
console.log(`앱 버전: ${appVersion}`); // ex. "1.0.1"
```

:::note 앱 버전 활용
앱 사용자의 업데이트 여부에 따라 **각 사용자 별 앱 버전애 차이**가 발생할 수 있습니다.

특정 네이티브 기능을 포함하여 재빌드하거나, 스플래시, 앱 아이콘 등 **앱에 변경사항이 생겼을 경우 앱 버전이 변경**되게됩니다.

이 때, 일부 사용자는 업데이트를 받지 않아 **해당 기능이 포함되지 않은 앱 실행환경**을 갖게 되는데요,  
현재 사용자의 앱 실행 버전을 확인하여 의도치 않은 **에러가 발생하는 것을 방지하거나 업데이트를 유도**할 수 있습니다.
:::

<h3>버전 간 관계</h3>

| 버전 유형       | 변경 시점                                               | 영향 범위                                       |
| --------------- | ------------------------------------------------------- | ----------------------------------------------- |
| **SDK 버전**    | 웹 개발자의 웹 코드 업데이트 시                         | 클라이언트 SDK 기능 포함 여부                   |
| **앱소스 버전** | nachocode에서 신규 네이티브 기능 론칭 혹은 버그 수정 시 | 네이티브 앱 기능, 스토어 필수 정책 반영 여부    |
| **앱 버전**     | 앱 운영자가 nachocode 대시보드에서 앱 재빌드 시         | 앱 사용자의 업데이트 여부에 따라 버전 차이 발생 |

</details>

---

## **API 키 관리**

nachocode에서 사용하는 다양한 키의 종류와 관리 방법을 안내합니다.

<details>
<summary>
### App Key, API Key, Secret Key의 차이는 무엇인가요?
</summary>

nachocode에서는 세 가지 유형의 키를 제공하며, 각각 다른 용도로 사용됩니다.

<h3>1. App Key (앱 키)</h3>

- **용도**: 앱 식별용 고유 키
- **사용 위치**: nachocode 대시보드
- **보안 수준**: 공개 가능
- **발급 위치**: nachocode 대시보드 > 앱 생성

<h3>2. API Key (클라이언트 API 키)</h3>

- **용도**: nachocode Client SDK 초기화 및 **클라이언트 nachocode 서버** 통신
- **사용 위치**: 웹 클라이언트 코드 (JavaScript)
- **보안 수준**: 클라이언트에 노출됨
- **발급 위치**: nachocode 대시보드 > 앱 설정 > 개발자 설정

```javascript
// API Key 사용 예시
await Nachocode.initAsync('your_api_key_here', { logger: true });
```

<h3>3. Secret Key (시크릿 키)</h3>

- **용도**: **서비스 서버 nachocode 서버** 간 통신 등 민감한 작업
- **사용 위치**: 백엔드 서버 (절대 클라이언트에 노출 금지)
- **보안 수준**: 높은 수준 보안 필요 (외부 노출 절대 금지)
- **발급 위치**: nachocode 대시보드 > 앱 설정 > 개발자 설정

```javascript
// 백엔드 서버에서만 사용
const response = await fetch(
  'https://app.nachocode.io/api/push/TARGET_ENDPOINT',
  {
    headers: {
      'x-api-key': `${API_KEY}`,
      'x-secret-key': `${SECRET_KEY}`,
      'Content-Type': 'application/json',
    },
  }
);
```

<h3>키 비교표</h3>

| 키 종류        | 노출 가능 여부  | 사용 환경          | 주요 용도            |
| -------------- | --------------- | ------------------ | -------------------- |
| **App Key**    | 공개            | nachocode 대시보드 | 앱 식별              |
| **API Key**    | 클라이언트 노출 | 웹 클라이언트      | SDK 초기화, API 호출 |
| **Secret Key** | 절대 비공개     | 백엔드 서버        | 서버 인증            |

:::danger 보안 경고
**Secret Key는 절대로 클라이언트 코드(JavaScript, 모바일 앱 등)에 포함하면 안 됩니다.**  
Secret Key가 노출되면 제3자가 귀하의 nachocode 계정으로 악의적인 작업을 수행할 수 있습니다.
:::

</details>

<details>
<summary>
### API Key가 노출되면 어떻게 하나요?
</summary>

API key는 원래 웹 클라이언트에 공개되어 사용되는 키이므로 노출되어도 무방합니다.

:::note 관련 문서

- [개발자 설정 유저가이드](https://docs.nachocode.io/ko/articles/app-developer)

:::

:::danger 보안 경고
API Key와는 달리 **Secret Key는 절대로 노출되면 안 됩니다.**  
Secret Key가 노출되면 제3자가 귀하의 nachocode 계정으로 악의적인 작업을 수행할 수 있습니다.
:::

</details>

<details>
<summary>
### Secret Key는 어떻게 안전하게 관리하나요?
</summary>

<h3>안전한 Secret Key 관리 방법</h3>

<b>1. 환경 변수로 관리</b>

서버 환경 변수에 저장하고 코드에서는 참조만 하세요.

```bash
# .env 파일 (절대 Git에 커밋되지 않도록 주의)
NACHOCODE_SECRET_KEY=your_secret_key_here
```

```javascript
// Node.js 백엔드 예시
require('dotenv').config();
const secretKey = process.env.NACHOCODE_SECRET_KEY;
```

<b>2. Git에서 제외</b>

`.gitignore`에 환경 변수 파일을 추가하세요.

```bash
# .gitignore
.env
.env.local
.env.production
```

<b>3. 서버에서만 사용</b>

Secret Key는 반드시 백엔드 서버에서만 사용하고, 클라이언트에 절대 전달하지 마세요.

```javascript
// ex. 잘못된 예시 - 클라이언트에 Secret Key 전달
const secretKey = 'sk_live_xxxxx'; // ❌

// ex. 올바른 예시 - 백엔드 서버에서만 사용
// server.js (백엔드)
app.post('/send-personal-push', async (req, res) => {
  const secretKey = process.env.NACHOCODE_SECRET_KEY; // ✅
  // Secret Key를 사용한 서버 로직
});
```

<b>4. 정기적인 키 교체</b>

보안 강화를 위해 주기적으로 Secret Key를 재발급하세요.

:::danger 금지 사항

- 클라이언트 JavaScript 코드에 하드코딩 ❌
- Git 저장소에 커밋 ❌
- 공개 저장소에 업로드 ❌
- 브라우저 개발자 도구에서 확인 가능한 위치에 노출 ❌

:::

</details>

---

## **초기화 및 설정**

SDK 초기화와 설정 관련 자주 묻는 질문입니다.

<details>
<summary>
### SDK 초기화 전에 메서드를 호출하면 어떻게 되나요?
</summary>

SDK가 초기화되기 전에 메서드를 호출하면 정상적으로 동작하지 않습니다.

<h3>초기화 확인 방법</h3>

```javascript
if (Nachocode.env.isInitialized()) {
  // SDK가 초기화된 경우에만 실행
  const appVersion = Nachocode.app.getCurrentAppVersion();
} else {
  // SDK 초기화 시도
  await Nachocode.initAsync('your_api_key_here');
}
```

<h3>권장 패턴: 비동기 초기화</h3>

```javascript
(async () => {
  if (window.Nachocode) {
    try {
      // SDK 초기화 대기
      await Nachocode.initAsync('your_api_key_here', { logger: true });

      // 초기화 완료 후 메서드 호출
      if (Nachocode.env.isApp()) {
        const appVersion = Nachocode.app.getCurrentAppVersion();
        console.log(`앱 버전: ${appVersion}`);
      }
    } catch (error) {
      console.error('SDK 초기화 실패: ', error);
    }
  }
})();
```

:::tip 디버깅 팁
개발 중에는 `logger: true` 옵션을 활성화하여 SDK 초기화 상태와 메서드 호출 로그를 확인하세요.
:::

:::note 관련 문서

- [nachocode Client SDK 시작하기](/docs/sdk/getting-started)
  :::

</details>

---

## **기능별 활용 팁**

실무에서 유용한 nachocode 기능 활용 팁입니다.

<details>
<summary>
### 앱에서만 특정 UI를 보여주려면 어떻게 하나요?
</summary>

환경 구분을 통해 조건부 렌더링을 구현할 수 있습니다.

```javascript
if (Nachocode.env.isApp()) {
  // 앱 전용 버튼 표시
  document.getElementById('native-share-button').style.display = 'block';
  document.getElementById('web-share-notice').style.display = 'none';
} else {
  // 웹 전용 안내 표시
  document.getElementById('native-share-button').style.display = 'none';
  document.getElementById('web-share-notice').style.display = 'block';
}
```

</details>

<details>
<summary>
### 특정 앱 버전 이상에서만 기능을 사용하려면 어떻게 하나요?
</summary>

현재 실행 중인 앱 버전을 확인하여 조건부로 기능을 사용할 수 있습니다.

```javascript
const appVersion = Nachocode.app.getCurrentAppVersion(); // ex. "1.0.3"

// ex. 버전 비교 함수
function compareVersion(v1, v2) {
  const arr1 = v1.split('.').map(Number);
  const arr2 = v2.split('.').map(Number);

  for (let i = 0; i < Math.max(arr1.length, arr2.length); i++) {
    const num1 = arr1[i] || 0;
    const num2 = arr2[i] || 0;

    if (num1 > num2) return 1;
    if (num1 < num2) return -1;
  }
  return 0; // 동일한 버전
}

// 앱 버전 1.0.5 이상에서만 실행
if (compareVersion(appVersion, '1.0.5') >= 0) {
  // 새로운 기능 사용
  Nachocode.navigation.setSwipeGesture({ enabled: true });
} else {
  console.warn('앱 업데이트가 필요합니다.');
}
```

</details>

---

## **문제 해결**

개발 중 자주 발생하는 문제와 해결 방법입니다.

<details>
<summary>
### SDK 메서드를 호출했는데 아무 반응이 없어요
</summary>

<h3>체크리스트</h3>

<b>1. SDK 초기화 확인</b>

```javascript
if (!Nachocode.env.isInitialized()) {
  console.error('SDK가 초기화되지 않았습니다.');
  await Nachocode.initAsync('your_api_key_here');
}
```

<b>2. 실행 환경 확인</b>

대부분의 SDK 기능은 앱 환경에서만 작동합니다.

```javascript
if (!Nachocode.env.isApp()) {
  console.warn('이 기능은 앱 환경에서만 작동합니다.');
}
```

<b>3. 디버그 로그 활성화</b>

```javascript
await Nachocode.initAsync('your_api_key_here', { logger: true });
```

웹 인스펙터 콘솔에서 SDK 호출 로그를 확인하세요.

<b>4. 앱 버전 및 앱소스 버전 확인</b>

```javascript
const appVersion = Nachocode.app.getCurrentAppVersion();
const srcVersion = Nachocode.env.getAppSourceVersion();

console.log(`앱: ${appVersion}, 앱소스: ${srcVersion}`);
```

앱 버전이나 앱소스 버전을 확인하여 특정 기능이 포함된 버전인지 확인하세요.

:::tip 디버깅 팁

- 개발 중에는 항상 `logger: true` 옵션 사용
- 샌드박스 앱으로 먼저 테스트

:::

:::note 관련 문서

- [샌드박스 앱 디버깅](/docs/guide/sandbox/sandbox-debugging)

:::

</details>

---

## **추가 지원**

위 내용으로 해결되지 않는 문제가 있나요?

:::tip 지원팀 문의
nachocode 팀은 여러분의 성공적인 프로젝트 구현을 위해 항상 도움을 준비하고 있습니다.  
기술적인 질문이나 피드백이 있다면 언제든지 지원팀 이메일 [support@nachocode.io](mailto:support@nachocode.io)로 문의를 보내주세요.
:::

:::info 유용한 링크

- [nachocode 대시보드](https://nachocode.io/?utm_source=docs&utm_medium=documentation&utm_campaign=faq)
- [nachocode 유저가이드](https://docs.nachocode.io/ko)
- [SDK 전체 문서](/docs/sdk/intro)
- [API 문서](/docs/api/intro)

:::
