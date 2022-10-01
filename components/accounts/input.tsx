import { Stack, createStyles, TextInput } from "@mantine/core";

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
    <Stack>
      <TextInput
        label="Account Name"
        placeholder="John Joe"
        classNames={classes}
      />
      <TextInput
        label="Phone Number"
        placeholder="+1532956988"
        classNames={classes}
      />
      <TextInput
        label="Token"
        placeholder="AefFjGHwnljwoje24j234wj"
        classNames={classes}
      />
    </Stack>
  );
}
