import {
  createStyles,
  Header,
  Group,
  Button,
  Stack,
  Box,
  HoverCard,
  Burger,
  Drawer,
  UnstyledButton,
  ThemeIcon,
  Text
} from "@mantine/core";
import { MantineLogo } from "@mantine/ds";
import { useDisclosure } from "@mantine/hooks";
import { Avatar } from "@mantine/core";
import {
  IconCode,
  IconTool,
  IconLogout
} from "@tabler/icons";

const useStyles = createStyles((theme) => ({
  link: {
    display: "flex",
    alignItems: "center",
    height: "100%",
    paddingLeft: theme.spacing.md,
    paddingRight: theme.spacing.md,
    textDecoration: "none",
    color: theme.colorScheme === "dark" ? theme.white : theme.black,
    fontWeight: 500,
    fontSize: theme.fontSizes.sm,

    [theme.fn.smallerThan("sm")]: {
      height: 42,
      display: "flex",
      alignItems: "center",
      width: "100%"
    },

    ...theme.fn.hover({
      backgroundColor:
        theme.colorScheme === "dark"
          ? theme.colors.dark[6]
          : theme.colors.gray[0]
    })
  },

  subLink: {
    width: "100%",
    padding: `${theme.spacing.xs}px ${theme.spacing.md}px`,
    borderRadius: theme.radius.md,

    ...theme.fn.hover({
      backgroundColor:
        theme.colorScheme === "dark"
          ? theme.colors.dark[7]
          : theme.colors.gray[0]
    }),

    "&:active": theme.activeStyles
  },

  dropdownFooter: {
    backgroundColor:
      theme.colorScheme === "dark"
        ? theme.colors.dark[7]
        : theme.colors.gray[0],
    margin: -theme.spacing.md,
    marginTop: theme.spacing.sm,
    padding: `${theme.spacing.md}px ${theme.spacing.md * 2}px`,
    paddingBottom: theme.spacing.xl,
    borderTop: `1px solid ${
      theme.colorScheme === "dark" ? theme.colors.dark[5] : theme.colors.gray[1]
    }`
  },

  hiddenMobile: {
    [theme.fn.smallerThan("sm")]: {
      display: "none"
    }
  },

  hiddenDesktop: {
    [theme.fn.largerThan("sm")]: {
      display: "none"
    }
  }
}));

const data = [
  {
    icon: IconCode,
    title: "Documentation",
    href: ""
  },
  {
    icon: IconTool,
    title: "Settings",
    href: "/settings"
  },
  {
    icon: IconLogout,
    title: "Log out",
    href: ""
  }
];


export function HeaderLoggedIn() {
  const [
    drawerOpened,
    { toggle: toggleDrawer, close: closeDrawer }
  ] = useDisclosure(false);
  const { classes } = useStyles();
  const links = data.map((item) => (
    <UnstyledButton key={item.title}>
      <Group noWrap align="flex-start">
        <ThemeIcon size={34} variant="default" radius="md">
          <item.icon size={22} />
        </ThemeIcon>
        <Text size="sm" weight={500} content="a" href={item.href}>
          {item.title}
        </Text>
      </Group>
    </UnstyledButton>
  ));


  return (
    <Box pb={120}>
      <Header height={60} px="md">
        <Group position="apart" sx={{ height: "100%" }}>
          <MantineLogo size={30} />
          <HoverCard
              position="bottom"
              radius="md"
              shadow="md"
              withinPortal
            >
            <HoverCard.Target>
              <Avatar color="cyan" radius="xl">
                MK
              </Avatar>
            </HoverCard.Target>
          <HoverCard.Dropdown sx={{ overflow: "hidden" }}>
          <Stack>
                  {links}
          </Stack>
          </HoverCard.Dropdown>
          </HoverCard>
          <Burger
            opened={drawerOpened}
            onClick={toggleDrawer}
            className={classes.hiddenDesktop}
          />
        </Group>
      </Header>

      <Drawer
        opened={drawerOpened}
        onClose={closeDrawer}
        size="100%"
        padding="md"
        title="Navigation"
        className={classes.hiddenDesktop}
        zIndex={1000000}
      >
        <Avatar color="cyan" radius="xl">
          MK
        </Avatar>
      </Drawer>
    </Box>
  );
}
