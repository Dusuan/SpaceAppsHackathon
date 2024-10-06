

export const checkAnswers=(a, b)=>{
    
    if(a.length!=b.length)
    {
        console.log('El error esta en en los tamaños');
        return false;
    }

    for(let i=0;i<a.length;i++)
    {
        if(a[i]===b[i])
        {
            return false;
        }
    }
    return true;
}