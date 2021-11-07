import { useState } from "react";


function List() {
    const [words, setWords] = useState([{id:1,word:'apple'},{id:2,word:'baby'},{id:3,word:'cat'}]);


    function handleDelete(index) {
        console.log('delete', index)

        let wordsTemp = [...words];
        wordsTemp.splice(index, 1)
        console.log(wordsTemp);
        setWords(wordsTemp);
    }


    return (
        <div className="list">
            {words.map((word, index) => {
                return <div
                    key={index}
                    className="word"
                    onClick={() => handleDelete(index)}
                >{word.word}</div>;
            })}
        </div>
    )
}

export default List;