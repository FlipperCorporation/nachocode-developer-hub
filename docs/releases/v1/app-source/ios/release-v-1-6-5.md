---
sidebar_label: 'ver.1.6.5 (25.07.02)'
description: nachocode iOS App Source ver.1.6.5의 릴리즈노트입니다.
keywords:
  [
    앱소스 릴리즈노트,
    iOS 앱소스,
    아이폰 앱소스,
    App Source Release Note,
    앱소스 업데이트,
    ver.1.6.5,
    v1.6.5,
    내부 브라우저 변경,
  ]
image: /img/docs/releases/release_note_ios_detail.png
---

# Release: ver.1.6.5 (2025-07-02)

import { ThumbnailImage } from '@site/src/components/common/image/thumbnail-image';

<ThumbnailImage src='/img/docs/releases/release_note_ios_detail.png'/>

> 🔔 **배포 일자:** 2025-07-02

nachocode iOS App Source **1.6.5** 버전이 반영되었습니다.

이번 업데이트 **ver.1.6.5**에서는 내부 브라우저 관련 버그가 수정되며 변경 사항이 생겼습니다.

## 개선 및 수정 사항

- **내부 브라우저 변경 사항**
  - SDK를 통해 연 내부 브라우저에서는 웹뷰의 부모-자식 관계가 없는 대신 내부 브라우저에서 SDK 기능이 사용 가능하도록 구현하였습니다.
  - `anchor` 혹은 `window.open`을 통해 열린 내부 브라우저의 경우 웹뷰의 부모-자식 관계가 성립되지만 내부 브라우저에서 SDK 사용이 불가하도록 처리하였습니다.

## 업데이트 적용 방법

nachocode iOS AppSource **ver.1.6.5**의 변경 사항을 앱에 반영하려면 아래 경로에서 신규 버전의 앱을 다시 빌드하여 적용 가능합니다.

:::info 업데이트 적용
[**나쵸코드 대시보드**](https://nachocode.io/?utm_source=docs&utm_medium=documentation&utm_campaign=devguide) > **앱 빌드** > **iOS 앱 빌드** > **새 버전 만들기**
:::
