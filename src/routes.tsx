import { useState } from "react";
import { useMantineTheme } from "@mantine/core";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { AuthenticationTitle } from "../pages/login";
import { SignUpForm } from "../pages/signup";
import ContactsPage from "../pages/contacts";
import Dashboard from "../pages/dashboard";
import Scheduler from "../pages/schedule";
import SettingsPage from "../pages/settings";
import ApiPage from "../pages/apiPage";
import NotificationPage from "../pages/notifications";
import { ForgotPassword } from "../pages/resetPassword";
import Website from "../pages/website";

export default function AllRoutes() {
  const theme = useMantineTheme();
  const [opened, setOpened] = useState(false);
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Website />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/login" element={<AuthenticationTitle />} />
        <Route path="/signup" element={<SignUpForm />} />
        <Route path="/reset" element={<ForgotPassword />} />
        <Route path="/logout" element={<AuthenticationTitle />} />
        <Route path="/notifications" element={<NotificationPage />} />
        <Route path="/contacts" element={<ContactsPage />} />
        <Route path="/schedule" element={<Scheduler />} />
        <Route path="/api_management" element={<ApiPage />} />
        <Route path="/settings" element={<SettingsPage />} />
      </Routes>
    </Router>
  );
}
