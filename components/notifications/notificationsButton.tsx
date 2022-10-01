import { Card, Text, Badge, Group, Stack } from "@mantine/core";

interface NotificationProps {
  data: {
    title: string;
    text: string;
    status: string;
  }[];
}

export default function NotificationsCard({ data }: NotificationProps) {
  const items = data.map((item) => (
    <Card shadow="sm" p="md" radius="sm" withBorder>
      <Group position="apart" mt="md" mb="xs">
        <Text weight={500}>{item.title}</Text>
        <Text size="sm" color="dimmed" py="sm">
          {item.text}
        </Text>
        <Badge
          color={item.status === "Completed" ? "green" : "red"}
          variant="light"
        >
          {item.status}
        </Badge>
      </Group>
    </Card>
  ));

  return <Stack>{items}</Stack>;
}
