import CheckAns from "./CheckAns";


const ConnectorAnswers = ({ setArrRespuestas, arrRespuestas, selectedWords, setSelectedButtons, setIsDisabled, setScore, score }) => {
    const trueOrFalse = CheckAns(arrRespuestas, selectedWords);

    if (trueOrFalse) {
        // Respuestas correctas: desactivar botones y limpiar respuestas
        setIsDisabled(true);
        setArrRespuestas([]);  // Limpiar el array de respuestas
        setSelectedButtons(prev => [...prev, ...arrRespuestas]);  // Mantén los botones seleccionados correctos
    } else {
        // Respuestas incorrectas: restar 25 puntos
        setScore(prevScore => {
            const newScore = prevScore - 25;

            // Si el puntaje llega a 0, desactivar todo
            if (newScore <= 0) {
                setIsDisabled(true);
                // Aquí puedes agregar lógica para redirigir al jugador a la pantalla principal
                // o mostrar un mensaje indicando que ha perdido
            }

            return newScore;  // Actualizar el puntaje
        });
        
        setArrRespuestas([]);  // Limpiar el array de respuestas
    }
};

export default ConnectorAnswers;
