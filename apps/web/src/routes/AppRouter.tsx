import { Routes, Route } from "react-router-dom";

import HomePage from "../pages/HomePage";
import FormationPage from "../features/formation/FormationPage";
import DraftPage from "../features/draft/DraftPage";

export function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/formation" element={<FormationPage />} />
      <Route path="/draft" element={<DraftPage />} />
    </Routes>
  );
}
