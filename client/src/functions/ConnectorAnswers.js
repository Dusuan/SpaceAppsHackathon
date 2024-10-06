import CheckAns from "./CheckAns";


export default function ConnectorAnswers({setArrRespuestas, arrRespuestas, selectedWords , setIsDisabled, setScore, score })
{
    const trueOrFalse=CheckAns(arrRespuestas,selectedWords)
    if (trueOrFalse) {
        setIsDisabled(true);
        setArrRespuestas([]); 
        
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
