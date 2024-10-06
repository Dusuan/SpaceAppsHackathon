import CheckAns from "../../src/CheckAns"

const ConnectorAnswers = ({arrRespuestas,selectedWords,setSelectedButtons, setIsDisabled, setScore})=>{

    const trueOrFalse= CheckAns(arrRespuestas,selectedWords);

    if(trueOrFalse)
    {
        //if poner los resultados bien y desacrivar los botones y elliminar de arrRespuestas
        setIsDisabled(true); 
        setSelectedButtons(prev => [...prev, ...arrRespuestas]);  // Agrega los botones seleccionados correctamente al estado
        arrRespuestas.length = 0;  // Vaciar arrRespuestas
    }
    else
    {
        setScore(prevScore => prevScore - 25);  // Restar 25 puntos
        setIsDisabled(true);  // Desactiva temporalmente los botones para evitar spam
        arrRespuestas.length = 0;  // Vaciar arrRespuestas

        // Si el puntaje llega a 0:
        if (score - 25 <= 0) {
            setIsDisabled(true);  // Desactiva todo
            // Aquí podrías agregar una lógica de navegación o notificación
        } else {
            // Si todavía quedan puntos, reactiva los botones no seleccionados
            setIsDisabled(false);
        }
    }
}

export default ConnectorAnswers;
