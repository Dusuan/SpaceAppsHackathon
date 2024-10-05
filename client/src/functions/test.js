export const getTests = async(req, res) => {
    try{
        const res = await fetch('http://localhost:8080/getTests',
        {
            method: 'GET',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            }
        });

        return await res.json();
    }catch(err){
        console.log(err);
    }
}

export const postTest = async(data) => {
    try {
        const res = await fetch('http://localhost:8080/postTest', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        });

        return await res.json();
    } catch (err) {
        console.error('Error posting test:', err);
    }
}