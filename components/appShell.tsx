import { useState } from "react";
import {
  AppShell,
  Navbar,
  Header,
  Footer,
  Aside,
  Text,
  MediaQuery,
  Burger,
  useMantineTheme
} from "@mantine/core";
import { NavbarSimpleColored } from "./navbar";
import { TableReviews } from "./tableProgress";
import { HeaderMegaMenu } from "./header";

export default function AppShellDemo() {
  const theme = useMantineTheme();
  const [opened, setOpened] = useState(false);
  const tableData = require("./tableProgress.json")["data"];
  console.log(tableData);
  return (
    <AppShell
      styles={{
        main: {
          background:
            theme.colorScheme === "dark"
              ? theme.colors.dark[8]
              : theme.colors.gray[0]
        }
      }}
      navbarOffsetBreakpoint="sm"
      asideOffsetBreakpoint="sm"
      navbar={<NavbarSimpleColored />}
      header={<HeaderMegaMenu />}
    >
      <TableReviews data={tableData} />
    </AppShell>
  );
}
