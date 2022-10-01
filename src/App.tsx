import { MantineProvider } from "@mantine/core";
import { NotificationsProvider } from "@mantine/notifications";
import AllRoutes from "./routes";

export default function App() {
  return (
    <MantineProvider withGlobalStyles withNormalizeCSS>
      <NotificationsProvider>
        <AllRoutes />
      </NotificationsProvider>
    </MantineProvider>
  );
}
