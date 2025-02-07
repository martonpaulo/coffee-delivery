import { Outlet } from "react-router-dom";

import { Header } from "@/components/Header/Header";
import {
  LayoutContainer,
  MainWrapper,
} from "@/layouts/DefaultLayout/DefaultLayout.styles";

export function DefaultLayout() {
  return (
    <LayoutContainer>
      <Header />

      <MainWrapper>
        <Outlet />
      </MainWrapper>
    </LayoutContainer>
  );
}
