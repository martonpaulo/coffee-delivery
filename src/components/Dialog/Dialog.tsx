import { ButtonWithLabel } from "@/components/ButtonWithLabel/ButtonWithLabel";
import { ButtonContainer } from "@/components/Dialog/Dialog.styles";
import { DialogOverlay } from "@/components/DialogOverlay/DialogOverlay";

interface DialogProps {
  title?: string;
  message: string;
  isOpen: boolean;
  confirmText: string;
  cancelText: string;
  onConfirm: () => void;
  onCancel: () => void;
  onClose: () => void;
}

export function Dialog({
  title,
  message,
  isOpen,
  confirmText,
  cancelText,
  onConfirm,
  onCancel,
  onClose,
}: DialogProps) {
  return (
    <DialogOverlay
      title={title}
      message={message}
      isOpen={isOpen}
      onClickOutside={onClose}
    >
      <ButtonContainer>
        <ButtonWithLabel onClick={onCancel} label={cancelText} color="purple" />
        <ButtonWithLabel onClick={onConfirm} label={confirmText} />
      </ButtonContainer>
    </DialogOverlay>
  );
}
