/**
 * Google Analytics 커스텀 이벤트 트래킹 유틸리티
 */

declare global {
  interface Window {
    gtag?: (
      command: 'event',
      eventName: string,
      parameters?: {
        event_category?: string;
        event_label?: string;
        value?: number;
        custom_parameter?: string;
        page_title?: string;
        page_location?: string;
      }
    ) => void;
  }
}

export interface AnalyticsEvent {
  eventName: string;
  eventCategory?: string;
  eventLabel?: string;
  value?: number;
  customParameter?: string;
}

/**
 * Google Analytics에 커스텀 이벤트를 전송합니다.
 * @param event - 전송할 이벤트 정보
 */
export const trackEvent = (event: AnalyticsEvent): void => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', event.eventName, {
      event_category: event.eventCategory,
      event_label: event.eventLabel,
      value: event.value,
      custom_parameter: event.customParameter,
      page_title: document.title,
      page_location: window.location.href,
    });
  }
};

/**
 * 페이지 방문 이벤트를 추적합니다.
 * @param pagePath - 페이지 경로
 * @param pageTitle - 페이지 제목
 */
export const trackPageView = (pagePath: string, pageTitle?: string): void => {
  trackEvent({
    eventName: 'page_view',
    eventCategory: 'engagement',
    eventLabel: pagePath,
    customParameter: pageTitle || document.title,
  });
};

/**
 * 문서 다운로드 이벤트를 추적합니다.
 * @param fileName - 다운로드된 파일명
 * @param fileType - 파일 타입
 */
export const trackDownload = (fileName: string, fileType: string): void => {
  trackEvent({
    eventName: 'file_download',
    eventCategory: 'engagement',
    eventLabel: fileName,
    customParameter: fileType,
  });
};

/**
 * 외부 링크 클릭 이벤트를 추적합니다.
 * @param url - 클릭된 외부 링크 URL
 * @param linkText - 링크 텍스트
 */
export const trackExternalLink = (url: string, linkText?: string): void => {
  trackEvent({
    eventName: 'external_link_click',
    eventCategory: 'engagement',
    eventLabel: url,
    customParameter: linkText,
  });
};

/**
 * 검색 이벤트를 추적합니다.
 * @param searchTerm - 검색어
 * @param searchResults - 검색 결과 수
 */
export const trackSearch = (
  searchTerm: string,
  searchResults?: number
): void => {
  trackEvent({
    eventName: 'search',
    eventCategory: 'engagement',
    eventLabel: searchTerm,
    value: searchResults,
  });
};

/**
 * 컨버전 이벤트를 추적합니다.
 * @param conversionType - 컨버전 타입 (예: 'sdk_download', 'api_key_generated')
 * @param conversionValue - 컨버전 값
 * @param additionalInfo - 추가 정보
 */
export const trackConversion = (
  conversionType: string,
  conversionValue?: number,
  additionalInfo?: string
): void => {
  trackEvent({
    eventName: 'conversion',
    eventCategory: 'conversion',
    eventLabel: conversionType,
    value: conversionValue,
    customParameter: additionalInfo,
  });
};

/**
 * 사용자 참여 이벤트를 추적합니다.
 * @param engagementType - 참여 타입 (예: 'scroll_depth', 'time_on_page')
 * @param engagementValue - 참여 값
 * @param additionalInfo - 추가 정보
 */
export const trackEngagement = (
  engagementType: string,
  engagementValue?: number,
  additionalInfo?: string
): void => {
  trackEvent({
    eventName: 'user_engagement',
    eventCategory: 'engagement',
    eventLabel: engagementType,
    value: engagementValue,
    customParameter: additionalInfo,
  });
};
