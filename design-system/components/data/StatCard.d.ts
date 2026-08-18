import * as React from 'react';
/**
 * Headline metric tile for dashboards.
 * @startingPoint section="Data" subtitle="Metric tiles, tables and checklist rows" viewport="700x320"
 */
export interface StatCardProps {
  label?: React.ReactNode;
  value?: React.ReactNode;
  unit?: React.ReactNode;
  /** Change copy, e.g. "+8% vs last month". */
  delta?: React.ReactNode;
  deltaTone?: 'up' | 'down' | 'flat';
  /** Material Symbols name. */
  icon?: string;
  tone?: 'default' | 'sunken' | 'brand' | 'inverse';
  style?: React.CSSProperties;
}
export declare function StatCard(props: StatCardProps): JSX.Element;
