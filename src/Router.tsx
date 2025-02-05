import { Route, Routes } from "react-router-dom";

import { Homepage } from "@/components/Homepage/Homepage";
import { DefaultLayout } from "@/layouts/DefaultLayout/DefaultLayout";

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Homepage />} />
      </Route>
    </Routes>
  );
}
