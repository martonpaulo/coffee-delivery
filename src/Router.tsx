import { Route, Routes } from "react-router-dom";

import { DefaultLayout } from "@/layouts/DefaultLayout/DefaultLayout";
import { Homepage } from "@/pages/Homepage/Homepage";

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Homepage />} />
      </Route>
    </Routes>
  );
}
