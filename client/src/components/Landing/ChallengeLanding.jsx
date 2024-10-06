import { Flex, Spacer } from "@chakra-ui/react";
import { Box, Text, Image, Button } from "@chakra-ui/react";
import theme from "../../utils/theme";
const ChallengeLanding = () => {
  return (
    <>
      <Flex direction={"column"} h=" md:100vh">
        <Box className="header p-6" zIndex="10" h="10%" bg="#E5243B" w="100%">
          <Flex className="">
            <Box w="20%" className="items-center">
              <Text></Text>
            </Box>
            <Spacer />
            <Box w="20%"></Box>
            <Spacer />
            <Box w="20%"></Box>
          </Flex>
        </Box>

        <Box className="Imagen md:hidden">
          <a href="a">
            <Image
              src="/StartChallenge.png"
              h={["auto, auto, auto, 100vh"]}
              opacity={"100%"}
            />
          </a>
        </Box>
        <Box
          alignItems="center"
          position="relative"
          className="Image hidden md:block"
        >
          <Image
            className="w-full"
            h="100vh"
            opacity={"50%"}
            src="/odsds.jpg"
          ></Image>

          <Box
            position="absolute"
            top="40%"
            left="50%"
            transform="translate(-50%, -50%)"
            bg="rgba(255, 255, 255, 0.2)" 
            borderRadius="lg"
            backdropFilter="blur(20px)" 
            p={4} 
            boxShadow="lg" 
          >
            <Text
              color="black"
              fontWeight="bold"
              fontSize={["md", "3xl", "4xl", "5xl"]}
              textAlign="center"
            >
              The ODS Challenge
            </Text>
          </Box>
          <Button
            size={["lg"]}
            w={["200px"]}
            transform="translate(-50%, -50%)"
            bottom="30%"
            position="absolute"
            className="hidden md:block"
            bgColor="#E5243B"
            variant="solid"
          >
            Try it!
          </Button>
        </Box>
      </Flex>
    </>
  );
};
export default ChallengeLanding;
