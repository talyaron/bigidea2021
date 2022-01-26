import "./MainPage.css";
import { useEffect, useState } from "react"
import { db } from '../../../functions/firebase/config';
import { collection, query, where, orderBy, onSnapshot } from 'firebase/firestore';
import EventPage from "../../components/Event Page/eventPage"
import { BrowserRouter, Routes, Route, Link,useNavigate,useParams} from 'react-router-dom';
let eventFilter = ""
let eventListTemp = []

function App() {
    let navigate = useNavigate();
    
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
                            event.isPublished ?
                                <div key={event.id} className='nametag'>
                                    <h1>{event.title}</h1>
                                    <img src={event.coverImage} style={{ width: "100px" }}></img>
                                    <div>Date: {event.date} between {event.startTime} and {event.endTime}</div>
                                    <div>{event.views} many people have viewed this event</div>
                                    <div> Host Organization website<a href={event.contactInfo.website}>{event.contactInfo.website}</a></div>
                                    <button onClick={()=>{
                                        navigate(`/Event/${event.id}`)
                                    }}>
                                        Open Event
                                    </button>
                                    <nav>
                                    </nav>
                                </div>
                                : null
                        )
                    })
                    }
                </div>
            </div>
        </div>
    )
}
export default App