import { useState } from 'react';
import './Cards.css'



    
//imgs
import Alaska from '../../components/img/alaska.jpg'
import Colorado from '../../components/img/colorado.jpg'
import Dubai from '../../components/img/dubai.jpg'
import Egypt from '../../components/img/egypt.jpg'
import India from '../../components/img/india.jpg'
import Japan from '../../components/img/japan.jpg'
import Nayara from '../../components/img/nayara.jpg'
import redLight from '../../components/img/redlight.jpg'

const memory = [
    { text: 'Alaska', id: 1 }, { img: Alaska, id: 1 },
    { text: 'Colorado', id: 2 }, { img: Colorado, id: 2 },
    { text: 'Dubai', id: 3}, {img: Dubai, id:3},
    { text: 'Egypt', id: 4}, {img: Egypt, id:4},
    { text: 'India', id: 5}, {img: India, id:5},
    { text: 'Japan', id: 6}, {img: Japan, id:6},
    { text: 'Nayara', id: 7}, {img: Nayara, id:7},
    { text: 'redLight', id: 8}, {img: redLight, id:8}
]

function Cards() {
    const [cards, setCards] = useState(shuffle(memory));


    return (
        <div className='cards'>
            {cards.map((card, i) => {
            console.log(card.img)
                return (card.img ?
                    <div key={i} className='card' style={{backgroundImage:`url(${card.img})`}}></div>
                    :
                    <div key={i} className='card'>{card.text}</div>
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


export default Cards;