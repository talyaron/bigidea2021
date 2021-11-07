import { useState } from "react";


function List() {
    const [words, setWords] = useState([{ id: 1, word: "good" }, { id: 2, word: "goodbye" }, { id: 3, word: "hello" }, { id: 4, word: "today" }, { id: 5, word: "then" }, { id: 6, word: "amazing" }]);
    function handleDelete(index) {
        console.log('delete', index)
        const wordsTemp = [...words]
        wordsTemp.splice(index, 1);
        console.log(wordsTemp);
        setWords(wordsTemp)
    }
    return (
        <div className="list">
            {words.map((word, index) => {
                return <div key={word.id} 
                className="word" 
                onClick={() => handleDelete(index)}>
                    {word.id}{word.word}
                </div>;
            })}
        </div>
    )
}
export default List;