import "./List.css"
import { useState } from "react";

function List(){
    const[words, setWords] = useState([{id:1,word:'hi'},{id:2,word:'hello'},{id:3,word:'apple'},{id:4,word:'sam'},{id:5,word:'becky'}])


    function handleDelete(i){
        console.log('delete', i)
        let wordTemp = [...words];
        wordTemp.splice(i, 1)
        console.log(wordTemp)
        setWords(wordTemp)

    }
    return(
        <div className='List'>
            {words.map((word, index)=>{
                return <div 
                key={word.id} 
                className='word'
                onClick={() => handleDelete(index)}>
                {word.word}, id:{word.id} 
        </div>

            })}
        </div>
        
    )

}

export default List;