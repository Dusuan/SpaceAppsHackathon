    export const getTopics = () => { 
        const mySet = new Set();
        const topics=["Fin de la pobreza","Hambre cero","Salud y bienestar","Educación de calidad", "Igualdad de género", "Agua limpia y saneamiento","Trabajo decente y crecimiento económico","Industria, innovación e infraestructura","Reducción de las desigualdades","Ciudades y comunidades sostenibles","Producción y consumo responsables","Acción por el clima","Vida submarina","Vida de ecosistemas terrestres","Paz, justicia e instituciones sólidas","Alianzas para lograr los objetivos"]

        while(mySet.size < 4){
            const randomIndex = Math.floor(Math.random() * topics.length);
            if(!mySet.has(topics[randomIndex]))
            {
                mySet.add(topics[randomIndex]);
            }
        }
        const myNewArray = Array.from(mySet);
        console.log(myNewArray);
        return myNewArray;
    }

    export const selectWords = (topics, conectorODS) => 
    {
        let arr = [];
        for(let i = 0; i<4; i++)
        {
            const randomIndex = Math.floor(Math.random() * 3);
            let curr=conectorODS[topics[i]];
            arr.push(curr[randomIndex]);
        }

        let finalArr=[];
        for(let i=0;i<arr.length;i++)
        {
            for(let j=0;j<arr.length;j++)
            {
                finalArr.push(arr[i][j]);
            }
        }
        console.log(finalArr);
        return finalArr;
    }

