import "./MainPage.css";
import { useEffect, useState } from "react"
import { db } from '../../../functions/firebase/config';
import { collection, getDocs,  query, where, orderBy, getFirestore, onSnapshot} from 'firebase/firestore';
import { getDatabase, ref, onValue } from "firebase/database";




function App(){
    const tags = ['newest','popular', 'recent'];
    const [events, setEvents] = useState([]);
    var searchOption;
    var filterOption;
    const db = getFirestore();
    const [articles, setArticles]= useState([])
    const [hidden, setHidden] = useState(true)
    const [tag, setTag] = useState("")     
    

     
       async function getFilter(ev){
         ev.preventDefault();
         const arr= [];
         setHidden(false)
         filterOption= ev.target.value;
         setTag(filterOption)
         console.log(ev)
         console.log(filterOption)
     
      
       }
       async function getTarget(ev) {
         let arr2= [];
         if (ev.key === 'Enter') {
         ev.preventDefault();
         searchOption= ev.target.value;
         console.log(searchOption);
         const q = query(collection(db, "events"), where("Title", ">=", searchOption));
         const querySnapshot = await getDocs(q);
         querySnapshot.forEach((doc) => {  
           // doc.data() is never undefined for query doc snapshots
           console.log(doc.id, " => ", doc.data());
           arr2.push(doc.data());
         });
         if(tag=== "popular"){
           for (var i = 1; i < arr2.length; i++)
           for (var j = 0; j < i; j++)
               if (arr2[i].views > arr2[j].views) {
                 var x = arr2[i];
                 arr2[i] = arr2[j];
                 arr2[j] = x;
               }
       
     
       }
       else if (tag=== "newest"){
         for (var i = 1; i < arr2.length; i++)
         for (var j = 0; j < i; j++)
             if (arr2[i].Date > arr2[j].Date) {
               var x = arr2[i];
               arr2[i] = arr2[j];
               arr2[j] = x;
             }
           }
       else if(tag=== "recent"){
         for (var i = 1; i < arr2.length; i++)
         for (var j = 0; j < i; j++)
             if (arr2[i].dateAdded > arr2[j].dateAdded) {
               var x = arr2[i];
               arr2[i] = arr2[j];
               arr2[j] = x;
             }
       };
         setArticles(arr2);
         console.log(arr2)
     
         }
     
         //insert filters
         //find articles with word in it, sort by which article has the word appear the most
         //for each article 
         // if newest --> check by date
         // if recent --> check by creation date
         // if popular --> check by most views
     
     
     
       
       }

    function sortMappedEvents(filter){
        let sortingList = [];
        let sortingListTrue = [];
        //filter activates correctly, next stage is tested
        if (filter === "newest"){
            events.forEach((docDB) => {
                sortingList.push(docDB.Date);
                sortingListTrue.push(docDB);
             });

        } else if (filter === "popular"){
            events.forEach((docDB) => {
                sortingList.push(docDB.views);
                sortingListTrue.push(docDB);
             });

        } else if (filter === "recent"){
            events.forEach((docDB) => {
                sortingList.push(docDB.dateAdded.seconds);
                sortingListTrue.push(docDB);
             });

        } else {
            alert("error, filterType is not registered");
        }

        for(let i = 0; i < sortingList.length; i++){
            for(let j = 0; j < sortingList.length - i; j++){
                if(sortingList[j] < sortingList[j + 1]){
                    let temp = sortingList[j];
                    let tempTrue = sortingListTrue[j];
                    sortingList[j] = sortingList[j + 1];
                    sortingListTrue[j] = sortingListTrue[j + 1];
                    sortingList[j + 1] = temp;
                    sortingListTrue[j + 1] = tempTrue;
                }
            }
        }

        console.log(sortingList);
        if(sortingListTrue === []){
            alert("cannot make events list empty");
        } else {
            setEvents(sortingListTrue);
        }
    }

    

    return(
        <div className="container">
             
      <input type="text" name= "filterData" list="data" onChange={getFilter} />
        <datalist id="data">
        {tags.map((item, key) =>
          <option key={key} value={item} />
        )}
      </datalist>
      <input type="text" name= "searchBar" hidden= {hidden} onKeyPress={getTarget} />
      {articles.map((article, i) => (
    <li className="travelcompany-input" key={i}>
        <span className="input-label"> {i+1}. {article.Title} Written on {article.Date} by {article.creator} and currently has {article.views} views</span> <img src= {article.Image}/> 
    </li>
))}
            \




            <div className="eventMapContainer">
                {events.map(event => {
                    return(
                        <div key={event.id} className='nametag'>
                            <h3>=======================================================</h3>
                            <h1>{event.Title}</h1>
                            <img src={event.Image} alt='Image Not Found'/>
                            <div>This event will take place on: {event.Date}</div>
                            <div>Number of people who viewed this event: {event.views}</div>
                            <div>Number of people attending this event: {event.views} **Not Set Up Yet**</div>
                            <h3>=======================================================</h3>
                        </div>
                    )
                })
                }
            </div>
        </div>

    );
}

export default App;