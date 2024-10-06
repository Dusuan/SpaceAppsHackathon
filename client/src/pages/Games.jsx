import Game from "../components/Games/game";
import { Flex } from "@chakra-ui/react";
const Games = () => {
  return (
    <>
      <Flex flexDir="column" justify="center" align="center">
        <Game img={"/dayone.jpg"} gameDescription={"Juego similar a connections"} name={"Rhamses Orozco"} />
        <Game img={"/dayone.jpg"} gameDescription={"Juego similar a connections"} name={"Connections"}/>
      </Flex>
    </>
  );
};

export default Games;
