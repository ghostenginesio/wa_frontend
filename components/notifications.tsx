import { Group, Button } from "@mantine/core";
import { showNotification } from "@mantine/notifications";

function Notification() {
  return (
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
  );
}
