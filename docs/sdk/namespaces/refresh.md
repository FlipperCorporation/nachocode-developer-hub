---
description: nachocode SDK의 refresh 네임스페이스는 당겨서 새로고침 기능 설정을 지원합니다.
keywords: [당겨서 새로고침, PTR, Pull To Refresh]
---

# 새로고침 (`refresh`) ⚠️

import { BadgeWithVersion } from '@site/src/components/svg/badge-with-version';

> 🚀 **추가된 버전 :** <BadgeWithVersion type="SDK" version="v1.3.0" link="/docs/releases/v1/sdk/release-v-1-3-0" /> <BadgeWithVersion type="Android" version="v1.3.0" link="/docs/releases/v1/app-source/android/release-v-1-3-0" /> <BadgeWithVersion type="iOS" version="v1.3.0" link="/docs/releases/v1/app-source/ios/release-v-1-3-0" />  
> 🔔 **최신화 일자:** 2025-07-18

:::warning

이 네임스페이스는 `SDK v1.5.0`부터 **제거**되었습니다.

:::

## **개요** {#overview}

:::warning 주의
**_Deprecated_**
:::

`refresh` 네임스페이스는 **화면을 아래로 당겨 페이지를 새로고침하는 기능**을 제공합니다.

이 네임스페이스는 **`SDK v1.5.0`부터 삭제**되었으며, 해당 기능은 **`setting` 네임스페이스**로 통합되었습니다.

---

### 대체 방안 {#alternatives}

기존 `refresh.setPullToRefresh` 메서드는 `setting.setPullToRefresh`로 대체되었습니다.

#### 변경 전 (`refresh` - _Deprecated_) {#alternative-deprecated}

```javascript
// ❌ 기존 사용법 (Deprecated)
Nachocode.refresh.setPullToRefresh(true);
```

#### 변경 후 (`setting` - 권장) {#alternative-recommended}

```javascript
// ✅ 권장 사용법 (대체 API)
Nachocode.setting.setPullToRefresh(true);
```

## **메서드 목록** {#method-list}

| 메서드                                             | 설명                                                               | 추가된 버전                                                                                   | 제거된 버전                                                                                                                                                                                                                   |
| -------------------------------------------------- | ------------------------------------------------------------------ | --------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [`setPullToRefresh(enable)`](#set-pull-to-refresh) | 화면을 아래로 당겨 새로고침하는 기능을 활성화 또는 비활성화합니다. | <BadgeWithVersion type="SDK" version="v1.3.0" link="/docs/releases/v1/sdk/release-v-1-3-0" /> | _Deprecated in_ <BadgeWithVersion type="SDK" version="v1.4.0" link="/docs/releases/v1/sdk/release-v-1-4-0" /><br/>_Obsolete in_ <BadgeWithVersion type="SDK" version="v1.5.0" link="/docs/releases/v1/sdk/release-v-1-5-0" /> |

---

## **메서드 상세** {#method-details}

### **`setPullToRefresh(enable: boolean): void`** ⚠️ _(Deprecated)_ {#set-pull-to-refresh}

- _since :_ <BadgeWithVersion type="SDK" version="v1.3.0" link="/docs/releases/v1/sdk/release-v-1-3-0" />

:::warning

- _Deprecated in :_ <BadgeWithVersion type="SDK" version="v1.4.0" link="/docs/releases/v1/sdk/release-v-1-4-0" />

:::

#### 설명 {#set-pull-to-refresh-summary}

사용자가 화면을 아래로 당겨 새로고침할 수 있도록 하는 `Pull to Refresh` 기능을 활성화하거나 비활성화합니다.

:::info

**이 메서드는 `Nachocode.setting.setPullToRefresh(enable)`으로 대체되었습니다.**

:::

#### 매개변수 {#set-pull-to-refresh-parameters}

| 이름     | 타입      | 필수 여부 | 설명                                |
| -------- | --------- | --------- | ----------------------------------- |
| `enable` | `boolean` | ✅        | `true` - 활성화, `false` - 비활성화 |

#### 반환 값 {#set-pull-to-refresh-returns}

해당 메서드는 반환 값을 가지지 않습니다.

#### 사용 예제 {#set-pull-to-refresh-examples}

```javascript
// ❌ 기존 사용법 (Deprecated)
Nachocode.refresh.setPullToRefresh(true);
```

```javascript
// ✅ 권장 사용법 (대체 API)
Nachocode.setting.setPullToRefresh(true);
```

---

## **변경 이유** {#deprecated-reason}

- 기존 `refresh` 네임스페이스는 단일 기능(`Pull to Refresh`)만 포함하고 있어 **확장성에 제한**이 있었습니다.
- 새롭게 추가된 `setting` 네임스페이스는 **앱 설정과 관련된 여러 기능**(`Zoom 지원 설정`, `Pull to Refresh`)을 통합 관리할 수 있도록 개선되었습니다.
- **SDK v1.5.0부터는 `refresh` 네임스페이스가 제거**되므로, 새로운 API로 전환해야 합니다.

---
