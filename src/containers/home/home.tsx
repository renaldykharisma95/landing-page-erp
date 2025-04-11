import { Box, Flex, Heading, Image } from "@chakra-ui/react";
import userpie from "../../assets/userpie.webp";
import { blobBottomView, blobTopView } from "./home.styles";
import { useScreenDetector } from "../../hooks/useScreenDetector";

const Home = () => {
  const { isMobile } = useScreenDetector();
  return (
    <Box position="relative" overflow="hidden" minH="full" px={3}>
      <Box {...blobTopView} />
      <Box {...blobBottomView} />
      {isMobile ? (
        <Flex
          direction="column"
          justify="center"
          align="center"
          textAlign="center"
          gap={6}
          minH="100vh"
          px={4}
        >
          <Heading as="h1" fontSize={20}>
            Streamline Your Business with Smart ERP Solutions
          </Heading>
          <Heading as="h2" fontSize={16}>
            Our all-in-one ERP platform helps you manage operations, finances,
            inventory, HR, and customer relations — all from a single,
            integrated dashboard. Boost productivity, gain real-time insights,
            and scale confidently with a solution built for modern businesses.
          </Heading>
        </Flex>
      ) : (
        <>
          <Box
            style={{
              position: "absolute",
              top: "20%",
              right: "10%",
              width: "640px",
            }}
          >
            <Heading as="h2" fontSize={17}>
              Our all-in-one ERP platform helps you manage operations, finances,
              inventory, HR, and customer relations — all from a single,
              integrated dashboard. Boost productivity, gain real-time insights,
              and scale confidently with a solution built for modern businesses.
            </Heading>
          </Box>
          <Box style={{ position: "absolute", bottom: "45%" }}>
            <Heading as="h1" fontSize={20}>
              Streamline Your Business with Smart ERP Solutions
            </Heading>
          </Box>
        </>
      )}
      <Box
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
        }}
      >
        <Image
          src={userpie}
          alt="userpie"
          w="fit-content"
          h={isMobile ? 52 : 300}
        />
      </Box>
    </Box>
  );
};

export default Home;
