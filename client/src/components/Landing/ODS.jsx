import { Box, Flex, Image , Text, Wrap, WrapItem} from "@chakra-ui/react";

const Ods = ({ODS}) => 
{
    return (
        <>
        <Box >
        <Wrap p="1"align="center" justify="center">
        {Object.entries(ODS).map(([key, ods]) => (
            <WrapItem key={key}  mb={4} >
                <Box>
                    <Image boxSize ={["100px","200px"]}src={ods.image} alt={ods.name} />    
                </Box>
            </WrapItem>
            ))}
        </Wrap> 
        </Box> 
        </>
    )
}

export default Ods;