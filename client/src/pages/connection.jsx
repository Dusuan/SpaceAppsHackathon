import BodyConnection from "../components/Connections/connectionBody"
import { useState } from 'react';
import { Flex, Box} from '@chakra-ui/react';

export default function Connection()
{
    const [isDisabled, setIsDisabled] = useState(false);
    const [score, setScore] = useState(100); 
    const [arrRespuestas, setArrRespuestas] = useState([]);


    return(
        <Flex direction={"column"}>
            <Box>
                <BodyConnection 
                isDisabled={isDisabled} setIsDisabled={()=>setIsDisabled}
                score={score} setScore={()=>setScore}
                arrRespuestas={arrRespuestas} setArrRespuestas={()=>setArrRespuestas}>

                </BodyConnection>
            </Box>
        </Flex>
        
    );
}