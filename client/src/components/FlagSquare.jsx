import { Flex, Image, Text } from '@chakra-ui/react';
import React from 'react';
import theme from '../utils/theme';
import { odsImgPath } from '../utils/odsImgPath';

const FlagSquare = ({odsActual, onClick, hardMode}) => {

    return (
        <Flex
            onClick={onClick}
            cursor="pointer"
            justifyContent="space-between"
            alignItems="center"
            bgColor={theme.colors[odsActual]}
            flexDirection={"column"}
            w={["120px", "250px"]}
            h={["175px", "300px"]}
            borderRadius={"10px"}
            boxShadow={"md"}
            border={"5px solid black"}
        >
                <Image 
                    src={process.env.PUBLIC_URL + odsImgPath[odsActual]}
                    alt={odsActual}
                    width={["120px", "250px"]}
                />
                <Text
                    fontSize={["0.75rem", "l"]}
                    fontWeight={"bold"}
                    color={"white"}
                    h={["55px", "50px"]}
                    textAlign={"center"}
                    justifyContent={"center"}
                    alignItems={"center"}
                    w={"95%"}
                    display={(hardMode) ? "none" : "flex"}
                >
                    {odsActual}
                </Text>
        </Flex>
    );
};

export default FlagSquare;