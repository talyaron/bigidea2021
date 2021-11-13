import { useState } from 'react';
import './Memory.css'

//imgs
import telAviv from '../../img/tel-aviv.jpg'
import jerusalem from '../../img/jerusalem.jpg'

const memory = [
    { text: 'Tel-Aviv', id: 1, number: 1 }, { img: telAviv, id: 1, number: 2 },
    { text: 'Jerusalem', id: 2, number: 3 }, { img: jerusalem, id: 2, number: 4 },
]
let twoCards = [];

function Memory() {
    const [cards, setCards] = useState(shuffle(memory));

    function handleCardCheck(card, i) {
        console.log(card)

        if (twoCards.length < 2) {
            twoCards.push(card);

            const tempCards = [...cards];
            tempCards[i].show = true;
            tempCards[i].key = i;
            setCards(tempCards)
        }
        if (twoCards.length === 2) {
            if (twoCards[0].id !== twoCards[1].id) {
                //flip them back
                const tempCards = [...cards];

                const index1 = twoCards[0].key;
                const index2 = twoCards[1].key;

                tempCards[index1].show = false;
                tempCards[index2].show = false;
                console.log(tempCards)
                setCards(tempCards)

                //clean two cards
                
            }
            twoCards = [];
        }
        console.log(twoCards)
    }

    return (
        <div className='cards'>
            {cards.map((card, i) => {

                return (card.img ?
                    card.show ?
                        <div
                            key={i}
                            onClick={() => handleCardCheck(card, i)}
                            className='card'
                            style={{ backgroundImage: `url(${card.img})` }}
                        ></div>
                        :
                        <div
                            key={i}
                            onClick={() => handleCardCheck(card, i)}
                            className="card--hide">Flip</div>
                    :
                    card.show ?
                        <div
                            onClick={() => handleCardCheck(card, i)}
                            key={i}
                            className='card'
                        >
                            {card.text}
                        </div>
                        :
                        <div
                            key={i}
                            onClick={() => handleCardCheck(card, i)}
                            className="card--hide">Flip</div>
                )

            })
            }
        </div>
    )
}


function shuffle(array) {
    let currentIndex = array.length, randomIndex;

    // While there remain elements to shuffle...
    while (currentIndex !== 0) {

        // Pick a remaining element...
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;

        // And swap it with the current element.
        [array[currentIndex], array[randomIndex]] = [
            array[randomIndex], array[currentIndex]];
    }

    return array;
}
export default Memory;