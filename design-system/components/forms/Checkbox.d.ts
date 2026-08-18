import * as React from 'react';
/** Checkbox with optional supporting description. */
export interface CheckboxProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'> {
  label?: React.ReactNode;
  description?: React.ReactNode;
  checked?: boolean;
}
export declare function Checkbox(props: CheckboxProps): JSX.Element;
