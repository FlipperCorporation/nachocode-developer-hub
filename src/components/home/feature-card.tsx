import Tag from '@site/src/components/common/tag/default-tag';

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
    <div className="flex w-full max-w-[384px] flex-col items-start justify-center gap-[16px] rounded-[16px] bg-gray-1 p-[36px] h-full max-h-[300px]">
      <div className="flex items-center justify-between w-full">
        <h3 className="text-[24px] font-bold leading-normal">{title}</h3>
        {isReady && <Tag>준비중</Tag>}
      </div>
      <p className="text-[20px] font-medium leading-[30px] text-gray-7">
        {description}
      </p>
    </div>
  );
};

export default FeatureCard;
