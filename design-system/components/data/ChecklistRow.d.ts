import * as React from 'react';
/** One inspection question with the Pass / Fail / N/A answer control and photo evidence affordance. */
export interface ChecklistRowProps {
  index?: number;
  question?: React.ReactNode;
  value?: 'pass' | 'fail' | 'na' | null;
  onChange?: (value: 'pass' | 'fail' | 'na') => void;
  /** Number of photos attached. */
  photos?: number;
  note?: React.ReactNode;
  style?: React.CSSProperties;
}
export declare function ChecklistRow(props: ChecklistRowProps): JSX.Element;
