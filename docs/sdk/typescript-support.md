---
sidebar_position: 3
description: nachocode Client SDK의 TypeScript 지원 가이드입니다. 타입스크립트 프로젝트에 nachocode SDK를 설치하고 사용하는 방법을 안내합니다.
keywords:
  [
    nachocode,
    TypeScript,
    d.ts,
    타입 선언,
    Nachocode.d.ts,
    나쵸코드 SDK,
    nachocode SDK,
    declare,
  ]
---

# TypeScript 지원

![typescript](/img/docs/typescript.png)

> 🔔 **최신화 일자:** 2025-10-10

nachocode Client SDK는 타입스크립트(`TypeScript`) 지원을 제공합니다.

타입스크립트 프로젝트에서 SDK를 더욱 편리하고 안전하게 사용하려면, 별도의 타입 선언 파일(`Nachocode.d.ts`)을 프로젝트에 추가하면 됩니다.

이 가이드는 타입스크립트 프로젝트에서 nachocode SDK를 설정하는 방법을 안내합니다.

---

## 1. 타입 선언 파일 설치 방법

타입 선언 파일(`Nachocode.d.ts`)은 다음 두 가지 방법 중 하나로 설치할 수 있습니다.

### ✅ 방법 1: CDN에서 직접 다운로드

다음 명령어로 최신 타입 선언 파일을 다운로드 받습니다.

```bash
curl -O https://cdn.nachocode.io/nachocode/client-sdk/@latest/Nachocode.d.ts
```

다운로드한 파일을 프로젝트 내의 타입 정의 디렉터리(`types` 또는 원하는 경로)에 추가하세요.

### ✅ 방법 2: 수동 다운로드

웹 브라우저에서 아래 링크를 클릭하여 수동으로 다운로드 받을 수 있습니다.

- [📂 Nachocode.d.ts 선언 파일 다운로드](https://cdn.nachocode.io/nachocode/client-sdk/@latest/Nachocode.d.ts)

---

## 2. 타입 선언 파일 (`Nachocode.d.ts`) 자세히 보기

SDK의 전체 타입 정의 및 API 세부 사항을 확인하고 싶다면 아래 링크에서 직접 확인할 수 있습니다.

- [📘 Nachocode.d.ts 타입 선언 파일 보기](https://github.com/FlipperCorporation/nachocode-client-sdk/blob/main/types/Nachocode.d.ts)

---

## 3. 권장 디렉터리 구조 및 설정

다음과 같은 디렉터리 구조를 권장합니다.

```plain
project-root/
├─ src/
│  ├─ index.ts
│  └─ ...
├─ types/
│  └─ Nachocode.d.ts  ✅ 타입 선언 파일 위치
└─ tsconfig.json
```

:::info
타입스크립트 프로젝트의 `tsconfig.json`에서 타입 선언을 인식할 수 있도록 `typeRoots` 옵션을 설정하세요.
:::

```json
{
  "compilerOptions": {
    "typeRoots": ["./types", "./node_modules/@types"],
    ...
  }
}
```

:::tip
`typeRoots` 옵션은 컴파일러가 타입 선언 파일을 찾을 위치를 지정합니다.
:::

---

## 4. 빌드 환경별 설정

### Webpack 프로젝트

`webpack.config.js`에서 타입 선언 파일을 인식하도록 설정

```javascript
module.exports = {
  resolve: {
    alias: {
      '@types': path.resolve(__dirname, 'types'),
    },
  },
};
```

### Vite 프로젝트

`vite.config.ts`에 타입 선언 경로를 추가

```typescript
export default defineConfig({
  resolve: {
    alias: {
      '@types': path.resolve(__dirname, 'types'),
    },
  },
});
```

### Next.js 프로젝트

`next.config.js`에서 TypeScript 설정을 확장

```javascript
module.exports = {
  typescript: {
    typeRoots: ['./types', './node_modules/@types'],
  },
};
```

---

## 5. 기본 사용 예시

타입스크립트 환경에서는 자동완성 및 타입 검사 기능이 제공되어 편리합니다.

nachocode Client SDK는 `Promise`를 반환하는 비동기 초기화 기능을 제공합니다.  
아래 예제는 비동기 초기화를 활용하여 SDK가 완전히 준비된 후 코드를 실행하는 예시 스크립트입니다.

```typescript
(async () => {
  if (window.Nachocode) {
    try {
      // SDK 초기화
      await Nachocode.initAsync('your_api_key_here', { logger: true });
      if (Nachocode.env.isApp()) {
        // 네이티브 앱 환경에서 실행할 코드 작성
        console.log('nachocode SDK가 네이티브 앱 환경에서 초기화되었습니다.');

        // ex. 앱 이름 가져오기
        const appName: string = Nachocode.app.getAppName();
        console.log(`앱 이름: ${appName}`);
      }
    } catch (error) {
      console.error('nachocode SDK 초기화에 실패했습니다.', error);
    }
  } else {
    console.error('nachocode SDK가 로드되지 않았습니다.');
  }
})();
```

---

## 6. 트러블슈팅

### 타입 선언 파일이 인식되지 않는 경우

1. **tsconfig.json 확인**

   ```json
   {
     "compilerOptions": {
       "typeRoots": ["./types", "./node_modules/@types"],
       "types": ["node"]
     },
     "include": ["src/**/*", "types/**/*"]
   }
   ```

2. **파일 경로 확인**
   - `Nachocode.d.ts` 파일이 지정된 경로에 올바르게 위치하는지 확인
   - 파일명이 정확한지 확인 (대소문자 구분)

3. **IDE 캐시 초기화**

   ```bash
   # VS Code
   Ctrl + Shift + P → "TypeScript: Restart TS Server"

   # 프로젝트 재시작
   npm run typecheck
   ```

### 컴파일 에러 해결

#### "Cannot find name 'Nachocode'" 에러

- `types` 디렉터리가 `typeRoots`에 포함되어 있는지 확인
- 전역 타입 선언이 올바른지 확인

#### "Property does not exist" 에러

- 최신 타입 선언 파일을 사용하고 있는지 확인
- SDK 버전과 타입 선언 파일 버전이 일치하는지 확인

### 빌드 시 타입 에러

```bash
# 타입 체크만 실행
npx tsc --noEmit

# 상세한 타입 정보 확인
npx tsc --noEmit --listFiles
```

---

:::info **추가 지원 안내**

향후 여러 프론트엔드 프레임워크에 대한 지원도 계획 중입니다.  
추가적인 지원이 필요하거나 기능 제안이 있으면 언제든지 지원팀 이메일 [support@nachocode.io](mailto:support@nachocode.io)에 의견을 남겨주세요.

:::
