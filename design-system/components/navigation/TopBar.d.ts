import * as React from 'react';
/** Dashboard page header: title, optional search, actions and the account chip. */
export interface TopBarUser { name: string; role: string; initials: string }
export interface TopBarProps {
  title?: React.ReactNode;
  subtitle?: React.ReactNode;
  search?: boolean;
  actions?: React.ReactNode;
  user?: TopBarUser;
  style?: React.CSSProperties;
}
export declare function TopBar(props: TopBarProps): JSX.Element;
