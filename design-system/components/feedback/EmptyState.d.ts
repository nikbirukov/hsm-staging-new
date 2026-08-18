import * as React from 'react';
/** Zero-data placeholder for lists, tables and libraries. */
export interface EmptyStateProps {
  /** Material Symbols name. */
  icon?: string;
  title?: React.ReactNode;
  description?: React.ReactNode;
  action?: React.ReactNode;
  style?: React.CSSProperties;
}
export declare function EmptyState(props: EmptyStateProps): JSX.Element;
