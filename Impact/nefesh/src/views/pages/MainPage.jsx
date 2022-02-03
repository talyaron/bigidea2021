import "../../styles/page/MainPage.css";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import DataFilters from "../template/DataFilters";
import { query, } from "firebase/database";
import { collection, onSnapshot, getFirestore, where, getDocs,} from "firebase/firestore";

//const tags = ["newest", "popular", "recent"];
let eventFilter = '';

function App() {
	const navigate = useNavigate();

  //var searchOption, filterOption;
  const db = getFirestore();
  const [articles, setArticles] = useState([]);
  const [searchField, setSearchField] = useState("");
  const [eventListState, setEventListState] = useState([]);
  const [finalFirstDate, setFinalFirstDate]= useState("")
  const [finalLastDate, setFinalLastDate]= useState("")

	function handleSearchByChange(ev) {
		let temp = ev.target.value;
		setSearchField(temp);
	}

	useEffect(() => {
		const q = query(collection(db, 'events'));
		const eventListTemp = [];

		//listen to events
		const eventsSnapshot = onSnapshot(q, (querySnapshot) => {
			querySnapshot.forEach((doc) => {
				const eventTemp = doc.data();
				eventTemp.id = doc.id;
				eventListTemp.push(eventTemp);
			});
			console.log('ping!');
			setEventListState(eventListTemp);
		});
    return () => {
			return eventsSnapshot();
		};
	}, []);



  
  function changeEventFilter(ev) {
   
    const eventListTemp = [...eventListState];
    eventFilter = ev.target.value;
    if (eventFilter === "popular") {
      eventListTemp.sort(function (a, b) {
        return b.views - a.views;
      });
      setEventListState(eventListTemp);
      console.log(eventListState);
    }
    if (eventFilter === "newest") {
      eventListTemp.forEach((doc) => {
        doc.dateCompare = doc.Date.replace(/\D/g, "");
      });
      eventListTemp.sort(function (a, b) {
        return b.dateAdded.seconds - a.dateAdded.seconds;
      });
      setEventListState(eventListTemp);
      console.log(eventListTemp);
      console.log(eventListState);
    }
  }
  function setStartDate(ev){
    ev.preventDefault();
    let startDayTemp= ev.target.value;
    setFinalFirstDate(startDayTemp)
    console.log(finalFirstDate);

  }

 async function checkByDate(ev){
    ev.preventDefault();
    console.log("hi");
    let lastDayTemp= ev.target.value;
    if(lastDayTemp< finalFirstDate){
      lastDayTemp= "";
      alert("selected final date is before start date. Please select a valid date  ")
      
    }
    else{
      console.log(finalFirstDate);
      console.log(lastDayTemp);
      const q = query(collection(db, "events"), where("endTime", "<=", lastDayTemp) && where("startTime", ">=", finalFirstDate));
      const querySnapshot = await getDocs(q);
      console.log(q)
      console.log(querySnapshot);
  querySnapshot.forEach((doc) => {
    // doc.data() is never undefined for query doc snapshots
    console.log(doc.id, " => ", doc.data());
  
  });
    }

    //where()
    
//  set two 
  }


	function changeEventFilter(ev) {
		const eventListTemp = [...eventListState];
		eventFilter = ev.target.value;
		if (eventFilter === 'popular') {
			eventListTemp.sort(function (a, b) {
				return b.views - a.views;
			});
			setEventListState(eventListTemp);
			console.log(eventListState);
		}
		if (eventFilter === 'newest') {
			eventListTemp.forEach((doc) => {
				doc.dateCompare = doc.Date.replace(/\D/g, '');
			});
			eventListTemp.sort(function (a, b) {
				return b.dateAdded.seconds - a.dateAdded.seconds;
			});
			setEventListState(eventListTemp);
			console.log(eventListTemp);
			console.log(eventListState);
		}
	}

  return (
    <div>
      <DataFilters setEventListState={setEventListState} />
      <div className="userInterfaceContainer">
        <form className="filterEvents">
          <label htmlFor="eventFilterType">
            Sort out the events displayed:
          </label>
          <select
            name="eventFilterType"
            id="eventFilterType"
            onChange={changeEventFilter}>
            <option value="newest">Upcoming</option>
            <option value="recent">Freshly Added</option>
          </select>
        </form>
        <form className= "dateSelector">
          Select dates to look between:
          <input type='datetime-local' name="fisrtDate" onChange={setStartDate} />
          <input type='datetime-local' name="lastDate" onChange={checkByDate}/>
          
          </form>
        <div className="eventMapContainer">
          {eventListState.map((event) => {
            return (
              <div
                key={event.id}
                className="nametag card card--link"
                onClick={()=>handleRoute(event.id)}>
                <img src={event.coverImage} alt={event.title}></img>
                <h2>{event.title}</h2>
                <div className="cardData">
                <div id="Date">Date: {new Intl.DateTimeFormat("en" , {
  timeStyle: "short",
  dateStyle: "medium"
}).format(event.startTime.seconds * 1000) }</div>
                <div id="Views">Tags: {event.tags.map(e => (<tag>{e}</tag>))}</div>
                </div>
                <div className="cardTags">
                  </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  )}

export default App;
