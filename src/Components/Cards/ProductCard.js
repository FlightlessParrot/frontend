import {
  Box,
  Button,
  Center,
  Flex,
  List,
  ListIcon,
  ListItem,
} from "@chakra-ui/react";
import { CheckCircleIcon } from "@chakra-ui/icons";
import GreenPrice from "../Price/GreenPrice";
import DiscountPrice from "../Price/DiscountPrice";
export default function ProductCard({
  name,
  price,
  tests,
  license_duration,
  discount_price,
  id,
  OnClickReturnId,
  buttonText = "Kupuję",
  lowest_price
}) {
  const listItems = tests.map((test) => (
    <ListItem key={test.id}>
      <Flex alignItems={"center"}>
        <ListIcon as={CheckCircleIcon} color="green.500" />
        <span>{test.name}</span>
      </Flex>
    </ListItem>
  ));

  return (
    <div className="w-62 p-4 rounded-lg hover:bg-sea hover:shadow-lg border-2 shadow-md  shadow-black border-sea">
      <Center>{name} </Center>
      <Center>
        {" "}
        <div className="w-3/4 h-1 rounded mt-6 bg-sea"></div>
      </Center>
      <Box my="20px">
        <div className="my-16">
        <div className="m-6 my-8  relative top-0 pr-12 flex justify-end ">
          <GreenPrice
            additionalClassNames={
              discount_price
                ? "hover:text-transparent hover:border-slate-500 transition-all line-through"
                : " "
            }
          >
            {price.toFixed(2)}
          </GreenPrice>
          {discount_price && (
            <>
              <strong className="absolute left-0 top-3 rotate-12 shadow hover:rounded-tr-full shadow-black bg-gray-200 rounded p-2 text-red-600 transition-all">
                PROMOCJA
              </strong>
              <DiscountPrice>{discount_price.toFixed(2)}</DiscountPrice>
            </>
          )}
        </div>
        {lowest_price &&<div>
          <p className="text-slate-400 ">Najniższa cena z ostatnich 30dni: {lowest_price.toFixed(2)}zł</p>
        </div>}</div>
        <p className="bold-sans-serif text-lg mt-6">
          Subskrypcja wygaśnie {license_duration}
        </p>
      </Box>
      <div className="m-2">
        <Box my={[2, 4, 8]}>
          <b className="bold-sans-serif">Subskrypcja zawiera pakiety:</b>
          <List m={[2, 4]}>{listItems}</List>
        </Box>
      </div>
      {OnClickReturnId !== undefined && (
        <Center my="30px">
          <Button colorScheme="green" onClick={(e) => OnClickReturnId(id)}>
            {buttonText}
          </Button>
        </Center>
      )}
    </div>
  );
}
