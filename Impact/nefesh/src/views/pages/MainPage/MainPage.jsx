import "./MainPage.css";
import { useEffect, useState } from "react"
import { db } from '../../../functions/firebase/config';
import { getDatabase, ref, onValue,  } from "firebase/database";
import { collection, doc, orderBy, query,  onSnapshot, getDocs, where, getFirestore} from 'firebase/firestore';


const tags = ['newest','popular', 'recent'];
let eventFilter = ""
let eventListTemp = []
let eventFilters= [];

function App() {




   var searchOption;
   var filterOption;
   const db = getFirestore();
   const [articles, setArticles]= useState([])
   const [searchField, setSearchField] = useState('')
   const [searchFilters, setSearchFilters]= useState([])
   const events1 = collection(db, "events")
   
   

   function handleSearchByChange(ev){
    let temp = ev.target.value
    setSearchField(temp)
}

  async function getTarget(ev) {

    eventFilters.push(ev.target.name);
      console.log(ev.target.name)
      setSearchFilters(eventFilters)
      console.log(searchFilters);
      const q = query(events1, where("filters", "array-contains", searchFilters));
      const querySnapshot = await getDocs(q);
      querySnapshot.forEach((events1) => {
  // doc.data() is never undefined for query doc snapshots
    console.log(events1.id, " => ", events1.data());
});
      //after getting list, go through list of filters and check to see if each event has these filters 

}
    const [eventListState, setEventListState] = useState([])

    // const [eventFilterState,setEventFilterState]=useState("")
    useEffect(() => {
        const q = query(collection(db, "events"))
        const unsub = onSnapshot(q, (querySnapshot) => {
            querySnapshot.forEach((doc) => {
                const eventTemp = doc.data();
                eventTemp.id = doc.id;
                eventListTemp.push(eventTemp)
            })
            console.log('ping!')
            setEventListState(eventListTemp)
        })


    }, [])
    function test() {
        console.log(eventListTemp)
    }
    function changeEventFilter(ev) {
        // console.log('ping! changeeventfilter')
        eventListTemp = [...eventListState];
        eventFilter = ev.target.value
        if (eventFilter === "popular") {
            eventListTemp.sort(function (a, b) { return b.views - a.views })
            setEventListState(eventListTemp)
            console.log(eventListState)
        }
        if (eventFilter === "newest") {
            eventListTemp.forEach((doc) => {
                doc.dateCompare = doc.Date.replace(/\D/g, '')
            })
            eventListTemp.sort(function (a, b) { return b.dateAdded.seconds - a.dateAdded.seconds })
            setEventListState(eventListTemp)
            console.log(eventListTemp)
            console.log(eventListState)
        }
    }
    return (
        <div>
                
                <form className='searchFor' className="dropDown" onChange={handleSearchByChange}>
							<label for='searchFor' id='searchFor'>Search for:</label>
							<select id="searchDropdown" name='searchFor'>
								<option value='userID'>popular</option>
								<option value='displayName'>newest</option>
								<option value='email'>recent</option>
							</select>
						</form>
              Filters <br/>
              <input className='searchBar' type="checkbox" name= "dinner" onClick={getTarget} />Dinner<br/>
              <input className='searchBar' type="checkbox" name= "60+" onClick={getTarget} />60+<br/>
              <input className='searchBar' type="checkbox" name= "party" onClick={getTarget} />Party<br/>



        
            <div className="userInterfaceContainer">
                <form className="filterEvents">
                    <label htmlFor="eventFilterType">Sort out the events displayed:</label>
                    <select name="eventFilterType" id="eventFilterType"
                        onChange={changeEventFilter}
                    >
                        <option value="newest">Newest to Oldest</option>
                        <option value="popular">Most Popular</option>
                        <option value="recent">Most Recent</option>
                    </select>
                </form>
                <div className="eventMapContainer">
                    {eventListState.map(event => {
                        return (
                            <div key={event.id} className='nametag'>
                                <h1>{event.Title}</h1>
                                <div>{event.id}</div>
                                <img src={event.Image} style={{ width: "100px" }}></img>
                                <div>This event will take place on: {event.Date}</div>
                                <div>{event.views} many people have viewed this event</div>
                            </div>
                        )
                    })
                    }
                </div>
            </div>
       

            <div className='container'>
              <div className='contianer2'>
              <div className="sectionOne">
                <h1>Nefesh B'Nefesh</h1>
                <button onChange={console.log("does nothing yet")}>|||</button>
              </div>
          
           </div>
           <button className='Button2'>Home Page</button>
            </div>
            </div>
          )
}

export default App;