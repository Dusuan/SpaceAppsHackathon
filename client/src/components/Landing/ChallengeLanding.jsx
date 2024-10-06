import {Flex, Spacer} from "@chakra-ui/react";
import { Box , Text, Image, Button} from "@chakra-ui/react";
import  theme  from "../../utils/theme";
const ChallengeLanding = () => {
    
    return (
        <>
        <Flex direction={"column"} h=" md:100vh">
            <Box className="header p-6" bg={"#E5243B"} h="10%" w="100%">
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
             <Box alignItems="center" position="relative" className="Image hidden md:block">
            <Image className="w-full" opacity={"70%"} src="/odsds.jpg">
            </Image>
            <Button  size={["lg"]}transform="translate(-50%, -50%)" 
 bottom="30%"position="absolute" className="hidden md:block" bgColor="#E5243B" variant="solid">Challenge!  </Button>

            </Box>        
        </Flex>
        </>
        );
    }
    export default ChallengeLanding;
