import { QuantityButtonWrapper } from "@/components/QuantityButton/QuantityButton.styles";
import { IconType } from "@/types/icon";

interface QuantityButtonProps {
  onClick: () => void;
  icon: IconType;
  disabled?: boolean;
}

export function QuantityButton({
  onClick,
  icon: Icon,
  disabled,
}: QuantityButtonProps) {
  return (
    <QuantityButtonWrapper onClick={onClick} disabled={disabled}>
      <Icon size={14} weight="bold" />
    </QuantityButtonWrapper>
  );
}
