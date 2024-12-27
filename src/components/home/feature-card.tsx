import Tag from '@site/src/components/common/tag/default-tag';
import React from 'react';

interface IFeatureCardProps {
  title: string;
  description: string;
  isReady?: boolean;
}

const FeatureCard: React.FC<IFeatureCardProps> = ({
  title,
  description,
  isReady = false,
}) => {
  return (
    <div className="mx-auto flex size-full h-[207px] w-[384px] max-w-full flex-col items-start justify-center gap-[16px] rounded-[16px] bg-gray-1 p-[36px] max-nacho-sm:h-auto">
      <div className="flex w-full items-center justify-between">
        <h3 className="m-0 break-keep text-sm-text1 !font-bold nacho-sm:text-text1">
          {title}
        </h3>
        {isReady && <Tag>준비중</Tag>}
      </div>
      <p className="m-0 text-sm-text2 text-gray-7 nacho-sm:text-text2">
        {description}
      </p>
    </div>
  );
};

export default FeatureCard;
