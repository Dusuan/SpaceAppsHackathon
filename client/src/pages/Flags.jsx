import { Box, Flex } from "@chakra-ui/react";

const Flags=()=>{
    return (
        <Flex bg='purple.100' w={'100%'} h='100%' pt={1}  flexDirection='column'>
            <Box  bg='red.200' 
            w={'100%'}
            h={[24, 32, 40]} 
            p={5} 
            display='flex' 
            alignItems='center' 
            justifyContent='center' 
            color='white'
            fontSize={['24px', '50px', '75px']}
            fontFamily='Roboto' 
            borderRadius='50px'>
                <h1>Trivia</h1>
            </Box>

            <Box  p={5} fontSize={['12px', '28px', '34px']}
            fontFamily='Roboto'  >
                <h1> Dummy text</h1>
            </Box>

            <Flex flexDirection='row' justifyContent='center' width='100%'>
                <Box alignItems='center' p={4} textAlign='center'> Imagen 1 </Box> 
                <Box alignItems='center' p={4} textAlign='center'> Imagen 2 </Box>
            </Flex>
        
            <Flex flexDirection='row' justifyContent='center' width='100%'>
                <Box alignItems='center' p={4} textAlign='center'> Imagen 3 </Box> 
                <Box alignItems='center' p={4} textAlign='center'> Imagen 4 </Box> 
            </Flex>

        </Flex>
        
    );
};


export default Flags;

//nombre
//imagen string-> vinculo a la carpeta en images subcarpeta public en images
//hacer un display de imagen responsive
//usar cuadritos flex 