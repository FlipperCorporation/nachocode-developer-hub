---
sidebar_label: 'ver.1.10.5 (26.04.13)'
description: nachocode Android App Source ver.1.10.5의 릴리즈노트입니다.
image: /img/docs/releases/release_note_android_detail.png
---

# Release: ver.1.10.5 (2026-04-13)

import { ThumbnailImage } from '@site/src/components/common/image/thumbnail-image';

<ThumbnailImage src='/img/docs/releases/release_note_android_detail.png'/>

> 🔔 **배포 일자:** 2026-04-13

nachocode Android App Source **1.10.5** 버전이 반영되었습니다.

이번 업데이트 **ver.1.10.5**에서는 푸시 기능과 일부 사용성이 개선되었습니다.

## 개선 및 수정 사항

### 버그 수정

- **로컬 푸시** : 앱 알림 센터에서 클릭 시 자동으로 알림이 삭제되지 않던 문제가 해결되었습니다.
- **그룹 푸시** : 여러 건의 푸시알림이 그룹으로 묶여있을 경우 클릭 시 가장 최근의 푸시알림 링크로만 이동되던 문제가 해결되었습니다.

### 개선

- **업로드** : 이미지 및 파일 업로드 시 다중 선택(멀티 셀렉트)을 지원하도록 개선되었습니다.
  - `input`에 `multiple` 속성을 추가하여 다중 선택 활성화가 가능합니다.
  - ex. `<input type="file" id="imageInput" accept="image/*" multiple />`
- **다운로드** : 이미지를 길게 눌러 다운로드 받는 기능의 활성화 여부를 제어할 수 있는 설정이 추가되었습니다.

## 업데이트 적용 방법

nachocode Android AppSource **ver.1.10.5**의 변경 사항을 앱에 반영하려면 아래 경로에서 신규 버전의 앱을 다시 빌드하여 적용 가능합니다.

:::info 업데이트 적용
[**나쵸코드 대시보드**](https://nachocode.io/?utm_source=docs&utm_medium=documentation&utm_campaign=devguide) > **앱 빌드** > **안드로이드 앱 빌드** > **새 버전 만들기**
:::
