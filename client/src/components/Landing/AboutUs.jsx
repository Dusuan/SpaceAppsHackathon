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
            <Heading fontSize={["3xl", "4xl", "5xl"]}my={4} mb={4}>
              ¿Why did we do this project?
            </Heading>
            <Text fontSize={["md, 3xl, 3xl, 3xl, 3xl"]}>
            We created this project to raise awareness about the Sustainable Development Goals (SDGs) and demonstrate how students can contribute to achieving these goals through interactive, educational games. Our goal is to make learning about the SDGs fun and engaging, helping young people understand the importance of global challenges such as climate action, reducing inequalities, and promoting peace and justice. Through these games, we hope to inspire students to take action in their own communities.
            </Text>
          </CardBody>
          <CardFooter></CardFooter>
        </Card>
      </Flex>
    </>
  );
};
export default About;
