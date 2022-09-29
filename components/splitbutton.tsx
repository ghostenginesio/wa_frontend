import { createStyles, Button, Menu, Group, ActionIcon } from "@mantine/core";
import {
  IconTrash,
  IconBookmark,
  IconCalendar,
  IconChevronDown
} from "@tabler/icons";

const useStyles = createStyles((theme) => ({
  button: {
    borderTopRightRadius: 0,
    borderBottomRightRadius: 0
  },

  menuControl: {
    borderTopLeftRadius: 0,
    borderBottomLeftRadius: 0,
    border: 0,
    borderLeft: `1px solid ${
      theme.colorScheme === "dark" ? theme.colors.dark[7] : theme.white
    }`
  }
}));

export function SplitButton() {
  const { classes, theme } = useStyles();
  const menuIconColor =
    theme.colors[theme.primaryColor][theme.colorScheme === "dark" ? 5 : 6];

  return (
    <Group noWrap spacing={0}>
      <Button className={classes.button}>Send</Button>
      <Menu transition="pop" position="bottom-end">
        <Menu.Target>
          <ActionIcon
            variant="filled"
            color={theme.primaryColor}
            size={36}
            className={classes.menuControl}
          >
            <IconChevronDown size={16} stroke={1.5} />
          </ActionIcon>
        </Menu.Target>
        <Menu.Dropdown>
          <Menu.Item
            icon={<IconCalendar size={16} stroke={1.5} color={menuIconColor} />}
          >
            Schedule for later
          </Menu.Item>
          <Menu.Item
            icon={<IconBookmark size={16} stroke={1.5} color={menuIconColor} />}
          >
            Save draft
          </Menu.Item>
          <Menu.Item
            icon={<IconTrash size={16} stroke={1.5} color={menuIconColor} />}
          >
            Delete
          </Menu.Item>
        </Menu.Dropdown>
      </Menu>
    </Group>
  );
}
