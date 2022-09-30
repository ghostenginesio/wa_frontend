import { useState } from "react";
import {
  AppShell,
  Navbar,
  Header,
  Footer,
  Aside,
  Text,
  MediaQuery,
  Burger,
  useMantineTheme
} from "@mantine/core";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import { NavbarSimpleColored } from "./navbar";
import { TableReviews } from "./tableProgress";
import { HeaderMegaMenu } from "./header";
import { AuthenticationTitle } from "../pages/login";
import { SignUpForm } from "../pages/signup";
import ContactsPage from "../pages/contacts";
import Dashboard from "../pages/dashboard";

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
        <Route path="/schedule" element={<AuthenticationTitle />} />
        <Route path="/inbox" element={<AuthenticationTitle />} />
        <Route path="/api_management" element={<AuthenticationTitle />} />
        <Route path="/settings" element={<AuthenticationTitle />} />
      </Routes>
    </Router>
  );
}
