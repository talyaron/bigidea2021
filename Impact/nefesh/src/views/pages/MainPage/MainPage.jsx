import "./MainPage.css";
import { useEffect, useState } from "react"
import { db } from '../../../functions/firebase/config';
import { collection, query, where, orderBy, onSnapshot } from 'firebase/firestore';

function App() {
    const [eventListState, setEventListState] = useState([])
    useEffect(() => {
        let eventListTemp = []
        const q = query(collection(db, "events"))
        const unsub = onSnapshot(q, (querySnapshot) => {
            querySnapshot.forEach((doc) => {
                const eventTemp = doc.data();
                eventTemp.id = doc.id;
                eventListTemp.push(eventTemp)
            })
            setEventListState(eventListTemp)
            console.log(eventListTemp)
            console.log(eventListState)
        })

    }, [])
    return (
        <div>
            Hi
        </div>
    )
}
export default App