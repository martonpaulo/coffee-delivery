import { DialogOverlay } from "@/components/DialogOverlay/DialogOverlay";
import { Spinner } from "@/components/LoadingDialog/LoadingDialog.styles";

interface LoadingDialogProps {
  title?: string;
  message: string;
  isOpen: boolean;
}

export function LoadingDialog({ title, message, isOpen }: LoadingDialogProps) {
  return (
    <DialogOverlay
      title={title}
      message={message}
      isOpen={isOpen}
      canClose={false}
    >
      <Spinner />
    </DialogOverlay>
  );
}
