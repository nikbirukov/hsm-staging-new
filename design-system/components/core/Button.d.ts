import * as React from 'react';
/**
 * Primary action control.
 * @startingPoint section="Core" subtitle="Buttons, icon buttons, badges and tags" viewport="700x280"
 */
export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'danger';
  size?: 'sm' | 'md' | 'lg';
  /** Fully rounded. Used for marketing CTAs; app UI stays on the 12px control radius. */
  pill?: boolean;
  block?: boolean;
  /** Material Symbols name rendered before the label. */
  iconStart?: string;
  /** Material Symbols name rendered after the label. */
  iconEnd?: string;
}
export declare function Button(props: ButtonProps): JSX.Element;
