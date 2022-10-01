import { Container } from "@mantine/core";
import { HeroText } from "../components/websiteHero";
import { FeaturesCards } from "../components/websiteFeatures";
import { FaqSimple } from "../components/websiteFaqs";
import { GetInTouchSimple } from "../components/wesiteContactUs";

export default function Website() {
  return (
    <Container>
      <HeroText />
      <FeaturesCards />
      <FaqSimple />
      <GetInTouchSimple />
    </Container>
  );
}
