---
sidebar_position: 4
description: nachocode Client SDK의 React 지원 가이드입니다. React 환경의 프로젝트에 nachocode Client SDK를 설치하고 사용하는 방법을 안내합니다.
keywords:
  [
    React,
    React 웹뷰,
    React 웹뷰 앱,
    React 웹앱,
    리엑트 웹뷰,
    리엑트 웹뷰 앱,
    리엑트 웹앱,
    React 기반 하이브리드앱,
    React Hybrid,
    ReactNative,
    RN,
    Cordova,
    nachocode,
    나쵸코드 SDK,
    nachocode Client SDK,
  ]
---

# React 지원

![react](../../static/img/docs/react.png)

> 🔔 **최신화 일자:** 2025-04-25

**nachocode Client SDK**는 리엑트(`React`) 지원을 제공합니다.

React 기반의 웹 애플리케이션에 nachocode Client SDK를 연동하면 코드 몇 줄만으로도 디바이스의 다양한 기능을 활용하여 **하이브리드 앱을 개발**할 수 있습니다.

개발자는 웹 기술만으로도 모바일 기기의 네이티브 API를 호출하고 제어할 수 있으므로, **별도 네이티브**(Android/iOS) **개발 없이도 앱 기능을 구현**할 수 있습니다.

이 문서에서는 React 프로젝트에 `nachocode-client-sdk` 패키지를 **설치하고 설정하는 방법**, **주요 기능의 사용 예제**, **React에서의 권장 사용 패턴**과 **주의사항**, 그리고 **TypeScript 지원 여부** 등을 상세히 안내합니다.

---

## 패키지 설치하기

React 프로젝트에서 **nachocode client SDK**를 사용하려면 **npm 패키지** 설치를 해야합니다.

[**npm**](https://nodejs.org/ko/download) 또는 [**yarn**](https://classic.yarnpkg.com/lang/en/docs/install)을 사용하여 패키지를 설치할 수 있습니다.

```bash
npm install nachocode-client-sdk
```

또는

```bash
yarn add nachocode-client-sdk
```

---

## SDK 초기화 (`NachoProvider` 사용)

nachocode-client-sdk는 React용으로 **Context Provider** (`NachoProvider`)를 제공합니다.

최상위 컴포넌트를 `NachoProvider`로 감싸 전체 앱에서 nachocode Client SDK를 사용할 수 있도록 설정하는 것을 권장합니다.

이때 [nachocode 플랫폼](https://nachocode.io/?utm_source=docs&utm_medium=documentation&utm_campaign=devguide)에서 발급받은 API Key를 사용하여 SDK를 초기화합니다.

```jsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import { NachoProvider } from 'nachocode-client-sdk';
import App from './App';

const apiKey = 'YOUR_API_KEY_HERE'; // nachocode에서 발급받은 API 키
const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);
root.render(
  <NachoProvider apiKey={apiKey} options={{ logger: true }}>
    <App /> {/* App 컴포넌트를 nachocode Provider로 감쌉니다. */}
  </NachoProvider>
);
```

- `apiKey`: 나쵸코드에서 발급받은 API 키
- `options.logger`: SDK 로그 활성화 (개발 중 권장)

`NachoProvider`로 감싼 하위의 `App` 컴포넌트들은 `Nachocode` 인스턴스에 즉시 접근할 수 있게 됩니다.

---

## SDK 사용하기

`NachoProvider`로 감싼 이후에는, 자식 컴포넌트 어디서든 SDK에 접근할 수 있습니다.

SDK가 비동기로 로드되므로, **Context 훅**인 `useNachocodeContext` 훅을 사용하여 로딩 상태를 확인하고 `Nachocode` 객체를 가져오는 패턴을 권장합니다.

다음은 임의의 컴포넌트에서 SDK 로딩 상태를 확인하고 기능을 사용하는 예시입니다

```jsx
import { useNachocodeContext } from 'nachocode-client-sdk';

function ExampleComponent() {
  const { Nachocode, isLoading, isError, error } = useNachocodeContext();

  if (isLoading) return <div>로딩 중...</div>;
  if (isError) return <div>오류 발생: {error.message}</div>;

  // nachocode Client SDK 사용 가능
  const handleVibrate = () => {
    if (Nachocode.env.isApp()) {
      Nachocode.vibration.vibrate();
    } else {
      console.log('앱 환경에서만 진동이 가능합니다.');
    }
  };

  return <button onClick={handleVibrate}>진동 울리기</button>;
}
```

위 예에서 `useNachocodeContext` 훅은 `{ Nachocode, isLoading, isError, error }` 객체를 반환합니다.

| 반환값      | 설명                                          |
| ----------- | --------------------------------------------- |
| `Nachocode` | nachocode Client SDK 객체                     |
| `isLoading` | SDK 로딩 상태 (`true` 또는 `false`)           |
| `isError`   | SDK 에러 여부 (`true` 또는 `false`)           |
| `error`     | SDK 로드 중 발생한 에러 (`Error` 또는 `null`) |

`isLoading`이 `true`인 동안에는 SDK가 완전히 로드되지 않은 상태이므로 기능 호출을 미루고, `isError`가 `true`이면 `error.message`를 통해 오류를 확인할 수 있습니다.

`Nachocode` 객체가 준비되면, 이제 SDK의 다양한 기능을 호출하여 사용할 수 있습니다.

> **참고**: nachocode-client-sdk는 CDN을 통해 로드되는 **외부 스크립트**를 내부적으로 사용합니다.  
> `NachoProvider`나 제공된 훅을 사용하면 이 스크립트를 비동기로 불러오고 초기화해주므로, 별도로 `<script>` 태그를 삽입할 필요가 없습니다.
> (만약 React가 아닌 순수 웹 환경에서 사용한다면 nachocode 제공 CDN 경로를 `<script>`로 삽입하여 `window.Nachocode`를 사용할 수도 있습니다.)

---

## 사용 예제 (이벤트 핸들링)

nachocode Client SDK는 웹 앱이 **네이티브 앱의 이벤트**를 감지하고 대응할 수 있도록 이벤트 핸들링 기능을 제공합니다.

예를 들어 **앱이 백그라운드로 들어감/포그라운드로 복귀함, 네트워크 상태 변화, 네이티브 키보드 표시/숨김** 등의 상황을 이벤트로 감지하여 처리할 수 있습니다​.

개발자는 `Nachocode.event.on(eventName, callback)` 메서드를 통해 특정 이벤트에 대한 콜백 함수를 등록할 수 있습니다.

다음은 React 컴포넌트에서 nachocode 이벤트를 **구독**(**subscribe**)하고 **해제**(**unsubscribe**)하는 예제입니다. **포그라운드 복귀**(`foreground`) 이벤트를 구독하여, 백그라운드에 있던 앱이 다시 활성화될 때 실행됩니다.

```jsx
import { useEffect } from 'react';
import { useNachocodeContext } from 'nachocode-client-sdk';

function AppLifecycleListener() {
  const { Nachocode, isLoading, isError } = useNachocodeContext();

  useEffect(() => {
    if (isLoading) return;
    if (isError) return;

    // 이벤트 핸들러 함수 정의
    const handleForeground = () => {
      console.log('앱이 포그라운드로 돌아옴');
      // 앱이 다시 활성화될 때 수행할 작업들 구현
    };

    // 'foreground' 이벤트 등록
    Nachocode.event.on('foreground', handleForeground);

    // 컴포넌트 언마운트 시 이벤트 핸들러 해제
    return () => {
      Nachocode.event.off('foreground');
    };
  }, [Nachocode]);

  return <div>앱 라이프사이클 리스너 활성화됨</div>;
}
```

주요 이벤트:

- `'background'`: 앱이 백그라운드로 전환될 때
- `'foreground'`: 백그라운드에 있던 앱이 다시 활성화될 때
- `'networkchanged'`: 네트워크 연결 상태가 변할 때
- `'keyboardshown'` / `'keyboardhidden'`: 디바이스의 가상 키보드가 나타날 때 / 사라질 때

위 이벤트 이름들은 SDK에서 미리 예약된 이벤트들입니다.

필요에 따라 이벤트 종류별로 `on`을 통해 콜백을 등록하고, 대응하는 상황에서 원하는 동작을 수행할 수 있습니다.

(예를 들어 `foreground` 이벤트에서 화면을 새로고침하여 앱이 다시 활성화될 때 최신 정보를 표시하거나, `networkchanged` 이벤트에서 연결 상태에 따라 알림을 띄우는 등 활용이 가능합니다.)

---

## React에서의 권장 사용 패턴

React 환경에서 nachocode Client SDK를 사용할 때에는 한 번의 초기화와 전역 공급, 그리고 React의 특성을 고려한 패턴을 따르는 것이 좋습니다. 아래에 권장 패턴을 정리합니다.

### **전역 1회 초기화** (**`Provider` 패턴**)

- 애플리케이션을 시작할 때 최상위에 `<NachoProvider>`를 배치하여 SDK를 딱 한 번만 불러오고 초기화하는 패턴이 가장 권장됩니다.
- 이렇게 하면 앱 전역에서 하나의 `Nachocode` 인스턴스를 공유하며, 불필요한 중복 로드를 피할 수 있습니다.

```jsx
import { NachoProvider, useNachocodeContext } from 'nachocode-client-sdk';

function MyComponent() {
  const { Nachocode, isLoading, isError, error } = useNachocodeContext();

  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>Error: {error.message}</p>;

  return <p>Nachocode Client SDK 사용 가능!</p>;
}

export default function App() {
  return (
    <NachoProvider apiKey="your-api-key-here">
      <MyComponent />
    </NachoProvider>
  );
}
```

### `useNachocode` **훅** (**지연 로드 패턴**)

- nachocode Client SDK는 필요 시 훅을 직접 호출하여 로드할 수도 있습니다.
- `useNachocode(apiKey)` 훅을 사용하면 해당 컴포넌트가 마운트될 때 SDK를 불러오며, 언마운트 시 자동 해제합니다​.
- 이 패턴은 앱의 일부 기능에서만 SDK가 필요한 경우 초기 구동 시 로드 부담을 줄일 수 있다는 장점이 있습니다.
- 다만 여러 컴포넌트에서 동시에 `useNachocode`를 호출하면 각각 SDK를 불러오려고 시도할 수 있으므로, 동시에 하나의 SDK 인스턴스만 로드되도록 관리해야 합니다.
- 일반적인 경우 전체 앱에서 한번만 초기화하는 `Provider` 패턴이 충분하며, 특별한 경우에만 훅 직접 사용을 고려하세요.

```jsx
import { useNachocode } from 'nachocode-client-sdk';

export default function MyComponent2() {
  const { Nachocode, isLoading, isError, error } = useNachocode('test-key');

  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>Error: {error.message}</p>;

  return <p>Nachocode Client SDK 사용 가능!</p>;
}
```

### **수동 로드** (`loadNachocode`) **사용**

- React 바깥의 순수 자바스크립트 환경이나, 혹은 React 컴포넌트가 아닌 곳에서 SDK를 초기화해야 한다면 `loadNachocode(apiKey, options?)` 함수를 직접 호출할 수도 있습니다​.
- 이 함수는 `Promise`를 반환하므로 `await` 구문으로 SDK 로드 완료를 기다린 후 사용할 수 있습니다.
- 예를 들어, Redux 미들웨어나 초기화 스크립트에서 SDK를 로드해야 하는 경우 유용합니다.
- 그러나 일반적인 React 앱 구조에서는 이 함수를 직접 사용할 일은 드물며, 주로 `Provider`나 훅으로 감싸는 방식으로 충분히 해결됩니다.

```jsx
import { loadNachocode } from 'nachocode-client-sdk';

async function initSDK() {
  try {
    const Nachocode = await loadNachocode('your-api-key-here');
    console.log('Nachocode Client SDK 로드 완료:', Nachocode);
  } catch (error) {
    console.error('Nachocode Client SDK 로드 실패:', error);
  }
}

initSDK();
```

---

## TypeScript 지원

nachocode Client SDK는 **TypeScript**를 지원하여, 타입 안정성과 코드 자동완성 등의 이점을 누릴 수 있습니다.

`nachocode-client-sdk` 패키지에는 **SDK의 모든 API에 대한 상세 타입 정의** 파일이 포함되어 있어 (`Nachocode.d.ts`) `Nachocode` 객체의 내부 네임스페이스별 메서드와 파라미터, 반환값에 대한 완전한 타입 정보를 얻을 수 있습니다.

---

## 주의사항

- SDK는 앱 환경에서만 실제 기능이 동작합니다. 웹 환경에서의 호출은 무시되거나 대체 로직이 필요합니다.
- 이벤트 리스너는 반드시 컴포넌트 언마운트 시 해제해 주세요.
- 초기화는 앱 전역에서 단 한 번만 진행하는 것이 권장됩니다.

---

## 참고 링크

- [nachocode-client-sdk (npm)](https://www.npmjs.com/package/nachocode-client-sdk)
- [nachocode-client-sdk (GitHub)](https://github.com/FlipperCorporation/nachocode-client-sdk)
