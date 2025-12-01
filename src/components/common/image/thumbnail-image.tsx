import React, { ImgHTMLAttributes } from 'react';

type ThumbnailImageProps = ImgHTMLAttributes<HTMLImageElement> & {
  src: string;
  alt: string;
};

export function ThumbnailImage({
  src,
  alt = 'Thumbnail Image',
  width = 1400,
  height = 732,
  className = '',
  ...props
}: ThumbnailImageProps) {
  return (
    <img
      src={src}
      alt={alt}
      width={width}
      height={height}
      className={`object-cover border border-[#00000014] rounded-lg mb-6 ${className}`}
      {...props}
    />
  );
}
