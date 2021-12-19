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
            console.log(list)
            setEvents(list);

        }, e=> {
            console.error('on use effect in MainPage:')
            console.error(e)
        });

    }, [])

    function sortMappedEvents(filter){
        let listSorted = events;
        //Always stays as "newest"
        if (filter === "newest"){
            //q = query(eventsRef, orderByChild('eventDate'));
            //listSorted = events.concat(this).sort((a, b) => a.eventDate.seconds > b.eventDate.seconds ? 1 : -1);


        } else if (filter === "popular"){
            //q = query(eventsRef, orderByChild('views'));
            //listSorted = events.concat(this).sort((a, b) => a.views > b.views ? 1 : -1);
            //alert("for some reason views cannot be compared...");


        } else if (filter === "recent"){
            //q = query(eventsRef, orderByChild('createdDate'));
            //listSorted = events.concat(this).sort((a, b) => a.createdDate.seconds > b.createdDate.seconds ? 1 : -1);


        } else {
            alert("error, filterType is not registered");
        }
        console.log(listSorted);
        setEvents(listSorted);
    }

    function changeEventFilter(ev){
        filterType = ev.target.value;
        sortMappedEvents(filterType);//Causes the code to not finish when run
        console.log(events);
    }

    function goToProfile(ev){

    }

    return(
        <div className="container">
            <div className="searchBar">
                <h1>Placeholder for a future search bar</h1>
            </div>

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
                            <div>This event will take place on: {event.eventDate.seconds}</div>
                            <div>{event.views} many people have viewed this event</div>
                        </div>
                    )
                })
                }
            </div>

            <div className="profileContainer">
                <input type="button" className="profile" onClick={goToProfile}></input>
            </div>
        </div>

    );
}

export default App;