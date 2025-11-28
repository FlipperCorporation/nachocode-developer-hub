---
description: nachocode SDK의 preference 네임스페이스를 사용해 앱의 네이티브 내부 저장소에 데이터를 저장, 조회 및 삭제하여 앱 설정이나 사용자 데이터를 간편하게 관리하세요.
keywords:
  [
    app preference,
    앱 내부 저장소,
    앱 저장소,
    앱 유저 설정,
    앱 유저 정보,
    앱 사용자 정보,
    앱 임시 데이터,
    앱 내 데이터,
    iOS preference,
    Android preference,
  ]
image: /img/docs/thumbnails/SDK/preference.svg
---

# 내부 저장소 (`preference`)

![thumbnails](/img/docs/thumbnails/SDK/preference.svg)

import { BadgeWithVersion } from '@site/src/components/svg/badge-with-version';

> 🚀 **추가된 버전 :** <BadgeWithVersion type="SDK" version="v1.2.0" link="/docs/releases/v1/sdk/release-v-1-2-0" /> <BadgeWithVersion type="Android" version="v1.2.0" link="/docs/releases/v1/app-source/android/release-v-1-2-0" /> <BadgeWithVersion type="iOS" version="v1.2.0" link="/docs/releases/v1/app-source/ios/release-v-1-2-0" />  
> 🔔 **최신화 일자:** 2025-07-17

## **개요** {#overview}

`preference` 네임스페이스는 **네이티브 환경의 내부 저장소를 활용하여 앱 내 데이터를 저장, 조회 및 삭제하는 기능**을 제공합니다.

**앱 내부 설정, 사용자 정보, 임시 데이터 등**을 저장하고 유지할 수 있습니다.

:::tip 언제 활용하면 좋나요?
유저의 **'다크모드 여부', '푸시 수신 여부', '선호 언어'** 같은 개인 설정을 앱 종료 후에도 유지하고 싶을 때, 사용자가 **마지막으로 본 탭, 검색어, 필터 등을 저장해두고 다음 방문 시 자연스럽게 복구**시킬 때 등 여러 상황에서 활용 할 수 있습니다.
:::

---

## **메서드 목록** {#method-list}

| 메서드                                | 설명                             | 추가된 버전                                                                                   |
| ------------------------------------- | -------------------------------- | --------------------------------------------------------------------------------------------- |
| [`setData(key, data)`](#set-data)     | 지정한 키로 데이터를 저장합니다. | <BadgeWithVersion type="SDK" version="v1.2.0" link="/docs/releases/v1/sdk/release-v-1-2-0" /> |
| [`getData(key, callback)`](#get-data) | 지정한 키의 데이터를 불러옵니다. | <BadgeWithVersion type="SDK" version="v1.2.0" link="/docs/releases/v1/sdk/release-v-1-2-0" /> |
| [`deleteData(key)`](#delete-data)     | 지정한 키의 데이터를 삭제합니다. | <BadgeWithVersion type="SDK" version="v1.3.0" link="/docs/releases/v1/sdk/release-v-1-3-0" /> |

---

## **메서드 상세** {#method-details}

### **`setData(key: string, data: string): void`** {#set-data}

- _since:_ <BadgeWithVersion type="SDK" version="v1.2.0" link="/docs/releases/v1/sdk/release-v-1-2-0" />

#### 설명 {#set-data-summary}

앱 내부 저장소에 **지정한 키(`key`)로 데이터를 저장**합니다.  
저장된 데이터는 앱이 종료되더라도 유지됩니다.

#### 매개변수 {#set-data-parameters}

| 이름   | 타입     | 필수 여부 | 설명                  |
| ------ | -------- | --------- | --------------------- |
| `key`  | `string` | ✅        | 저장할 데이터의 키 값 |
| `data` | `string` | ✅        | 저장할 데이터 값      |

#### 반환 값 {#set-data-returns}

해당 메서드는 반환 값을 가지지 않습니다.

#### 사용 예제 {#set-data-examples}

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

### **`getData(key: string, callback: (data: string) => void): void`** {#get-data}

- _since:_ <BadgeWithVersion type="SDK" version="v1.2.0" link="/docs/releases/v1/sdk/release-v-1-2-0" />

#### 설명 {#get-data-summary}

앱 내부 저장소에서 **지정한 키(`key`)의 데이터를 조회**합니다.  
데이터가 존재하는 경우, 콜백 함수로 해당 데이터를 전달합니다.

#### 매개변수 {#get-data-parameters}

| 이름       | 타입                              | 필수 여부 | 설명                          |
| ---------- | --------------------------------- | --------- | ----------------------------- |
| `key`      | `string`                          | ✅        | 조회할 데이터의 키 값         |
| `callback` | `(data: string) => void` _(옵션)_ | ✅        | 조회한 데이터를 전달하는 함수 |

#### 반환 값 {#get-data-returns}

해당 메서드는 반환 값을 가지지 않으며, 결과는 `callback`을 통해 비동기적으로 제공됩니다.

#### 사용 예제 {#get-data-examples}

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

### **`deleteData(key: string): void`** {#delete-data}

- _since:_ <BadgeWithVersion type="SDK" version="v1.3.0" link="/docs/releases/v1/sdk/release-v-1-3-0" />

#### 설명 {#delete-data-summary}

앱 내부 저장소에서 **지정한 키(`key`)의 데이터를 삭제**합니다.

#### 매개변수 {#delete-data-parameters}

| 이름  | 타입     | 필수 여부 | 설명                      |
| ----- | -------- | --------- | ------------------------- |
| `key` | `string` | ✅        | 삭제하려는 데이터의 키 값 |

#### 반환 값 {#delete-data-returns}

해당 메서드는 반환 값을 가지지 않습니다.

#### 사용 예제 {#delete-data-examples}

```javascript
// ex. 'sample'을 키로 앱 내부 저장소의 데이터를 삭제합니다.
Nachocode.preference.deleteData('sample');
```

---

## **사용 예제** {#preference-examples}

### **1. 데이터 저장 및 조회** {#preference-example-1}

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

### **2. 데이터 삭제 후 조회** {#preference-example-2}

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
