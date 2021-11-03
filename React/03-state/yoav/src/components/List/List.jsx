import { useState } from "react";


function createIndex(arr){
    const listArray = arr.map((letter, index)=>{
        return {word:letter, id:index}
    })

    return listArray;
}






function List () {
    const list = ['a','b','c','d','e'];
    const [words, setWords] = useState(createIndex(list));

    function handleDelete(i) {
        console.log('delete', i);
    
        let wordsTemp = [...words];
        wordsTemp.splice(i, 1)
        console.log(wordsTemp);

        setWords(wordsTemp);
    
    }
    
    
    return(
        <div className="list">
            {words.map((word, index)=>{
                return (<div 
                key = {word.id} 
                className="word"
                onClick = {()=>handleDelete(index)}
                >{word.word}, id: {(word.id)}</div>)
        })}
        </div>

    )
}

export default List;