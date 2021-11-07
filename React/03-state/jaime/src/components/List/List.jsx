import './List.css';
import { useState } from 'react';

function createIndex(arr) {
    const listArray = arr.map((elm, index) => {
    return {word:elm, id:index};
    })
    
    return listArray;
}

function List() {

    const list = ['a', 'b', 'c', 'd', 'e', 'f'];
    const listArray = createIndex(list);
    const [words, setWords] = useState(listArray);

    function handleDelete(index) {
        console.log('delete', index);
    
        let wordsTemp = [...words];
        wordsTemp.splice(index, 1);
        console.log(wordsTemp);
        setWords(wordsTemp);
    }

    return(
        <div className="list">
            {words.map((word, index) => {
                return (<div
                key={word.id}
                className="word"
                onClick={() => handleDelete(index)}
                >{word.word}, id:{word.id}</div>)
            })}
        </div>
    )
}

export default List;