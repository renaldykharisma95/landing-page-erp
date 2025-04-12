import { Box, Flex, Heading, Text } from "@chakra-ui/react";
import { pricingList, TpricingList } from "./data";
import { useScreenDetector } from "../../hooks/useScreenDetector";
import Slider from "react-slick";
import PricingCard from "../../components/pricingcard/pricingcard";
import { useContext } from "react";
import { ScrollContext } from "../../providers/scroll.providers";

const Pricing = () => {
  const { isMobile, isTablet } = useScreenDetector();
  const contextScroll = useContext(ScrollContext);

  return (
    <Box
      ref={contextScroll?.pricingRef}
      px={isMobile || isTablet ? 8 : 150}
      py={200}
      bg="green.50"
    >
      <Heading as="h2" textAlign="center" pb={4}>
        Pricing
      </Heading>
      <Text px={isMobile || isTablet ? 0 : 100} pb={12} textAlign="center">
        Whether you're a growing business or an established enterprise, we offer
        pricing that fits your scale and needs. Choose the plan that's right for
        you and upgrade anytime as your business grows.
      </Text>
      {isMobile || isTablet ? (
        <>
          <Slider
            {...{
              dots: true,
              infinite: true,
              slidesToShow: 1,
              slidesToScroll: 1,
              autoplay: true,
              speed: 2500,
              autoplaySpeed: 2500,
            }}
          >
            {pricingList.map((item: TpricingList, idx: number) => (
              <PricingCard
                item={item}
                idx={idx}
                isMobile={isMobile}
                isTablet={isTablet}
              />
            ))}
          </Slider>
        </>
      ) : (
        <Flex justifyContent="space-between" alignItems="center" gap={4}>
          {pricingList.map((item: any, idx: number) => (
            <PricingCard
              item={item}
              idx={idx}
              isMobile={isMobile}
              isTablet={isTablet}
            />
          ))}
        </Flex>
      )}
    </Box>
  );
};

export default Pricing;
