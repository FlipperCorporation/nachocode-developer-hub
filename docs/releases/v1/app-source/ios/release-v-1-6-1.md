---
sidebar_label: 'ver.1.6.1 (25.06.20)'
description: nachocode iOS App Source ver.1.6.1의 릴리즈노트입니다.
image: /img/docs/releases/release_note_ios_detail.png
---

# Release: ver.1.6.1 (2025-06-20)

import { ThumbnailImage } from '@site/src/components/common/image/thumbnail-image';

<ThumbnailImage src='/img/docs/releases/release_note_ios_detail.png'/>

> 🔔 **배포 일자:** 2025-06-20

nachocode iOS App Source **1.6.1** 버전이 반영되었습니다.

이번 업데이트 **ver.1.6.1**에서는 서비스 안정화에 중점을 두었습니다.

## 개선 및 수정 사항

- **푸시 토픽 구독/구독취소** : SDK를 통해 푸시 토픽을 구독하거나 구독을 해지할 수 있는 기능이 내부적으로 개선되었습니다.
- **QR 코드 스캐너** : SDK를 통해 QR 코드 스캔을 요청하고 읽어들인 URL에 스킴이 없을 경우 `https://` 프로토콜을 붙여서 로드하도록 로직이 개선되었습니다.

## 업데이트 적용 방법

nachocode iOS AppSource **ver.1.6.1**의 변경 사항을 앱에 반영하려면 아래 경로에서 신규 버전의 앱을 다시 빌드하여 적용 가능합니다.

:::info 업데이트 적용
[**나쵸코드 대시보드**](https://nachocode.io/?utm_source=docs&utm_medium=documentation&utm_campaign=devguide) > **앱 빌드** > **iOS 앱 빌드** > **새 버전 만들기**
:::
