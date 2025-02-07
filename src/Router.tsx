import { Route, Routes } from "react-router-dom";

import { DefaultLayout } from "@/layouts/DefaultLayout/DefaultLayout";
import { CheckoutPage } from "@/pages/CheckoutPage/CheckoutPage";
import { Homepage } from "@/pages/Homepage/Homepage";
import { SuccessPage } from "@/pages/SuccessPage/SuccessPage";

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Homepage />} />
        <Route path="/checkout" element={<CheckoutPage />} />
        <Route path="/success" element={<SuccessPage />} />
      </Route>
    </Routes>
  );
}
