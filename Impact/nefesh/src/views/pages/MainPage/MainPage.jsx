import "./MainPage.css";
import { useEffect, useState } from "react"
import { db } from '../../../functions/firebase/config';
import { query, orderByChild } from "firebase/database";
import { collection, orderBy, limit, where, getDocs, onSnapshot } from 'firebase/firestore';


function App(){

    const [events, setEvents] = useState([]);
    const [filterType, setFilter] = useState("popular");
    const eventsRef = collection(db, "events", "f5AIE25ec8IPxC9TBAVk", "basic-events");
    const q = query(eventsRef);

    useEffect(() => {
        sortMappedEvents();

        const unsubscribe = onSnapshot(q, (querySnapshot) => {
            let list = [];

            querySnapshot.forEach((docDB) => {
                const eventTemp = docDB.data();
                eventTemp.id = docDB.id;
                list.push(eventTemp);
            });

            setEvents(list)
        });

    }, [])

    function sortMappedEvents(){
        if (filterType === "newest"){
            q = query(eventsRef, orderByChild('eventDate'), limit(4));
        } else if (filterType === "popular"){
            q = query(eventsRef, orderByChild('views'), limit(4));
        } else if (filterType === "recent"){
            q = query(eventsRef, orderByChild('createdDate'), limit(4));
        } else {
            alert("error, filterType is not registered");
        }
    }

    function changeEventFilter(ev){
        setFilter(ev.target.elements.eventFilterType.value);
        sortMappedEvents();
    }

    function goToProfile(ev){

    }

    function contactUsDisplay(ev){

    }

    return(
        <div className="container">
            <div className="userInterfaceContainer">
                <form className="filterEvents" onSubmit={changeEventFilter}>
                    <label for="eventFilterType">Sort out the events displayed:</label>
                    <select name="eventFilterType" id="eventFilterType">
                        <option value="newest">Newest to Oldest</option>
                        <option value="popular">Most Popular</option>
                        <option value="recent">Most Recent</option>
                    </select>
                    <input type="submit" value="Submit"></input>
                </form>

                <input type="button" className="goToProfile" onClick={goToProfile}></input>
            </div>

            <div className="eventMapContainer">
                {events.map(event => {
                    return(
                        <div key={event.id} className='nametag'>
                            <h1>{event.name}</h1>
                            <div>This event will take place on: {event.eventDate}</div>
                            <div>{event.views} many people have viewed this event</div>
                        </div>
                    )
                })
                }
            </div>

            <div className="contactUsContainer">
                <input type="button" className="contactUs" onClick={contactUsDisplay}></input>
            </div>
        </div>

    );
}

export default App;