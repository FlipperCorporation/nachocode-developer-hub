---
description: nachocode SDK의 vibration 네임스페이스를 사용하여 디바이스 진동 및 햅틱 피드백 기능을 간단히 구현하고, 사용자 환경에 따라 활성화 또는 비활성화할 수 있습니다.
keywords:
  [
    햅틱,
    햅틱 피드백,
    디바이스 진동,
    진동,
    vibration,
    device vibration,
    haptics,
    haptics feedback,
  ]
---

# 진동 (`vibration`)

> 🔔 **최신화 일자:** 2025-04-18

## **개요**

`vibration` 네임스페이스는 **디바이스 진동 및 햅틱 피드백을 제어하는 기능**을 제공합니다.

이를 통해 **햅틱 피드백(성공, 오류 등)과 짧은 진동 패턴**을 트리거하거나,  
**사용자 설정에 따라 진동 기능을 활성화 또는 비활성화**할 수 있습니다.

---

## **타입 정의**

### **`HapticsType`**

햅틱 피드백 유형을 나타내는 열거형(enum)입니다.

| 값        | 설명                          |
| --------- | ----------------------------- |
| `SUCCESS` | 성공 시의 햅틱 피드백         |
| `ERROR`   | 오류 또는 실패 시 햅틱 피드백 |

---

## **메서드 목록**

| 메서드                                                                      | 설명                                | 추가된 버전 |
| --------------------------------------------------------------------------- | ----------------------------------- | ----------- |
| [`setHaptics(enable)`](#sethapticsenable-boolean-void)                      | 햅틱 피드백 사용 여부를 설정합니다. | ver.1.2.0   |
| [`getHaptics(callback)`](#gethapticscallback-enable-boolean--void-void)     | 햅틱 피드백 사용 여부를 반환합니다. | ver.1.2.0   |
| [`haptics(hapticsType?)`](#hapticshapticstype-hapticstype-void)             | 햅틱 피드백을 트리거합니다.         | ver.1.2.0   |
| [`setVibration(enable)`](#setvibrationenable-boolean-void)                  | 진동 사용 여부를 설정합니다.        | ver.1.2.0   |
| [`getVibration(callback)`](#getvibrationcallback-enable-boolean--void-void) | 진동 사용 여부를 반환합니다.        | ver.1.2.0   |
| [`vibrate()`](#vibrate-void)                                                | 짧은 진동 패턴을 트리거합니다.      | ver.1.2.0   |

---

## **메서드 상세**

### **`setHaptics(enable: boolean): void`**

- _since ver.1.2.0_

#### 설명 (`setHaptics`)

앱 사용자의 햅틱 피드백 사용 여부를 설정합니다.

> 📢 **스토어 정책:** 진동 기능을 사용할 경우, 앱 사용자가 햅틱 피드백을 비활성화할 수 있는 옵션을 반드시 제공해야 합니다.

#### 매개변수 (`setHaptics`)

| 이름     | 타입      | 필수 여부 | 설명                                                        |
| -------- | --------- | --------- | ----------------------------------------------------------- |
| `enable` | `boolean` | ✅        | 햅틱 피드백 사용 여부 (`true` = 사용, `false` = 사용 안 함) |

#### 반환 값 (`setHaptics`)

해당 메서드는 반환 값을 가지지 않습니다.

#### 사용 예제 (`setHaptics`)

```javascript
// 앱이 햅틱 피드백을 사용하도록 설정합니다.
Nachocode.vibration.setHaptics(true);
```

```javascript
// 사용자의 선택에 따라 햅틱 피드백 사용을 중지합니다.
Nachocode.vibration.setHaptics(false);
```

```javascript
// ex. 햅틱 피드백 토글 UI 변경 시 호출 될 함수
function onHapticsToggleChange(enable) {
  Nachocode.vibration.setHaptics(enable);
}
```

---

### **`getHaptics(callback: (enable: boolean) => void): void`**

- _since ver.1.2.0_

#### 설명 (`getHaptics`)

현재 앱 사용자의 **햅틱 피드백 사용 여부**를 반환합니다.  
콜백 함수로 `true` 또는 `false` 값을 전달받습니다.

#### 매개변수 (`getHaptics`)

| 이름       | 타입                        | 필수 여부 | 설명                       |
| ---------- | --------------------------- | --------- | -------------------------- |
| `callback` | `(enable: boolean) => void` | ✅        | 햅틱 피드백 사용 여부 반환 |

#### 반환 값 (`getHaptics`)

해당 메서드는 반환 값을 가지지 않으며, 결과는 `callback`을 통해 비동기적으로 제공됩니다.

#### 사용 예제 (`getHaptics`)

```javascript
// ex. Native에서 햅틱 피드백 사용유무를 받아와 input의 checked 값을 변경합니다.
Nachocode.vibration.getHaptics(enable => {
  console.log(`햅틱 피드백 사용 여부: ${enable ? '사용 중' : '비활성화'}`);

  document.querySelector(
    `input[name="useHaptics"][value="${enable}"]`
  ).checked = true;
});
```

---

### **`haptics(hapticsType?: HapticsType): void`**

- _since ver.1.2.0_

#### 설명 (`haptics`)

햅틱 피드백을 트리거합니다.  
`SUCCESS = 0 | ERROR = 1`을 옵션으로 선택할 수 있습니다.
기본적으로 `SUCCESS` 피드백을 사용하며, 선택적으로 `ERROR` 피드백을 지정할 수 있습니다.

#### 매개변수 (`haptics`)

| 이름          | 타입          | 필수 여부 | 설명                      |
| ------------- | ------------- | --------- | ------------------------- |
| `hapticsType` | `HapticsType` | ❌        | 트리거할 햅틱 피드백 유형 |

#### 사용 예제 (`haptics`)

```javascript
// 기본 햅틱 피드백 (SUCCESS)
// DOM 요소의 touchstart 이벤트에 햅틱 피드백 트리거를 바인드 합니다.
document
  .getElementById('hapticsButton')
  .addEventListener('touchstart', function () {
    // 기본적으로 HapticsType.SUCCESS(=0)를 옵션으로 가집니다.
    Nachocode.vibration.haptics();
  });

document
  .getElementById('hapticsButton2')
  .addEventListener('touchstart', function () {
    // 0은 HapticsType.SUCCESS를 의미합니다.
    Nachocode.vibration.haptics(0);
  });
```

```javascript
// 오류 시 햅틱 피드백 (ERROR)
// DOM 요소의 touchstart 이벤트에 햅틱 피드백 트리거를 바인드 합니다.
document
  .getElementById('hapticsButton')
  .addEventListener('touchstart', function () {
    // 1은 HapticsType.ERROR를 의미합니다.
    Nachocode.vibration.haptics(1);
  });
```

---

### **`setVibration(enable: boolean): void`**

- _since ver.1.2.0_

#### 설명 (`setVibration`)

앱 사용자의 진동 사용 여부를 설정합니다.

> 📢 **스토어 정책:** 진동 기능을 사용할 경우, 앱 사용자가 진동을 비활성화할 수 있는 옵션을 반드시 제공해야 합니다.

#### 매개변수 (`setVibration`)

| 이름     | 타입      | 필수 여부 | 설명                            |
| -------- | --------- | --------- | ------------------------------- |
| `enable` | `boolean` | ✅        | 진동 사용 여부 (`true`/`false`) |

#### 사용 예제 (`setVibration`)

```javascript
// 앱이 진동을 사용하도록 설정합니다.
Nachocode.vibration.setVibration(true);
```

```javascript
// 사용자의 선택에 따라 진동 사용을 중지합니다.
Nachocode.vibration.setVibration(false);
```

```javascript
// ex. 진동 토글 UI 변경 시 호출 될 함수
function onVibrationToggleChange(enable) {
  Nachocode.vibration.setVibration(enable);
}
```

---

### **`getVibration(callback: (enable: boolean) => void): void`**

- _since ver.1.2.0_

#### 설명 (`getVibration`)

현재 앱 사용자의 **진동 사용 여부**를 반환합니다.  
콜백 함수로 `true` 또는 `false` 값을 전달받습니다.

#### 매개변수 (`getVibration`)

| 이름       | 타입                        | 필수 여부 | 설명                |
| ---------- | --------------------------- | --------- | ------------------- |
| `callback` | `(enable: boolean) => void` | ✅        | 진동 사용 여부 반환 |

#### 반환 값 (`getVibration`)

해당 메서드는 반환 값을 가지지 않으며, 결과는 `callback`을 통해 비동기적으로 제공됩니다.

#### 사용 예제 (`getVibration`)

```javascript
// ex. Native에서 진동 사용유무를 받아와 input의 checked 값을 변경합니다.
Nachocode.vibration.getVibration(enable => {
  console.log(`진동 사용 여부: ${enable ? '사용 중' : '비활성화'}`);

  document.querySelector(
    `input[name="useVibration"][value="${enable}"]`
  ).checked = true;
});
```

---

### **`vibrate(): void`**

- _since ver.1.2.0_

#### 설명 (`vibrate`)

짧은 **패턴의 진동**을 트리거합니다.

#### 반환 값 (`vibrate`)

해당 메서드는 반환 값을 가지지 않습니다.

#### 사용 예제 (`vibrate`)

```javascript
// DOM 요소의 click 이벤트에 진동 트리거를 바인드 합니다.
document.getElementById('vibrateButton').addEventListener('click', function () {
  // 진동 호출
  Nachocode.vibration.vibrate();
});
```

---
