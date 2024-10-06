
import { Button, SimpleGrid} from "@chakra-ui/react";

import {getTopics , selectWords} from "../../functions/GeneralFunctions"

import conectorODS from "../../utils/conectorODS";

export default function BodyConnection() {

  const topics = getTopics()

  const selectedWords = selectWords(topics,conectorODS);
  let array=[0,1,2,3,4,5,6,7,8,9,0,11,12,13,14,15];
  array.sort(() => Math.random() - 0.5);
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