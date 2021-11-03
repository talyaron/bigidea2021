import { useState } from "react";




function List() {
    const [words, setWords] = useState(['apple', 'baby', 'cool', 'duck', 'elk!']);

    function handleDelete(i) {
        console.log('delete', i);

        let wordsTemp = [...words];
        wordsTemp.splice(i, 1)
        console.log(wordsTemp);

        setWords(wordsTemp);

    }


    return (
        <div className="list">
            {words.map((word, index) => {
                return (<div
                    key={index}
                    className="word"
                    onClick={() => handleDelete(index)}
                >{word}</div>
                )
            })}
        </div>

    )
}

export default List;