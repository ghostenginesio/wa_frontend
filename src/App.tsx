import { MantineProvider } from "@mantine/core";
import {
  NotificationsProvider,
  showNotification
} from "@mantine/notifications";
import { Group, Button } from "@mantine/core";
import AllRoutes from "../components/routes";

export default function App() {
  return (
    <MantineProvider withGlobalStyles withNormalizeCSS>
      <NotificationsProvider>
        <AllRoutes />
      </NotificationsProvider>
    </MantineProvider>
  );
}
