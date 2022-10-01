import { Container, Grid, Space } from "@mantine/core";
import { FaqSimple } from "../components/website/websiteFaqs";
import { GetInTouchSimple } from "../components/website/wesiteContactUs";
import { HeaderMegaMenu } from "../components/website/websiteHeader";
import { FooterCentered } from "../components/website/websiteFooter";
import { PricingCard } from "../components/website/websitePricing";

const links = require("../components/website/links.json")["links"];

const plans = [
  {
    features: [
      {
        label: "string"
      },
      {
        label: "string"
      }
    ],
    details: {
      label: "Starter",
      offer: "50% discount",
      description: "Best suited for Individuals",
      price: "$0",
      duration: "per month"
    }
  },
  {
    features: [
      {
        label: "string"
      },
      {
        label: "string"
      }
    ],
    details: {
      label: "Standard",
      offer: "50% discount",
      description: "For teams",
      price: "$10",
      duration: "per month"
    }
  },
  {
    features: [
      {
        label: "string"
      },
      {
        label: "string"
      }
    ],
    details: {
      label: "Enterprise",
      offer: null,
      description: "Best service",
      price: "Custom",
      duration: "License based"
    }
  }
];

const items = plans.map((item) => (
  <Grid.Col span={4} style={{ maxWidth: 380 }}>
    <PricingCard features={item.features} details={item.details} />
  </Grid.Col>
));

export default function Pricing() {
  return (
    <Container py="md">
      <HeaderMegaMenu />
      <Grid grow>{items}</Grid>
      <Space h="xl" />
      <FaqSimple />
      <GetInTouchSimple />
      <FooterCentered links={links} />
    </Container>
  );
}
