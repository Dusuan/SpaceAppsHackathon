import { Card, CardHeader, CardBody, CardFooter, Flex , Image   } from '@chakra-ui/react'
const About = () => {
return(
 <>
 <Flex direction={"column"} className='py-8'>
    <Card>
        <CardBody>
        <Image src="/odsglobe.jpeg" alt="about us" />
        </CardBody>
        <CardFooter>
        
        </CardFooter>
    </Card>
 </Flex>
 </>
);
}
export default About;