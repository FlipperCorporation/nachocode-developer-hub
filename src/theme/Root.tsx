import React from 'react';
import { AnalyticsWrapper } from '../components/common/analytics/AnalyticsWrapper';

// Docusaurus Root 컴포넌트를 swizzle하여 Analytics 추적 기능을 전역으로 적용
export default function Root({
  children,
}: {
  children: React.ReactNode;
}): React.ReactElement {
  return (
    <AnalyticsWrapper
      enableScrollTracking={true}
      enableTimeTracking={true}
      enablePageConversion={true}
    >
      {children}
    </AnalyticsWrapper>
  );
}
