import { createStyles, Button, Center, TextInput } from "@mantine/core";

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

  return (
    <div>
      <TextInput placeholder="Account name" label="Account name" withAsterisk />
      <TextInput placeholder="Phone number" label="Phone number" withAsterisk />
      <TextInput
        placeholder="Whatsapp Business Account ID"
        label="Whatsapp Business Account ID"
        withAsterisk
      />
      <TextInput
        placeholder="Cloud API Key"
        label="Cloud API Key"
        withAsterisk
      />

      <Center py="sm">
        <Button>Verify</Button>
      </Center>
    </div>
  );
}
