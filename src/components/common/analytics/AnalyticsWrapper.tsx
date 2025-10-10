import React, { ReactNode } from 'react';
import {
  useAnalytics,
  usePageConversion,
  useScrollTracking,
  useTimeTracking,
} from '../../../hooks/useAnalytics';

interface AnalyticsWrapperProps {
  children: ReactNode;
  enableScrollTracking?: boolean;
  enableTimeTracking?: boolean;
  enablePageConversion?: boolean;
}

/**
 * Analytics 추적 기능을 제공하는 래퍼 컴포넌트
 */
export const AnalyticsWrapper: React.FC<AnalyticsWrapperProps> = ({
  children,
  enableScrollTracking = true,
  enableTimeTracking = true,
  enablePageConversion = true,
}) => {
  // 기본 Analytics 훅
  useAnalytics();

  // 옵션에 따라 추가 추적 기능 활성화
  if (enablePageConversion) {
    usePageConversion();
  }

  if (enableScrollTracking) {
    useScrollTracking();
  }

  if (enableTimeTracking) {
    useTimeTracking();
  }

  return <>{children}</>;
};
