import { Box } from "@chakra-ui/react";
import ChallengeLanding from "./ChallengeLanding";
import AboutUs from "./AboutUs";
import Ods from "./ODS";
const Landing = () =>{
 return (
    <Box bg={''}>
      <ChallengeLanding/>   
      <AboutUs/>
      <Ods/>
    </Box>
 );
}



export default Landing;