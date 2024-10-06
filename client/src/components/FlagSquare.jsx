import { Box, Flex, Image, Text } from '@chakra-ui/react';
import React from 'react';
import { ods } from '../utils/ods';
import theme from '../utils/theme';
import { odsImgPath } from '../utils/odsImgPath';

const FlagSquare = ({odsActual, onClick}) => {

    return (
        <Flex
            onClick={onClick}
            cursor="pointer"
            justifyContent="center"
            alignItems="center"
            bgColor={theme.colors[odsActual]}
        >
            <Box
                width="250px"
            >
                <Image 
                    src={process.env.PUBLIC_URL + odsImgPath[odsActual]}
                    alt={odsActual}
                    width="250px"
                />
                <Text>
                    {odsActual}
                </Text>
            </Box>
        </Flex>
    );
};

export default FlagSquare;