---
sidebar_label: 'ver.1.7.0 (25.09.29)'
description: nachocode Android App Source ver.1.7.0의 릴리즈노트입니다.
keywords:
  [
    앱소스 릴리즈노트,
    Android 앱소스,
    안드로이드 앱소스,
    App Source Release Note,
    앱소스 업데이트,
    ver.1.7.0,
    v1.7.0,
    AppsFlyer 연동,
    탭 바 버그 수정,
    UI 버그 수정,
  ]
image: /img/docs/releases/release_note_android_detail.png
---

# Release: ver.1.7.0 (2025-09-29)

import { ThumbnailImage } from '@site/src/components/common/image/thumbnail-image';

<ThumbnailImage src='/img/docs/releases/release_note_android_detail.png'/>

> 🔔 **배포 일자:** 2025-09-29

nachocode Android App Source **1.7.0** 버전이 반영되었습니다.

이번 업데이트 **ver.1.7.0**에서는 AppsFlyer 연동이 가능하도록 [SDK](../../sdk/release-v-1-7-0)를 통한 일부 기능이 추가되었습니다.

## 새로운 기능

- **AppsFlyer 연동**
  - [SDK](../../sdk/release-v-1-7-0)를 통해 AppsFlyer의 일부 기능을 사용하실 수 있도록 기능이 추가되었습니다.
  - AppsFlyer를 사용할 경우, 딥링크로 진입할 시 진입한 링크 데이터를 확인 할 수 있는 기능이 추가되었습니다.

## 버그 수정

- **탭 바**
  - 탭 바 숨기기 후 뒤로가기 했을 때 탭 바만큼 마진이 남아있는 버그를 수정했습니다.
  - 탭 바 보이기/숨기기 시 검정 화면이 일부 나타나는 현상을 수정했습니다.
- **UI**
  - Target SDK 버전 업 이후 발생한 일부 UI 버그를 수정했습니다.
  - QR 스캐닝 화면 시스템 안내 문구와 내비게이션 바 겹치는 현상을 수정했습니다.

## 업데이트 적용 방법

nachocode Android AppSource **ver.1.7.0**의 변경 사항을 앱에 반영하려면 아래 경로에서 신규 버전의 앱을 다시 빌드하여 적용 가능합니다.

:::warning **현재 수동 설정 필요**

AppsFlyer 연동 설정이 아직 nachocode 대시보드에 구현되지 않았습니다.
**[지원팀 이메일](mailto:support@nachocode.io)로 연락주시면 수동으로 설정해드립니다.**

:::

:::info 업데이트 적용
[**나쵸코드 대시보드**](https://nachocode.io/?utm_source=docs&utm_medium=documentation&utm_campaign=devguide) > **앱 빌드** > **안드로이드 앱 빌드** > **새 버전 만들기**
:::
