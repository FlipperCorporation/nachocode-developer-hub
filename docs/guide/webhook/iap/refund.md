---
sidebar_position: 2
sidebar_label: 환불 (refund)
description: nachocode 인앱결제 환불 웹훅 이벤트의 요청 본문 예시와 상세한 데이터 구조를 설명합니다. 웹훅을 통해 앱 사용자 환불 이벤트를 수신하여 빠르게 처리할 수 있습니다.
keywords:
  [
    인앱 결제 환불,
    Android 결제 환불,
    iOS 결제 환불,
    구글 플레이 스토어,
    애플 앱스토어,
    자동 환불 처리,
    Google 플레이 스토어,
    Apple 앱스토어,
    인앱 결제 검증,
  ]
image: /img/docs/thumbnails/GUIDE/iap.svg
---

# 인앱결제 환불 웹훅

import { ThumbnailImage } from '@site/src/components/common/image/thumbnail-image';

<ThumbnailImage src='/img/docs/thumbnails/GUIDE/iap.svg'/>

> 🔔 **최신화 일자:** 2025-10-13

## **환불 이벤트 타입 정의**

<!-- 2025-10-13 개인화푸시 unavailable users 웹훅 추가에 따른 소제목 변경 -->

### **`IapRefundEvent`**

```typescript
declare interface IapRefundEvent {
  userId: string;
  iapLogId: number;
  nachoProductId: string;
  os: 'android' | 'ios';
  productId: string;
  productType: 'consumable' | 'non-consumable';
  quantity: number;
  price: number;
  environment: 'sandbox' | 'production';
  data: PlayStorePurchaseData | AppStorePurchaseData;
  refundQuantity: number;
  refundedAt: string;
}
```

| **속성명**       | **타입**                                          | **필수 여부** | **설명**                                                                                                              |
| ---------------- | ------------------------------------------------- | ------------- | --------------------------------------------------------------------------------------------------------------------- |
| `userId`         | `string`                                          | ✅            | 인앱결제를 수행한 앱 사용자의 고유 식별자                                                                             |
| `iapLogId`       | `number`                                          | ✅            | 인앱결제 요청의 고유 로그 ID                                                                                          |
| `nachoProductId` | `string`                                          | ✅            | nachocode에서 발급받은 인앱 상품의 고유 식별자                                                                        |
| `os`             | `'android'` \| `'ios'`                            | ✅            | 인앱결제가 이루어진 운영 체제 (`android`, `ios`)                                                                      |
| `productId`      | `string`                                          | ✅            | 스토어에 등록된 상품의 고유 식별자                                                                                    |
| `productType`    | `'consumable'` \| `'non-consumable'`              | ✅            | 상품 유형 (`consumable`: 소모성, `non-consumable`: 비소모성)                                                          |
| `quantity`       | `number`                                          | ✅            | 구매한 상품 개수                                                                                                      |
| `price`          | `number`                                          | ✅            | 개당 구매 가격                                                                                                        |
| `environment`    | `'sandbox'` \| `'production'`                     | ✅            | 구매가 이루어진 환경 (`sandbox`: 테스트 환경, `production`: 운영 환경)                                                |
| `data`           | `PlayStorePurchaseData` \| `AppStorePurchaseData` | ✅            | 인앱결제 데이터 정보. `os`가 `'android'`인 경우 `PlayStorePurchaseData`, `os`가 `'ios'`인 경우 `AppStorePurchaseData` |
| `refundQuantity` | `number`                                          | ✅            | 환불된 수량, 부분 환불이 발생한 경우 `quantity` 보다 작을 수 있음                                                     |
| `refundedAt`     | `string (ISO 8601 format)`                        | ✅            | 환불된 시간 (`YYYY-MM-DD'T'HH:mm:ss.sss'Z'`)                                                                          |

---

### **`PlayStorePurchaseData`**

```typescript
declare type PlayStorePurchaseData = {
  purchaseToken: string;
  orderId: string;
};
```

| **속성명**      | **타입** | **필수 여부** | **설명**                                                     |
| --------------- | -------- | ------------- | ------------------------------------------------------------ |
| `purchaseToken` | `string` | ✅            | 구매를 식별하기 위한 구매 토큰 ID (구독의 경우 동일 ID 유지) |
| `orderId`       | `string` | ✅            | 구매와 연결된 주문 ID                                        |

**소모성** 및 **비소모성** 상품의 경우 `purchaseToken`과 `orderId` 모두 **unique**한 값임이 보장됩니다.
따라서 유저의 구매를 식별하기 위한 **식별자**로 사용할 수 있습니다. 또한 **Google Play Console**에서 구매 내역 식별시에도 위 데이터가 활용됩니다.

환불 이벤트가 발생한 경우 해당 구매 식별자를 가지고 있는 유저의 상품 접근 권한을 **제한**할 수 있습니다.

### **`AppStorePurchaseData`**

```typescript
declare type AppStorePurchaseData = {
  originalTransactionId: string;
  transactionId: string;
};
```

| **속성명**              | **타입** | **필수 여부** | **설명**                     |
| ----------------------- | -------- | ------------- | ---------------------------- |
| `originalTransactionId` | `string` | ✅            | 최초 거래의 고유 ID          |
| `transactionId`         | `string` | ✅            | 현재 결제 요청의 트랜잭션 ID |

**소모성** 및 **비소모성** 상품의 경우 `originalTransactionId`와 `transactionId` 모두 **unique**한 값임이 보장됩니다.

환불 이벤트가 발생한 경우 해당 구매 식별자를 가지고 있는 유저의 상품 접근 권한을 **제한**할 수 있습니다.

## 요청 본문 예시

```json
{
  "userId": "testUser",
  "iapLogId": 1,
  "nachoProductId": "NP-NXGLSTOEXK-0001",
  "os": "ios",
  "productId": "com.nachocode.example.consumable",
  "productType": "consumable",
  "quantity": 1,
  "price": 1000,
  "environment": "sandbox",
  "data": {
    "originalTransactionId": "2000000123456789",
    "transactionId": "2000000123456789"
  },
  "refundQuantity": 1,
  "refundedAt": "2025-02-19T01:03:26.287Z"
}
```
