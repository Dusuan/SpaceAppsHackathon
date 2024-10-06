const CheckAns=({a=[], b=[]})=>
{
//a son las respuestas
// b son los 4 arrays de respuestas de selectedWords del array [][]

    for(let i=0;i<b.length;i++)
    {
        for(let j=0;j<a.length;j++)
        {
            if(a[j]!==b[i][j])
            {
                return false;
            }
        }
    }
    return true;
}

export default CheckAns;
