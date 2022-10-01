import { Container } from "@mantine/core";
import { HeroText } from "../components/website/websiteHero";
import { FeaturesCards } from "../components/website/websiteFeatures";
import { FaqSimple } from "../components/website/websiteFaqs";
import { GetInTouchSimple } from "../components/website/wesiteContactUs";
import { HeaderMegaMenu } from "../components/website/websiteHeader";
import { EmailBanner } from "../components/website/websiteBanner";

export default function Website() {
  return (
    <Container py="md">
      <HeaderMegaMenu />
      <HeroText />
      <FeaturesCards />
      <EmailBanner />
      <FaqSimple />
      <GetInTouchSimple />
    </Container>
  );
}
