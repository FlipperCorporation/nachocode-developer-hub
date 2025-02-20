---
sidebar_position: 6
---

# 클립보드 (`clipboard`)

> 🔔 **최신화 일자:** 2025-02-20

## **개요**

`clipboard` 네임스페이스는 **디바이스의 네이티브 클립보드에 텍스트를 복사하거나, 현재 저장된 텍스트를 가져오는 기능**을 제공합니다.  
이 기능을 사용하여 **사용자 인터페이스와 클립보드 간에 데이터를 효율적으로 공유**할 수 있습니다.

---

## **메서드 목록**

| 메서드                                                                                                    | 설명                                            | 추가된 버전 |
| --------------------------------------------------------------------------------------------------------- | ----------------------------------------------- | ----------- |
| [`getText(callback)`](#gettextcallback-text-string--any-void)                                             | 네이티브 클립보드에 저장된 텍스트를 반환합니다. | ver.1.4.0   |
| [`setText(text, callback?)`](#settexttext-string-callback-status-success--error-message-string--any-void) | 텍스트를 네이티브 클립보드에 저장합니다.        | ver.1.4.0   |

---

## **메서드 상세**

### **`getText(callback: (text: string) => any): void`**

- _since ver.1.4.0_

#### 설명 (`getText`)

디바이스의 **네이티브 클립보드에 저장된 텍스트**를 가져옵니다.  
콜백 함수로 텍스트 값을 전달합니다.

#### 매개변수 (`getText`)

| 이름       | 타입                    | 필수 여부 | 설명                               |
| ---------- | ----------------------- | --------- | ---------------------------------- |
| `callback` | `(text: string) => any` | ✅        | 클립보드에 저장된 텍스트 반환 함수 |

#### 반환 값 (`getText`)

해당 메서드는 반환 값을 가지지 않으며, 텍스트는 `callback`을 통해 비동기적으로 제공됩니다.

#### 사용 예제 (`getText`)

```javascript
// 네이티브 클립보드에서 텍스트를 가져옵니다.
Nachocode.clipboard.getText(text => {
  console.log('클립보드 내용:', text);
  alert(`클립보드에서 가져온 텍스트: ${text}`);
});
```

---

### **`setText(text: string, callback?: (status: 'success' | 'error', message: string) => any): void`**

- _since ver.1.4.0_

#### 설명 (`setText`)

입력된 **텍스트를 네이티브 클립보드에 저장**합니다.  
선택적으로 **콜백 함수**를 통해 복사 성공 여부와 메시지를 전달받을 수 있습니다.

#### 매개변수 (`setText`)

| 이름       | 타입                                                     | 필수 여부 | 설명                                |
| ---------- | -------------------------------------------------------- | --------- | ----------------------------------- |
| `text`     | `string`                                                 | ✅        | 클립보드에 저장할 텍스트            |
| `callback` | `(status: 'success' \| 'error', message: string) => any` | ❌        | 복사 결과 및 메시지를 반환하는 함수 |

- `status`: 복사 성공 여부 (`success` 또는 `error`)
- `message`: 복사 성공 또는 오류 메시지

#### 반환 값 (`setText`)

해당 메서드는 반환 값을 가지지 않으며, 결과는 `callback`을 통해 비동기적으로 제공됩니다.

#### 사용 예제 (`setText`)

```javascript
// 네이티브 클립보드에 텍스트를 저장합니다.
Nachocode.clipboard.setText('Hello nachocode!', (status, message) => {
  if (status === 'success') {
    console.log('클립보드에 텍스트가 성공적으로 복사되었습니다.');
  } else {
    console.error('클립보드에 복사 실패:', message);
  }
});
```

---

## **추가 정보**

- **`getText` 메서드는 사용자가 직접 클립보드에 복사한 텍스트 값을 반환**합니다.
- **`setText` 메서드는 앱 내에서 복사한 텍스트 값을 네이티브 클립보드에 저장**할 수 있습니다.
- 일부 디바이스 또는 특정 OS 버전에서는 클립보드 접근이 제한될 수 있습니다.

---
