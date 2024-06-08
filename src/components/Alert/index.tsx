import React, { ButtonHTMLAttributes, ReactNode } from "react";
import {
  ModalOverlay,
  ModalContainer,
  ModalHeader,
  ModalBody,
  ModalFooter,
  ModalButton,
} from "./style"

type AlertProps = {
  title: string,
  message: string,
  buttonLabel?: string,
  onClose?: () => void, // onClose를 onButtonClick으로 변경
  children?: ReactNode
} & Omit<ButtonHTMLAttributes<HTMLButtonElement>, "onClick">

const Alert = ({ title, message, buttonLabel = "확인", onClose, ...rest }: AlertProps) => { // onClose로 변경
  return (
    <ModalOverlay>
      <ModalContainer>
        <ModalHeader>{title}</ModalHeader>
        <ModalBody>{message}</ModalBody>
        <ModalFooter>
          <ModalButton onClick={onClose} {...rest}>{buttonLabel}</ModalButton> {/* onClose로 변경 */}
        </ModalFooter>
      </ModalContainer>
    </ModalOverlay>
  );
};

export default Alert;
