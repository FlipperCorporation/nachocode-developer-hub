---
sidebar_label: 'ver.1.8.0 (25.10.29)'
description: nachocode iOS App Source ver.1.8.0의 릴리즈노트입니다.
keywords:
  [
    앱소스 릴리즈노트,
    iOS 앱소스,
    아이폰 앱소스,
    App Source Release Note,
    앱소스 업데이트,
    ver.1.8.0,
    v1.8.0,
    앱 종료,
    로딩 인디케이터,
    루트페이지로 웹뷰 호출,
    앞뒤 제스처 컨트롤,
    인앱 브라우저 URL 표시 숨기기,
  ]
image: /img/docs/releases/release_note_ios_detail.png
---

# Release: ver.1.8.0 (2025-10-29)

import { ThumbnailImage } from '@site/src/components/common/image/thumbnail-image';

<ThumbnailImage src='/img/docs/releases/release_note_ios_detail.png'/>

> 🔔 **배포 일자:** 2025-10-29

nachocode iOS App Source **1.8.0** 버전이 반영되었습니다.

이번 업데이트 **ver.1.8.0**에서는 사용자 편의를 위한 [SDK](../../sdk/release-v-1-8-0)의 일부 기능이 추가되었습니다.

## 새로운 기능

- **앱 종료** : [SDK](../../sdk/release-v-1-8-0)를 통해 앱을 종료시키는 기능이 추가되었습니다.

  :::warning 앱 강제 종료
  iOS의 강제 종료 기능은 앱에 크래시를 발생시켜 앱을 종료시킵니다.
  크래시 분석 페이지에 데이터가 수집될 수 있습니다.
  :::

- **로딩 인디케이터** : [SDK](../../sdk/release-v-1-8-0)를 통해 로딩 인디케이터를 종료시키는 기능이 추가되었습니다.
- **루트페이지로 웹뷰 호출** : [SDK](../../sdk/release-v-1-8-0)를 통해 특정 URL을 웹뷰의 최초 페이지로 열 수 있는 기능이 추가되었습니다.
- **앞뒤 제스처 컨트롤** : [SDK](../../sdk/release-v-1-8-0)를 통해 제스처로 앞, 뒤 페이지로 이동하는 기능을 on/off할 수 있도록 추가되었습니다.
- **인앱 브라우저 URL 표시 숨기기** : [SDK](../../sdk/release-v-1-8-0)를 통해 인앱 브라우저의 URL 표시를 숨기거나 표시하는 기능이 추가되었습니다.
- **SafeArea 영역 확인** : [SDK](../../sdk/release-v-1-8-0)를 통해 아이폰 디바이스의 SafeArea 영역을 확인하는 기능이 추가되었습니다.

## 개선 및 수정 사항

- **햅틱** : [SDK](../../sdk/release-v-1-8-0)를 통해 여러 종류의 햅틱을 사용할 수 있도록 추가되었습니다.
- **탭바** : 탭바를 눌러 페이지를 이동할 때 웹뷰의 히스토리를 초기화합니다.

## 업데이트 적용 방법

nachocode iOS AppSource **ver.1.8.0**의 변경 사항을 앱에 반영하려면 아래 경로에서 신규 버전의 앱을 다시 빌드하여 적용 가능합니다.

:::info 업데이트 적용
[**나쵸코드 대시보드**](https://nachocode.io/?utm_source=docs&utm_medium=documentation&utm_campaign=devguide) > **앱 빌드** > **iOS 앱 빌드** > **새 버전 만들기**
:::
