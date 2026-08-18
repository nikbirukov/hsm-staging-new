import * as React from 'react';
/** Inline banner for sync state, compliance warnings and confirmations. */
export interface AlertProps extends React.HTMLAttributes<HTMLDivElement> {
  tone?: 'info' | 'success' | 'warning' | 'danger';
  title?: React.ReactNode;
  /** Optional trailing button. */
  action?: React.ReactNode;
}
export declare function Alert(props: AlertProps): JSX.Element;
