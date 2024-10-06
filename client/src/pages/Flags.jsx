import React, { useState, useEffect } from "react";
import { Box, Flex, Text, Image } from "@chakra-ui/react";
import FlagSquare from "../components/FlagSquare";
import { questions } from "../utils/questions";
import { ods } from "../utils/ods"; // Asegúrate de que este objeto esté correctamente definido

const Flags = () => {
    const [vidas, setVidas] = useState(3);
    const [score, setScore] = useState(0);
    const [i, setIndex] = useState(0); // Para controlar el índice de la pregunta
    const [currentQuestion, setCurrentQuestion] = useState(questions[i]);
    const [message, setMessage] = useState("");
    const [currentAnswer, setCurrentAnswer] = useState("");

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

        // Avanzar a la siguiente pregunta
        if (i + 1 < questions.length) {
            setIndex(i + 1);
            setCurrentQuestion(questions[i + 1]);
        } else {
            setMessage("¡Juego terminado!");
        }
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
                bgColor={"gray.200"}
                w={"100%"}
            >
                <Image
                    src={process.env.PUBLIC_URL + "/Images/ODS Logo.png"}
                    alt="ODS Logo"
                    width="100px"
                />

                <Flex
                    flexDirection="column"
                    justifyContent="center"
                    alignItems="center"
                >
                    <Text
                        fontSize={["xl", "3xl"]}
                    >SDGs Flag Game</Text>
                    <Text
                        fontSize={"xl"}
                        fontWeight={"light"}
                    >Guess the SDG</Text>
                </Flex>

                <Image
                    src={process.env.PUBLIC_URL + "/Images/ODS Logo.png"}
                    alt="ODS Logo"
                    width="100px"
                />
            </Flex>

            <Flex justifyContent="center" alignItems="center" h="20vh" flexDirection="column">
                <Text fontSize="lg" fontWeight={"bold"}>{`"${ods[currentAnswer]}"`}</Text>
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
                    />
                ))}
            </Flex>

            <Flex
                justifyContent="space-around"
                alignItems="center"
                width="100%"
                h="15vh"
            >
                <Text>Vidas: {vidas}</Text>
                <Text>Score: {score}</Text>
            </Flex>
        </Flex>
    );
};

export default Flags;
