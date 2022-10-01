import { Button, Tooltip } from "@mantine/core";
import { useClipboard } from "@mantine/hooks";
import { IconCopy, IconCheck } from "@tabler/icons";

interface ButtonCopyProps {
  copyData: string;
}

export function ButtonCopy({ copyData }: ButtonCopyProps) {
  const clipboard = useClipboard();
  return (
    <Tooltip
      label="Copied!"
      offset={5}
      position="bottom"
      radius="md"
      transition="slide-down"
      transitionDuration={100}
      opened={clipboard.copied}
    >
      <Button
        variant="light"
        rightIcon={
          clipboard.copied ? (
            <IconCheck size={20} stroke={1.5} />
          ) : (
            <IconCopy size={20} stroke={1.5} />
          )
        }
        radius="xl"
        size="sm"
        styles={{
          root: { paddingRight: 14, height: 48 },
          rightIcon: { marginLeft: 22 }
        }}
        onClick={() => clipboard.copy(copyData)}
      >
        Copy
      </Button>
    </Tooltip>
  );
}
