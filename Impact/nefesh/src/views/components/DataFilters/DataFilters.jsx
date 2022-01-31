
import { useEffect, useState } from "react";
import { db } from "../../../functions/firebase/config";
import { getDatabase, ref, onValue } from "firebase/database";
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

let filterRef= doc(db, "events");

const filters = {};
let eventFilters = [];

function DataFilters() {
    var searchOption;
    var filterOption;
    const db = getFirestore();
    const [articles, setArticles] = useState([]);
    const [searchField, setSearchField] = useState("");
    const [searchFilters, setSearchFilters] = useState([]);


    function handleSearchByChange(ev) {
        let temp = ev.target.value;
        setSearchField(temp);
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
            const filteredRef = collection(db, "events");
            const q = query(filteredRef, where("type", "==", filter) /*check if multiple statements can be added here*/);
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
            Filters:
            <input
                className="searchBar"
                type="checkbox"
                name="dinner"
                onClick={getTarget}
            />
            Dinner
            <input
                className="searchBar"
                type="checkbox"
                name="60+"
                onClick={getTarget}
            />
            60+
            <input
                className="searchBar"
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
            {articles.map((event) => {
                return (
                    <div key={event[0].id} className='nametag'>
                        <h1>{event[0].title}</h1>
                        <img src={event[0].Image} style={{ width: "100px" }}></img>
                        <div>This event will take place on: {event[0].date}</div>
                        <div>{event[0].views} many people have viewed this event</div>
                        <div>Event filter:{event[0].type}</div>

                    </div>
                )
            })
            }

        </div>

    );



}
export default DataFilters;
