import { useState } from "react";
import { AppShell, useMantineTheme } from "@mantine/core";
import { NavbarSimpleColored } from "../components/general/navbar";
import { HeaderLoggedIn } from "../components/general/headerLoggedIn";
import { SwitchesCard } from "../components/settings/settings";
import { SettingsCard } from "../components/settings/card";

export default function SettingsPage() {
  const theme = useMantineTheme();
  const item = {
    title: "Invitation link",
    description: "https://mydomain.com/invitations/wjnfn3j4fn"
  };
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
      <SwitchesCard title="Settings" description="" data={dataTable} />
      <SettingsCard title={item.title} description={item.description} />
    </AppShell>
  );
}
