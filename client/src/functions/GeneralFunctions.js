    
   
   export const getTopics = () => { 
        const mySet = new Set();
        const topics = [
            "End Poverty",
            "Zero Hunger",
            "Good Health and Well-being",
            "Quality Education",
            "Gender Equality",
            "Clean Water and Sanitation",
            "Decent Work and Economic Growth",
            "Industry, Innovation, and Infrastructure",
            "Reduced Inequalities",
            "Sustainable Cities and Communities",
            "Responsible Consumption and Production",
            "Climate Action",
            "Life Below Water",
            "Life on Land",
            "Peace, Justice and Strong Institutions",
            "Partnerships for the Goals"
        ];

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
        console.log(arr);
        return arr;
    }

    export const words=(arr)=>
    {
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

