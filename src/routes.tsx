import { useState } from "react";
import { useMantineTheme } from "@mantine/core";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import { NavbarSimpleColored } from "../components/navbar";
import { AuthenticationTitle } from "../pages/login";
import { SignUpForm } from "../pages/signup";
import ContactsPage from "../pages/contacts";
import Dashboard from "../pages/dashboard";
import Scheduler from "../pages/schedule";
import SettingsPage from "../pages/settings";

export default function AllRoutes() {
  const theme = useMantineTheme();
  const [opened, setOpened] = useState(false);
  return (
    <Router>
      <Routes>
        <Route path="/" element={<AuthenticationTitle />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/login" element={<AuthenticationTitle />} />
        <Route path="/signup" element={<SignUpForm />} />
        <Route path="/logout" element={<AuthenticationTitle />} />
        <Route path="/notifications" element={<NavbarSimpleColored />} />
        <Route path="/contacts" element={<ContactsPage />} />
        <Route path="/schedule" element={<Scheduler />} />
        <Route path="/inbox" element={<AuthenticationTitle />} />
        <Route path="/api_management" element={<AuthenticationTitle />} />
        <Route path="/settings" element={<SettingsPage />} />
      </Routes>
    </Router>
  );
}
