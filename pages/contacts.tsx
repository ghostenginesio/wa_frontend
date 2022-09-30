import { useState } from "react";
import { AppShell, useMantineTheme } from "@mantine/core";

import { NavbarSimpleColored } from "../components/navbar";
import { HeaderLoggedIn } from "../components/headerLoggedIn";
import { TableReviews } from "../components/tableProgress";

export default function ContactsPage() {
  const theme = useMantineTheme();
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
      header={<HeaderLoggedIn />}
    >
      <TableReviews data={dataTable} />
    </AppShell>
  );
}
