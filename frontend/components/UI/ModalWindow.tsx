import React from "react";
import Modal, { ModalProps } from "@material-ui/core/Modal";

export const ModalWindow: React.FC<ModalProps> = ({ children, open, onClose, ...rest }: ModalProps) => (
  <Modal {...rest} open={open} onClose={onClose}>
    {children}
  </Modal>
);
