import * as React from 'react';
/** Mutually exclusive choice set. */
export interface RadioGroupProps {
  label?: string;
  options?: (string | { value: string; label: string })[];
  value?: string;
  onChange?: (value: string) => void;
  name?: string;
  direction?: 'vertical' | 'horizontal';
  style?: React.CSSProperties;
}
export declare function RadioGroup(props: RadioGroupProps): JSX.Element;
