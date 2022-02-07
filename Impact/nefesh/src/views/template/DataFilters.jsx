
import { useEffect, useState } from "react";
import {
  collection,
  doc,
  query,
  getDocs,
  where,
  getFirestore,
  getDoc
} from "firebase/firestore";

const filters = {};

function DataFilters({ setEventListState }) {
  import("../../styles/template/DataFilters.css");
  const db = getFirestore();
  let tagsSorted=[]
  const [tags, setTags] = useState([]);

  useEffect(async() => {
		
    const tagsDB= await getDoc(doc(db,"tagCollection","tagDoc"))

    tagsSorted=tagsDB.data().tagArray;
    
      tagsSorted.sort(function (a, b) {
        return a.localeCompare(b); //using String.prototype.localCompare()
      })
      
      setTags(tagsSorted)
    
	},
   []);
  


  async function getTarget(ev) {
    for (var oldFilter in filters) delete filters[oldFilter];
    filters[ev.target.id] = ev.target;
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
  <div>
  {/* <div className= "filterBanner">
    Filters
  </div> */}

        <div id="tagsContainer">
        {tags.map((tag) => {
								return (
									<div key={tag}className='filterBtn_cont'>
										<div className='inline-block'>
											<div className='filterBtn inline-block shadow' id={tag} onClick={getTarget}>
												{tag}
											</div>
										</div>
									</div>
								);
							})}
        </div>             
    </div>
  );
}
export default DataFilters;
