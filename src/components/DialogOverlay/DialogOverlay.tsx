import { ReactNode } from "react";

import {
  DialogContainer,
  Message,
  Overlay,
} from "@/components/DialogOverlay/DialogOverlay.styles";
import { TextM, TitleM } from "@/styles/typography";

interface DialogOverlayProps {
  title?: string;
  message: string;
  isOpen: boolean;
  children: ReactNode;
  onClickOutside?: () => void;
  canClose?: boolean;
}

export function DialogOverlay({
  title,
  message,
  isOpen,
  children,
  onClickOutside,
  canClose = true,
}: DialogOverlayProps) {
  if (!isOpen) return null;

  function handleDialogContainerClick(e: React.MouseEvent<HTMLDivElement>) {
    if (!canClose) return;
    e.stopPropagation();
  }

  return (
    <Overlay onClick={onClickOutside}>
      <DialogContainer onClick={handleDialogContainerClick}>
        <Message>
          {title && <TitleM>{title}</TitleM>}
          <TextM>{message}</TextM>
        </Message>
        {children}
      </DialogContainer>
    </Overlay>
  );
}
