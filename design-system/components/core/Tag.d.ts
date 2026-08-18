import * as React from 'react';
/** Filter chip / removable tag. */
export interface TagProps extends React.HTMLAttributes<HTMLSpanElement> {
  selected?: boolean;
  /** Shows a remove affordance when provided. */
  onRemove?: () => void;
}
export declare function Tag(props: TagProps): JSX.Element;
