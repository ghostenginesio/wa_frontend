import { useState } from "react";
import {
  AppShell,
  Container,
  Grid,
  Group,
  Stack,
  useMantineTheme
} from "@mantine/core";

import { NavbarSimpleColored } from "../components/navbar";
import { HeaderLoggedIn } from "../components/headerLoggedIn";
import CardSimple from "../components/card";

const data = [1, 2, 3, 4, 5, 6, 7];

const items = data.map((item) => (
  <Grid.Col span={4} style={{ maxWidth: 380 }}>
    <CardSimple />
  </Grid.Col>
));

export default function Scheduler() {
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
      navbar={<NavbarSimpleColored current="Schedule" />}
      header={<HeaderLoggedIn />}
    >
      <Stack>
        <Grid grow>{items}</Grid>
      </Stack>
    </AppShell>
  );
}
