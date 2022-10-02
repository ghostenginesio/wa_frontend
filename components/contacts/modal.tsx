import { useState } from "react";
import { Modal, Button, Group } from "@mantine/core";

interface ModelProps{
  content: any;
  name: string;
  color: string;
  title: string;
  size: string;
}

function SimpleModal({ content, name, color, title }: ModelProps) {
  const [opened, setOpened] = useState(false);

  return (
    <>
      <Modal opened={opened} onClose={() => setOpened(false)} overflow="outside" title={title} size="auto">
        {content}
      </Modal>

      <Group position="center">
<Button color={color} onClick={() => setOpened(true)}>{name}</Button>
      </Group>
    </>
  );
}

export default SimpleModal;
