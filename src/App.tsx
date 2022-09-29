import { MantineProvider } from "@mantine/core";
import {
  NotificationsProvider,
  showNotification
} from "@mantine/notifications";
import { Group, Button } from "@mantine/core";
import AppShellDemo from "../components/appShell";

export default function App() {
  return (
    <MantineProvider withGlobalStyles withNormalizeCSS>
      <NotificationsProvider>
        <AppShellDemo />
        <Group position="center">
          <Button
            variant="outline"
            onClick={() =>
              showNotification({
                title: "Default notification",
                message: "Hey there, your code is awesome! 🤥"
              })
            }
          >
            Show notification
          </Button>
        </Group>
      </NotificationsProvider>
    </MantineProvider>
  );
}
