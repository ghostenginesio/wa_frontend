import { Card, Image, Text, Badge, Group } from "@mantine/core";
import { ContainedInputs } from "../schedule/scheduleForm";
import SimpleModal from "./modal";

interface CardProps {
  data: {
    text: string;
    title: string;
    image_url: string;
    href: string;
    tag: string;
  };
}

function CardSimple({ data }: CardProps) {
  return (
    <Card shadow="sm" p="lg" radius="md" withBorder>
      <Card.Section component="a" href={data.href}>
        <Image src={data.image_url} height={160} alt="Image" />
      </Card.Section>

      <Group position="apart" mt="md" mb="xs">
        <Text weight={500}>{data.title}</Text>
        <Badge color="pink" variant="light">
          {data.tag}
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
