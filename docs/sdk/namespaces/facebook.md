---
sidebar_position: 10
description: nachocode SDK의 `facebook` 네임스페이스로 페이스북 네이티브 로그인 연동 및 사용자 데이터 조회, 로그인 상태 확인, 로그아웃 등 페이스북 인증 기능을 쉽게 구현할 수 있습니다.
keywords:
  [
    페이스북 소셜 로그인,
    페이스북 네이티브 로그인,
    페이스북 웹뷰 로그인,
    facebook 소셜 로그인,
    facebook 네이티브 로그인,
    facebook 웹뷰 로그인,
    facebook social login,
    facebook native login,
    facebook webview login,
  ]
---

# 페이스북 (`facebook`)

> 🔔 **최신화 일자:** 2025-02-10

## **개요**

`facebook` 네임스페이스는 **페이스북 네이티브 로그인 기능을 제공**하며, 사용자는 **페이스북 계정을 통해 인증**할 수 있습니다.  
이 네임스페이스를 사용하여 **로그인, 사용자 정보 조회, 로그아웃**과 같은 기능을 수행할 수 있습니다.  
지원되는 **권한(permissions)** 목록은 [페이스북 권한 공식 문서](https://developers.facebook.com/docs/permissions)에서 확인할 수 있습니다.

---

## **메서드 목록**

| 메서드                                                                                                                                                                      | 설명                       | 추가된 버전 |
| --------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------- | ----------- |
| [`login(permissions, callback)`](#loginpermissions-facebookpermissions-callback-result-facebookresult-accesstoken-string-userid-string-userdata-facebookuserdata--any-void) | 페이스북 네이티브 로그인   | ver.1.4.0   |
| [`isLoggedIn(callback)`](#isloggedincallback-result-facebookresult-isloggedin-boolean-accesstoken-string-userid-string--any-void)                                           | 로그인 상태 확인           | ver.1.4.0   |
| [`getUserData(permissions, callback)`](#getuserdatapermissions-facebookpermissions-callback-result-facebookresult-userdata-facebookuserdata--any-void)                      | 사용자 데이터 요청         | ver.1.4.0   |
| [`logout()`](#logout-void)                                                                                                                                                  | 페이스북 네이티브 로그아웃 | ver.1.4.0   |

---

## **타입 정의**

### **`FacebookResult`**

페이스북 로그인 및 요청의 결과 상태를 나타내는 타입입니다.

| 필드        | 타입                   | 설명                       |
| ----------- | ---------------------- | -------------------------- |
| `status`    | `'error' \| 'success'` | 요청 성공 또는 실패 상태   |
| `errorCode` | `string` _(optional)_  | 오류 코드 (실패 시 반환)   |
| `message`   | `string` _(optional)_  | 오류 메시지 (실패 시 반환) |

---

### **`FacebookUserData`**

페이스북 사용자 데이터를 나타내는 타입입니다.

| 필드         | 타입     | 설명                  |
| ------------ | -------- | --------------------- |
| `email`      | `string` | 사용자의 이메일       |
| `name`       | `string` | 사용자의 전체 이름    |
| `id`         | `number` | 페이스북 사용자 ID    |
| `first_name` | `string` | 사용자의 이름         |
| `last_name`  | `string` | 사용자의 성           |
| 기타         | `any`    | 요청된 추가 필드 포함 |

---

## **메서드 상세**

### **`login(permissions: FacebookPermissions, callback: (result: FacebookResult, accessToken?: string, userId?: string, userData?: FacebookUserData) => any): void`**

- _since ver.1.4.0_

#### 설명 (`login`)

페이스북 네이티브 로그인 요청을 수행합니다.  
사용자가 지정한 **권한(permissions)** 목록에 따라 필요한 권한을 요청할 수 있습니다.  
로그인 성공 시 **`accessToken`, `userId`, `userData`**가 콜백 함수로 전달됩니다.

#### 매개변수 (`login`)

| 이름          | 타입                                                                                                  | 필수 여부 | 설명                             |
| ------------- | ----------------------------------------------------------------------------------------------------- | --------- | -------------------------------- |
| `permissions` | `FacebookPermissions`                                                                                 | ✅        | 요청할 권한 목록                 |
| `callback`    | `(result: FacebookResult, accessToken?: string, userId?: string, userData?: FacebookUserData) => any` | ✅        | 로그인 결과를 반환하는 콜백 함수 |

#### 반환 값 (`login`)

해당 메서드는 반환 값을 가지지 않으며, 결과는 `callback`을 통해 비동기적으로 제공됩니다.

#### 사용 예제 (`login`)

```javascript
// 페이스북 로그인 요청
Nachocode.facebook.login(
  ['email', 'public_profile'],
  (result, accessToken, userId, userData) => {
    if (result.status === 'success') {
      console.log('페이스북 로그인 성공');
      console.log('Access Token:', accessToken);
      console.log('User ID:', userId);
      console.log('User Data:', userData);
    } else {
      console.error('페이스북 로그인 실패:', result.errorCode, result.message);
    }
  }
);
```

---

### **`isLoggedIn(callback: (result: FacebookResult, isLoggedIn: boolean, accessToken?: string, userId?: string) => any): void`**

- _since ver.1.4.0_

#### 설명 (`isLoggedIn`)

현재 사용자가 **페이스북 네이티브 로그인 상태인지 확인**합니다.  
로그인 여부(`isLoggedIn`), `accessToken`, `userId` 값을 반환합니다.

#### 매개변수 (`isLoggedIn`)

| 이름       | 타입                                                                                          | 필수 여부 | 설명                        |
| ---------- | --------------------------------------------------------------------------------------------- | --------- | --------------------------- |
| `callback` | `(result: FacebookResult, isLoggedIn: boolean, accessToken?: string, userId?: string) => any` | ✅        | 로그인 상태를 반환하는 함수 |

#### 반환 값 (`isLoggedIn`)

해당 메서드는 반환 값을 가지지 않으며, 결과는 `callback`을 통해 비동기적으로 제공됩니다.

#### 사용 예제 (`isLoggedIn`)

```javascript
// 페이스북 로그인 상태 확인
Nachocode.facebook.isLoggedIn((result, isLoggedIn, accessToken, userId) => {
  if (isLoggedIn) {
    console.log('페이스북 로그인 상태입니다.');
    console.log('Access Token:', accessToken);
    console.log('User ID:', userId);
  } else {
    console.log('페이스북에 로그인되어 있지 않습니다.');
  }
});
```

---

### **`getUserData(permissions: FacebookPermissions, callback: (result: FacebookResult, userData?: FacebookUserData) => any): void`**

- _since ver.1.4.0_

#### 설명 (`getUserData`)

페이스북에서 **사용자 데이터를 요청**합니다.  
**요청한 권한(permissions)** 에 따라 **사용자 프로필, 이메일, 생일 등** 다양한 정보를 가져올 수 있습니다.

#### 매개변수 (`getUserData`)

| 이름          | 타입                                                           | 필수 여부 | 설명                           |
| ------------- | -------------------------------------------------------------- | --------- | ------------------------------ |
| `permissions` | `FacebookPermissions`                                          | ✅        | 요청할 사용자 데이터 권한 목록 |
| `callback`    | `(result: FacebookResult, userData?: FacebookUserData) => any` | ✅        | 사용자 데이터를 반환하는 함수  |

#### 반환 값 (`getUserData`)

해당 메서드는 반환 값을 가지지 않으며, 결과는 `callback`을 통해 비동기적으로 제공됩니다.

#### 사용 예제 (`getUserData`)

```javascript
// 사용자 데이터 요청
Nachocode.facebook.getUserData(
  ['email', 'public_profile'],
  (result, userData) => {
    if (result.status === 'success') {
      console.log('사용자 데이터:', userData);
    } else {
      console.error(
        '사용자 데이터 요청 실패:',
        result.errorCode,
        result.message
      );
    }
  }
);
```

---

### **`logout(): void`**

- _since ver.1.4.0_

#### 설명 (`logout`)

페이스북 네이티브 로그인 세션을 **로그아웃**합니다.  
이 메서드는 반환 값을 가지지 않습니다.

#### 사용 예제 (`logout`)

```javascript
// 페이스북 로그아웃
Nachocode.facebook.logout();
console.log('페이스북에서 로그아웃되었습니다.');
```

---

## **추가 정보**

- 요청한 권한(permissions)은 페이스북 개발자 센터에서 **승인된 권한만 사용 가능**합니다.
- 페이스북 사용자는 **로그인 및 사용자 데이터 제공 시 명시적으로 권한을 허용**해야 합니다.
- 권한 목록은 [Facebook Permissions 공식 문서](https://developers.facebook.com/docs/permissions)에서 확인할 수 있습니다.

---
