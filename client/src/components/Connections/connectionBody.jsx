import { Button, SimpleGrid} from "@chakra-ui/react";
import {getTopics , selectWords, words} from "../../functions/GeneralFunctions"
import conectorODS from "../../utils/conectorODS";
import {Box, Flex} from '@chakra-ui/react'
import ConnectorAnswers from "../../src/ConnectorAnswers"
import { Heading } from '@chakra-ui/react';
import {InfoOutlineIcon} from "@chakra-ui/icons";
import {HStack } from '@chakra-ui/react'
import { Tooltip } from '@chakra-ui/react'
import { CircularProgress} from '@chakra-ui/react'

import {Link } from 'react-router-dom'

export default function BodyConnection(selectedButtons, setSelectedButtons, isDisabled, setIsDisabled, score, setScore) {
  const topics = getTopics();
  const selectedWords = selectWords(topics, conectorODS);
  const wordsFinal = words(selectedWords);
  const [arrRespuestas, setArrRespuestas] = useState([]);

  let array = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
  array.sort(() => Math.random() - 0.5);

  return (
    <Flex direction="column">
      <Flex direction="column"  >
          <Flex color="white" align={'center'} justify={'space-between'} >
              <Box as='h1' p='16' >
                <Heading color={'blackAlpha.800'} _hidden={{base: true , md: false} }>Daily challenge : Day ONE</Heading>
              </Box>

              <Box  p='16'>
                <HStack spacing='24px' >
                    <Tooltip label = 'Info del Juego Proximamnete' isDisabled = {{base : true, md: false}}>

                      <InfoOutlineIcon color="blackAlpha.800" boxSize={6} />

                    </Tooltip><Link to="/Games">
                      <Button colorScheme='blackAlpha'> Regresar al Inicio </Button>
                      </Link>
                </HStack>
              </Box>
              
          </Flex>

          <Flex>
              <Box justify={'space-between'} pl="20px" ml="20px">
                <CircularProgress value={score} />
              </Box>
          </Flex>
          
        </Flex>

      <SimpleGrid columns={4} spacing={4} justifyContent="center" alignItems="center" p={[2, 7, 10]}>
        {Array.from({ length: 16 }, (_, index) => {
          const isSelected = selectedButtons.includes(wordsFinal[array[index]]);
          return (
            <Button
  key={index}
  isDisabled={selectedButtons.includes(wordsFinal[array[index]])}  // Deshabilitar si ya está en selectedButtons
  bg={selectedButtons.includes(wordsFinal[array[index]]) ? 'teal.600' : 'blackAlpha.800'}  // Cambiar color si está seleccionado
  height="100px"
  color="white"
  _hover={{ bg: 'teal.600' }}
  onClick={() => {
    // Solo agrega si no está en selectedButtons
    if (!selectedButtons.includes(wordsFinal[array[index]])) {
      setSelectedButtons(prev => [...prev, wordsFinal[array[index]]]);
      arrRespuestas.push(wordsFinal[array[index]]);  // Actualiza arrRespuestas con la selección
    }
  }}
>
  {wordsFinal[array[index]]}
</Button>
          );
        })}
      </SimpleGrid>
      
      <Flex color = "white" justify={'center'} align={'center'}>
              <Box p = {7}>
                  <Button onClick={() => ConnectorAnswers(arrRespuestas,selectedWords, setSelectedButtons, setIsDisabled, setScore)}> Submit </Button>
              </Box>
        </Flex>
    </Flex>
  );
}

