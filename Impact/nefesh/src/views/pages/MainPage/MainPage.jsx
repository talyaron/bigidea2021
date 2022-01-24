import "./MainPage.css";
import { useEffect, useState } from "react"
import { db } from '../../../functions/firebase/config';
import { collection, query, where, orderBy, onSnapshot } from 'firebase/firestore';
let eventFilter = ""
let eventListTemp = []

function App() {
    const [eventListState, setEventListState] = useState([])

    // const [eventFilterState,setEventFilterState]=useState("")
    useEffect(() => {
        const q = query(collection(db, "events"))
        const unsub = onSnapshot(q, (querySnapshot) => {
            querySnapshot.forEach((doc) => {
                const eventTemp = doc.data();
                eventTemp.id = doc.id;
                eventListTemp.push(eventTemp)
            })
            console.log('ping!')
            setEventListState(eventListTemp)
        })


    }, [])
    function test() {
        console.log(eventListTemp)
    }
    function changeEventFilter(ev) {
        // console.log('ping! changeeventfilter')
        eventListTemp = [...eventListState];
        eventFilter = ev.target.value
        if (eventFilter === "popular") {
            eventListTemp.sort(function (a, b) { return b.views - a.views })
            setEventListState(eventListTemp)
            console.log(eventListState)
        }
        if (eventFilter === "newest") {
            eventListTemp.forEach((doc) => {
                doc.dateCompare = doc.Date.replace(/\D/g, '')
            })
            eventListTemp.sort(function (a, b) { return b.dateAdded.seconds - a.dateAdded.seconds })
            setEventListState(eventListTemp)
            console.log(eventListTemp)
            console.log(eventListState)
        }
    }
    return (
        <div>
            Hi
            <button onClick={test}>Hi</button>
            <div className="userInterfaceContainer">
                <form className="filterEvents">
                    <label htmlFor="eventFilterType">Sort out the events displayed:</label>
                    <select name="eventFilterType" id="eventFilterType"
                        onChange={changeEventFilter}
                    >
                        <option value="newest">Newest to Oldest</option>
                        <option value="popular">Most Popular</option>
                        <option value="recent">Most Recent</option>
                    </select>
                </form>
                <div className="eventMapContainer">
                    {eventListState.map(event => {
                        return (
                            <div key={event.id} className='nametag'>
                                <h1>{event.Title}</h1>
                                <div>{event.id}</div>
                                <img src={event.Image} style={{ width: "100px" }}></img>
                                <div>This event will take place on: {event.Date}</div>
                                <div>{event.views} many people have viewed this event</div>
                            </div>
                        )
                    })
                    }
                </div>
            </div>
        </div>
    )
}
<<<<<<< HEAD
export default App
=======

export default App;
>>>>>>> parent of 7468d03... Merge branch 'yoavSpizpreferences' into Dev
