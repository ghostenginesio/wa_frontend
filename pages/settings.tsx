import { useState } from "react";
import { AppShell, useMantineTheme } from "@mantine/core";

import { NavbarSimpleColored } from "../components/navbar";
import { HeaderLoggedIn } from "../components/headerLoggedIn";
import { SwitchesCard } from "../components/settings";

export default function SettingsPage() {
  const theme = useMantineTheme();
  const dataTable = require("../pages/settings.json")["data"];
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
      navbar={<NavbarSimpleColored current="Settings" />}
      header={<HeaderLoggedIn />}
    >
      <SwitchesCard
        title="Settings"
        description="Main settings"
        data={dataTable}
      />
    </AppShell>
  );
}
