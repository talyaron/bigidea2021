import "../../styles/template/DataFilters.css";
import { useState } from "react";
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
let tags = ["dinner", "60+", "party", "fun", "outdoors"];


function DataFilters({ setEventListState }) {
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
    let temp = !hidden
    setHidden(temp);
    
  }

  async function getTarget(ev) {
    for (var oldFilter in filters) delete filters[oldFilter];
    filters[ev.target.name] = ev.target;

    console.log(filters)
    getEvents(ev)
  }
  async function getEvents(ev) {
    
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
    <div className="revealFiltersButton_cont">
      <button onClick={revealFilters} name="revealFiltersButton">
        Click here to apply filters
      </button>

    {hidden? 
        <div id="tagsContainer">
        {tags.map((tag) => {
            return(
            <div key={tag}>
                <div className="inline-block">
                  {tag}
                  <button className="filterBtn" name={tag} onClick={getTarget}/>
                </div>
                
            </div>
            )
        })}
     
        </div> : null}                     
    </div>
  );
}
export default DataFilters;
