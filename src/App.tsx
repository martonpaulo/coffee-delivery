import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";

import { CartContextProvider } from "@/contexts/cart/CartContextProvider";
import { Router } from "@/Router";
import { GlobalStyle } from "@/styles/global";
import { defaultTheme } from "@/styles/themes/default";

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <BrowserRouter basename="/coffee-delivery">
        <CartContextProvider>
          <Router />
        </CartContextProvider>
      </BrowserRouter>
      <GlobalStyle />
    </ThemeProvider>
  );
}
