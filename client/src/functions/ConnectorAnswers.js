
export default function ConnectorAnswers({setArrRespuestas, arrRespuestas, selectedWords , setIsDisabled, setScore, score })
{
    const trueOrFalse=CheckAns(arrRespuestas,selectedWords)
    if (trueOrFalse) {
        setArrRespuestas([]); 
        setIsDisabled(true);
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

    function CheckAns(arrRespuestas, selectedWords) {

    for (let i = 0; i < selectedWords.length; i++) {
        for (let j = 0; j < arrRespuestas.length; j++) {
            if (arrRespuestas[j] !== selectedWords[i][j]) {
                return false;
            }
        }
    }
    return true;
}