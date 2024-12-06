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
  // blurDataURL: string;
}

const ImageCard: React.FC<IImageCardProps> = ({
  clipDirection,
  imageSrc,
  imageAlt,
  imageWidth,
  imageHeight,
  justifyContent,
  // blurDataURL,
}) => {
  return (
    <div className="relative h-[540px] w-full max-w-[384px] rounded-[24px] border border-gray-3 bg-gray-white shadow-tertiary">
      <div
        className="absolute inset-0 rounded-b-[24px] bg-nacho-2"
        style={{
          clipPath: clipPathStyles[clipDirection],
        }}
      />
      <div
        className={`relative z-10 flex size-full flex-col items-center ${justifyContentStyles[justifyContent]} gap-[55px]`}
      >
        <img
          src={imageSrc}
          alt={imageAlt}
          width={imageWidth}
          height={imageHeight}
          className="w-auto h-auto max-w-full max-h-[422px]"
        />
      </div>
    </div>
  );
};

export default ImageCard;
