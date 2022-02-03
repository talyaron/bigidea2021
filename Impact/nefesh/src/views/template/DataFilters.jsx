import "../../styles/template/DataFilters.css";
import { useState } from "react";
import { collection, query, getDocs, where, getFirestore } from "firebase/firestore";

const filters = {};
let tags = ["dinner", "60+", "party", "fun", "outdoors"];


function DataFilters({ setEventListState }) {
  const db = getFirestore();
  const [searchField, setSearchField] = useState("");
  const [hidden, setHidden] = useState(false);

  // function handleSearchByChange(ev) {
  //   ev.preventDefault();
  //   let temp = ev.target.value;
  //   setSearchField(temp);
  // }

  function revealFilters() {
    let temp = !hidden
    setHidden(temp);
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
                  <input name={tag} type="checkbox" onClick={getTarget}/>
                </div>
                
            </div>
            )
        })}
        <input className="submitbutton" type="submit" name="submit1" onClick={getEvents} />
        </div> : null}                     
    </div>
  );
}
export default DataFilters;
