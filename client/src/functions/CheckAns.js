

export const checkAnswers=(a, b)=>
{
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