import React from 'react';

const clipPathStyles = {
  upward: 'polygon(0 75%, 100% 60%, 100% 100%, 0 100%)',
  downward: 'polygon(0 60%, 100% 75%, 100% 100%, 0 100%)',
};

const justifyContentStyles = {
  center: 'justify-center',
  start: 'justify-start',
  end: 'justify-end',
};

interface IImageCardProps {
  clipDirection: 'upward' | 'downward';
  imageSrc: string;
  imageAlt: string;
  imageWidth: number;
  imageHeight: number;
  justifyContent: 'center' | 'start' | 'end';
  maxWidth?: string;
  hasPaddingBottom?: boolean;
  // blurDataURL: string;
}

const ImageCard: React.FC<IImageCardProps> = ({
  clipDirection,
  imageSrc,
  imageAlt,
  imageWidth,
  imageHeight,
  justifyContent,
  maxWidth = '77%',
  hasPaddingBottom = false,
  // blurDataURL,
}) => {
  return (
    <div className="relative w-full max-w-[384px] rounded-[24px] border border-gray-3 bg-gray-white shadow-tertiary min-[501px]:h-[540px]">
      <div
        className="absolute inset-0 rounded-b-[24px] bg-nacho-2"
        style={{
          clipPath: clipPathStyles[clipDirection],
        }}
      />
      <div
        className={`relative z-10 flex size-full flex-col items-center max-[501px]:pt-[15%] ${justifyContentStyles[justifyContent]} gap-default`}
      >
        <img
          src={imageSrc}
          alt={imageAlt}
          width={imageWidth}
          height={imageHeight}
          style={{ maxWidth }}
          className={`size-auto ${hasPaddingBottom ? 'max-[501px]:pb-[15%]' : ''}`}
        />
      </div>
    </div>
  );
};

export default ImageCard;
