
import { Box, Flex, Spacer } from '@chakra-ui/react';
import { Heading } from '@chakra-ui/react';
import {InfoOutlineIcon} from "@chakra-ui/icons";
import { Button } from '@chakra-ui/react'
import {HStack } from '@chakra-ui/react'
import { Tooltip } from '@chakra-ui/react'
import {Link } from 'react-router-dom'
export default function HeaderConnection(){

    return(
    <Flex color="white" align={'center'} justify={'space-between'} >
       <Box as='h1' p='16' >
          <Heading color={'blackAlpha.800'} _hidden={{base: true , md: false} }>Daily challenge : Day ONE</Heading>
        </Box>

       <Spacer />

       <Box p='16'>
        <HStack spacing='24px' >
           <Tooltip label = 'Info del Juego Proximamnete' isDisabled = {{base : true, md: false}}>

            <InfoOutlineIcon color="blackAlpha.800" boxSize={6} />

           </Tooltip>
           <Link to="/Games">
            <Button colorScheme='blackAlpha'> Regresar al Inicio </Button>
            </Link>
        </HStack>
        
       </Box>

    </Flex>
    );
}