---
sidebar_label: 'ver.1.6.10 (25.08.22)'
description: nachocode Android App Source ver.1.6.10의 릴리즈노트입니다.
keywords:
  [
    앱소스 릴리즈노트,
    Android 앱소스,
    안드로이드 앱소스,
    App Source Release Note,
    앱소스 업데이트,
    ver.1.6.10,
    v1.6.10,
    Android Target SDK 36,
    내비게이션 바 아이콘,
    상태바 색상 커스텀,
    내비게이션 바 색상 커스텀,
  ]
image: /img/docs/releases/release_note_android_detail.png
---

# Release: ver.1.6.10 (2025-08-22)

import { ThumbnailImage } from '@site/src/components/common/image/thumbnail-image';

<ThumbnailImage src='/img/docs/releases/release_note_android_detail.png'/>

> 🔔 **배포 일자:** 2025-08-22

nachocode Android App Source **1.6.10** 버전이 반영되었습니다.

이번 업데이트 **ver.1.6.10**에서는 상태바와 내비게이션바 색상을 변경하는 기능이 생겼습니다.

## 개선 및 수정 사항

- **Android Target SDK 36 대응: 내비게이션 바 아이콘 가시성 문제 해결**
  - Target SDK를 36으로 상향한 이후 일부 기기에서 검정 배경에 검정 아이콘으로 표시되어 아이콘 외곽선만 보이던 이슈를 수정했습니다.

## 새로운 기능

- **상태바·내비게이션 바 색상 개별 커스텀 지원**
  - 이제 앱에서 **상태바**(**Status bar**)와 **내비게이션 바**(**Navigation bar**)의 색상을 서로 다르게 설정할 수 있습니다.
  - 기본값은 시스템 테마와 자연스럽게 어울리도록 설정되어 있으며, 필요 시 개별 색상으로 커스텀하여 브랜드 톤을 유지할 수 있습니다.
  - 아이콘 가시성을 위한 밝은/어두운 아이콘 모드를 선택할 수 있습니다.

## 업데이트 적용 방법

nachocode Android AppSource **ver.1.6.10**의 변경 사항을 앱에 반영하려면 아래 경로에서 신규 버전의 앱을 다시 빌드하여 적용 가능합니다.

:::info 업데이트 적용
[**나쵸코드 대시보드**](https://nachocode.io/?utm_source=docs&utm_medium=documentation&utm_campaign=devguide) > **앱 빌드** > **안드로이드 앱 빌드** > **새 버전 만들기**
:::
