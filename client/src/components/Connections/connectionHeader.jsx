
import { Box, Flex, Spacer } from '@chakra-ui/react';
import { Heading } from '@chakra-ui/react';
import {InfoOutlineIcon} from "@chakra-ui/icons";
import { Button } from '@chakra-ui/react'
import {HStack } from '@chakra-ui/react'
import { Tooltip } from '@chakra-ui/react'

export default function HeaderConnection(){

    return(
    <Flex color="white">
       <Box as='h1' p='16' >
          <Heading color={'blackAlpha.800'}>Daily challenge : Day ONE</Heading>
        </Box>

       <Spacer />

       <Box p='16'>
        <HStack spacing='24px'>
           <Tooltip>
            <InfoOutlineIcon color="blackAlpha.800" boxSize={6}/>
           </Tooltip>
            <Button colorScheme='blackAlpha'> Regresar al Inicio </Button>
        </HStack>
        
       </Box>

    </Flex>
    );
}