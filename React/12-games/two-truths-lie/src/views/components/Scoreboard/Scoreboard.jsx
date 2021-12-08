import "./Scoreboard.css"
import { useEffect, useState } from "react"
import { db } from '../../../functions/firebase/config';
import { doc, collection, query, where, getDocs, onSnapshot } from 'firebase/firestore'

function Scoreboard() {

    //players
    const [players, setPlayers] = useState([
        // { id: 'aaa', name: 'Syzmon', image: '', score: 12 },
        // { id: 'bbb', name: 'Max', image: '', score: 10 }
    ])
    const q = query(collection(db, "true-lie", "qocj2PnYZcvmDXOf4mCn", "players"))
    useEffect(() => {
        //listen to palyers
        const unsubscribe = onSnapshot(q, (querySnapshot) => {
            let list = [];
            querySnapshot.forEach((docDB) => {
                const playerTemp = docDB.data();
                playerTemp.id = docDB.id;

                list.push(playerTemp);


            });
            //sort by score
            list = list.sort((a, b) => b.score - a.score)
            console.log(list);
            setPlayers(list)
        });

    }, [])

    return (
        <div className="scoreboard">
            {players.map(player => {
                console.log(player.id)
                return (
                    <div key={player.id} className='nametag'>
                        <img className="img" src={player.image}></img>
                        <div>{player.name}: {player.score}</div>
                    </div>
                )
            })

            }
        </div>
    )
}

export default Scoreboard