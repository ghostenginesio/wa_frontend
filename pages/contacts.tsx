import { useState } from "react";
import { AppShell, useMantineTheme } from "@mantine/core";
import { NavbarSimpleColored } from "../components/general/navbar";
import { HeaderLoggedIn } from "../components/general/headerLoggedIn";
import ContactsTable from "../components/contacts/editableTable";

const contacts = require("../components/contacts/editableTable.json")["data"];

export default function ContactsPage() {
  const theme = useMantineTheme();
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
      navbar={<NavbarSimpleColored current="Contacts" />}
      header={<HeaderLoggedIn />}
    >
      <ContactsTable data={contacts}/>
    </AppShell>
  );
}
