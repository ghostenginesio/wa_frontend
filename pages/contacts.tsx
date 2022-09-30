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
import { NavbarSimpleColored } from "../components/navbar";
import { HeaderMegaMenu } from "../components/header";
import { AuthenticationTitle } from "../pages/login";
import { SignUpForm } from "../pages/signup";
import { TableReviews } from "../components/tableProgress";

export default function ContactsPage() {
  const theme = useMantineTheme();
  const [opened, setOpened] = useState(false);
  const dataTable = require("../components/tableProgress.json")["data"];
  return (
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
      <TableReviews data={dataTable} />
    </AppShell>
  );
}
