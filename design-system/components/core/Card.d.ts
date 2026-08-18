import * as React from 'react';
/** The surface container: 20px radius, hairline border, soft shadow. */
export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  padding?: number | string;
  /** Lifts on hover — use for clickable cards only. */
  interactive?: boolean;
  tone?: 'default' | 'sunken' | 'brand' | 'inverse';
}
export declare function Card(props: CardProps): JSX.Element;
