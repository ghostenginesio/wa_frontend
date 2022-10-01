import { Container, createStyles, Space } from "@mantine/core";
import { HeroText } from "../components/website/websiteHero";
import { FeaturesCards } from "../components/website/websiteFeatures";
import { FaqSimple } from "../components/website/websiteFaqs";
import { GetInTouchSimple } from "../components/website/wesiteContactUs";
import { HeaderMegaMenu } from "../components/website/websiteHeader";
import { EmailBanner } from "../components/website/websiteBanner";
import { FooterCentered } from "../components/website/websiteFooter";

const links = require("../components/website/links.json")["links"];

export default function Website() {
  return (
    <Container py="md">
      <HeaderMegaMenu />
      <div style={{ display: "flex" }}>
        <HeroText />
      </div>
      <Space h="xl" />
      <FeaturesCards />
      <EmailBanner />
      <FaqSimple />
      <GetInTouchSimple />
      <FooterCentered links={links} />
    </Container>
  );
}

// Carousal Try
// export default function Website() {
//   const { classes } = useStyles();
//   const autoplay = useRef(Autoplay({ delay: 2000 }));

//   return (
//     <Container py="md">
//       <HeaderMegaMenu />
//       <Carousel
//         orientation="vertical"
//         sx={{ maxWidth: "max" }}
//         mx="auto"
//         withIndicators
//         height={"max"}
//         plugins={[autoplay.current]}
//         onMouseEnter={autoplay.current.stop}
//         onMouseLeave={autoplay.current.reset}
//         classNames={classes}
//       >
//         <Carousel.Slide>
//           <HeroText />
//         </Carousel.Slide>
//         <Carousel.Slide>
//           <FeaturesCards />
//         </Carousel.Slide>
//         <Carousel.Slide>
//           <EmailBanner />
//         </Carousel.Slide>
//         <Carousel.Slide>
//           <FaqSimple />
//         </Carousel.Slide>
//         <Carousel.Slide>
//           <GetInTouchSimple />
//         </Carousel.Slide>
//       </Carousel>
//     </Container>
//   );
// }
