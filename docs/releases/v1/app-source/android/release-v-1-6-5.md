---
sidebar_label: 'ver.1.6.5 (25.07.02)'
description: nachocode Android App Source ver.1.6.5의 릴리즈노트입니다.
keywords:
  [
    앱소스 릴리즈노트,
    Android 앱소스,
    안드로이드 앱소스,
    App Source Release Note,
    앱소스 업데이트,
    ver.1.6.5,
    v1.6.5,
    포그라운드 복귀 인디케이터 버그 수정,
    Target API 35,
    Google 정책 대응,
  ]
image: /img/docs/releases/release_note_android_detail.png
---

# Release: ver.1.6.5 (2025-07-02)

import { ThumbnailImage } from '@site/src/components/common/image/thumbnail-image';

<ThumbnailImage src='/img/docs/releases/release_note_android_detail.png'/>

> 🔔 **배포 일자:** 2025-07-02

nachocode Android App Source **1.6.5** 버전이 반영되었습니다.

이번 업데이트 **ver.1.6.5**에서는 인디케이터 관련 버그 수정 및 Target API 버전 35가 적용되었습니다.

## 개선 및 수정 사항

- 포그라운드 복귀 시 인디케이터 삭제 기능을 추가하며 발생한 버그를 수정하였습니다.
  - 인디케이터를 사용하지 않는 앱에서 포그라운드 복귀 시 앱이 강제로 종료되는 현상
- **Google 정책에 따라 Target API 버전을 35로 업데이트**하였습니다.

## 업데이트 적용 방법

nachocode Android AppSource **ver.1.6.5**의 변경 사항을 앱에 반영하려면 아래 경로에서 신규 버전의 앱을 다시 빌드하여 적용 가능합니다.

:::info 업데이트 적용
[**나쵸코드 대시보드**](https://nachocode.io/?utm_source=docs&utm_medium=documentation&utm_campaign=devguide) > **앱 빌드** > **안드로이드 앱 빌드** > **새 버전 만들기**
:::
