import "./MainPage.css";
import { useEffect, useState } from "react"
import { db } from '../../../functions/firebase/config';
import { collection, query, where, orderBy, onSnapshot} from 'firebase/firestore';


function App(){

    const [events, setEvents] = useState([]);
    let filterType = 'newest';
    const eventsRef = collection(db, "events");
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
        let sortingList = [];
        let sortingListTrue = [];
        //filter activates correctly, next stage is tested
        if (filter === "newest"){
            events.forEach((docDB) => {
                sortingList.push(docDB.Date);
                sortingListTrue.push(docDB);
             });

        } else if (filter === "popular"){
            events.forEach((docDB) => {
                sortingList.push(docDB.views);
                sortingListTrue.push(docDB);
             });

        } else if (filter === "recent"){
            events.forEach((docDB) => {
                sortingList.push(docDB.dateAdded.seconds);
                sortingListTrue.push(docDB);
             });

        } else {
            alert("error, filterType is not registered");
        }

        for(let i = 0; i < sortingList.length; i++){
            for(let j = 0; j < sortingList.length - i; j++){
                if(sortingList[j] < sortingList[j + 1]){
                    let temp = sortingList[j];
                    let tempTrue = sortingListTrue[j];
                    sortingList[j] = sortingList[j + 1];
                    sortingListTrue[j] = sortingListTrue[j + 1];
                    sortingList[j + 1] = temp;
                    sortingListTrue[j + 1] = tempTrue;
                }
            }
        }

        console.log(sortingList);
        if(sortingListTrue === []){
            alert("cannot make events list empty");
        } else {
            setEvents(sortingListTrue);
        }
    }

    function changeEventFilter(ev){
        filterType = ev.target.value;
        sortMappedEvents(filterType);//Causes the code to not finish when run
        //console.log(events);
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
            </div>

            <div className="eventMapContainer">
                {events.map(event => {
                    return(
                        <div key={event.id} className='nametag'>
                            <h3>=======================================================</h3>
                            <h1>{event.Title}</h1>
                            <h2>{event.Image} **Not set up yet**</h2>
                            <div>This event will take place on: {event.Date}</div>
                            <div>Number of people who viewed this event: {event.views}</div>
                            <div>Number of people attending this event: {event.views} **Not Set Up Yet**</div>
                            <h3>=======================================================</h3>
                        </div>
                    )
                })
                }
            </div>
        </div>

    );
}

export default App;