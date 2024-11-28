---
sidebar_position: 14
---

# 진동 (`vibration`)

> 🔔 **최신화 일자:** 2024-11-27

진동 및 햅틱 피드백을 제어하는 네임스페이스입니다.
디바이스에서 진동 기능을 활성화하거나 호출하여 진동을 트리거할 수 있습니다.

---

## 타입 정의

### HapticsType

햅틱 피드백 유형을 나타내는 열거형입니다.

- `SUCCESS = 0`: 성공 시의 햅틱 피드백을 나타냅니다.
- `ERROR = 1`: 실패 시의 햅틱 피드백을 나타냅니다.

---

## 주요 메서드

### `setHaptics(enable: boolean): void`

앱 사용자의 햅틱 피드백 사용유무를 저장합니다.
스토어 정책 상 진동 기능을 사용 할 경우 앱 사용자에게 끌 수 있도록 옵션을 제공해야 합니다.

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

### `setVibration(enable: boolean): void`

앱 사용자의 진동 사용유무를 저장합니다.
스토어 정책 상 진동 기능을 사용 할 경우 앱 사용자에게 끌 수 있도록 옵션을 제공해야 합니다.

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

### `getHaptics(callback: (enable: boolean) => void): void`

앱에서 앱 사용자의 햅틱 피드백 사용유무를 받아옵니다. 콜백함수에 사용 유무를 전달하여 호출합니다.

```javascript
// ex. Native에서 햅틱 피드백 사용유무를 받아와 input의 checked 값을 변경합니다.
Nachocode.vibration.getHaptics(enable => {
  document.querySelector(
    `input[name="useHaptics"][value="${enable}"]`
  ).checked = true;
});
```

---

### `getVibration(callback: (enable: boolean) => void): void`

앱에서 앱 사용자의 진동 사용유무를 받아옵니다. 콜백함수에 사용 유무를 전달하여 호출합니다.

```javascript
// ex. Native에서 진동 사용유무를 받아와 input의 checked 값을 변경합니다.
Nachocode.vibration.getVibration(enable => {
  document.querySelector(
    `input[name="useVibration"][value="${enable}"]`
  ).checked = true;
});
```

---

### `isUsingHaptics(): boolean`

앱 Preference 스토리지에서 사용자의 햅틱 피드백 사용유무를 받아옵니다.

```javascript
// 저장 된 사용자 햅틱 피드백 사용유무 확인
const usesHaptics = Nachocode.vibration.isUsingHaptics(); // true | false
```

---

### `isUsingVibration(): boolean`

앱 Preference 스토리지에서 사용자의 진동 사용유무를 받아옵니다.

```javascript
// 저장 된 사용자 진동 사용유무 확인
const usesVibration = Nachocode.vibration.isUsingVibration(); // true | false
```

---

### `haptics(hapticsType?: HapticsType): void`

햅틱 피드백을 트리거합니다.
`SUCCESS = 0 | ERROR = 1`을 옵션으로 선택할 수 있습니다.
기본적으로 `SUCCESS = 0` 을 옵션으로 가집니다.

```javascript
// DOM 요소의 touchstart 이벤트에 햅틱 피드백 트리거를 바인드 합니다.
document
  .getElementById('hapticsButton')
  .addEventListener('touchstart', function () {
    // 기본적으로 HapticsType.SUCCESS(=0)를 옵션으로 가집니다.
    Nachocode.vibration.haptics();
  });
```

```javascript
// DOM 요소의 touchstart 이벤트에 햅틱 피드백 트리거를 바인드 합니다.
document
  .getElementById('hapticsButton')
  .addEventListener('touchstart', function () {
    // 0은 HapticsType.SUCCESS를 의미합니다.
    Nachocode.vibration.haptics(0);
  });
```

```javascript
// DOM 요소의 touchstart 이벤트에 햅틱 피드백 트리거를 바인드 합니다.
document
  .getElementById('hapticsButton')
  .addEventListener('touchstart', function () {
    // 1은 HapticsType.ERROR를 의미합니다.
    Nachocode.vibration.haptics(1);
  });
```

---

### `vibrate(): void`

짧은 패턴의 진동을 트리거합니다.

```javascript
// DOM 요소의 click 이벤트에 진동 트리거를 바인드 합니다.
document.getElementById('vibrateButton').addEventListener('click', function () {
  // 진동 호출
  Nachocode.vibration.vibrate();
});
```

---
