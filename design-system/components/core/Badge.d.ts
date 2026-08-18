import * as React from 'react';
/** Small pill label for counts, plan names and inline status. */
export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  tone?: 'neutral' | 'pass' | 'fail' | 'warn' | 'info' | 'brand';
  /** Material Symbols name shown before the label. */
  icon?: string;
  size?: 'sm' | 'md';
}
export declare function Badge(props: BadgeProps): JSX.Element;
