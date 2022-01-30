import "./DataFilters.css";
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

//let filterRef= doc(db, "events");

const filters = {};
let filtersArr2 = [];
let eventFilters = [];
let count = 0;
let count2 = 0;

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
    if (count < 5 && ev.target.checked === true) {
      filters[ev.target.name] = ev.target.checked;
      filtersArr2.push(ev.target.name);
      count++;
      console.log(count);
      console.log(filtersArr2);
    } else if (count >= 5 && ev.target.checked === true) {
      ev.target.checked = false;
      alert("Too many filters. Please select up to five filters.");
    } else if (ev.target.checked === false) {
      count--;
      filters[ev.target.name] = false;
      console.log(count);
      filtersArr2.splice(filters[ev.target.name], 1);
    }

    console.log(filters);
  }
  async function getEvents(ev) {
    ev.preventDefault();

    console.log(filters);
    const filtersArr = [];
    const filtersTrueFalse = [];
    for (let filter in filters) {
      console.log(`${filter}: ${filters[filter]}`);
      console.log(filters[filter]);
      if (filters[filter] === true) {
        console.log("push filter " + `${filter}`);
        filtersTrueFalse.push(`${filter}`);
        //filtersTrueFalse.sort();
      }
      console.log(filtersTrueFalse);
    }

    const promisedFilterd = filtersTrueFalse.map((filter) => {
      console.log("printing");

      return getEventPromise(filter);
    });

    const events = await Promise.all(promisedFilterd);

    console.log(events);
    const eventIds = new Set()
    const filterdEvents = []
    events.forEach(eventList=>{
        eventList.forEach(event=>{
            if(!eventIds.has(event.id)){
                filterdEvents.push(event)
                eventIds.add(event.id)
            }
        })
        
    })
    setArticles(filterdEvents);
  }

  function getEventPromise(filter) {
    console.log(filter);

    const filteredRef = collection(db, "events");
    console.log(filteredRef);

    return new Promise((resolve, reject) => {
      console.log("hello");
      const eventsTemp = [];
      const q = query(filteredRef, where("tags", "array-contains", filter));
      getDocs(q)
        .then((eventsDB) => {
          eventsDB.forEach((eventDB) => {
              const eventObj = eventDB.data();
              eventObj.id = eventDB.id;
            eventsTemp.push(eventObj);
          });
          resolve(eventsTemp);
          console.log(eventsTemp);
        })
        .catch((err) => {
          reject(err);
        });
    });
  }
  function ping() {
    console.log(articles);
  }
  return (
    <div>
      Filters (Select up to five filters):
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
        className="searchBar"
        type="checkbox"
        name="party"
        onClick={getTarget}
      />
      Party
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
          <div key={event.id} className="nametag">
            <h1>{event.title}</h1>
            <img src={event.Image} style={{ width: "100px" }}></img>
            <div>This event will take place on: {event.date}</div>
            <div>{event.views} many people have viewed this event</div>
            <div>Event filter:{event.tags + ","}</div>
          </div>
        );
      })}
    </div>
  );
}
export default DataFilters;
