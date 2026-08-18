import * as React from 'react';
/** Pill-shaped search input used above libraries and tables. */
export interface SearchFieldProps extends React.InputHTMLAttributes<HTMLInputElement> {
  width?: number | string;
}
export declare function SearchField(props: SearchFieldProps): JSX.Element;
