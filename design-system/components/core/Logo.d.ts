import * as React from 'react';
/** The hsmanager logo, rendered from the supplied artwork files. */
export interface LogoProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  /** "lockup" = phone-tick mark above the wordmark; "mark" = mark only. */
  variant?: 'lockup' | 'mark';
  /** "colour" for light backgrounds, "white" for navy/photographic backgrounds. */
  tone?: 'colour' | 'white';
  height?: number;
  /** Relative path to the design system's assets folder from the consuming page. */
  basePath?: string;
}
export declare function Logo(props: LogoProps): JSX.Element;
