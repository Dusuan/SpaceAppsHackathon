import Game from "../components/Games/game";
import { Flex } from "@chakra-ui/react";
import { Link } from "react-router-dom";
const Games = () => {
  return (
    <>
      <Flex bg="blackAlpha.400"flexDir="column" justify="center" align="center">
        <Game img={"/dayone.jpg"} gameDescription={"Juego similar a connections"} name={"Rhamses Orozco"} route={"/Connections"} />
        <Game img={"/dayone.jpg"} gameDescription={"Juego similar a connections"} name={"Connections"} route={"/Flags"}/>
      </Flex>
    </>
  );
};

export default Games;
