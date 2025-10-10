import React, { useEffect } from 'react';
import { trackConversion } from '../../../utils/analytics';

interface ConversionTrackerProps {
  conversionType: string;
  conversionValue?: number;
  additionalInfo?: string;
  triggerDelay?: number; // 지연 시간 (밀리초)
}

/**
 * 특정 조건에서 컨버전 이벤트를 추적하는 컴포넌트
 */
export const ConversionTracker: React.FC<ConversionTrackerProps> = ({
  conversionType,
  conversionValue,
  additionalInfo,
  triggerDelay = 0,
}) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      trackConversion(conversionType, conversionValue, additionalInfo);
    }, triggerDelay);

    return () => clearTimeout(timer);
  }, [conversionType, conversionValue, additionalInfo, triggerDelay]);

  return null; // 이 컴포넌트는 UI를 렌더링하지 않음
};

/**
 * 스크롤 기반 컨버전 추적 컴포넌트
 */
export const ScrollConversionTracker: React.FC<{
  conversionType: string;
  scrollThreshold: number; // 스크롤 백분율 (0-100)
  additionalInfo?: string;
}> = ({ conversionType, scrollThreshold, additionalInfo }) => {
  useEffect(() => {
    let hasTriggered = false;

    const handleScroll = () => {
      if (hasTriggered) return;

      const scrollTop =
        window.pageYOffset || document.documentElement.scrollTop;
      const documentHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercentage = (scrollTop / documentHeight) * 100;

      if (scrollPercentage >= scrollThreshold) {
        hasTriggered = true;
        trackConversion(conversionType, scrollThreshold, additionalInfo);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [conversionType, scrollThreshold, additionalInfo]);

  return null;
};

/**
 * 시간 기반 컨버전 추적 컴포넌트
 */
export const TimeConversionTracker: React.FC<{
  conversionType: string;
  timeThreshold: number; // 시간 임계값 (초)
  additionalInfo?: string;
}> = ({ conversionType, timeThreshold, additionalInfo }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      trackConversion(conversionType, timeThreshold, additionalInfo);
    }, timeThreshold * 1000);

    return () => clearTimeout(timer);
  }, [conversionType, timeThreshold, additionalInfo]);

  return null;
};
