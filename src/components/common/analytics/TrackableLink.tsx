import React, { ReactNode } from 'react';
import { trackDownload, trackExternalLink } from '../../../utils/analytics';

interface TrackableLinkProps {
  href: string;
  children: ReactNode;
  className?: string;
  target?: string;
  rel?: string;
  trackingType?: 'external' | 'download' | 'internal';
  trackingLabel?: string;
}

/**
 * 클릭 이벤트를 자동으로 추적하는 링크 컴포넌트
 */
export const TrackableLink: React.FC<TrackableLinkProps> = ({
  href,
  children,
  className,
  target,
  rel,
  trackingType = 'external',
  trackingLabel,
}) => {
  const handleClick = () => {
    const linkText =
      trackingLabel || (typeof children === 'string' ? children : href);

    switch (trackingType) {
      case 'external': {
        trackExternalLink(href, linkText);
        break;
      }
      case 'download': {
        const fileName = href.split('/').pop() || 'unknown_file';
        const fileType = fileName.split('.').pop() || 'unknown';
        trackDownload(fileName, fileType);
        break;
      }
      case 'internal': {
        // 내부 링크의 경우 별도 추적 로직 추가 가능
        break;
      }
    }
  };

  // 외부 링크인지 확인
  const isExternal =
    href.startsWith('http') && !href.includes(window?.location?.hostname || '');
  const linkTarget = target || (isExternal ? '_blank' : undefined);
  const linkRel = rel || (isExternal ? 'noopener noreferrer' : undefined);

  return (
    <a
      href={href}
      className={className}
      target={linkTarget}
      rel={linkRel}
      onClick={handleClick}
    >
      {children}
    </a>
  );
};
