import { useState } from "react";
import { Modal, Button, Group } from "@mantine/core";

function SimpleModal({ content }: { content: any }) {
  const [opened, setOpened] = useState(false);

  return (
    <>
      <Modal opened={opened} onClose={() => setOpened(false)} title="Select">
        {content}
      </Modal>

      <Group position="center">
        <Button onClick={() => setOpened(true)}>Select</Button>
      </Group>
    </>
  );
}

export default SimpleModal;
