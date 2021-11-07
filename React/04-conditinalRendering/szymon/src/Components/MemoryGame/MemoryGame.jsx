import { useState } from "react"
import "./MemoryGame.css"
import Costiera from "./Costiera.jpg"
import Disneyland from "./Disneyland.jpg"
import Eolie from "./eolie.jpg"
import Florence from "./florence.jpg"
import Islands from "./Islands.jpg"
import Movie from "./Movie.jpg"
import School from "./School.jpg"
import Sestriere from "./sestriere.jpg"

const memory=[
    {text: 'Amalfi', id:1}, {img: Costiera, id:1},
    {text: 'Disneyland', id:2}, {img: Disneyland, id:2},
    {text: 'Eolie', id:3}, {img: Eolie, id:3},
    {text: 'Florence', id:4}, {img: Florence, id:4},
    {text: 'Islands', id:5}, {img: Islands, id:5},
    {text: 'Movie Theatre', id:6}, {img: Movie, id:6},
    {text: 'School', id:7}, {img: School, id:7},
    {text: 'Sestriere', id:8}, {img: Sestriere, id:8},
]

function MemoryGame(){
    const[cards,setcards]=useState(shuffle(memory))

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
function shuffle(array){
    let currentIndex=array.length, randomIndex
    
    while(currentIndex !==0){
        
        randomIndex=Math.floor(Math.random() * currentIndex);
        currentIndex--;

        [array[currentIndex], array[randomIndex]]=[
            array[randomIndex], array[currentIndex]
        ]
    }
    return array
}

export default MemoryGame