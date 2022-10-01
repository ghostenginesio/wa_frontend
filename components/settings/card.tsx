import { createStyles, Card, Text, Grid, TextInput } from "@mantine/core";
import { ButtonCopy } from "../general/copyToClipboard";

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
}

export function SettingsCard({ title, description }: SwitchesCardProps) {
  const { classes } = useStyles();

  return (
    <Card withBorder radius="md" p="xl" className={classes.card}>
      <Grid position="left" noWrap spacing="xl">
        <Grid.Col span={4} style={{ maxWidth: 380 }}>
          <Text>{title}</Text>
        </Grid.Col>
        <Grid.Col span={4} style={{ maxWidth: 380 }}>
          <TextInput disabled value={description} />
        </Grid.Col>
        <Grid.Col span={4} style={{ maxWidth: 380 }}>
          <ButtonCopy copyData={description} />
        </Grid.Col>
      </Grid>
    </Card>
  );
}
