import { Route, Routes } from "react-router-dom";
import HomePage from "../pages/HomePage";
import ScreenshotsPage from "../pages/ScreenshotsPage";
import PrivacyPage from "../pages/PrivacyPage";
import TermsPage from "../pages/TermsPage";
import CookiePolicyPage from "../pages/CookiePolicyPage";
import RefundPolicyPage from "../pages/RefundPolicyPage";
import DeleteAccountPage from "../pages/DeleteAccountPage";

const Routers = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/screenshots" element={<ScreenshotsPage />} />
      <Route path="/privacy" element={<PrivacyPage />} />
      <Route path="/terms" element={<TermsPage />} />
      <Route path="/cookies" element={<CookiePolicyPage />} />
      <Route path="/refund" element={<RefundPolicyPage />} />
      <Route path="/delete-account" element={<DeleteAccountPage />} />
    </Routes>
  );
};

export default Routers;
