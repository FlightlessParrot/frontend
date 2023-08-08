import { Flex } from "@chakra-ui/react";
import Square from "./Square";

export default function NumberSquare({element, currentElement, clickHandler,  children}) {

  return (
    <Flex direction={'column'} className="transition-all" order={element.number}>
      { currentElement===element.id && <Flex justifyContent={'space-around'} className="animate__animated animate__pulse" padding={'12px'}>{children}</Flex>}
      <Flex gap={0}>
       <div style={{backgroundColor:element.color}} className="flex justify-center items-center p-2">
        {element.number}
       </div>
        <Square
            element={element}
          color={element.color}
          clickHandler={clickHandler}
        />
      </Flex>
    </Flex>
  );
}
