import Game from "../components/Games/game";
import { Flex } from "@chakra-ui/react";

const Games = () => {
  return (
    <>
      <Flex bg="blackAlpha.400"flexDir="column" justify="center" align="center">
      <Game img={"/FlagsGame.png"} gameDescription={"A game where you’ll test your knowledge of the SDGs to see if you're ready for the next challenge."} name={"Flags Game"} route={"/Flags"}/>
        <Game img={"/dayone.jpg"} gameDescription={"Today's challenge: Connect 4 words."} name={"Connections"} route={"/Connections"} />
      </Flex>
    </>
  );
};

export default Games;
