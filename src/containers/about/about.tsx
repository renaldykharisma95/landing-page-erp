import { Box, Flex, Heading, Image, Text, VStack } from "@chakra-ui/react";
import business from "../../assets/business.webp";
import { useScreenDetector } from "../../hooks/useScreenDetector";
import { useContext } from "react";
import { ScrollContext } from "../../providers/scroll.providers";

const About = () => {
  const { isMobile } = useScreenDetector();
  const contextScroll = useContext(ScrollContext);
  return (
    <Box ref={contextScroll?.aboutRef} px={isMobile ? 8 : 150} py={200}>
      <Flex
        justifyContent={isMobile ? "center" : "space-between"}
        flexDirection="column"
        alignItems="center"
      >
        <Image src={business} w="fit-content" h="sm" alt="business-gif" />
        <VStack spacing={2}>
          <Heading as="h4" alignSelf={isMobile ? "center" : "flex-start"}>
            About us
          </Heading>
          <Text>
            We’re on a mission to simplify business management through smart,
            scalable, and intuitive technology. By addressing the challenges of
            disconnected systems and manual workflows, our next-generation ERP
            platform brings everything together in one seamless experience —
            helping businesses operate more efficiently and with greater
            visibility.
          </Text>
          <Text>
            More than just software, our ERP solution is a complete ecosystem
            that centralizes core functions like finance, HR, inventory, supply
            chain, CRM, and project management. With real-time reporting and
            intelligent automation, it empowers teams to reduce redundancies,
            streamline decision-making, and focus on growth.
          </Text>
          <Text>
            What truly sets us apart is adaptability. The platform is modular
            and customizable to suit your unique business needs — whether you're
            a fast-growing startup or a large enterprise. And with cloud access,
            strong security, and smooth integration with your existing tools,
            the transition is simple and future-ready.
          </Text>
        </VStack>
      </Flex>
    </Box>
  );
};

export default About;
