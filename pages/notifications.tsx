import { useState } from "react";
import { AppShell, useMantineTheme } from "@mantine/core";

import { NavbarSimpleColored } from "../components/navbar";
import { HeaderLoggedIn } from "../components/headerLoggedIn";
import TextPage from "../components/textArea";

const dataTable = require("../components/statsGrid.json")["data"];

export default function NotificationPage() {
  const theme = useMantineTheme();
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
      navbar={<NavbarSimpleColored current="Notifications" />}
      header={<HeaderLoggedIn />}
    >
      <TextPage />
    </AppShell>
  );
}
