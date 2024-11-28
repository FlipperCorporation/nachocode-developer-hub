---
sidebar_position: 9
---

# 내부 저장소 (`preference`)

> 🔔 **최신화 일자:** 2024-11-27

네이티브 환경의 내부 저장소를 활용하여 앱 내 데이터를 저장하고 관리하는 기능을 제공합니다.

---

## 주요 메서드

### `deleteData(key: string)`

앱 내부 저장소에 저장된 데이터를 삭제합니다.

```javascript
// ex. 'sample'을 키로 앱 내부 저장소의 데이터를 삭제합니다.
Nachocode.preference.deleteData('sample');
```

---

### `getData(key: string, callback: (data: string) => any): void`

앱 내부 저장소에 저장된 데이터를 불러옵니다. 콜백함수의 매개 변수로 값이 전달 됩니다.

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

### `setData(key: string, data: string): void`

앱 내부 저장소에 특정키로 데이터를 저장합니다.

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
