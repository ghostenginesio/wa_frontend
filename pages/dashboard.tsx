import { useState } from "react";
import { AppShell, Grid, useMantineTheme } from "@mantine/core";
import { NavbarSimpleColored } from "../components/general/navbar";
import { StatsGrid } from "../components/dashboard/statsGrid";
import { HeaderLoggedIn } from "../components/general/headerLoggedIn";
import SelfAccount from "../components/accounts/selfAccounts";
import AddSelfAccount from "../components/accounts/addSelfAccount";

const data = [1, 2];

const items = data.map((item) => (
  <Grid.Col span={4} style={{ maxWidth: 250 }}>
    <SelfAccount />
  </Grid.Col>
));

export default function Dashboard() {
  const theme = useMantineTheme();
  const dataTable = require("../components/dashboard/statsGrid.json")["data"];
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
      navbar={<NavbarSimpleColored current="Dashboard" />}
      header={<HeaderLoggedIn />}
    >
      <StatsGrid data={dataTable} />
      <Grid grow>
        {items}
        <Grid.Col span={4} style={{ maxWidth: 250 }}>
          <AddSelfAccount />
        </Grid.Col>
      </Grid>
    </AppShell>
  );
}
