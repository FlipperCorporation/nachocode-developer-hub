---
sidebar_position: 1
sidebar_label: 개요
---

# Nachocode SDK 개요

Nachocode JavaScript 클라이언트 SDK는 웹 클라이언트 개발자가 네이티브 앱 개발을 할 수 있도록 돕는 다양한 기능을 제공합니다.

이 SDK를 활용하면 다양한 네이티브 기능에 접근할 수 있으며, 웹 애플리케이션에서도 손쉽게 모바일 디바이스의 고유 기능을 활용할 수 있습니다.

이 문서는 SDK의 설치, 초기화, 주요 기능, 사용 방법 등을 안내합니다.

---

## 문서 구조

Nachocode SDK 문서는 아래와 같은 구조로 구성되어 있습니다:

1. **SDK 개요**  
   Nachocode SDK의 주요 기능과 개념에 대한 설명을 제공합니다.

2. **시작하기**  
   Nachocode SDK를 웹 클라이언트에 설치하고 설정하는 방법을 안내합니다.  
   ➡️ [시작하기 가이드](./getting-started.md)

3. **네임스페이스별 문서**  
   Nachocode SDK의 각 네임스페이스(`app`, `authentication`, `device` 등)에 대한 상세한 문서와 사용법을 제공합니다.

4. **API 문서**  
   Nachocode 플랫폼에서 제공하는 API 엔드포인트에 대한 정보를 제공합니다.  
   ➡️ [API 개요](../api/intro.md)

5. **CLI 문서** _(추후 추가)_  
   Nachocode CLI를 활용한 다양한 자동화 및 빌드 관리 기능을 제공합니다.

---

## 시작하기

Nachocode SDK를 처음 사용하시나요?  
[시작하기 가이드](./getting-started.md)를 확인하여 SDK 설치 및 초기화를 진행하세요.

---

## 지원 플랫폼

- Android
- iOS
- Web

---

## 주요 기능

Nachocode SDK는 다음과 같은 기능을 제공합니다:

### 1. **앱 정보 관리**

애플리케이션 이름, 버전, 패키지 이름 등의 정보를 제공합니다.  
➡️ [앱 네임스페이스](./namespaces/app.md)

### 2. **사용자 인증**

생체 인증(Fingerprint/Face ID) 등 다양한 인증 수단을 제공합니다.  
➡️ [인증 네임스페이스](./namespaces/authentication.md)

- **사용자 인증**: 생체 인증 및 권한 확인 기능을 제공합니다.

### 3. **네이티브 Back 키 제어**

Android 디바이스에서 네이티브 Back 키 이벤트를 관리합니다.  
➡️ [BackKey 네임스페이스](./namespaces/backkey.md)

### 4. **브라우저 기능**

외부 브라우저 또는 내부 브라우저로 URL을 열 수 있는 기능을 제공합니다.  
➡️ [브라우저 네임스페이스](./namespaces/browser.md)

### 5. **디바이스 정보 및 상태 확인**

디바이스 모델, OS 버전, 배터리 상태, 네트워크 상태 등을 확인할 수 있습니다.  
➡️ [디바이스 네임스페이스](./namespaces/device.md)

### 6. **환경 설정 및 실행 상태 관리**

SDK 초기화 상태, 실행 환경(웹/앱) 등을 확인할 수 있습니다.  
➡️ [환경 네임스페이스](./namespaces/env.md)

### 7. **이벤트 관리**

초기화, 포그라운드/백그라운드 전환 등의 이벤트를 처리합니다.  
➡️ [이벤트 네임스페이스](./namespaces/event.md)

### 8. **디바이스 권한 제어**

카메라, 위치, 푸시 알림 등 디바이스 권한을 요청하고 상태를 확인할 수 있습니다.  
➡️ [권한 네임스페이스](./namespaces/permission.md)

### 9. **내부 저장소 데이터 관리**

애플리케이션 내부 저장소를 통해 데이터를 저장 및 관리합니다.  
➡️ [내부 저장소 네임스페이스](./namespaces/preference.md)

### 10. **푸시 알림 토큰 관리**

푸시 알림 토큰을 관리하고 Nachocode 서버에 등록할 수 있습니다.  
➡️ [푸시 네임스페이스](./namespaces/push.md)

### 11. **화면 새로고침 제어**

'Pull to Refresh'와 같은 새로고침 동작을 제어할 수 있습니다.  
➡️ [새로고침 네임스페이스](./namespaces/refresh.md)

### 12. **공유 기능**

네이티브 공유 UI를 통해 URL을 공유할 수 있습니다.  
➡️ [공유 네임스페이스](./namespaces/share.md)

### 13. **탭바 제어**

앱 내부 탭바의 표시 여부 및 이동을 제어할 수 있습니다.  
➡️ [탭바 네임스페이스](./namespaces/tabbar.md)

### 14. **진동 및 햅틱 피드백**

디바이스의 진동 및 햅틱 피드백을 트리거할 수 있습니다.  
➡️ [진동 네임스페이스](./namespaces/vibration.md)

---

Nachocode SDK를 활용하여 웹 및 모바일 앱 개발의 새로운 가능성을 탐험해보세요! 🛠️
