import { useState } from "react";
import { AppShell, Paper, Stack, useMantineTheme } from "@mantine/core";
import { NavbarSimpleColored } from "../components/general/navbar";
import { HeaderLoggedIn } from "../components/general/headerLoggedIn";
import NotificationsCard from "../components/notifications/notificationsButton";

const dataTable = require("../components/notifications/notifications.json")[
  "data"
];

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
      <Paper shadow="xs" p="md">
        <Stack>
          <NotificationsCard data={dataTable} />
        </Stack>
      </Paper>
    </AppShell>
  );
}
