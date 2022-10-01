import { useState } from "react";
import { AppShell, useMantineTheme } from "@mantine/core";

import { NavbarSimpleColored } from "../components/navbar";
import { HeaderLoggedIn } from "../components/headerLoggedIn";
import { SwitchesCard } from "../components/switchCardApi";

export default function ApiPage() {
  const theme = useMantineTheme();
  const dataTable = require("../pages/apiPage.json");
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
      navbar={<NavbarSimpleColored current="API Keys" />}
      header={<HeaderLoggedIn />}
    >
      <SwitchesCard
        title={dataTable.title}
        description={dataTable.description}
        data={dataTable.data}
      />
    </AppShell>
  );
}
