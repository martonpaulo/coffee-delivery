import { CurrencyDollar, MapPin, Timer } from "phosphor-react";
import { useLocation } from "react-router-dom";

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

const PAYMENT_METHODS = {
  credit: "Credit Card",
  debit: "Debit Card",
  cash: "Cash",
};

export function SuccessPage() {
  const { state: orderData } = useLocation();

  if (!orderData) {
    return <div>No order data provided</div>;
  }

  const {
    street,
    number: houseNumber,
    neighborhood,
    city,
    state: region,
    paymentType,
  } = orderData;

  const addressLine = `${street}, ${houseNumber}`;
  const fullAddress = `${neighborhood}, ${city}, ${region}`;
  const paymentMethod =
    PAYMENT_METHODS[paymentType as keyof typeof PAYMENT_METHODS];

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
              Delivery to <b>{addressLine}</b>
            </TextM>
            <TextM>{fullAddress}</TextM>
          </TextWithIcon>

          <TextWithIcon icon={Timer} color="yellow">
            <TextM>Estimated arrival</TextM>
            <TextM $bold>20 to 30 min</TextM>
          </TextWithIcon>

          <TextWithIcon icon={CurrencyDollar} color="darkYellow">
            <TextM>Pay on delivery</TextM>
            <TextM $bold>{paymentMethod}</TextM>
          </TextWithIcon>
        </DeliveryDetails>
      </OrderConfirmationContainer>

      <IllustrationWrapper>
        <DeliveryIllustrationImage />
      </IllustrationWrapper>
    </SuccessPageContainer>
  );
}
