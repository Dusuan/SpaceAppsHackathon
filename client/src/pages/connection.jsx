import HeaderConnection from "../components/Connections/connectionHeader";
import BodyConnection from "../components/Connections/connectionBody"


import { Flex, Box} from '@chakra-ui/react';
import FooterConnection from "../components/Connections/connectionFooter";

export default function Connection(){


    return(
        <Flex direction={"column"}>
            <Box>
                <HeaderConnection></HeaderConnection>
            </Box>

            <Box>
                <BodyConnection ></BodyConnection>
            </Box>

            <Box>
                <FooterConnection></FooterConnection>
            </Box>
            
        </Flex>
        
    );
}