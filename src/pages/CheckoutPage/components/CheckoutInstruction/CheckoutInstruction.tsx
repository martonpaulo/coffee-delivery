import {
  CheckoutInstructionContainer,
  CheckoutInstructionIconWrapper,
  CheckoutInstructionText,
} from "@/pages/CheckoutPage/components/CheckoutInstruction/CheckoutInstruction.styles";
import { TextM, TextS } from "@/styles/typography";
import { IconType } from "@/types/icon";

interface CheckoutInstructionProps {
  title: string;
  description: string;
  icon: IconType;
  iconColor: string;
}

export function CheckoutInstruction({
  title,
  description,
  icon: Icon,
  iconColor,
}: CheckoutInstructionProps) {
  return (
    <CheckoutInstructionContainer>
      <CheckoutInstructionIconWrapper $color={iconColor}>
        <Icon size={22} />
      </CheckoutInstructionIconWrapper>
      <CheckoutInstructionText>
        <TextM $color="baseSubtitle">{title}</TextM>
        <TextS $color="baseText">{description}</TextS>
      </CheckoutInstructionText>
    </CheckoutInstructionContainer>
  );
}
