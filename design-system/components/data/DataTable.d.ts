import * as React from 'react';
/** Report and action tables. Header is uppercase micro-caps; rows separated by hairlines, no zebra striping. */
export interface DataTableColumn {
  key: string;
  header?: React.ReactNode;
  width?: number | string;
  align?: 'left' | 'right' | 'center';
  /** Custom cell renderer — use for StatusPill, buttons, avatars. */
  render?: (row: any) => React.ReactNode;
}
export interface DataTableProps {
  columns?: DataTableColumn[];
  rows?: any[];
  onRowClick?: (row: any) => void;
  dense?: boolean;
  style?: React.CSSProperties;
}
export declare function DataTable(props: DataTableProps): JSX.Element;
