import React from 'react';

import {
  DISABLED_CLASSES,
  SHAPE_CLASSES,
  TYPE_AND_COLOR_CLASSES,
} from './button.constants';
import { Color, type IButtonProps, Shape, Size, Type } from './button.types';

export interface ITextButtonProps extends IButtonProps {
  text: string;
  startIcon?: React.ReactNode;
  endIcon?: React.ReactNode;
  className?: string;
}

// 크기에 따른 Tailwind 클래스
export const TEXT_SIZE_CLASSES: { [key in Size]: string } = {
  [Size.small]: 'h-[36px] text-[14px] leading-[22px] px-[12px] py-[6px]',
  [Size.medium]: 'h-[40px] text-[14px] leading-[22px] px-[14px] py-[8px]',
  [Size.large]: 'h-[44px] text-[16px] leading-[24px] px-[16px] py-[10px]',
} as const;

interface IIconWrapperProps {
  children: React.ReactNode;
}

const IconWrapper: React.FC<IIconWrapperProps> = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return <span className="text-[22px]">{children}</span>;
};

const TextButton: React.FC<ITextButtonProps> = ({
  type = Type.contained,
  text,
  startIcon,
  endIcon,
  size = Size.medium,
  color = Color.primary,
  shape = Shape.square,
  disabled = false,
  maxWidth,
  width,
  onClick,
  className,
}) => {
  const buttonClasses = `
    ${TEXT_SIZE_CLASSES[size]}
    ${SHAPE_CLASSES[shape]}
    ${disabled ? DISABLED_CLASSES[type] : TYPE_AND_COLOR_CLASSES[type][color]}
    font-bold
    flex items-center justify-center box-border whitespace-nowrap
    ${maxWidth}
    ${width}
    ${className}
  `;

  return (
    <button
      className={buttonClasses}
      type="submit"
      disabled={disabled}
      onClick={onClick}
    >
      <div className="flex items-center justify-center gap-1">
        {startIcon ? <IconWrapper>{startIcon}</IconWrapper> : null}
        {text}
        {endIcon ? <IconWrapper>{endIcon}</IconWrapper> : null}
      </div>
    </button>
  );
};

export default TextButton;
