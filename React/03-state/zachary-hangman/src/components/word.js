import React from 'react'

const Word = ({selectedWord,correctLetters}) => {
    return (
        <div className="word" >
            {selectedWord
			.split('').map(	letter => `
          <span class="letter">
            ${correctLetters.includes(letter) ? letter : ''}
          </span>
        `
			)
			.join('')}
        </div>
        
    )
}

export default Word
