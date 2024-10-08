import { Button, ButtonGroup, Card, CardBody, CardFooter, Divider, Heading, Image, Stack, Text } from '@chakra-ui/react';
import {Link} from 'react-router-dom';
const Game = ({img, name , gameDescription, route, button}) => {
    return (
        <>
        <Card w="70%" className='my-10'>
  <CardBody>
    <Image
      src={img}
      alt='game'
      borderRadius='lg'
    />
    <Stack mt='6' spacing='3'>
      <Heading size='md'>{name}</Heading>
      <Text>
        {gameDescription}
      </Text>
      <Text color='blue.600' fontSize='2xl'>
      </Text>
    </Stack>
  </CardBody>
  <Divider />
  <CardFooter justify="center" align="center">
    <Link to={route}>
    
     {button &&  <Button variant='solid' bg="#E5243B">
        Play now
      </Button> } 
      </Link>
  </CardFooter>
</Card>
        </>
    );
}

export default Game;