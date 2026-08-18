import * as React from 'react';
/** Square icon-only control for toolbars, table rows and app bars. */
export interface IconButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /** Material Symbols name. */
  icon: string;
  variant?: 'ghost' | 'outline' | 'solid';
  size?: 'sm' | 'md' | 'lg';
  /** Accessible label — always supply one. */
  label: string;
}
export declare function IconButton(props: IconButtonProps): JSX.Element;
