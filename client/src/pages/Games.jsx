import Game from "../components/Games/game";
import { Flex } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const Games = () => {
  return (
    <>
      <Flex bg="blackAlpha.400"flexDir="column" justify="center" align="center">
      <Game img={"/FlagsGame.png"} gameDescription={"A game where you’ll test your knowledge of the SDGs to see if you're ready for the next challenge."} name={"Flags Game"} route={"/Flags"} button={true}/>
      <Game img={"/coming_soon.png"} gameDescription={""} name={"More challenges incoming!"} route={"/Connections"} button={false} />
      </Flex>
    </>
  );
};

export default Games;
