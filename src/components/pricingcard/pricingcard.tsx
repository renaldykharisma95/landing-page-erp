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
    h={isTablet ? "700px" : "700px"}
    w={isTablet ? "auto" : isMobile ? "fit-content" : "412px"}
    position="relative"
  >
    <CardHeader>
      <Center>
        <Image
          src={item.image}
          alt={item.name}
          h={isMobile ? "fit-content" : "xs"}
        />
      </Center>
    </CardHeader>
    <CardBody>
      <Text fontSize="24px" textAlign="center" fontWeight={700}>
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
    >
      <Box>
        {idx !== 2 && (
          <Flex pt={3}>
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
