
import { Button, SimpleGrid} from "@chakra-ui/react";

import { connectorODS } from "../../utils/conectorODS";


export default function BodyConnection() {

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
              {index + 1}
              
            </Button>
            
          );
        })}
      </SimpleGrid>
    );
  }