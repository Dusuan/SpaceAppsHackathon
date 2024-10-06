import React, { useState, useEffect} from "react";
import {Flex, Text, Image, Icon, Modal, ModalOverlay, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure, Checkbox} from "@chakra-ui/react";
import FlagSquare from "../components/FlagSquare";
import { questions } from "../utils/questions";
import { ods } from "../utils/ods"; // Asegúrate de que este objeto esté correctamente definido
import { FaHeart } from "react-icons/fa";
import { Link } from "react-router-dom";
import { GiDevilMask } from "react-icons/gi";

const Flags = () => {
    const [vidas, setVidas] = useState(3);
    const [score, setScore] = useState(0);
    const [i, setIndex] = useState(0); // Para controlar el índice de la pregunta
    const [currentQuestion, setCurrentQuestion] = useState(questions[i]);
    const [message, setMessage] = useState("");
    const [currentAnswer, setCurrentAnswer] = useState("");
    const { isOpen, onOpen, onClose } = useDisclosure();
    const [finalMessage, setFinalMessage] = useState("");
    const [hardMode, setHardMode] = useState(false);

    // Función para encontrar la respuesta correcta
    const findCorrectAnswer = (question) => {
        for (const ods of question) {
            const odsName = Object.keys(ods)[0];
            if (ods[odsName]) {
                return odsName; // Devuelve el nombre de la ODS con valor true
            }
        }
        return ""; // Retorna vacío si no encuentra una respuesta correcta
    };

    useEffect(() => {
        // Actualizar currentAnswer cuando currentQuestion cambia
        setCurrentAnswer(findCorrectAnswer(currentQuestion));
    }, [currentQuestion]);

    const verifyAnswer = (ods) => {
        const odsName = Object.keys(ods)[0]; // Obtener el nombre de la ODS
        const isCorrect = ods[odsName]; // Obtener el valor booleano (true/false)

        if (isCorrect) {
            setScore(score + 100);
            setMessage("¡Respuesta correcta!");
        } else {
            setVidas(vidas - 1);
            setMessage("Respuesta incorrecta");
        }

        //Si se quedan sin vidas
        if (vidas-2 < 0) {
            setMessage("Game Over!");
            setFinalMessage("You have run out of lives. What would you like to do?");
            onOpen();
        }

        // Avanzar a la siguiente pregunta
        if (i + 1 < questions.length) {
            setIndex(i + 1);
            setCurrentQuestion(questions[i + 1]);
        } else {
            setFinalMessage("Congratulations! You have completed the game.");
            setMessage("Game win!");
            onOpen();
        }
    };

    //Renderizar las vidas
    const renderLives = () => {
        return Array.from({ length: vidas }, (_, index) => (
            <Icon key={index} as={FaHeart} color="red.500" boxSize={6} margin="0 2px"/>
        ));
    };

    const restartGame = () => {
        setVidas(3);
        setScore(0);
        setIndex(0);
        setCurrentQuestion(questions[0]);
        setMessage("");
        onClose(); // Cerrar el modal al reiniciar
    };

    return (
        <Flex
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
            w="100%"
        >
            <Flex
                justifyContent={"space-between"}
                alignItems={"center"}
                h={"15vh"}
                w={"100%"}
            >
                <Image
                    src={process.env.PUBLIC_URL + "/Images/ODS Logo.png"}
                    alt="ODS Logo"
                    width={["75px", "100px", "150px"]}
                />

                <Flex
                    flexDirection="column"
                    justifyContent="center"
                    alignItems="center"
                >
                    <Text
                        fontSize={["l","xl", "3xl"]}
                    >SDGs Flag Game</Text>
                    <Text
                        fontSize={["m", "l", "xl"]}
                        fontWeight={"light"}
                    >Guess the SDG</Text>
                </Flex>

                <Image
                    src={process.env.PUBLIC_URL + "/Images/ODS Logo.png"}
                    alt="ODS Logo"
                    width={["75px", "100px", "150px"]}
                />
            </Flex>

            <Flex justifyContent="center" alignItems="center" h="20vh" flexDirection="column">
                <Text fontSize={["sm", "l", "xl"]} fontWeight={"bold"} padding="0.5">{`"${ods[currentAnswer]}"`}</Text>
                <Text mt="1.5">{i+1}/17</Text>
            </Flex>

            {/**display modal of message */}
            <Flex
                flexWrap="wrap"
                justifyContent="center"
                gap={5}
                alignItems="center"
                width="100%"
            >
                {currentQuestion.map((ods, index) => (
                    <FlagSquare
                        key={index}
                        odsActual={Object.keys(ods)[0]}
                        onClick={() => verifyAnswer(ods)}
                        flex="1 1 calc(50% - 10px)"
                        hardMode={hardMode}
                    />
                ))}
            </Flex>

            <Flex
                justifyContent="space-around"
                alignItems="center"
                width="100%"
                h="15vh"
            >
                <Flex>
                    {renderLives()} 
                </Flex>
                <Flex
                    alignItems="center"
                >
                    <Checkbox colorScheme='red'
                        onChange={() => setHardMode(!hardMode)}
                    >
                        Hard Mode
                    </Checkbox>
                    <Icon as={GiDevilMask} color="red" boxSize={6} margin="0 2px" display={(hardMode) ? "block" : "none"}/>
                </Flex>
                <Text>Score: {score}</Text>
            </Flex>

            <Modal isCentered isOpen={isOpen} onClose={onClose} closeOnOverlayClick={false} closeOnEsc={false}>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>{message}</ModalHeader>
                    <ModalBody pb={6}>
                        <Text>{finalMessage}</Text>
                    </ModalBody>
                    <ModalFooter>
                        <Button colorScheme="blue" mr={3} onClick={restartGame}>
                            Restart
                        </Button>
                        <Link to="/">
                            <Button>Back Home</Button>
                        </Link>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </Flex>
    );
};

export default Flags;
