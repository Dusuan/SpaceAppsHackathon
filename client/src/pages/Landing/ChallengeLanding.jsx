import {Flex, Spacer} from "@chakra-ui/react";
import { Box , Text, Image} from "@chakra-ui/react";
const ChallengeLanding = () => {
    return (
        <>
        <Flex direction={"column"} h=" md:100vh">
            <Box className="header p-6" bg="red" h="10%" w="100%">
                <Flex className="">
                    <Box w="20%"  className="items-center">
                        <Text>ODS</Text>
                    </Box>
                    <Spacer />
                    <Box w="20%">
                        <Text>Logo</Text>
                    </Box>
                    <Spacer />
                    <Box w="20%">
                    </Box>
                </Flex>
            </Box>

            <Box className="Imagen md:hidden">
            <a href="a">
            <Image src="/StartChallenge.png" opacity={"100%"}/>
            </a>
            </Box>
            <Box className="Imagen hidden md:block">
            <Image>

            </Image>
            </Box>        
        </Flex>
        </>
        );
    }
    export default ChallengeLanding;
