---
sidebar_label: 연동하기
pagination_label: 연동하기 (Integrate)
description: nachocode SDK의 `naver` 네임스페이스를 사용하기 위한 필수 사전 준비 절차를 설명합니다. 네이버 개발자 센터와 nachocode 대시보드에서의 네이티브 로그인 연동 설정하는 상세한 방법을 제공합니다.
keywords:
  [
    네이버 소셜 로그인,
    네이버 네이티브 로그인,
    네이버 웹뷰 로그인,
    naver 소셜 로그인,
    naver 네이티브 로그인,
    naver 웹뷰 로그인,
    naver social login,
    naver native login,
    naver webview login,
  ]
image: /img/docs/thumbnails/SDK/naver.png
---

# 네이버 (`naver`) - 연동하기

import { BadgeWithVersion } from '@site/src/components/svg/badge-with-version';
import { ThumbnailImage } from '@site/src/components/common/image/thumbnail-image';

<ThumbnailImage src='/img/docs/thumbnails/SDK/naver.png'/>

> 🚀 **추가된 버전 :** <BadgeWithVersion type="SDK" version="v1.9.0" link="/docs/releases/v1/sdk/release-v-1-9-0" /> <BadgeWithVersion type="Android" version="v1.9.0" link="/docs/releases/v1/app-source/android/release-v-1-9-0" /> <BadgeWithVersion type="iOS" version="v1.9.0" link="/docs/releases/v1/app-source/ios/release-v-1-9-0" />  
> 🔔 **최신화 일자:** 2026-01-16

## **필수 선행 작업** {#prerequisite}

nachocode SDK로 **네이버 네이티브 기능**을 사용하기 위해서는 아래 사항이 먼저 완료되어야 합니다.

### 1. [nachocode](https://nachocode.io/?utm_source=docs&utm_medium=documentation&utm_campaign=devguide)에서 앱 정보 확인 {#prerequisite-step-1}

#### 1-1. 딥링크 앱 스킴명 확인 {#prerequisite-step-1-1}

- [nachocode](https://nachocode.io/?utm_source=docs&utm_medium=documentation&utm_campaign=devguide)에서 **[ 앱 설정 > 개발자 설정 > 앱 스킴 설정 ]에** 접속하여 딥링크 앱 스킴명 확인
- 앱 스킴명은 [**iOS 환경 추가**](#prerequisite-step-2-3)에서 **URL Scheme** 등록 시 활용됩니다.

![nachocode_dashboard_developer_settings_app_scheme](/img/docs/deep-link/nachocode_dashboard_developer_settings_app_scheme.png)

---

#### 1-2. 앱 식별자 (패키지 이름) 확인 {#prerequisite-step-1-2}

- [nachocode](https://nachocode.io/?utm_source=docs&utm_medium=documentation&utm_campaign=devguide)에서 **[ 앱 빌드 > 빌드 설정 > 설정 열기 ]에** 접속하여 패키지 이름 확인
- 패키지 이름은 [**안드로이드 환경 추가**](#prerequisite-step-2-3)에서 **안드로이드 앱 패키지 이름** 등록 시 활용됩니다.

![nachocode_build_android_settings_package_name](/img/docs/android/nachocode_build_android_settings_package_name.png)

---

### 2. [네이버 개발자 센터](https://developers.naver.com/main/)에서 애플리케이션 등록{#prerequisite-step-2}

#### 2-1. [Application 등록 페이지](https://developers.naver.com/apps/#/register) 접속 {#prerequisite-step-2-1}

![developers_naver_step_01](/img/docs/naver/developers_naver_step_01.png)

---

![developers_naver_step_02](/img/docs/naver/developers_naver_step_02.png)

:::info 네이버 공식 문서 보러가기
➡️ [애플리케이션 등록](https://developers.naver.com/docs/common/openapiguide/appregister.md#%EC%95%A0%ED%94%8C%EB%A6%AC%EC%BC%80%EC%9D%B4%EC%85%98-%EB%93%B1%EB%A1%9D)
:::

---

#### 2-2. [API 이용신청](https://developers.naver.com/apps/#/register)에서 사용 API에 네이버 로그인 등록 {#prerequisite-step-2-2}

![developers_naver_step_03](/img/docs/naver/developers_naver_step_03.png)

:::tip 애플리케이션 이름

네이버 로그인 화면에 애플리케이션 이름이 표시되므로 10자 이내의 간결한 이름을 사용하는 것을 권장합니다.

:::

---

![developers_naver_step_04](/img/docs/naver/developers_naver_step_04.png)

---

#### 2-3. 안드로이드, iOS [환경 추가](https://developers.naver.com/apps/#/register) {#prerequisite-step-2-3}

![developers_naver_step_05](/img/docs/naver/developers_naver_step_05.png)

- **iOS**
  - **다운로드 URL**
    - **출시된 앱**: 앱스토어 URL 입력
    - **승인 대기 중, 배포되지 않음**: 임의의 URL (ex. 개발사 홈페이지 URL)을 입력하고 등록된 이후에 변경
  - **URL Scheme**
    - nachocode에서 [딥링크 앱 스킴명을 확인](#prerequisite-step-1-1)하여 등록

---

- **안드로이드**
  - **다운로드 URL**
    - **출시된 앱**: 구글 플레이 스토어 URL 입력
    - **승인 대기 중, 배포되지 않음**: 임의의 URL (ex. 개발사 홈페이지 URL)을 입력하고 등록된 이후에 변경
  - **안드로이드 앱 패키지 이름**
    - nachocode에서 [패키지 이름을 확인](#prerequisite-step-1-2)하여 등록

:::info 네이버 공식 문서 보러가기
➡️ [로그인 오픈 API 서비스 환경](https://developers.naver.com/docs/common/openapiguide/appregister.md#%EB%A1%9C%EA%B7%B8%EC%9D%B8-%EC%98%A4%ED%94%88-api-%EC%84%9C%EB%B9%84%EC%8A%A4-%ED%99%98%EA%B2%BD)
:::

---

### 3. 네이버 개발자 센터에서 Client ID, Client Secret 확인 {#prerequisite-step-3}

:::info 애플리케이션 등록 확인
애플리케이션이 정상적으로 등록되면 네이버 개발자 센터의 [ **Application** > **내 애플리케이션** ] 메뉴의 아래에 등록한 애플리케이션 이름으로 하위 메뉴가 생깁니다.
:::

- 네이버 개발자 센터의 [ **내 애플리케이션** > **개요** ] 탭 접속
- 애플리케이션에 부여된 **클라이언트 아이디**(`Client ID`)와 **클라이언트 시크릿**(`Client Secret`) 확인
- **`Client ID`, `Client Secret`은 [nachocode에서 네이버 네이티브 설정](#prerequisite-step-4) 시 필요합니다.**

![developers_naver_step_06](/img/docs/naver/developers_naver_step_06.png)

:::info 네이버 공식 문서 보러가기
➡️ [클라이언트 아이디와 클라이언트 시크릿 확인](https://developers.naver.com/docs/common/openapiguide/appregister.md#%ED%81%B4%EB%9D%BC%EC%9D%B4%EC%96%B8%ED%8A%B8-%EC%95%84%EC%9D%B4%EB%94%94%EC%99%80-%ED%81%B4%EB%9D%BC%EC%9D%B4%EC%96%B8%ED%8A%B8-%EC%8B%9C%ED%81%AC%EB%A6%BF-%ED%99%95%EC%9D%B8)
:::

---

### 4. [nachocode](https://nachocode.io/?utm_source=docs&utm_medium=documentation&utm_campaign=devguide)에서 네이버 네이티브 토글 활성화 {#prerequisite-step-4}

- **[ 앱 설정 > 연동 > Naver ] 에서 [ 네이버 네이티브 활성화 ] 토글 활성화, Client ID 및 Client Secret 입력 후 저장**

![nachocode_dashboard_naver_integration](/img/docs/naver/nachocode_dashboard_naver_integration.png)

---

### 5. [nachocode](https://nachocode.io/?utm_source=docs&utm_medium=documentation&utm_campaign=devguide)에서 앱 재빌드 {#prerequisite-step-5}

- **[ 앱 빌드 > iOS/안드로이드 앱 > 빌드 ]에서 [ 새 버전 만들기 ] 버튼을 클릭하여 빌드**

![nachocode_build_android_new_version](/img/docs/android/nachocode_build_android_new_version.png)

- **네이버 관련 네이티브 기능은 새로 빌드 된 버전의 앱부터 적용됩니다.**

---

### 6. 네이버 개발자 센터에서 로그인 검수 신청 {#prerequisite-step-6}

네이버 로그인에서 필요한 유저 데이터는 꼭 사전 검수 요청 가이드를 확인하고 검수를 진행해주세요.

![developers_naver_step_07](/img/docs/naver/developers_naver_step_07.png)

:::info 네이버 공식 문서 보러가기
➡️ [네이버 로그인 사전 검수 가이드](https://developers.naver.com/docs/login/verify/verify.md#%EB%84%A4%EC%9D%B4%EB%B2%84-%EB%A1%9C%EA%B7%B8%EC%9D%B8-%EC%82%AC%EC%A0%84-%EA%B2%80%EC%88%98-%EA%B0%80%EC%9D%B4%EB%93%9C)
:::

---

:::tip **지원팀 연락처**
설정 과정에서 문제가 발생하거나 질문이 있으시면 언제든지 연락주세요.

**이메일**: [support@nachocode.io](mailto:support@nachocode.io)  
**응답 시간**: 영업일 기준 1~2일 이내
:::

---
