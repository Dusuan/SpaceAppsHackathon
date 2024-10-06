
import { Button, SimpleGrid} from "@chakra-ui/react";

export default function BodyConnection(){

    return (
        
        <SimpleGrid column={4} spacing={30}>
            {Array.from({length: 16} , (_,index)=> {
                <Button key={index} >{index+1}</Button>
            })}
        </SimpleGrid>

    );
}