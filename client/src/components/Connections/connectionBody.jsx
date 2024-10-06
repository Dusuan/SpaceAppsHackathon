
import { Button, SimpleGrid} from "@chakra-ui/react";

import {getTopics , selectWords} from "../../functions/GeneralFunctions"

import conectorODS from "../../utils/conectorODS";

export default function BodyConnection() {

  const topics = getTopics()

  selectWords(topics,conectorODS);
  const selectedWords = selectWords(topics,conectorODS);


    return (
      <SimpleGrid columns={4} spacing={4} justifyContent={'center'} alignItems="center" p={[2, 7, 10]}>
        {Array.from({ length: 16 }, (_, index) => {
          return (
            <Button
              key={index}
              bg= "blackAlpha.800"
              height="100px"
              color="white"
              _hover={{ bg: 'teal.600' }}
            >
              {selectWords[[]]}
              
            </Button>
            
          );
        })}
      </SimpleGrid>
    );
}