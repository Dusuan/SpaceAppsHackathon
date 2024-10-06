import React from 'react';
import FlagSquare from './FlagSquare';
import { useState } from 'react';
import { Box } from '@chakra-ui/react';

const FlagSquareTest = () => {
    const [vidas, setVidas] = useState(3);
    const correcto = true;

    return (
        <Box>
            <FlagSquare odsActual="Fin de la pobreza" vidas={vidas} setVidas={setVidas} correcto={correcto} />   
        </Box>
        
    );
};

export default FlagSquareTest;