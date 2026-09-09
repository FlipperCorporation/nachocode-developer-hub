---
sidebar_label: 'ver.1.9.1 (26.01.27)'
description: nachocode Android App Source ver.1.9.1의 릴리즈노트입니다.
keywords:
  [
    앱소스 릴리즈노트,
    Android 앱소스,
    안드로이드 앱소스,
    App Source Release Note,
    앱소스 업데이트,
    ver.1.9.1,
    v1.9.1,
    권한 제어,
  ]
image: /img/docs/releases/release_note_android_detail.png
---

# Release: ver.1.9.1 (2026-01-27)

import { ThumbnailImage } from '@site/src/components/common/image/thumbnail-image';

<ThumbnailImage src='/img/docs/releases/release_note_android_detail.png'/>

> 🔔 **배포 일자:** 2026-01-27

nachocode Android App Source **1.9.1** 버전이 반영되었습니다.

이번 업데이트 **ver.1.9.1**에서는 [SDK](/docs/sdk/namespaces/permission#check-permission)를 통한 일부 기능의 동작이 수정되었습니다.

## 개선 및 수정 사항

- **권한 제어**: [SDK](/docs/sdk/namespaces/permission#check-permission)를 통한 네이티브 권한 요청 제어 동작이 수정되었습니다.
  - **이전** : `ask` 옵션이 `false`여도 최초 권한 요청이었다면 기본 OS 권한 요청 팝업이 노출되었습니다.
  - **이후** : `ask` 옵션이 `false`일 경우 최초 여부와 상관 없이 기본 OS 권한 요청 팝업이 노출되지 않습니다.

## 업데이트 적용 방법

nachocode Android AppSource **ver.1.9.1**의 변경 사항을 앱에 반영하려면 아래 경로에서 신규 버전의 앱을 다시 빌드하여 적용 가능합니다.

:::info 업데이트 적용
[**나쵸코드 대시보드**](https://nachocode.io/?utm_source=docs&utm_medium=documentation&utm_campaign=devguide) > **앱 빌드** > **안드로이드 앱 빌드** > **새 버전 만들기**
:::
