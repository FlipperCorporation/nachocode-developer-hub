'use client';

import React from 'react';

interface ICustomMessageProps {
  icon: React.ReactNode;
  title?: React.ReactNode;
  content?: React.ReactNode;
  backgroundColor: string;
  textColor: string;
  borderColor?: string;
  minWidth?: number;
  maxWidth?: number;
}

const CustomMessage: React.FC<ICustomMessageProps> = ({
  icon,
  title,
  content,
  backgroundColor,
  textColor,
  borderColor,
  minWidth,
  maxWidth,
}) => {
  return (
    <div
      className="flex w-full items-start justify-start gap-1 rounded-square px-[20px] py-[12px] text-[14px] font-semibold leading-[22px]"
      style={{
        backgroundColor,
        borderColor,
        color: textColor,
        minWidth: `${minWidth}px`,
        maxWidth: `${maxWidth}px`,
      }}
    >
      <div className="text-[22px]">{icon}</div>
      <div className="flex flex-col gap-1">
        {title}
        <div className="font-normal">{content}</div>
      </div>
    </div>
  );
};

export default CustomMessage;
