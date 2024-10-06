import React, { useState, useEffect } from "react";
import { Box, Flex, Text } from "@chakra-ui/react";
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
        <Box>
            <Flex justifyContent="center" alignItems="center" h="10vh" flexDirection="column">
                <Text fontSize="xl">ODS Flags</Text>
                <Text fontSize="lg">{ods[currentAnswer]}</Text> {/* Muestra el nombre de la ODS correcta */}
                <Text>Vidas: {vidas}</Text>
                <Text>Score: {score}</Text>
                <Text>{message}</Text>
            </Flex>
            <Box
                display="flex"
                flexWrap="wrap"
                justifyContent="center"
                alignItems="center"
                maxW="100%"
                h="90vh" // Reducir la altura para dar más espacio al área de juego
            >
                {currentQuestion.map((ods, index) => (
                    <FlagSquare
                        key={index}
                        odsActual={Object.keys(ods)[0]}
                        onClick={() => verifyAnswer(ods)} // Pasamos el objeto de la ODS
                    />
                ))}
            </Box>
        </Box>
    );
};

export default Flags;
