import CheckAns from "../../src/CheckAns"


const ConnectorAnswers = ({arrRespuestas,selectedWords,setSelectedButtons, setIsDisabled, setScore})=>{

    const trueOrFalse= CheckAns(arrRespuestas,selectedWords);

    if(trueOrFalse)
    {
        //if poner los resultados bien y desacrivar los botones y elliminar de arrRespuestas
        setIsDisabled=true;
        setSelectedButtons=[];
    }
    else
    {
        setScore=setScore-25;
        setSelectedButtons=[];
        if(setScore==0)
        {
            //si la vida es 0 ->que te regrese a main o que te desactive todo
        }
    }
}

export default ConnectorAnswers;
