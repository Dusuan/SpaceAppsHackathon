import { Box, Flex } from '@chakra-ui/react';
import React from 'react';
import { ods } from '../utils/ods';
import theme from '../utils/theme';

const FlagSquare = ({odsActual, vidas, setVidas, correcto}) => {

    //Agarra un nombre de la ods y la busca en la db saca la info y la utilliza para crear un cuadro
    return (
        <Flex
            w="100px"
            h="100px"
            bgColor={theme.colors[odsActual]}
        >
            <Box>
                Descripcion
                {ods[odsActual]}
            </Box>
        </Flex>
    );
};

export default FlagSquare;