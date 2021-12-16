import "./MainPage.css";
import { useEffect, useState } from "react"
import { db } from '../../../functions/firebase/config';
import { query, orderByChild } from "firebase/database";
import { collection, limit, onSnapshot } from 'firebase/firestore';


function App(){

    const [events, setEvents] = useState([]);
    let filterType = 'newest';
    const eventsRef = collection(db, "events", "f5AIE25ec8IPxC9TBAVk", "basic-events");
    let q = query(eventsRef);


    useEffect(() => {
        //sortMappedEvents(filterType);

        const unsubscribe = onSnapshot(q, (querySnapshot) => {
            let list = [];

            querySnapshot.forEach((docDB) => {
               const eventTemp = docDB.data();
               eventTemp.id = docDB.id;
               list.push(eventTemp);
            });

            setEvents(list);
        }, e=> {
            console.error('on use effect in MainPage:')
            console.error(e)
        });

    }, [])

    function sortMappedEvents(filter){
        alert(filter);
        //Always stays as "newest"
        if (filter === "newest"){
            q = query(eventsRef, orderByChild('eventDate'), limit(4));
        } else if (filter === "popular"){
            //q = query(eventsRef, orderByChild('views'), limit(4));
            //alert("for some reason views cannot be compared...");
        } else if (filter === "recent"){
            q = query(eventsRef, orderByChild('createdDate'), limit(4));
        } else {
            alert("error, filterType is not registered");
        }
    }

    function changeEventFilter(ev){
        filterType = ev.target.value;
        sortMappedEvents(filterType);//Causes the code to not finish when run
    }

    function goToProfile(ev){

    }

    function contactUsDisplay(ev){

    }

    return(
        <div className="container">
            <div className="userInterfaceContainer">
                <form className="filterEvents">
                    <label for="eventFilterType">Sort out the events displayed:</label>
                    <select name="eventFilterType" id="eventFilterType" onChange={changeEventFilter}>
                        <option value="newest">Newest to Oldest</option>
                        <option value="popular">Most Popular</option>
                        <option value="recent">Most Recent</option>
                    </select>
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