import * as React from 'react';
/** Centred dialog on a blurred navy scrim. */
export interface ModalProps {
  open?: boolean;
  title?: React.ReactNode;
  children?: React.ReactNode;
  /** Right-aligned action row on a grey footer. */
  footer?: React.ReactNode;
  onClose?: () => void;
  width?: number;
  style?: React.CSSProperties;
}
export declare function Modal(props: ModalProps): JSX.Element;
