---
sidebar_label: 스토어 앱 ID 확인하기
pagination_label: 스토어 앱 ID 확인하기
description: 본 가이드에서는 Android와 iOS에서 자신의 구글 플래이 스토어와 애플 앱스토어 앱 ID 확인하는 방법을 안내합니다.
keywords:
  [
    스토어 ID 확인,
    앱 ID 확인,
    구글 플레이 스토어 ID 확인,
    애플 앱 스토어 ID 확인,
    Google Play Store,
    Apple App Store,
  ]
image: /img/docs/thumbnails/GUIDE/check-store-id.svg
---

# 스토어 앱 ID 확인하기 {#check-store-id}

import { ThumbnailImage } from '@site/src/components/common/image/thumbnail-image';

<ThumbnailImage src='/img/docs/thumbnails/GUIDE/check-store-id.svg'/>

본 가이드에서는 Android와 iOS에서 **자신의 앱 스토어 ID를 찾는 방법**을 안내합니다.

---

## Android - 플레이스토어 앱 ID {#check-android-store-id}

:::info
안드로이드는 패키지명이 앱 ID 입니다.
:::

**Android 플레이 스토어의 앱 ID**는 곧 **앱의 패키지명**과 동일합니다. nachocode에서 만들어진 앱은 [**나쵸코드 대시보드**](https://nachocode.io/?utm_source=docs&utm_medium=documentation&utm_campaign=devguide)에서 **패키지명**을 확인할 수 있습니다.

[ **앱 설정** > **고급 앱 설정** > **앱 식별자** ]

![settings-package-name](/img/docs/settings/nachocode_dashboard_advanced_settings_pacakge_name.png)

---

플레이스토어에 앱을 출시한 경우, 앱의 플레이스토어 URL을 보면  
`...?id=com.nhn.android.search` 형태로 **`id=` 뒤에 패키지명이 표기**됩니다.

예를 들어 플레이스토어 URL이 `https://play.google.com/store/apps/details?id=com.nhn.android.search` 라면 `com.nhn.android.search`가 앱의 패키지명이자, 앱 ID가 됩니다.

![naver-android-store-id](/img/docs/settings/naver_android_store_id.png)

---

:::tip 정리하자면

- **내 앱**
  - [ [**나쵸코드 대시보드**](https://nachocode.io/?utm_source=docs&utm_medium=documentation&utm_campaign=devguide) > 앱 설정 > 고급 앱 설정 > 앱 식별자 ] **패키지명**
- **외부 앱**
  - 플레이스토어에서 앱 설치 페이지 링크의 쿼리 파라미터 `id` 값
  - 모바일의 경우 앱 공유하기를 통해 URL 확인

:::

---

## iOS - 앱스토어 앱 ID {#check-ios-store-id}

:::info
iOS 앱 ID는 숫자 형식의 Apple ID 앞에 `id`를 붙인 `id+숫자` 형태의 문자열 입니다.
:::

**iOS 앱스토어의 앱 ID**는 Apple에서 발급하는 **고유한 숫자 ID**입니다.

:::note 참고
iOS의 App Store ID는 앱 생성 시 자동 부여되며, 개발 단계에서는 아직 없을 수 있습니다. 만약 앱스토어에 출시 전이라면 iOS에서의 딥링크 구현 및 테스트에 제약사항이 생길 수 있으므로, 우선은 Android에 한해 딥링크-스토어 연결을 사용하거나, 출시 후 해당 값을 업데이트하세요.
:::

앱스토어에 앱을 출시한 경우, 앱스토어 URL에서 확인할 수 있는데, 보통 `apps.apple.com` 주소 중에 `/id<숫자>` 형태로 포함되어 있습니다. 예를 들어 앱스토어 URL이 `https://apps.apple.com/kr/app/네이버-naver/id393499958` 인 경우 `id393499958`가 해당 앱의 ID입니다.

![naver-ios-store-id](/img/docs/settings/naver_ios_store_id.png)

---

:::tip 정리하자면

- **내 앱**
  - [ [**앱스토어 커넥트**](https://appstoreconnect.apple.com/) > **앱 관리 페이지** > **일반 정보** > **앱 정보** > **Apple ID** ]
- **외부 앱**
  - 앱스토어에서 앱 설치 페이지 링크의 맨 뒤 path에 있는 `id+숫자` 형태의 문자열
  - 모바일의 경우 앱 공유하기를 통해 URL 확인

:::

---
