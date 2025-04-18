---
description: nachocode SDK의 share 네임스페이스는 네이티브 공유 UI로 콘텐츠 공유 기능을 손쉽게 제공합니다.
keywords:
  [
    웹뷰 네이티브 공유,
    웹뷰 공유하기,
    네이티브 공유,
    콘텐츠 공유,
    WebView native share,
    WebView share,
    native share,
    contents share,
  ]
---

# 공유 (`share`)

> 🔔 **최신화 일자:** 2025-04-18

## **개요**

`share` 네임스페이스는 **네이티브 공유 UI를 통해 콘텐츠를 공유하는 기능**을 제공합니다.

> 🚨 **주의**  
> 카카오톡 공유 관련 기능은 **nachocode SDK v1.5.0**부터 `kakao` 네임스페이스로 이동되었습니다.  
> 따라서 `share.sendKakao`, `share.KakaoShareType` 등은 더 이상 사용을 권장하지 않습니다.  
> ➡️ [kakao 네임스페이스로 이동된 공유 기능 문서 보기](./kakao#sharetype-kakaosharetype-data-kakaosharecustom--kakaosharescrap-callback-result-kakaoshareresult--void-void)

---

## **메서드 목록**

| 메서드                                            | 설명                                         | 추가된 버전 |
| ------------------------------------------------- | -------------------------------------------- | ----------- |
| [`openSharing(url)`](#opensharingurl-string-void) | 네이티브 공유 UI를 열어 콘텐츠를 공유합니다. | ver.1.1.0   |

---

## **메서드 상세**

### **`openSharing(url: string): void`**

- _since ver.1.1.0_

#### 설명 (`openSharing`)

지정된 `url`을 네이티브 공유 UI를 통해 공유합니다.  
네이티브 공유 UI는 **기본적으로 사용자의 디바이스에 설치된 공유 가능한 앱 목록**을 표시합니다.

#### 매개변수 (`openSharing`)

| 이름  | 타입     | 필수 여부 | 설명            |
| ----- | -------- | --------- | --------------- |
| `url` | `string` | ✅        | 공유할 대상 URL |

#### 반환 값 (`openSharing`)

해당 메서드는 반환 값을 가지지 않습니다.

#### 사용 예제 (`openSharing`)

```javascript
// 공유 할 URL. ex) 'https://nachocode.io'
const sharedURL = 'https://nachocode.io';
// 공유할 URL을 지정하여 네이티브 공유 UI를 엽니다.
Nachocode.share.openSharing(sharedURL);
```

---

### **추가 정보**

- `share` 네임스페이스는 **일반 콘텐츠 공유(openSharing)** 전용으로 유지됩니다.
- **카카오톡 공유 기능은 앞으로 `kakao` 네임스페이스를 통해 사용해야 합니다.**
