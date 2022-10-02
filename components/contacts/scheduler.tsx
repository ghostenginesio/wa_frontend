import { useState } from "react";
import { AppShell, Grid, Stack, useMantineTheme } from "@mantine/core";
import { NavbarSimpleColored } from "../general/navbar";
import { HeaderLoggedIn } from "../general/headerLoggedIn";
import CardSimple from "../general/card";

const data = [
  {
    text:
      "With Fjord Tours you can explore more of the magical fjord landscapes with tours and activities on and around the fjords of Norway",
    title: "Norway Fjord Adventures",
    image_url:
      "https://images.freeimages.com/images/large-previews/d4f/www-1242368.jpg",
    href: "https://google.com",
    tag: "On Sale"
  },
  {
    text:
      "With Fjord Tours you can explore more of the magical fjord landscapes with tours and activities on and around the fjords of Norway",
    title: "Norway Fjord Adventures",
    image_url:
      "https://images.unsplash.com/photo-1527004013197-933c4bb611b3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=720&q=80",
    href: "https://google.com",
    tag: "On Sale"
  },
  {
    text:
      "With Fjord Tours you can explore more of the magical fjord landscapes with tours and activities on and around the fjords of Norway",
    title: "Norway Fjord Adventures",
    image_url:
      "https://images.unsplash.com/photo-1527004013197-933c4bb611b3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=720&q=80",
    href: "https://google.com",
    tag: "On Sale"
  }  
];

const items = data.map((item) => (
  <Grid.Col span={4} style={{ maxWidth: 380 }}>
    <CardSimple data={item} />
  </Grid.Col>
));

export default function Scheduler() {
  return (
      <Stack>
        <Grid grow>{items}</Grid>
      </Stack>
  );
}
