import { useState } from "react";
import { AppShell, Grid, useMantineTheme } from "@mantine/core";
import { NavbarSimpleColored } from "../components/navbar";
import { StatsGrid } from "../components/statsGrid";
import { HeaderLoggedIn } from "../components/headerLoggedIn";
import SelfAccount from "../components/selfAccounts";
import AddSelfAccount from "../components/addSelfAccount";

const data = [1, 2];

const items = data.map((item) => (
  <Grid.Col span={4} style={{ maxWidth: 380 }}>
    <SelfAccount />
  </Grid.Col>
));

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
      navbar={<NavbarSimpleColored current="Dashboard" />}
      header={<HeaderLoggedIn />}
    >
      <StatsGrid data={dataTable} />
      <Grid grow>
        {items}
        <Grid.Col span={4} style={{ maxWidth: 380 }}>
          <AddSelfAccount />
        </Grid.Col>
      </Grid>
    </AppShell>
  );
}
