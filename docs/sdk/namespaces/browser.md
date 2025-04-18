---
description: nachocode SDK의 `browser` 네임스페이스는 앱 내에서 URL을 열 때 외부 또는 내부 브라우저를 선택하여 열 수 있는 기능을 제공합니다.
keywords:
  [
    외부 브라우저,
    내부 브라우저,
    앱 내 브라우저,
    internal browser,
    external browser,
    in app browser,
  ]
---

# 브라우저 (`browser`)

> 🔔 **최신화 일자:** 2025-02-06

## **개요**

`browser` 네임스페이스는 **앱 내에서 링크를 열기 위한 브라우저 기능**을 제공합니다.  
URL을 열 때 **외부 브라우저(Chrome, Safari 등) 또는 앱 내부 브라우저를 선택하여 사용할 수 있습니다.**

---

## **타입 정의**

### **`OpenURLOption`**

브라우저 열기 옵션을 나타내는 타입입니다.

| 옵션       | 설명                                                   |
| ---------- | ------------------------------------------------------ |
| `external` | 외부 브라우저를 의미합니다. (safari, chrome, naver 등) |
| `internal` | 앱 내부 브라우저를 의미합니다.                         |

---

## **메서드 목록**

| 메서드                                                                    | 설명                                             | 추가된 버전 |
| ------------------------------------------------------------------------- | ------------------------------------------------ | ----------- |
| [`openLink(url, option?)`](#openlinkurl-string-option-openurloption-void) | 지정한 URL을 내부 또는 외부 브라우저에서 엽니다. | ver.1.0.3   |

---

## **메서드 상세**

### **`openLink(url: string, option?: OpenURLOption): void`**

- _since ver.1.0.3_

#### 설명 (`openLink`)

주어진 URL을 **외부 브라우저 또는 내부 브라우저**에서 엽니다.  
기본적으로 `external` 모드(외부 브라우저)가 사용됩니다.

#### 매개변수 (`openLink`)

| 이름     | 타입                                           | 필수 여부 | 설명                                             |
| -------- | ---------------------------------------------- | --------- | ------------------------------------------------ |
| `url`    | `string`                                       | ✅        | 열고자 하는 웹 페이지 URL                        |
| `option` | [`OpenURLOption`](#openurloption) (_optional_) | ❌        | `'external'`(기본값) 또는 `'internal'` 선택 가능 |

#### 반환 값 (`openLink`)

해당 메서드는 반환 값을 가지지 않습니다.

#### 사용 예제 (`openLink`)

```javascript
// 기본 옵션: 외부 브라우저에서 URL 열기 (Chrome, Safari 등)
Nachocode.browser.openLink('https://nachocode.io');
```

```javascript
// 명시적으로 외부 브라우저에서 URL 열기
Nachocode.browser.openLink('https://nachocode.io', 'external');
```

```javascript
// 내부 브라우저에서 URL 열기
Nachocode.browser.openLink('https://nachocode.io', 'internal');
```
