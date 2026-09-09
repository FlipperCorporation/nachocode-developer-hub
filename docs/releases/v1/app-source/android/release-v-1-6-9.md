---
sidebar_label: 'ver.1.6.9 (25.07.30)'
description: nachocode Android App Source ver.1.6.9의 릴리즈노트입니다.
keywords:
  [
    앱소스 릴리즈노트,
    Android 앱소스,
    안드로이드 앱소스,
    App Source Release Note,
    앱소스 업데이트,
    ver.1.6.9,
    v1.6.9,
    인앱 기본브라우저 SDK 기능 추가,
  ]
image: /img/docs/releases/release_note_android_detail.png
---

# Release: ver.1.6.9 (2025-07-30)

import { ThumbnailImage } from '@site/src/components/common/image/thumbnail-image';

<ThumbnailImage src='/img/docs/releases/release_note_android_detail.png'/>

> 🔔 **배포 일자:** 2025-07-30

nachocode Android App Source **1.6.9** 버전이 반영되었습니다.

이번 업데이트 **ver.1.6.9**에서는 앱 실행 속도 개선과 새로운 브라우저 기능이 추가되었습니다.

## 개선 및 수정 사항

- **앱 실행 속도 개선**
  - 스플래시 화면 표시 중 백그라운드에서 콘텐츠를 미리 로딩하여 앱 시작 시간이 단축되었습니다.
  - 앱 초기화 로직을 최적화하여 더욱 빠른 사용자 경험을 제공합니다.

## 새로운 기능

- **인앱 기본브라우저 SDK 기능 추가** : [SDK](../../sdk/release-v-1-6-3)를 통해 앱 내에서 기본 브라우저로 url을 열 수 있는 인앱 기본브라우저 기능이 추가되었습니다.

:::tip 인앱브라우저 활용
새로 추가된 인앱 기본브라우저 기능을 통해 사용자는 앱을 벗어나지 않고도 사용자의 브라우저에서 url을 열 수 있습니다.
자세한 사용법은 SDK 문서를 참고하세요.
:::

## 업데이트 적용 방법

nachocode Android AppSource **ver.1.6.9**의 변경 사항을 앱에 반영하려면 아래 경로에서 신규 버전의 앱을 다시 빌드하여 적용 가능합니다.

:::info 업데이트 적용
[**나쵸코드 대시보드**](https://nachocode.io/?utm_source=docs&utm_medium=documentation&utm_campaign=devguide) > **앱 빌드** > **안드로이드 앱 빌드** > **새 버전 만들기**
:::
