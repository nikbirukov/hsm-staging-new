import * as React from 'react';
/**
 * Inspection and action outcome status.
 * @startingPoint section="Feedback" subtitle="Status pills, alerts, progress and empty states" viewport="700x300"
 */
export interface StatusPillProps extends React.HTMLAttributes<HTMLSpanElement> {
  status?: 'pass' | 'fail' | 'na' | 'open' | 'overdue' | 'resolved' | 'synced' | 'pending';
  /** Overrides the default label text. */
  label?: string;
  /** Filled treatment for dark surfaces and dense tables. */
  solid?: boolean;
  size?: 'sm' | 'md';
}
export declare function StatusPill(props: StatusPillProps): JSX.Element;
