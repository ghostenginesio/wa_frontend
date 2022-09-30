import { useState } from "react";
import { AppShell, useMantineTheme } from "@mantine/core";

import { NavbarSimpleColored } from "../components/navbar";
import { StatsGrid } from "../components/statsGrid";
import { ProgressCardColored } from "../components/usageStats";
import { HeaderLoggedIn } from "../components/headerLoggedIn";

export default function Dashboard() {
  const theme = useMantineTheme();
  const dataTable = require("../components/statsGrid.json")["data"];
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
      <ProgressCardColored />
      <StatsGrid data={dataTable} />
      <StatsGrid data={dataTable} />
      <StatsGrid data={dataTable} />
      <StatsGrid data={dataTable} />
    </AppShell>
  );
}
