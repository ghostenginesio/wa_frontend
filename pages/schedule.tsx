import { useState } from "react";
import {
  AppShell,
  Container,
  Group,
  Stack,
  useMantineTheme
} from "@mantine/core";

import { NavbarSimpleColored } from "../components/navbar";
import { StatsGrid } from "../components/statsGrid";
import { ProgressCardColored } from "../components/usageStats";
import { HeaderLoggedIn } from "../components/headerLoggedIn";
import TextEditor from "../components/textEditor";
import CardSimple from "../components/card";
import { Subgrid } from "../components/grid";
import { ContainedInputs } from "../components/scheduleForm";
import SimpleModal from "../components/modal";

export default function Scheduler() {
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
      <CardSimple />
      <SimpleModal content={<ContainedInputs />} />
    </AppShell>
  );
}
