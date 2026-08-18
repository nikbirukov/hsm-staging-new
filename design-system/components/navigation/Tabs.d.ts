import * as React from 'react';
/** Segmented control used to switch views inside a page. */
export interface TabsProps {
  tabs?: (string | { id: string; label: string })[];
  active?: string;
  onChange?: (id: string) => void;
  style?: React.CSSProperties;
}
export declare function Tabs(props: TabsProps): JSX.Element;
