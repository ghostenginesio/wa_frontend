import { createStyles, Card, Group, Text, TextInput } from "@mantine/core";
import { ButtonCopy } from "./copyToClipboard";

const useStyles = createStyles((theme) => ({
  card: {
    backgroundColor:
      theme.colorScheme === "dark" ? theme.colors.dark[7] : theme.white
  },

  item: {
    "& + &": {
      paddingTop: theme.spacing.sm,
      marginTop: theme.spacing.sm,
      borderTop: `1px solid ${
        theme.colorScheme === "dark"
          ? theme.colors.dark[4]
          : theme.colors.gray[2]
      }`
    }
  },

  switch: {
    "& *": {
      cursor: "pointer"
    }
  },

  title: {
    lineHeight: 1
  }
}));

interface SwitchesCardProps {
  title: string;
  description: string;
  data: {
    title: string;
    data: string;
  }[];
}

export function SwitchesCard({ title, description, data }: SwitchesCardProps) {
  const { classes } = useStyles();

  const items = data.map((item) => (
    <Group position="left" className={classes.item} noWrap spacing="xl">
      <Text>{item.title}</Text>
      <TextInput disabled value={item.data} />
      <ButtonCopy copyData={item.data} />
    </Group>
  ));

  return (
    <Card withBorder radius="md" p="xl" className={classes.card}>
      <Text size="lg" className={classes.title} weight={500}>
        {title}
      </Text>
      <Text size="xs" color="dimmed" mt={3} mb="xl">
        {description}
      </Text>
      {items}
    </Card>
  );
}
