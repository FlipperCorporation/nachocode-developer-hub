---
sidebar_label: 'ver.1.11.0 (26.07.15)'
description: nachocode Android App Source ver.1.11.0의 릴리즈노트입니다.
image: /img/docs/releases/release_note_android_detail.png
---

# Release: ver.1.11.0 (2026-07-15)

import { ThumbnailImage } from '@site/src/components/common/image/thumbnail-image';

<ThumbnailImage src='/img/docs/releases/release_note_android_detail.png'/>

> 🔔 **배포 일자:** 2026-07-15

nachocode Android App Source **1.11.0** 버전이 반영되었습니다.

이번 업데이트 **ver.1.11.0**에서는 [SDK](../../sdk/release-v-1-11-0)의 일부 기능이 추가되었으며, 일부 버그가 개선되었습니다.

## 새로운 기능

- **스토어 국가 코드** : [SDK](../../sdk/release-v-1-11-0)를 통해 안드로이드 디바이스의 스토어 계정 국가 코드를 확인할 수 있습니다.
- **Firebase Analytics** : [SDK](../../sdk/release-v-1-11-0)를 통해 [`logEvent`](/docs/sdk/integrations/firebase/reference#log-event)와 [`setUserProperty`](/docs/sdk/integrations/firebase/reference#set-user-property) 등의 기능이 추가되었습니다.

## 개선 및 수정 사항

- **인앱 브라우저** : 인앱 브라우저에서 파일, 이미지 다운로드가 안 되던 버그가 개선되었습니다.
- **SSL 인증서** : 구형 디바이스에서 웹의 SSL 인증서가 완전하지 않을 때 흰 화면으로 보이던 이슈가 개선되었습니다.

## 업데이트 적용 방법

nachocode Android AppSource **ver.1.11.0**의 변경 사항을 앱에 반영하려면 아래 경로에서 신규 버전의 앱을 다시 빌드하여 적용 가능합니다.

:::info 업데이트 적용
[**나쵸코드 대시보드**](https://nachocode.io/?utm_source=docs&utm_medium=documentation&utm_campaign=devguide) > **앱 빌드** > **안드로이드 앱 빌드** > **새 버전 만들기**
:::
