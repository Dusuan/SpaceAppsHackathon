
import { Button, Box, Flex} from '@chakra-ui/react'

export default function FooterConnection() {
    return ( 
        <Flex color = "white" justify={'center'} align={'center'}>
            
            <Box p = {7}>
                <Button> Hint </Button>
            </Box>

            <Box p = {7}>
                <Button> Submit </Button>
            </Box>

        </Flex>
    )
}