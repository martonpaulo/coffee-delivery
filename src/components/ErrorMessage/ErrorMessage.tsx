import { ErrorMessageContainer } from "@/components/ErrorMessage/ErrorMessage.styles";
import { TextS } from "@/styles/typography";

interface ErrorMessageProps {
  text: string;
}

export function ErrorMessage({ text }: ErrorMessageProps) {
  return (
    <ErrorMessageContainer>
      <TextS $color="darkYellow">{text}</TextS>
    </ErrorMessageContainer>
  );
}
