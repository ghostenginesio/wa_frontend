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

export function ContainedSingleInput() {
  // You can add these classes as classNames to any Mantine input, it will work the same
  const { classes } = useStyles();

  return (
    <Stack>
      <TextInput
        label="Verification Code"
        placeholder="123456"
        classNames={classes}
      />
    </Stack>
  );
}
