---
description: nachocode SDK의 iap 네임스페이스를 통해 Android 및 iOS 환경에서 인앱결제를 손쉽게 처리하고, 결제 성공, 실패, 웹훅(Webhook) 처리까지 효율적으로 관리하세요.
keywords:
  [
    인앱 결제,
    Android 결제,
    iOS 결제,
    구글 플레이 스토어,
    애플 앱스토어,
    일회성 구매,
    in app purchase,
    Google Play Store,
    Apple App Store,
  ]
---

# 인앱결제 (`iap`)

> 🔔 **최신화 일자:** 2025-04-25

## **개요**

`iap` 네임스페이스는 **네이티브 인앱결제 기능**을 제공합니다. nachocode SDK를 사용해 **Android 및 iOS 환경에서 인앱결제를 손쉽게 처리**할 수 있으며, 테스트 환경(`sandbox`)과 운영 환경(`production`)을 모두 지원합니다.
SDK 연동 전 **가이드**를 참고해보세요.

➡️[인앱결제 가이드](../../guide/iap)

➡️[웹훅 가이드](../../guide/webhook/overview)

---

### **필수 선행 작업**

nachocode SDK로 **인앱결제 기능**을 사용하기 위해서는 nachocode 대시보드에서 **인앱결제 설정이 모두 완료된 후 빌드된 경우에만** 작동합니다.

➡️ [인앱결제 유저 가이드](https://docs.nachocode.io/ko/articles/%EC%9D%B8%EC%95%B1-%EA%B2%B0%EC%A0%9C-c2ff4900)

---

## **타입 정의**

### **`IapPurchaseResult`**

```typescript
declare type IapPurchaseResult = {
  purchaseEnv: 'sandbox' | 'production';
  userId: string;
  productId?: string;
  nachoProductId: string;
  purchaseId?: number;
  os: 'android' | 'ios' | null;
  status: {
    success: boolean;
    error?: {
      code: string;
      message: string;
    };
  };
};
```

| **속성명**             | **타입**                          | **필수 여부** | **설명**                                                                                                |
| ---------------------- | --------------------------------- | ------------- | ------------------------------------------------------------------------------------------------------- |
| `purchaseEnv`          | `'sandbox'` \| `'production'`     | ✅            | 구매가 이루어진 환경 (`sandbox`: 테스트 환경, `production`: 운영 환경)                                  |
| `userId`               | `string`                          | ✅            | 인앱결제를 수행한 앱 사용자의 고유 식별자                                                               |
| `productId`            | `string`                          | ❌            | **(_optional_)** 상품키로 조회된 스토어에 등록된 상품의 고유 식별자, Native 호출이 실패한 경우 **없음** |
| `nachoProductId`       | `string`                          | ✅            | nachocode에서 발급받은 인앱 상품의 고유 식별자                                                          |
| `purchaseId`           | `number`                          | ❌            | **(_optional_)** 인앱결제 구매 내역 ID, Native 호출이 실패한 경우 **없음**                              |
| `os`                   | `'android'` \| `'ios'` \| `null'` | ✅            | 인앱결제가 이루어진 운영 체제 (`android`, `ios`, `null` = OS 정보 없음)                                 |
| `status`               | `object`                          | ✅            | 인앱결제 호출 상태 정보                                                                                 |
| `status.success`       | `boolean`                         | ✅            | 인앱결제 최종 성공 여부 (`true`: 성공, `false`: 실패)                                                   |
| `status.error`         | `object`                          | ❌            | **(_optional_)** 인앱결제 실패 시 포함되는 오류 정보, `success` = true인 경우 **없음**                  |
| `status.error.code`    | `string`                          | ❌            | **(_optional_)** 에러 발생 원인을 나타내는 코드, Native 호출이 실패한 경우 **없음**                     |
| `status.error.message` | `string`                          | ✅            | 에러 메시지                                                                                             |

## 주요 메서드

### `purchase(productKey: string, userId: string, callback: (result: IapPurchaseResult) => void): Promise<any>`

- _since ver.1.4.0_
- 📢 _[필수 선행 작업](#필수-선행-작업)이 완료되어야 사용할 수 있습니다._

#### 설명 (`purchase`)

nachocode에서 생성한 **인앱 상품의 고유 식별자**(`productKey`)와 **사용자 ID**(`userId`) 를 전달받아 인앱결제를 실행합니다.

콜백 함수는 **결제 결과를 반환**하며, 성공 및 실패 시 각각의 처리를 구현할 수 있습니다.

---

#### 에러 케이스 (`purchase`)

SDK에서 발생하는 에러는 **안드로이드**, **iOS** 모두 동일한 에러 형식을 가집니다. SDK에서 발생한 에러의 경우 에러 코드를 반환하지 않습니다.

| **메시지**                                                        | **설명**                                       |
| ----------------------------------------------------------------- | ---------------------------------------------- |
| Cannot initiate a purchase transaction before SDK initialization. | SDK가 초기화 되지 않은 경우                    |
| Cannot detect device type.                                        | Device type을 감지하지 못한 경우               |
| In app purchase is only available in native app environment.      | 앱 환경에서 인앱결제를 호출하지 않은 경우      |
| Required parameters missing.                                      | 인앱결제 호출 파라미터 부재                    |
| In app purchase is still processing. Please try again later.      | 인앱결제를 중복 호출한 경우                    |
| Failed to get in app product information.                         | nachocode로 인앱 상품 조회 요청이 실패한 경우  |
| Product not found with provided productKey.                       | 상품키로 조회된 상품 정보가 올바르지 않은 경우 |

#### 사용 예제 (`purchase`)

아래는 인앱결제 호출 결과에 따라 다양한 케이스에 대응하는 예시 코드입니다.

```javascript
// SDK가 로드되었는지 확인한 후 초기화를 시도합니다.
if (window.Nachocode) {
  // nachocode SDK를 초기화 할때 테스트 앱이면 sandbox = true, 운영환경일 경우 false로 설정해주세요.
  Nachocode.init('your_api_key_here', { logger: true, sandbox: true });
} else {
  console.error('nachocode SDK is not loaded.');
}

// ex. 유저가 상품 구매 버튼 클릭 시 호출되는 콜백 함수
function onPurchase(productKey, userId) {
  // 구매할 상품. ex) 'NP-TESTSAMPLE-001a'
  // 상품을 구매하는 유저의 ID. ex) 'tester'

  // 해당 상품 키에 저장된 스토어의 상품 ID를 통해 Native에서 인앱결제를 호출합니다.
  Nachocode.iap.purchase(productKey, userId, async result => {
    // 구매할 상품. ex) 'NP-TESTSAMPLE-001a'
    // 상품을 구매하는 유저의 ID. ex) 'tester'

    // 1. 결제 성공
    if (result.status.success) {
      // 백엔드에서 웹훅 수신이 정상적으로 이루어졌는지 확인합니다.
      const response = await fetch(url);
      const purchaseData = response.json();
      if (purchaseData.success) {
        alert('구매가 성공했습니다.');
      } else {
        // Native Layer에서 인앱결제가 성공했으나 서버에서 상품 지급이 이루어지지 않았다면
        // 웹훅 전송이 실패했을 가능성이 있습니다.
        // 나쵸코드 대시보드에서 웹훅 로그를 확인해서 조치해주세요.
        alert('구매 처리 중입니다.');
      }
    } else {
      // 2. 결제 실패
      if (result.purchaseId) {
        // 결제가 실패한 경우 status.error 프로퍼티에 code와 message 프로퍼티가 포함되어 반환됩니다.
        // SDK 문서에 명세된 에러 케이스를 통해 처리할 수 있습니다.

        const errorCode = result.status.error.code;
        // 유저가 결제를 이탈한 경우
        if (errorCode === 'ERR-NNA-ILA-22') {
          alert('인앱결제가 취소됐습니다.');
        } else {
          alert('결제에 실패했습니다.');
        }
      } else {
        // 3. 결제 호출 실패
        alert('인앱결제를 시작할 수 없습니다.');
      }
    }
  });
}
```

## 결제 상태 정의

인앱결제의 응답 형태는 **결제 성공**, **결제 실패**, **결제 호출 실패** 총 3가지로 이루어져있습니다.
상태에 따른 응답 예시는 [이곳](#예제-응답)을 확인해주세요.

### ✅ 1. **결제 성공**

- 결제 검증을 포함한 모든 과정이 **성공적으로 완료된 상태**입니다.
- 단, **웹훅(Webhook) 전송은 실패할 수** 있으므로 nachocode 대시보드에서 확인하세요.

---

### ❌ 2. **결제 실패**

- **Native Layer에서 인앱결제 호출은 성공했으나**, 다음과 같은 이유로 결제가 실패한 경우를 의미합니다.
  - 결제 실패
  - 결제 검증 실패
  - 사용자가 결제를 취소

---

### ⚠️ 3. **결제 호출 실패**

- **SDK 초기화 문제, 인수값 부재, nachocode 서버에 상품이 등록되지 않음** 등의 이유로 인해 **인앱결제 호출 자체가 실패한 경우**를 의미합니다.

---

### **예제 응답**

#### ✅ **결제 성공 시 (`success = true`)**

```json
{
  "purchaseEnv": "production",
  "userId": "tester",
  "productId": "com.nachocode.developer.product",
  "nachoProductId": "NP-TESTSAMPLE-0001",
  "purchaseId": 123456,
  "os": "android",
  "status": {
    "success": true
  }
}
```

#### ❌ **결제 실패 시 (`success = false`)**

```json
{
  "purchaseEnv": "production",
  "userId": "tester",
  "productId": "com.nachocode.developer.product",
  "nachoProductId": "NP-TESTSAMPLE-0001",
  "purchaseId": 123456,
  "os": "android",
  "status": {
    "success": false,
    "error": {
      "code": "ERR-NNA-ILA-22",
      "message": "User canceled the purchase."
    }
  }
}
```

#### ⚠️ **결제 호출 실패 시 (`success = false`)**

```json
{
  "purchaseEnv": "production",
  "userId": "tester",
  "nachoProductId": "NP-TESTSAMPLE-0001",
  "os": "android",
  "status": {
    "success": false,
    "error": {
      "message": "Required parameters missing."
    }
  }
}
```

---
