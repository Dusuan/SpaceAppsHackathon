import HeaderConnection from "../components/Connections/connectionHeader";
import BodyConnection from "../components/Connections/connectionBody"
import { useState } from 'react';


import { Flex, Box} from '@chakra-ui/react';

export default function Connection(){
    const [selectedButtons, setSelectedButtons] = useState([]);
    const [isDisabled, setIsDisabled] = useState(false);
    const [score, setScore] = useState(100); 


    return(
        <Flex direction={"column"}>

            <Box>
                <BodyConnection 
                selectedButtons={selectedButtons} setSelectedButtons={() =>setSelectedButtons} 
                isDisabled={isDisabled} setIsDisabled={() =>setIsDisabled} 
                score={score} setScore={() => setScore} >
                    
                </BodyConnection>
            </Box>
        </Flex>
        
    );
}