import { useState } from "react";
import { createStyles, Navbar, Text } from "@mantine/core";
import {
  IconBellRinging,
  IconKey,
  IconSettings,
  IconDashboard,
  IconAddressBook,
  IconCalendarTime,
  IconLogout
} from "@tabler/icons";
import { Link } from "react-router-dom";
import { ProgressCardColored } from "./usageStats";

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
  { link: "/dashboard", label: "Dashboard", icon: IconDashboard },
  { link: "/schedule", label: "Schedule", icon: IconCalendarTime },
  { link: "/contacts", label: "Contacts", icon: IconAddressBook },
  { link: "/api_management", label: "API Keys", icon: IconKey },
  { link: "/notifications", label: "Notifications", icon: IconBellRinging },
  { link: "/settings", label: "Settings", icon: IconSettings }
];

interface NavigationProps {
  current: string;
}

export function NavbarSimpleColored({ current }: NavigationProps) {
  const { classes, cx } = useStyles();
  const [active, setActive] = useState(current);
  const usage = {
    allocated: 500,
    used: 130,
    percentage: 26
  };

  const links = data.map((item) => (
    <div
      onClick={(event) => {
        event.preventDefault();
        setActive(item.label);
      }}
    >
      <Text
        component={Link}
        to={item.link}
        className={cx(classes.link, {
          [classes.linkActive]: item.label === active
        })}
      >
        {item.label}
      </Text>
    </div>
  ));

  return (
    <Navbar height={700} width={{ sm: 300 }} p="md" className={classes.navbar}>
      <Navbar.Section grow>{links}</Navbar.Section>
      <Navbar.Section>
        <ProgressCardColored usage={usage} />
      </Navbar.Section>
      <Navbar.Section className={classes.footer}>
        <a href="/logout" className={classes.link}>
          <IconLogout className={classes.linkIcon} stroke={1.5} />
          <span>Logout</span>
        </a>
      </Navbar.Section>
    </Navbar>
  );
}
