---
description: nachocode SDK의 permission 네임스페이스는 앱의 필수 권한(카메라, 위치, 마이크, 푸시 알림 등)의 허용 여부를 조회하고 사용자에게 권한을 요청하는 기능을 제공합니다.
keywords:
  [
    앱 카메라 권한,
    앱 위치 권한,
    앱 마이크 권한,
    앱 푸시 알림 권한,
    앱 푸시 권한,
    앱 권한 관리,
    app permission,
    Android permission,
    iOS permission,
  ]
---

# 권한 (`permission`)

> 🔔 **최신화 일자:** 2025-06-13

## **개요**

`permission` 네임스페이스는 **디바이스의 주요 권한(카메라, 위치, 마이크, 푸시 알림 등)의**  
**상태를 확인하고 요청하는 기능**을 제공합니다.

앱이 특정 권한을 필요로 할 경우, **해당 권한이 허용되었는지 확인하고, 필요 시 사용자에게 권한 요청을 수행**할 수 있습니다.

---

### **필수 선행 작업**

#### (선택사항) `microphone` 권한 사용

[nachocode 대시보드](https://nachocode.io/?utm_source=docs&utm_medium=documentation&utm_campaign=devguide)의 [ **앱 설정** > **고급 설정** > **안드로이드 고급 설정** ]에서 [ **마이크 사용** ] 토글을 활성화하여 앱 설정 완료

#### (선택사항) `location` 권한 사용

[nachocode 대시보드](https://nachocode.io/?utm_source=docs&utm_medium=documentation&utm_campaign=devguide)의 [ **앱 설정** > **고급 설정** > **안드로이드 고급 설정** ]에서 [ **위치/지도 사용** ] 토글을 활성화하여 앱 설정 완료

![nachocode_advanced_android_setting](../../../static/img/docs/android/nachocode_advanced_android_setting.png)

<br/>

---

## **타입 정의**

### **`PermissionType`**

nachocode SDK에서 지원하는 디바이스의 앱 권한 유형입니다.

```typescript
const PERMISSION_TYPES = {
  /**
   * Camera usage permission
   * @since 1.4.2
   */
  CAMERA: 'camera',
  /**
   * Location access permission
   * @since 1.4.2
   */
  LOCATION: 'location',
  /**
   * Microphone usage permission
   * @since 1.4.2
   */
  MICROPHONE: 'microphone',
  /**
   * Photo usage permission
   * @since 1.5.0
   */
  PHOTO: 'photo',
  /**
   * Push notification permission
   * @since 1.4.2
   */
  PUSH: 'push',
} as const;
```

| 값           | 설명                |
| ------------ | ------------------- |
| `camera`     | 카메라 사용 권한    |
| `location`   | 위치 정보 접근 권한 |
| `microphone` | 마이크 사용 권한    |
| `photo`      | 사진 사용 권한      |
| `push`       | 푸시 알림 권한      |

---

## **메서드 목록**

| 메서드                                                   | 설명                                                               | 추가된 버전 |
| -------------------------------------------------------- | ------------------------------------------------------------------ | ----------- |
| [`checkPermission(option, callback)`](#check-permission) | 특정 권한이 허용되었는지 확인하고, 필요 시 권한 요청을 수행합니다. | ver.1.2.0   |

---

## **메서드 상세**

### **`checkPermission(option: { type: PermissionType, ask?: boolean }, callback?: (granted: boolean) => void): void`** {#check-permission}

- _since ver.1.2.0_

:::warning
_`microphone`과 `location` 권한은 [필수 선행 작업](#필수-선행-작업)이 완료되어야 사용할 수 있습니다._
:::

#### 설명 {#check-permission-summary}

지정된 권한(`type`)이 **이미 허용되었는지 여부를 확인**합니다.  
`ask` 옵션이 `true`일 경우, **사용자가 권한을 허용하지 않았다면 권한 요청 팝업을 표시**합니다. 콜백 함수의 매개 변수로 허용 여부를 전달합니다.

#### 매개변수 {#check-permission-parameters}

| 이름       | 타입                                      | 필수 여부 | 설명                                                 |
| ---------- | ----------------------------------------- | --------- | ---------------------------------------------------- |
| `option`   | `{ type: PermissionType, ask?: boolean }` | ✅        | 확인할 권한 유형 및 권한 요청 여부 (`ask`) 포함 객체 |
| `callback` | `(granted: boolean) => void` _(optional)_ | ❌        | 권한이 허용되었는지 여부를 전달받는 콜백 함수        |

- `type`: 확인할 권한 유형 (`camera`, `location`, `microphone`, `photo`, `push`)
- `ask`: `true`인 경우, 권한이 허용되지 않았을 때 요청 팝업을 표시 (`default: false`)

#### 반환 값 {#check-permission-returns}

해당 메서드는 반환 값을 가지지 않으며, 결과는 `callback`을 통해 비동기적으로 제공됩니다.  
콜백 함수는 권한이 **허용되었을 경우 `true`**, 거부되었을 경우 `false` 값을 전달받습니다.

#### 사용 예제 {#check-permission-examples}

```javascript
// ex. 푸시 알림 권한 허용 여부를 확인합니다.
// 권한이 허용되지 않은 경우, 자동으로 OS 팝업을 통해 권한을 요청합니다.
Nachocode.permission.checkPermission({ type: 'push', ask: true }, granted => {
  // 앱 유저의 권한 허용 여부가 매개 변수 granted에 전달 됩니다.
  if (granted) {
    alert('푸시 권한 허용됨.');
  } else {
    alert('푸시 권한 거부됨.');
  }
});
```

---

#### **주의 사항**

1. `ask` 옵션이 `false`일 경우, 사용자가 권한을 거부했더라도 팝업을 띄우지 않고 **현재 권한 상태만 반환**합니다.
2. `ask` 옵션이 `true`일 경우, 사용자가 이전에 "권한을 요청하지 않음"을 선택한 경우 **OS 팝업으로 다시 요청할 수 없습니다.**
3. nachocode 앱에서는 **OS 팝업으로 다시 요청할 수 없을 때**, 기본적으로 **권한 설정 페이지로 이동하도록** 구현이 되어있습니다.
4. 특정 OS 버전에서는 권한 요청이 거부되었을 때, 앱 유저가 **설정에서 직접 변경해야만 권한을 활성화할 수 있습니다.**
