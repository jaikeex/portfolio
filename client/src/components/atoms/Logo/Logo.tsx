import React from 'react';
import { images } from 'assets';

type LogoProps = {
  height?: number;
  width?: number;
} & React.ComponentProps<'img'>;

export const Logo: React.FC<LogoProps> = ({ height = 20, width = 90, ...props }): JSX.Element => <img src={images.logo} alt="logo" width={width} height={height} {...props} />;
