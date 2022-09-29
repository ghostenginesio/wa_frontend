import { useState } from "react";
import { createStyles, Navbar, Group, Code, Anchor } from "@mantine/core";
import {
  IconBellRinging,
  IconKey,
  IconSettings,
  IconDashboard,
  IconAddressBook,
  IconCalendarTime,
  IconMail,
  IconLogout
} from "@tabler/icons";
import { MantineLogo } from "@mantine/ds";
import { Link } from "react-router-dom";

const useStyles = createStyles((theme, _params, getRef) => {
  const icon = getRef("icon");
  return {
    navbar: {
      backgroundColor: theme.fn.variant({
        variant: "filled",
        color: theme.primaryColor
      }).background
    },

    version: {
      backgroundColor: theme.fn.lighten(
        theme.fn.variant({ variant: "filled", color: theme.primaryColor })
          .background!,
        0.1
      ),
      color: theme.white,
      fontWeight: 700
    },

    header: {
      paddingBottom: theme.spacing.md,
      marginBottom: theme.spacing.md * 1.5,
      borderBottom: `1px solid ${theme.fn.lighten(
        theme.fn.variant({ variant: "filled", color: theme.primaryColor })
          .background!,
        0.1
      )}`
    },

    footer: {
      paddingTop: theme.spacing.md,
      marginTop: theme.spacing.md,
      borderTop: `1px solid ${theme.fn.lighten(
        theme.fn.variant({ variant: "filled", color: theme.primaryColor })
          .background!,
        0.1
      )}`
    },

    link: {
      ...theme.fn.focusStyles(),
      display: "flex",
      alignItems: "center",
      textDecoration: "none",
      fontSize: theme.fontSizes.sm,
      color: theme.white,
      padding: `${theme.spacing.xs}px ${theme.spacing.sm}px`,
      borderRadius: theme.radius.sm,
      fontWeight: 500,

      "&:hover": {
        backgroundColor: theme.fn.lighten(
          theme.fn.variant({ variant: "filled", color: theme.primaryColor })
            .background!,
          0.1
        )
      }
    },

    linkIcon: {
      ref: icon,
      color: theme.white,
      opacity: 0.75,
      marginRight: theme.spacing.sm
    },

    linkActive: {
      "&, &:hover": {
        backgroundColor: theme.fn.lighten(
          theme.fn.variant({ variant: "filled", color: theme.primaryColor })
            .background!,
          0.15
        ),
        [`& .${icon}`]: {
          opacity: 0.9
        }
      }
    }
  };
});

const data = [
  { link: "/", label: "Dashboard", icon: IconDashboard },
  { link: "/schedule", label: "Schedule", icon: IconCalendarTime },
  { link: "/inbox", label: "Inbox", icon: IconMail },
  { link: "/contacts", label: "Contacts", icon: IconAddressBook },
  { link: "/api_management", label: "API Keys", icon: IconKey },
  { link: "/notifications", label: "Notifications", icon: IconBellRinging },
  { link: "/settings", label: "Settings", icon: IconSettings }
];

export function NavbarSimpleColored() {
  const { classes, cx } = useStyles();
  const [active, setActive] = useState("Dashboard");

  const links = data.map((item) => (
    <div>
      <a
        className={cx(classes.link, {
          [classes.linkActive]: item.label === active
        })}
        href={item.link}
        key={item.label}
        onClick={(event) => {
          event.preventDefault();
          setActive(item.label);
        }}
      >
        <item.icon className={classes.linkIcon} stroke={1.5} />
        <span>{item.label}</span>
      </a>
    </div>
  ));

  // const links = data.map((item) => (
  //   <div>
  //     <Anchor component={Link} to={item.link} key={item.label} color="dark">
  //       <item.icon className={classes.linkIcon} stroke={1.5} />
  //       <span>{item.label}</span>
  //     </Anchor>
  //   </div>
  // ));

  return (
    <Navbar height={700} width={{ sm: 300 }} p="md" className={classes.navbar}>
      <Navbar.Section grow>
        <Group className={classes.header} position="apart">
          <MantineLogo size={28} inverted />
          <Code className={classes.version}>v3.1.2</Code>
        </Group>
        {links}
      </Navbar.Section>

      <Navbar.Section className={classes.footer}>
        <a
          href="#"
          className={classes.link}
          onClick={(event) => event.preventDefault()}
        >
          <IconLogout className={classes.linkIcon} stroke={1.5} />
          <span>Logout</span>
        </a>
      </Navbar.Section>
    </Navbar>
  );
}
