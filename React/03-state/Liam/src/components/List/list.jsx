import { useState } from "react"


function createIndex(arr){
    const listArray = arr.map((elm,index)=>{
        return {word:elm, id:index}
    })
    return listArray
}
function List() {
    //const [words, setwords] = useState([{id:1,word:'apple'},{id:2,word:'baby'},{id:3,word:'cat'},{id:4,word:'dog'},{id:5,word:'mouse'}])
    const list = ['a','b','c','d','e','f']
    const listArray = createIndex(list)
    const [words, setwords] = useState(listArray)

    
    function handleDelete(index){
        let wordsTemp = [...words];
        console.log('delete',index);
        
        wordsTemp.splice(index,1);
        console.log(wordsTemp);
        setwords(wordsTemp);
    
    }
    return (
        <div className="list">
           {words.map((word, index)=>{
               return <div key={word.id} className="word" onClick={() => handleDelete(index)} >{word.word}, id:{(word.id)}</div>
           })}
            
             </div>
    )
}
export default List;