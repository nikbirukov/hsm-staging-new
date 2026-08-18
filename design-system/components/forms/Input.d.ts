import * as React from 'react';
/** Single-line text field with label, hint and error state. */
export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  hint?: string;
  /** Error message — replaces the hint and turns the field red. */
  error?: string;
  /** Material Symbols name shown inside the field. */
  iconStart?: string;
  suffix?: React.ReactNode;
  size?: 'sm' | 'md' | 'lg';
}
export declare function Input(props: InputProps): JSX.Element;
