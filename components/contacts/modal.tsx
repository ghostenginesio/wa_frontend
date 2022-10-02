import { useState } from "react";
import { Modal, Button, Group } from "@mantine/core";

interface ModelProps{
  content: any;
  name: string;
  color: string;
}

function SimpleModal({ content, name, color }: ModelProps) {
  const [opened, setOpened] = useState(false);

  return (
    <>
      <Modal opened={opened} onClose={() => setOpened(false)} title="Select">
        {content}
      </Modal>

      <Group position="center">
<Button color={color} onClick={() => setOpened(true)}>{name}</Button>
      </Group>
    </>
  );
}

export default SimpleModal;
