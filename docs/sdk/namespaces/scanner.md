---
sidebar_position: 15
---

# 스캐너 (`scanner`)

> 🔔 **최신화 일자:** 2025-02-10

## **개요**

`scanner` 네임스페이스는 **QR 코드 스캐너 및 기타 스캔 관련 기능**을 제공합니다.  
현재는 **QR 코드 스캐너** 기능을 제공하며, 추후 **이미지 스캔, 영수증 스캔**과 같은 다양한 스캔 기능이 추가될 예정입니다.

---

## **메서드 목록**

| 메서드                                                                                                                                                                  | 설명                         | 추가된 버전 |
| ----------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------- | ----------- |
| [`openQRCodeScanner(option, callback?)`](#openqrcodescanneroption--opendirect-boolean-opentype-internal--external--main--callback-data-string-error-sdkerror--any-void) | QR 코드 스캐너를 실행합니다. | ver.1.4.0   |

---

## **메서드 상세**

### **`openQRCodeScanner(option: { openDirect: boolean, openType?: 'internal' | 'external' | 'main' }, callback?: (data: string, error?: SDKError) => any): void`**

- _since ver.1.4.0_

#### 설명 (`openQRCodeScanner`)

QR 코드 스캐너를 실행하고, 스캔된 데이터를 **콜백 함수로 반환**합니다.

`openDirect` 옵션이 **true**일 경우, 스캔한 **URL을 자동으로 브라우저에서 실행**합니다.  
**false**일 경우, 스캔한 브라우저로 실행하지 않고 데이터로만 반환 받습니다.

`openType` 옵션을 통해 **내부 브라우저(`internal`)**, **외부 브라우저(`external`)**, **메인 뷰(`main`)** 어디에서 스캔한 URL을 오픈할 지 실행 방식을 선택할 수 있습니다.

#### 매개변수 (`openQRCodeScanner`)

| 이름       | 타입                                                                     | 필수 여부 | 설명                        |
| ---------- | ------------------------------------------------------------------------ | --------- | --------------------------- |
| `option`   | `{ openDirect: boolean, openType?: 'internal' \| 'external' \| 'main' }` | ✅        | 스캐너 옵션을 지정하는 객체 |
| `callback` | `(data: string, error?: SDKError) => any`                                | ❌        | 스캔 결과를 반환하는 함수   |

##### **option 설명**

- `openDirect: boolean`: **true**일 경우, **스캔된 URL을 브라우저에서 자동으로 실행**합니다.
  - **false**일 경우, **데이터만 반환**하고 브라우저는 열리지 않습니다.
- `openType`: 선택적 값으로 **브라우저 실행 방식**을 결정합니다.
  - `'internal'`: **내장 브라우저**에서 실행합니다.
  - `'external'`: **외부 브라우저**에서 실행합니다.
  - `'main'`: **메인 뷰에서 실행**합니다.

#### 반환 값 (`openQRCodeScanner`)

해당 메서드는 반환 값을 가지지 않으며, 결과는 `callback`을 통해 비동기적으로 제공됩니다.

- `data`: 스캔된 QR 코드의 문자열 데이터 (ex: URL)
- `error`: 스캔 실패 시 반환되는 오류 객체 (`SDKError`)

---

## **사용 예제**

```javascript
// 기본 QR 코드 스캐너 실행 (데이터만 반환)
Nachocode.scanner.openQRCodeScanner({ openDirect: false }, (data, error) => {
  if (error) {
    console.error('QR 코드 스캔 실패:', error.message);
  } else {
    console.log('QR 코드 데이터:', data);
  }
});
```

```javascript
// QR 코드 스캔 후 메인 뷰에서 URL 실행
Nachocode.scanner.openQRCodeScanner(
  { openDirect: true, openType: 'main' },
  (data, error) => {
    if (error) {
      console.error('QR 코드 스캔 실패:', error.message);
    } else {
      console.log('QR 코드 데이터:', data);
    }
  }
);
```

```javascript
// QR 코드 스캔 후 내부 브라우저에서 URL 실행
Nachocode.scanner.openQRCodeScanner(
  { openDirect: true, openType: 'internal' },
  (data, error) => {
    if (error) {
      console.error('QR 코드 스캔 실패:', error.message);
    } else {
      console.log('내부 브라우저에서 QR 코드 실행:', data);
    }
  }
);
```

```javascript
// QR 코드 스캔 후 외부 브라우저에서 URL 실행
Nachocode.scanner.openQRCodeScanner(
  { openDirect: true, openType: 'external' },
  (data, error) => {
    if (error) {
      console.error('QR 코드 스캔 실패:', error.message);
    } else {
      console.log('외부 브라우저에서 QR 코드 실행:', data);
    }
  }
);
```

---

## **추가 정보**

- **`openDirect`** 옵션을 사용하면 **스캔된 URL이 자동으로 브라우저에서 열립니다.**
- **`openType`** 으로 **브라우저 실행 방식**을 선택할 수 있으며, 필요에 따라 **데이터만 반환하거나, 내부 또는 외부 브라우저 혹은 메인 뷰에서 실행**할 수 있습니다.
- 현재는 **QR 코드 스캔 기능만 지원**하지만, 추후 **영수증 스캔 및 기타 스캔 관련 기능**이 추가될 예정입니다.

---
