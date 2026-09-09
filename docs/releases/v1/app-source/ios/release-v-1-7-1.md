---
sidebar_label: 'ver.1.7.1 (25.10.27)'
description: nachocode iOS App Source ver.1.7.1의 릴리즈노트입니다.
keywords:
  [
    앱소스 릴리즈노트,
    iOS 앱소스,
    아이폰 앱소스,
    App Source Release Note,
    앱소스 업데이트,
    ver.1.7.1,
    v1.7.1,
    샌드박스 빌드,
  ]
image: /img/docs/releases/release_note_ios_detail.png
---

# Release: ver.1.7.1 (2025-10-27)

import { ThumbnailImage } from '@site/src/components/common/image/thumbnail-image';

<ThumbnailImage src='/img/docs/releases/release_note_ios_detail.png'/>

> 🔔 **배포 일자:** 2025-10-27

nachocode iOS App Source **1.7.1** 버전이 반영되었습니다.

이번 업데이트 **ver.1.7.1**에서는 개발자들이 더욱 편리하게 앱을 테스트하고 디버깅할 수 있도록 **샌드박스 빌드** 기능이 추가되었습니다.

## 새로운 기능

### 샌드박스 빌드

개발 및 테스트를 위한 샌드박스 환경 앱 빌드가 가능해졌습니다.

- **샌드박스 앱 구분 표시**

  - 운영 앱과의 혼동을 방지하기 위해 샌드박스 앱에는 **SANDBOX** 라벨이 포함됩니다.
  - 앱 설치 시 파일명에 `(Sandbox)` 표기가 추가됩니다.
  - ex. `Nachocode Developer(Sandbox)(1.0.0).ipa`

- **대시보드 설정 공유**

  - 아이콘, 스플래시 이미지, 탭 바, 구글 로그인, 카카오 로그인 등 대시보드에서 구성한 디자인 및 설정이 샌드박스 앱에도 동일하게 적용됩니다.
  - 운영 앱과 동일한 UI/UX로 테스트할 수 있어 더욱 정확한 테스트가 가능합니다.

- **웹 인스펙터 디버깅**

  - Safari 웹 인스펙터를 통한 디버깅이 가능합니다.
  - 웹뷰 내의 JavaScript 코드를 실시간으로 디버깅하고 네트워크 요청을 모니터링할 수 있습니다.

- **샌드박스 푸시 전송**
  - 푸시 알림 기능을 샌드박스 환경에서도 테스트하실 수 있습니다.
  - 대시보드에서 전체 푸시 전송 시 샌드박스 앱으로도 푸시를 전송할 수 있습니다.

:::warning 주의
**샌드박스 빌드**는 **개발 및 테스트 목적**으로만 사용하실 수 있습니다.
실제 출시할 앱의 경우 반드시 **출시 앱으로 빌드**해주세요.
:::

## 업데이트 적용 방법

nachocode iOS AppSource **ver.1.7.1**의 변경 사항을 앱에 반영하려면 아래 경로에서 신규 버전의 앱을 다시 빌드하여 적용 가능합니다.

:::info 업데이트 적용
[**나쵸코드 대시보드**](https://nachocode.io/?utm_source=docs&utm_medium=documentation&utm_campaign=devguide) > **앱 빌드** > **iOS 앱 빌드** > **빌드** > **샌드박스 앱** > **새 버전 만들기**
:::
