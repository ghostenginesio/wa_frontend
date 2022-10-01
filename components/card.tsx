import { Card, Image, Text, Badge, Group } from "@mantine/core";
import { ContainedInputs } from "./scheduleForm";
import SimpleModal from "./modal";

const data = {
  text:
    "With Fjord Tours you can explore more of the magical fjord landscapes with tours and activities on and around the fjords of Norway",
  title: "Norway Fjord Adventures",
  url:
    "https://images.unsplash.com/photo-1527004013197-933c4bb611b3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=720&q=80",
  href: "https://google.com"
};

function CardSimple() {
  return (
    <Card shadow="sm" p="lg" radius="md" withBorder>
      <Card.Section component="a" href={data.href}>
        <Image src={data.url} height={160} alt="Image" />
      </Card.Section>

      <Group position="apart" mt="md" mb="xs">
        <Text weight={500}>{data.title}</Text>
        <Badge color="pink" variant="light">
          On Sale
        </Badge>
      </Group>

      <Text size="sm" color="dimmed" py="sm">
        {data.text}
      </Text>

      <SimpleModal content={<ContainedInputs />} />
    </Card>
  );
}

export default CardSimple;
