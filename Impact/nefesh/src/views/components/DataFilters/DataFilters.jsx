import "./DataFilters.css";
import { useEffect, useState } from "react"
import { db } from '../../../functions/firebase/config';
import { getDatabase, ref, onValue, } from "firebase/database";
import { collection, doc, orderBy, query, onSnapshot, getDocs, where, getFirestore } from 'firebase/firestore';

function DataFilters() {




    var searchOption;
    var filterOption;
    const db = getFirestore();
    const [articles, setArticles] = useState([])
    const [searchField, setSearchField] = useState('')
    const [searchFilters, setSearchFilters] = useState([])
    let eventFilters= [];





    function handleSearchByChange(ev) {
        let temp = ev.target.value
        setSearchField(temp)
    }

    async function getTarget(ev) {
        if (eventFilters.includes(ev.target.name) == true) {
            let i = eventFilters.indexOf(ev.target.name);
            eventFilters.splice(i, 1);
        }
        else {


            eventFilters.push(ev.target.name);
            console.log(ev.target.name)
            setSearchFilters(eventFilters)
            console.log(searchFilters);
        }
    }
    function getEvents(ev){
        ev.preventDefault();
        console.log(searchFilters)
        //sort through 
    }

    
    return (
        <div>
            Filters:
            <input className='searchBar' type="checkbox" name="dinner" onClick={getTarget} />Dinner
            <input className='searchBar' type="checkbox" name="60+" onClick={getTarget} />60+
            <input className='searchBar' type="checkbox" name="party" onClick={getTarget} />Party
            <input className='submitbutton' type="submit" name="submit1" onClick={getEvents} />
        </div>
    )

}
export default DataFilters;