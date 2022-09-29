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

export default function AppShellDemo() {
  const theme = useMantineTheme();
  const [opened, setOpened] = useState(false);
  const tableData = require("./tableProgress.json")["data"];
  return (
    <Router>
      <AppShell
        styles={{
          main: {
            background:
              theme.colorScheme === "dark"
                ? theme.colors.dark[8]
                : theme.colors.gray[0]
          }
        }}
        navbarOffsetBreakpoint="sm"
        asideOffsetBreakpoint="sm"
        navbar={<NavbarSimpleColored />}
        header={<HeaderMegaMenu />}
      >
        <Routes>
          <Route path="/login" element={<AuthenticationTitle />} />
          <Route path="/signup" element={<SignUpForm />} />
          <Route path="/logout" element={<TableReviews data={tableData} />} />
          <Route path="/notifications" element={<NavbarSimpleColored />} />
          <Route path="/contacts" element={<TableReviews data={tableData} />} />
          <Route path="/schedule" element={<TableReviews data={tableData} />} />
          <Route path="/inbox" element={<TableReviews data={tableData} />} />
          <Route
            path="/api_management"
            element={<TableReviews data={tableData} />}
          />
          <Route path="/settings" element={<TableReviews data={tableData} />} />
        </Routes>
      </AppShell>
    </Router>
  );
}
