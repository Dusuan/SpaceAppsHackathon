import {
  Text,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Flex,
  Image,
  Header,
  Heading,
} from "@chakra-ui/react";
const About = () => {
  return (
    <>
      <Flex direction={"column"} className="py-8 px-4">
        <Card>
          <CardBody display="flex" flexDirection="column" alignItems="center">
            <Image
              justify="center"
              align="center"
              mx="10px"
              my="20px"
              boxSize={{base: "200px", sm: "400px", lg: "600px"}}
              borderRadius="20px"
              objectFit="cover"
              src="/MEGALOGO.png"
              alt="about us"
            />
            <Heading size="sm" fontSize='5xl' my={4} mb={4}>
              ¿Why did we do this project?
            </Heading>
            <Text fontSize='3xl'>
              We did this project to help people to know about the ODS and how
              they can help to achieve them through didactic games. asddf df sdf
            </Text>
          </CardBody>
          <CardFooter></CardFooter>
        </Card>
      </Flex>
    </>
  );
};
export default About;
