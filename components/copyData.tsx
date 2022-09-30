import { CopyButton, Button } from "@mantine/core";

function CopyButtonSimple() {
  return (
    <CopyButton value="https://mantine.dev">
      {({ copied, copy }) => (
        <Button color={copied ? "teal" : "blue"} onClick={copy}>
          {copied ? "Copied" : "Copy"}
        </Button>
      )}
    </CopyButton>
  );
}
