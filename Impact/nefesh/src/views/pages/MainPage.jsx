
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import DataFilters from "../template/DataFilters";
import { query } from "firebase/database";
import { collection, onSnapshot, getFirestore , where} from "firebase/firestore";
let eventFilter = '';

//const tags = ["newest", "popular", "recent"];

function App() {
  import("../../styles/page/MainPage.css");
	const navigate = useNavigate();

  //var searchOption, filterOption;
  const db = getFirestore();
  const [articles, setArticles] = useState([]);
  const [searchField, setSearchField] = useState("");
  const [eventListState, setEventListState] = useState([]);
  const [eventFilter, setEventFilter] = useState("Upcoming");

	useEffect(() => {
		const q = query(collection(db, "events"), where('startTime', '>', new Date()));
		const eventListTemp = [];

    
   

    //listen to events
    const unsubuscribe = onSnapshot(q, (querySnapshot) => {
      let eventListTemp = [];
      querySnapshot.forEach((doc) => {
        const eventTemp = doc.data();
        eventTemp.id = doc.id;
        eventListTemp.push(eventTemp);
      });

      eventListTemp = sortBy(eventFilter, eventListTemp)
      console.log("ping!");
      setEventListState(eventListTemp);
    });

    return () => {
      return unsubuscribe();
    };
  }, []);

  function handleOrderBy(ev) {
    console.log("running");

    let eventListTemp = [...eventListState];
    console.log(eventListTemp);
    setEventFilter(ev.target.value);
    const eventFilterTemp = ev.target.value;
    console.log(eventFilterTemp);
    const sortedEvents = sortBy(eventFilterTemp, eventListState);
    sortedEvents.forEach((ev) => {
      console.log(ev.title, ev.startTime.seconds);
    });
    console.log(sortedEvents);
    setEventListState(sortedEvents);
  }

  function sortBy(type, evntsParams) {
    let events = [...evntsParams];
    if (type === "Upcoming") {
      events = events.sort((a, b) => {
        return a.startTime.seconds - b.startTime.seconds;
      });

      console.log(eventListState);
    }
    if (type === "Freshly Added") {
      events = events.sort(function (a, b) {
        return b.dateAdded.seconds - a.dateAdded.seconds;
      });
    }
    return events;
  }

	window.addEventListener("load", event => {
		var image = document.querySelector('img');
		var isLoaded = image.complete && image.naturalHeight !== 0;
		console.log(isLoaded);
	});
  function handleRoute(eventId) {
		navigate('/event/' + eventId);
	}

  return (
    <div>
      <DataFilters setEventListState={setEventListState} />
      <div className="userInterfaceContainer">
        <form className="filterEvents">
          <label htmlFor="eventFilterType">
            Sort Events:
          </label>
          <select
            name="eventFilterType"
            id="eventFilterType"
            onChange={handleOrderBy}>
            <option value="Upcoming">Upcoming</option>
            <option value="Freshly Added">Freshly Added</option>
          </select>
        </form>
        <div className="eventMapContainer">
          {eventListState.map((event) => {
            return (
              <div
                key={event.id}
                className="nametag card card--link"
                onClick={() => handleRoute(event.id)}>
                <img src={event.coverImage} alt={event.title}></img>
                <h2>{event.title}</h2>
                <div className="cardData">
                  <div id="Date">
                    {new Intl.DateTimeFormat("en", {
                      timeStyle: "short",
                      dateStyle: "medium",
                    }).format(event.startTime.seconds * 1000)}
                  </div>
                  <div id="Views" className="tagGroup">
                    {event.tags.map((e) => (
                      <tag className="tag">{e}</tag>
                    ))}
                  </div>
                </div>
                <div className="cardTags"></div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default App;
