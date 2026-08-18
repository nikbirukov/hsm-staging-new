import * as React from 'react';
/** A single Material Symbols Rounded glyph, sized and coloured inline. */
export interface IconProps extends React.HTMLAttributes<HTMLSpanElement> {
  /** Material Symbols ligature name, e.g. "check_circle", "warehouse", "forklift". */
  name: string;
  /** Pixel size. Default 20. */
  size?: number;
  /** Optical weight 300–600. Default 400. */
  weight?: number;
  /** 0 = outline, 1 = filled. Default 0. */
  fill?: 0 | 1;
  color?: string;
}
export declare function Icon(props: IconProps): JSX.Element;
