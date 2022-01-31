
import { useEffect, useState } from "react";
import { getDatabase, ref, onValue } from "firebase/database";
import { db } from "../../../functions/firebase/config";
import { 
    collection,
    doc,
    orderBy,
    query,
    onSnapshot,
    getDocs,
    where,
    getFirestore,
} from "firebase/firestore";


const filters = {};
let eventFilters = [];

function DataFilters() {
    var searchOption;
    var filterOption;
    const db = getFirestore();
    const [articles, setArticles] = useState([]);
    const [searchField, setSearchField] = useState("");
    const [searchFilters, setSearchFilters] = useState([]);
    const [hidden, setHidden]= useState("false")


    function handleSearchByChange(ev) {
        ev.preventDefault();
        let temp = ev.target.value;
        setSearchField(temp);
    }
    function revealFilters(ev){
        ev.preventDefault();
        setHidden("");
         console.log(hidden)
     
    }

    async function getTarget(ev) {
     
        filters[ev.target.name] = ev.target.checked;
    }
    async function getEvents(ev) {
        ev.preventDefault();
        console.log(filters);
        const filtersArr = [];
        for (let filter in filters) {
            console.log(filter);
            if (filters[filter]) {
                filtersArr.push(filter);
            }

            console.log(filtersArr);

            const promisedFilterd = filtersArr.map(filter => {
                return getEventPromise(filter)
            })
            const events = await Promise.all(promisedFilterd);
            console.log(events)
            setArticles(events);

        }
        //sort through
    }

    function getEventPromise(filter) {
        console.log(filter)
        return new Promise((resolve, reject) => {
            const q = query(collection(db, "events"), where("tags", "array-contains", filter) /*check if multiple statements can be added here*/);
            getDocs(q).then((eventsDB) => {
                const eventsTemp = [];
                eventsDB.forEach((eventDB) => {
                    eventsTemp.push(eventDB.data());
                });
                resolve(eventsTemp);
            }).catch(err => {
                reject(err);

            });

        });

    }
    function ping() {
        console.log(articles)
    }
    return (
        <div>
             <button onClick={revealFilters} name="hi" >Click here to apply filters</button>
    <div hidden= {hidden}>
            Filters:
            <input
                className="checkbox"
                type="checkbox"
                name="dinner"
                onClick={getTarget}
            />
            Dinner
            <input
                className="checkbox"
                type="checkbox"
                name="60+"
                onClick={getTarget}
            />
            60+
            <input
                className="checkbox"
                type="checkbox"
                name="party"
                onClick={getTarget}
            />
            Party
            <input
                className="submitbutton"
                type="submit"
                name="submit1"
                onClick={getEvents}
                /> 
            {articles.map((event,index) => {
                return (
                    <div key={index} className='nametag'>
                        <h1>{event.title}</h1>
                        <img src={event.Image} style={{ width: "100px" }}></img>
                        <div>This event will take place on: {event.date}</div>
                        <div>{event.views} many people have viewed this event</div>
                        <div>Event filter:{event.type}</div>

                    </div>
                )
            })
            }
</div>
        </div>

    );



}
export default DataFilters;
