import { useState } from "react";



function List(){
    const [words, setWords] = useState([{id:1, word:'apple'}, {id:2, word:'baby'},{id:3, word:'cat'},{id:4, word:'dog'}, {id:5, word:'elephant'}])
    function handleDelete(i){
        console.log('delete',i)
        let wordTemp =[...words];
        wordTemp.splice(i,1)
        console.log(wordTemp)
        setWords(wordTemp);
    }
    
    return(
        <div className = "list">
            {words.map((word, index)=>{
                return <div 
                key={word.id} 
                className ="word"
                onClick={()=>handleDelete(index)}
                >{word.word} id:{(word.id)}</div>;
            })}
        </div>
    )

}
export default List;