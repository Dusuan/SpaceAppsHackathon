import {Flex, Spacer} from "@chakra-ui/react";
import { Box , Text, Image, Button} from "@chakra-ui/react";
import  theme  from "../../utils/theme";
const ChallengeLanding = () => {
    
    return (
        <>
        <Flex direction={"column"} h=" md:100vh">
            <Box className="header p-6" zIndex="10" h="10%" bg="#E5243B" w="100%">
                <Flex className="">
                    <Box w="20%"  className="items-center">
                        <Text></Text>
                    </Box>
                    <Spacer />
                    <Box w="20%">
                    </Box>
                    <Spacer />
                    <Box w="20%">
                    </Box>
                </Flex>
            </Box>

            <Box  className="Imagen md:hidden">
            <a href="a">
            <Image src="/StartChallenge.png" h={["auto, auto, auto, 100vh"]} opacity={"100%"}/>
            </a>
            </Box>
             <Box alignItems="center" position="relative" className="Image hidden md:block">
            <Image className="w-full" h="100vh" opacity={"40%"} src="/odsds.jpg">
            </Image>

             <Text
                        position="absolute"
                        top="40%"
                        left="50%"
                        transform="translate(-50%, -50%)"
                        color="black"
                        fontSize="7xl" // Adjust the font size as needed
                        textAlign="center"
                    >
                        The ODS Challenge
                    </Text>
            <Button  size={["lg"]}transform="translate(-50%, -50%)" 
 bottom="30%"position="absolute" className="hidden md:block" bgColor="#E5243B" variant="solid">Try the challenge!</Button>

            </Box>        
        </Flex>
        </>
        );
    }
    export default ChallengeLanding;
