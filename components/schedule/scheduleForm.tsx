import { createStyles, Textarea, Button, Group, Center } from "@mantine/core";
import { DatePicker, TimeInput } from "@mantine/dates";
import { DropzoneButton } from "./dropzone";
import { IconClock } from "@tabler/icons";

const useStyles = createStyles((theme) => ({
  root: {
    position: "relative"
  },

  input: {
    height: "auto",
    paddingTop: 18
  },

  label: {
    position: "absolute",
    pointerEvents: "none",
    fontSize: theme.fontSizes.xs,
    paddingLeft: theme.spacing.sm,
    paddingTop: theme.spacing.sm / 2,
    zIndex: 1
  }
}));

export function ContainedInputs() {
  // You can add these classes as classNames to any Mantine input, it will work the same
  const { classes } = useStyles();

  return (
    <div>
      <Textarea
        label="Autosize with 4 rows max"
        placeholder="Autosize with 4 rows max"
        autosize
        minRows={2}
        maxRows={4}
      />

      <DropzoneButton />

      <Group>
        <DatePicker
          style={{ marginTop: 20 }}
          label="Departure date"
          placeholder="When will you leave?"
          classNames={classes}
          clearable={false}
        />

        <TimeInput
          label="Pick time"
          placeholder="Pick time"
          icon={<IconClock size={16} />}
          defaultValue={new Date()}
        />
      </Group>

      <Center>
        <Button>Schedule</Button>
      </Center>
    </div>
  );
}
