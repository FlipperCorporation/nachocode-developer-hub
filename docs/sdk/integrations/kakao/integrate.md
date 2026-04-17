---
sidebar_label: 연동하기
pagination_label: 연동하기 (Integrate)
description: nachocode SDK의 `kakao` 네임스페이스를 사용하기 위한 필수 사전 준비 절차를 설명합니다. 카카오 개발자 대시보드, nachocode 대시보드에서 네이티브 로그인 및 카카오톡 공유 기능을 쉽게 연동하는 방법을 제공합니다.
keywords:
  [
    카카오 소셜 로그인,
    카카오 네이티브 로그인,
    카카오 공유,
    카카오톡 공유,
    카카오톡 소셜 로그인,
    카카오톡 네이티브 로그인,
    kakao social login,
    kakao native login,
    kakao webview login,
    kakao share,
  ]
image: /img/docs/thumbnails/SDK/kakao.svg
---

# 카카오 (`kakao`) - 연동하기

import { BadgeWithVersion } from '@site/src/components/svg/badge-with-version';
import { ThumbnailImage } from '@site/src/components/common/image/thumbnail-image';

<ThumbnailImage src='/img/docs/thumbnails/SDK/kakao.svg'/>

> 🚀 **추가된 버전 :** <BadgeWithVersion type="SDK" version="v1.5.0" link="/docs/releases/v1/sdk/release-v-1-5-0" /> <BadgeWithVersion type="Android" version="v1.5.0" link="/docs/releases/v1/app-source/android/release-v-1-5-0" /> <BadgeWithVersion type="iOS" version="v1.5.0" link="/docs/releases/v1/app-source/ios/release-v-1-5-0" />  
> 🔔 **최신화 일자:** 2026-04-17

## **필수 선행 작업** {#prerequisite}

nachocode SDK로 **카카오 네이티브 기능**을 사용하기 위해서는 아래 사항이 먼저 완료되어야 합니다.

### 1. [nachocode 대시보드](https://nachocode.io/?utm_source=docs&utm_medium=documentation&utm_campaign=devguide)에서 해시키 확인 {#prerequisite-step-1}

- [ **앱 설정** > **개발자 설정** > **안드로이드 네이티브 설정** ]에서 [해시키](https://developers.google.com/android/guides/client-auth?hl=ko) 확인

![nachocode_developer_android_hash_key](/img/docs/android/nachcodoe_developer_android_hash_key.png)

:::tip 키 해시란?
키 해시(Key Hash)란 인증서(Certificate)의 인증서 지문 값(Certificate fingerprints)을 해시(hash)한 값으로,  
카카오 연동 시 카카오 API 서버에서 악성 앱인지 판별하는 데 사용됩니다.

➡️ [카카오 공식문서 보러가기 - 키 해시](https://developers.kakao.com/docs/latest/ko/android/getting-started#before-you-begin-add-key-hash)
:::

<br/>

### 2. [Kakao Developers](https://developers.kakao.com/console/app)에서 애플리케이션 생성 및 네이티브 앱 키 발급 {#prerequisite-step-2}

- 여기서 확인한 **네이티브 앱 키**는 [5. 대시보드 설정](#prerequisite-step-5) 시 필요합니다.

 <br/>

![developer_kakao_app_key_register](/img/docs/kakao/developers_kakao_app_key_register.png)

### 3. 플랫폼 등록 ([Android](https://developers.kakao.com/docs/latest/ko/android/getting-started#before-you-begin-platform), [iOS](https://developers.kakao.com/docs/latest/ko/ios/getting-started#before-you-begin-platform)) {#prerequisite-step-3}

- **Android 및 iOS 플랫폼을 등록**합니다.
- **패키지명 및 번들 ID**는 **나쵸코드 대시보드에 등록된 것**과 반드시 일치해야 합니다.

#### Android 플랫폼 [키 해시](https://developers.kakao.com/docs/latest/ko/android/getting-started#before-you-begin-add-key-hash) 등록

:::warning 중요
nachocode 대시보드에서 확인 가능한 해시키는 Play Store 배포 이전, 다운 받은 APK를 직접 실기기에 설치하여 네이티브 기능의 동작을 테스트할 때 활용됩니다.

[Google Play Console의 앱 서명(App Signing)](https://developer.android.com/studio/publish/app-signing#app-signing-google-play)을 사용할 경우, Google Play Console에서 얻은 SHA-1 인증서 지문(SHA-1 certificate fingerprint)을 Base64로 인코딩하여 사용해야 합니다.

1. **[Google Play Console] > [테스트 및 출시] > [앱 무결성] > [Play 앱 서명] > [설정]** 접속

   - **[앱 서명키 인증서]** 항목에서 **[SHA-1 인증서 지문]** 값을 복사

   ![google_console_fingerprint_sha1](/img/docs/google/google_console_fingerprint_sha1.png)

1. SHA-1 인증서 지문 값을 터미널에 아래와 같이 입력합니다.

   ```bash
   PRINTCERT="YOUR_GOOGLE_PLAY_CONSOLE_SHA1"
   echo "${PRINTCERT}" | xxd -r -p | openssl base64
   ```

1. 터미널에 출력된 키 해시를 복사합니다.

:::

- [대시보드에서 확인한 키 해시](#prerequisite-step-1)를 Android 플랫폼에 등록합니다.
- Google Play Console의 SHA-1 지문 키를 Base64로 인코딩하여 만든 키 해시를 Android 플랫폼에 등록합니다.  
  _(Google Play Console의 앱 서명 사용 시)_

![developer_kakao_add_platform](/img/docs/kakao/developers_kakao_add_platform.png)

<br/>

### 4-1. (선택사항) 공유하기 사용 시, 사이트 도메인 등록 {#prerequisite-step-4-1}

- **스크랩 공유하기 기능**을 이용하기 위해서는 **사이트 도메인을 미리 등록**해야 합니다.
- 운영 서버, 개발 서버 등의 도메인을 미리 등록해야 **스크랩 공유하기** 기능을 원활히 테스트 및 구현 가능합니다.

![developer_kakao_site_domain](/img/docs/kakao/developers_kakao_site_domain.png)

<br/>

### 4-2. (선택사항) 공유하기 사용 시, [메시지 템플릿](https://developers.kakao.com/docs/latest/ko/message-template/common) 등록 [ 도구 > 메시지 템플릿 ] {#prerequisite-step-4-2}

- **커스텀 템플릿 공유하기 기능**을 이용하기 위해서는 카카오톡의 **메시지 템플릿 빌더**를 활용해 미리 **메시지 템플릿**을 만들어 저장해둬야 합니다.
- 이 때 발급 받은 **템플릿 ID**를 활용하여 **nachocode SDK**를 통해 **템플릿 메시지 전송**이 가능해집니다.

![developer_kakao_message_template](/img/docs/kakao/developers_kakao_message_template.png)

<br/>

### 5. [nachocode 대시보드](https://nachocode.io/?utm_source=docs&utm_medium=documentation&utm_campaign=devguide)에서 토글 활성화 {#prerequisite-step-5}

- **[ 앱 설정 > 연동 > Kakao ]에서 [ 카카오 네이티브 활성화 ] 토글 활성화 후 [Kakao Developers에서 발급한 네이티브 앱 키](#prerequisite-step-2)를 등록하여 앱 설정 완료**

![nachocode_developer_kakao_native_key](/img/docs/kakao/nachocode_developer_kakao_native_key.png)

<br/>

### 6. [nachocode 대시보드](https://nachocode.io/?utm_source=docs&utm_medium=documentation&utm_campaign=devguide)에서 재빌드 수행 {#prerequisite-step-6}

- **[ 앱 빌드 > 안드로이드, iOS 앱 빌드 ]에서 [ 새 버전 만들기 ] 버튼을 클릭하여 빌드**

![nachocode_build_android_new_version](/img/docs/android/nachocode_build_android_new_version.png)

- 카카오 관련 네이티브 기능은 새로 빌드 된 버전의 앱부터 적용됩니다.

---

:::info **추가 정보**

- 카카오 공유를 위해서는 **카카오 개발자 센터**에서 앱 키 설정이 선행되어야 합니다.
- `custom` 공유 방식의 경우, **카카오 개발자 센터에서 사전 등록된 템플릿 ID**가 필요합니다.
- `scrap` 방식은 카카오 서버가 스크랩 API를 통해 대상 URL의 메타데이터를 가져와 미리보기를 생성합니다.

:::

:::tip **지원팀 연락처**
설정 과정에서 문제가 발생하거나 질문이 있으시면 언제든지 연락주세요.

**이메일**: [support@nachocode.io](mailto:support@nachocode.io)  
**응답 시간**: 영업일 기준 1~2일 이내
:::

---
