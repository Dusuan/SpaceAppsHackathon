import CheckAns from "./CheckAns";


export default function ConnectorAnswers({setArrRespuestas, arrRespuestas, selectedWords, setSelectedButtons, setIsDisabled, setScore, score })
{
    CheckAns(arrRespuestas,selectedWords)
    if (trueOrFalse) {
        setIsDisabled(true);
        setArrRespuestas([]); 
        setSelectedButtons(prev => [...prev, ...arrRespuestas]);  // Mantén los botones seleccionados correctos
        //checar si funciona el de arrbia
    } 
    else 
    {
        setScore(score-25);
        if (score === 0) 
        {
            setIsDisabled(true);
        }
        setArrRespuestas([]);
    }
};
