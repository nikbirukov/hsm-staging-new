import * as React from 'react';
/** Linear progress — inspection completion, upload state, compliance score. */
export interface ProgressBarProps {
  value?: number;
  max?: number;
  tone?: 'brand' | 'warn' | 'fail' | 'navy';
  label?: React.ReactNode;
  height?: number;
  showValue?: boolean;
  style?: React.CSSProperties;
}
export declare function ProgressBar(props: ProgressBarProps): JSX.Element;
