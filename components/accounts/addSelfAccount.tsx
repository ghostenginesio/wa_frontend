import { Card, Text, Group } from "@mantine/core";
import StepperSimple from "./stepper";
import SimpleModal from "../general/modal";

const data = {
  text: "Add a new account",
  title: "Add a new account",
  url:
    "https://images.unsplash.com/photo-1527004013197-933c4bb611b3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=720&q=80",
  href: "https://google.com"
};

function AddSelfAccount() {
  return (
    <Card shadow="sm" p="lg" radius="md" withBorder>
      <Group position="center" mt="md" mb="xs">
        <Text weight={500}>{data.title}</Text>
      </Group>

      <SimpleModal content={<StepperSimple />} />
    </Card>
  );
}

export default AddSelfAccount;
