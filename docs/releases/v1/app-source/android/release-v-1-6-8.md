---
sidebar_label: 'ver.1.6.8 (25.07.15)'
description: nachocode Android App Source ver.1.6.8의 릴리즈노트입니다.
keywords:
  [
    앱소스 릴리즈노트,
    Android 앱소스,
    안드로이드 앱소스,
    App Source Release Note,
    앱소스 업데이트,
    ver.1.6.8,
    v1.6.8,
    앱 정보 변경,
  ]
image: /img/docs/releases/release_note_android_detail.png
---

# Release: ver.1.6.8 (2025-07-15)

import { ThumbnailImage } from '@site/src/components/common/image/thumbnail-image';

<ThumbnailImage src='/img/docs/releases/release_note_android_detail.png'/>

> 🔔 **배포 일자:** 2025-07-15

nachocode Android App Source **1.6.8** 버전이 반영되었습니다.

이번 업데이트 **ver.1.6.8**에서는 웹 클라이언트에 구현된 Google 로그인의 버그가 수정되며 변경 사항이 생겼습니다.

## 개선 및 수정 사항

- **앱 정보 변경 사항**
  - 앱에서 웹 클라이언트의 Google 로그인이 작동하지 않는 문제를 해결했습니다.
  - 앱 User Agent에서 더이상 `'wv'` 정보를 제공하지 않습니다.

:::tip 구글 로그인 정책
구글은 정책 상 애플리케이션에 삽입된 브라우저를 통한 로그인의 보안이 취약하다고 판단하여 기본적으로 차단합니다.  
➡️ [**구글 도움말 센터**](https://support.google.com/accounts/answer/7675428)

이번 업데이트 변경 사항은 임시 조치이며 언젠가 다시 문제가 생길 여지가 있습니다.  
nachocode에서는 [**SDK의 Google 네임스페이스**](/docs/sdk/integrations/google/reference)를 활용하여 네이티브 로그인을 구현하는 방식을 권장합니다.
:::

## 업데이트 적용 방법

nachocode Android AppSource **ver.1.6.8**의 변경 사항을 앱에 반영하려면 아래 경로에서 신규 버전의 앱을 다시 빌드하여 적용 가능합니다.

:::info 업데이트 적용
[**나쵸코드 대시보드**](https://nachocode.io/?utm_source=docs&utm_medium=documentation&utm_campaign=devguide) > **앱 빌드** > **안드로이드 앱 빌드** > **새 버전 만들기**
:::
