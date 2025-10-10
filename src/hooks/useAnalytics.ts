import { useLocation } from '@docusaurus/router';
import { useEffect } from 'react';
import {
  trackConversion,
  trackDownload,
  trackEngagement,
  trackExternalLink,
  trackPageView,
  trackSearch,
} from '../utils/analytics';

/**
 * Analytics 관련 훅
 */
export const useAnalytics = () => {
  const location = useLocation();

  // 페이지 변경 시 자동으로 페이지뷰 추적
  useEffect(() => {
    trackPageView(location.pathname);
  }, [location.pathname]);

  return {
    trackPageView,
    trackDownload,
    trackExternalLink,
    trackSearch,
    trackConversion,
    trackEngagement,
  };
};

/**
 * 페이지별 컨버전 추적 훅
 */
export const usePageConversion = () => {
  const location = useLocation();

  useEffect(() => {
    const pathname = location.pathname;

    // 각 페이지별 컨버전 이벤트 정의
    const conversionEvents: Record<string, string> = {
      '/docs/guide/intro': 'guide_landing_view',
      '/docs/api/intro': 'api_landing_view',
      '/docs/sdk/intro': 'sdk_landing_view',
      '/docs/sdk/typescript-support': 'typescript_guide_view',
      '/docs/guide/push-notifications': 'push_notification_guide_view',
      '/docs/guide/deep-links': 'deep_link_guide_view',
      '/docs/guide/in-app-purchases': 'iap_guide_view',
      '/docs/releases': 'release_notes_view',
    };

    // 페이지별 컨버전 이벤트 추적
    if (conversionEvents[pathname]) {
      trackConversion(conversionEvents[pathname], 1, pathname);
    }

    // 문서 섹션별 추적
    if (pathname.startsWith('/docs/guide/')) {
      trackEngagement('guide_section_visit', 1, pathname);
    } else if (pathname.startsWith('/docs/api/')) {
      trackEngagement('api_section_visit', 1, pathname);
    } else if (pathname.startsWith('/docs/sdk/')) {
      trackEngagement('sdk_section_visit', 1, pathname);
    } else if (pathname.startsWith('/docs/releases/')) {
      trackEngagement('releases_section_visit', 1, pathname);
    }
  }, [location.pathname]);
};

/**
 * 스크롤 깊이 추적 훅
 */
export const useScrollTracking = () => {
  useEffect(() => {
    let maxScrollDepth = 0;
    const scrollDepthThresholds = [25, 50, 75, 100];
    const trackedThresholds = new Set<number>();

    const handleScroll = () => {
      const scrollTop =
        window.pageYOffset || document.documentElement.scrollTop;
      const documentHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercentage = Math.round((scrollTop / documentHeight) * 100);

      maxScrollDepth = Math.max(maxScrollDepth, scrollPercentage);

      // 특정 스크롤 깊이에 도달했을 때 이벤트 추적
      scrollDepthThresholds.forEach(threshold => {
        if (
          scrollPercentage >= threshold &&
          !trackedThresholds.has(threshold)
        ) {
          trackedThresholds.add(threshold);
          trackEngagement('scroll_depth', threshold, `${threshold}%`);
        }
      });
    };

    const throttledScroll = throttle(handleScroll, 250);
    window.addEventListener('scroll', throttledScroll);

    return () => {
      window.removeEventListener('scroll', throttledScroll);
      // 페이지를 떠날 때 최대 스크롤 깊이 추적
      if (maxScrollDepth > 0) {
        trackEngagement(
          'max_scroll_depth',
          maxScrollDepth,
          `${maxScrollDepth}%`
        );
      }
    };
  }, []);
};

/**
 * 시간 기반 참여도 추적 훅
 */
export const useTimeTracking = () => {
  useEffect(() => {
    const startTime = Date.now();
    const timeThresholds = [30, 60, 120, 300]; // 30초, 1분, 2분, 5분
    const trackedThresholds = new Set<number>();

    const interval = setInterval(() => {
      const timeSpent = Math.floor((Date.now() - startTime) / 1000);

      timeThresholds.forEach(threshold => {
        if (timeSpent >= threshold && !trackedThresholds.has(threshold)) {
          trackedThresholds.add(threshold);
          trackEngagement('time_on_page', threshold, `${threshold}s`);
        }
      });
    }, 5000); // 5초마다 체크

    return () => {
      clearInterval(interval);
      // 페이지를 떠날 때 총 체류 시간 추적
      const totalTime = Math.floor((Date.now() - startTime) / 1000);
      if (totalTime > 5) {
        trackEngagement('total_time_on_page', totalTime, `${totalTime}s`);
      }
    };
  }, []);
};

// 유틸리티 함수: throttle
function throttle<T extends (...args: any[]) => any>(
  func: T,
  limit: number
): (...args: Parameters<T>) => void {
  let inThrottle: boolean;
  return function (this: any, ...args: Parameters<T>) {
    if (!inThrottle) {
      func.apply(this, args);
      inThrottle = true;
      setTimeout(() => (inThrottle = false), limit);
    }
  };
}
