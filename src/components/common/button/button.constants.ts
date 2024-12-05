import { Color, Shape, Type } from './button.types';

// 타입과 색상에 따른 Tailwind 클래스
export const TYPE_AND_COLOR_CLASSES: {
  [typeKey in Type]: { [colorKey in Color]: string };
} = {
  [Type.contained]: {
    [Color.primary]:
      'bg-nacho-6 hover:bg-nacho-7 active:bg-nacho-8 text-gray-white border-none',
    [Color.secondary]:
      'bg-gray-3 hover:bg-gray-4 active:bg-gray-5 text-gray-7 hover:text-gray-8 active:text-gray-9 border-none',
    [Color.black]:
      'bg-gray-8 hover:bg-gray-9 active:bg-gray-black text-gray-white border-none',
  },
  [Type.outlined]: {
    [Color.primary]:
      'bg-gray-white border-[1px] border-solid border-nacho-5 hover:border-nacho-6 active:border-nacho-7 text-nacho-7 hover:text-nacho-8 active:text-nacho-9',
    [Color.secondary]:
      'bg-gray-white border-[1px] border-solid border-gray-4 hover:border-gray-5 active:border-gray-6 text-gray-7 hover:text-gray-8 active:text-gray-9',
    [Color.black]:
      'bg-gray-white border-[1px] border-solid border-gray-7 hover:border-gray-8 active:border-gray-9 text-gray-8 hover:text-gray-9 active:text-gray-black',
  },
  [Type.text]: {
    [Color.primary]:
      'text-nacho-7 hover:bg-nacho-2 hover:text-nacho-8 active:text-nacho-9 border-none',
    [Color.secondary]:
      'text-gray-7 hover:bg-gray-2 hover:text-gray-8 active:text-gray-9 border-none',
    [Color.black]:
      'text-gray-8 hover:bg-gray-2 hover:text-gray-9 active:text-gray-black border-none',
  },
} as const;

// 모양에 따른 Tailwind 클래스
export const SHAPE_CLASSES: { [key in Shape]: string } = {
  [Shape.round]: 'rounded-round',
  [Shape.square]: 'rounded-square',
} as const;

// disabled 상태일 때 Tailwind 클래스
export const DISABLED_CLASSES: { [typeKey in Type]: string } = {
  [Type.contained]: 'bg-gray-2 text-gray-5 cursor-not-allowed',
  [Type.outlined]:
    'bg-gray-2 text-gray-5 border-[1px] border-solid border-gray-4 cursor-not-allowed',
  [Type.text]: 'text-gray-5 cursor-not-allowed',
} as const;
