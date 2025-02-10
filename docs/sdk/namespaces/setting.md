---
sidebar_position: 17
---

# 설정 (`setting`)

> 🔔 **최신화 일자:** 2025-02-10

## **개요**

`setting` 네임스페이스는 **앱의 주요 설정 기능을 제어**하는 기능을 제공합니다.  
이 네임스페이스에서는 **당겨서 새로고침(`Pull to Refresh`)** 및 **화면 확대 지원(`Zoom Support`)** 과 같은 기능을 활성화하거나 비활성화할 수 있습니다.

`setting` 네임스페이스는 **v1.4.0**에서 추가되었으며, **기존 `refresh` 네임스페이스의 일부 기능**이 이동되었습니다.

---

## **메서드 목록**

| 메서드                                                             | 설명                                               | 추가된 버전 |
| ------------------------------------------------------------------ | -------------------------------------------------- | ----------- |
| [`setPullToRefresh(enable)`](#setpulltorefreshenable-boolean-void) | 당겨서 새로고침 기능을 활성화 또는 비활성화합니다. | ver.1.3.0   |
| [`setSupportZoom(enable)`](#setsupportzoomenable-boolean-void)     | 화면 확대 기능을 활성화 또는 비활성화합니다.       | ver.1.4.0   |

---

## **메서드 상세**

### **`setPullToRefresh(enable: boolean): void`**

- _since ver.1.3.0_
- _lastupdated ver.1.4.0_

#### 설명 (`setPullToRefresh`)

사용자가 **화면을 아래로 당겨 새로고침하는 기능**(`Pull to Refresh`)을 활성화하거나 비활성화합니다.  
기존에 `refresh` 네임스페이스의 `setPullToRefresh()` 메서드가 이곳으로 이동되었습니다.

> **참고:** 이 기능은 **SDK v1.4.0**부터 `setting` 네임스페이스로 통합되었으며, 기존 `refresh` 네임스페이스는 더 이상 사용되지 않습니다.

#### 매개변수 (`setPullToRefresh`)

| 이름     | 타입      | 필수 여부 | 설명                                |
| -------- | --------- | --------- | ----------------------------------- |
| `enable` | `boolean` | ✅        | `true` - 활성화, `false` - 비활성화 |

#### 반환 값 (`setPullToRefresh`)

해당 메서드는 반환 값을 가지지 않습니다.

#### 사용 예제 (`setPullToRefresh`)

```javascript
// 당겨서 새로고침 기능 활성화
Nachocode.setting.setPullToRefresh(true);

// 당겨서 새로고침 기능 비활성화
Nachocode.setting.setPullToRefresh(false);
```

---

### **`setSupportZoom(enable: boolean): void`**

- _since ver.1.4.0_

#### 설명 (`setSupportZoom`)

앱 화면에서 **화면 확대(Zoom) 기능 지원 여부**를 설정합니다.  
이 메서드를 사용하여 사용자가 **두 손가락으로 화면을 확대할 수 있도록 허용하거나 제한**할 수 있습니다.

#### 매개변수 (`setSupportZoom`)

| 이름     | 타입      | 필수 여부 | 설명                                                    |
| -------- | --------- | --------- | ------------------------------------------------------- |
| `enable` | `boolean` | ✅        | `true` - 확대 기능 활성화, `false` - 확대 기능 비활성화 |

#### 반환 값 (`setSupportZoom`)

해당 메서드는 반환 값을 가지지 않습니다.

#### 사용 예제 (`setSupportZoom`)

```javascript
// 화면 확대 기능 활성화
Nachocode.setting.setSupportZoom(true);

// 화면 확대 기능 비활성화
Nachocode.setting.setSupportZoom(false);
```

---

## **추가 정보**

- **`setPullToRefresh`**: 사용자의 편의를 위해 **새로고침 제스처를 허용하거나 제한**할 수 있습니다.
- **`setSupportZoom`**: **문서 및 콘텐츠의 세부 정보를 확대**할 필요가 있는 앱에서는 이 기능을 활성화할 수 있습니다.

---
