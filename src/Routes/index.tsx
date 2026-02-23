import { Route, Routes } from "react-router-dom";
import HomePage from "../pages/HomePage";
import ScreenshotsPage from "../pages/ScreenshotsPage";
import PrivacyPage from "../pages/PrivacyPage";
import TermsPage from "../pages/TermsPage";
import CookiePolicyPage from "../pages/CookiePolicyPage";
import RefundPolicyPage from "../pages/RefundPolicyPage";
import DeleteAccountPage from "../pages/DeleteAccountPage";
import AdminLoginPage from "../pages/AdminLoginPage";
import AdminDashboardPage from "../pages/AdminDashboardPage";
import AdminEmailsPage from "../pages/AdminEmailsPage";
import AdminChatsPage from "../pages/AdminChatsPage";
import AdminSubscriptionsPage from "../pages/AdminSubscriptionsPage";
import AdminNotificationsPage from "../pages/AdminNotificationsPage";

const Routers = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/screenshots" element={<ScreenshotsPage />} />
      <Route path="/privacy-policy" element={<PrivacyPage />} />
      <Route path="/terms-and-condition" element={<TermsPage />} />
      <Route path="/cookies" element={<CookiePolicyPage />} />
      <Route path="/refund" element={<RefundPolicyPage />} />
      <Route path="/delete-account" element={<DeleteAccountPage />} />
      <Route path="/admin/login" element={<AdminLoginPage />} />
      <Route path="/admin/dashboard" element={<AdminDashboardPage />} />
      <Route path="/admin/emails" element={<AdminEmailsPage />} />
      <Route path="/admin/chats" element={<AdminChatsPage />} />
      <Route path="/admin/subscriptions" element={<AdminSubscriptionsPage />} />
      <Route path="/admin/notifications" element={<AdminNotificationsPage />} />
      <Route path="/admin/settings" element={<AdminDashboardPage />} />
    </Routes>
  );
};

export default Routers;
