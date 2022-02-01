import "../../styles/page/MainPage.css";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import DataFilters from "../components/DataFilters/DataFilters";
import { query } from "firebase/database";
import { collection, onSnapshot, getFirestore } from "firebase/firestore";
import CheckBoxes from "../components/CheckBoxes/CheckBoxes";

//const tags = ["newest", "popular", "recent"];
let eventFilter = "";

function App() {
  const navigate = useNavigate();

  //var searchOption, filterOption;
  const db = getFirestore();
  const [articles, setArticles] = useState([]);
  const [searchField, setSearchField] = useState("");
  const [eventListState, setEventListState] = useState([]);

  function handleSearchByChange(ev) {
    let temp = ev.target.value;
    setSearchField(temp);
  }

  async function getTarget(ev) {
   
  }
  
  
  useEffect(() => {
    const q = query(collection(db, "events"));
    const eventListTemp = [];
    
    
    //listen to events
    const unsubuscribe = onSnapshot(q, (querySnapshot) => {
      querySnapshot.forEach((doc) => {
        const eventTemp = doc.data();
        eventTemp.id = doc.id;
        eventListTemp.push(eventTemp);
      });
      console.log("ping!");
      setEventListState(eventListTemp);
    });

    return ()=>{
      return unsubuscribe()
    }
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

  function handleRoute(eventId) {
    navigate("/event/" + eventId);
  }

  return (
    <div>
      <DataFilters setEventListState={setEventListState} />
      <form
        className="searchFor dropDown"
        onChange={handleSearchByChange}>
        <label for="searchFor" id="searchFor">
          Search for:
        </label>
        <select id="searchDropdown" name="searchFor">
          <option value="userID">popular</option>
          <option value="displayName">newest</option>
          <option value="email">recent</option>
        </select>
      </form>

      <input
        className="searchBar"
        type="text"
        name="searchBar"
        onKeyPress={getTarget}
      />
      {articles.map((article, i) => (
        <li className="travelcompany-input" key={i}>
          <span className="input-label">
            {" "}
            {i + 1}. {article.Title} Written on {article.Date} by{" "}
            {article.creator} and currently has {article.tags} views
          </span>{" "}
          <img src={article.Image} alt="article" />
        </li>
      ))}
      <div className="userInterfaceContainer">
        <form className="filterEvents">
          <label htmlFor="eventFilterType">
            Sort out the events displayed:
          </label>
          <select
            name="eventFilterType"
            id="eventFilterType"
            onChange={changeEventFilter}>
            <option value="newest">Newest to Oldest</option>
            <option value="popular">Most Popular</option>
            <option value="recent">Most Recent</option>
          </select>
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
                <div id="Views">Tags: {event.tags}</div>
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
