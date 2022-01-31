import "./DataFilters.css";
import { useEffect, useState } from "react";
import { getDatabase, ref, onValue } from "firebase/database";
import { db } from "../../../scripts/firebase/config";
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

function DataFilters({ setEventListState }) {
  var searchOption;
  var filterOption;
  const db = getFirestore();

  const [searchField, setSearchField] = useState("");
  const [searchFilters, setSearchFilters] = useState([]);
  const [hidden, setHidden] = useState(false);

  function handleSearchByChange(ev) {
    ev.preventDefault();
    let temp = ev.target.value;
    setSearchField(temp);
  }
  function revealFilters() {
   console.log('reveal')
    setHidden(true);
    
  }

  async function getTarget(ev) {
    filters[ev.target.name] = ev.target.checked;
  }
  async function getEvents(ev) {
    ev.preventDefault();
    console.log(filters);
    const filtersArr = [];
    for (let filter in filters) {
     
      if (filters[filter]) {
        filtersArr.push(filter);
      }

      console.log(filtersArr);

      const promisedFilterd = filtersArr.map((filter) => {
        return getEventPromise(filter);
      });
      const events = await Promise.all(promisedFilterd);
      const joinedEvents = convertArticleToSingleArray(events);
      console.log(joinedEvents)
      setEventListState(joinedEvents);
    }
    //sort through
  }

function convertArticleToSingleArray(events){
    console.log(events)
    let eventsIds = new Set();
const joinedEventsList = []
    events.forEach(fiteredEvents=>{
        fiteredEvents.forEach(event=>{
            if(!eventsIds.has(event.id)){
                eventsIds.add(event.id);
                joinedEventsList.push(event)
            }
        })
    })

    return joinedEventsList;

}

  function getEventPromise(filter) {
    console.log(filter);
    return new Promise((resolve, reject) => {
      const q = query(
        collection(db, "events"),
        where(
          "tags",
          "array-contains",
          filter
        ) /*check if multiple statements can be added here*/
      );
      getDocs(q)
        .then((eventsDB) => {
          const eventsTemp = [];
          eventsDB.forEach((eventDB) => {
              const eventObj = eventDB.data();
              eventObj.id = eventDB.id;
            eventsTemp.push(eventObj);
          });
          resolve(eventsTemp);
        })
        .catch((err) => {
          reject(err);
        });
    });
  }
  
  return (
    <div>
      <button onClick={revealFilters} name="hi">
        Click here to apply filters
      </button>
      {hidden ? (
        <div>
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
        </div>
      ) : null}
    </div>
  );
}
export default DataFilters;
