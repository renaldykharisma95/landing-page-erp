import {
  Box,
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Center,
  Flex,
  Image,
  ListItem,
  OrderedList,
  Text,
} from "@chakra-ui/react";
import { TpricingList } from "../../containers/pricing/data";

const PricingCard = ({
  item,
  idx,
  isMobile,
  isTablet,
}: {
  item: TpricingList;
  idx: number;
  isMobile: boolean;
  isTablet: boolean;
}) => (
  <Card
    key={idx}
    // h={isMobile ? "auto" : "700px"}
    h="700px"
    w={isMobile ? "90%" : isTablet ? "auto" : "412px"}
    maxW="100%"
    position="relative"
    m="auto"
  >
    <CardHeader>
      <Center>
        <Image
          src={item.image}
          alt={item.name}
          maxH={isMobile ? "200px" : "xs"}
          w="auto"
          objectFit="contain"
        />
      </Center>
    </CardHeader>

    <CardBody>
      <Text
        fontSize={isMobile ? "20px" : "24px"}
        textAlign="center"
        fontWeight={700}
      >
        {item.name}
      </Text>
      <OrderedList>
        {item.items.map((item: string, idx: number) => (
          <ListItem key={`item-${idx}`}>{item}</ListItem>
        ))}
      </OrderedList>
    </CardBody>

    <CardFooter
      position="absolute"
      w="100%"
      bottom={0}
      display="flex"
      flexDirection="column"
      gap={2}
      p={2}
      bg="white"
    >
      <Box>
        {idx !== 2 && (
          <Flex pt={3} justify="start" align="baseline" gap={1}>
            <Text>Rp.</Text>
            <Text>{item.price}</Text>
            <Text>/Month</Text>
          </Flex>
        )}
      </Box>
      <Button colorScheme="blue" w="full">
        {idx !== 2 ? "Buy" : "Contact Us"}
      </Button>
    </CardFooter>
  </Card>
);

export default PricingCard;
