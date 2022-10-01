import { Card, Text, Badge, Group } from "@mantine/core";
import SimpleModal from "../general/modal";
import { ContainedView } from "./view";

const data = {
  text:
    "With Fjord Tours you can explore more of the magical fjord landscapes with tours and activities on and around the fjords of Norway",
  title: "Norway Fjord Adventures",
  url:
    "https://images.unsplash.com/photo-1527004013197-933c4bb611b3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=720&q=80",
  href: "https://google.com",
  badge: "New"
};

function SelfAccount() {
  return (
    <Card shadow="sm" p="lg" radius="md" withBorder>
      <Group position="apart" mt="md" mb="xs">
        <Text weight={500}>{data.title}</Text>
        <Badge color="green" variant="light">
          {data.badge}
        </Badge>
      </Group>

      <Text size="sm" color="dimmed" py="sm">
        {data.text}
      </Text>

      <SimpleModal content={<ContainedView />} />
    </Card>
  );
}

export default SelfAccount;
