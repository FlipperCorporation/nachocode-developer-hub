import React from 'react';

import {
  DISABLED_CLASSES,
  SHAPE_CLASSES,
  TYPE_AND_COLOR_CLASSES,
} from './button.constants';
import { Color, type IButtonProps, Shape, Size, Type } from './button.types';

export interface IIconButtonProps extends IButtonProps {
  icon: React.ReactNode;
}

// 크기에 따른 Tailwind 클래스
export const ICON_SIZE_CLASSES: { [key in Size]: string } = {
  [Size.small]: 'size-[36px] p-[6px]',
  [Size.medium]: 'size-[40px] p-[8px]',
  [Size.large]: 'size-[44px] p-[10px]',
} as const;

const IconButton: React.FC<IIconButtonProps> = ({
  type = Type.contained,
  icon,
  size = Size.medium,
  color = Color.primary,
  shape = Shape.square,
  disabled = false,
  onClick,
}) => {
  const buttonClasses = `
    ${ICON_SIZE_CLASSES[size]}
    ${SHAPE_CLASSES[shape]}
    ${disabled ? DISABLED_CLASSES[type] : TYPE_AND_COLOR_CLASSES[type][color]}
    font-bold text-[22px]
    flex items-center justify-center box-border
  `;

  return (
    <button
      className={buttonClasses}
      type="button"
      disabled={disabled}
      onClick={onClick}
    >
      {icon}
    </button>
  );
};

export default IconButton;
