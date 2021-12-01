import "./Scoreboard.css"
import "./config.js"
import { useEffect, useState } from "react"
// import {db} from './config'
// import {collection,query,where,getDocs,} from 'firebase/firestore'

function Scoreboard() {

    //players
    const [players, setPlayers] = useState([
        { id: 'aaa', name: 'Syzmon', image: '', score: 12 },
        { id: 'bbb', name: 'Max', image: '', score: 10 }
    ])

    useEffect(() => {
        //listen to palyers
    }, [])

    return (
        <div className="scoreboard">
            {players.map(player => {
                return (
                    <div key={player.id} className='nametag'>
                        {player.name}: {player.score}
                    </div>
                )
            })

            }
        </div>
    )
}

export default Scoreboard