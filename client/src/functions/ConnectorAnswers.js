import CheckAns from "./functions/CheckAns";


const ConnectorAnswers = ({setArrRespuestas,selectedWords,setSelectedButtons, setIsDisabled, setScore})=>{

    const trueOrFalse= CheckAns(arrRespuestas,selectedWords);

    if(trueOrFalse)
    {
        //if poner los resultados bien y desacrivar los botones y elliminar de arrRespuestas
        setIsDisabled(true);
        setArrRespuestas([]);
    }
    else
    {
        setScore(prevScore => prevScore - 25); 
        setArrRespuestas([]);
        if(setScore==0)
        {
            //si la vida es 0 ->que te regrese a main o que te desactive todo
        }
    }
}

export default ConnectorAnswers;
