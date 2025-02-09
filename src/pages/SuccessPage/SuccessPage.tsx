import { CurrencyDollar, MapPin, Timer } from "phosphor-react";

import { DeliveryIllustrationImage } from "@/assets";
import { TextWithIcon } from "@/components/TextWithIcon/TextWithIcon";
import {
  DeliveryDetails,
  IllustrationWrapper,
  OrderConfirmationContainer,
  SuccessMessage,
  SuccessPageContainer,
} from "@/pages/SuccessPage/SuccessPage.styles";
import { TextL, TextM, TitleL } from "@/styles/typography";

export function SuccessPage() {
  return (
    <SuccessPageContainer>
      <OrderConfirmationContainer>
        <SuccessMessage>
          <TitleL $color="darkYellow">Woohoo! Your order is confirmed</TitleL>
          <TextL $color="baseSubtitle">
            Your coffee is on its way. Just sit back and relax!
          </TextL>
        </SuccessMessage>

        <DeliveryDetails>
          <TextWithIcon icon={MapPin}>
            <TextM>
              Delivery to <b>Calle Gran Vía, 28</b>
            </TextM>
            <TextM>Salamanca, 28013 Madrid, Spain</TextM>
          </TextWithIcon>

          <TextWithIcon icon={Timer} color="yellow">
            <TextM>Estimated arrival</TextM>
            <TextM $bold>20 to 30 min</TextM>
          </TextWithIcon>

          <TextWithIcon icon={CurrencyDollar} color="darkYellow">
            <TextM>Pay on delivery</TextM>
            <TextM $bold>Credit Card</TextM>
          </TextWithIcon>
        </DeliveryDetails>
      </OrderConfirmationContainer>

      <IllustrationWrapper>
        <DeliveryIllustrationImage />
      </IllustrationWrapper>
    </SuccessPageContainer>
  );
}
