---
sidebar_position: 4
sidebar_label: 로컬 푸시
pagination_label: 로컬 푸시 가이드
description: nachocode 로컬 푸시 가이드는 SDK를 활용한 디바이스 내 푸시 알림 예약 및 취소 방법을 안내합니다. 즉시 발송부터 예약 발송, 알림 취소까지 효과적으로 관리할 수 있습니다.
keywords:
  [
    로컬 푸시,
    로컬 푸시 알림,
    인앱 알림,
    푸시 예약,
    디바이스 알림,
    디바이스 푸시,
    예약 푸시 알림,
    앱 내 알림,
    푸시 스케줄링,
    nachocode 로컬 푸시,
  ]
image: /img/docs/thumbnails/GUIDE/push.svg
---

# 로컬 푸시

import { ThumbnailImage } from '@site/src/components/common/image/thumbnail-image';

<ThumbnailImage src='/img/docs/thumbnails/GUIDE/push.svg'/>

> 🔔 **최신화 일자:** 2025-09-25

이 문서는 **로컬 푸시 알림**에 대한 설명과 **로컬 푸시 예약 및 관리**에 필요한 **프로세스**에 대해 안내합니다.

---

## **로컬 푸시 알림 이해하기**

:::tip **로컬 푸시란?**

**로컬 푸시**란 **서버를 거치지 않고 디바이스 자체에서 예약하고 전송하는 푸시 알림**을 의미합니다.

:::

nachocode의 로컬 푸시 기능은 **디바이스 내에서 직접 푸시 알림을 예약**하고 **특정 시각에 자동으로 표시**할 수 있는 편리한 기능입니다.

서버 연결이 필요하지 않으며, **즉시 발송**이나 **예약 발송** 모두 가능합니다.
예약된 알림은 **고유 ID**를 통해 언제든지 **취소**할 수 있어 유연한 알림 관리가 가능합니다.

**개인 일정 관리**, **리마인더**, **앱 내 이벤트 알림** 등 다양한 상황에서 활용할 수 있습니다.

<br/><hr style={{ border: "0.2px solid grey", opacity: "0.1"}} /><br/>

### 로컬 푸시 활용 방법

---

<div class="underlined-subtitle">서버 없이도 스마트한 알림</div>

서버 연결이 불가능한 상황에서도 사용자에게 중요한 알림을 전달할 수 있습니다.

앱이 백그라운드에 있거나 종료된 상태에서도 **디바이스의 시스템 스케줄러**가 예약된 시간에 정확히 알림을 표시합니다.

---

<div class="underlined-subtitle">간단한 코드 한 줄로 완성</div>

복잡한 서버 설정이나 API 호출 없이도 간단한 SDK 메서드 호출만으로 푸시 알림을 예약할 수 있습니다.

```javascript
Nachocode.push.sendLocalPush({
  title: '미팅 알림',
  content: '회의 시작 10분 전입니다.',
  scheduledTime: new Date('2025-12-25T14:50:00'),
});
```

---

<div class="underlined-subtitle">유연한 관리와 취소</div>

예약된 알림은 **고유 ID**로 관리되어 필요에 따라 **언제든지 취소**할 수 있습니다.

사용자의 행동이나 상황 변화에 따라 **동적으로 알림을 조정**하여 더 나은 사용자 경험을 제공할 수 있습니다.

<br/><hr style={{ border: "0.2px solid grey", opacity: "0.1"}} /><br/>

### 로컬 푸시 활용 예시

- **개인 일정 관리**
  - 중요한 약속이나 미팅 전 **리마인더 알림** 전송
  - 복용해야 할 약물이나 **정기 체크업 알림** 예약
  - **생일이나 기념일** 등 개인적인 이벤트 알림

<br/>

- **앱 내 기능 활용 촉진**
  - 특정 기능을 **일정 시간 후 다시 사용해 보라는 권유** 알림
  - **무료 체험 기간 만료 전** 안내 알림
  - **데이터 백업이나 동기화** 권장 시점 알림

<br/>

- **사용자 참여 유도**
  - 앱을 **일정 시간 사용하지 않은 사용자**에게 재방문 유도 알림
  - **일일 목표 달성** 독려나 **습관 형성**을 위한 정기 알림
  - **게임이나 학습 앱**에서 **연속 사용 독려** 알림

<br/><hr style={{ border: "1px solid black", opacity: "0.5"}} /><br/>

## **로컬 푸시 사용 프로세스**

로컬 푸시는 **디바이스 단독으로 처리**되는 간단한 프로세스를 가집니다.

**[ 프로세스 : 로컬 푸시 예약 및 표시 (SDK) ]**

![local_push_sequence_diagram](/img/developer/nachocode_local_push_sequence_diagram.png)

<br/><hr style={{ border: "1px solid black", opacity: "0.5"}} /><br/>

## **구현 가이드**

### **1. 로컬 푸시 전송하기**

#### **즉시 발송**

```javascript
// 즉시 발송 - scheduledTime을 지정하지 않으면 바로 알림이 표시됩니다
Nachocode.push.sendLocalPush(
  {
    title: '깜짝 쿠폰 발송!',
    content: '지금 바로 앱에서 확인해보세요!',
    link: 'https://nachocode.io/pricing',
  },
  result => {
    if (result.status === 'success') {
      console.log('푸시 알림이 즉시 전송되었습니다.');
    } else {
      console.error(`푸시 전송 실패: ${result.message}`);
    }
  }
);
```

#### **예약 발송**

```javascript
// 예약 발송 - 특정 시간에 알림 표시
const scheduledDate = new Date();
scheduledDate.setMinutes(scheduledDate.getMinutes() + 30); // 30분 후

Nachocode.push.sendLocalPush(
  {
    title: '미팅 알림',
    content: '회의 시작 10분 전입니다.',
    scheduledTime: scheduledDate,
    id: 12345, // 고유 ID 지정 (취소 시 사용)
    link: 'https://myapp.com/meeting/room1',
  },
  result => {
    if (result.status === 'success') {
      console.log(`알림이 예약되었습니다. ID: ${result.id}`);
    } else {
      console.error(`예약 실패: ${result.message}`);
    }
  }
);
```

---

### **2. 예약된 알림 취소하기**

```javascript
// 예약된 알림 취소
const notificationId = 12345;

Nachocode.push.cancelLocalPush(notificationId);
console.log(`알림 ${notificationId}가 취소되었습니다.`);
```

---

### **3. 로컬 푸시 예약 관리하기**

```javascript
// 로컬 스토리지를 활용한 예제
Nachocode.push.sendLocalPush(
  {
    title: '운동 시간!',
    content: '오늘의 운동 목표를 달성해보세요.',
    link: 'https://myapp.com/fitness/workout',
    scheduledTime: new Date(Date.now() + 24 * 60 * 60 * 1000), // 24시간 후
    id: 'workout_reminder_' + Date.now(), // 유니크한 ID 생성
  },
  result => {
    if (result.status === 'success') {
      console.log('운동 리마인더가 설정되었습니다!');

      // 필요시 나중에 취소할 수 있도록 ID 저장
      localStorage.setItem('workoutReminderId', result.id);
    }
  }
);
```

<br/><hr style={{ border: "1px solid black", opacity: "0.5"}} /><br/>

## **Best Practice**

### **알림 시점 최적화**

- **사용자의 활동 패턴**을 분석하여 가장 적절한 시간에 알림 예약
- **너무 빈번한 알림**으로 사용자를 방해하지 않도록 주의
- **시간대와 요일**을 고려한 스마트한 알림 스케줄링

### **콘텐츠 최적화**

- **간결하고 명확한 제목**으로 사용자의 주의를 끌기
- **구체적인 행동 유도**를 포함한 본문 메시지 작성
- **link**를 활용하여 관련 화면으로 바로 이동 가능하도록 설정

### **알림 관리**

- **고유한 ID 체계**를 구축하여 알림을 체계적으로 관리
- **상황 변화 시 불필요한 알림은 즉시 취소**
- **사용자 설정**에 따라 알림 ON/OFF 기능 제공

:::note **참고 사항**

로컬 푸시는 **디바이스 시스템의 알림 권한**이 필요합니다.
사용자가 알림 권한을 거부한 경우 로컬 푸시도 표시되지 않습니다.

:::

---

## **관련 문서**

:::info 기술 명세는 SDK 문서를 참고하세요

[➡️ SDK 로컬 푸시 전송 메서드 보기](/docs/sdk/namespaces/push#send-local-push)

[➡️ SDK 로컬 푸시 취소 메서드 보기](/docs/sdk/namespaces/push#cancel-local-push)

:::
