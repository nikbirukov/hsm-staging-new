import * as React from 'react';
/** Navy app sidebar. The active item is a solid green pill. */
export interface SidebarItem { id: string; label: string; icon: string; count?: number }
export interface SidebarNavProps {
  items?: SidebarItem[];
  active?: string;
  onSelect?: (id: string) => void;
  footer?: React.ReactNode;
  width?: number;
  style?: React.CSSProperties;
}
export declare function SidebarNav(props: SidebarNavProps): JSX.Element;
