
export const getTopics = (arr) => { 

    const mySet = new Set();

    while(mySet.size < 4){

        const randomIndex = Math.floor(Math.random() * arr.length);

        if(!mySet.has(arr)){
            mySet.add(arr[randomIndex]);

        }

    }
    
    
    const myNewArray = Array.from(mySet);
    console.log(myNewArray);
    return myNewArray;
   
}


export const selectWords = (topics) => {


    for(let i = 0; i< topics.length ; i++){

        const randomIndex = Math.floor(Math.random() * topics.length);



    }

}