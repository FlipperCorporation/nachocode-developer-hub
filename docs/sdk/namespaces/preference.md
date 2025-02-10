---
sidebar_position: 12
---

# 내부 저장소 (`preference`)

> 🔔 **최신화 일자:** 2025-02-07

## **개요**

`preference` 네임스페이스는 **네이티브 환경의 내부 저장소를 활용하여 앱 내 데이터를 저장, 조회 및 삭제하는 기능**을 제공합니다.  
이를 통해 **앱 내부 설정, 사용자 정보, 임시 데이터 등**을 저장하고 유지할 수 있습니다.

---

## **메서드 목록**

| 메서드                                                                        | 설명                             | 추가된 버전 |
| ----------------------------------------------------------------------------- | -------------------------------- | ----------- |
| [`setData(key, data)`](#setdatakey-string-data-string-void)                   | 지정한 키로 데이터를 저장합니다. | ver.1.2.0   |
| [`getData(key, callback)`](#getdatakey-string-callback-data-string--any-void) | 지정한 키의 데이터를 불러옵니다. | ver.1.2.0   |
| [`deleteData(key)`](#deletedatakey-string-void)                               | 지정한 키의 데이터를 삭제합니다. | ver.1.3.0   |

---

## **메서드 상세**

### **`setData(key: string, data: string): void`**

- _since ver.1.2.0_

#### 설명 (`setData`)

앱 내부 저장소에 **지정한 키(`key`)로 데이터를 저장**합니다.  
저장된 데이터는 앱이 종료되더라도 유지됩니다.

#### 매개변수 (`setData`)

| 이름   | 타입     | 필수 여부 | 설명                  |
| ------ | -------- | --------- | --------------------- |
| `key`  | `string` | ✅        | 저장할 데이터의 키 값 |
| `data` | `string` | ✅        | 저장할 데이터 값      |

#### 반환 값 (`setData`)

해당 메서드는 반환 값을 가지지 않습니다.

#### 사용 예제 (`setData`)

```javascript
// ex. 'sample'을 키로 앱 내부 저장소에 데이터를 저장합니다.
Nachocode.preference.setData('sample', 'sample data');

// ex. 'sample'을 키로 앱 내부 저장소의 데이터를 조회합니다.
Nachocode.preference.setData('sample', data => {
  if (data) {
    alert(data); // sample data
  } else {
    alert('No received data!');
  }
});
```

---

### **`getData(key: string, callback: (data: string) => any): void`**

- _since ver.1.2.0_

#### 설명 (`getData`)

앱 내부 저장소에서 **지정한 키(`key`)의 데이터를 조회**합니다.  
데이터가 존재하는 경우, 콜백 함수로 해당 데이터를 전달합니다.

#### 매개변수 (`getData`)

| 이름       | 타입                             | 필수 여부 | 설명                          |
| ---------- | -------------------------------- | --------- | ----------------------------- |
| `key`      | `string`                         | ✅        | 조회할 데이터의 키 값         |
| `callback` | `(data: string) => any` _(옵션)_ | ✅        | 조회한 데이터를 전달하는 함수 |

#### 반환 값 (`getData`)

해당 메서드는 반환 값을 가지지 않으며, 결과는 `callback`을 통해 비동기적으로 제공됩니다.

#### 사용 예제 (`getData`)

```javascript
// ex. 'sample'을 키로 앱 내부 저장소의 데이터를 조회합니다.
Nachocode.preference.getData('sample', data => {
  if (data) {
    alert('Received Data : ' + data);
  } else {
    alert('No received data!');
  }
});
```

---

### **`deleteData(key: string): void`**

- _since ver.1.3.0_

#### 설명 (`deleteData`)

앱 내부 저장소에서 **지정한 키(`key`)의 데이터를 삭제**합니다.

#### 매개변수 (`deleteData`)

| 이름  | 타입     | 필수 여부 | 설명                  |
| ----- | -------- | --------- | --------------------- |
| `key` | `string` | ✅        | 삭제할 데이터의 키 값 |

#### 반환 값 (`deleteData`)

해당 메서드는 반환 값을 가지지 않습니다.

#### 사용 예제 (`deleteData`)

```javascript
// ex. 'sample'을 키로 앱 내부 저장소의 데이터를 삭제합니다.
Nachocode.preference.deleteData('sample');
```

---

## **사용 예제**

### **예제 1: 데이터 저장 및 조회**

```javascript
// 'userPreferences' 키로 사용자 설정을 저장합니다.
Nachocode.preference.setData(
  'userPreferences',
  JSON.stringify({ theme: 'dark', language: 'ko' })
);

// 저장된 데이터를 불러옵니다.
Nachocode.preference.getData('userPreferences', data => {
  if (data) {
    const preferences = JSON.parse(data);
    console.log(`테마: ${preferences.theme}, 언어: ${preferences.language}`);
  } else {
    console.log('저장된 설정이 없습니다.');
  }
});
```

---

### **예제 2: 데이터 삭제 후 조회**

```javascript
// 'cacheData' 키로 저장된 데이터를 삭제합니다.
Nachocode.preference.deleteData('cacheData');

// 데이터 삭제 후 다시 조회하면 값이 존재하지 않음.
Nachocode.preference.getData('cacheData', data => {
  if (data) {
    console.log(`데이터 존재: ${data}`);
  } else {
    console.log('삭제된 데이터입니다.');
  }
});
```

---
