import { Text, Progress, Card, createStyles } from "@mantine/core";

const useStyles = createStyles((theme) => ({
  card: {
    backgroundColor: theme.fn.primaryColor()
  },

  title: {
    color: theme.fn.rgba(theme.white, 0.65)
  },

  stats: {
    color: theme.white
  },

  progressBar: {
    backgroundColor: theme.white
  },

  progressTrack: {
    backgroundColor: theme.fn.rgba(theme.white, 0.4)
  }
}));

interface ProgressProps {
  usage: {
    allocated: number;
    used: number;
    percentage: number;
  };
}

export function ProgressCardColored({ usage }: ProgressProps) {
  const { classes } = useStyles();
  return (
    <Card withBorder radius="md" p="xl" className={classes.card}>
      <Text
        size="xs"
        transform="uppercase"
        weight={700}
        className={classes.title}
      >
        Usage
      </Text>
      <Text size="lg" weight={500} className={classes.stats}>
        {usage.used} / {usage.allocated}
      </Text>
      <Progress
        value={usage.percentage}
        mt="md"
        size="lg"
        radius="xl"
        classNames={{
          root: classes.progressTrack,
          bar: classes.progressBar
        }}
      />
    </Card>
  );
}
